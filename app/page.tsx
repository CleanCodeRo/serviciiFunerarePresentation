import Image from "next/image";
import { Button } from "flowbite-react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Contact />
    </div>
  );
}
