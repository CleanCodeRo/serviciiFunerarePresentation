"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/themes/theme3", label: "ACASA" },
    { href: "/themes/theme3/despre", label: "DESPRE" },
    { href: "/themes/theme3/servicii", label: "SERVICII" },
    { href: "/themes/theme3/pachete", label: "PACHETE" },
    {
      href: "/themes/theme3/ajutor-inmormantare",
      label: "AJUTOR INMORMANTARE",
    },
    { href: "/themes/theme3/repatriere", label: "REPATRIERE" },
    { href: "/themes/theme3/contact", label: "CONTACT" },
  ];

  return (
    <>
      <header className="sm:px-8 px-4 py-2 z-100 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-lg font-bold">
            Logo Servicii Funerare
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-md text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-2xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-2xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label} className="mb-10">
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
