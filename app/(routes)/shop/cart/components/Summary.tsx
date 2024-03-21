"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/buttonMine/Button";
import { toast } from "react-hot-toast";
import Currency from "@/components/ui/currency/Currency";
import useCart from "@/hooks/useCart";

const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams && searchParams.get("success")) {
      toast.success("Order placed successfully");
      removeAll();
    }

    if (searchParams && searchParams.get("canceled")) {
      toast.error("Order canceled");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    console.log(`API URL: ${process.env.NEXT_PUBLIC_API_URL}/checkout`);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = res.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-200 px-4 py-6 sm:p-6 lg:col-span-3 lg:mt-0 lg:p-8">
      <h2>Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-400 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className="w-full mt-6" onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
