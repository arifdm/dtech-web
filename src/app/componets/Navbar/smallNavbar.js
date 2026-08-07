"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as Link1 } from "react-scroll";
import Image from "next/image";
import * as Icon from "react-feather";

export default function SmallNavbar() {
  const [isMenu, setisMenu] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    window.scrollTo(0, 0);
  }, []);
  function windowScroll() {
    setNavbarSticky(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  }

  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  return (
    <nav
      id="topnav"
      className={`${navbarSticky ? "nav-sticky" : " defaultscroll"}`}
    >
      <div className="container relative">
        <Link className="logo" href="/">
          <Image
            src="/images/logo-dark.png"
            width={138}
            height={24}
            className="inline-block dark:hidden"
            alt=""
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <Image
            src="/images/logo-light.png"
            width={138}
            height={24}
            className="hidden dark:inline-block"
            alt=""
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <Link
              href="#"
              className={`navbar-toggle ${isMenu ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        <ul className="mb-0 space-x-1 list-none buy-button">
          <li className="inline mb-0">
            <Link
              href="#"
              className="inline-flex items-center justify-center text-base tracking-wide text-center text-indigo-600 align-middle duration-500 border rounded-full size-9 bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 hover:text-white"
            >
              <Icon.Settings className="size-4"></Icon.Settings>
            </Link>
          </li>

          <li className="inline mb-0 ps-1">
            <Link
              href="https://1.envato.market/techwind-next"
              target="_blank"
              className="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-full size-9 hover:bg-indigo-700 hover:border-indigo-700"
            >
              <Icon.ShoppingCart className="size-4"></Icon.ShoppingCart>
            </Link>
          </li>
        </ul>

        <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
          <ul className="justify-end navigation-menu" id="navmenu-nav">
            <li className="has-submenu">
              <Link1
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="sub-menu-item"
              >
                Home
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                duration={500}
                className="sub-menu-item"
              >
                Feature
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                duration={500}
                className="sub-menu-item"
              >
                Price
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                duration={500}
                className="sub-menu-item"
              >
                Team
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="review"
                spy={true}
                smooth={true}
                duration={500}
                className="sub-menu-item"
              >
                Review
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                duration={500}
                className="sub-menu-item"
              >
                Blog
              </Link1>
            </li>
            <li className="has-submenu">
              <Link
                href="#"
                className="sub-menu-item"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setModal(!modal)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {modal ? (
          <div
            id="contactModal"
            className="fixed inset-0 z-40 flex items-center justify-center bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
          >
            <div className="relative w-full h-auto max-w-md p-4">
              <div className="relative bg-white rounded-lg shadow dark:bg-slate-900 dark:shadow-gray-800">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                  <h5 className="text-xl font-semibold">Contact Form</h5>
                  <button
                    type="button"
                    onClick={() => setModal(!modal)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="p-6 text-center">
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
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
