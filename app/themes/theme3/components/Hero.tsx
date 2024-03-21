"use client";
import useScreen from "@/hooks/useScreen";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const isLargeScreen = useScreen();
  return (
    <div>
      <div
        className="w-full h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(/images/hero-rose.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: isLargeScreen ? "center" : "right",
        }}
      >
        <motion.div
          className="w-[70vw] h-auto p-5 relative flex-col place-self-center justify-center items-center bg-white bg-opacity-75"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3, delay: 0 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="flex justify-center items-center 4xs:text-lg md:text-2xl font-semibold">
            Nume Servicii Funerare
          </h1>
          <p className="flex justify-center items-center place-self-center 4xs:text-xs md:text-md text-center md:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore e
          </p>
          <div className="flex justify-center items-center 4xs:mt-4 md:mt-16">
            <Button className="mr-10">Suna-ne</Button>
            <Link href="/themes/theme3/contact">
              <Button variant={"secondary"}>Contact</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
