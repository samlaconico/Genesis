import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({weight: "400", subsets: ["latin"], style: ["normal"], variable:'--font-poppins'})
const jost = Jost({weight: "400", subsets: ["latin"], variable:'--font-jost'})


export const metadata: Metadata = {
  title: "Genesis 1 Auto Concepts",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${jost.variable} m-auto`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
