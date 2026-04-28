# Pulang — Mobile First Web App

**Pulang** adalah layanan pemulasaran jenazah lengkap dari Kitabisa — menemani perjalanan berpulang dengan tenang, mulai dari hari kematian hingga pasca pemakaman.

> Simbol (-) pada papan nisan, di antara tahun lahir dan wafat, mengingatkan kita bahwa hidup sejatinya sangat singkat. Pulang hadir untuk memuliakan perjalanan terakhir manusia.

---

## Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| UI Primitives | Radix UI + shadcn/ui |
| Icons | Lucide React |
| Date Handling | date-fns |
| Animation | tw-animate-css, Motion |
| Font | Lora (serif), Outfit (sans-serif) |

---

## Struktur Proyek

```
src/
├── app/
│   ├── routes.tsx                  # Definisi semua route
│   ├── App.tsx                     # Root component
│   └── components/
│       ├── landing-page.tsx        # Halaman utama (/)
│       ├── layanan-page.tsx        # Detail layanan (/layanan)
│       ├── manifesto.tsx           # Manifesto Pulang (/manifesto)
│       ├── cara-akses-layanan.tsx  # Cara akses layanan (/cara-akses-layanan)
│       ├── faq-page.tsx            # FAQ (/faq)
│       ├── purchase-onboard.tsx    # Step 1: Pilih profil & prosesi (/purchase)
│       ├── purchase-layanan.tsx    # Step 2: Detail layanan (/purchase/layanan)
│       ├── purchase-data-diri.tsx  # Step 3: Isi data diri (/purchase/data-diri)
│       ├── purchase-konfirmasi.tsx # Step 4: Konfirmasi & bayar (/purchase/konfirmasi)
│       ├── purchase-success.tsx    # Sukses pendaftaran (/purchase/success)
│       ├── member-page.tsx         # Dashboard anggota (/member)
│       ├── member-empty-page.tsx   # State kosong anggota (/member-empty)
│       ├── perpanjang-page.tsx     # Perpanjang keanggotaan (/perpanjang)
│       ├── shared-layout.tsx       # Navbar, Footer, shared sections
│       ├── page-transition.tsx     # Hook & provider untuk page transition
│       ├── step-slide-wrapper.tsx  # Wrapper animasi slide antar step purchase
│       ├── auth-context.tsx        # Context autentikasi
│       ├── xendit-banner.tsx       # Banner pembayaran via Flip
│       ├── not-found-page.tsx      # Halaman 404
│       └── ui/                     # Komponen UI primitif (shadcn/ui)
├── assets/                         # Gambar, ikon, SVG, logo
└── styles/
    ├── index.css                   # Entry point CSS
    ├── fonts.css                   # Import Google Fonts
    ├── tailwind.css                # Tailwind setup
    └── theme.css                   # Design tokens (CSS variables)
```

---

## Alur Pendaftaran (Purchase Flow)

```
/purchase           → Pilih: Diri Sendiri / Keluarga + Prosesi Agama + Domisili
/purchase/layanan   → Review detail layanan sesuai pilihan
/purchase/data-diri → Isi data penerima layanan + kontak darurat / pengelola
/purchase/konfirmasi→ Ringkasan + persetujuan + pembayaran via Flip
/purchase/success   → Konfirmasi pendaftaran berhasil
```

Semua data antar step diteruskan via `location.state` (React Router) dan di-backup ke `sessionStorage` dengan key `pulang_onboard` / `pulang_purchase`.

---

## Prosesi Agama yang Didukung

| Prosesi | Kode |
|---|---|
| Islam | `islam` |
| Kristen Protestan | `kristen` |
| Katolik | `katolik` |
| Hindu | `hindu` |
| Buddha | `buddha` |
| Konghucu | `konghucu` |

Setiap prosesi memiliki daftar layanan hari kematian, catatan pengecualian, dan layanan pasca kematian yang berbeda — didefinisikan di `purchase-layanan.tsx` dan `landing-page.tsx`.

---

## Menjalankan Proyek

```bash
# Install dependencies
npm install

# Development server (http://localhost:5173)
npm run dev

# Build untuk production
npm run build

# Serve hasil build
npm start
```

---

## Desain Referensi

Desain asal tersedia di Figma:
[Pulang Mobile First — Figma](https://www.figma.com/design/wASBIRwVZKN9vqIABCVQgc/Pulang-Mobile-First)

---

## Catatan Teknis

- **Max width**: `480px` — seluruh layout dirancang mobile-first dan dibatasi lebar 480px di tengah layar.
- **Font**: Lora untuk heading (serif, elegan), Outfit untuk body text (modern, readable).
- **Warna utama**: `#AF9160` (gold), `#1f1912` (dark brown), `#F9F7F3` (cream).
- **Payment gateway**: Flip (sebelumnya Xendit) — banner ditampilkan di halaman konfirmasi.
- **Layanan hanya tersedia di Jabodetabek** — validasi domisili ada di `purchase-onboard.tsx`.
- **Masa tunggu anggota**: 3 bulan sejak pendaftaran aktif.
