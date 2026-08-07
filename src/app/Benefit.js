import Image from "next/image";
import { BsCheckCircle, FaArrowRight } from "./assets/icons/icons";

export default function Benefit() {
  return (
    <section id="feature" className="relative pb-16">
      <div className="container my-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
          <div className="relative">
            <div className="md:me-10">
              <Image
                src="/images/landing/about.jpg"
                width={0}
                height={0}
                placeholder="blur"
                blurDataURL="/images/landing/about.jpg"
                className="rounded-lg shadow-md dark:shadow-gray-800"
                alt=""
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="absolute p-6 bg-white rounded-lg shadow-md -bottom-10 end-0 dark:shadow-gray-800 dark:bg-slate-900 md:w-80 w-60">
              <h5 className="mb-3 text-lg font-semibold">Kepuasan Pelanggan</h5>
              <p className="text-slate-400">
                Seberapa puas pelanggan terhadap layanan yang kami berikan.
              </p>
              <div className="flex justify-between mt-3 mb-2">
                <span className="text-blue-800">Kepuasan</span>
                <span className="text-blue-800">89%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                <div
                  className="bg-blue-800 h-[6px] rounded-full"
                  style={{ width: "89%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:ms-8 md:mt-0">
            <h6 className="mb-2 text-sm font-bold text-blue-800 uppercase">
              Benefits
            </h6>
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Keunggulan Idevos dalam Pengembangan Software
            </h3>
            <p className="text-slate-400">
              Sebagai perusahaan yang telah beroperasi lebih dari satu dekade di
              industri teknologi informasi, kami menawarkan solusi pengembangan
              software yang handal, inovatif, dan disesuaikan dengan kebutuhan
              klien. Dengan pengalaman luas dan relasi yang kuat, kami siap
              membantu perusahaan Anda dalam mengoptimalkan teknologi untuk
              mencapai tujuan bisnis. Berikut adalah beberapa keunggulan utama
              kami:
            </p>
            <div className="my-6 font-semibold text-grey-500">
              <p className="flex flex-row items-center py-1 font-semibold text-slate-500">
                <BsCheckCircle className="mr-2 text-xl" /> Pengalaman dan
                Kolaborasi
              </p>
              <p className="flex flex-row items-center py-1 font-semibold text-slate-500">
                <BsCheckCircle className="mr-2 text-xl" /> Adaptasi Teknologi
                Terkini
              </p>
              <p className="flex flex-row items-center py-1 font-semibold text-slate-500">
                <BsCheckCircle className="mr-2 text-xl" /> Tim Kompeten dan
                Solid
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
