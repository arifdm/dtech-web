"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as Link1 } from "react-scroll";
import Image from "next/image";
// import * as Icon from "react-feather";
import { User } from "react-feather";

export default function MyNavbar(props) {
  let { navClass, navJustify } = props;
  const [isMenu, setisMenu] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);

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

  // console.log("NAV_CLASS: ", navClass);
  // console.log("NAVBAR_STICKY: ", navbarSticky);

  return (
    <nav
      id="topnav"
      className={`${navbarSticky ? "nav-sticky text-white" : "text-blue-800"}`}
    >
      {/* <nav
      id="topnav"
      className={`defaultscroll ${
        navClass === "nav-light"
          ? ""
          : navClass === "nav-sticky"
          ? "bg-white dark:bg-slate-900"
          : ""
      }`}
    > */}
      <div className="container relative">
        {/* <Link className="logo" href="/">
          <Image
            src="/images/logo-dark.png"
            width={138}
            height={24}
            className="inline-block dark:hidden"
            alt=""
          />
          <Image
            src="/images/logo-light.png"
            width={138}
            height={24}
            className="hidden dark:inline-block"
            alt=""
          />
        </Link> */}

        {navClass === "nav-light" ? (
          <Link className="cursor-pointer logo" href="/">
            <span className="inline-block dark:hidden">
              <Image
                src="/images/logo-dark.png"
                className="l-dark"
                width={138}
                height={24}
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <Image
                src="/images/logo-light.png"
                className="l-light"
                width={138}
                height={24}
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </span>
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
        ) : (
          <Link className="cursor-pointer logo" href="/">
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
        )}

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

        {navClass !== "nav-light" ? (
          <ul className={`buy-button list-none space-x-1 mb-0`}>
            <li className="inline mb-0 ps-1">
              <Link
                href="/"
                target="_blank"
                className="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle bg-blue-800 border border-blue-800 rounded-full size-9 hover:bg-blue-900 hover:border-blue-800"
              >
                <User className="size-4" />
              </Link>{" "}
            </li>
          </ul>
        ) : (
          <ul className="mb-0 space-x-1 list-none buy-button">
            <li className="inline mb-0 ps-1">
              <Link href="/" target="_blank">
                <div className="login-btn-primary">
                  <span className="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle ease-in-out bg-blue-800 border border-blue-800 rounded-full size-9 hover:bg-blue-900 hover:border-blue-800">
                    <User className="size-4" />
                  </span>
                </div>
                <div className="login-btn-light">
                  <span className="inline-flex items-center justify-center text-base tracking-wide text-center align-middle ease-in-out border rounded-full size-9 bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <User className="size-4" />
                  </span>
                </div>{" "}
              </Link>
            </li>
          </ul>
        )}

        <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
          {/* <ul className="justify-end navigation-menu" id="navmenu-nav"> */}
          <ul className={`navigation-menu ${navClass} ${navJustify}`}>
            <li>
              <Link1
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Services
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="product"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Products
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
