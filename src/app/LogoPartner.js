import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LogoPartner() {
  return (
    <div id="partner" className="relative pt-12 lg:pt-16 dark:bg-slate-800">
      <div className="grid grid-cols-1 text-center lg:mb-0 mb-8">
        <h3 className="text-2xl font-bold md:text-3xl">Our Partners</h3>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-5 grid-cols-3 px-4 lg:px-0 justify-items-center items-center gap-x-[30px] lg:gap-x-[40px]">
          <div className="mx-auto">
            <Link
              href="https://www.dbesto.co.id"
              target="_blank"
              className="py-2 mx-auto"
            >
              <Image
                src="/images/brands/dbesto.png"
                width={200}
                height={80}
                className="w-[200px]"
                alt="Logo DBESTO"
                sizes="100vw"
                style={{
                  width: "200px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
          <div className="mx-auto">
            <Link
              href="https://www.lazatto.co.id"
              target="_blank"
              className="py-2 mx-auto"
            >
              <Image
                src="/images/brands/lazatto.png"
                width={200}
                height={80}
                className="w-[200px]"
                alt="Logo LAZATTO"
                sizes="100vw"
                style={{
                  width: "200px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
          <div className="mx-auto">
            <Image
              src="/images/brands/droasting.png"
              width={200}
              height={80}
              className="w-[200px]"
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
              className="w-[200px]"
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
              className="w-[200px]"
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
