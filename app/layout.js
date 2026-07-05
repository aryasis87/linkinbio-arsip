import { Special_Elite, Lora } from "next/font/google";
import "./globals.css";

const elite = Special_Elite({ subsets: ["latin"], variable: "--font-elite", weight: "400" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", style: ["normal", "italic"] });

export const metadata = {
  title: "Arsip Kata — Surat dari Dara",
  description: "Penulis & penyair. Buku, newsletter, dan kelas menulis — tersimpan rapi di satu arsip.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${elite.variable} ${lora.variable} antialiased`}>{children}</body>
    </html>
  );
}
