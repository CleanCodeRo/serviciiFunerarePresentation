import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car, DropletsIcon, HelpingHandIcon, ListChecks, NotepadTextDashedIcon, OrbitIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Acasa = () => {
  return (
    <div className="select-none" id='acasa'>
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
          <h1 className="text-3xl font-semibold">
            <span className="text-yellow-500">Servicii </span> funerare complete
          </h1>
          <p>
            La nevoie va oferim consultanta, produse si servicii funerare in
            Bucuresti, Ilfov, Giurgiu si imprejurimi.
          </p>

          <div className="flex flex-row gap-5 mt-3">
            <Button className="rounded-full">Vezi Pachete</Button>
            <Button
              variant="ghost"
              className="rounded-full border text-black font-bold bg-white/60"
            >
              Contacteaza-ne
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-black text-center p-40">
        <div className="text-white">
          <h5>azi, maine si intotdeauna</h5>
          <h3 className="text-3xl font-semibold">
            <span className="text-yellow-500">Pachete</span> funerare
          </h3>
          <div className="grid grid-cols-3 gap-3 w-[60%] mx-auto">
            <Card className="flex flex-col items-center justify-center bg-black border border-gray-500 p-5">
              <CardHeader className="text-center items-center">
                <CardTitle>
                  <ListChecks size={44} className="text-[#cead3c]"/>
                </CardTitle>
                <CardDescription>
                  <span className="text-white text-[20px]">Consultanta Funerara</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-white text-[16px]">Va ajutam cu toate detaliile organizarii unei inmormantari. Puteti anticipa costurile si puteti pune la punct toate aspectele.</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-center bg-black border border-gray-500 p-5">
              <CardHeader className="text-center items-center">
                <CardTitle>
                  <NotepadTextDashedIcon size={44} className="text-[#cead3c]"/>
                </CardTitle>
                <CardDescription>
                  <span className="text-white text-[20px]">Constatare deces</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-white text-[16px]">Un medic expert va examina direct persoana decedata si va emite un certificat care sa ateste decesul</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-center bg-black border border-gray-500 p-5">
              <CardHeader className="text-center items-center">
                <CardTitle>
                  <HelpingHandIcon size={44} className="text-[#cead3c]"/>
                </CardTitle>
                <CardDescription>
                  <span className="text-white text-[20px]">Dosar de ajutor</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-white text-[16px]">Intocmim, depunem si preluam ajutorul de inmormantare. Acesta este un beneficiu acordat de casa teritoriala de pensii pentru persoanele pensionare sau angajate.</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-center bg-black border border-gray-500 p-5">
              <CardHeader className="text-center items-center">
                <CardTitle>
                  <DropletsIcon size={44} className="text-[#cead3c]"/>
                </CardTitle>
                <CardDescription>
                  <span className="text-white text-[20px]">Imbalsamare</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-white text-[16px]">Se realizeaza cu ajutorul tanatopraxiei si presupune tratarea corpului dar si dezinfectia si inhibarea organismelor patogene. Conservarea si fixarea proteinei din tesut sunt, de altfel, asociate acestui pas.</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-center bg-black border border-gray-500 p-5">
              <CardHeader className="text-center items-center">
                <CardTitle>
                  <OrbitIcon size={44} className="text-[#cead3c]"/>
                </CardTitle>
                <CardDescription>
                  <span className="text-white text-[20px]">Toaletare si asezare</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-white text-[16px]">Toaletarea decedatului include spalarea, imbracarea, barbieritul sau daca este cazul, cosmetizarea. Se realizeaza la sediul nostru sau la domiciliul clientului.</span>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-center bg-black border border-gray-500 p-5">
              <CardHeader className="text-center items-center">
                <CardTitle>
                  <Car size={44} className="text-[#cead3c]"/>
                </CardTitle>
                <CardDescription>
                  <span className="text-white text-[20px]">Transport funerar</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-white text-[16px]">Asiguram transportul sicriului si al decedatului cu autospeciale funerare autorizate conduse de soferi cu experienta.</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acasa;
