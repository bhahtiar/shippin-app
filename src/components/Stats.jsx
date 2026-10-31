import React from 'react'
import { ClipboardCheck, Globe2, PackageCheck, Truck } from 'lucide-react'

const achievements = [
  { icon: Globe2, title: 'Rute impor aktif', label: 'Korea, China, Australia, Singapore' },
  { icon: ClipboardCheck, title: 'Bantuan dokumen', label: 'Invoice, packing list, dan customs' },
  { icon: Truck, title: 'Gratis pengantaran Jakarta', label: 'Bea cukai termasuk harga kirim' },
  { icon: PackageCheck, title: 'Koordinasi cargo', label: 'Update proses dan estimasi pengiriman' },
]

export default function Stats() {
  return (
    <section className="bg-ink py-12">
      <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map(({ icon: Icon, title, label }) => (
          <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
            <div className="mb-4 grid size-10 place-items-center rounded-2xl bg-brand-yellow text-ink">
              <Icon size={20} />
            </div>
            <h3 className="mb-1.5 font-display text-[15px] font-bold text-white">{title}</h3>
            <p className="text-xs leading-5 text-white/50">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
