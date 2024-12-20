import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="bg-[#F6F5FD]  px-4 md:px-16">
          <Header></Header>
        </div>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
