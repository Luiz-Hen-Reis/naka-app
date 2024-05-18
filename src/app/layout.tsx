import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FooterNav, Providers, UpperHeader } from "@/components";

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
          <Providers>
            <UpperHeader />
            <main className="flex flex-col max-w-[1440px] lg:px-10 lg:mt-10 mx-auto mb-32">{children}</main>
            <FooterNav />
          </Providers>
      </body>
    </html>
  );
}
