import React from 'react'

const stats = [
  { value: '500+', label: 'Pengiriman Selesai' },
  { value: '4', label: 'Negara Tujuan' },
  { value: '48 Jam', label: 'Proses Dokumen' },
  { value: '100%', label: 'Barang Aman Sampai' },
]

export default function Stats() {
  return (
    <section style={{
      background: '#1A1A1A',
      padding: '56px 5vw',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 40,
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: '8px 16px',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
          }}>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: '#F5E642',
              letterSpacing: '-1px',
              lineHeight: 1,
              marginBottom: 8,
            }}>{s.value}</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 13,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
            }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          section div[style*="border-right"] { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 24px !important; }
        }
      `}</style>
    </section>
  )
}
