import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componets/Navbar/navbar";
import Footer from "../componets/Footer/footer";
import Switcher from "../componets/switcher";
import CookieModal from "../componets/cookieModal";
import CompanyLogo from "../componets/companyLogo";
import BlogTwo from "../componets/blogTwo";
import TeamData from "../componets/team";
import VideoModal from "../componets/videoModal/videoModal";
import LowOffice from "../componets/low-office";
import VideoModalTwo from "../componets/videoModal/videoModalTwo";

import * as Icon from "react-feather";

import {
  BsCheckCircle,
  MdKeyboardArrowRight,
  FaRegEnvelope,
  LiaUniversitySolid,
  LiaMoneyBillAltSolid,
  LiaAwardSolid,
} from "../assets/icons/icons";
import { lowClient } from "../Data/dataThree";

export default function IndexLow() {
  return <>
    <Navbar navClass="nav-light" />

    <section
      className="flex items-center bg-center bg-no-repeat bg-cover md:h-screen py-36"
      style={{ backgroundImage: "url('/images/corporate/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 mt-10">
          <h5 className="mb-3 text-lg font-medium text-white">
            Best Law Firm
          </h5>
          <h3 className="mb-5 text-4xl font-bold leading-normal text-white lg:leading-normal lg:text-5xl">
            Unbelievable solutions <br /> for all legal cases
          </h3>

          <p className="max-w-xl text-lg text-slate-300">
            Create, collaborate, and turn your ideas into incredible products
            with the definitive platform for digital design.
          </p>

          <div className="mt-8">
            <Link
              href="#"
              className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle transition duration-500 ease-in-out bg-indigo-600 border border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-16 overflow-hidden md:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <div className="relative p-6 overflow-hidden text-center transition-all duration-500 ease-in-out bg-white group hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:bg-slate-900">
            <div className="flex items-center justify-center w-20 h-20 mx-auto text-2xl text-white align-middle bg-indigo-600 rounded-full shadow-sm group-hover:bg-white group-hover:text-indigo-600 dark:shadow-gray-800 dark:group-hover:shadow-gray-700">
              <LiaUniversitySolid className="size-7" />
            </div>

            <div className="mt-6">
              <Link
                href="#"
                className="text-lg font-medium transition-all duration-500 ease-in-out group-hover:text-white"
              >
                Professional Court Service
              </Link>
              <p className="mt-3 transition-all duration-500 ease-in-out text-slate-400 group-hover:text-white/75">
                Competently leverage existing enterprise wide niches through
                stand alone services. Quickly productize technically.
              </p>
            </div>
          </div>

          <div className="relative p-6 overflow-hidden text-center transition-all duration-500 ease-in-out bg-indigo-600 group dark:hover:bg-indigo-600">
            <div className="flex items-center justify-center w-20 h-20 mx-auto text-2xl text-indigo-600 align-middle bg-white rounded-full shadow-sm dark:shadow-gray-600">
              <LiaMoneyBillAltSolid className="size-7" />
            </div>

            <div className="mt-6">
              <Link
                href="#"
                className="text-lg font-medium text-white transition-all duration-500 ease-in-out"
              >
                Competitive Pricing
              </Link>
              <p className="mt-3 transition-all duration-500 ease-in-out text-white/75">
                Competently leverage existing enterprise wide niches through
                stand alone services. Quickly productize technically.
              </p>
            </div>
          </div>

          <div className="relative p-6 overflow-hidden text-center transition-all duration-500 ease-in-out bg-white group hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:bg-slate-900">
            <div className="flex items-center justify-center w-20 h-20 mx-auto text-2xl text-white align-middle bg-indigo-600 rounded-full shadow-sm group-hover:bg-white group-hover:text-indigo-600 dark:shadow-gray-800 dark:group-hover:shadow-gray-700">
              <LiaAwardSolid className="size-7" />
            </div>

            <div className="mt-6">
              <Link
                href="#"
                className="text-lg font-medium transition-all duration-500 ease-in-out group-hover:text-white"
              >
                Top Expart Attorney
              </Link>
              <p className="mt-3 transition-all duration-500 ease-in-out text-slate-400 group-hover:text-white/75">
                Competently leverage existing enterprise wide niches through
                stand alone services. Quickly productize technically.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative mt-16 md:mt-24">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="relative">
              <div className="relative">
                <Image
                  src="/images/law/ab1.jpg"
                  width={0}
                  height={0}
                  className="lg:w-[400px] w-[280px]"
                  alt=""
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <VideoModalTwo />
              </div>
              <div className="absolute -end-5 -bottom-16">
                <Image
                  src="/images/law/ab2.jpg"
                  width={0}
                  height={0}
                  className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900"
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
          </div>

          <div className="mt-8 lg:col-span-7 md:col-span-6 md:mt-0">
            <div className="lg:ms-5">
              <h3 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
                Welcome to Techwind <br /> Law Firm Company
              </h3>

              <p className="max-w-xl text-slate-400">
                Start working with Tailwind CSS that can provide everything
                you need to generate awareness, drive traffic, connect. Dummy
                text is text that is used in the publishing industry or by web
                designers to occupy the space which will later be filled with
                real content.
              </p>

              <ul className="mt-4 list-none text-slate-400">
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

              <div className="mt-6">
                <Link
                  href="/contact-one"
                  className="inline-flex items-center px-5 py-2 mt-2 text-base font-semibold tracking-wide text-center text-white align-middle transition duration-500 ease-in-out bg-indigo-600 border border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 me-2"
                >
                  <FaRegEnvelope className="text-sm me-2" /> Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative pt-16 mt-16 md:mt-24">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
            We provide Different types of office
          </h3>

          <p className="max-w-xl mx-auto text-slate-400">
            Start working with Tailwind CSS that can provide everything you
            need to generate awareness, drive traffic, connect.
          </p>
        </div>
      </div>

      <div className="relative container-fluid">
        <div className="relative flex justify-center mt-8">
          <div className="relative w-full">
            <LowOffice />
          </div>
        </div>
      </div>
    </section>

    <section
      className="relative table w-full pt-20 pb-32 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/business/bg02.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 text-center">
          <h3 className="mb-4 text-2xl font-medium text-white md:text-3xl">
            Speak With Our Expert <br /> Lawyers Today!
          </h3>

          <p className="max-w-xl mx-auto mb-0 text-white/80">
            Start working with Techwind that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>

          <div className="mt-6">
            <Link
              href="#"
              className="inline-block px-5 py-2 mt-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700 me-2"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>

    <div className="container relative">
      <div className="grid grid-cols-1">
        <div className="relative -top-[52px] shadow dark:shadow-gray-800 py-6 bg-white dark:bg-slate-900">
          <CompanyLogo />
        </div>
      </div>
    </div>

    <section className="relative pt-3 pb-16 overflow-hidden md:pt-11 md:pb-24">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
          <div className="order-1 lg:col-span-5 md:order-2">
            <div className="relative lg:ms-10">
              <div className="p-6 bg-white rounded-md shadow dark:bg-slate-900 dark:shadow-gray-800">
                <h3 className="mb-6 text-2xl font-medium leading-normal">
                  Free Consultation
                </h3>

                <form>
                  <div className="grid grid-cols-1 gap-4">
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

                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="flex items-center justify-center px-5 py-2 mt-3 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
            </div>
          </div>

          <div className="order-2 lg:col-span-7 md:order-1">
            <h4 className="mb-4 text-2xl font-medium leading-normal">
              We Are Ready To Help <br /> You To Get a Solution.
            </h4>
            <p className="text-slate-400">
              Due to its widespread use as filler text for layouts,
              non-readability is of great importance: human perception is
              tuned to recognize certain patterns and repetitions in texts. If
              the distribution of letters visual impact.
            </p>
            <ul className="mt-4 list-none text-slate-400">
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

            <div className="mt-4">
              <Link
                href="/page-aboutus"
                className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
              >
                Find Out More{" "}
                <MdKeyboardArrowRight className="text-xl ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative mt-16 md:mt-24">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
            Clients Testimonials
          </h3>

          <p className="max-w-xl mx-auto text-slate-400">
            Start working with Tailwind CSS that can provide everything you
            need to generate awareness, drive traffic, connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {lowClient.map((item, index) => {
            return (
              <ul className="space-y-8" key={index}>
                <li className="p-6 shadow dark:shadow-gray-800">
                  <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                    <Image
                      src={item.image}
                      width={64}
                      height={64}
                      className="rounded-full shadow size-16 dark:shadow-gray-800"
                      alt=""
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />

                    <div className="ps-4">
                      <Link
                        href="#"
                        className="text-lg duration-500 ease-in-out hover:text-indigo-600"
                      >
                        {item.name}
                      </Link>
                      <p className="text-slate-400">{item.title}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-slate-400">{item.desc}</p>
                    <ul className="mt-2 mb-0 space-x-1 list-none text-amber-400">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="p-6 shadow dark:shadow-gray-800">
                  <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                    <Image
                      src={item.image1}
                      width={64}
                      height={64}
                      className="rounded-full shadow size-16 dark:shadow-gray-800"
                      alt=""
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />

                    <div className="ps-4">
                      <Link
                        href="#"
                        className="text-lg duration-500 ease-in-out hover:text-indigo-600"
                      >
                        {item.name1}
                      </Link>
                      <p className="text-slate-400">{item.title1}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-slate-400">{item.desc}</p>
                    <ul className="mt-2 mb-0 space-x-1 list-none text-amber-400">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>

    <section className="relative py-16 pt-0 md:py-24 md:pt-0">
      <div className="container relative">
        <div className="grid justify-center grid-cols-1">
          <div className="relative z-1">
            <div className="grid justify-center grid-cols-1 text-center lg:grid-cols-12 md:text-start">
              <div className="lg:col-start-2 lg:col-span-10">
                <div className="relative">
                  <Image
                    src="/images/law/bg2.jpg"
                    width={0}
                    height={0}
                    className="shadow-lg"
                    alt=""
                    sizes="100vw"
                    style={{
                      height: "auto",
                      width: "100%",
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                  <VideoModal />
                </div>
              </div>
            </div>
            <div className="content md:mt-8">
              <div className="grid justify-center grid-cols-1 text-center lg:grid-cols-12 md:text-start">
                <div className="lg:col-start-2 lg:col-span-10">
                  <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div className="mt-8">
                      <div className="section-title text-md-start">
                        <h6 className="text-lg font-semibold text-white/50">
                          Team
                        </h6>
                        <h3 className="mt-2 text-2xl font-semibold leading-normal text-white md:text-3xl md:leading-normal">
                          Meet Experience <br /> Team Member
                        </h3>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="section-title text-md-start">
                        <p className="max-w-xl mx-auto mb-2 text-white/50">
                          Start working with Techwind that can provide
                          everything you need to generate awareness, drive
                          traffic, connect.
                        </p>
                        <Link
                          href="#"
                          className="flex items-center text-white"
                        >
                          Read More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
    </section>

    <section className="relative pt-16 md:pt-24">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="mb-2 text-base text-indigo-600">Our Minds</h6>
          <h3 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
            Management Team
          </h3>

          <p className="max-w-xl mx-auto text-slate-400">
            Start working with Tailwind CSS that can provide everything you
            need to generate awareness, drive traffic, connect.
          </p>
        </div>
        <TeamData />
      </div>
    </section>

    <section className="container relative py-16 md:py-24">
      <BlogTwo />
    </section>

    <Footer />
    <Switcher />
    <CookieModal />
  </>;
}
