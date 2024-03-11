"use client";
import useScreen from "@/hooks/useScreen";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const RepatriereHomePage = () => {
  const isLargeScreen = useScreen();
  return (
    <div>
      <div
        className="w-full h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(/images/repatriere-hp.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: isLargeScreen ? "center" : "right",
        }}
      >
        <div className="w-[70vw] h-auto p-5 relative flex-col place-self-center justify-center items-center bg-white bg-opacity-75">
          <h1 className="flex justify-center items-center text-center 4xs:text-lg md:text-2xl font-semibold">
            Specializați în repatrierea rămășițelor din întreaga lume
          </h1>
          <p className="flex justify-center items-center place-self-center 4xs:text-xs md:text-md md:mt-4">
            În cazul decesului în afara țării, suntem disponibili 24/7 și ne
            asigurăm că vă aducem persoana dragă înapoi acasă în cele mai bune
            condiții și în cel mai scurt timp posibil, având o bună colaborare
            cu ambasadele, companiile aeriene, dar și cu toate companiile de
            pompe funebre omoloage din întreaga lume. Transportul defunctului
            până la punctul de destinație, incinerare sau înmormântare se
            efectuează prin toate mijloacele de transport.
          </p>
          <div className="flex justify-center items-center 4xs:mt-4 md:mt-16">
            <Link href="/themes/theme3/repatriere">
              <Button className="mr-10">Repatriere</Button>
            </Link>
            <Link href="/themes/theme3/contact">
              <Button variant={"secondary"}>Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepatriereHomePage;
