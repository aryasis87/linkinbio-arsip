const SITE = "https://linkinbio-arsip.vercel.app";

export default function sitemap() {
  const now = new Date();
  return ["", "/buku", "/surat"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
