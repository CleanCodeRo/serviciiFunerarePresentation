import { Button } from "@/components/ui/button";
import {
    AtSymbolIcon,
    MapIcon,
    MapPinIcon,
    PhoneIcon,
  } from "@heroicons/react/24/solid";
  import Link from "next/link";
  import React from "react";
  
  const Contact = () => {
    return (
      <div className="flex flex-col justify-center w-full">
        <div className="mt-20 text-center mb-4 text-3xl lg:text-4xl font-primary ">
          <h1>Contact</h1>
        </div>
        <div className="grid grid-cols-1 ">
          <h1 className="xs:text-lg sm:text-xl text-center text-[#ADB7BE] mx-1">
            Pentru mai multe detalii va invitam sa ne contactati telefonic sau la
            adresa sediului nostru.
          </h1>
          <div className="p-6 text-center select-text 4xs:text-md sm:text-lg">
            <div className="flex items-center justify-center mb-1 text-base">
              <PhoneIcon className="4xs:h-5 sm:h-7 4xs:w-5 sm:w-7 mr-2" />
              <a href="tel:+40722222222">(0722) 222 222</a>
            </div>
            <div className="flex items-center justify-center text-base">
              <MapPinIcon className="4xs:h-5 sm:h-7 4xs:w-5 sm:w-7 mr-2" />
              <Link
                href="https://maps.app.goo.gl/JHDSwnH2rNyKayqSA"
                target="_blank"
              >
                Str. Barbu Catargi, Nr. 18C, Constanța
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mx-auto rounded-lg w-[90%]">
          <div className="rounded-lg overflow-hidden mb-10">
            <iframe
              title="Google Map"
              width="100%"
              height="400"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Str.%20Barbu%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Catargi,%20Nr.18C,%20Palazu%20Mare,%20Constanța+(Mister%20Lucass)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <Button>
          <Link href='/themes'>
            Back To Themes
          </Link>
        </Button>
      </div>
    );
  };
  
  export default Contact;