import React from 'react'
import { Globe2, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Layanan', href: '#services' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Kontak', href: '#contact' },
]

const services = [
  'Import Korea · minimum 1 kg',
  'Import China · minimum 10 kg',
  'Import Australia · minimum 1 kg',
  'Import Singapore · minimum 10 kg',
  'Bea masuk dan pajak termasuk · gratis antar area Jakarta',
]

const routes = ['ID', 'KR', 'CN', 'AU', 'SG']

export default function Footer() {
  const handleNav = (event, href) => {
    if (!href.startsWith('#')) return

    event.preventDefault()
    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`
      return
    }

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink py-14 text-white">
      <div className="section-shell">
        <div className="mb-8 grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Shippin Express"
                className="size-10 rounded-lg object-cover"
              />
              <span className="font-display text-[17px] font-extrabold text-white">
                Shippin <span className="font-normal">Express</span>
              </span>
            </div>
            <p className="max-w-64 text-sm leading-7 text-white/45">
              Mitra impor terpercaya dari Korea, China, Australia, dan Singapore ke Indonesia.
            </p>
          </div>

          <FooterColumn title="Navigasi">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNav(event, link.href)}
                className="text-sm text-white/50 transition hover:text-brand-yellow"
              >
                {link.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="Layanan">
            {services.map((service) => (
              <span key={service} className="text-sm text-white/50">
                {service}
              </span>
            ))}
          </FooterColumn>

          <div>
            <h4 className="mb-4 font-display text-[13px] font-bold uppercase tracking-[1px] text-white">
              Hubungi Kami
            </h4>
            <a
              href="https://wa.me/6281511233838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-display text-sm font-bold text-white transition hover:bg-[#1ebe59]"
            >
              <MessageCircle size={17} /> WhatsApp Kami
            </a>
            <p className="mt-3.5 text-[13px] leading-6 text-white/35">
              +62 815-1123-3838
              <br />
              Respon dalam 1 x 24 jam
            </p>
            <div className="mt-5">
              <h4 className="mb-3 font-display text-[12px] font-bold uppercase tracking-[1px] text-white/70">
                Ikuti Kami
              </h4>
              <div className="flex flex-col gap-2">
                <a href="https://www.instagram.com/shippinexpress/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @shippinexpress" className="inline-flex w-fit items-center gap-2.5 text-sm text-white/55 transition hover:text-brand-yellow">
                  <InstagramMark />
                </a>
                <a href="https://www.facebook.com/shippinexpress" target="_blank" rel="noopener noreferrer" aria-label="Facebook @shippinexpress" className="inline-flex w-fit items-center gap-2.5 text-sm text-white/55 transition hover:text-brand-yellow">
                  <FacebookMark />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13px] text-white/30">
            Copyright {new Date().getFullYear()} Shippin Express. All rights reserved.
          </p>
          <div className="flex gap-2">
            {routes.map((route) => (
              <span
                key={route}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1.5 text-xs font-semibold text-white/60"
              >
                <Globe2 size={12} /> {route}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-[13px] font-bold uppercase tracking-[1px] text-white">
        {title}
      </h4>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

function InstagramMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" className="fill-current stroke-none" />
    </svg>
  )
}

function FacebookMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 fill-current">
      <path d="M13.6 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.5v3.2h2.8V21h3.3Z" />
    </svg>
  )
}
