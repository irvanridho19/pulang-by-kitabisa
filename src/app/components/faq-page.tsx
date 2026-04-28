import { useState, useEffect } from "react";
import { NavbarMobileHeader, MobileMenu, Footer, SectionCtaAnggota } from "./shared-layout";

type FaqItem = { q: string; a: string };
type FaqCategory = { category: string; items: FaqItem[] };

const FAQ_DATA: FaqCategory[] = [
  {
    category: "Tentang Pulang",
    items: [
      {
        q: "Apa itu Pulang?",
        a: "Pulang adalah gerakan untuk mempersiapkan kematian agar bisa berpulang dengan tenang. Untuk mencapai misi tersebut, Pulang memberikan layanan pemulasaran lengkap mulai dari hari kematian hingga pasca kematian.\n\nPulang menemani perjalanan berpulang dengan lebih tenang dan memberikan kemudahan bagi keluarga saat mengurus kepulanganmu.",
      },
      {
        q: "Siapa yang membuat Pulang?",
        a: "Pulang adalah inisiatif terbaru dari Kitabisa (platform galang dana dan donasi online). Kitabisa telah berdiri sejak 2013 menjembatani 11 juta lebih orang baik berdonasi melalui lebih dari 1 juta galang dana.\n\nKitabisa melahirkan Pulang untuk menjadi saksi sekaligus memuliakan banyak orang baik di perjalanan terakhirnya.",
      },
      {
        q: "Apa misi Pulang?",
        a: "Pulang meyakini yang pasti dalam kehidupan hanyalah kematian. Kematian bukan hal yang tabu untuk dibicarakan, melainkan justru harus dipersiapkan.\n\nPulang memiliki misi menemani setiap orang agar bisa tenang berpulang dengan memberikan beragam layanan terintegrasi mulai dari menyiapkan kematian hingga pendampingan pasca berduka.",
      },
    ],
  },
  {
    category: "Keanggotaan",
    items: [
      {
        q: "Apa yang dimaksud dengan anggota Pulang?",
        a: "Anggota Pulang adalah individu yang telah mendaftar untuk bisa mendapatkan layanan Pulang ketika meninggal dunia. Untuk bisa menjadi anggota Pulang, maka perlu melakukan pembayaran iuran tahunan Pulang sebesar Rp 200.000.",
      },
      {
        q: "Bagaimana cara gabung menjadi anggota Pulang?",
        a: "1. Buka website pulang.kitabisa.com\n2. Klik 'Daftar jadi anggota'\n3. Isi formulir pendaftaran\n4. Lakukan pembayaran iuran keanggotaan Pulang sebesar Rp 200.000 per tahun",
      },
      {
        q: "Berapa iuran untuk menjadi anggota Pulang?",
        a: "Iuran keanggotaan Pulang sebesar Rp 200.000 per tahun.",
      },
      {
        q: "Apakah semua usia bisa menjadi anggota Pulang?",
        a: "Saat ini, usia anggota Pulang yakni usia 1 tahun sampai dengan 65 tahun.\n\nUsia 0 sampai 1 tahun atau di atas 66 tahun bisa tetap menggunakan layanan Pulang dengan cara menggunakan layanan Pesan Langsung Pulang (non keanggotaan) yang bisa diakses saat ada keluarga yang meninggal dunia.\n\nPerlu diketahui bahwa layanan Keanggotaan dan layanan Pesan Langsung memiliki jenis layanan dan biaya yang berbeda.",
      },
      {
        q: "Berapa lama keanggotaan Pulang?",
        a: "Masa keanggotaan Pulang perlu diperpanjang setiap tahun agar tetap aktif.",
      },
      {
        q: "Apakah keanggotaan Pulang berlaku seumur hidup?",
        a: "Tidak. Masa keanggotaan Pulang berlaku selama satu tahun. Setiap anggota perlu memperpanjang keanggotaannya setiap tahun dengan cara membayar iuran tahunan keanggotaan Pulang.",
      },
      {
        q: "Bagaimana cara memperpanjang keanggotaan Pulang?",
        a: "1. Buka website pulang.kitabisa.com\n2. Login\n3. Masuk ke halaman keanggotaan (halaman member)\n4. Klik 'Perpanjang Keanggotaan'\n5. Lakukan pembayaran untuk perpanjang keanggotaanmu",
      },
      {
        q: "Apakah bisa menggunakan Pulang saat keanggotaan tidak aktif?",
        a: "Tidak. Status keanggotaan anggota harus aktif untuk bisa menggunakan layanan Pulang. Maka, penting untuk menjaga status aktif keanggotaan dengan melakukan pembayaran perpanjangan iuran sebelum keanggotaan non-aktif.",
      },
      {
        q: "Apakah setelah menjadi anggota bisa langsung menggunakan layanan Pulang?",
        a: "Anggota memiliki masa tunggu selama 3 bulan. Artinya anggota dapat menggunakan layanan Pulang setelah melewati 3 bulan masa tunggu sejak mendaftar.\n\nPulang menerapkan masa tunggu 3 bulan untuk anggota karena konsep keanggotaannya untuk mempersiapkan kepulangan sejak jauh hari. Jika individu ingin langsung menggunakan layanan Pulang tanpa menunggu maka bisa menggunakan layanan Pesan Langsung tanpa keanggotaan.\n\nContoh masa tunggu: Anggota mendaftar pada 1 Januari 2026, maka ia dapat menggunakan layanan Pulang setelah melewati 3 bulan sejak 1 Januari 2026 yakni pada April 2026.",
      },
    ],
  },
  {
    category: "Layanan Pulang",
    items: [
      {
        q: "Apa saja layanan yang diberikan di hari kematian?",
        a: "Prosesi Islam:\n- Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga\n- Pemandian jenazah\n- Pengkafanan sesuai syariat\n- Kain kafan (sabun, kamper, dan parfum)\n- Bunga & air mawar (opsional, jika butuh)\n- Papan nisan dan papan kayu penutup makam\n- Ambulans jenazah\n- Penggantian biaya jasa penggalian makam\n- Karangan bunga\n- Snack box 50 pak\n*Tidak termasuk pencarian lahan makam dan rumah duka.\n\nProsesi Kristen Protestan & Katolik:\n- Peti jenazah\n- Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga\n- Pemandian jenazah\n- Tata rias jenazah\n- Pemberian formalin\n- Lembar duka, wewangian & lilin duka\n- Kain penutup peti, sarung tangan & kaos kaki\n- Bunga salib atau bunga meja\n- Ambulans jenazah\n- Penggantian biaya jasa penggalian makam\n- Karangan bunga\n- Snack box 50 pak\n*Tidak termasuk pencarian lahan makam, rumah duka, dekorasi rumah duka.\n\nProsesi Hindu, Buddha & Konghucu:\n- Peti jenazah\n- Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga\n- Pemandian jenazah\n- Tata rias jenazah\n- Pemberian formalin\n- Lembar duka, wewangian & lilin duka\n- Kain penutup peti, sarung tangan & kaos kaki\n- Bunga meja\n- Ambulans jenazah\n- Penggantian biaya jasa penggalian makam\n- Karangan bunga\n- Snack box 50 pak\n*Tidak termasuk pencarian lahan makam, rumah duka, dekorasi rumah duka, kremasi atau larung.",
      },
      {
        q: "Apa saja layanan yang tidak termasuk dalam layanan hari kematian?",
        a: "- Lahan makam\n- Rumah duka\n- Kremasi\n- Larung laut",
      },
      {
        q: "Apa saja layanan Pulang pasca kematian?",
        a: "Layanan pasca kematian akan diberikan khusus untuk anggota Pulang. Pemesanan layanan Pesan Langsung non keanggotaan tidak akan mendapatkan layanan pasca kematian.\n\nLayanan pasca kematian untuk anggota antara lain:\n1. Uang duka Rp 1.000.000 untuk keluarga\n2. Asisten khusus untuk membantu keluarga mengurus administrasi pasca kematian seperti pengurusan akta kematian dari Disdukcapil, penghentian BPJS, dan kebutuhan administrasi lainnya\n3. Layanan konseling psikologis bagi keluarga bersama psikolog\n4. 50 buku Yasin untuk Muslim (opsional, jika butuh)",
      },
      {
        q: "Apakah Pulang melayani pemulasaran untuk semua prosesi agama?",
        a: "Pulang melayani prosesi pemakaman untuk Islam, Kristen Protestan, Katolik, Hindu, Buddha, dan Konghucu. Pulang belum menyediakan layanan untuk kremasi dan larung laut.",
      },
      {
        q: "Apakah layanan Pulang tersedia 24 jam?",
        a: "Iya. Layanan dan call centre Pulang bisa diakses selama 24 jam termasuk pada saat hari libur.",
      },
      {
        q: "Apakah layanan Pulang termasuk menyediakan makam?",
        a: "Tidak. Layanan Pulang tidak termasuk lahan makam. Layanan yang diberikan Pulang terkait pemakaman yakni:\n- Memberikan bantuan informasi pencarian makam terdekat\n- Memberikan panduan untuk pencarian lahan makam\n- Mengganti biaya jasa penggalian makam\n- Menyediakan papan nisan dan papan penutup makam",
      },
      {
        q: "Apakah layanan Pulang termasuk peti jenazah?",
        a: "Iya. Layanan Pulang untuk prosesi Kristen Protestan, Katolik, Hindu, Buddha, dan Konghucu termasuk peti jenazah.",
      },
      {
        q: "Apakah layanan Pulang termasuk mobil jenazah?",
        a: "Iya. Layanan Pulang termasuk mobil jenazah.",
      },
      {
        q: "Apakah layanan Pulang termasuk rumah duka?",
        a: "Tidak. Layanan Pulang tidak termasuk penyewaan rumah duka.\n\nJika keluarga membutuhkan rumah duka, maka tim Pulang dapat membantu memberikan informasi dan rekomendasi terkait lokasi, harga, dan kontak rumah duka.",
      },
      {
        q: "Apakah Pulang melayani kremasi?",
        a: "Tidak. Pulang belum melayani prosesi kremasi.",
      },
      {
        q: "Apakah Pulang menyediakan layanan untuk seluruh wilayah Indonesia?",
        a: "Untuk saat ini, Pulang hanya menyediakan layanan untuk Jabodetabek.",
      },
      {
        q: "Apakah Pulang melayani individu yang meninggal karena kecelakaan?",
        a: "Iya. Pulang juga bisa melayani individu yang meninggal dunia karena kecelakaan.",
      },
      {
        q: "Apakah ada tim Pulang yang hadir langsung membantu keluarga?",
        a: "Ada. Tim Pulang akan membantu langsung pada saat:\n1. Hadir langsung saat hari kematian untuk siap siaga membantu segala kebutuhan keluarga.\n2. Membantu keluarga pasca kematian dengan mendampingi pengurusan surat-surat administrasi seperti pengurusan surat kematian, penutupan BPJS, dan kebutuhan administrasi lainnya.",
      },
      {
        q: "Apakah Pulang akan memberikan uang duka bagi keluarga?",
        a: "Khusus untuk layanan bagi anggota, Pulang akan memberikan uang duka sebesar Rp 1.000.000 bagi keluarga.",
      },
      {
        q: "Apakah Pulang akan membantu mengurus administrasi pasca kematian?",
        a: "Khusus untuk anggota, Pulang akan memberikan bantuan mengurus beragam administrasi pasca kematian.\n\nBentuk bantuan Pulang dalam pengurusan administrasi:\n1. Membantu langsung mengurus administrasi\n2. Memberikan panduan atau informasi kepada keluarga untuk pengurusan administrasi. Hal ini dilakukan karena ada beberapa kebutuhan administrasi yang hanya bisa diurus langsung oleh pihak keluarga (tidak bisa diwakilkan pihak ketiga).",
      },
      {
        q: "Apakah bisa mendapatkan layanan tambahan di luar paket yang disediakan?",
        a: "Jika ingin mendapatkan layanan di luar paket yang dibutuhkan silakan berkonsultasi dengan call centre Pulang.",
      },
      {
        q: "Apakah perlu memberikan tip (uang tambahan) untuk tim Pulang yang melayani?",
        a: "Tidak. Tim lapangan Pulang yang datang membantu keluarga dilarang keras menerima tip tambahan dari pihak keluarga. Silakan laporkan pada Pulang jika ada tim lapangan yang meminta tambahan uang di lokasi.",
      },
    ],
  },
  {
    category: "Layanan Pesan Langsung (Non-Anggota)",
    items: [
      {
        q: "Apakah bisa mendapatkan layanan Pulang secara langsung tanpa menjadi anggota?",
        a: "Bisa. Ada dua jenis layanan Pulang:\n1. Layanan Keanggotaan (membership) — mendaftar menjadi anggota jauh hari sebelum meninggal dunia. Biayanya sebesar Rp 200.000 per tahun.\n2. Layanan Pesan Langsung — bisa langsung digunakan saat ada keluarga yang meninggal dunia (tanpa menjadi anggota terlebih dahulu). Biayanya sebesar Rp 15.000.000.",
      },
      {
        q: "Berapa biaya untuk menggunakan jasa Pulang tanpa menjadi anggota?",
        a: "Untuk bisa langsung mendapatkan layanan Pulang saat ada keluarga yang meninggal dunia besaran biayanya sebesar Rp 15.000.000.",
      },
      {
        q: "Apa perbedaan Layanan Keanggotaan dan Layanan Pesan Langsung Pulang?",
        a: "Keanggotaan:\n- Waktu pendaftaran: jauh hari sebelum hari kematian\n- Biaya: Rp 200.000 per tahun\n- Usia: 1–65 tahun\n- Layanan: hari kematian + pasca kematian\n- Uang duka: Rp 1.000.000 untuk keluarga\n\nPesan Langsung (Non-Anggota):\n- Waktu pendaftaran: bisa langsung dipesan saat ada keluarga yang meninggal\n- Biaya: Rp 15.000.000\n- Usia: tidak ada batasan usia\n- Layanan: hanya layanan saat hari kematian\n- Uang duka: tidak mendapatkan uang duka",
      },
    ],
  },
  {
    category: "Klaim Layanan",
    items: [
      {
        q: "Siapa yang bisa mendapatkan layanan Pulang?",
        a: "Ada dua jenis yang bisa mendapatkan layanan Pulang:\n1. Anggota aktif yang telah melewati masa tunggu 3 bulan.\n2. Individu yang memesan layanan Pesan Langsung (non-anggota) Pulang saat ada keluarga yang meninggal dunia.",
      },
      {
        q: "Seberapa cepat layanan Pulang bisa hadir setelah dihubungi?",
        a: "Pulang akan langsung mengirimkan tim ke lapangan setelah selesai melakukan verifikasi anggota.",
      },
    ],
  },
  {
    category: "Kontak",
    items: [
      {
        q: "Bagaimana cara menghubungi Pulang?",
        a: "Pulang dapat dihubungi melalui:\n1. WhatsApp: +62 812-3456-7890\n2. Call centre 24 jam: +62 812-3456-7890",
      },
      {
        q: "Apakah Pulang memiliki call centre 24 jam?",
        a: "Pulang memiliki call centre 24 jam yang bisa dihubungi kapan saja.",
      },
      {
        q: "Apakah Pulang dapat dikontak di akhir pekan atau hari libur nasional?",
        a: "Bisa. Pulang dapat dihubungi 24 jam di akhir pekan maupun hari libur nasional.",
      },
    ],
  },
];

