"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { blogData } from "../Data/data";

import { FaArrowRight } from "react-icons/fa";

const modalStyle = {
  animation: "zoomInModal 0.25s ease-out forwards",
};

export default function Product({ className }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => setSelectedImage(image);
  const closeImageModal = () => setSelectedImage(null);

  const dataProduct = [
    {
      id: 1,
      Image: "/images/product/fasto.jpg",
      title: "FASTO - Platform loyalityas & food ordering",
      desc: "Platform untuk program loyalty dan pemesanan makanan online, terintegrasi dengan sistem kasir dan pembayaran digital, cocok untuk bisnis kuliner.",
    },
    {
      id: 2,
      Image: "/images/product/DPOS.jpg",
      title: "DPOS+ - POS Management System",
      desc: "Aplikasi Point of Sale (POS) dengan fitur lengkap, terintegrasi dengan FASTO. Cocok untuk bisnis kuliner dan retail yang ingin meningkatkan penjualan dan efisiensi operasional.",
    },
    {
      id: 3,
      Image: "/images/no-image.png",
      title: "FASPOS - POS Highly Transactional",
      desc: "Aplikasi Point of Sale (POS) dengan fitur lengkap, terintegrasi dengan FASTO untuk program loyalty dan pemesanan makanan online. Cocok untuk bisnis kuliner dan retail.",
    },
    {
      id: 4,
      Image: "/images/product/HRM.jpg",
      title: "Human Resource Management",
      desc: "Platform manajemen sumber daya manusia (SDM) yang membantu perusahaan dalam mengelola karyawan, absensi, cuti, dan penggajian secara efisien.",
    },
    {
      id: 5,
      Image: "/images/product/FRM.jpg",
      title: "Finance Resource Management",
      desc: "Finance & Cash Management Platform yang membantu perusahaan dalam mengelola keuangan, arus kas, dan laporan keuangan secara efisien dan akurat.",
    },
    {
      id: 6,
      Image: "/images/product/Support.jpg",
      title: "Support Management",
      desc: "Platform manajemen dukungan pelanggan yang membantu perusahaan dalam mengelola tiket dukungan, komunikasi dengan pelanggan, dan pemecahan masalah secara efisien.",
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
              Latest Products & Services
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
          {dataProduct.slice(0, 6).map((data, index) => {
            return (
              <div
                className="relative overflow-hidden rounded-md shadow blog dark:shadow-gray-800"
                key={index}
              >
                <Image
                  src={data.Image}
                  width={800}
                  height={500}
                  alt={data.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-auto object-cover cursor-zoom-in"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                  }}
                  onClick={() => openImageModal(data.Image)}
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300"
          onClick={closeImageModal}
        >
          <div
            className="relative w-full max-w-5xl rounded-lg bg-white p-3 shadow-2xl"
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeImageModal}
              className="absolute right-2 top-2 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-700 shadow hover:bg-white"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Gambar produk yang diperbesar"
              className="max-h-[80vh] w-full rounded-md object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
