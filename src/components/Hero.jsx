import React from 'react'
import { ArrowRight, Plane, Ship } from 'lucide-react'

const routes = [
  { icon: Plane, label: 'Korea ke Indonesia' },
  { icon: Ship, label: 'China ke Indonesia' },
  { icon: Plane, label: 'Australia ke Indonesia' },
]

export default function Hero() {
  const handleNav = (event, href) => {
    event.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-layout overflow-hidden">
      <div className="hero-grid grid md:grid-cols-[.95fr_1.05fr]">
        <div className="relative flex items-center px-5 py-14 sm:px-8 md:py-20 lg:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] lg:pr-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[38%] bg-[repeating-linear-gradient(135deg,transparent_0_45px,rgba(34,107,130,.035)_45px_46px)] md:block" />
          <div className="relative z-10 max-w-2xl">
            <div className="eyebrow">Layanan Impor Terpercaya</div>
            <h1 className="mb-6 max-w-[650px] font-display text-[42px] font-bold leading-[1.04] tracking-[-.045em] text-ink sm:text-[58px] lg:text-[68px]">
              Bawa produk dunia <span className="heading-highlight">ke Indonesia.</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-[#536671] sm:text-lg sm:leading-8">
              Shippin Express membantu bisnis Anda mengimpor barang dari Korea, China, dan Australia dengan dukungan freight, kepabeanan, dan pengiriman sampai tujuan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" onClick={(event) => handleNav(event, '#contact')} className="focus-ring inline-flex min-h-12 items-center gap-3 bg-ink px-6 font-display text-sm font-bold text-white transition hover:bg-[#205570]">
                Konsultasi Impor <ArrowRight size={18} />
              </a>
              <a href="#services" onClick={(event) => handleNav(event, '#services')} className="focus-ring inline-flex min-h-12 items-center px-4 font-display text-sm font-semibold text-ink transition hover:bg-white/60">
                Lihat layanan
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-2">
              {routes.map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 border border-[#14364a]/15 bg-white/55 px-3 py-2 text-xs font-semibold text-[#36515e]">
                  <Icon size={15} className="text-[#226b82]" /> {label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative min-h-[330px] pl-4 md:min-h-full md:py-8 md:pr-0 lg:pl-7">
          <div className="hero-photo h-full min-h-[530px] rounded-tl-[52px] md:rounded-tl-[72px]" role="img" aria-label="Kapal kontainer membawa barang impor" />
          <div className="absolute left-8 right-7 top-5 flex justify-between text-[9px] font-bold tracking-[.14em] text-white sm:left-10 sm:right-10 md:top-12">
            <span className="bg-[#102d3c]/35 px-3 py-2 backdrop-blur">SHIPPIN EXPRESS</span>
            <span className="bg-[#102d3c]/40 px-3 py-2 backdrop-blur">INDONESIA IMPORT ROUTES</span>
          </div>
          <div className="hero-photo-card absolute bottom-7 left-0 flex min-w-[260px] items-center gap-3 bg-brand-yellow px-4 py-3.5 text-ink sm:bottom-14 sm:min-w-[310px] sm:px-5">
            <span className="grid size-10 place-items-center bg-ink font-display text-xs font-extrabold text-white">SE</span>
            <span className="flex flex-1 flex-col gap-1"><b className="font-display text-xs">IMPOR TANPA RIBET</b><small className="text-[10px] font-semibold text-[#40545a]">Korea · China · Australia</small></span>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </section>
  )
}
