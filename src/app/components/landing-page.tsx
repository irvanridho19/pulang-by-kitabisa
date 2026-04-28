import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import imgImageProblemsBackground from "../../assets/problems-background.png";
import imgVector from "../../assets/Section/Vector.svg";
import imgImage9 from "../../assets/Section/bg_dampak.png";
import imgHero from "../../assets/Hero/hero.svg";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { usePageTransition } from "./page-transition";

/* ── Sticky CTA ─── */
function StickyBottomCtaBar({ visible }: { visible: boolean }) {
  const { navigateWithLoading } = usePageTransition();
  const phoneLink = "tel:+6281234567890";

  return (
    <div
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 transition-all duration-300 ease-in-out ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="bg-[#f9f7f3] flex flex-col items-start overflow-clip pb-[16px] pt-[12px] px-[16px] rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_-4px_20px_0px_rgba(89,70,53,0.12)] w-full">
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

/* ── Problems / Misi Section ─── */
function SectionProblems() {
  const { navigateWithLoading } = usePageTransition();

  return (
    <div className="relative shrink-0 w-full overflow-hidden bg-[#1a1613]">
      <img alt="" src={imgImageProblemsBackground} className="absolute inset-0 size-full object-cover pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.75) 60%, rgba(20,16,12,0.92) 100%)" }}
      />
      <img src={imgVector} alt="" className="absolute top-[24px] right-[24px] w-[80px] h-auto pointer-events-none opacity-80" />

      <div className="relative z-10 flex flex-col gap-[22px] items-start px-[24px] py-[44px] w-full">
        <p className="font-['Lora',serif] font-bold text-white text-[18px] leading-[1.28] w-full">
          <span className="text-[22px] font-bold">Manifesto</span> <span className="text-[22px] font-bold text-[#AF9160]">Pulang</span>
        </p>
        <div className="flex flex-col gap-[14px] w-full">
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[14px] text-[rgba(255,255,255,0.82)] w-full">
            Seperti simbol (-) pada papan nisan di antara tahun lahir dan wafat, hidup sejatinya sangat singkat.
          </p>
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[14px] text-[rgba(255,255,255,0.82)] w-full">
            Dan menyiapkan kepulangan adalah cara sederhana menyadari kesementaraan hidup.
          </p>
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[14px] text-[rgba(255,255,255,0.82)] w-full">
            <span className="text-[#AF9160] font-bold">Pulang</span> hadir untuk melayani dan memuliakan perjalanan terakhir manusia.
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigateWithLoading("/manifesto")}
          className="justify-center flex items-center mt-[4px] cursor-pointer transition-colors hover:bg-[rgba(189,166,122,0.22)] bg-transparent border-none p-0"
        >
          <p className="font-['Outfit',sans-serif] font-semibold text-[#d5bf92] text-[14px] whitespace-nowrap underline decoration-solid">
            Baca selengkapnya manifesto Pulang
          </p>
        </button>
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
    note: "Tidak termasuk pencarian lahan makam dan rumah duka.",
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
    note: "Tidak termasuk pencarian lahan makam, rumah duka, dekorasi rumah duka.",
    pascaKematian: commonPascaItems
  },
  {
    id: "katolik",
    name: "Katolik",
    dotColor: "#A084D4",
    hariKematian: [
      "Peti jenazah",
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
    note: "Tidak termasuk pencarian lahan makam, rumah duka, dekorasi rumah duka.",
    pascaKematian: commonPascaItems
  },
  {
    id: "hindu",
    name: "Hindu",
    dotColor: "#E88C5D",
    hariKematian: [
      "Peti jenazah",
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
    note: "Tidak termasuk pencarian lahan makam, rumah duka, dekorasi rumah duka, kremasi atau larung.",
    pascaKematian: commonPascaItems
  },
  {
    id: "buddha",
    name: "Buddha",
    dotColor: "#66B68D",
    hariKematian: [
      "Peti jenazah",
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
    note: "Tidak termasuk pencarian lahan makam, rumah duka, dekorasi rumah duka, kremasi atau larung.",
    pascaKematian: commonPascaItems
  },
  {
    id: "konghucu",
    name: "Konghucu",
    dotColor: "#D65E7A",
    hariKematian: [
      "Peti jenazah",
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
    note: "Tidak termasuk pencarian lahan makam, rumah duka, dekorasi rumah duka, kremasi atau larung.",
    pascaKematian: commonPascaItems
  }
];


/* ── Accordion Component ─── */
function ReligionAccordion({
  data,
  isOpen,
  onToggle,
  theme
}: {
  data: typeof RELIGION_DATA[0],
  isOpen: boolean,
  onToggle: () => void,
  theme: "dark" | "light"
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
                    {/* Item Utama (Round Bullet) */}
                    <div className="flex gap-[10px] items-start w-full">
                      {/* Menggunakan fillColor (HEX) */}
                      <BulletDot color={fillColor} />
                      <p className={`flex-1 font-['Outfit',sans-serif] font-normal leading-[1.5] text-[13px] ${textColor}`}>
                        {item.main}
                      </p>
                    </div>
                    {/* Sub-Items (Square Hyphen) */}
                    {item.subs && (
                      <div className="flex flex-col gap-[6px] pl-[14px]">
                        {item.subs.map((sub, sIdx) => (
                          <div key={sIdx} className="flex gap-[10px] items-start w-full">
                            {/* Menggunakan fillColor (HEX) */}
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
              Iuran tahunan
            </p>
            <div className="flex gap-[6px] items-end leading-[normal] overflow-clip whitespace-nowrap">
              <p className="font-['Lora',serif] font-bold text-[#D5C9AA] text-[36px] tracking-[-0.5px]">Rp200.000</p>
              <p className="font-['Outfit',sans-serif] font-normal text-[15px] text-[rgba(255,255,255,0.4)] pb-[6px]">/ tahun</p>
            </div>
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
              *Semua layanan bisa diakses 3 bulan sejak terdaftar sebagai anggota aktif
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

      <div className="flex flex-col items-start leading-[normal] overflow-clip shrink-0 w-full whitespace-nowrap mt-[4px]">
        <div className="flex gap-[6px] items-end overflow-clip">
          <p className="font-['Lora',serif] font-bold text-[#594635] text-[36px] tracking-[-0.5px]">Rp15.000.000</p>
          <p className="font-['Outfit',sans-serif] font-normal text-[#9e9e9e] text-[15px] pb-[6px]">/ layanan</p>
        </div>
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
            <div className="bg-[#f4eee5] rounded-[14px] shrink-0 size-[48px]" />
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
            <div className="bg-[#f4eee5] rounded-[14px] shrink-0 size-[48px]" />
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

  return (
    <div className="min-h-screen bg-[#fefefe] flex justify-center">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col w-full pb-[160px]">
          <SectionHero ctaRef={ctaRef} />
          <SectionProblems />
          <SectionPricing />
          <SectionCtaCards />
          <SectionSocialImpact />
          <Footer />
        </main>

        <StickyBottomCtaBar visible={showStickyCta} />
      </div>
    </div>
  );
}