"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Servicii2 = () => {
  return (
    <div>
      <div className="w-full flex relative justify-center">
        <div className=" 4xs:w-full xl:w-[60%] flex-col relative p-2.5">
          <h6 className="flex justify-start uppercase text-md text-[#9c6b01] font-[Cinzel]">
            servicii funerare
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
  );
};

export default Servicii2;
