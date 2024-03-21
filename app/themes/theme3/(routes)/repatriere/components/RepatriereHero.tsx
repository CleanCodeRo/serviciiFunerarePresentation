"use client";
import useScreen from "@/hooks/useScreen";
import React from "react";

const RepatriereHero = () => {
  const isLargeScreen = useScreen();
  return (
    <div
      className="w-full h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(/images/ajutor-inmormantare.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: isLargeScreen ? "center" : "bottom",
      }}
    >
      <h1 className="flex justify-center items-center text-black 4xs:text-lg md:text-2xl xl:text-4xl font-semibold">
        Repatriere
      </h1>
    </div>
  );
};

export default RepatriereHero;
