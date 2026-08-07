import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componets/Navbar/navbar";
import Footer from "../componets/Footer/footer";
import Switcher from "../componets/switcher";
import CookieModal from "../componets/cookieModal";
import ClientsOne from "../componets/clientsOne";
import VideoModal from "../componets/videoModal/videoModal";
import MarketingCounter from "../componets/counter/marketingCounter";

import { contactData } from "../Data/data";

import * as Icon from "react-feather";
import { FaArrowRight, BsCheckCircle } from "../assets/icons/icons";

export default function Marketing() {
  return <>
    <Navbar />

    <section className="relative table w-full md:py-44 py-36">
      <div className="absolute inset-0 bg-indigo-600/5"></div>
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
          <div className="md:col-span-7">
            <div className="md:me-6">
              <span className="font-medium text-indigo-600">
                Techwind Marketing
              </span>
              <h4 className="mb-5 text-4xl font-bold leading-normal lg:leading-normal lg:text-5xl">
                Increase Your Business <br /> With Techwind
              </h4>
              <p className="max-w-xl text-lg text-slate-400">
                Launch your campaign and benefit from our expertise on
                designing and managing conversion centered Tailwind CSS v3.x
                html page.
              </p>
              <div className="mt-6 mb-3 subcribe-form">
                <form className="relative max-w-xl">
                  <input
                    type="email"
                    id="subcribe"
                    name="email"
                    className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                    placeholder="Your Email Address :"
                  />
                  <button
                    type="submit"
                    className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full"
                  >
                    Try it for free
                    <FaArrowRight className="ms-2 text-[10px]" />
                  </button>
                </form>
              </div>
              <span className="font-medium text-slate-400">
                Looking for help?{" "}
                <Link href="#" className="text-indigo-600">
                  Get in touch with us
                </Link>
              </span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative">
              <Image
                src="/images/marketing.png"
                width={0}
                height={0}
                alt=""
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <VideoModal />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-10 bg-indigo-600">
      <div className="container relative">
        <MarketingCounter />
      </div>
    </section>

    <section className="relative py-16 md:py-24">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
          <div className="lg:col-span-8 md:col-span-12">
            <div className="grid grid-cols-1 pb-8">
              <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
                Instant Smart Solutions <br /> With Techwind
              </h3>

              <p className="max-w-xl text-slate-400">
                Launch your campaign and benefit from our expertise on
                designing and managing conversion centered Tailwind CSS v3.x
                html page.
              </p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
              <div className="px-6 py-10 transition duration-500 bg-white shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.Codesandbox className="text-indigo-600 stroke-1 size-12"></Icon.Codesandbox>
                <div className="content mt-7">
                  <Link
                    href="/page-services"
                    className="text-lg font-medium title h5 hover:text-indigo-600"
                  >
                    User Friendly
                  </Link>
                  <p className="mt-3 text-slate-400">
                    The phrasal sequence of the is now so that many campaign
                    and benefit
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/page-services"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                    >
                      Read More <FaArrowRight className="ms-2 text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-6 py-10 transition duration-500 bg-white shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.Send className="text-indigo-600 stroke-1 size-12"></Icon.Send>

                <div className="content mt-7">
                  <Link
                    href="/page-services"
                    className="text-lg font-medium title h5 hover:text-indigo-600"
                  >
                    Super Fast
                  </Link>
                  <p className="mt-3 text-slate-400">
                    The phrasal sequence of the is now so that many campaign
                    and benefit
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/page-services"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                    >
                      Read More
                      <FaArrowRight className="ms-2 text-[10px]" />{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-6 py-10 transition duration-500 bg-white shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.Star className="text-indigo-600 stroke-1 size-12"></Icon.Star>

                <div className="content mt-7">
                  <Link
                    href="/page-services"
                    className="text-lg font-medium title h5 hover:text-indigo-600"
                  >
                    Insightful Analytics
                  </Link>
                  <p className="mt-3 text-slate-400">
                    The phrasal sequence of the is now so that many campaign
                    and benefit
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/page-services"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                    >
                      Read More
                      <FaArrowRight className="ms-2 text-[10px]" />{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-6 py-10 transition duration-500 bg-white shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.Bookmark className="text-indigo-600 stroke-1 size-12"></Icon.Bookmark>

                <div className="content mt-7">
                  <Link
                    href="/page-services"
                    className="text-lg font-medium title h5 hover:text-indigo-600"
                  >
                    Highly Rated
                  </Link>
                  <p className="mt-3 text-slate-400">
                    The phrasal sequence of the is now so that many campaign
                    and benefit
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/page-services"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
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
              <div className="px-6 py-10 transition duration-500 bg-white shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.Users className="text-indigo-600 stroke-1 size-12"></Icon.Users>

                <div className="content mt-7">
                  <Link
                    href="/page-services"
                    className="text-lg font-medium title h5 hover:text-indigo-600"
                  >
                    User Forum Forum
                  </Link>
                  <p className="mt-3 text-slate-400">
                    The phrasal sequence of the is now so that many campaign
                    and benefit
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/page-services"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                    >
                      Read More
                      <FaArrowRight className="ms-2 text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-6 py-10 transition duration-500 bg-white shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-2xl dark:bg-slate-900">
                <Icon.MessageCircle className="text-indigo-600 stroke-1 size-12"></Icon.MessageCircle>

                <div className="content mt-7">
                  <Link
                    href="/page-services"
                    className="text-lg font-medium title h5 hover:text-indigo-600"
                  >
                    24/7 Support
                  </Link>
                  <p className="mt-3 text-slate-400">
                    The phrasal sequence of the is now so that many campaign
                    and benefit
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/page-services"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                    >
                      Read More <FaArrowRight className="ms-2 text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-2/4 after:start-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
          <div className="overflow-hidden after:content-[''] after:absolute after:size-[512px] after:bg-indigo-600/5 after:top-1/4 after:end-0 after:-z-1 after:rounded-full"></div>
        </div>
      </div>

      <div className="container relative mt-16 md:mt-24">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-6">
            <div className="lg:me-8">
              <Image
                src="/images/shape-image.png"
                width={0}
                height={0}
                alt=""
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="lg:ms-5">
              <h6 className="mb-2 text-sm font-bold text-indigo-600 uppercase">
                Fast & Effective
              </h6>
              <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
                Powerful Digitalization <br /> With Techwind
              </h3>

              <p className="max-w-xl mb-6 text-slate-400">
                Get instant helpful resources about anything on the go, easily
                implement secure money transfer solutions, boost your daily
                efficiency, connect to other app users and create your own
                Techwind network, and much more with just a few taps. commodo
                consequat. Duis aute irure.
              </p>

              <Link
                href="#"
                className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-indigo-600 align-middle transition duration-500 ease-in-out border rounded-full bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 hover:text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative mt-16 md:mt-24">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="order-1 md:col-span-6 md:order-2">
            <div className="lg:ms-8">
              <Image
                src="/images/illustrator/SEO_SVG.svg"
                width={0}
                height={0}
                alt=""
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>

          <div className="md:col-span-6 order2 md:order-1">
            <div className="lg:me-5">
              <h6 className="mb-2 text-sm font-bold text-indigo-600 uppercase">
                Easy To Track
              </h6>
              <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
                Techwind Marketing <br /> Analytics For All Expenses
              </h3>

              <p className="max-w-xl text-slate-400">
                You can combine all the Techwind templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>

              <ul className="my-6 list-none text-slate-400">
                <li className="flex items-center mb-1">
                  <BsCheckCircle className="text-base text-indigo-600 me-2" />{" "}
                  Digital Marketing Solutions for Tomorrow
                </li>
                <li className="flex items-center mb-1">
                  <BsCheckCircle className="text-base text-indigo-600 me-2" />{" "}
                  Our Talented & Experienced Marketing Agency
                </li>
                <li className="flex items-center mb-1">
                  <BsCheckCircle className="text-base text-indigo-600 me-2" />{" "}
                  Create your own skin to match your brand
                </li>
              </ul>

              <Link
                href="#"
                className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-indigo-600 align-middle transition duration-500 ease-in-out border rounded-full bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 hover:text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-16 md:py-24 bg-gray-50 dark:bg-slate-800">
      <ClientsOne />
    </section>

    <section className="relative py-16 overflow-hidden md:py-24">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="lg:me-8">
              <div className="relative">
                <Image
                  src="/images/feature.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className="overflow-hidden absolute h-[512px] w-[512px] bg-indigo-600/5 top-1/4 start-0 end-0 align-middle -z-1 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 md:col-span-6">
            <div className="lg:ms-5">
              <div className="p-6 bg-white rounded-md shadow dark:bg-slate-900 dark:shadow-gray-800">
                <h3 className="mb-6 text-2xl font-medium leading-normal">
                  Get in touch !
                </h3>

                <form>
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="mb-5 lg:col-span-6">
                      <div className="text-start">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <div className="relative mt-2 form-icon">
                          <Icon.User className="absolute size-4 top-3 start-4"></Icon.User>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Name :"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 lg:col-span-6">
                      <div className="text-start">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <div className="relative mt-2 form-icon">
                          <Icon.Mail className="absolute size-4 top-3 start-4"></Icon.Mail>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Email :"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <div className="text-start">
                        <label htmlFor="subject" className="font-semibold">
                          Your Question:
                        </label>
                        <div className="relative mt-2 form-icon">
                          <Icon.Book className="absolute size-4 top-3 start-4"></Icon.Book>
                          <input
                            name="subject"
                            id="subject"
                            className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Subject :"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="text-start">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <div className="relative mt-2 form-icon">
                          <Icon.MessageCircle className="absolute size-4 top-3 start-4"></Icon.MessageCircle>
                          <textarea
                            name="comments"
                            id="comments"
                            className="w-full px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 h-28 dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Message :"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="flex items-center justify-center px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
          {contactData.map((item, index) => {
            let Icons = item.icon;
            return (
              <div className="px-6 text-center" key={index}>
                <div className="flex items-center justify-center w-20 h-20 mx-auto text-3xl text-indigo-600 align-middle shadow-sm bg-indigo-600/5 rounded-xl dark:shadow-gray-800">
                  <Icons className="size-[24px]" />
                </div>

                <div className="content mt-7">
                  <h5 className="text-xl font-semibold">{item.name}</h5>
                  <p className="mt-3 text-slate-400">{item.desc}</p>

                  <div className="mt-5">
                    <Link href="#" className="font-medium text-indigo-600">
                      {item.title}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <Footer />
    <Switcher />
    <Switcher />
    <CookieModal />
  </>;
}
