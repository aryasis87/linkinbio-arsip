import { Special_Elite, Lora } from "next/font/google";
import "./globals.css";

const elite = Special_Elite({ subsets: ["latin"], variable: "--font-elite", weight: "400" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", style: ["normal", "italic"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Dara","jobTitle":"Penulis & Penyair","url":"https://arsip.pintuweb.com","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://arsip.pintuweb.com"),
  title: "Arsip Kata — Surat dari Dara",
  description: "Link in bio penulis & penyair Dara: buku, newsletter, dan kelas menulis — tersimpan rapi dalam satu arsip.",
  applicationName: "Arsip Kata",
  keywords: ["link in bio", "penulis", "penyair", "newsletter", "kelas menulis"],
  authors: [{ name: "Arsip Kata" }],
  creator: "Arsip Kata",
  publisher: "Arsip Kata",
  alternates: { canonical: "https://arsip.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://arsip.pintuweb.com",
    siteName: "Arsip Kata",
    title: "Arsip Kata — Surat dari Dara",
    description: "Link in bio penulis & penyair Dara: buku, newsletter, dan kelas menulis — tersimpan rapi dalam satu arsip.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Arsip Kata — Surat dari Dara" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arsip Kata — Surat dari Dara",
    description: "Link in bio penulis & penyair Dara: buku, newsletter, dan kelas menulis — tersimpan rapi dalam satu arsip.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${elite.variable} ${lora.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
