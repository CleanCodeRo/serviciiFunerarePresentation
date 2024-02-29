import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Acasa = () => {
  return (
    <div className="select-none">
      <div className="w-full">
        <Image
          src="/images/placeholder.webp"
          alt="Placeholder"
          width={400}
          height={200}
          className="w-full h-96 object-cover filter brightness-50"
        />
        <div className="text-white absolute top-28 ml-20 w-[500px]">
          <span className="">Azi, maine si intotdeauna</span>
          <h1 className="text-3xl font-semibold"><span className="text-yellow-500">Servicii </span> funerare complete</h1>
          <p>La nevoie va oferim consultanta, produse si servicii funerare in Bucuresti, Ilfov, Giurgiu si imprejurimi.</p>

          <div className="flex flex-row gap-5 mt-3">
            <Button className="rounded-full">Vezi Pachete</Button>
            <Button variant='ghost' className="rounded-full border text-black font-bold bg-white/60">Contacteaza-ne</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acasa;
