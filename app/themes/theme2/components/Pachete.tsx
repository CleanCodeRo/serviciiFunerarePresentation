"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

const Pachete = () => {
  return (
    <div className="py-20" id="pachete">
      <div className="text-center my-5">
        <h3 className="text-white text-md">azi, maine si intotdeauna</h3>
        <h1 className="text-3xl font-semibold text-white">
          <span className="text-[#cead3c]">Pachete</span> funerare complete
        </h1>
      </div>
      <div className="grid-cols-1 sm:grid-cols-1 gap-10 grid md:grid-cols-2 lg:grid-cols-3 items-center justify-between w-[80%] mx-auto">
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Standard</CardTitle>
            <CardDescription>
              <span className="text-3xl text-[#cead3c]">0</span>
              <span className="bottom-4 text-[#cead3c] text-xl left-1 relative">
                lei
              </span>
              <br />
              <span>+ talon pensie</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <h5>Servicii Funerare</h5>
            <hr />
            <span>Acte necesare</span>
            <hr />
            <span>Intocmire si depunere dosar</span>
            <hr />
            <span>Consultanta funerara</span>
            <hr />
            <span>Constatare deces(medic)</span>
            <hr />
            <span>Imbalsamare</span>
            <hr />
            <span>Tiaketare si asezare</span>
            <hr />
            <span>Transport sicriu</span>
            <hr />
            <span>Preluare decedat</span>
            <hr />
            <span>Transport funerare</span>
            <hr />
            <span>Manipulare</span>
            <hr />
            <h5>Produse funerare</h5>
            <hr />
            <span>Sicriu standard complet echipat</span>
            <hr />
            <span>Cruce de lemn inscriptionata</span>
            <hr />
            <span>9 pachete pomana complete cu vesela</span>
            <hr />
            <span>2 platouri de coliva (1-2 kg)</span>
            <hr />
            <span>3 colaci: cap, arhanghel, prescura</span>
            <hr />
            <span>Sticla de vin</span>
            <hr />
            <span>Vin + ulei</span>
            <hr />
            <span>Set pahare + lingurite</span>
            <hr />
            <span>6 prosoape albe mici si 2 mari</span>
            <hr />
            <span>9 batiste cu lumanari si banut</span>
            <hr />
            <span>9 lumanari pentru pachete</span>
            <hr />
            <span>20 doliu de piept</span>
            <hr />
            <span>Toiag de piept + cruce</span>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#cead3c]">
              <Link href="#">Suna Acum</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center bg-slate-600 text-white">
          <CardHeader>
            <CardTitle>Complet</CardTitle>
            <CardDescription>
              <span className="text-3xl text-[#cead3c]">1000</span>
              <span className="bottom-4 text-[#cead3c] text-xl left-1 relative">
                lei
              </span>
              <br />
              <span>+ talon pensie</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h5>Servicii Funerare</h5>
            <hr />
            <span>Acte necesare</span>
            <hr />
            <span>Intocmire si depunere dosar</span>
            <hr />
            <span>Consultanta funerara</span>
            <hr />
            <span>Constatare deces(medic)</span>
            <hr />
            <span>Imbalsamare</span>
            <hr />
            <span>Tiaketare si asezare</span>
            <hr />
            <span>Transport sicriu</span>
            <hr />
            <span>Preluare decedat</span>
            <hr />
            <span>Transport funerare</span>
            <hr />
            <span>Manipulare</span>
            <hr />
            <h5>Produse funerare</h5>
            <hr />
            <span>Sicriu hexagonal complet echipat</span>
            <hr />
            <span>Cruce de lemn inscriptionata</span>
            <hr />
            <span>Coroana de flori artificiale</span>
            <hr />
            <span>12 pachete pomana complete cu vesela</span>
            <hr />
            <span>2 platouri de coliva (1-2 kg)</span>
            <hr />
            <span>3 colaci: cap, arhanghel, prescura</span>
            <hr />
            <span>Vin + ulei</span>
            <hr />
            <span>Set pahare + lingurite</span>
            <hr />
            <span>8 prosoape albe mici si 3 mari</span>
            <hr />
            <span>15 batiste cu lumanari si banut</span>
            <hr />
            <span>15 lumanari pentru pachete</span>
            <hr />
            <span>40 doliu de piept + doliu de usa</span>
            <hr />
            <span>Toiag de piept + cruce</span>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#cead3c]">
              <Link href="#">Suna Acum</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Lux</CardTitle>
            <CardDescription>
              <span className="text-3xl text-[#cead3c]">2000</span>
              <span className="bottom-4 text-[#cead3c] text-xl left-1 relative">
                lei
              </span>
              <br />
              <span>+ talon pensie</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h5>Servicii Funerare</h5>
            <hr />
            <span>Acte necesare</span>
            <hr />
            <span>Intocmire si depunere dosar</span>
            <hr />
            <span>Consultanta funerara</span>
            <hr />
            <span>Constatare deces(medic)</span>
            <hr />
            <span>Imbalsamare</span>
            <hr />
            <span>Tiaketare si asezare</span>
            <hr />
            <span>Transport sicriu</span>
            <hr />
            <span>Preluare decedat</span>
            <hr />
            <span>Transport funerare</span>
            <hr />
            <span>Manipulare</span>
            <hr />
            <h5>Produse funerare</h5>
            <hr />
            <span>Sicriu octogonal complet echipat</span>
            <hr />
            <span>Cruce de lemn inscriptionata</span>
            <hr />
            <span>Coroana de flori artificiale</span>
            <hr />
            <span>12 pachete pomana complete cu vesela</span>
            <hr />
            <span>2 platouri de coliva (2-3 kg)</span>
            <hr />
            <span>3 colaci: cap, arhanghel, prescura</span>
            <hr />
            <span>Vin + ulei</span>
            <hr />
            <span>Set pahare + lingurite</span>
            <hr />
            <span>15 prosoape albe mici si 3 mari (preot)</span>
            <hr />
            <span>15 batiste cu lumanari si banut</span>
            <hr />
            <span>15 lumanari pentru pachete</span>
            <hr />
            <span>60 doliu de piept + doliu de usa</span>
            <hr />
            <span>Toiag de piept + cruce</span>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#cead3c]">
              <Link href="#">Suna Acum</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="text-white p-20 ml-auto">
        <p>
          * Oricare dintre produsele sau serviciile de mai sus se pot suplimenta
          contra cost. Sicriul inclus in pachet se poate inlocui cu unul
          superior achitand diferența de pret dintre ele.
        </p>
        <p>
          ** Transportul sicriului si/sau al decedatului este inclus in
          municipiului Bucuresti si judetul Ilfov. In afara acestor localitati
          se poate percepe o taxa suplimentara in functie de distanta parcursa.
        </p>
        <p>
          *** Pachetele de pomană sunt ambalate individual si contin vesela,
          alimente de dulce/post/peste, bautura si icoana
        </p>
      </div>
      <div className="bg-black text-center p-40">
        <div className="w-[40%] mx-auto">
          <h3 className="text-white">azi maine si intotdeauna</h3>
          <h2 className="text-white text-2xl font-semibold">
            Pachet funerar <span className="text-[#cead3c]">personalizat</span>
          </h2>
          <p className="text-white">
            Stim ca pachetele noastre standard nu sunt intotdeauna potrivite
            pentru nevoile clientilor si de aceea avem posibilitatea de a va
            configura un pachet funerar complet personalizat. Puteti alege oricare
            dintre serviciile si produsele disponibile. Va rog sa ne sunati, la
            orice ora, si veti compune pachetul necesar impreuna cu un consultant.
          </p>
          <Button className="mt-10 rounded-full bg-[#cead3c]">
            Suna un consultant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pachete;
