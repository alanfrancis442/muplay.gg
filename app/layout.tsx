import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  localFont  from "@next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const paladins = localFont({src: "../public/fonts/paladins.ttf",variable:'--font-paladins'});

export const metadata: Metadata = {
  title: "muplay.gg",
  description: "muplay.gg a platform for gamers, developers and eSports enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${paladins.variable}`}>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
