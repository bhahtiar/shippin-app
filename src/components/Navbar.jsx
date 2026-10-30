import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Layanan', href: '#services' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (event, href) => {
    setMenuOpen(false)

    if (!href.startsWith('#')) return

    event.preventDefault()
    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`
      return
    }

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`sticky inset-x-0 top-0 z-50 border-b px-5 transition-all duration-300 sm:px-8 lg:px-10 ${
        scrolled
          ? 'border-line bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-line bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between">
        <a
          href="#hero"
          onClick={(event) => handleNav(event, '#hero')}
          className="focus-ring flex items-center gap-2.5 rounded-2xl no-underline"
        >
          <img
            src="/logo.png"
            alt="Shippin Express"
            className="size-10 rounded-2xl object-cover ring-2 ring-[#dff7f3]"
          />
          <span className="font-display text-[17px] font-extrabold text-ink">
            Shippin <span className="font-normal">Express</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNav(event, link.href)}
              className="focus-ring rounded-md text-sm font-medium text-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(event) => handleNav(event, '#contact')}
            className="focus-ring rounded-full bg-brand-yellow px-5 py-2.5 font-display text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-brand-yellow-hover"
          >
            Hubungi Kami
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="focus-ring grid size-10 place-items-center rounded-lg text-ink md:hidden"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-white px-5 pb-6 pt-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNav(event, link.href)}
                className="rounded-md border-b border-soft py-3 text-base font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(event) => handleNav(event, '#contact')}
              className="mt-3 rounded-full bg-brand-yellow px-5 py-3.5 text-center font-display text-sm font-extrabold text-ink"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
