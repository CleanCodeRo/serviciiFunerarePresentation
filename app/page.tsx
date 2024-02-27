import Button from "@/components/ui/button/Button";
import Link from "next/link";


export const revalidate = 0;

const HomePage = () => {


  return (
   <main className="text-center my-10">
    <h1 className="text-6xl my-5">Hero Pages Simple</h1>
    <Link href="/shop">
        <Button>Shop</Button>
    </Link>
   </main>
  );
};

export default HomePage;
