import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import Resend from "resend";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function GET(request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    return NextResponse.json({
      status: false,
      error: "Unauthorized Access...!",
    });
  }

  if (authHeader !== process.env.API_SECRET) {
    return NextResponse.json({
      status: false,
      error: "Authorized Access Failed...!",
    });
  }

  try {
    const data = await prisma.contact.findMany();
    return NextResponse.json({ status: true, data });
  } catch (error) {
    return NextResponse.json({
      status: false,
      error: "Get Contact Failed...!",
    });
  }
}

export async function POST(request, { params }) {
  const { name, email, message } = await request.json();
  // Public endpoint for contact form submissions (no Authorization required)

  if (!name || !email || !message) {
    return NextResponse.json({
      status: false,
      error: "Semua field harus diisi",
    });
  }

  try {
    await prisma.contact.create({ data: { name, email, message } });

    const recipient =
      process.env.CONTACT_RECIPIENT || "aplikasifasto@gmail.com";
    let emailSent = false;
    let emailError = null;

    // Prefer Resend if API key is present
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from:
            process.env.EMAIL_FROM ||
            `no-reply@${(process.env.NEXT_PUBLIC_BASE_API_URL || "dtech.id").replace(/^https?:\/\//, "")}`,
          to: recipient,
          subject: `Pesan dari website: ${name}`,
          html: `<p><strong>Nama:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Pesan:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
        });
        emailSent = true;
      } catch (err) {
        emailError = String(err);
        console.error("Resend error:", err);
      }
    } else if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_FROM || process.env.SMTP_USER,
          to: recipient,
          subject: `Pesan dari website: ${name}`,
          text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
        });

        emailSent = true;
      } catch (err) {
        emailError = String(err);
        console.error("SMTP error:", err);
      }
    }

    return NextResponse.json({
      status: true,
      message: "Created successfully",
      emailSent,
      emailError,
    });
  } catch (error) {
    // console.log("ERROR: ", error);
    return NextResponse.json({
      status: false,
      error: "Create Contact Failed...!",
    });
  }
}

export async function DELETE(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    return NextResponse.json({
      status: false,
      error: "Unauthorized Access...!",
    });
  }

  if (authHeader !== process.env.API_SECRET) {
    return NextResponse.json({
      status: false,
      error: "Authorized Access Failed...!",
    });
  }

  const data = await prisma.contact.findFirst({ where: { id } });
  if (!data) {
    return NextResponse.json({
      status: false,
      message: "Tidak ada ID yang akan dihapus...!",
    });
  }

  try {
    await prisma.contact.delete({ where: { id } });
    return NextResponse.json({
      status: true,
      message: "Delete successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: false,
      error: "Delete failed",
    });
  }
}
