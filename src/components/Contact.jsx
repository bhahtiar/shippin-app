import React, { useState } from 'react'

const WA_NUMBER = '6281511233838'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const services = [
    'Import Korea → Indonesia',
    'Export Indonesia → Korea',
    'Import China → Indonesia',
    'Import Australia → Indonesia',
    'Export Indonesia → Australia',
    'Freight Forwarding',
    'Pengiriman Domestik',
  ]

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Nama wajib diisi'
    if (!form.phone.trim()) e.phone = 'Nomor HP wajib diisi'
    if (!form.service) e.service = 'Pilih layanan terlebih dahulu'
    if (!form.message.trim()) e.message = 'Pesan wajib diisi'
    return e
  }

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const text = `Halo Shippin Express! 👋

Saya ingin bertanya mengenai layanan kalian.

*Nama:* ${form.name}
*Email:* ${form.email || '-'}
*No. HP:* ${form.phone}
*Layanan:* ${form.service}

*Pesan:*
${form.message}

Mohon informasinya. Terima kasih!`

    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank')
  }

  const inputStyle = (field) => ({
    width: '100%',
    fontFamily: 'Inter, sans-serif',
    fontSize: 15,
    color: '#1A1A1A',
    background: '#fff',
    border: `1.5px solid ${errors[field] ? '#e53935' : '#E8E8E8'}`,
    borderRadius: 10,
    padding: '14px 16px',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  })

  return (
    <section id="contact" style={{
      background: '#F5F5F5',
      padding: '96px 5vw',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'start',
        }}>
          {/* Left info */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#6B6B6B',
              marginBottom: 16,
            }}>Hubungi Kami</div>
            <h2 style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              color: '#1A1A1A',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              marginBottom: 24,
            }}>
              Siap bantu pengiriman Anda sekarang.
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 15,
              color: '#6B6B6B',
              lineHeight: 1.8,
              marginBottom: 40,
            }}>
              Isi form di samping dan kami akan langsung merespons via WhatsApp. Konsultasi gratis, tanpa biaya tersembunyi.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <ContactItem icon="💬" label="WhatsApp" value="+62 815-1123-3838" />
              <ContactItem icon="📦" label="Layanan" value="Import · Export · Freight · Domestik" />
              <ContactItem icon="🌏" label="Rute" value="Korea · China · Australia · Indonesia" />
            </div>

            {/* WA button */}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 32,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#25D366',
                color: '#fff',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 15,
                padding: '14px 28px',
                borderRadius: 10,
                textDecoration: 'none',
                transition: 'transform 0.15s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1ebe59'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <span style={{ fontSize: 18 }}>💬</span> Chat WhatsApp Langsung
            </a>
          </div>

          {/* Right form */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            padding: '36px',
            border: '1.5px solid #E8E8E8',
          }}>
            <h3 style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 800,
              fontSize: 20,
              color: '#1A1A1A',
              marginBottom: 28,
              letterSpacing: '-0.5px',
            }}>Kirim Pesan</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <FormField label="Nama Lengkap *" error={errors.name}>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  style={inputStyle('name')}
                  onFocus={e => e.target.style.borderColor = '#1A1A1A'}
                  onBlur={e => e.target.style.borderColor = errors.name ? '#e53935' : '#E8E8E8'}
                />
              </FormField>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <FormField label="Email" error={errors.email}>
                  <input
                    type="email"
                    placeholder="email@anda.com"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    style={inputStyle('email')}
                    onFocus={e => e.target.style.borderColor = '#1A1A1A'}
                    onBlur={e => e.target.style.borderColor = '#E8E8E8'}
                  />
                </FormField>
                <FormField label="No. WhatsApp *" error={errors.phone}>
                  <input
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    value={form.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    style={inputStyle('phone')}
                    onFocus={e => e.target.style.borderColor = '#1A1A1A'}
                    onBlur={e => e.target.style.borderColor = errors.phone ? '#e53935' : '#E8E8E8'}
                  />
                </FormField>
              </div>

              <FormField label="Layanan yang Dibutuhkan *" error={errors.service}>
                <select
                  value={form.service}
                  onChange={e => handleChange('service', e.target.value)}
                  style={{ ...inputStyle('service'), cursor: 'pointer', appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%236B6B6B\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 36 }}
                >
                  <option value="">— Pilih layanan —</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </FormField>

              <FormField label="Pesan / Keterangan *" error={errors.message}>
                <textarea
                  rows={4}
                  placeholder="Ceritakan kebutuhan pengiriman Anda: asal barang, tujuan, jenis barang, estimasi berat/volume, dll."
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 110 }}
                  onFocus={e => e.target.style.borderColor = '#1A1A1A'}
                  onBlur={e => e.target.style.borderColor = errors.message ? '#e53935' : '#E8E8E8'}
                />
              </FormField>

              <button
                onClick={handleSubmit}
                style={{
                  background: '#1A1A1A',
                  color: '#F5E642',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 15,
                  padding: '16px',
                  borderRadius: 10,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.15s, background 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  width: '100%',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#333'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1A1A1A'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <span>💬</span> Kirim via WhatsApp
              </button>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 12,
                color: '#ABABAB',
                textAlign: 'center',
                lineHeight: 1.5,
              }}>
                Pesan akan dikirim langsung ke WhatsApp kami. Kami merespons dalam 1×24 jam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, error, children }) {
  return (
    <div>
      <label style={{
        display: 'block',
        fontFamily: 'Inter, sans-serif',
        fontSize: 13,
        fontWeight: 600,
        color: '#1A1A1A',
        marginBottom: 8,
      }}>{label}</label>
      {children}
      {error && (
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 12,
          color: '#e53935',
          marginTop: 5,
        }}>{error}</p>
      )}
    </div>
  )
}

function ContactItem({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{
        width: 40,
        height: 40,
        background: '#F5E642',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: '#ABABAB', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 2 }}>{label}</div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600, color: '#1A1A1A' }}>{value}</div>
      </div>
    </div>
  )
}
