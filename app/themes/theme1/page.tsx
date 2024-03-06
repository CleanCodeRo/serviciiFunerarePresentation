"use client";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import NavBar from "./components/NabBar";
import { motion, useScroll } from "framer-motion";

const Theme1 = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <NavBar />
      <Hero />
      <Contact />
    </div>
  );
};

export default Theme1;
