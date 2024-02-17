"use client";
import styles from "./zoomParallax.module.scss";
import Picture1 from "../public/images/image-1.jpg";
import Picture2 from "../public/images/image-7.jpg";
import Picture3 from "../public/images/image-3.jpg";
import Picture4 from "../public/images/image-4.jpg";
import Picture5 from "../public/images/image-5.jpg";
import Picture6 from "../public/images/image-6.jpg";
import Picture7 from "../public/images/image-2.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import React from "react";
import useScreen from "@/hooks/useScreen";

const ZoomParallax = () => {
  const container = useRef(null);
  const isLargeScreen = useScreen();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scaleMobile = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      {isLargeScreen ? (
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt="image" placeholder="blur" />
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className={`top-0 sticky overflow-hidden h-56 flex items-center justify-center`}>
          <motion.div
            style={{ scale: scaleMobile }}
            className="flex w-[50%] h-[50%]"
          >
            <div className={styles.imageContainer}>
              <Image
                src={pictures[0].src}
                objectFit="contain"
                alt="image"
                placeholder="blur"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ZoomParallax;
