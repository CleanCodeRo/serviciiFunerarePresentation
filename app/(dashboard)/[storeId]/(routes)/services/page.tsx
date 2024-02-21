import prismadb from "@/lib/prismadb";
import { ServiceClient } from "./components/ServiceClient";
import { ServicesColumn } from "./components/Columns";
import { format } from "date-fns";
import { formatter } from "@/lib/utils";

const Services = async ({ params }: { params: { storeId: string } }) => {
  const services = await prismadb.services.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedServices: ServicesColumn[] = services.map((item) => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: formatter.format(item.price),
    description: item.description,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ServiceClient data={formattedServices} />
      </div>
    </div>
  );
};

export default Services;
