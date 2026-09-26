import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LogoPartner() {
  return (
    <div
      id="partner"
      className="relative py-12 lg:py-16 lg:px-0 px-6 dark:bg-slate-800 border-t border-slate-200"
    >
      <div className="grid grid-cols-1 text-center">
        <h3 className="text-2xl font-bold md:text-3xl">
          Our Brand and Partners
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 justify-items-center items-center gap-[30px] lg:gap-[60px]">
          <div className="mx-auto">
            <Image
              src="/images/brands/dbesto.png"
              width={200}
              height={80}
              className="w-[200px] h-auto object-contain transition duration-300 ease-in-out"
              alt="Logo DBESTO"
              sizes="100vw"
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </div>
          <div className="mx-auto">
            <Image
              src="/images/brands/lazatto.png"
              width={200}
              height={80}
              className="w-[200px] h-auto object-contain transition duration-300 ease-in-out"
              alt="Logo LAZATTO"
              sizes="100vw"
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </div>
          <div className="mx-auto">
            <Image
              src="/images/brands/droasting.png"
              width={200}
              height={80}
              className="w-[200px] h-auto object-contain transition duration-300 ease-in-out"
              alt="Logo DROASTING"
              sizes="100vw"
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </div>
          <div className="mx-auto">
            <Image
              src="/images/brands/dbestmie.png"
              width={200}
              height={80}
              className="w-[200px] h-auto object-contain transition duration-300 ease-in-out"
              alt="Logo DBESTMIE"
              sizes="100vw"
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </div>
          <div className="mx-auto">
            <Image
              src="/images/brands/dbakso.png"
              width={200}
              height={80}
              className="w-[200px] h-auto object-contain transition duration-300 ease-in-out"
              alt="Logo DBAKSO"
              sizes="100vw"
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
