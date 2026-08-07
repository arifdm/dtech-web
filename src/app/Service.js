import Link from "next/link";
import * as Icon from "react-feather";
import { BsCheckCircle, FaArrowRight } from "./assets/icons/icons";

export default function Service() {
  return (
    <section id="service" className="relative pt-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
          <div className="lg:col-span-8 md:col-span-12">
            <div className="grid grid-cols-1 pb-8">
              <h6 className="mb-2 text-sm font-bold text-blue-800 uppercase">
                Services & Solutions
              </h6>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Dengan sentuhan desain elegan, menggunakan teknologi terkini
                yang handal dan aman
              </h3>

              <p className="max-w-xl text-slate-500">
                Pengalaman yang cukup, membuat kami berkomitmen untuk
                menghadirkan solusi teknologi yang handal dan berkualitas.
                Berikut di bawah ini layanan dan produk yang kami sediakan:
              </p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
              <div className="px-6 py-10 transition duration-500 bg-blue-800 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.Codesandbox className="text-blue-200 stroke-1 size-12"></Icon.Codesandbox>
                <div className="content mt-7">
                  <div className="text-lg font-bold text-white title h5">
                    Mobile Apps Development
                  </div>
                  <p className="mt-3 text-slate-400">
                    Pembuatan aplikasi mobile (Andoroid & iOS) yang menarik dan
                    aman
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-blue-300 hover:text-blue-300 after:bg-blue-300 duration-500"
                    >
                      Read More <FaArrowRight className="ms-2 text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-6 py-10 transition duration-500 bg-white shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.Send className="text-blue-800 stroke-1 size-12"></Icon.Send>

                <div className="content mt-7">
                  <div className="text-lg font-bold title h5">
                    Web Apps Development
                  </div>
                  <p className="mt-3 text-slate-500">
                    Pembuatan aplikasi berbasis web yang menarik dan handal
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-blue-800 hover:text-blue-800 after:bg-blue-800 duration-500"
                    >
                      Read More
                      <FaArrowRight className="ms-2 text-[10px]" />{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-6 py-10 transition duration-500 bg-white shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.Star className="text-blue-800 stroke-1 size-12"></Icon.Star>

                <div className="content mt-7">
                  <div className="text-lg font-bold title h5">
                    Desktop Apps Development
                  </div>
                  <p className="mt-3 text-slate-500">
                    Pembuatan aplikasi desktop (di install sebelum digunakan)
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-blue-800 hover:text-blue-800 after:bg-blue-800 duration-500"
                    >
                      Read More
                      <FaArrowRight className="ms-2 text-[10px]" />{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-6 py-10 transition duration-500 bg-white shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.Bookmark className="text-blue-800 stroke-1 size-12"></Icon.Bookmark>

                <div className="content mt-7">
                  <div className="text-lg font-bold title h5">
                    Saas Development
                  </div>
                  <p className="mt-3 text-slate-500">
                    Produk aplikasi web untuk kebutuhan bisnis dengan cara
                    berlangganan
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-blue-800 hover:text-blue-800 after:bg-blue-800 duration-500"
                    >
                      Read More <FaArrowRight className="ms-2 text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 md:col-span-12">
            <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
              <div className="px-6 py-10 transition duration-500 bg-white shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.Users className="text-blue-800 stroke-1 size-12"></Icon.Users>

                <div className="content mt-7">
                  <div className="text-lg font-bold title h5">
                    Digital Talent Provider
                  </div>
                  <p className="mt-3 text-slate-500">
                    Menyediakan Programmer/UI Designer yang kompeten dan
                    terpercaya
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-blue-800 hover:text-blue-800 after:bg-blue-800 duration-500"
                    >
                      Read More
                      <FaArrowRight className="ms-2 text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-6 py-10 transition duration-500 bg-white shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.MessageCircle className="text-blue-800 stroke-1 size-12"></Icon.MessageCircle>

                <div className="content mt-7">
                  <div className="text-lg font-bold title h5">
                    Platform Marketplace
                  </div>
                  <p className="mt-3 text-slate-500">
                    Platform marketplace untuk mempertemukan penyedia dengan
                    pemesan
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-blue-800 hover:text-blue-800 after:bg-blue-800 duration-500"
                    >
                      Read More <FaArrowRight className="ms-2 text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-2/4 after:start-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
          <div className="overflow-hidden after:content-[''] after:absolute after:size-[512px] after:bg-blue-800/5 after:top-1/4 after:end-0 after:-z-1 after:rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
