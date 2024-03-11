"use client";
import useScreen from "@/hooks/useScreen";
import React from "react";

const ServiciiHero = () => {
  const isLargeScreen = useScreen();
  return (
    <div
      className="w-full h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(/images/servicii-hero.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: isLargeScreen ? "center" : "right",
      }}
    >
      <h1 className="flex justify-center items-center text-white 4xs:text-lg md:text-2xl xl:text-4xl font-semibold">
        Servicii funerare
      </h1>
    </div>
  );
};

export default ServiciiHero;
