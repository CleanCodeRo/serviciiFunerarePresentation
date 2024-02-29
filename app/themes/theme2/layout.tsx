import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Servicii Funerare",
  description:
    "Servicii funerare complete la cele mai bune preturi. Suna acum!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
