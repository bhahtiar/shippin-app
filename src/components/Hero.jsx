import React from 'react'
import { ArrowRight, Globe2, Plane, Ship, Truck } from 'lucide-react'

const routes = [
  { icon: Plane, label: 'Korea ke Indonesia' },
  { icon: Ship, label: 'China ke Indonesia' },
  { icon: Plane, label: 'Australia ke Indonesia' },
  { icon: Truck, label: 'Domestik' },
]

export default function Hero() {
  const handleNav = (event, href) => {
    event.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#fafafa] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] overflow-hidden md:block">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="absolute left-0 right-0 h-px -skew-y-[8deg] bg-brand-yellow"
            style={{ top: `${8 + index * 8}%`, opacity: 0.06 + index * 0.04 }}
          />
        ))}
        <div className="absolute left-0 right-0 top-[30%] h-[3px] -skew-y-[8deg] bg-brand-yellow opacity-60" />
        <div className="absolute left-0 right-0 top-[58%] h-[3px] -skew-y-[8deg] bg-brand-yellow opacity-30" />
      </div>

      <div className="pointer-events-none absolute right-[8%] top-[18%] hidden text-ink/10 lg:block">
        {[Globe2, Ship, Plane, Truck].map((Icon, index) => (
          <Icon
            key={index}
            className="absolute"
            size={34}
            style={{ top: `${index * 90}px`, left: `${Math.sin(index) * 60}px` }}
          />
        ))}
      </div>

      <div className="section-shell relative z-10">
        <div className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-1.5 font-display text-sm font-bold text-ink">
            <Ship size={16} />
            Import, Export, Logistics
          </div>

          <h1 className="mb-7 font-display text-[42px] font-black leading-[1.05] text-ink sm:text-[58px] lg:text-[76px]">
            Kirim & Terima
            <br />
            Barang dari{' '}
            <span className="relative inline-block">
              <span className="absolute bottom-1 left-[-4px] right-[-4px] -z-10 h-[38%] rounded bg-brand-yellow" />
              Seluruh Dunia
            </span>
          </h1>

          <p className="mb-11 max-w-xl text-lg leading-8 text-muted">
            Shippin Express melayani jasa import-export antara Indonesia, Korea, China, dan Australia,
            termasuk freight forwarding dan pengiriman domestik dengan proses yang cepat dan terpercaya.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#contact"
              onClick={(event) => handleNav(event, '#contact')}
              className="focus-ring inline-flex items-center gap-2 rounded-[10px] bg-ink px-8 py-4 font-display text-sm font-bold text-brand-yellow transition hover:-translate-y-0.5 hover:bg-[#333]"
            >
              Mulai Konsultasi <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              onClick={(event) => handleNav(event, '#services')}
              className="focus-ring rounded-[10px] border border-line px-8 py-4 font-display text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
            >
              Lihat Layanan
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-2.5">
            {routes.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-lg border border-line bg-white px-3.5 py-2 text-sm font-medium text-ink">
                <Icon size={16} className="text-muted" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
