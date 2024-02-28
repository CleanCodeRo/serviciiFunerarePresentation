import Hero from "@/components/presentationOnly/hero/Hero";
import Navigation from "@/app/themes/theme1/components/Navigation";

export const revalidate = 0;

const HomePage = () => {
  return (
    <main className="text-center my-10">
      <Hero />
    </main>
  );
};

export default HomePage;
