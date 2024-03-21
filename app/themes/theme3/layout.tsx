import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import FooterT3 from "./components/FooterT3";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Servicii Funerare",
  description:
    "Servicii funerare complete la cele mai bune preturi. Suna acum!",
};

export default function Theme3Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <FooterT3/>
      </body>
    </html>
  );
}
