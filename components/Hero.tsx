"use client";
import React from "react";
import Paragraph from "./Paragraph";
import styles from "./paragraph.module.scss";
import { motion } from "framer-motion";
import ZoomParallax from "./ZoomParallax";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import useScreen from "@/hooks/useScreen";
import Services from "./Services";
import useSize from "@/hooks/useSize";

const paragraph =
  "Suntem aici pentru a oferi sprijin și confort în momentele dificile. Cu o abordare caldă și atentă, ne angajăm să vă ajutăm în planificarea și organizarea ceremoniilor funerare, asigurându-ne că fiecare detaliu reflectă demnitatea și respectul față de persoana dragă.";

const Hero: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const isLargeScreen = useScreen();


  return (
    <div>
      {isLargeScreen ? (
        <div className="text-center mt-80 text-4xl font-primary h-[470px] ">
          <h1>Servicii funerare </h1>
        </div>
      ) : (
        <div className="text-center mt-80 text-3xl font-primary h-[390px] ">
          <h1>Servicii funerare </h1>
        </div>
      )}
      <div>
        <Paragraph paragraph={paragraph} />
      </div>
      {isLargeScreen ? (
        <div>
          <ZoomParallax />
          <motion.div
            className="text-center text-4xl font-primary"
            animate={{ y: -500, transition: { duration: 6 } }}
          >
            <h1>Serviciile noastre</h1>
          </motion.div>
          <Services />
        </div>
      ) : (
        <div>
          <ZoomParallax />
          <h1 className="text-center text-3xl font-primary mt-8">
            Serviciile noastre
          </h1>
          <Services />
        </div>
      )}
    </div>
  );
};

export default Hero;