export default function FaqPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex justify-center bg-[#fefefe]">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col flex-1 w-full">
          {/* Header */}
          <div className="flex flex-col gap-[16px] items-start px-[24px] pt-[32px] pb-[24px] w-full">
            <div className="bg-[#f0e6d5] flex items-center justify-center px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['Outfit',sans-serif] font-semibold text-[#a88658] text-[10px] tracking-[1.2px] uppercase">
                Pusat Bantuan
              </p>
            </div>
            <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[28px] w-full">
              Pertanyaan yang sering ditanyakan
            </p>
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#6b6050] text-[14px] w-full">
              Temukan jawaban seputar Pulang, keanggotaan, layanan, dan cara menghubungi kami.
            </p>
          </div>

          <div className="bg-[#e8e2d6] h-px w-full" />

          {/* FAQ Accordion */}
          <div className="flex flex-col px-[20px] py-[24px] w-full gap-[28px]">
            {FAQ_DATA.map((cat, catIdx) => (
              <div key={catIdx} className="flex flex-col gap-[10px]">
                {/* Category Label */}
                <p className="font-['Outfit',sans-serif] font-semibold text-[#a88658] text-[11px] tracking-[1.2px] uppercase px-[4px]">
                  {cat.category}
                </p>

                {/* Items */}
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-[16px] w-full overflow-hidden"
                      style={{ border: "1px solid rgba(189,166,122,0.2)", boxShadow: "0px 2px 8px 0px rgba(46,33,20,0.03)" }}
                    >
                      <button
                        onClick={() => setOpenKey(isOpen ? null : key)}
                        className="flex items-center justify-between w-full px-[16px] py-[18px] bg-transparent border-none cursor-pointer text-left"
                      >
                        <p className="font-['Outfit',sans-serif] font-bold leading-[1.4] text-[#1f1912] text-[14px] pr-[16px] flex-1">
                          {item.q}
                        </p>
                        <div className={`flex items-center justify-center rounded-full shrink-0 size-[28px] transition-colors duration-300 ${isOpen ? "bg-[#1f1912]" : "bg-[#f5efe4]"}`}>
                          {isOpen ? (
                            <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                              <path d="M1 1H11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          ) : (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M6 1V11M1 6H11" stroke="#a88658" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          )}
                        </div>
                      </button>

                      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <div className="px-[16px] pb-[20px]">
                            <div className="h-px w-full bg-[#f3f4f6] mb-[14px]" />
                            <p className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[#6b6050] text-[13px] whitespace-pre-line">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Contact Card */}
            <div className="bg-[#F4EDE0] rounded-[24px] flex flex-col items-start p-[24px] w-full shadow-sm">
              <div className="bg-white flex items-center justify-center px-[12px] py-[6px] rounded-[100px] mb-[16px]">
                <p className="font-['Outfit',sans-serif] font-bold text-[#a88658] text-[10px] tracking-[1px] uppercase">
                  Masih Bingung?
                </p>
              </div>
              <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[22px] w-full mb-[12px]">
                Kami siap bantu jawab langsung
              </p>
              <p className="font-['Outfit',sans-serif] font-normal leading-[1.55] text-[#6b6050] text-[13px] w-full mb-[20px]">
                Tim Pulang tersedia 24 jam, termasuk akhir pekan dan hari libur. Tanpa biaya konsultasi.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1f1912] w-full flex items-center justify-center gap-[8px] px-[20px] py-[14px] rounded-[12px] no-underline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p className="font-['Outfit',sans-serif] font-semibold text-[14px] text-white">
                  Hubungi tim Pulang
                </p>
              </a>
            </div>
          </div>

          <SectionCtaAnggota />
        </main>

        <Footer />
      </div>
    </div>
  );
}
