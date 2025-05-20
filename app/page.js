'use client';

import Image from 'next/image';
import { UtensilsCrossed, MapPin, Phone, Instagram } from 'lucide-react';

export default function Home() {
  const links = [
    { label: 'Menu Hari Ini', icon: <UtensilsCrossed size={18} />, url: '#' },
    { label: 'Lokasi Angkringan', icon: <MapPin size={18} />, url: '#' },
    { label: 'Pesan via WA', icon: <Phone size={18} />, url: '#' },
    { label: 'Instagram', icon: <Instagram size={18} />, url: '#' },
  ];

  return (
    <main className="min-h-screen bg-[#fdf6e3] text-[#4e3d2f] flex items-center justify-center px-4 font-serif">
      <div className="max-w-md w-full bg-white/80 border-[1.5px] border-amber-300 rounded-3xl p-6 shadow-[4px_4px_0px_#e0b973] relative">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-2 relative rounded-full overflow-hidden border-4 border-amber-400">
            <Image
              src="/images/p1.jpg"
              alt="Foto angkringan"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold mt-2">Angkringan NamaAnda</h1>
          <p className="text-sm text-[#7c5b3e] italic">
            {`"Nasi kucing, wedang jahe, ngobrol sampe pagi"`}
          </p>
        </div>
        <div className="space-y-4">
          {links.map(({ label, icon, url }, i) => (
            <a
              key={i}
              href={url}
              className="flex items-center justify-between px-4 py-3 bg-[#fffaf0] border border-amber-200 rounded-lg hover:bg-[#ffefcc] transition"
            >
              <span className="flex items-center gap-2">{icon} {label}</span>
              <span className="text-amber-500">↗</span>
            </a>
          ))}
        </div>
        <p className="text-center text-xs mt-6 text-amber-700">#LesehanCulture #AsliJogja</p>
      </div>
    </main>
  );
}
