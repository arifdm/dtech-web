import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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

  if (!name || !email || !message) {
    return NextResponse.json({
      status: false,
      error: "Semua field harus diisi",
    });
  }

  try {
    await prisma.contact.create({ data: { name, email, message } });
    // console.log("DATA_USER: ", dataUser);

    return NextResponse.json({
      status: true,
      message: "Created successfully",
      // data: dataUser,
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
