import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UpperHeader } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naka App",
  description: "Viva la experiencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} text-[#333333]`}>
        <UpperHeader />
        <main className="flex max-w-[1440px] lg:px-10 lg:mt-10 mx-auto">{children}</main>
      </body>
    </html>
  );
}
