"use client";
import React from "react";
import { motion } from "framer-motion";

const Pachete2 = () => {
  return (
    <div className="flex-col items-center">
      <div className="w-full flex justify-center">
        <div className="4xs:w-full xl:w-[60%] flex-col relative p-2.5">
          <h6 className="flex justify-start uppercase text-md text-[#9c6b01] font-[Cinzel]">
            pachete funerare
          </h6>
          <h2 className="flex justify-center mt-6 text-lg xl:text-xl font-semibold">
            Titlu
          </h2>
          <p className="flex justify-start mt-6 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore e
          </p>
          <p className="flex justify-start mt-6 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore e
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[90%] mx-auto mt-4">
        <div className="grid 4xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 4xs:gap-20 md:gap-44">
          <motion.div
            className="border-[#9c6b01] border-[1px] text-center"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <h1 className="py-3 font-semibold text-lg uppercase">
              Pachet pensionari
            </h1>
            <h2 className="py-3 font-extrabold text-[#9c6b01] text-xl">
              0 LEI*
            </h2>
            <p className="text-base py-1">
              Sicriu echipat complet(set deces,manere,crucifix)
            </p>
            <p className="text-base py-1">Cruce inscriptionata</p>
            <p className="text-base py-1">Transport – 2 servicii</p>
            <p className="text-base py-1">Manipulare decedat- 2 servicii</p>
            <p className="text-base py-1">
              Igienizare, toaletare si cosmetica mortuara
            </p>
            <p className="text-base py-1">
              Imbalsamare si acte necesare D.S.P. Bucuresti
            </p>
            <p className="text-base py-1">Casa Mortuara(48h)</p>
            <p className="text-base py-1">
              Masina mortuara in ziua inmormantarii
            </p>
          </motion.div>
          <motion.div
            className="border-[#9c6b01] border-[1px] text-center"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1.3 },
            }}
            viewport={{ once: true }}
          >
            <h1 className="py-3 font-semibold text-lg uppercase">
              PACHET MINIM
            </h1>
            <h2 className="py-3 font-extrabold text-[#9c6b01] text-xl">
              795 LEI*
            </h2>
            <p className="text-base py-1">Sicriu complet echipat</p>
            <p className="text-base py-1">Transport – 1 serviciu</p>
            <p className="text-base py-1">Manipulare decedat</p>
            <p className="text-base py-1">Cruce inscriptionata</p>
            <p className="text-base py-1">
              Masina mortuara in ziua inmormantarii
            </p>
          </motion.div>
          <motion.div
            className="border-[#9c6b01] border-[1px] text-center"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 2.3 },
            }}
            viewport={{ once: true }}
          >
            <h1 className="py-3 font-semibold text-lg uppercase">
              pachet optim
            </h1>
            <h2 className="py-3 font-extrabold text-[#9c6b01] text-xl">
              1078 LEI*
            </h2>
            <p className="text-base py-1">Sicriu complet echipat</p>
            <p className="text-base py-1">Transport – 1 serviciu</p>
            <p className="text-base py-1">Manipulare decedat</p>
            <p className="text-base py-1">Cruce inscriptionata</p>
            <p className="text-base py-1">
              Masina mortuara in ziua inmormantarii
            </p>
            <p className="text-base py-1">Casa Mortuara(48h)</p>
          </motion.div>
          <motion.div
            className="border-[#9c6b01] border-[1px] text-center"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 3.3 },
            }}
            viewport={{ once: true }}
          >
            <h1 className="py-3 font-semibold text-lg uppercase">
              PACHET PREMIUM
            </h1>
            <div className="inline-flex items-center">
              <h2 className="py-3 text-[#9c6b01] text-md mr-2">de la</h2>
              <h2 className="py-3 font-extrabold text-[#9c6b01] text-xl">
                2580 LEI*
              </h2>
            </div>
            <p className="text-base py-1">Sicriu Premium(complet echipat)</p>
            <p className="text-base py-1">Transport- 2 servicii</p>
            <p className="text-base py-1">Manipulare decedat – 2 servicii</p>
            <p className="text-base py-1">
              Igienizare, toaletare si cosmetica mortuara
            </p>
            <p className="text-base py-1">Cruce inscriptionata</p>
            <p className="text-base py-1">
              Imbalsamare si acte necesare D.S.P. Bucuresti
            </p>
            <p className="text-base py-1">Casa Mortuara</p>
            <p className="text-base py-1">
              Masina mortuara in ziua inmormantarii
            </p>
          </motion.div>
        </div>
      </div>
      <div className="w-full flex justify-start mt-4 p-20">
        <div className="4xs:w-full xl:w-[60%] flex-col relative p-2.5">
          <h6 className="flex justify-start text-md font-semibold italic">
            * Documente necesare pentru a beneficia de pachetul de pensionari:
          </h6>
          <ol className="list-decimal ml-4 py-3">
            <li className="mt-2">
              contract notarial intre apartinator grad 1 (fiu/fiica/sot/sotie)
              si firma noastra
            </li>
            <li className="mt-2">
              acte doveditoare ale apartinatorului prin care dovedeste gradul de
              rudenie
            </li>
            <li className="mt-2">cupon de pensie</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Pachete2;
