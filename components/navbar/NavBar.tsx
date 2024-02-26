import Link from "next/link";
import Container from "../ui/container/Container";
import MainNav from "../mainnav/MainNav";
import GetCategories from "@/actions/GetCategories";
import NavbarActions from "../ui/navbarActions/NavbarActions";

export const revalidate = 0;

const NavBar = async () => {
  const categories = await GetCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="flex ml-4 gap-x-2 font-bold text-xl">
            <p>Logo</p>
            <p>Name</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
