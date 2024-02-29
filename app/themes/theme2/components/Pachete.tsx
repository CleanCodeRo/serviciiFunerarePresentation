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
    <div className='h-screen'>
      <div className="my-5 grid-cols-1 gap-5 mx-5 grid md:grid-cols-3">
      <Card className="">
          <CardHeader>
            <CardTitle>Standard</CardTitle>
            <CardDescription>
              <span>0 lei</span>
              <p>+ talon pensie</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <h5>Servicii Funerare</h5>
            <hr />
            <p>Acte necesare</p>
            <hr />
            <p>Intocmire si depunere dosar</p>
            <hr />
            <p>Consultanta funerara</p>
            <hr />
            <p>Constatare deces(medic)</p>
            <hr />
            <p>Imbalsamare</p>
            <hr />
            <p>Tiaketare si asezare</p>
            <hr />
            <p>Transport sicriu</p>
            <hr />
            <p>Preluare decedat</p>
            <hr />
            <p>Transport funerare</p>
            <hr />
            <p>Manipulare</p>
            <hr />

            <h5>Produse funerare</h5>
            <hr />
            <p>Sicriu standard complet echipat</p>
            <hr />
            <p>Cruce de lemn inscriptionata</p>
            <hr />
            <p>9 pachete pomana complete cu vesela</p>
            <hr />
            <p>2 platouri de coliva (1-2 kg)</p>
            <hr />
            <p>3 colaci: cap, arhanghel, prescura</p>
            <hr />
            <p>Sticla de vin</p>
            <hr />
            <p>Vin + ulei</p>
            <hr />
            <p>Set pahare + lingurite</p>
            <hr />
            <p>6 prosoape albe mici si 2 mari</p>
            <hr />
            <p>9 batiste cu lumanari si banut</p>
            <hr />
            <p>9 lumanari pentru pachete</p>
            <hr />
            <p>20 doliu de piept</p>
            <hr />
            <p>Toiag de piept + cruce</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Link href='#'>Suna Acum</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center bg-slate-600 text-white">
          <CardHeader>
            <CardTitle>Complet</CardTitle>
            <CardDescription>
              <span>1000 lei</span>
              <p>+ talon pensie</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
          <h5>Servicii Funerare</h5>
            <hr />
            <p>Acte necesare</p>
            <hr />
            <p>Intocmire si depunere dosar</p>
            <hr />
            <p>Consultanta funerara</p>
            <hr />
            <p>Constatare deces(medic)</p>
            <hr />
            <p>Imbalsamare</p>
            <hr />
            <p>Tiaketare si asezare</p>
            <hr />
            <p>Transport sicriu</p>
            <hr />
            <p>Preluare decedat</p>
            <hr />
            <p>Transport funerare</p>
            <hr />
            <p>Manipulare</p>
            <hr />

            <h5>Produse funerare</h5>
            <hr />
            <p>Sicriu hexagonal complet echipat</p>
            <hr />
            <p>Cruce de lemn inscriptionata</p>
            <hr />
            <p>Coroana de flori artificiale</p>
            <hr />
            <p>12 pachete pomana complete cu vesela</p>
            <hr />
            <p>2 platouri de coliva (1-2 kg)</p>
            <hr />
            <p>3 colaci: cap, arhanghel, prescura</p>
            <hr />
            <p>Vin + ulei</p>
            <hr />
            <p>Set pahare + lingurite</p>
            <hr />
            <p>8 prosoape albe mici si 3 mari</p>
            <hr />
            <p>15 batiste cu lumanari si banut</p>
            <hr />
            <p>15 lumanari pentru pachete</p>
            <hr />
            <p>40 doliu de piept + doliu de usa</p>
            <hr />
            <p>Toiag de piept + cruce</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Link href='#'>Suna Acum</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Lux</CardTitle>
            <CardDescription>
              <span>2000 lei</span>
              <p>+ talon pensie</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
          <h5>Servicii Funerare</h5>
            <hr />
            <p>Acte necesare</p>
            <hr />
            <p>Intocmire si depunere dosar</p>
            <hr />
            <p>Consultanta funerara</p>
            <hr />
            <p>Constatare deces(medic)</p>
            <hr />
            <p>Imbalsamare</p>
            <hr />
            <p>Tiaketare si asezare</p>
            <hr />
            <p>Transport sicriu</p>
            <hr />
            <p>Preluare decedat</p>
            <hr />
            <p>Transport funerare</p>
            <hr />
            <p>Manipulare</p>
            <hr />

            <h5>Produse funerare</h5>
            <hr />
            <p>Sicriu octogonal complet echipat</p>
            <hr />
            <p>Cruce de lemn inscriptionata</p>
            <hr />
            <p>Coroana de flori artificiale</p>
            <hr />
            <p>12 pachete pomana complete cu vesela</p>
            <hr />
            <p>2 platouri de coliva (2-3 kg)</p>
            <hr />
            <p>3 colaci: cap, arhanghel, prescura</p>
            <hr />
            <p>Vin + ulei</p>
            <hr />
            <p>Set pahare + lingurite</p>
            <hr />
            <p>15 prosoape albe mici si 3 mari (preot)</p>
            <hr />
            <p>15 batiste cu lumanari si banut</p>
            <hr />
            <p>15 lumanari pentru pachete</p>
            <hr />
            <p>60 doliu de piept + doliu de usa</p>
            <hr />
            <p>Toiag de piept + cruce</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Link href='#'>Suna Acum</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Pachete