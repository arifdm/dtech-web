"use client";

import { Link as Link1 } from "react-scroll";

export default function Home() {
  return (
    <section
      id="home"
      className="flex items-center py-20 bg-center bg-no-repeat bg-cover md:h-screen lg:py-36"
      style={{ backgroundImage: "url('/images/landing/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 mt-10">
          <h5 className="mb-3 text-lg font-medium text-white">
            Innovate Deliver Solutions
          </h5>
          <h3 className="mb-5 text-4xl font-bold leading-normal text-white lg:leading-normal lg:text-6xl">
            Berinovasi Menghadirkan Solusi
          </h3>

          <p className="max-w-xl text-lg text-slate-300">
            Bersama Idevos, wujudkan transformasi digital dengan solusi
            inovatif, layanan berkualitas, dan jaminan kepuasan untuk setiap
            produk yang kami tawarkan kepada Anda.
          </p>

          <div className="mt-8">
            <Link1
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle transition duration-500 ease-in-out bg-blue-800 border border-blue-800 cursor-pointer hover:bg-blue-900 hover:border-blue-900"
            >
              Get Started
            </Link1>
          </div>
        </div>
      </div>
    </section>
  );
}
