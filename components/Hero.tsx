"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Paragraph from "./Paragraph";

const paragraph =
  "Suntem aici pentru a oferi sprijin și confort în momentele dificile. Cu o abordare caldă și atentă, ne angajăm să vă ajutăm în planificarea și organizarea ceremoniilor funerare, asigurându-ne că fiecare detaliu reflectă demnitatea și respectul față de persoana dragă.";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="h-[85vh]"></div>
      <div>
        <Paragraph paragraph={paragraph} />
      </div>
      <div className="h-[90vh]"></div>
    </div>
  );
};

export default Hero;
