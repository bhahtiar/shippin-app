import React from 'react'
import { ClipboardCheck, Handshake, ShieldCheck, Zap } from 'lucide-react'

const values = [
  { icon: Zap, title: 'Cepat & Efisien', desc: 'Proses dokumen dalam 48 jam. Kami tidak membuat Anda menunggu.' },
  { icon: ShieldCheck, title: 'Aman & Terpercaya', desc: 'Barang Anda ditangani dengan standar keamanan ketat dari pickup hingga tiba.' },
  { icon: ClipboardCheck, title: 'Customs Expert', desc: 'Tim kami berpengalaman dalam pengurusan bea masuk dan pajak di berbagai jalur internasional.' },
  { icon: Handshake, title: 'Mitra Jangka Panjang', desc: 'Bukan sekadar jasa kirim. Kami menjadi bagian dari rantai supply chain bisnis Anda.' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="section-shell">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Tentang Kami</div>
            <h2 className="mb-6 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
              Pengalaman impor
              <br />
              di jalur yang{' '}
              <span className="heading-highlight">tepat.</span>
            </h2>
            <p className="mb-5 text-[15px] leading-8 text-muted">
              Shippin Express membantu menghubungkan bisnis di Indonesia dengan pemasok di Korea Selatan,
              China, Australia, dan Singapore. Kami memahami kebutuhan dokumen impor, proses kepabeanan, dan pentingnya
              ketepatan waktu dalam bisnis.
            </p>
            <p className="text-[15px] leading-8 text-muted">
              Dengan jaringan mitra logistik di negara asal, kami membantu proses impor berjalan lancar,
              transparan, dan sesuai regulasi yang berlaku.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-[26px] bg-soft p-6">
                <div className="mb-3 grid size-11 place-items-center rounded-2xl bg-brand-yellow text-ink">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 font-display text-[15px] font-bold text-ink">{title}</h3>
                <p className="text-[13px] leading-6 text-muted">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
