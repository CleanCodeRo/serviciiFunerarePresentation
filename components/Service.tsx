import React from "react";
import Image from "next/image";

interface ServiceProps {
  title: string;
  image: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ title, image, description }) => {
  return (
    <div className="relative m-10 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
        <div className="text-center">
          <div className="font-semibold">{title}</div>
          <div>{description}</div>
        </div>
      </div>
      <Image
        className="rounded-xl"
        src={image}
        alt=""
        width={400}
        height={400}
      />
    </div>
  );
};

export default Service;
