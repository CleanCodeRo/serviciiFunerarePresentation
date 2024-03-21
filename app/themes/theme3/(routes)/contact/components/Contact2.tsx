import React from "react";
import Harta from "../../../components/Harta";
import { Clock, MapPin, Phone, Pin } from "lucide-react";

const Contact2 = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-[90%] flex flex-col justify-center items-center">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magni
          maxime a quaerat exercitationem accusamus voluptatum eum aliquam
          possimus id quam beatae, dolores nihil laboriosam, cum dolore ducimus
          labore mollitia.
        </h2>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim fugiat
          quod veritatis temporibus excepturi? Sapiente recusandae eligendi
          provident odio illo. Impedit ex, maxime incidunt officiis velit
          accusantium enim ducimus ad?
        </h3>
        <div className="grid 4xs:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col justify-center items-center p-10">
            <div className="flex mt-4">
              <Clock className="mr-4" /> NON-STOP
            </div>
            <div className="flex mt-4">
              <Phone className="mr-4" /> (0722) 222 222
            </div>
            <div className="flex mt-4">
              <MapPin className="mr-4" /> Str. X Nr.Y, Bucuresti
            </div>
          </div>
          <div>
            <Harta />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
