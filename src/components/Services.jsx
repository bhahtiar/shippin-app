import React from 'react'

const services = [
  {
    icon: '🇰🇷',
    title: 'Import Korea → Indonesia',
    desc: 'Produk kosmetik, elektronik, fashion, K-beauty, dan berbagai barang dari Korea Selatan langsung ke tangan Anda di Indonesia. Kami tangani bea cukai hingga pengiriman akhir.',
    tag: 'Import',
  },
  {
    icon: '🇰🇷',
    title: 'Export Indonesia → Korea',
    desc: 'Ekspor produk lokal Indonesia ke pasar Korea Selatan. Kami bantu pengurusan dokumen ekspor, perizinan, dan koordinasi dengan mitra logistik di Korea.',
    tag: 'Export',
  },
  {
    icon: '🇨🇳',
    title: 'Import China → Indonesia',
    desc: 'Impor barang dari China dengan harga kompetitif. Mulai dari produk manufaktur, elektronik, tekstil, hingga bahan baku industri. Koneksi langsung ke supplier China.',
    tag: 'Import',
  },
  {
    icon: '🇦🇺',
    title: 'Import Australia → Indonesia',
    desc: 'Produk pertanian premium, suplemen, skincare, dan berbagai komoditas dari Australia ke Indonesia. Kami memastikan kepatuhan standar impor dan kelancaran bea cukai.',
    tag: 'Import',
  },
  {
    icon: '🇦🇺',
    title: 'Export Indonesia → Australia',
    desc: 'Buka peluang pasar Australia untuk produk Anda. Kami fasilitasi proses ekspor, sertifikasi, dan pengiriman ke berbagai kota besar di Australia.',
    tag: 'Export',
  },
  {
    icon: '🚢',
    title: 'Freight Forwarding',
    desc: 'Layanan pengiriman kargo internasional via udara maupun laut. Kami koordinasikan seluruh rantai logistik mulai dari pickup, packing, customs clearance, hingga delivery.',
    tag: 'Freight',
  },
  {
    icon: '🚚',
    title: 'Pengiriman Domestik',
    desc: 'Layanan pengiriman antar kota dan antar pulau di seluruh Indonesia. Cepat, aman, dan terpercaya untuk kebutuhan distribusi bisnis maupun personal.',
    tag: 'Domestik',
  },
]

const tagColors = {
  Import: { bg: '#FFF9C0', text: '#7A6E00' },
  Export: { bg: '#E8F5E9', text: '#2E7D32' },
  Freight: { bg: '#E3F2FD', text: '#1565C0' },
  Domestik: { bg: '#F3E5F5', text: '#6A1B9A' },
}

export default function Services() {
  return (
    <section id="services" style={{
      background: '#F5F5F5',
      padding: '96px 5vw',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#6B6B6B',
            marginBottom: 16,
          }}>Layanan Kami</div>
          <h2 style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: '#1A1A1A',
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            maxWidth: 560,
          }}>
            Semua rute,<br />satu mitra logistik.
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} tagColors={tagColors} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, tagColors }) {
  const [hovered, setHovered] = React.useState(false)
  const colors = tagColors[service.tag]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#fff' : '#fff',
        border: hovered ? '1.5px solid #1A1A1A' : '1.5px solid #E8E8E8',
        borderRadius: 14,
        padding: '28px',
        cursor: 'default',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.07)' : '0 0 0 rgba(0,0,0,0)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{ fontSize: 32 }}>{service.icon}</span>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          background: colors.bg,
          color: colors.text,
          padding: '4px 10px',
          borderRadius: 6,
        }}>{service.tag}</span>
      </div>
      <h3 style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: 17,
        color: '#1A1A1A',
        marginBottom: 10,
        letterSpacing: '-0.3px',
        lineHeight: 1.3,
      }}>{service.title}</h3>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: '#6B6B6B',
        lineHeight: 1.7,
      }}>{service.desc}</p>

      {hovered && (
        <div style={{
          marginTop: 20,
          borderTop: '1px solid #F0F0F0',
          paddingTop: 16,
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 13,
          fontWeight: 700,
          color: '#1A1A1A',
        }}>
          Tanya layanan ini →
        </div>
      )}
    </div>
  )
}
