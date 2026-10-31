import React from 'react'
import PageSEO from '../components/PageSEO.jsx'
import { ArrowRight, Calculator, CheckCircle2, Clock3, MapPin, MessageCircle, Plane, ShieldCheck, Ship } from 'lucide-react'

const WA_NUMBER = '6281511233838'

const routeGroups = [
  {
    country: 'Korea Selatan', flag: '🇰🇷', minimum: 'Minimum 1 kg', startingRate: 'Rp 280.000/kg', icon: Plane, modes: 'All-in',
    lanes: [
      { name: 'Jasa import all-in', leadTime: 'Minimum 1 kg', note: 'Harga kirim sudah termasuk bea masuk dan pajak. Pengantaran area Jakarta gratis. Syarat & ketentuan berlaku.' },
    ],
  },
  {
    country: 'China', flag: '🇨🇳', minimum: 'Minimum 10 kg', startingRate: 'Rp 250.000/kg', icon: Ship, modes: 'All-in',
    lanes: [
      { name: 'Jasa import all-in', leadTime: 'Minimum 10 kg', note: 'Harga kirim sudah termasuk bea masuk dan pajak. Pengantaran area Jakarta gratis. Syarat & ketentuan berlaku.' },
    ],
  },
  {
    country: 'Australia', flag: '🇦🇺', minimum: 'Minimum 1 kg', startingRate: 'AUD 25/kg', icon: Plane, modes: 'All-in',
    lanes: [
      { name: 'Jasa import all-in', leadTime: 'Minimum 1 kg', note: 'Harga kirim sudah termasuk bea masuk dan pajak. Pengantaran area Jakarta gratis. Syarat & ketentuan berlaku.' },
    ],
  },
  {
    country: 'Singapore', flag: '🇸🇬', minimum: 'Minimum 10 kg', startingRate: 'Rp 125.000/kg', icon: Plane, modes: 'All-in',
    lanes: [
      { name: 'Jasa import all-in', leadTime: 'Minimum 10 kg', note: 'Harga kirim sudah termasuk bea masuk dan pajak. Pengantaran area Jakarta gratis. Syarat & ketentuan berlaku.' },
    ],
  },
]

