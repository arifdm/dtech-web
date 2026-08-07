"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { blogData } from "../Data/data";

import { FaArrowRight } from "react-icons/fa";

export default function Product({ className }) {
  const dataProduct = [
    {
      id: 1,
      Image: "/images/product/fasto.jpg",
      title: "FASTO - Platform loyalityas & food ordering",
      desc: "Platform untuk program loyalty dan pemesanan makanan online, terintegrasi dengan sistem kasir dan pembayaran digital, cocok untuk bisnis kuliner.",
    },
    {
      id: 2,
      Image: "/images/product/DPOSPlus.jpg",
      title: "DPOS+ - POS Management System",
      desc: "Aplikasi Point of Sale (POS) dengan fitur lengkap, terintegrasi dengan FASTO untuk program loyalty dan pemesanan makanan online. Cocok untuk bisnis kuliner dan retail.",
    },
    {
      id: 3,
      Image: "/images/product/faspos.jpg",
      title: "FASPOS - POS Management System Highly Transactional",
      desc: "Aplikasi Point of Sale (POS) dengan fitur lengkap, terintegrasi dengan FASTO untuk program loyalty dan pemesanan makanan online. Cocok untuk bisnis kuliner dan retail.",
    },
  ];

  return (
    <section id="product" className="relative dark:bg-slate-800">
      <div className="container pt-20 pb-24">
        <div className="grid items-center grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-6">
            <h6 className="mb-2 text-sm font-bold text-blue-800 uppercase">
              Featured Products
            </h6>
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              SaaS & Platform
            </h3>
          </div>

          <div className="md:col-span-6">
            <p className="max-w-xl text-slate-500">
              Berikut adalah produk software yang kami kembangkan, tersedia
              melalui model langganan atau kolaborasi platform startup.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
          {dataProduct.slice(0, 3).map((data, index) => {
            return (
              <div
                className="relative overflow-hidden rounded-md shadow blog dark:shadow-gray-800"
                key={index}
              >
                <Image
                  src={data.Image}
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />

                <div className="p-6 bg-white content dark:bg-slate-900">
                  <div className="text-lg font-bold duration-500 ease-in-out title h5 hover:text-blue-800">
                    {data.title}
                  </div>
                  <p className="mt-3 text-slate-500">{data.desc}</p>
                  <div className="mt-4">
                    <Link
                      href="/"
                      className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-blue-800 after:bg-blue-800 duration-500 text-blue-700"
                    >
                      Read More <FaArrowRight className="ms-2 text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
