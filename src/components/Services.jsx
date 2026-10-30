import React from 'react'
import { ArrowUpRight, Plane, Ship } from 'lucide-react'

const services = [
  { flag: '🇰🇷', country: 'Korea', icon: Plane, tint: 'bg-[#e9e4ff]', label: 'Popular', desc: 'K-beauty, fashion, elektronik, dan banyak lagi. Kami bantu urus perjalanan paketmu sampai Indonesia.' },
  { flag: '🇨🇳', country: 'China', icon: Ship, tint: 'bg-[#ffe7df]', label: 'Best value', desc: 'Kulakan produk, bahan baku, atau barang pilihan dengan dukungan pengiriman dan proses customs.' },
  { flag: '🇦🇺', country: 'Australia', icon: Plane, tint: 'bg-[#e1f5dc]', label: 'Aussie finds', desc: 'Suplemen, skincare, produk pertanian, dan barang favorit dari Australia ke Indonesia.' },
  { flag: '🇸🇬', country: 'Singapore', icon: Plane, tint: 'bg-[#fff0c9]', label: 'New route', desc: 'Belanja dari Singapore makin praktis—kami bantu dari penjemputan hingga tiba di alamatmu.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-12">
          <div>
            <div className="eyebrow">Rute impor pilihan</div>
            <h2 className="section-heading max-w-2xl text-3xl font-extrabold leading-tight text-ink sm:text-5xl">Jauh-jauh belanja,<br /><span className="heading-highlight">kami yang urus!</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">Empat negara asal, satu tim yang siap bantu sampai paket mendarat dengan aman.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(({ flag, country, icon: Icon, tint, label, desc }) => (
            <article key={country} className="import-card flex min-h-[280px] flex-col rounded-[28px] border border-[#e5eef1] bg-[#fbfdfe] p-5 sm:p-6">
              <div className="mb-6 flex items-start justify-between">
                <span className={`grid size-14 place-items-center rounded-[20px] ${tint} text-3xl`} aria-hidden="true">{flag}</span>
                <span className="rounded-full bg-[#eef8f6] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.1em] text-[#147f78]">{label}</span>
              </div>
              <div className="mb-2 flex items-center gap-2"><Icon size={16} className="text-[#1b9b91]" /><span className="text-[10px] font-bold uppercase tracking-[.11em] text-[#77909a]">Import ke Indonesia</span></div>
              <h3 className="font-display text-xl font-extrabold text-ink">Dari {country}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-6 text-muted">{desc}</p>
              <a href="#contact" className="focus-ring mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 font-display text-xs font-extrabold text-ink shadow-sm ring-1 ring-[#e5eef1] transition hover:bg-[#153044] hover:text-white">Tanya rute <ArrowUpRight size={15} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
