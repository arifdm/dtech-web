import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LogoProducts() {
  return (
    <div
      id="partner"
      className="relative py-12 lg:py-16 lg:px-0 px-6 dark:bg-slate-800 border-t border-slate-200"
    >
      {/* <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal" />
        <h3 className="mb-4 text-2xl font-bold md:text-3xl">
          Our Products & Platforms
        </h3>
        <p className="max-w-3xl mx-auto text-slate-400">
          Berikut di bawah ini produk dan platform yang kami kembangkan untuk
          membantu bisnis Anda bertransformasi dan berkembang lebih pesat.
        </p>
      </div> */}
      <div className="flex justify-center">
        <div className="grid md:grid-cols-4 grid-cols-2 justify-items-center gap-[30px] lg:gap-[60px]">
          <Link
            href="https://www.fasto.id"
            target="_blank"
            className="py-2 mx-auto"
          >
            <Image
              src="/images/client/fasto.png"
              width={200}
              height={80}
              className="w-[200px] h-auto object-contain filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              alt="Logo FASTO"
              sizes="100vw"
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </Link>
          <div className="py-2 mx-auto">
            <Image
              src="/images/client/dpos.png"
              width={200}
              height={80}
              className="w-[200px] h-auto object-contain filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              alt="Logo DPOS+"
              sizes="100vw"
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </div>
          <div className="py-2 mx-auto">
            <Image
              src="/images/client/support.png"
              width={200}
              height={80}
              className="w-[200px] h-auto object-contain filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              alt="Logo Support"
              sizes="100vw"
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </div>
          <div className="py-2 mx-auto">
            <Link
              href="https://www.faspos.id"
              target="_blank"
              className="py-2 mx-auto"
            >
              <Image
                src="/images/client/faspos.png"
                width={200}
                height={80}
                className="w-[200px] h-auto object-contain filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                alt="Logo FASPOS"
                sizes="100vw"
                style={{
                  width: "200px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
