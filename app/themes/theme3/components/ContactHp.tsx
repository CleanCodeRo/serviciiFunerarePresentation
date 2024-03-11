"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const ContactHp = () => {
  return (
    <div className="w-full h-[400px] 4xs:hidden md:flex relative justify-center">
      <motion.div
        className="md:w-full xl:w-[60%] h-[200px] flex relative justify-center p-2.5 top-16"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.3 },
        }}
        viewport={{ once: true }}
      >
        <div className="bg-[#6d6d6d] flex flex-col justify-evenly items-center p-10 text-white  w-[33%] h-full">
          <div className="inline-flex items-center gap-x-10">
            <Phone className="h-10 w-10 " />
            <h6 className="text-lg uppercase font-[Cinzel]">
              SUNA-NE 24/7
            </h6>{" "}
          </div>
          <p>(0722) 222 222</p>
        </div>
        <div className="bg-[#be9a4a] flex flex-col text-white justify-evenly items-center p-10 border-gray-400  border-r-[1px] border-l-[1px] w-[33%] h-full">
          <div className="inline-flex items-center gap-x-10">
            <Mail className="h-10 w-10 " />
            <h6 className="text-lg uppercase font-[Cinzel]">
              trimite mesaj
            </h6>{" "}
          </div>
          <p>contact@ceva.com</p>
        </div>
        <div className="bg-[#6d6d6d] flex flex-col justify-evenly items-center p-10 text-white  w-[33%] h-full">
          <div className="inline-flex items-center gap-x-10">
            <MapPin className="h-10 w-10 " />
            <h6 className="text-lg uppercase font-[Cinzel]">
              sediu social
            </h6>{" "}
          </div>
          <p>Str. adasdasd Nr.asdasda</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactHp;
