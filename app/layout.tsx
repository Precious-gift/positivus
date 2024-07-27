import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Positivus",
  description: "UI designed by Olga Skuja, developed by Falaye Precious-gift",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
          {children}
        </main>
      </body>
    </html>
  );
}
