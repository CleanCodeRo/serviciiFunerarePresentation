"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./Columns";
import { DataTable } from "@/components/ui/DataTable";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {


  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="View your orders here."
      />
      <Separator />
      <DataTable searchKey='products' columns={columns} data={data} />
    </>
  );
};
