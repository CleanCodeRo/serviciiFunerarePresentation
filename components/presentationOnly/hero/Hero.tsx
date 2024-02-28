import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex items-center flex-col gap-10">
      <h1>Check out our themes</h1>
      <Button>
        <Link href="/themes">Themes</Link>
      </Button>
      <Button>
        <Link href="/shop">Shop</Link>
      </Button>
    </div>
  );
};

export default Hero;
