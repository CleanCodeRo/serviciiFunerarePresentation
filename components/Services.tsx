"use client";

import Service from "./Service";

const Services = () => {
  const servicii = [
    {
      title: "Serviciu funerar",
      image: "/images/image-3.jpg",
      description: "Scurta descriere serviciu funerar",
    },
    {
      title: "Serviciu funerar",
      image: "/images/image-3.jpg",
      description: "Scurta descriere serviciu funerar",
    },
    {
      title: "Serviciu funerar",
      image: "/images/image-3.jpg",
      description: "Scurta descriere serviciu funerar",
    },
    {
      title: "Serviciu funerar",
      image: "/images/image-3.jpg",
      description: "Scurta descriere serviciu funerar",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="4xs:text-lg sm:text-2xl mx-2 font-semibold text-center text-[#ADB7BE]">
        Va stam la dispozitie la orice ora pentru a va oferi urmatoarele
        servicii
      </div>
      <div className="flex flex-col mt-10">
        <div className="grid mx-auto 4xs:grid-cols-1 lg:grid-cols-2 text-black">
          {servicii.map((s, index) => (
            <Service
              key={index}
              title={s.title}
              image={s.image}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
