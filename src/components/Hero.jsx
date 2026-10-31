import React from 'react'
import { ArrowRight, ArrowUpRight, Box, Plane, Sparkles } from 'lucide-react'

const routes = [
  { flag: '🇰🇷', label: 'Korea' },
  { flag: '🇨🇳', label: 'China' },
  { flag: '🇦🇺', label: 'Australia' },
  { flag: '🇸🇬', label: 'Singapore' },
]

export default function Hero() {
  const handleNav = (event, href) => {
    event.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-layout overflow-hidden">
      <div className="hero-grid section-shell grid items-center gap-9 py-12 md:grid-cols-[1.05fr_.95fr] md:gap-8 md:py-16">
        <div className="relative z-10 max-w-2xl">
          <div className="eyebrow">Impor made easy ✨</div>
          <h1 className="mb-6 font-display text-[42px] font-extrabold leading-[1.06] tracking-[-.045em] text-ink sm:text-[58px] lg:text-[66px]">
            Barang incaranmu,<br />sampai di <span className="heading-highlight">Indonesia!</span>
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Mau belanja atau kulakan dari luar negeri? Kami bantu perjalanan barangmu dari Korea, China, Australia, dan Singapore sampai depan pintu. Harga kirim sudah termasuk bea masuk dan pajak, dengan pengantaran gratis untuk area Jakarta.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" onClick={(event) => handleNav(event, '#contact')} className="focus-ring action-dark inline-flex min-h-12 items-center gap-3 rounded-full px-6 font-display text-sm font-bold shadow-lg shadow-[#153044]/15 transition hover:-translate-y-0.5">
              Yuk, konsultasi <ArrowRight size={18} />
            </a>
            <a href="#services" onClick={(event) => handleNav(event, '#services')} className="focus-ring action-outline inline-flex min-h-12 items-center rounded-full px-6 font-display text-sm font-bold transition">
              Kenalan dengan rute kami
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {routes.map(({ flag, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-3.5 py-2 text-xs font-bold text-ink shadow-sm"><span aria-hidden="true">{flag}</span> {label} <span className="text-[#1b9b91]">→ ID</span></span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[510px]">
          <div className="hero-art relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-[36px] border border-white/80 p-5 sm:min-h-[450px] sm:rounded-[48px] sm:p-8">
            <span className="absolute -left-10 top-8 size-36 rounded-full bg-[#ff826c]/20 blur-2xl" />
            <span className="absolute -right-10 bottom-0 size-48 rounded-full bg-[#ffd166]/55 blur-2xl" />
            <div className="floating-chip absolute left-5 top-7 z-10 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 text-xs font-bold text-ink sm:left-8 sm:top-9"><Sparkles size={16} className="text-[#ff806b]" /> Tracking dibantu</div>
            <div className="floating-chip absolute bottom-8 right-4 z-10 flex items-center gap-2 rounded-2xl bg-[#153044] px-3.5 py-2.5 text-xs font-bold text-white sm:bottom-10 sm:right-6"><Plane size={16} className="text-[#ffd166]" /> Udara atau laut</div>

            <div className="hero-route-card relative z-0 w-full max-w-[340px] rotate-[-2deg] rounded-[28px] border border-white bg-white p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div><div className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#1b9b91]">Paket siap jalan</div><div className="mt-1 font-display text-lg font-extrabold text-ink">From anywhere, to you</div></div>
                <span className="grid size-10 place-items-center rounded-2xl bg-[#fff0d1] text-[#b87800]"><Box size={21} /></span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-[#f4f9fb] p-3.5">
                <div className="text-center"><div className="text-2xl" aria-hidden="true">🇸🇬</div><div className="mt-1 text-[10px] font-bold text-muted">Singapore</div></div>
                <div className="relative mx-3 h-8 flex-1"><div className="route-dash absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2" /><span className="absolute left-1/2 top-1/2 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#dff7f3] text-[#147f78]"><ArrowUpRight size={16} /></span></div>
                <div className="text-center"><div className="text-2xl" aria-hidden="true">🇮🇩</div><div className="mt-1 text-[10px] font-bold text-muted">Indonesia</div></div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#fff7df] p-3.5"><span className="grid size-10 place-items-center rounded-xl bg-[#ffd166] text-2xl" aria-hidden="true">📦</span><div className="flex-1"><div className="text-xs font-extrabold text-ink">Your goods, handled!</div><div className="mt-0.5 text-[10px] text-muted">Dokumen · Bea masuk dan pajak · Pengantaran</div></div><span className="text-[#1b9b91]">✓</span></div>
              <div className="mt-4 flex justify-between px-1 text-[9px] font-bold uppercase tracking-[.1em] text-[#9aaab0]"><span>Shippin Express</span><span>Route 001</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
