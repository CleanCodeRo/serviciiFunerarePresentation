import { Quote } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DespreNoi4 = () => {
  return (
    <div className="w-full flex relative justify-center mt-10">
      <div className=" 4xs:w-full xl:w-[60%] flex-col relative p-2.5">
        <h6 className="flex justify-start text-md uppercase text-[#9c6b01] font-[Cinzel]">
          de ce sa ne alegi pe noi
        </h6>
        <div className="flex justify-center items-center">
          <Quote className="h-[48px] w-[48px] text-black mr-2" />
          <h2 className="flex justify-center mt-6 text-lg xl:text-xl font-semibold italic">
            Motto cu impact emotional ....
          </h2>
        </div>
        <p className="flex justify-start mt-6 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore e
        </p>
        <p className="flex justify-start mt-6 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore e
        </p>
        <div className="flex justify-center items-center">
          <Link href="/themes/theme3/servicii">
            <Button className="bg-[#9c6b01] hover:bg-[#9c6b01]/75">
              SERVICII
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DespreNoi4;
