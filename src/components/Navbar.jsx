import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Layanan', href: '#services' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #E8E8E8' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 5vw',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 68,
      }}>
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNav(e, '#hero')} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36,
            height: 36,
            background: '#F5E642',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 900,
            fontSize: 14,
            color: '#1A1A1A',
            letterSpacing: '-0.5px',
          }}>SE</div>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 800,
            fontSize: 17,
            color: '#1A1A1A',
            letterSpacing: '-0.3px',
          }}>Shippin <span style={{ fontWeight: 400 }}>Express</span></span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: '#6B6B6B',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#1A1A1A'}
              onMouseLeave={e => e.target.style.color = '#6B6B6B'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            style={{
              background: '#F5E642',
              color: '#1A1A1A',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 14,
              padding: '10px 22px',
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.target.style.background = '#e8d930'; e.target.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.target.style.background = '#F5E642'; e.target.style.transform = 'translateY(0)' }}
          >
            Hubungi Kami
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            flexDirection: 'column',
            gap: 5,
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A1A', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A1A', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A1A', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: '#fff',
          borderTop: '1px solid #E8E8E8',
          padding: '16px 5vw 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                fontWeight: 500,
                color: '#1A1A1A',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid #F5F5F5',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            style={{
              marginTop: 12,
              background: '#F5E642',
              color: '#1A1A1A',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 15,
              padding: '14px 22px',
              borderRadius: 8,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Hubungi Kami
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
