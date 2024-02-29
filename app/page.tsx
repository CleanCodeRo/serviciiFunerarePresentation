import Hero from "@/components/presentationOnly/hero/Hero";

export const revalidate = 0;

const HomePage = () => {
  return (
    <main className="flex items-center justify-center">
      <Hero />
    </main>
  );
};

export default HomePage;
