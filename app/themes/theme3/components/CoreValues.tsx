"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Hourglass, Ribbon } from "lucide-react";

const CoreValues = () => {
  return (
    <div className="w-full h-[400px] 4xs:hidden md:flex relative justify-center">
      <motion.div
        className="md:w-full xl:w-[60%] h-[400px] flex relative justify-center p-2.5 top-16"
        initial={{ opacity: 0, y: -200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.3 },
        }}
        viewport={{ once: true }}
      >
        <div className="bg-white flex flex-col justify-evenly items-start p-10 border-[#9c6b01] border-t-[1px] border-l-[1px] border-b-[1px] w-[33%] h-full">
          <HeartHandshake className="h-10 w-10 text-[#be9a4a]" />
          <h6 className="text-md uppercase font-[Cinzel]">Devotament</h6>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-[#be9a4a] flex flex-col text-white justify-evenly items-center p-10 border-[#9c6b01] border-t-[1px] border-b-[1px] w-[33%] h-full">
          <Hourglass className="h-10 w-10" />
          <h6 className="text-md uppercase font-[Cinzel]">
            Promptitudine
          </h6>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-evenly items-end p-10 border-[#9c6b01] border-t-[1px] border-r-[1px] border-b-[1px] w-[33%] h-full">
          <Ribbon className="h-10 w-10 text-[#be9a4a]" />
          <h6 className="text-md uppercase font-[Cinzel]">
            Profesionalism
          </h6>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CoreValues;
