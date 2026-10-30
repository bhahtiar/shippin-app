import React from 'react'
import { ArrowRight, Plane, Ship } from 'lucide-react'

const services = [
  { icon: Plane, title: 'Impor Korea ke Indonesia', desc: 'Kosmetik, elektronik, fashion, K-beauty, dan produk pilihan Korea Selatan. Kami bantu koordinasi pengiriman, dokumen, dan proses kepabeanan hingga barang tiba.', mode: 'Udara & laut' },
  { icon: Ship, title: 'Impor China ke Indonesia', desc: 'Pengadaan dan pengiriman barang manufaktur, elektronik, tekstil, hingga bahan baku dari China dengan dukungan koordinasi supplier dan customs.', mode: 'Laut & udara' },
  { icon: Plane, title: 'Impor Australia ke Indonesia', desc: 'Bawa produk pertanian, suplemen, skincare, dan komoditas Australia ke Indonesia dengan pendampingan dokumen dan proses impor.', mode: 'Udara & laut' },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-14">
          <div>
            <div className="eyebrow">Layanan Kami</div>
            <h2 className="section-heading max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-5xl">Rute impor utama,<br />satu <span className="heading-highlight">mitra tepercaya.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">Dukungan dari pengambilan barang sampai proses kepabeanan dan pengantaran di Indonesia.</p>
        </div>

        <div className="grid gap-4 border-y border-line py-4 md:grid-cols-3 md:gap-0 md:py-0">
          {services.map(({ icon: Icon, title, desc, mode }, index) => (
            <article key={title} className="import-card flex min-h-[260px] flex-col border-line bg-white p-5 sm:p-7 md:border-r md:py-8 md:first:pl-0 md:last:border-r-0">
              <div className="mb-7 flex items-start justify-between">
                <span className="grid size-11 place-items-center bg-[#d7eef0] text-[#14364a]"><Icon size={21} /></span>
                <span className="font-display text-[10px] font-bold text-[#8a989c]">0{index + 1}</span>
              </div>
              <h3 className="font-display text-lg font-bold leading-snug text-ink">{title}</h3>
              <p className="mt-3 flex-1 text-[13px] leading-6 text-muted">{desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="text-[10px] font-bold uppercase tracking-[.12em] text-[#226b82]">{mode}</span>
                <a href="#contact" className="focus-ring inline-flex items-center gap-2 font-display text-xs font-bold text-[#226b82]">Tanya impor <ArrowRight size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