export default function Pricing({ pathname }) {
  const currentPath = pathname || (typeof window !== 'undefined' ? window.location.pathname : '/')
  const isStandalone = currentPath.replace(/\/+$/, '') === '/pricing'
  const contactHref = isStandalone ? '/#contact' : '#contact'
  const Title = isStandalone ? 'h1' : 'h2'
  const pageTitle = 'Harga Jasa Import ke Indonesia | Shippin Express'
  const pageDescription = 'Harga import all-in mulai Rp280.000/kg dari Korea, Rp250.000/kg dari China, AUD25/kg dari Australia, dan Rp125.000/kg dari Singapore. Syarat & ketentuan berlaku.'
  const canonicalUrl = 'https://shippinexpress.com/pricing/'
  const pageSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: pageTitle, description: pageDescription, url: canonicalUrl, about: { '@id': 'https://shippinexpress.com/#organization' } }

  return (
    <>
      {isStandalone && <PageSEO title={pageTitle} description={pageDescription} canonicalUrl={canonicalUrl} structuredData={pageSchema} />}
    <section id="pricing" className="scroll-mt-20 bg-[#f5fbfc] py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-9 flex flex-col gap-6 lg:mb-11 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow">Estimasi impor</div>
            <Title className="section-heading mb-4 text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
              Pilih rute, cek <span className="heading-highlight">opsi kirimnya.</span>
            </Title>
            <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
              Layanan import all-in dengan harga kirim yang sudah termasuk bea masuk dan pajak dan pengantaran gratis untuk area Jakarta. Minimum 1 kg dari Korea dan Australia, serta 10 kg dari China dan Singapore. Kami dapat membantu mengimpor beragam jenis barang; beberapa dangerous goods tidak dapat kami tangani.
            </p>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Shippin Express, saya ingin minta estimasi biaya impor.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring action-dark inline-flex min-h-12 w-fit items-center gap-2 rounded-full px-6 font-display text-sm font-extrabold shadow-md shadow-ink/10 transition hover:-translate-y-0.5"
          >
            Minta estimasi harga <MessageCircle size={17} />
          </a>
        </div>

        <div className="mb-6 grid gap-2 sm:grid-cols-3">
          <TrustPill icon={CheckCircle2} text="Bea masuk dan pajak sudah termasuk" />
          <TrustPill icon={ShieldCheck} text="Pengantaran area Jakarta gratis" />
          <TrustPill icon={Clock3} text="Minimum 1 kg atau 10 kg per rute" />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {routeGroups.map((group) => {
            const Icon = group.icon
            const message = `Halo Shippin Express, saya ingin minta estimasi impor dari ${group.country} ke Indonesia.`
            return (
              <article key={group.country} className="overflow-hidden rounded-[26px] border border-[#dce8ed] bg-white shadow-[0_12px_35px_rgba(21,48,68,.045)]">
                <header className="flex items-center gap-3 border-b border-[#eaf1f3] px-5 py-4 sm:px-6">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#e9f7f5] text-2xl" aria-hidden="true">{group.flag}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-extrabold uppercase tracking-[.13em] text-[#218f87]">{group.modes} · impor</div>
                    <h3 className="font-display text-lg font-extrabold text-ink">{group.country} <span className="font-semibold text-muted">→ Indonesia</span></h3>
                  </div>
                  <span className="grid size-10 place-items-center rounded-full bg-[#fff4d7] text-[#a96a00]"><Icon size={18} /></span>
                </header>
                <div className="space-y-3 p-4 sm:p-5">
                  {group.lanes.map((lane) => (
                    <div key={lane.name} className="grid gap-3 rounded-2xl bg-[#f6fafb] p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                      <div>
                        <div className="font-display text-sm font-extrabold text-ink">{lane.name}</div>
                        <p className="mt-1 text-xs leading-5 text-muted">{lane.note}</p>
                      </div>
                      <div className="flex items-center justify-between gap-3 sm:justify-end">
                        <div className="sm:text-right">
                          <div className="text-[9px] font-bold uppercase tracking-[.1em] text-muted">Minimum berat</div>
                          <div className="mt-0.5 font-display text-sm font-extrabold text-ink">{group.minimum}</div>
                        </div>
                        <div className="h-8 w-px bg-[#dce8ed]" />
                        <div className="sm:text-right">
                          <div className="text-[9px] font-bold uppercase tracking-[.1em] text-muted">Harga kirim</div>
                          <div className="mt-0.5 font-display text-sm font-extrabold text-[#16877f]">{group.startingRate}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-[#eaf1f3] px-5 py-3.5 sm:px-6">
                  <span className="text-[11px] leading-5 text-muted">Harga mulai · S&K berlaku</span>
                  <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="focus-ring action-mint inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 font-display text-xs font-extrabold transition">Tanya rute <ArrowRight size={14} /></a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-[26px] bg-[#153044] p-5 text-white sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-brand-yellow"><MessageCircle size={18} /><h3 className="font-display text-base font-extrabold text-white">Biar kami hitung lebih akurat</h3></div>
            <p className="text-xs leading-6 text-white/65">Siapkan nama atau foto barang, kota asal, jumlah paket, berat dan ukuran, serta kode pos tujuan.</p>
            <a href={contactHref} className="focus-ring action-yellow mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-display text-xs font-extrabold transition">Kirim detail kargo <ArrowRight size={14} /></a>
          </div>
          <div className="grid gap-3 rounded-[26px] border border-[#dce8ed] bg-white p-5 text-xs leading-6 text-muted sm:grid-cols-2 sm:p-6">
            <div className="flex gap-3"><Calculator size={18} className="mt-0.5 shrink-0 text-[#16877f]" /><p><b className="text-ink">Minimum berat:</b> 1 kg untuk Korea Selatan dan Australia; 10 kg untuk China dan Singapore. Harga kirim sudah termasuk bea masuk dan pajak.</p></div>
            <div className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-[#16877f]" /><p><b className="text-ink">Jenis barang:</b> kami dapat membantu mengimpor beragam jenis barang. Beberapa dangerous goods mungkin tidak dapat kami tangani; konsultasikan detailnya kepada tim kami.</p></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

function TrustPill({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl border border-[#e1ecef] bg-white px-3 py-3 text-xs font-bold text-ink">
      <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#e2f6f2] text-[#16877f]"><Icon size={15} /></span>
      <span>{text}</span>
    </div>
  )
}
