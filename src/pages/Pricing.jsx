import React from 'react'
import { ArrowRight, Calculator, CheckCircle2, Clock3, MapPin, MessageCircle, Plane, ShieldCheck, Ship } from 'lucide-react'

const WA_NUMBER = '6281511233838'

const routeGroups = [
  {
    country: 'Korea', flag: '🇰🇷', icon: Plane, modes: 'Air freight',
    lanes: [
      { name: 'Air Express', leadTime: '3–5 hari', note: 'Untuk barang yang perlu tiba lebih cepat.' },
      { name: 'Air Regular', leadTime: '5–12 hari', note: 'Opsi lebih hemat untuk kargo yang lebih besar.' },
    ],
  },
  {
    country: 'China', flag: '🇨🇳', icon: Ship, modes: 'Udara & laut',
    lanes: [
      { name: 'Air cargo', leadTime: 'By request', note: 'Opsi pengiriman cepat, dikonfirmasi sesuai jenis kargo.' },
      { name: 'Sea cargo', leadTime: 'By request', note: 'Cocok untuk barang berukuran besar atau pengiriman grosir.' },
    ],
  },
  {
    country: 'Australia', flag: '🇦🇺', icon: Plane, modes: 'Air freight',
    lanes: [
      { name: 'Air Express', leadTime: '3–6 hari', note: 'Pickup dan pengantaran dapat dikonsultasikan.' },
    ],
  },
  {
    country: 'Singapore', flag: '🇸🇬', icon: Plane, modes: 'Air freight',
    lanes: [
      { name: 'Air Express', leadTime: 'By request', note: 'Estimasi dikonfirmasi sesuai barang dan lokasi pickup.' },
    ],
  },
]

export default function Pricing() {
  const contactHref = window.location.pathname === '/' ? '#contact' : '/#contact'
  const Title = window.location.pathname === '/pricing' ? 'h1' : 'h2'

  return (
    <section id="pricing" className="scroll-mt-20 bg-[#f5fbfc] py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-9 flex flex-col gap-6 lg:mb-11 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow">Estimasi impor</div>
            <Title className="section-heading mb-4 text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
              Pilih rute, cek <span className="heading-highlight">opsi kirimnya.</span>
            </Title>
            <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
              Tiap barang punya kebutuhan berbeda. Lihat opsi dan estimasi awal di bawah, lalu minta rate final berdasarkan detail kargomu.
            </p>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Shippin Express, saya ingin minta estimasi biaya impor.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-ink px-6 font-display text-sm font-extrabold text-brand-yellow shadow-md shadow-ink/10 transition hover:-translate-y-0.5 hover:bg-[#20536a]"
          >
            Minta estimasi harga <MessageCircle size={17} />
          </a>
        </div>

        <div className="mb-6 grid gap-2 sm:grid-cols-3">
          <TrustPill icon={CheckCircle2} text="Empat rute impor ke Indonesia" />
          <TrustPill icon={ShieldCheck} text="Bantuan dokumen & kepabeanan" />
          <TrustPill icon={Clock3} text="Estimasi waktu per opsi kirim" />
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
                          <div className="text-[9px] font-bold uppercase tracking-[.1em] text-muted">Estimasi transit</div>
                          <div className="mt-0.5 font-display text-sm font-extrabold text-ink">{lane.leadTime}</div>
                        </div>
                        <div className="h-8 w-px bg-[#dce8ed]" />
                        <div className="sm:text-right">
                          <div className="text-[9px] font-bold uppercase tracking-[.1em] text-muted">Tarif</div>
                          <div className="mt-0.5 font-display text-sm font-extrabold text-[#16877f]">Cek rate</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-[#eaf1f3] px-5 py-3.5 sm:px-6">
                  <span className="text-[11px] leading-5 text-muted">Tarif final mengikuti detail kargo.</span>
                  <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#e2f6f2] px-4 py-2 font-display text-xs font-extrabold text-[#147f78] transition hover:bg-[#c8eee7]">Tanya rute <ArrowRight size={14} /></a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-[26px] bg-[#153044] p-5 text-white sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-brand-yellow"><MessageCircle size={18} /><h3 className="font-display text-base font-extrabold text-white">Biar kami hitung lebih akurat</h3></div>
            <p className="text-xs leading-6 text-white/65">Siapkan nama atau foto barang, kota asal, jumlah paket, berat dan ukuran, serta kode pos tujuan.</p>
            <a href={contactHref} className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-2.5 font-display text-xs font-extrabold text-ink transition hover:bg-brand-yellow-hover">Kirim detail kargo <ArrowRight size={14} /></a>
          </div>
          <div className="grid gap-3 rounded-[26px] border border-[#dce8ed] bg-white p-5 text-xs leading-6 text-muted sm:grid-cols-2 sm:p-6">
            <div className="flex gap-3"><Calculator size={18} className="mt-0.5 shrink-0 text-[#16877f]" /><p><b className="text-ink">Berat volumetrik:</b> tarif dihitung dari berat aktual atau volumetrik, mana yang lebih besar. Rumus umum udara: panjang × lebar × tinggi (cm) ÷ 6.000.</p></div>
            <div className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-[#16877f]" /><p><b className="text-ink">Rate final:</b> dipastikan setelah tim mengecek jenis barang, ukuran, layanan, lokasi pickup, dan tujuan pengiriman.</p></div>
          </div>
        </div>
      </div>
    </section>
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
