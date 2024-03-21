import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PacheteleNoastre = () => {
  return (
    <div className=" flex items-center justify-center w-full">
      <div className="flex flex-col items-center 4xs:w-full 4xs:h-full lg:w-[70%]  lg:h-[80%] p-5">
        <div className="bg-white w-[90%]  text-md font-[Cinzel]">
          <h2 className="text-[#be9a4a]">PACHETELE NOASTRE</h2>
        </div>
        <div className="bg-white mt-4 w-[90%] text-center text-lg font-semibold">
          <h1>ALEGE CELE MAI BUNE PACHETE PENTRU FAMILIA TA</h1>
        </div>
        <div className="bg-white mt-4 w-[90%] text-base ">
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>
        </div>
        <div className="grid gap-3 4xs:grid-cols-1 xl:grid-cols-3 mt-4">
          <div className="bg-white border-[#be9a4a] border-[1px] flex flex-col justify-between items-center p-5 4xs:min-h-[400px] md:w-[70%] md:mx-auto md:min-h-[500px] xl:min-h-[500px] ">
            <h6 className="font-semibold text-md">PACHET SIMPLU</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>
            <Link href="/themes/theme3/pachete">
              <Button className="bg-[#9c6b01] hover:bg-[#9c6b01]/75">
                Detalii
              </Button>
            </Link>
          </div>
          <div className="bg-[#be9a4a] flex flex-col justify-between items-center p-5 4xs:min-h-[400px] md:w-[70%] md:mx-auto md:min-h-[500px] xl:min-h-[500px]">
            <h6 className="text-white font-semibold text-md">PACHET SIMPLU</h6>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>
            <Link href="/themes/theme3/pachete">
              <Button className="bg-[#9c6b01] hover:bg-[#9c6b01]/75">
                Detalii
              </Button>
            </Link>
          </div>
          <div className="bg-white border-[#be9a4a] border-[1px] flex flex-col justify-between items-center p-5 4xs:min-h-[400px] md:w-[70%] md:mx-auto md:min-h-[500px] xl:min-h-[500px]">
            <h6 className="font-semibold text-md">PACHET SIMPLU</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>
            <Link href="/themes/theme3/pachete">
              <Button className="bg-[#9c6b01] hover:bg-[#9c6b01]/75">
                Detalii
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacheteleNoastre;
