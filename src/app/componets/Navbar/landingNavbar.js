"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LuSettings, BsCart3 } from "../../assets/icons/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { User } from "react-feather";

export default function MyNavbar(props) {
  let { navClass, navJustify } = props;
  let [isMenu, setisMenu] = useState(false);

  let [manu, setManu] = useState("");
  let pathname = usePathname();

  useEffect(() => {
    setManu(pathname);

    function windowScroll() {
      const navbar = document.getElementById("topnav");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        if (navbar !== null) {
          navbar?.classList.add("nav-sticky");
        }
      } else {
        if (navbar !== null) {
          navbar?.classList.remove("nav-sticky");
        }
      }
    }
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, [setManu]);

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
      className={`defaultscroll ${
        navClass === "nav-light"
          ? ""
          : navClass === "nav-sticky"
          ? "bg-white dark:bg-slate-900"
          : ""
      }`}
    >
      <div className="container relative">
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
                className="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 bg-blue-800 border border-blue-800 rounded-full size-9 hover:bg-blue-900 hover:border-blue-800"
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
                  <span className="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle transition duration-500 ease-in-out bg-blue-800 border border-blue-800 rounded-full size-9 hover:bg-blue-900 hover:border-blue-800">
                    <User className="size-4" />
                  </span>
                </div>
                <div className="login-btn-light">
                  <span className="inline-flex items-center justify-center text-base tracking-wide text-center align-middle transition duration-500 ease-in-out border rounded-full size-9 bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <User className="size-4" />
                  </span>
                </div>{" "}
              </Link>
            </li>
          </ul>
        )}

        <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
          <ul className={`navigation-menu ${navClass} ${navJustify}`}>
            <li className={manu === "/" || "" ? "active" : ""}>
              <Link href="/" className="sub-menu-item">
                Home
              </Link>
            </li>
            {/*             
            <li
              className={`${
                ["/", "/", "/"].includes(
                  manu
                )
                  ? "active"
                  : ""
              } has-submenu parent-menu-item`}
            >
              <Link href="#">Docs</Link>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li className={manu === "/" || "" ? "active" : ""}>
                  <Link href="/" className="sub-menu-item">
                    Components
                  </Link>
                </li>
                <li className={manu === "/" || "" ? "active" : ""}>
                  <Link href="/" className="sub-menu-item">
                    Documentation
                  </Link>
                </li>
                <li className={manu === "/" || "" ? "active" : ""}>
                  <Link href="/" className="sub-menu-item">
                    Changelog
                  </Link>
                </li>
              </ul>
            </li> */}

            <li className={manu === "/" || "" ? "active" : ""}>
              <Link href="/" className="cursor-pointer sub-menu-item">
                About Us
              </Link>
            </li>
            <li className={manu === "/" || "" ? "active" : ""}>
              <Link href="/" className="cursor-pointer sub-menu-item">
                Services & Solutions
              </Link>
            </li>
            <li className={manu === "/" || "" ? "active" : ""}>
              <Link href="/" className="cursor-pointer sub-menu-item">
                Products
              </Link>
            </li>
            <li className={manu === "/" || "" ? "active" : ""}>
              <Link href="/" className="cursor-pointer sub-menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
