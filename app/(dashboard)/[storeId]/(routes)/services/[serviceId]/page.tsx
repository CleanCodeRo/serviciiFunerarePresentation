import prismadb from "@/lib/prismadb";
import ServiceForm from "./components/ServiceForm";

const ServicePage = async ({
  params,
}: {
  params: {
    serviceId: string;
    storeId: string;
  };
}) => {
  const service = await prismadb.services.findUnique({
    where: {
      id: params.serviceId,
    },
    include: {
      images: true,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ServiceForm initialData={service} />
      </div>
    </div>
  );
};

export default ServicePage;
