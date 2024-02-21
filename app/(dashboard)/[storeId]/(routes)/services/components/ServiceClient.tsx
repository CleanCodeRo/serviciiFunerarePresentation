"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ServicesColumn, columns } from "./Columns";
import { DataTable } from "@/components/ui/DataTable";
import ApiList from "@/components/ui/apiList";

interface ServiceClientProps {
  data: ServicesColumn[];
}

export const ServiceClient: React.FC<ServiceClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between select-none">
        <Heading
          title={`Services (${data.length})`}
          description="Manage your services here."
        />
        <Button onClick={() => router.push(`/${params.storeId}/services/new`)}>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="Api" description="API calls for Services" />
      <Separator />

      {/* The api list is for use with postman or whatever is needed for debugging routes */}
      <ApiList entityName="services" entityIdName="serviceId" />
    </>
  );
};
