"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ServiciiOferite = () => {
  return (
    <div className="flex items-center justify-center w-full h-[900px]">
      <div className=" mt-20 p-5 flex flex-col items-center 4xs:w-full lg:w-[60%] 4xs:h-full lg:h-[80%]">
        <div className="flex 4xs:flex-col lg:flex-row justify-evenly p-5">
          <div className="flex flex-col lg:w-[50%]">
            <h6 className="text-md uppercase font-[Cinzel] text-[#9c6b01]">
              Serviciile noastre
            </h6>
            <h1 className="text-lg"> Ce servicii oferim</h1>
          </div>
          <div className="flex">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>
          </div>
          <div className="flex">
            <Button className="bg-[#9c6b01] hover:bg-[#9c6b01]/75">
              TOATE SERVICIILE
            </Button>
          </div>
        </div>
        <div className="grid 4xs:grid-cols-1 xl:grid-cols-3 lg:w-[98%]">
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/p1.jpg" width={300} height={300} alt="img" />
            <motion.div
              className="bg-white border-[1px] border-[#9c6b01] flex flex-col justify-start items-center w-[80%] h-[30%] p-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: -200,
                transition: { duration: 1, delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-semibold text-md">Ajutor Inmormantare</h2>
              <p className="text-center py-5">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/p2.jpg" width={300} height={300} alt="img" />
            <motion.div
              className="bg-white border-[1px] border-[#9c6b01] flex flex-col justify-start items-center w-[80%] h-[30%] p-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: -200,
                transition: { duration: 1, delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-semibold text-md">Transport</h2>
              <p className="text-center py-5">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/p3.jpg" width={300} height={300} alt="img" />
            <motion.div
              className="bg-white border-[1px] border-[#9c6b01] flex flex-col justify-start items-center w-[80%] h-[30%] p-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: -200,
                transition: { duration: 1, delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-semibold text-md">Repatriere</h2>
              <p className="text-center py-5">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciiOferite;
