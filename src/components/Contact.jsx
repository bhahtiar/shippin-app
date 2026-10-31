import React, { useState } from 'react'
import { ChevronDown, Globe2, MessageCircle, Package, Send } from 'lucide-react'

const WA_NUMBER = '6281511233838'

const services = [
  'Import Korea ke Indonesia',
  'Import China ke Indonesia',
  'Import Australia ke Indonesia',
  'Import Singapore ke Indonesia',
]

const fieldBase =
  'w-full rounded-2xl border bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition placeholder:text-muted/50 focus:border-[#1b9b91]'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Nama wajib diisi'
    if (!form.phone.trim()) nextErrors.phone = 'Nomor HP wajib diisi'
    if (!form.service) nextErrors.service = 'Pilih layanan terlebih dahulu'
    if (!form.message.trim()) nextErrors.message = 'Pesan wajib diisi'
    return nextErrors
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = () => {
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    const text = `Halo Shippin Express!

Saya ingin bertanya mengenai layanan impor kalian.

*Nama:* ${form.name}
*Email:* ${form.email || '-'}
*No. HP:* ${form.phone}
*Layanan:* ${form.service}

*Pesan:*
${form.message}

Mohon informasinya. Terima kasih!`

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contact" className="bg-[#eef8f7] py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Hubungi Kami</div>
            <h2 className="mb-6 font-display text-4xl font-black leading-tight text-ink sm:text-[44px]">
              Siap membantu kebutuhan impor Anda <span className="heading-highlight">sekarang.</span>
            </h2>
            <p className="mb-10 text-[15px] leading-8 text-muted">
              Isi form di samping dan kami akan merespons via WhatsApp. Harga kirim sudah termasuk bea masuk dan pajak, dengan pengantaran gratis untuk area Jakarta.
            </p>

            <div className="flex flex-col gap-5">
              <ContactItem icon={MessageCircle} label="WhatsApp" value="+62 815-1123-3838" />
              <ContactItem icon={Package} label="Layanan" value="Import all-in · bea masuk dan pajak termasuk" />
              <ContactItem icon={Globe2} label="Rute impor" value="Korea, China, Australia & Singapore ke Indonesia" />
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 font-display text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1ebe59]"
            >
              <MessageCircle size={18} /> Chat WhatsApp Langsung
            </a>
          </div>

          <div className="rounded-[30px] border border-white bg-white p-6 shadow-[0_20px_55px_rgba(21,48,68,.07)] sm:p-9">
            <h3 className="mb-7 font-display text-xl font-extrabold text-ink">Kirim Pesan</h3>

            <div className="flex flex-col gap-4">
              <FormField label="Nama Lengkap *" error={errors.name}>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={form.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  className={`${fieldBase} ${errors.name ? 'border-red-600' : 'border-line'}`}
                />
              </FormField>

              <div className="grid gap-3 sm:grid-cols-2">
                <FormField label="Email" error={errors.email}>
                  <input
                    type="email"
                    placeholder="email@anda.com"
                    value={form.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    className={`${fieldBase} ${errors.email ? 'border-red-600' : 'border-line'}`}
                  />
                </FormField>
                <FormField label="No. WhatsApp *" error={errors.phone}>
                  <input
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    value={form.phone}
                    onChange={(event) => handleChange('phone', event.target.value)}
                    className={`${fieldBase} ${errors.phone ? 'border-red-600' : 'border-line'}`}
                  />
                </FormField>
              </div>

              <FormField label="Layanan yang Dibutuhkan *" error={errors.service}>
                <div className="relative">
                  <select
                    value={form.service}
                    onChange={(event) => handleChange('service', event.target.value)}
                    className={`${fieldBase} appearance-none pr-10 ${errors.service ? 'border-red-600' : 'border-line'}`}
                  >
                    <option value="">Pilih layanan</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
                </div>
              </FormField>

              <FormField label="Pesan / Keterangan *" error={errors.message}>
                <textarea
                  rows={4}
                  placeholder="Ceritakan kebutuhan pengiriman Anda: asal barang, tujuan, jenis barang, estimasi berat/volume, dll."
                  value={form.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  className={`${fieldBase} min-h-[110px] resize-y ${errors.message ? 'border-red-600' : 'border-line'}`}
                />
              </FormField>

              <button
                type="button"
                onClick={handleSubmit}
                className="focus-ring flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-4 font-display text-sm font-bold text-brand-yellow transition hover:-translate-y-0.5 hover:bg-[#20536a]"
              >
                <Send size={18} /> Kirim via WhatsApp
              </button>

              <p className="text-center text-xs leading-5 text-muted/60">
                Pesan akan dikirim langsung ke WhatsApp kami. Kami merespons dalam 1 x 24 jam.
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
      <label className="mb-2 block text-[13px] font-semibold text-ink">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  )
}

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-yellow text-ink">
        <Icon size={18} />
      </div>
      <div>
        <div className="mb-0.5 text-xs font-semibold uppercase tracking-[0.8px] text-muted/60">{label}</div>
        <div className="font-display text-[15px] font-semibold text-ink">{value}</div>
      </div>
    </div>
  )
}
