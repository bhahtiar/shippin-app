import React from 'react'

const values = [
  { icon: '⚡', title: 'Cepat & Efisien', desc: 'Proses dokumen dalam 48 jam. Kami tidak membuat Anda menunggu.' },
  { icon: '🔒', title: 'Aman & Terpercaya', desc: 'Barang Anda ditangani dengan standar keamanan ketat dari pickup hingga tiba.' },
  { icon: '📋', title: 'Customs Expert', desc: 'Tim kami berpengalaman dalam pengurusan bea cukai di berbagai jalur internasional.' },
  { icon: '🤝', title: 'Mitra Jangka Panjang', desc: 'Bukan sekadar jasa kirim — kami menjadi bagian dari rantai supply chain bisnis Anda.' },
]

export default function About() {
  return (
    <section id="about" style={{
      background: '#fff',
      padding: '96px 5vw',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#6B6B6B',
              marginBottom: 16,
            }}>Tentang Kami</div>
            <h2 style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              color: '#1A1A1A',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              marginBottom: 24,
            }}>
              Pengalaman nyata<br />di jalur yang{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{
                  position: 'absolute',
                  bottom: 2,
                  left: -2,
                  right: -2,
                  height: '35%',
                  background: '#F5E642',
                  zIndex: -1,
                  borderRadius: 3,
                }} />
                tepat.
              </span>
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 15,
              color: '#6B6B6B',
              lineHeight: 1.8,
              marginBottom: 20,
            }}>
              Shippin Express hadir sebagai solusi logistik yang menghubungkan Indonesia dengan Korea Selatan, China, dan Australia. Kami memahami kompleksitas regulasi bea cukai, kebutuhan dokumen ekspor-impor, dan pentingnya ketepatan waktu dalam bisnis.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 15,
              color: '#6B6B6B',
              lineHeight: 1.8,
            }}>
              Dengan jaringan mitra logistik yang kuat di setiap negara tujuan, kami memastikan setiap pengiriman berjalan lancar, transparan, dan sesuai regulasi yang berlaku.
            </p>
          </div>

          {/* Right — value cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}>
            {values.map((v, i) => (
              <div key={i} style={{
                background: '#F5F5F5',
                borderRadius: 12,
                padding: '24px 20px',
              }}>
                <div style={{ fontSize: 26, marginBottom: 12 }}>{v.icon}</div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 15,
                  color: '#1A1A1A',
                  marginBottom: 8,
                }}>{v.title}</div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 13,
                  color: '#6B6B6B',
                  lineHeight: 1.6,
                }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
