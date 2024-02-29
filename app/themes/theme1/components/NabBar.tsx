"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const navLinks = [
  {
    title: "Servicii",
    path: "#services",
  },
  {
    title: "Pachete Funerare",
    path: "#packages",
  },
  {
    title: "Produse Funerare",
    path: "#products",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("hero");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 300,
        behavior: "smooth",
      });
    }

    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-verdeInchis bg-opacity-85 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"#hero"}
          onClick={handleClick}
          className="text-lg  text-alb font-semibold flex gap-2"
        >
          <Image src="/images/logo.png" width={40} height={40} alt="logo" />
          <span className="mt-1 hover:text-galben">Servicii Funerare</span>
        </Link>
        <div className="mobile-menu block md:hidden ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-alb hover:text-galben hover:border-galben "
            >
              <Bars3Icon className="h-5 w-5" />{" "}
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-alb hover:text-galben hover:border-galben "
            >
              <XMarkIcon className="h-5 w-5" />{" "}
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  setNavbarOpen={setNavbarOpen}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <div className="absolute left-0 gap-20 bg-black bg-opacity-85 h-[100vh] w-full text-lg items-center p-20 font-semibold">
          <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;