"use client";
import { Service } from "@/types";
import Currency from "../ui/currency/Currency";
import Button from "../ui/buttonMine/Button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/useCart";
import { MouseEventHandler } from "react";

interface InfoServiceProps {
  data: Service;
}

const InfoService: React.FC<InfoServiceProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.add(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Included Services: </h3>
          <div>{data?.description}</div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default InfoService;
