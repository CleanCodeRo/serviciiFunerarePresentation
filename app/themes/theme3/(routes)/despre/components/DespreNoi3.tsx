"use client";
import { CalendarCheck, Car, FileText, HandshakeIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const DespreNoi3 = () => {
  return (
    <div className="w-full flex relative justify-center">
      <motion.div
        className="bg-white mx-2 4xs:w-full xl:w-[60%] grid gap-3 4xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        initial={{ opacity: 0, y: -200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.3 },
        }}
        viewport={{ once: true }}
      >
        <div className="border-[#9c6b01] border-[1px] p-2 text-center flex flex-col justify-around items-center 4xs:h-[300px] xl:h-[400px]">
          <HandshakeIcon className="h-10 w-10 text-[#be9a4a]" />
          <h6 className="uppercase font-semibold">Consultanta</h6>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border-[#9c6b01] border-[1px] p-2 text-center flex flex-col justify-around items-center 4xs:h-[300px] xl:h-[400px]">
          <FileText className="h-10 w-10 text-[#be9a4a]" />
          <h6 className="uppercase font-semibold">documente</h6>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border-[#9c6b01] border-[1px] p-2 text-center flex flex-col justify-around items-center 4xs:h-[300px] xl:h-[400px]">
          <Car className="h-10 w-10 text-[#be9a4a]" />
          <h6 className="uppercase font-semibold">transport</h6>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border-[#9c6b01] border-[1px] p-2 text-center flex flex-col justify-around items-center 4xs:h-[300px] xl:h-[400px]">
          <CalendarCheck className="h-10 w-10 text-[#be9a4a]" />
          <h6 className="uppercase font-semibold">organizare</h6>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DespreNoi3;
