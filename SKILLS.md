# Skills & Konvensi Proyek

Panduan ini ditujukan untuk developer (atau AI assistant) yang bekerja di proyek ini. Berisi konvensi, pola, dan hal-hal yang perlu diperhatikan.

---

## Styling

- **Tailwind CSS v4** — utility-first, tanpa config file terpisah. Setup via `@tailwindcss/vite` plugin.
- Semua class ditulis inline sebagai string Tailwind. Tidak ada CSS module atau styled-components.
- Nilai jarak, ukuran, warna **hampir selalu ditulis sebagai arbitrary value** (contoh: `px-[20px]`, `text-[14px]`, `bg-[#AF9160]`) — konsisten dengan output Figma-to-code.
- Jangan ganti arbitrary value dengan token Tailwind standar kecuali ada alasan kuat — ini akan merusak konsistensi visual.
- **Jangan** tambah file CSS baru; semua override tema ada di `src/styles/theme.css`.

---

## Font

- **Heading / display**: `font-['Lora',serif]` — digunakan untuk judul halaman, nama produk, harga.
- **Body / UI**: `font-['Outfit',sans-serif]` — digunakan untuk semua teks lainnya.
- Jangan ganti ke font lain tanpa koordinasi desain.

---

## Warna Utama

| Nama | Hex | Penggunaan |
|---|---|---|
| Gold | `#AF9160` | CTA primer, aksen |
| Gold Light | `#BDA67A` | Hover, border aktif |
| Dark Brown | `#1f1912` | Background gelap, tombol utama |
| Cream | `#F9F7F3` | Background halaman |
| Warm Gray | `#6b6050` | Teks sekunder |

---

## Komponen & Struktur

- Setiap halaman = satu file `.tsx` di `src/app/components/`.
- Komponen kecil (section, card, accordion) **didefinisikan lokal** di dalam file halaman yang sama — tidak dipisah ke file tersendiri kecuali dipakai lebih dari satu halaman.
- Komponen yang dipakai bersama ada di `shared-layout.tsx` (Navbar, Footer, `SectionCtaAnggota`, dll).
- Komponen UI primitif (button, dialog, popover, dll) ada di `src/app/components/ui/` — ini adalah shadcn/ui dan **tidak perlu dimodifikasi langsung**.

---

## Data Agama (RELIGION_DATA)

Data layanan per prosesi agama **terduplikasi** di dua tempat:
- `landing-page.tsx` — dipakai di accordion halaman utama dan halaman `/layanan`.
- `purchase-layanan.tsx` — dipakai di halaman konfirmasi layanan saat purchase.

Jika ada perubahan konten layanan, **update keduanya**. Pertimbangkan ekstrak ke file shared jika ada perubahan besar.

```
Kode prosesi: islam | kristen | katolik | hindu | buddha | konghucu
```

---

## Purchase Flow & State

Data antar step purchase diteruskan via `location.state` (React Router) **dan** di-backup ke `sessionStorage`:

| Key | Isi | Dipakai di |
|---|---|---|
| `pulang_onboard` | target, ceremony, domicile, birthDate | purchase-layanan, purchase-data-diri |
| `pulang_purchase` | semua onboard + data diri lengkap | purchase-konfirmasi, purchase-success |

Pattern membaca state:
```tsx
const data = (location.state as DataType | null) ?? (() => {
  try { return JSON.parse(sessionStorage.getItem("key") ?? "{}"); }
  catch { return {}; }
})();
```

---

## Routing

Semua route didefinisikan di `src/app/routes.tsx`. Untuk navigasi dengan loading transition, gunakan hook `usePageTransition`:

```tsx
const { navigateWithLoading } = usePageTransition();
navigateWithLoading("/purchase", { state: { target: "self" } });
```

**Jangan** gunakan `useNavigate` langsung — ini akan skip animasi transisi halaman.

---

## Accordion Pattern

Accordion di proyek ini menggunakan **CSS Grid trick** (bukan `max-height`) untuk animasi expand/collapse yang smooth:

```tsx
<div className={`grid transition-[grid-template-rows,opacity] duration-300 ${
  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
}`}>
  <div className="overflow-hidden">
    {/* content */}
  </div>
</div>
```

Gunakan pola ini (bukan `max-h-[...]`) untuk semua accordion baru.

---

## Layout Constraint

Seluruh UI dibatasi lebar **`max-w-[480px]`** dan dicentrasi:

```tsx
<div className="min-h-screen flex justify-center bg-[#fefefe]">
  <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
    {/* konten */}
  </div>
</div>
```

Jangan ubah constraint ini — proyek ini adalah mobile-first web app.

---

## Validasi Bisnis

- **Usia anggota**: 1–65 tahun. Di luar range → tampilkan `BlockedModal`.
- **Domisili**: Hanya Jabodetabek. Non-Jabodetabek → tampilkan `BlockedModal`.
- **Masa tunggu**: 3 bulan sejak pendaftaran aktif sebelum layanan bisa diklaim.
- **Harga keanggotaan**: Rp 200.000/tahun.
- **Harga Pesan Langsung**: Rp 15.000.000/layanan.

---

## Hal yang Tidak Boleh Dilakukan

- Jangan hapus `react()` atau `tailwindcss()` dari `vite.config.ts`.
- Jangan ubah arbitrary values Tailwind ke token standar tanpa review desain.
- Jangan gunakan `useNavigate` langsung — selalu pakai `usePageTransition`.
- Jangan buat file CSS baru; masukkan ke `theme.css` jika perlu tambah variabel.
- Jangan commit perubahan pada `src/app/components/ui/` kecuali ada kebutuhan khusus.
