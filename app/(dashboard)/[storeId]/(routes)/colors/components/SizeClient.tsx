"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./Columns";
import { DataTable } from "@/components/ui/DataTable";
import ApiList from "@/components/ui/apiList";

interface SizeClientProps {
  data: SizeColumn[];
}

export const SizeClient: React.FC<SizeClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between select-none">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage your sizes here."
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/sizes/new`)}
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Size
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="Api" description="API calls for Sizes" />
      <Separator />

      {/* The api list is for use with postman or whatever is needed for debugging routes */}
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
};
