"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Footer() {
  const footerLinks = [
    {
      route: "/",
      title: "Testimonial",
      liClass: "mt-[10px]",
    },
    {
      route: "/",
      title: "Partner",
      liClass: "mt-[10px]",
    },
    {
      route: "/",
      title: "Privacy Policy",
      liClass: "mt-[10px]",
    },
  ];

  const footerCompany = [
    {
      route: "/",
      title: "About us",
      liClass: "",
    },
    {
      route: "/",
      title: "Services",
      liClass: "mt-[10px]",
    },
    {
      route: "/",
      title: "Benefit",
      liClass: "mt-[10px]",
    },
    {
      route: "/",
      title: "Product",
      liClass: "mt-[10px]",
    },
  ];

  return (
    <div>
      <footer className="relative text-gray-200 footer bg-dark-footer dark:text-gray-200">
        <div className="container relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link href="/#" className="text-[22px] focus:outline-none">
                      <Image
                        src="/images/logo-light.png"
                        width={138}
                        height={24}
                        alt=""
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </Link>
                    <p className="mt-6 text-gray-300">
                      Kami berkomitmen menjadi mitra terpercaya dalam
                      menghadirkan solusi teknologi yang inovatif, berkualitas,
                      dan kompetitif bagi bisnis Anda
                    </p>
                    <ul className="mt-5 space-x-1 space-y-1 list-none">
                      <li className="inline">
                        <Link
                          href="http://linkedin.com/company"
                          target="_blank"
                          className="inline-flex items-center justify-center text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md size-10 hover:border-blue-800 dark:hover:border-blue-800 hover:bg-blue-900 dark:hover:bg-blue-900"
                        >
                          <FaLinkedin className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://www.facebook.com"
                          target="_blank"
                          className="inline-flex items-center justify-center text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md size-10 hover:border-blue-800 dark:hover:border-blue-800 hover:bg-blue-900 dark:hover:bg-blue-900"
                        >
                          <FaFacebookF className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="inline-flex items-center justify-center text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md size-10 hover:border-blue-800 dark:hover:border-blue-800 hover:bg-blue-900 dark:hover:bg-blue-900"
                        >
                          <FaInstagram className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://twitter.com"
                          target="_blank"
                          className="inline-flex items-center justify-center text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md size-10 hover:border-blue-800 dark:hover:border-blue-800 hover:bg-blue-900 dark:hover:bg-blue-900"
                        >
                          <FaTwitter className="text-sm" />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Links
                    </h5>
                    <ul className="mt-6 list-none footer-list">
                      {footerCompany.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            className="flex items-center text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4 md:mt-6">
                    {/* <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Usefull Links
                    </h5> */}
                    <ul className="mt-6 list-none footer-list">
                      {footerLinks.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            className="flex items-center text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Hubungi Kami
                    </h5>
                    <p className="mt-6 text-sm text-gray-400">
                      Silakan hubungi kami melalui kontak di bawah ini
                    </p>
                    <div className="mt-2 text-sm text-gray-400">
                      Call & Message:
                    </div>
                    <p className="font-bold text-gray-300">0897 5835 238</p>
                    <div className="mt-1 text-sm text-gray-400">Email:</div>
                    <p className="font-bold text-gray-300">contact@idevos.id</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[30px] px-0 border-t border-slate-700">
          <div className="container relative text-center">
            <div className="grid items-center md:grid-cols-2">
              <div className="text-center md:text-start">
                <p className="mb-0 text-gray-500">
                  © {new Date().getFullYear()}{" "}
                  <span className="font-semibold text-gray-400">IDEVOS</span>.
                  All Rights Reserved.
                </p>
              </div>
              <div className="text-center text-gray-500 md:text-end">
                Yogyakarta - Indonesia
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
