import CoreValues from "./components/CoreValues";
import Despre from "./components/Despre";
import ContactHp from "./components/ContactHp";
import Harta from "./components/Harta";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import PacheteleNoastre from "./components/PacheteleNoastre";
import RepatriereHomePage from "./components/RepatriereHomePage";
import ServiciiOferite from "./components/ServiciiOferite";
import FooterT3 from "./components/FooterT3";

const Theme3 = () => {
  return (
    <main className="">
      <Hero />
      <Despre />
      <CoreValues />
      <ServiciiOferite />
      <PacheteleNoastre />
      <RepatriereHomePage />
      <Harta />
      <ContactHp/>
    </main>
  );
};

export default Theme3;
