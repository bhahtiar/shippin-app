import React from 'react'

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Layanan', href: '#services' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Kontak', href: '#contact' },
]

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: '#1A1A1A',
      padding: '56px 5vw 32px',
      color: '#fff',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          marginBottom: 32,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
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
              }}>SE</div>
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 800,
                fontSize: 17,
                color: '#fff',
                letterSpacing: '-0.3px',
              }}>Shippin <span style={{ fontWeight: 400 }}>Express</span></span>
            </div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7,
              maxWidth: 260,
            }}>
              Jasa import, export, dan logistics terpercaya. Menghubungkan Indonesia ke dunia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 13,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: 18,
            }}>Navigasi</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = '#F5E642'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 13,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: 18,
            }}>Layanan</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Import Korea', 'Export ke Korea', 'Import China', 'Import Australia', 'Freight Forwarding', 'Domestik'].map(s => (
                <span key={s} style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 13,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: 18,
            }}>Hubungi Kami</h4>
            <a
              href="https://wa.me/6281511233838"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#25D366',
                color: '#fff',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                padding: '12px 20px',
                borderRadius: 8,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1ebe59'}
              onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
            >
              💬 WhatsApp Kami
            </a>
            <p style={{
              marginTop: 14,
              fontFamily: 'Inter, sans-serif',
              fontSize: 13,
              color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.6,
            }}>+62 815-1123-3838<br />Respon dalam 1×24 jam</p>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            color: 'rgba(255,255,255,0.3)',
          }}>© {new Date().getFullYear()} Shippin Express. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['🇮🇩', '🇰🇷', '🇨🇳', '🇦🇺'].map(flag => (
              <span key={flag} style={{ fontSize: 18, opacity: 0.5 }}>{flag}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
