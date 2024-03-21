"use client";
import {  ClockIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";

const NavBar = () => {

  return (
    <nav className=" top-0 left-0 right-0 z-10 bg-black bg-opacity-85 ">
      <div className="flex flex-wrap items-center 4xs:justify-center md:justify-between mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center">
          <Image
            src="/images/angel-logo.png"
            width={40}
            height={40}
            alt="logo"
          />
          <span className="font-semibold text-xl ">Servicii Funerare</span>
        </div>
        <div className="4xs:hidden md:flex flex-wrap items-center">
          <div className="flex flex-wrap items-center p-4">
            <ClockIcon className="4xs:hidden lg:flex w-10 h-10 text-white" />
            <div className="ml-2">
              <h1>Program:</h1>
              <h1>NON-STOP</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center p-4">
            <MapPinIcon className="4xs:hidden lg:flex w-10 h-10 text-white" />
            <div className="ml-2">
              <h1>Adresa:</h1>
              <h1>Str. asdfg Nr.1, Bucuresti</h1>
            </div>{" "}
          </div>
          <div className="flex flex-wrap items-center p-4">
            <PhoneIcon className="4xs:hidden lg:flex w-10 h-10 text-white" />
            <div className="ml-2">
              <h1>Telefon:</h1>
              <a href="tel:+40722222222">(0722) 222 222</a>
            </div>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
