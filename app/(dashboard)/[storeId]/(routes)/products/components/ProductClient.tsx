"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./Columns";
import { DataTable } from "@/components/ui/DataTable";
import ApiList from "@/components/ui/apiList";

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between select-none">
        <Heading
          title={`Products (${data.length})`}
          description="Manage your products here."
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/products/new`)}
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="Api" description="API calls for Products" />
      <Separator />

      {/* The api list is for use with postman or whatever is needed for debugging routes */}
      <ApiList entityName="products" entityIdName="productId" />
    </>
  );
};
