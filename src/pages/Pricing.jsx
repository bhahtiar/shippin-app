import React from 'react'
import { Calculator, CheckCircle2, Clock3, MapPin, MessageCircle, Plane, ShieldCheck, Ship, Sparkles } from 'lucide-react'

const WA_NUMBER = '6281511233838'

const routeGroups = [
  {
    route: 'Korea ke Indonesia',
    lanes: [
      {
        name: 'Air Express',
        leadTime: '3-5 hari',
        note: 'Cocok untuk pengiriman cepat dan urgent',
      },
      {
        name: 'Air Regular',
        leadTime: '5-12 hari',
        note: 'Lebih hemat untuk cargo volume besar',
      },
    ],
  },
  {
    route: 'Australia ke Indonesia',
    lanes: [
      {
        name: 'Air Express',
        leadTime: '3-6 hari',
        note: 'Pickup dan delivery dapat dikonsultasikan',
      },
    ],
  },
]

export default function Pricing() {
  const contactHref = window.location.pathname === '/' ? '#contact' : '/#contact'

  return (
    <section id="pricing" className="scroll-mt-20 bg-[#fafafa] py-20">
      <div className="section-shell">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-1.5 font-display text-sm font-bold text-ink">
              <Ship size={16} />
              Daftar Harga
            </div>
            <h1 className="mb-4 font-display text-3xl font-black leading-tight text-ink sm:text-4xl lg:text-5xl">
              Harga layanan impor <span className="heading-highlight">per rute.</span>
            </h1>
            <p className="max-w-2xl text-[15px] leading-7 text-muted">
              Pilih negara asal barang, lalu kirim detail kargo untuk mendapatkan estimasi impor terbaru.
              Harga final mengikuti jenis barang, berat, dimensi, dan kebutuhan pengiriman.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-[10px] bg-ink px-5 py-3 font-display text-sm font-bold text-brand-yellow transition hover:-translate-y-0.5 hover:bg-[#333]"
            >
              <MessageCircle size={18} /> Tanya Harga via WhatsApp
            </a>
            <a
              href={contactHref}
              className="focus-ring inline-flex items-center gap-2 rounded-[10px] border border-line bg-white px-5 py-3 font-display text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-ink"
            >
              Kirim Detail Kargo
            </a>
          </div>
        </div>

        <div className="mb-4 grid gap-2 md:grid-cols-3">
          <TrustPill icon={CheckCircle2} text="Rute aktif Korea, China, Australia" />
          <TrustPill icon={ShieldCheck} text="Bantuan dokumen dan customs" />
          <TrustPill icon={Clock3} text="Estimasi jelas sebelum pengiriman" />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {routeGroups.map((group) => (
            <article key={group.route} className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
              <div className="border-b border-line bg-ink px-4 py-3 text-white sm:px-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-brand-yellow text-ink">
                    <Plane size={18} />
                  </span>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[1px] text-white/45">Rute</div>
                    <h2 className="font-display text-lg font-extrabold text-white">{group.route}</h2>
                  </div>
                </div>
              </div>
              <div className="grid gap-2 p-3 sm:p-4">
                {group.lanes.map((lane) => (
                  <PricingCard key={`${group.route}-${lane.name}`} lane={lane} />
                ))}
              </div>
            </article>
          ))}

          <article className="overflow-hidden rounded-xl border border-line bg-white shadow-sm lg:col-span-2">
            <div className="border-b border-line bg-ink px-4 py-3 text-white sm:px-5">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-brand-yellow text-ink">
                  <Ship size={18} />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[1px] text-white/45">Rute khusus</div>
                  <h2 className="font-display text-lg font-extrabold text-white">China ke Indonesia</h2>
                </div>
              </div>
            </div>
            <div className="grid gap-3 p-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="rounded-lg border border-dashed border-line bg-soft px-4 py-3 text-sm leading-6 text-muted">
                Silakan hubungi kami untuk harga terbaru China ke Indonesia dan estimasi waktu pengiriman.
              </div>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-[10px] bg-brand-yellow px-5 py-3 font-display text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-brand-yellow-hover"
              >
                <MessageCircle size={18} /> Cek Harga China
              </a>
            </div>
          </article>
        </div>

        <div className="mt-4 grid gap-3 rounded-xl border border-line bg-white p-4 text-sm leading-6 text-muted lg:grid-cols-[1fr_1.5fr]">
          <div className="flex gap-3">
            <Calculator size={18} className="mt-1 shrink-0 text-ink" />
            <p>
              Berat chargeable memakai berat aktual atau volumetrik, mana yang lebih besar.
              Rumus umum udara: P x L x T / 6000.
            </p>
          </div>
          <div className="flex gap-3">
            <MessageCircle size={18} className="mt-1 shrink-0 text-ink" />
            <p>
              Harga dapat berubah tergantung jenis pengiriman, kategori barang, kondisi bea cukai,
              dan kebutuhan operasional. Gratis pengantaran tergantung lokasi dan berat kargo.
              Silakan hubungi kami untuk detail lebih lanjut.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ lane }) {
  return (
    <div className="rounded-lg border border-line bg-white p-4 transition hover:border-ink hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-base font-extrabold text-ink">{lane.name}</h3>
          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.8px] text-muted/60">Rate by request</p>
        </div>
        <div className="rounded-lg bg-brand-yellow px-3 py-2 text-right text-ink">
          <div className="font-display text-sm font-black leading-none">Rate khusus</div>
          <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.5px] text-ink/60">Hubungi kami</div>
        </div>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <PriceMeta icon={Clock3} label="Estimasi waktu" value={lane.leadTime} />
        <PriceMeta icon={Sparkles} label="Pilihan rate" value="Cek sesuai cargo" />
        <PriceMeta icon={MapPin} label="Pengantaran" value="Gratis pengantaran*" />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-soft pt-3">
        <p className="text-xs leading-5 text-muted">{lane.note}</p>
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-ink transition hover:text-muted"
        >
          Minta rate <MessageCircle size={14} />
        </a>
      </div>
    </div>
  )
}

function PriceMeta({ icon: Icon, label, value, className = '' }) {
  return (
    <div className={`flex items-center gap-2 rounded-lg bg-soft px-2.5 py-2 ${className}`}>
      <span className="grid size-7 shrink-0 place-items-center rounded-md bg-white text-ink">
        <Icon size={14} />
      </span>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.6px] text-muted/60">{label}</div>
        <div className="font-display text-xs font-bold text-ink">{value}</div>
      </div>
    </div>
  )
}

function TrustPill({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink">
      <span className="grid size-7 shrink-0 place-items-center rounded-md bg-brand-yellow text-ink">
        <Icon size={14} />
      </span>
      <span>{text}</span>
    </div>
  )
}
