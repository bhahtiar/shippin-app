import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const handleContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }
  const handleServices = (e) => {
    e.preventDefault()
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: '#FAFAFA',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 5vw 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Track lines background — signature element */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0, bottom: 0,
        width: '45%',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 1,
            background: `rgba(245,230,66,${0.06 + i * 0.04})`,
            top: `${8 + i * 8}%`,
            transform: 'skewY(-8deg)',
          }} />
        ))}
        {/* Bold accent line */}
        <div style={{
          position: 'absolute',
          left: 0, right: 0,
          height: 3,
          background: '#F5E642',
          top: '30%',
          transform: 'skewY(-8deg)',
          opacity: 0.6,
        }} />
        <div style={{
          position: 'absolute',
          left: 0, right: 0,
          height: 3,
          background: '#F5E642',
          top: '58%',
          transform: 'skewY(-8deg)',
          opacity: 0.3,
        }} />
      </div>

      {/* Route dots */}
      <div style={{ position: 'absolute', right: '10%', top: '20%', pointerEvents: 'none' }}>
        {['🇰🇷', '🇨🇳', '🇦🇺', '🇮🇩'].map((flag, i) => (
          <div key={i} style={{
            position: 'absolute',
            fontSize: 28,
            opacity: 0.12,
            top: `${i * 90}px`,
            left: `${Math.sin(i) * 60}px`,
          }}>{flag}</div>
        ))}
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 680 }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#F5E642',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 32,
          }}>
            <span style={{ fontSize: 14, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', color: '#1A1A1A', letterSpacing: '0.3px' }}>
              🚢 Import · Export · Logistics
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(42px, 6vw, 76px)',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            color: '#1A1A1A',
            marginBottom: 28,
          }}>
            Kirim & Terima<br />
            Barang dari{' '}
            <span style={{
              position: 'relative',
              display: 'inline-block',
            }}>
              <span style={{
                position: 'absolute',
                bottom: 4,
                left: -4,
                right: -4,
                height: '38%',
                background: '#F5E642',
                zIndex: -1,
                borderRadius: 3,
              }} />
              Seluruh Dunia
            </span>
          </h1>

          {/* Subheading */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 18,
            fontWeight: 400,
            color: '#6B6B6B',
            lineHeight: 1.7,
            marginBottom: 44,
            maxWidth: 520,
          }}>
            Shippin Express melayani jasa import–export antara Indonesia, Korea, China, dan Australia — termasuk freight forwarding dan pengiriman domestik dengan proses yang cepat dan terpercaya.
          </p>

          {/* CTA */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="#contact"
              onClick={handleContact}
              style={{
                background: '#1A1A1A',
                color: '#F5E642',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 15,
                padding: '16px 32px',
                borderRadius: 10,
                textDecoration: 'none',
                transition: 'transform 0.15s, background 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Mulai Konsultasi →
            </a>
            <a
              href="#services"
              onClick={handleServices}
              style={{
                background: 'transparent',
                color: '#1A1A1A',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600,
                fontSize: 15,
                padding: '16px 32px',
                borderRadius: 10,
                textDecoration: 'none',
                border: '1.5px solid #E8E8E8',
                transition: 'border-color 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#1A1A1A'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Lihat Layanan
            </a>
          </div>

          {/* Route chips */}
          <div style={{ marginTop: 52, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { flag: '🇰🇷', label: 'Korea ↔ Indonesia' },
              { flag: '🇨🇳', label: 'China → Indonesia' },
              { flag: '🇦🇺', label: 'Australia ↔ Indonesia' },
              { flag: '🚚', label: 'Domestik' },
            ].map(route => (
              <div key={route.label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: '#fff',
                border: '1px solid #E8E8E8',
                borderRadius: 8,
                padding: '8px 14px',
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                color: '#1A1A1A',
              }}>
                <span>{route.flag}</span>
                <span>{route.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
