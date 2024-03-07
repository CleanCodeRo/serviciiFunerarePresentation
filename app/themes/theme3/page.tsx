import CoreValues from "./components/CoreValues";
import Despre from "./components/Despre";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import ServiciiOferite from "./components/ServiciiOferite";

const Theme3 = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Despre/>
      <CoreValues/>
      <ServiciiOferite/>
      <div className="h-[3000px]">NEW</div>
    </main>
  );
};

export default Theme3;
