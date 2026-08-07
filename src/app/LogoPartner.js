import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LogoPartner() {
  return (
    <div id="partner" className="container relative py-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        {/* <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal"> */}
        <h3 className="mb-4 text-2xl font-bold md:text-3xl">
          Kolaborasi & Jaringan Perusahaan
        </h3>

        <p className="max-w-xl mx-auto text-slate-400">
          Berikut di bawah ini mitra kerjasama dan jaringan perusahaan yang kami
          miliki.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-4 grid-cols-2 justify-items-center gap-[40px]">
          <Link href="https://qodr.id" target="_blank" className="py-2 mx-auto">
            <Image
              src="/images/client/logo-qodr.png"
              width={350}
              height={135}
              className="h-20"
              alt="Logo Qodr"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Link>
          <div className="py-2 mx-auto">
            <Image
              src="/images/client/logo-bencode.png"
              width={350}
              height={135}
              className="h-20"
              alt="Logo Bencode"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="py-2 mx-auto">
            <Image
              src="/images/client/logo-qodrBee.png"
              width={350}
              height={135}
              className="h-20"
              alt="Logo QodrBee"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="py-2 mx-auto">
            <Link
              href="https://menupesan.com"
              target="_blank"
              className="py-2 mx-auto"
            >
              <Image
                src="/images/client/logo-menupesan.png"
                width={350}
                height={135}
                className="h-20"
                alt="Logo Menupesan"
                sizes="100vw"
                style={{
                  width: "100%",
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
