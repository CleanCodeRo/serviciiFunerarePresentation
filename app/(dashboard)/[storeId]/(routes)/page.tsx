import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({params}) => {

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  
  })

  return <div>
    <h1>{store?.name}</h1>
    <h2>Dashboard</h2>
  </div>;
};

export default DashboardPage;
