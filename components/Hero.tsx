"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Paragraph from "./Paragraph";
import styles from "./paragraph.module.scss";
import ZoomParallax from "./ZoomParallax";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const paragraph =
  "Suntem aici pentru a oferi sprijin și confort în momentele dificile. Cu o abordare caldă și atentă, ne angajăm să vă ajutăm în planificarea și organizarea ceremoniilor funerare, asigurându-ne că fiecare detaliu reflectă demnitatea și respectul față de persoana dragă.";

const Hero: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div className="text-center mt-80 text-4xl font-bold h-screen">
        <h1>Servicii funerare ASDF</h1>
      </div>
      <div>
        <Paragraph paragraph={paragraph} />
      </div>
      <div className={styles.main}>
        <ZoomParallax />
      </div>
    </div>
  );
};

export default Hero;
