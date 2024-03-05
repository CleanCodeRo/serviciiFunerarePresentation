import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";

const Hero = () => {
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-96 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col items-center">
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Clean Code <br />
          </h1>
        </div>
        <div className="mt-10 flex flex-row gap-10">
            <Link href="/themes">
              <Button>
                Themes
              </Button>
            </Link>
            <Button>
              <Link href="/shop">Shop</Link>
            </Button>
          </div>
      </div>
    </div>
  );
};

export default Hero;
