import { ArrowUpRight } from 'lucide-react';

const LAMPIRAN = [
  { no: 'Lampiran 1', label: 'Buku Terbaru — "Rumah Kata"', meta: 'kumpulan puisi, cetakan ke-3', url: 'https://www.gramedia.com' },
  { no: 'Lampiran 2', label: 'Newsletter Mingguan', meta: 'surat pendek tiap Jumat pagi', url: 'https://substack.com' },
  { no: 'Lampiran 3', label: 'Kelas Menulis Daring', meta: 'batch baru dibuka September', url: 'https://wa.me/6281339908765' },
  { no: 'Lampiran 4', label: 'Tulisan di Medium', meta: 'esai & catatan perjalanan', url: 'https://medium.com' },
  { no: 'Lampiran 5', label: 'Surat untuk Dara', meta: 'dara@arsipkata.id', url: 'mailto:dara@arsipkata.id' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="kertas relative w-full max-w-lg rotate-[0.4deg] rounded-sm px-7 py-9 md:px-11 md:py-12">
        {/* Perangko + stempel */}
        <div className="absolute right-6 top-6 flex items-start gap-3">
          <div className="perangko rise grid h-20 w-16 place-items-center rounded-sm text-3xl text-kertas" role="img" aria-label="Perangko">✒️</div>
        </div>
        <div className="stamp-in absolute right-10 top-16 rounded border-2 border-merahpos px-2 py-0.5 font-type text-[10px] uppercase tracking-widest text-merahpos" aria-hidden="true">
          Arsip Kata · {new Date().getFullYear()}
        </div>

        {/* Kepala surat */}
        <header className="rise">
          <p className="font-type text-xs uppercase tracking-[0.25em] text-tinta/50">Dari meja kerja</p>
          <h1 className="mt-2 font-type text-4xl text-tinta">Dara Puspita</h1>
          <p className="mt-1 font-serif text-sm italic text-tinta/60">penulis &amp; penyair — Yogyakarta</p>
        </header>

        <p className="rise mt-6 font-serif leading-relaxed text-tinta/80" style={{ animationDelay: '0.15s' }}>
          Kepada yang singgah,<br />
          terima kasih sudah mampir. Berikut kutitipkan beberapa pintu menuju kata-kata saya —
        </p>

        {/* Daftar lampiran */}
        <nav className="mt-6" aria-label="Tautan">
          {LAMPIRAN.map((l, i) => (
            <a
              key={l.no}
              href={l.url}
              target={l.url.startsWith('http') ? '_blank' : undefined}
              rel={l.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="rise group flex items-baseline gap-4 border-b border-dashed border-tinta/25 py-4 transition hover:bg-tinta/5"
              style={{ animationDelay: `${0.25 + i * 0.09}s` }}
            >
              <span className="w-24 shrink-0 font-type text-[11px] uppercase text-merahpos">{l.no}</span>
              <span className="flex-1">
                <span className="block font-type text-lg leading-snug text-tinta underline-offset-4 group-hover:underline">{l.label}</span>
                <span className="block font-serif text-xs italic text-tinta/50">{l.meta}</span>
              </span>
              <ArrowUpRight size={15} className="translate-y-1 text-tinta/30 transition group-hover:text-merahpos" />
            </a>
          ))}
        </nav>

        {/* Tanda tangan */}
        <footer className="rise mt-8 text-right" style={{ animationDelay: '0.8s' }}>
          <p className="font-serif text-sm italic text-tinta/60">salam hangat,</p>
          <p className="font-type text-2xl text-tinta">— Dara</p>
        </footer>
      </div>
    </main>
  );
}
