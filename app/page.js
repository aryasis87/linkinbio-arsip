import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LAMPIRAN } from '@/lib/dara';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="kertas relative w-full max-w-lg rotate-[0.4deg] rounded-sm px-7 py-9 md:px-11 md:py-12">
        <div className="absolute right-6 top-6 flex items-start gap-3" aria-hidden="true">
          <div className="perangko rise grid h-20 w-16 place-items-center rounded-sm text-3xl text-kertas">✒️</div>
        </div>
        <div className="stamp-in absolute right-10 top-16 rounded border-2 border-merahpos px-2 py-0.5 font-type text-[10px] uppercase tracking-widest text-merahpos" aria-hidden="true">
          Arsip Kata · 2026
        </div>

        <header className="rise pr-20 sm:pr-28">
          <p className="font-type text-xs uppercase tracking-[0.25em] text-tinta/75">Dari meja kerja</p>
          <h1 className="mt-2 font-type text-4xl text-tinta">Dara Puspita</h1>
          <p className="mt-1 font-serif text-sm italic text-tinta/75">penulis &amp; penyair — Yogyakarta</p>
        </header>

        <p className="rise mt-6 font-serif leading-relaxed text-tinta/90" style={{ animationDelay: '0.15s' }}>
          Kepada yang singgah,<br />
          terima kasih sudah mampir. Berikut kutitipkan beberapa pintu menuju kata-kata saya —
        </p>

        <nav className="mt-6" aria-label="Tautan">
          {LAMPIRAN.map((l, i) => (
            <Link
              key={l.no}
              href={l.href}
              className="rise group flex items-baseline gap-4 border-b border-dashed border-tinta/25 py-4 transition hover:bg-tinta/5"
              style={{ animationDelay: `${0.25 + i * 0.09}s` }}
            >
              <span className="w-24 shrink-0 font-type text-[11px] uppercase text-merahpos">{l.no}</span>
              <span className="flex-1">
                <span className="block font-type text-lg leading-snug text-tinta underline-offset-4 group-hover:underline">{l.label}</span>
                <span className="block font-serif text-xs italic text-tinta/75">{l.meta}</span>
              </span>
              <ArrowUpRight size={15} className="translate-y-1 text-tinta/50 transition group-hover:text-merahpos" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <footer className="rise mt-8 text-right" style={{ animationDelay: '0.8s' }}>
          <p className="font-serif text-sm italic text-tinta/75">salam hangat,</p>
          <p className="font-type text-2xl text-tinta">— Dara</p>
          <p className="mt-4 font-serif text-[11px] italic text-tinta/75">penulis fiktif untuk purwarupa desain</p>
        </footer>
      </div>
    </main>
  );
}
