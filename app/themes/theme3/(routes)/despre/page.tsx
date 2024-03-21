import React from "react";
import DespreNoiHero from "./components/DespreNoiHero";
import DespreNoiAbout from "./components/DespreNoiAbout";
import DespreNoi3 from "./components/DespreNoi3";
import DespreNoi4 from "./components/DespreNoi4";
import ContactHp from "../../components/ContactHp";

const page = () => {
  return (
    <div>
      <DespreNoiHero />
      <DespreNoiAbout />
      <DespreNoi3 />
      <DespreNoi4 />
      <ContactHp />
    </div>
  );
};

export default page;
