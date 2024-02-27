import Billboard from "@/components/billboard/Billboard";
import Container from "@/components/ui/container/Container";
import GetBillboard from "@/actions/GetBillboard";
import GetProducts from "@/actions/GetProducts";
import ProductList from "@/components/product/ProductList";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await GetBillboard("clsonv8gi0001p15e16n28a64");
  const products = await GetProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
