import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import imgManifestoIcon from "../../assets/Section/manifesto-icon.svg";
import imgImage9 from "../../assets/Section/Dampak.png";
import imgHero from "../../assets/Hero/hero.svg";
import daftarDiriSendiri from "../../assets/Illustration/Diri Sendiri.svg";
import daftarKeluarga from "../../assets/Illustration/Keluarga.svg";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { usePageTransition } from "./page-transition";
import imgManifestoIllus from "../../assets/Manifesto/ilus.svg";
import imgCheckCircle from "../../assets/check-circle.svg";
import { DesktopPurchaseNavbar, DesktopFooter } from "./purchase-desktop-shared";

/* ── Sticky CTA ─── */
function StickyBottomCtaBar({ visible }: { visible: boolean }) {
  const { navigateWithLoading } = usePageTransition();
  const phoneLink = "tel:+6281234567890";

  return (
    <div
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 transition-all duration-300 ease-in-out ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="bg-[#f9f7f3] flex flex-col items-start overflow-clip pb-[16px] pt-[12px] px-[16px] rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_-4px_20px_0px_rgba(89,70,53,0.12)] w-full">
        <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#6b6050] text-[11px] w-full text-center mb-[8px]">
          Mulai dari Rp200.000/tahun
        </p>
        <button
          onClick={() => navigateWithLoading("/purchase")}
          className="bg-[#AF9160] flex h-[52px] items-center justify-center overflow-clip rounded-[12px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] w-full cursor-pointer border-none p-0"
        >
          <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[16px] text-white whitespace-nowrap">
            Daftar jadi anggota
          </p>
        </button>
        <a href={phoneLink} className="rounded-[12px] shrink-0 no-underline block w-full">
          <div className="flex flex-col gap-[4px] items-center justify-center px-[16px] py-[8px] w-full">
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#1f1f1f] text-[11px] text-center">
              Belum jadi anggota dan butuh layanan cepat?
            </p>
            <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#750d33] text-[13px] text-center underline decoration-solid">
              Pesan layanan langsung 24 jam
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

/* ── Hero Section ─── */
function SectionHero({ ctaRef }: { ctaRef?: React.RefObject<HTMLDivElement | null> }) {
  const { navigateWithLoading } = usePageTransition();
  const phoneLink = "tel:+6281234567890";

  return (
    <div className="bg-white flex flex-col gap-[24px] items-start justify-center overflow-clip pb-[40px] pt-[44px] px-[20px] relative w-full" id="hero-section">
      <div className="absolute -translate-x-1/2 left-[calc(50%+0.5px)] size-[363px] top-[503px] pointer-events-none">
        <div className="absolute inset-[-165.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1563 1563">
            <g filter="url(#filter0_f_hero)" opacity="0.3">
              <circle cx="781.5" cy="781.5" fill="#AF9160" r="181.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1563" id="filter0_f_hero" width="1563" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="300" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-['Lora',serif] font-bold text-[#1f1f1f] text-[24px] w-full leading-[1.4] text-center">
          Menemanimu Menyiapkan <br /><span className="text-[#AF9160]">Kepulangan</span>
        </p>
        <div className="relative shrink-0 w-full rounded-[24px] overflow-hidden shadow-[0_12px_32px_-8px_rgba(89,70,53,0.2)]">
          <img src={imgHero} alt="Keluarga bersama" className="block w-full h-auto" />
        </div>
        <p className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[13.5px] w-full leading-[1.6] text-center px-[10px]">
          <span className="font-['Outfit',sans-serif] font-bold text-[#555]">PULANG</span>
          <span>{" memberi layanan lengkap mulai dari hari kematian hingga pasca pemakaman."}</span>
        </p>

        <div ref={ctaRef} className="flex flex-col gap-[10px] items-center shrink-0 w-full mt-[4px]">
          <button
            onClick={() => navigateWithLoading("/purchase")}
            className="bg-[#1f1912] rounded-[12px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0 w-full cursor-pointer border-none p-0 block transition-transform active:scale-95"
          >
            <div className="flex items-center justify-center px-[24px] py-[14px] w-full">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[14px] text-white whitespace-nowrap">
                Daftar jadi anggota
              </p>
            </div>
          </button>
          <a href={phoneLink} className="rounded-[12px] shrink-0 no-underline block w-full">
            <div className="flex flex-col gap-[4px] items-center justify-center px-[16px] py-[8px] w-full">
              <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#1f1f1f] text-[11px] text-center">
                Belum jadi anggota dan butuh layanan cepat?
              </p>
              <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#750d33] text-[13px] text-center underline decoration-solid">
                Pesan layanan langsung 24 jam
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Bullet item helpers ─── */
// Peluru bulat untuk item utama
function BulletDot({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[4px] mt-[7px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 4 4">
        <circle cx="2" cy="2" fill={color} r="2" />
      </svg>
    </div>
  );
}

// Strip/Hyphen kotak untuk sub-item pasca kematian
function SquareHyphen({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 w-[4px] h-[2px] mt-[8px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 4 2">
        <rect width="4" height="2" fill={color} />
      </svg>
    </div>
  );
}

const ChevronIcon = ({ className, isOpen }: { className?: string, isOpen: boolean }) => (
  <svg
    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${className}`}
    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

/* ── Shared Data untuk Accordion Agama ─── */
const commonPascaItems = [
  {
    main: "Asisten khusus untuk mengurus administrasi:",
    subs: [
      "Akta kematian dari Disdukcapil",
      "Surat keterangan kepolisian",
      "Penghentian BPJS",
    ],
  },
  {
    main: "Layanan konseling psikolog",
  }
];

const RELIGION_DATA = [
  {
    id: "islam",
    name: "Islam",
    dotColor: "#C4A46E",
    hariKematian: [
      "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
      "Informasi pencarian lahan makam",
      "Pemandian jenazah",
      "Pengkafanan sesuai syariat",
      "Kain kafan (sabun, kamper, dan parfum)",
      "Bunga & air mawar (opsional, jika butuh)",
      "Papan nisan dan papan kayu penutup makam",
      "Ambulans jenazah",
      "Penggantian biaya jasa penggalian makam",
      "Karangan bunga",
      "Snack box 50 pak",
    ],
    note: "Tidak termasuk lahan makam dan rumah duka.",
    pascaKematian: [
      commonPascaItems[0],
      { main: "50 buku Yasin (opsional, jika butuh)" },
      commonPascaItems[1]
    ]
  },
  {
    id: "kristen",
    name: "Kristen Protestan",
    dotColor: "#6CB4EE",
    hariKematian: [
      "Peti jenazah",
      "Informasi pencarian lahan makam",
      "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
      "Pemandian jenazah",
      "Tata rias jenazah",
      "Pemberian formalin",
      "Lembar duka, wewangian & lilin duka",
      "Kain penutup peti, sarung tangan & kaos kaki",
      "Bunga salib atau bunga meja",
      "Ambulans jenazah",
      "Penggantian biaya jasa penggalian makam",
      "Karangan bunga",
      "Snack box 50 pak",
    ],
    note: "Tidak termasuk lahan makam, rumah duka, dan dekorasi rumah duka.",
    pascaKematian: commonPascaItems
  },
  {
    id: "katolik",
    name: "Katolik",
    dotColor: "#A084D4",
    hariKematian: [
      "Peti jenazah",
      "Informasi pencarian lahan makam",
      "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
      "Pemandian jenazah",
      "Tata rias jenazah",
      "Pemberian formalin",
      "Lembar duka, wewangian & lilin duka",
      "Kain penutup peti, sarung tangan & kaos kaki",
      "Bunga salib atau bunga meja",
      "Ambulans jenazah",
      "Penggantian biaya jasa penggalian makam",
      "Karangan bunga",
      "Snack box 50 pak",
    ],
    note: "Tidak termasuk lahan makam, rumah duka, dan dekorasi rumah duka.",
    pascaKematian: commonPascaItems
  },
  {
    id: "hindu",
    name: "Hindu",
    dotColor: "#E88C5D",
    hariKematian: [
      "Peti jenazah",
      "Informasi pencarian lahan makam",
      "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
      "Pemandian jenazah",
      "Tata rias jenazah",
      "Pemberian formalin",
      "Lembar duka, wewangian & lilin duka",
      "Kain penutup peti, sarung tangan & kaos kaki",
      "Bunga meja",
      "Ambulans jenazah",
      "Penggantian biaya jasa penggalian makam",
      "Karangan bunga",
      "Snack box 50 pak",
    ],
    note: "Tidak termasuk lahan makam, rumah duka, dekorasi rumah duka, dan kremasi atau larung.",
    pascaKematian: commonPascaItems
  },
  {
    id: "buddha",
    name: "Buddha",
    dotColor: "#66B68D",
    hariKematian: [
      "Peti jenazah",
      "Informasi pencarian lahan makam",
      "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
      "Pemandian jenazah",
      "Tata rias jenazah",
      "Pemberian formalin",
      "Lembar duka, wewangian & lilin duka",
      "Kain penutup peti, sarung tangan & kaos kaki",
      "Bunga meja",
      "Ambulans jenazah",
      "Penggantian biaya jasa penggalian makam",
      "Karangan bunga",
      "Snack box 50 pak",
    ],
    note: "Tidak termasuk lahan makam, rumah duka, dekorasi rumah duka, dan kremasi atau larung.",
    pascaKematian: commonPascaItems
  },
  {
    id: "konghucu",
    name: "Konghucu",
    dotColor: "#D65E7A",
    hariKematian: [
      "Peti jenazah",
      "Informasi pencarian lahan makam",
      "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
      "Pemandian jenazah",
      "Tata rias jenazah",
      "Pemberian formalin",
      "Lembar duka, wewangian & lilin duka",
      "Kain penutup peti, sarung tangan & kaos kaki",
      "Bunga meja",
      "Ambulans jenazah",
      "Penggantian biaya jasa penggalian makam",
      "Karangan bunga",
      "Snack box 50 pak",
    ],
    note: "Tidak termasuk lahan makam, rumah duka, dekorasi rumah duka, dan kremasi atau larung.",
    pascaKematian: commonPascaItems
  }
];


/* ── Accordion Component ─── */
function ReligionAccordion({
  data,
  isOpen,
  onToggle,
  theme,
  showPasca = true,
}: {
  data: typeof RELIGION_DATA[0],
  isOpen: boolean,
  onToggle: () => void,
  theme: "dark" | "light",
  showPasca?: boolean,
}) {
  const isDark = theme === "dark";
  const accordionRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Class untuk teks (Tailwind)
  const textColor = isDark ? "text-white" : "text-[#1f1f1f]";
  const headerBgColor = isDark ? "bg-[#25201b]" : "bg-transparent";

  // Value HEX murni khusus untuk atribut fill pada SVG bullet & hyphen
  const fillColor = isDark ? "#ffffff" : "#1f1f1f";

  // Box styles
  const noteBoxStyle = isDark
    ? "border-[rgba(255,180,200,0.3)] bg-[rgba(255,255,255,0.04)] text-[#e8b5c4]"
    : "border-[#f4aeba] bg-[#fdf2f5] text-[#902b4d]";

  const pascaBoxStyle = isDark
    ? "border-[#4c7a6b] bg-[rgba(100,180,160,0.1)] text-[#c8ebe1]"
    : "border-[#70b39b] bg-[#eef8f4] text-[#1c6b50]";

  // Auto-scroll effect yang mengabaikan render pertama
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isOpen && accordionRef.current) {
      const timer = setTimeout(() => {
        const element = accordionRef.current;
        if (!element) return;

        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div ref={accordionRef} className={`flex flex-col w-full border-b ${isDark ? 'border-[rgba(255,255,255,0.06)]' : 'border-[#eaeaea]'} last:border-0`}>
      <button
        onClick={onToggle}
        className={`flex items-center justify-between w-full py-[16px] px-[16px] cursor-pointer border-none transition-colors duration-300 ${isOpen ? headerBgColor : 'bg-transparent'}`}
      >
        <div className="flex items-center gap-[12px]">
          {/* Dot diperbesar menjadi size-[12px] */}
          <div className="shrink-0 size-[12px] rounded-full shadow-sm" style={{ backgroundColor: data.dotColor }} />

          {/* Teks Agama dipertebal (font-bold) dan diperbesar (text-[14px]) */}
          <p className={`font-['Outfit',sans-serif] font-bold text-[14px] tracking-[0.2px] ${textColor}`}>
            {data.name}
          </p>
        </div>
        <ChevronIcon className={textColor} isOpen={isOpen} />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className={`flex flex-col gap-[16px] px-[16px] pb-[20px] pt-[4px] ${headerBgColor}`}>

            {/* HARI KEMATIAN */}
            <div className="flex flex-col gap-[12px] w-full">
              <p className={`font-['Outfit',sans-serif] font-bold text-[12px] tracking-[1px] uppercase ${textColor}`}>
                HARI KEMATIAN
              </p>
              <div className="flex flex-col gap-[8px]">
                {data.hariKematian.map((item, idx) => (
                  <div key={idx} className="flex gap-[10px] items-start w-full">
                    {/* Menggunakan fillColor (HEX), bukan textColor (Class) */}
                    <BulletDot color={fillColor} />
                    <p className={`flex-1 font-['Outfit',sans-serif] font-normal leading-[1.5] text-[13px] ${textColor}`}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className={`mt-[4px] border rounded-[8px] px-[12px] py-[10px] ${noteBoxStyle}`}>
                <p className="font-['Outfit',sans-serif] font-normal text-[12px] leading-[1.5]">
                  {data.note}
                </p>
              </div>
            </div>

            {showPasca && (
              <>
                {/* DIVIDER */}
                <div className={`w-full h-px shrink-0 ${isDark ? 'bg-[rgba(255,255,255,0.08)]' : 'bg-[#e4ddd4]'}`} />

                {/* PASCA KEMATIAN */}
                <div className="flex flex-col gap-[12px] w-full">
                  <p className={`font-['Outfit',sans-serif] font-bold text-[12px] tracking-[1px] uppercase ${textColor}`}>
                    PASCA KEMATIAN
                  </p>
                  <div className={`border rounded-[8px] px-[12px] py-[10px] ${pascaBoxStyle}`}>
                    <p className="font-['Outfit',sans-serif] font-normal text-[12px] leading-[1.5]">
                      Uang kedukaan <span className="font-semibold">Rp 1.000.000</span> untuk keluarga
                    </p>
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    {data.pascaKematian.map((item, idx) => (
                      <div key={idx} className="flex flex-col gap-[6px] w-full">
                        <div className="flex gap-[10px] items-start w-full">
                          <BulletDot color={fillColor} />
                          <p className={`flex-1 font-['Outfit',sans-serif] font-normal leading-[1.5] text-[13px] ${textColor}`}>
                            {item.main}
                          </p>
                        </div>
                        {item.subs && (
                          <div className="flex flex-col gap-[6px] pl-[14px]">
                            {item.subs.map((sub, sIdx) => (
                              <div key={sIdx} className="flex gap-[10px] items-start w-full">
                                <SquareHyphen color={fillColor} />
                                <p className={`flex-1 font-['Outfit',sans-serif] font-normal leading-[1.5] text-[13px] ${textColor}`}>
                                  {sub}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Keanggotaan Card ─── */
function KeanggotaanCard({ onNavigate }: { onNavigate: () => void }) {
  const [activeAccordion, setActiveAccordion] = useState<string>("islam");

  return (
    <div className="bg-[#1c1712] relative rounded-[20px] shrink-0 w-full shadow-lg">
      <div className="overflow-clip rounded-[inherit] w-full">
        <div className="flex flex-col gap-[20px] items-start px-[20px] py-[28px] w-full">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Lora',serif] font-bold leading-[normal] text-[20px] text-white w-full">
              Layanan Keanggotaan
            </p>
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[rgba(255,255,255,0.7)] w-full">
              Cocok untuk yang ingin mempersiapkan kepulangan sejak jauh hari.
            </p>
          </div>

          <div className="flex flex-col gap-[4px] items-start overflow-clip shrink-0 w-full mt-[4px]">
            <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#D5C9AA] text-[12px] whitespace-nowrap">
              Iuran mulai dari
            </p>
            <div className="flex gap-[6px] items-end leading-[normal] overflow-clip whitespace-nowrap">
              <p className="font-['Lora',serif] font-bold text-[#D5C9AA] text-[36px] tracking-[-0.5px]">Rp200.000</p>
              <p className="font-['Outfit',sans-serif] font-normal text-[15px] text-[rgba(255,255,255,0.4)] pb-[6px]">/ tahun</p>
            </div>
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.4] text-[12px] text-[rgba(255,255,255,0.5)]">
              *Iuran disesuaikan dengan usia saat mendaftar.
            </p>
          </div>

          <button
            onClick={onNavigate}
            className="bg-[#AF9160] flex h-[48px] items-center justify-center overflow-clip py-[12px] rounded-[12px] shrink-0 w-full cursor-pointer border-none mt-[4px]"
          >
            <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[15px] text-center text-white whitespace-nowrap">
              Daftar jadi anggota
            </p>
          </button>

          <div className="w-full mt-[8px]">
            <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#f9f7f3] text-[16px] mb-[12px] whitespace-nowrap">
              Layanan yang kamu dapatkan
            </p>
            <div className="border border-[rgba(255,255,255,0.1)] rounded-[16px] overflow-hidden bg-[#1f1a15] w-full">
              {RELIGION_DATA.map((religion) => (
                <ReligionAccordion
                  key={religion.id}
                  data={religion}
                  isOpen={activeAccordion === religion.id}
                  onToggle={() => setActiveAccordion(activeAccordion === religion.id ? "" : religion.id)}
                  theme="dark"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[8px] mt-[12px]">
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.4] text-[12px] text-[rgba(255,255,255,0.7)] w-full">
              *Semua layanan bisa diakses 3 bulan (90 hari) sejak terdaftar sebagai anggota aktif
            </p>
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.4] text-[12px] text-[rgba(255,255,255,0.7)] w-full">
              **Maksimal usia pendaftaran 65 tahun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Pesan Langsung Card ─── */
function PesanLangsungCard({ }: { onNavigate?: () => void }) {
  const [activeAccordion, setActiveAccordion] = useState<string>("islam");
  const waLink = "https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20memesan%20layanan%20langsung%20Pulang";

  return (
    <div className="bg-[#F9F7F3] border border-[#E8E2D9] border-solid flex flex-col gap-[20px] items-start overflow-clip py-[28px] px-[20px] relative rounded-[20px] w-full shadow-sm">
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Lora',serif] font-bold leading-[normal] text-[#1f1f1f] text-[20px] w-full">
          Pesan Langsung
        </p>
        <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#707070] text-[14px] w-full">
          Cocok untuk yang belum jadi anggota, tapi butuh bantuan langsung saat ada keluarga meninggal.
        </p>
      </div>

      <div className="flex flex-col gap-[4px] items-start leading-[normal] overflow-clip shrink-0 w-full mt-[4px]">
        <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#6b6050] text-[12px] whitespace-nowrap">
          Mulai dari
        </p>
        <div className="flex gap-[6px] items-end overflow-clip whitespace-nowrap">
          <p className="font-['Lora',serif] font-bold text-[#594635] text-[36px] tracking-[-0.5px]">Rp15.000.000</p>
          <p className="font-['Outfit',sans-serif] font-normal text-[#9e9e9e] text-[15px] pb-[8px]">/ layanan</p>
        </div>
        <p className="font-['Outfit',sans-serif] font-normal leading-[1.4] text-[12px] text-[#9e9e9e]">
          *Iuran disesuaikan dengan domisili &amp; pilihan prosesi kepulangan.
        </p>
      </div>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1A1613] flex gap-[10px] h-[48px] items-center justify-center overflow-clip px-[16px] rounded-[12px] shrink-0 w-full no-underline mt-[4px]"
      >
        <svg className="shrink-0 size-[18px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .82h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.14a16 16 0 006.95 6.95l1.5-1.34a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[15px] text-center text-white whitespace-nowrap">
          Telepon layanan langsung 24 jam
        </p>
      </a>

      <div className="w-full mt-[8px]">
        <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#1f1f1f] text-[16px] mb-[12px]">
          Layanan mencakup:
        </p>
        <div className="border border-[#E8E2D9] rounded-[16px] overflow-hidden bg-[#F2EFE8] w-full">
          {RELIGION_DATA.map((religion) => (
            <ReligionAccordion
              key={religion.id}
              data={religion}
              isOpen={activeAccordion === religion.id}
              onToggle={() => setActiveAccordion(activeAccordion === religion.id ? "" : religion.id)}
              theme="light"
              showPasca={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Pricing Section ─── */
function SectionPricing() {
  const [outerTab, setOuterTab] = useState<"keanggotaan" | "pesanLangsung">("keanggotaan");
  const { navigateWithLoading } = usePageTransition();

  return (
    <div id="section-pricing" className="bg-white flex flex-col gap-[24px] items-start justify-center overflow-clip px-[20px] py-[40px] relative shrink-0 w-full">
      <div className="flex flex-col gap-[12px] items-start overflow-clip shrink-0 w-full">
        <div className="bg-[#F5F2EC] flex items-start overflow-clip px-[14px] py-[6px] rounded-[100px] shrink-0">
          <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#AF9160] text-[11px] tracking-[1.5px] whitespace-nowrap">
            TIPE LAYANAN
          </p>
        </div>
        <p className="font-['Lora',serif] font-bold text-[24px] text-[#1f1f1f] w-full leading-[1.3]">
          Tenang berpulang dengan dua pilihan layanan
        </p>
        <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#707070] text-[15px] w-full">
          Siapkan semua sejak jauh hari, atau dapatkan layanan langsung di hari kematian.
        </p>
      </div>

      <div className="bg-[#EBE7DF] flex h-[48px] items-center justify-center overflow-clip p-[4px] rounded-[12px] w-full">
        <button
          onClick={() => setOuterTab("keanggotaan")}
          className={`flex-1 h-[40px] flex items-center justify-center rounded-[8px] border-none cursor-pointer transition-all duration-200 ${outerTab === "keanggotaan" ? "bg-[#C4A46E] shadow-sm" : "bg-transparent"}`}
        >
          <p className={`font-['Outfit',sans-serif] font-semibold text-[14px] whitespace-nowrap ${outerTab === "keanggotaan" ? "text-[#1A1613]" : "text-[#707070]"}`}>
            Keanggotaan
          </p>
        </button>
        <button
          onClick={() => setOuterTab("pesanLangsung")}
          className={`flex-1 h-[40px] flex items-center justify-center rounded-[8px] border-none cursor-pointer transition-all duration-200 ${outerTab === "pesanLangsung" ? "bg-[#C4A46E] shadow-sm" : "bg-transparent"}`}
        >
          <p className={`font-['Outfit',sans-serif] font-semibold text-[14px] whitespace-nowrap ${outerTab === "pesanLangsung" ? "text-[#1A1613]" : "text-[#707070]"}`}>
            Pesan Langsung
          </p>
        </button>
      </div>

      {outerTab === "keanggotaan" && <KeanggotaanCard onNavigate={() => navigateWithLoading("/purchase")} />}
      {outerTab === "pesanLangsung" && <PesanLangsungCard />}
    </div>
  );
}

/* ── Section: Manifesto ─── */
function SectionManifesto() {
  const { navigateWithLoading } = usePageTransition();
  return (
    <div
      className="w-full px-[20px] py-[36px]"
      style={{ background: "linear-gradient(to bottom, #ffffff, #f1eee3)" }}
    >
      <div className="flex flex-col gap-[16px] items-center w-full">
        {/* (–) icon */}
        <img src={imgManifestoIcon} alt="" className="w-[47px] h-[48px] object-contain" />

        {/* Title */}
        <p className="font-['Lora',serif] font-bold text-[#1f1f1f] text-[22px] leading-[1.4] text-center w-full">
          Manifesto <span className="text-[#1f1f1f]">Pulang</span>
        </p>

        {/* Body */}
        <div className="flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[14px] leading-[1.55] text-center w-full">
            Seperti simbol (-) pada papan nisan di antara tahun lahir dan wafat, hidup sejatinya sangat singkat.
          </p>
          <p className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[14px] leading-[1.55] text-center w-full">
            Dan menyiapkan kepulangan adalah cara sederhana menyadari kesementaraan hidup.
          </p>
          <p className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[14px] leading-[1.55] text-center w-full">
            <span className="font-bold text-[#af9160]">Pulang</span>
            {" hadir untuk melayani dan memuliakan perjalanan terakhir manusia."}
          </p>
        </div>

        {/* CTA link */}
        <button
          onClick={() => navigateWithLoading("/manifesto")}
          className="bg-transparent border-none cursor-pointer p-0 font-['Outfit',sans-serif] font-bold text-[#af9160] text-[14px] leading-[1.55] underline decoration-solid text-center"
        >
          Baca selengkapnya manifesto Pulang
        </button>
      </div>
    </div>
  );
}

/* ── Section: Siapa yang bisa kamu daftarkan? ─── */
function SectionCtaCards() {
  const { navigateWithLoading } = usePageTransition();

  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full">
      <div className="flex flex-col gap-[24px] items-start px-[20px] py-[36px] w-full">
        <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
          <p className="font-['Lora',serif] font-bold leading-[1.4] text-[#1f1f1f] text-[22px] w-full">
            Siapa yang bisa kamu daftarkan?
          </p>
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#707070] text-[13px] w-full">
            Rencanakan untuk dirimu sendiri, atau siapkan untuk keluarga yang kamu sayangi.
          </p>
        </div>

        <div className="bg-white flex flex-col gap-[16px] items-start justify-center overflow-clip px-[16px] py-[20px] relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(51,38,20,0.08)] shrink-0 w-full">
          <div className="flex gap-[16px] items-center shrink-0 w-full">
            <div className="bg-[#f4eee5] rounded-[14px] shrink-0 size-[48px]">
              <img src={daftarDiriSendiri} alt="Daftar Diri Sendiri" className="w-full h-full object-contain" />
            </div>
            <p className="font-['Lora',serif] font-bold leading-[1.4] text-[#1f1f1f] text-[15px] whitespace-nowrap">
              Diri Sendiri
            </p>
          </div>
          <div className="flex flex-col gap-[14px] items-start w-full">
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.48] text-[#707070] text-[12px] w-full">
              Siapkan kepulangan yang layak untukmu, dan pastikan kepergianmu kelak tidak merepotkan keluargamu.
            </p>
            <button
              onClick={() => navigateWithLoading("/purchase", { state: { target: "self" } })}
              className="bg-[#AF9160] flex items-center justify-center overflow-clip px-[16px] py-[12px] rounded-[8px] shrink-0 w-full border-none cursor-pointer"
            >
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[13px] text-white whitespace-nowrap">
                Daftarkan diri sendiri
              </p>
            </button>
          </div>
        </div>

        <div className="bg-white flex flex-col gap-[16px] items-start justify-center overflow-clip px-[16px] py-[20px] relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(51,38,20,0.08)] shrink-0 w-full">
          <div className="flex gap-[16px] items-center shrink-0 w-full">
            <div className="bg-[#f4eee5] rounded-[14px] shrink-0 size-[48px]">
              <img src={daftarKeluarga} alt="Daftar Keluarga" className="w-full h-full object-contain" />
            </div>
            <p className="font-['Lora',serif] font-bold leading-[1.4] text-[#1f1f1f] text-[15px] whitespace-nowrap">
              Keluargamu
            </p>
          </div>
          <div className="flex flex-col gap-[14px] items-start w-full">
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.48] text-[#707070] text-[12px] w-full">
              Muliakan orang tua atau pasanganmu dengan prosesi kepulangan  yang bermartabat, tanpa merepotkan keluarga.
            </p>
            <button
              onClick={() => navigateWithLoading("/purchase", { state: { target: "family" } })}
              className="bg-[#876747] flex items-center justify-center overflow-clip px-[16px] py-[12px] rounded-[12px] shrink-0 w-full border-none cursor-pointer"
            >
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[13px] text-white whitespace-nowrap">
                Daftarkan keluarga jadi anggota
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Social Impact Section ─── */
function SectionSocialImpact() {
  return (
    <div
      id="section-impact"
      // Perhatikan tambahan border-b dan border-[rgba(255,255,255,0.08)] di sini
      className="bg-[#1a140f] flex flex-col relative shrink-0 w-full overflow-hidden px-[20px] py-[40px] border-b border-[rgba(255,255,255,0.08)]"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          className="w-full h-full object-cover pointer-events-none"
          src={imgImage9}
        />
        {/* Gradient Overlay agar teks tetap terbaca dan ujung bawah menyatu mulus */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,20,15,0.3)] via-[rgba(26,20,15,0.85)] to-[#1a140f]" />
      </div>

      {/* Content Container (z-10 agar berada di atas background) */}
      <div className="relative z-10 flex flex-col items-start gap-[16px] w-full">
        {/* Badge */}
        <div className="bg-[#BDA67A] flex items-center justify-center px-[14px] py-[6px] rounded-[100px]">
          <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#1a140f] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
            DAMPAK SOSIAL
          </p>
        </div>

        {/* Heading */}
        <p className="font-['Lora',serif] font-bold leading-[1.3] text-[22px] text-white w-full">
          Kamu ikut beramal untuk bantu yang tak berpunya
        </p>

        {/* Description */}
        <p className="font-['Outfit',sans-serif] font-normal text-[15px] leading-[1.6] text-[rgba(255,255,255,0.7)] w-full">
          <span>Sebagian uang pendaftaranmu akan </span>
          <span className="font-semibold text-[#D5C9AA]">
            didonasikan untuk memberikan layanan pemakaman gratis bagi yang tak mampu.
          </span>
        </p>
      </div>
    </div>
  );
}

/* ── Main Landing Page ─── */
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [desktopTab, setDesktopTab] = useState("islam");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCta(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" }
    );
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const { navigateWithLoading } = usePageTransition();

  return (
    <div className="min-h-screen bg-white">
      {/* ── Desktop ── */}
      <div className="hidden md:flex flex-col min-h-screen bg-white">
        <DesktopPurchaseNavbar activePath="/" />

        {/* ── Hero ── */}
        <section className="flex items-center gap-[60px] pl-[80px] xl:pl-[120px] pr-[60px] xl:pr-[120px] py-[80px] xl:py-[100px] w-full" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,1) 0%, rgba(249,247,243,1) 100%)" }}>
          <div className="flex flex-col gap-[24px] items-start flex-1 min-w-0">
            <p className="font-['Lora',serif] font-bold text-[48px] leading-[1.4] text-[#1f1f1f] w-full">
              Menemanimu Menyiapkan{" "}
              <span className="text-[#af9160]">Kepulangan</span>
            </p>
            <p className="font-['Outfit',sans-serif] text-[16px] leading-[1.55] text-[#707070] w-full">
              <span className="font-bold text-[#555]">PULANG</span>
              {" memberi layanan lengkap mulai dari hari kematian hingga pasca pemakaman."}
            </p>
            <button
              onClick={() => navigateWithLoading("/purchase")}
              className="bg-[#1f1912] w-full rounded-[12px] h-[52px] border-none cursor-pointer font-['Outfit',sans-serif] font-semibold text-[16px] text-white shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)]"
            >
              Daftar jadi anggota
            </button>
            <div className="flex flex-col gap-[4px] items-center w-full">
              <p className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[12px] text-center">
                Belum jadi anggota dan butuh layanan cepat?
              </p>
              <a href="tel:+6281234567890" className="font-['Outfit',sans-serif] font-semibold text-[#750d33] text-[14px] text-center no-underline" style={{ textDecorationLine: "underline" }}>
                Pesan layanan langsung 24 jam
              </a>
            </div>
          </div>
          <div className="shrink-0 w-[50%] max-w-[720px] bg-[rgba(218,190,144,0.15)] rounded-[20px] overflow-hidden">
            <div className="w-full aspect-[720/394] relative">
              <img src={imgHero} alt="Ilustrasi Kepulangan" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(38,26,13,0.18)]" />
            </div>
          </div>
        </section>

        {/* ── Tipe Layanan ── */}
        <section className="bg-white flex flex-col gap-[60px] items-start px-[80px] xl:px-[120px] py-[80px] w-full">
          <div className="flex flex-col gap-[12px] items-center w-full">
            <div className="bg-[rgba(175,145,96,0.12)] px-[12px] py-[4px] rounded-[100px]">
              <p className="font-['Outfit',sans-serif] font-semibold text-[#af9160] text-[14px] tracking-[1.2px] whitespace-nowrap">TIPE LAYANAN</p>
            </div>
            <p className="font-['Lora',serif] font-bold text-[#1f1f1f] text-[48px] leading-[1.4] text-center">
              Tenang berpulang dengan<br />dua pilihan layanan
            </p>
            <p className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[16px] text-center">
              Siapkan semua sejak jauh hari, atau dapatkan layanan langsung di hari kematian.
            </p>
          </div>

          <div className="flex gap-[24px] items-start w-full">
            <div className="bg-[#1f1912] border-4 border-[#bda67a] rounded-[20px] flex flex-col gap-[14px] p-[32px] w-[55%] xl:w-[640px] shrink-0">
              <p className="font-['Lora',serif] font-bold text-white text-[24px] leading-[normal]">Layanan Keanggotaan</p>
              <p className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.6)] text-[14px] leading-[1.55]">Cocok untuk yang ingin mempersiapkan kepulangan sejak jauh hari.</p>
              <div className="bg-[rgba(255,255,255,0.1)] h-px w-full" />
              <div className="flex flex-col gap-[4px]">
                <p className="font-['Outfit',sans-serif] font-semibold text-[#d8be90] text-[11px]">Iuran tahunan</p>
                <p className="font-['Lora',serif] font-bold text-[#e2d0a8] text-[34px] leading-[normal]">Rp200.000</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] h-px w-full" />
              <div className="flex flex-col gap-[10px]">
                {["Layanan Hari Kematian", "Asisten Kepulangan", "Layanan Pasca Kematian", "Uang kedukaan Rp 1.000.000", "Asisten administrasi (BPJS, akta, dll)"].map((item, i) => (
                  <div key={i} className="flex gap-[10px] items-center">
                    <img src={imgCheckCircle} alt="" className="shrink-0 size-[18px] brightness-0 invert" />
                    <p className={`font-['Outfit',sans-serif] text-[13px] text-white leading-[normal] ${i === 2 ? "font-semibold" : "font-normal"}`}>{item}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => navigateWithLoading("/purchase")} className="bg-[#af9160] rounded-[10px] w-full h-[51px] border-none cursor-pointer font-['Outfit',sans-serif] font-semibold text-[15px] text-white">
                Daftar jadi anggota
              </button>
              <p className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.35)] text-[11px]">{`*Aktif 3 bulan setelah daftar  ·  **Maks. usia 80 tahun`}</p>
            </div>

            <div className="bg-[#f4f2ed] rounded-[20px] flex flex-col gap-[14px] p-[32px] flex-1 min-w-0">
              <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[22px] leading-[normal]">Pesan Langsung</p>
              <p className="font-['Outfit',sans-serif] font-normal text-[#5f5e5a] text-[14px] leading-[1.55]">Untuk situasi mendesak — tim Pulang siap dalam 24 jam.</p>
              <div className="bg-[rgba(31,25,18,0.1)] h-px w-full" />
              <div className="flex flex-col gap-[4px]">
                <p className="font-['Outfit',sans-serif] font-semibold text-[#876747] text-[11px]">Mulai dari</p>
                <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[34px] leading-[normal]">Rp X.XXX.XXX</p>
              </div>
              <div className="bg-[rgba(31,25,18,0.1)] h-px w-full" />
              <div className="flex flex-col gap-[10px]">
                {[
                  { text: "Layanan Hari Kematian", included: true },
                  { text: "Asisten Kepulangan", included: true },
                  { text: "Layanan Pasca Kematian", included: false },
                  { text: "Uang kedukaan", included: false },
                  { text: "Asisten administrasi", included: false },
                ].map((item, i) => (
                  <div key={i} className="flex gap-[10px] items-center">
                    {item.included ? (
                      <img src={imgCheckCircle} alt="" className="shrink-0 size-[18px]" />
                    ) : (
                      <div className="shrink-0 size-[18px] rounded-full border-2 border-[rgba(136,135,128,0.4)] bg-[rgba(136,135,128,0.1)]" />
                    )}
                    <p className={`font-['Outfit',sans-serif] font-normal text-[13px] leading-[normal] ${item.included ? "text-[#1f1912]" : "line-through text-[rgba(136,135,128,0.7)]"}`}>{item.text}</p>
                  </div>
                ))}
              </div>
              <button className="bg-[#1f1912] rounded-[10px] w-full h-[51px] border-none cursor-pointer font-['Outfit',sans-serif] font-semibold text-[15px] text-white">
                Pesan layanan langsung
              </button>
              <p className="font-['Outfit',sans-serif] font-normal text-[rgba(31,25,18,0.35)] text-[11px]">{`*Tersedia 24 jam  ·  **Tanpa batasan usia`}</p>
            </div>
          </div>

          <button
            onClick={() => document.getElementById("desktop-agama-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="flex gap-[8px] items-center justify-center w-full bg-transparent border-none cursor-pointer p-0"
          >
            <p className="font-['Outfit',sans-serif] font-medium text-[#1f1912] text-[16px] underline text-center">
              Lihat detail layanan lengkap per agama
            </p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8l5 5 5-5" stroke="#1f1912" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="bg-[rgba(31,25,18,0.2)] h-px w-full" />

          <div id="desktop-agama-tabs" className="flex gap-[12px] w-full">
            {RELIGION_DATA.map((r) => (
              <button
                key={r.id}
                onClick={() => setDesktopTab(r.id)}
                className={`flex-1 px-[18px] py-[10px] rounded-[8px] border-none cursor-pointer font-['Outfit',sans-serif] text-[16px] leading-[normal] transition-colors ${desktopTab === r.id ? "bg-[#1f1912] text-white font-semibold" : "bg-[#f4f2ed] text-[#5f5e5a] font-normal"}`}
              >
                {r.name}
              </button>
            ))}
          </div>

          {(() => {
            const religion = RELIGION_DATA.find(r => r.id === desktopTab) ?? RELIGION_DATA[0];
            const half = Math.ceil(religion.hariKematian.length / 2);
            const hkLeft = religion.hariKematian.slice(0, half);
            const hkRight = religion.hariKematian.slice(half);
            return (
              <div className="bg-[#1f1912] rounded-[20px] flex w-full overflow-hidden">
                <div className="flex flex-col gap-[20px] flex-1 px-[40px] py-[32px]">
                  <div className="flex gap-[12px] items-center">
                    <p className="font-['Outfit',sans-serif] font-bold text-white text-[14px] tracking-[0.6px]">HARI KEMATIAN</p>
                    <div className="bg-[rgba(100,180,112,0.15)] px-[10px] py-[4px] rounded-[6px]">
                      <p className="font-['Outfit',sans-serif] font-semibold text-[#64b4a0] text-[12px] whitespace-nowrap">Untuk anggota &amp; non-anggota</p>
                    </div>
                  </div>
                  <div className="flex gap-[40px]">
                    <div className="flex flex-col gap-[10px] flex-1">
                      {hkLeft.map((item, i) => (
                        <div key={i} className="flex gap-[10px] items-start">
                          <img src={imgCheckCircle} alt="" className="shrink-0 size-[18px] mt-[1px] brightness-0 invert opacity-85" />
                          <p className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.85)] text-[13px] leading-[20px]">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-[10px] flex-1">
                      {hkRight.map((item, i) => (
                        <div key={i} className="flex gap-[10px] items-start">
                          <img src={imgCheckCircle} alt="" className="shrink-0 size-[18px] mt-[1px] brightness-0 invert opacity-85" />
                          <p className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.85)] text-[13px] leading-[20px]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[rgba(254,242,248,0.1)] px-[14px] py-[10px] rounded-[8px]">
                    <p className="font-['Outfit',sans-serif] font-normal text-[rgba(254,204,230,0.8)] text-[14px]">{religion.note}</p>
                  </div>
                </div>

                <div className="w-px self-stretch bg-[rgba(255,255,255,0.08)]" />

                <div className="flex flex-col gap-[20px] flex-1 bg-[#1a140f] px-[40px] py-[32px]">
                  <div className="flex gap-[12px] items-center">
                    <p className="font-['Outfit',sans-serif] font-bold text-white text-[14px] tracking-[0.6px]">PASCA KEMATIAN</p>
                    <div className="bg-[rgba(175,145,96,0.2)] px-[10px] py-[4px] rounded-[6px]">
                      <p className="font-['Outfit',sans-serif] font-semibold text-[#d8be90] text-[12px] whitespace-nowrap">Hanya untuk anggota</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(100,180,160,0.2)] px-[14px] py-[10px] rounded-[8px]">
                    <p className="font-['Outfit',sans-serif] font-normal text-[#c8ebe1] text-[14px]">
                      Uang kedukaan <span className="font-bold">Rp1.000.000</span> untuk keluarga
                    </p>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    {religion.pascaKematian.map((item, i) => (
                      <div key={i} className="flex gap-[10px] items-start">
                        <img src={imgCheckCircle} alt="" className="shrink-0 size-[18px] mt-[1px] brightness-0 invert opacity-85" />
                        <div className="flex flex-col gap-[8px] flex-1 min-w-0">
                          <p className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.85)] text-[13px] leading-[20px]">{item.main}</p>
                          {item.subs && (
                            <ul className="list-disc pl-[20px] flex flex-col gap-[2px]">
                              {item.subs.map((sub, j) => (
                                <li key={j} className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.85)] text-[13px] leading-[20px]">{sub}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* ── CTA Cards ── */}
        <section className="bg-[#f9f7f3] flex flex-col gap-[40px] items-center px-[80px] xl:px-[120px] py-[80px] w-full">
          <div className="flex flex-col gap-[12px] items-center text-center w-full">
            <p className="font-['Lora',serif] font-bold text-[#1f1f1f] text-[48px] leading-[1.4]">Siapa yang bisa kamu daftarkan?</p>
            <p className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[16px] leading-[1.5]">Rencanakan untuk dirimu sendiri, atau siapkan untuk keluarga yang kamu sayangi.</p>
          </div>
          <div className="flex gap-[24px] w-full max-w-[960px]">
            <div className="bg-white flex flex-col gap-[16px] items-start p-[24px] rounded-[16px] flex-1">
              <div className="flex gap-[16px] items-center">
                <div className="shrink-0 size-[56px] overflow-hidden">
                  <img src={daftarDiriSendiri} alt="" className="w-full h-full object-contain" />
                </div>
                <p className="font-['Lora',serif] font-bold text-[#1f1f1f] text-[18px]">Diri Sendiri</p>
              </div>
              <p className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[14px] leading-[1.48] flex-1">Siapkan kepulangan yang layak untukmu, dan pastikan kepergianmu kelak tidak merepotkan keluargamu.</p>
              <button onClick={() => navigateWithLoading("/purchase", { state: { target: "self" } })} className="bg-[#af9160] w-full rounded-[8px] px-[16px] py-[14px] border-none cursor-pointer font-['Outfit',sans-serif] font-semibold text-[14px] text-white">
                Daftarkan diri sendiri
              </button>
            </div>
            <div className="bg-white flex flex-col gap-[16px] items-start p-[24px] rounded-[16px] flex-1">
              <div className="flex gap-[16px] items-center">
                <div className="shrink-0 size-[56px] overflow-hidden">
                  <img src={daftarKeluarga} alt="" className="w-full h-full object-contain" />
                </div>
                <p className="font-['Lora',serif] font-bold text-[#1f1f1f] text-[18px]">Keluargamu</p>
              </div>
              <p className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[14px] leading-[1.48] flex-1">Muliakan orang tua atau pasanganmu dengan prosesi kepulangan yang bermartabat, tanpa merepotkan keluarga.</p>
              <button onClick={() => navigateWithLoading("/purchase", { state: { target: "family" } })} className="bg-[#876747] w-full rounded-[8px] px-[16px] py-[14px] border-none cursor-pointer font-['Outfit',sans-serif] font-semibold text-[14px] text-white">
                Daftarkan keluarga jadi anggota
              </button>
            </div>
          </div>
        </section>

        {/* ── Dampak Sosial ── */}
        <section className="bg-[#1a140f] flex w-full" style={{ minHeight: "480px" }}>
          <div className="flex flex-col gap-[20px] justify-center pl-[80px] xl:pl-[120px] pr-[60px] py-[80px] w-[600px] shrink-0">
            <div className="bg-[#bda67a] px-[12px] py-[5px] rounded-[100px] self-start">
              <p className="font-['Outfit',sans-serif] font-semibold text-[#1a140f] text-[10px] tracking-[1px] whitespace-nowrap">DAMPAK SOSIAL</p>
            </div>
            <p className="font-['Lora',serif] font-bold text-white text-[36px] leading-[1.45]">Kamu ikut beramal untuk bantu yang tak berpunya</p>
            <p className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.6)] text-[16px] leading-[1.55]">
              Sebagian uang pendaftaranmu akan{" "}
              <span className="font-bold">didonasikan untuk memberikan layanan pemakaman gratis bagi yang tak mampu.</span>
            </p>
          </div>
          <div className="flex-1 min-w-0 relative overflow-hidden">
            <img src={imgImage9} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a140f] via-transparent to-transparent" />
          </div>
        </section>

        {/* ── Manifesto ── */}
        <section className="flex gap-[60px] items-center px-[80px] xl:px-[120px] py-[80px] w-full" style={{ background: "linear-gradient(to bottom, #ffffff, #f1eee3)" }}>
          <div className="flex-1 min-w-0">
            <div className="w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: "320/243", background: "linear-gradient(to right, #d1bfa3, #ad9475)" }}>
              <img src={imgManifestoIllus} alt="Manifesto Pulang" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-[20px] items-start flex-1 min-w-0">
            <img src={imgManifestoIcon} alt="" className="w-[63px] h-[64px] object-contain" />
            <p className="font-['Lora',serif] font-bold text-[48px] leading-[1.4]">
              <span className="text-[#1f1f1f]">Manifesto </span>
              <span className="text-[#af9160]">Pulang</span>
            </p>
            <p className="font-['Outfit',sans-serif] font-normal text-[#1f1f1f] text-[16px] leading-[1.55]">Seperti simbol (-) pada papan nisan di antara tahun lahir dan wafat, hidup sejatinya sangat singkat.</p>
            <p className="font-['Outfit',sans-serif] font-normal text-[#1f1f1f] text-[16px] leading-[1.55]">Dan menyiapkan kepulangan adalah cara sederhana menyadari kesementaraan hidup.</p>
            <p className="font-['Outfit',sans-serif] font-normal text-[#1f1f1f] text-[16px] leading-[1.55]">Pulang hadir untuk melayani dan memuliakan perjalanan terakhir manusia.</p>
            <button onClick={() => navigateWithLoading("/manifesto")} className="bg-transparent border-none cursor-pointer p-0 font-['Outfit',sans-serif] font-bold text-[#bda67a] text-[18px] underline">
              Baca selengkapnya manifesto Pulang
            </button>
          </div>
        </section>

        <DesktopFooter />
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden min-h-screen bg-[#fefefe] flex justify-center">
        <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
          <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

          <main className="flex flex-col w-full pb-[160px]">
            <SectionHero ctaRef={ctaRef} />
            <SectionPricing />
            <SectionCtaCards />
            <SectionSocialImpact />
            <SectionManifesto />
            <Footer />
          </main>

          <StickyBottomCtaBar visible={showStickyCta} />
        </div>
      </div>
    </div>
  );
}