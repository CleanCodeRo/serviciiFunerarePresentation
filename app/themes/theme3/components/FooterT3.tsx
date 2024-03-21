import Link from "next/link";
import React from "react";

const FooterT3 = () => {
  return (
    <div className="bg-[#bbbbbb] w-full min-h-[300px] flex justify-center items-center">
      <div className="4xs:w-full md:w-[70%] h-60 flex justify-evenly">
        <div className="bg-white 4xs:hidden md:flex md:w-[23%] p-10">
          <h1 className="text-md uppercase font-[Cinzel]">logo</h1>
          <p className="mt-4 md:hidden xl:text-xs">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-white 4xs:w-[33%] md:w-[23%] md:p-5 xl:p-10">
          <h1 className="text-md uppercase font-[Cinzel]">link rapid</h1>
          <Link href="/themes/theme3/despre">
            <p className="mt-4 text-xs uppercase">despre noi</p>
          </Link>
          <Link href="/themes/theme3/servicii">
            <p className="mt-2 text-xs uppercase">servicii</p>
          </Link>
          <Link href="/themes/theme3/pachete">
            <p className="mt-2 text-xs uppercase">pachete </p>
          </Link>
          <Link href="/themes/theme3/contact">
            <p className="mt-2 text-xs uppercase">contact </p>
          </Link>
        </div>
        <div className="bg-white 4xs:w-[33%] md:w-[23%] md:p-5 xl:p-10">
          <h1 className="text-md uppercase font-[Cinzel]">linkuri utile</h1>
          <p className="mt-4 text-xs uppercase">confidentialitate</p>
          <p className="mt-2 text-xs uppercase">termeni si conditii</p>
          <p className="mt-2 text-xs uppercase">cookie </p>
          <p className="mt-2 text-xs uppercase">anpc </p>
        </div>
        <div className="bg-white 4xs:w-[33%] md:w-[23%] md:p-5 xl:p-10">
          <h1 className="text-md uppercase font-[Cinzel]">documente utile</h1>
          <p className="mt-4 text-xs uppercase">
            certificate pentru repatriere
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterT3;
