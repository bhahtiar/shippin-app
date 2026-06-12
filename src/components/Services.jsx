import React from 'react'
import { ArrowRight, Plane, Ship, Truck } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'Import Korea ke Indonesia',
    desc: 'Produk kosmetik, elektronik, fashion, K-beauty, dan berbagai barang dari Korea Selatan langsung ke tangan Anda di Indonesia. Kami tangani bea cukai hingga pengiriman akhir.',
    tag: 'Import',
  },
  {
    icon: Plane,
    title: 'Export Indonesia ke Korea',
    desc: 'Ekspor produk lokal Indonesia ke pasar Korea Selatan. Kami bantu pengurusan dokumen ekspor, perizinan, dan koordinasi dengan mitra logistik di Korea.',
    tag: 'Export',
  },
  {
    icon: Ship,
    title: 'Import China ke Indonesia',
    desc: 'Impor barang dari China dengan harga kompetitif. Mulai dari produk manufaktur, elektronik, tekstil, hingga bahan baku industri. Koneksi langsung ke supplier China.',
    tag: 'Import',
  },
  {
    icon: Plane,
    title: 'Import Australia ke Indonesia',
    desc: 'Produk pertanian premium, suplemen, skincare, dan berbagai komoditas dari Australia ke Indonesia. Kami memastikan kepatuhan standar impor dan kelancaran bea cukai.',
    tag: 'Import',
  },
  {
    icon: Plane,
    title: 'Export Indonesia ke Australia',
    desc: 'Buka peluang pasar Australia untuk produk Anda. Kami fasilitasi proses ekspor, sertifikasi, dan pengiriman ke berbagai kota besar di Australia.',
    tag: 'Export',
  },
  {
    icon: Ship,
    title: 'Freight Forwarding',
    desc: 'Layanan pengiriman kargo internasional via udara maupun laut. Kami koordinasikan seluruh rantai logistik mulai dari pickup, packing, customs clearance, hingga delivery.',
    tag: 'Freight',
  },
  {
    icon: Truck,
    title: 'Pengiriman Domestik',
    desc: 'Layanan pengiriman antar kota dan antar pulau di seluruh Indonesia. Cepat, aman, dan terpercaya untuk kebutuhan distribusi bisnis maupun personal.',
    tag: 'Domestik',
  },
]

const tagClasses = {
  Import: 'bg-yellow-100 text-yellow-800',
  Export: 'bg-green-100 text-green-800',
  Freight: 'bg-sky-100 text-sky-800',
  Domestik: 'bg-fuchsia-100 text-fuchsia-800',
}

export default function Services() {
  return (
    <section id="services" className="bg-soft py-24">
      <div className="section-shell">
        <div className="mb-14">
          <div className="eyebrow">Layanan Kami</div>
          <h2 className="max-w-xl font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
            Semua rute,
            <br />
            satu <span className="heading-highlight">mitra logistik.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const Icon = service.icon
  const contactHref = window.location.pathname === '/' ? '#contact' : '/#contact'

  return (
    <article className="group rounded-[14px] border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-ink hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-xl bg-brand-yellow text-ink">
          <Icon size={24} />
        </span>
        <span className={`rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] ${tagClasses[service.tag]}`}>
          {service.tag}
        </span>
      </div>
      <h3 className="mb-2.5 font-display text-[17px] font-bold leading-snug text-ink">
        {service.title}
      </h3>
      <p className="text-sm leading-7 text-muted">{service.desc}</p>

      <a
        href={contactHref}
        className="mt-5 hidden border-t border-soft pt-4 font-display text-sm font-bold text-ink transition hover:text-muted group-hover:flex group-hover:items-center group-hover:gap-2"
      >
        Tanya layanan ini <ArrowRight size={16} />
      </a>
    </article>
  )
}
