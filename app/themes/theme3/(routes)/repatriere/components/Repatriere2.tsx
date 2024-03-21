"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Repatriere2 = () => {
  return (
    <div>
      <div className="w-full flex relative justify-center">
        <div className=" 4xs:w-full xl:w-[60%] flex-col relative p-2.5">
          <h6 className="flex justify-start uppercase text-md text-[#9c6b01] font-[Cinzel]">
            repatriere
          </h6>
          <h2 className="flex justify-center mt-6 text-lg xl:text-xl font-semibold">
            Titlu
          </h2>
          <p className="flex justify-start mt-6 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore e
          </p>
          <p className="flex justify-start mt-6 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore e
          </p>
        </div>
      </div>
      <div className="grid 4xs:grid-cols-1 xl:grid-cols-3 lg:w-[98%]">
        <div className="flex flex-col justify-center items-center">
          <Image src="/images/europe.jpg" width={300} height={300} alt="img" />
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
            <h2 className="font-semibold text-md">Europa</h2>
            <p className="text-center py-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src="/images/asia.png" width={300} height={300} alt="img" />
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
            <h2 className="font-semibold text-md">Asia</h2>
            <p className="text-center py-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/north-america.png"
            width={300}
            height={300}
            alt="img"
          />
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
            <h2 className="font-semibold text-md">America de Nord</h2>
            <p className="text-center py-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src="/images/africa.jpg" width={300} height={300} alt="img" />
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
            <h2 className="font-semibold text-md">Africa</h2>
            <p className="text-center py-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/south-america.png"
            width={300}
            height={300}
            alt="img"
          />
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
            <h2 className="font-semibold text-md">America de Sud</h2>
            <p className="text-center py-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/australia.png"
            width={300}
            height={300}
            alt="img"
          />
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
            <h2 className="font-semibold text-md">Australia</h2>
            <p className="text-center py-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Repatriere2;
