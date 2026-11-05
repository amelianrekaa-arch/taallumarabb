import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Ta'allum Arabic — Belajar Bahasa Arab",
  description: "Belajar mufrodat, jumlah ismiyah, jumlah fi'liyah, dan latihan Bahasa Arab."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><Navbar />{children}</body></html>;
}