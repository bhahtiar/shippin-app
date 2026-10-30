# Shippin Express — Website

Website company profile untuk layanan impor internasional.

## Tech Stack
- React 18 + Vite
- Pure CSS-in-JS (no Tailwind)
- Single Page Application (smooth scroll)

## Deploy ke Vercel

### Via GitHub (Paling Mudah)
1. Push folder ini ke GitHub
2. Buka vercel.com/new → Import repo
3. Vercel auto-detect Vite → Deploy

### Build Settings
- Build Command: `npm run build`
- Output Directory: `dist`

## Local Dev
```bash
npm install
npm run dev
```

## Kustomisasi Utama
- Nomor WA: `src/components/Contact.jsx` → ubah `WA_NUMBER`
- Layanan: `src/components/Services.jsx` → edit array `services`
- Stats: `src/components/Stats.jsx`
