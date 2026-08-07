"use client";
import Image from "next/image";
import Link from "next/link";

import * as Icon from "react-feather";

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
      title: "Terms of Services",
      liClass: "",
    },
    {
      route: "/",
      title: "Privacy Policy",
      liClass: "mt-[10px]",
    },
    {
      route: "/",
      title: "Documentation",
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
      title: "Features",
      liClass: "mt-[10px]",
    },
    {
      route: "/",
      title: "Testimonial",
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
                          height: "auto"
                        }} />
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
                      Company
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

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Usefull Links
                    </h5>
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
                      Newsletter
                    </h5>
                    <p className="mt-6">
                      Daftar dan terima informasi terbaru melalui email.
                    </p>
                    <form>
                      <div className="grid grid-cols-1">
                        <div className="my-3 foot-subscribe">
                          <label className="form-label">
                            Masukkan email Anda
                          </label>
                          <div className="relative mt-2 form-icon">
                            <Icon.Mail className="absolute size-4 top-3 start-4" />
                            <input
                              type="email"
                              className="w-full h-10 px-3 py-2 text-gray-100 bg-gray-800 border-0 rounded form-input ps-12 focus:shadow-none focus:ring-0"
                              placeholder="Email"
                              name="email"
                              required=""
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          id="submitsubscribe"
                          name="send"
                          className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-blue-900 border border-blue-800 rounded-md hover:bg-blue-900 hover:border-blue-900"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
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
                  <span className="font-semibold text-gray-400">Idevos</span>.
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
