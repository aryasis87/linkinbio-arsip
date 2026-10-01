import { KELAS, SITE, SURAT, rp } from '@/lib/dara';
import Kembali from '../components/Kembali';
import FormSurat from '../components/FormSurat';

export const metadata = {
  title: 'Surat Jumat Pagi & Kelas Menulis',
  description: 'Arsip surat Jumat pagi Dara Puspita, kelas menulis daring "Menulis dari hal-hal kecil" 5 November – 10 Desember 2026, dan formulir untuk berlangganan atau membalas.',
  alternates: { canonical: `${SITE}/surat` },
};

export default function Surat() {
  return (
    <main className="px-4 py-12">
      <div className="kertas relative mx-auto w-full max-w-2xl rounded-sm px-7 py-9 md:px-11 md:py-12">
        <Kembali lampiran="Lampiran 3" />
        <h1 className="mt-8 font-type text-4xl text-tinta">Surat Jumat Pagi</h1>
        <p className="mt-2 font-serif italic text-tinta/80">Satu surat pendek, tiap Jumat sebelum pukul tujuh. Empat yang terakhir:</p>

        <ol className="mt-8 space-y-7">
          {SURAT.map((s) => (
            <li key={s.tanggal} className="border-l-2 border-merahpos/60 pl-5">
              <p className="font-type text-xs uppercase text-merahpos">{s.tanggal}</p>
              <h2 className="mt-1 font-type text-xl text-tinta">{s.judul}</h2>
              <p className="mt-2 font-serif leading-relaxed text-tinta/90">&ldquo;{s.petikan}&rdquo;</p>
            </li>
          ))}
        </ol>

        <section id="kelas" aria-labelledby="kelas-h" className="mt-14 scroll-mt-6 border-t-2 border-dashed border-tinta/30 pt-8">
          <p className="font-type text-[11px] uppercase text-merahpos">Lampiran 4</p>
          <h2 id="kelas-h" className="mt-1 font-type text-3xl text-tinta">Kelas menulis: {KELAS.nama}</h2>
          <p className="mt-2 font-serif italic text-tinta/80">{KELAS.jadwal}</p>
          <ol className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {KELAS.materi.map((m, i) => <li key={m} className="font-serif"><span className="font-type text-merahpos">{i + 1}.</span> {m}</li>)}
          </ol>
          <p className="mt-5 font-type text-lg text-tinta">{rp(KELAS.harga)} · {KELAS.pertemuan} pertemuan · sisa {KELAS.sisa} dari {KELAS.kuota} kursi</p>
        </section>

        <FormSurat />
        <p className="mt-8 font-serif text-xs italic text-tinta/75">Surat, kelas, dan harga adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
