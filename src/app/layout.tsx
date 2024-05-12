import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UpperHeader } from "@/components";
import { ModalsProvider } from "@/contexts/modalsContext";

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
        <ModalsProvider>
          <UpperHeader />
          <main className="flex flex-col max-w-[1440px] lg:px-10 lg:mt-10 mx-auto">{children}</main>
        </ModalsProvider>
      </body>
    </html>
  );
}
