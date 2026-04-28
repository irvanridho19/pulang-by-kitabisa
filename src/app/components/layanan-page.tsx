import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { NavbarMobileHeader, MobileMenu, Footer, SectionCtaAnggota } from "./shared-layout";

/* ── Badge ─── */
function Badge() {
  return (
    <div className="bg-[rgba(189,166,122,0.15)] relative rounded-[100px] shrink-0">
      <div className="flex items-start overflow-clip px-[10px] py-[4px] rounded-[inherit]">
        <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#967240] text-[10px] tracking-[1.2px] whitespace-nowrap">
          LAYANAN ANGGOTA
        </p>
      </div>
      <div className="absolute border border-[rgba(189,166,122,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

/* ── Heading ─── */
function LayananHeading() {
  return (
    <div className="flex flex-col gap-[8px] items-start overflow-clip shrink-0 w-full">
      <Badge />
      <p className="font-['Lora',serif] font-bold leading-[1.4] text-[#1f1912] text-[22px] w-full">
        Manfaat yang kamu dapatkan sebagai anggota
      </p>
      <p className="font-['Outfit',sans-serif] font-normal leading-[1.55] text-[#6b6b6b] text-[13px] w-full">
        {"Di hari kematian hingga selepas pemakaman, "}
        <span className="font-['Outfit',sans-serif] font-bold">Pulang</span>
        {" hadir langsung membantumu dan keluarga."}
      </p>
    </div>
  );
}

/* ── Bullet Helpers ─── */
function BulletDot({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[4px] mt-[7px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 4 4">
        <circle cx="2" cy="2" fill={color} r="2" />
      </svg>
    </div>
  );
}

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

/* ── Shared Data (Sama dengan Homepage) ─── */
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

  // Theme styling logic
  const headerBgColor = isDark ? "bg-[#25201b]" : "bg-[#f3eee5]"; // Light mode expanded bg
  const borderColor = isDark ? "border-[rgba(255,255,255,0.06)]" : "border-[#e8e2d9]";
  const titleColor = isDark ? "text-white" : "text-[#1f1912]";
  const sectionTitleColor = isDark ? "text-white" : "text-[#876747]";
  const textColor = isDark ? "text-white" : "text-[#6b6b6b]";
  const fillColor = isDark ? "#ffffff" : "#876747";
  const chevronColor = isDark ? "text-white" : "text-[#876747]";
  const dividerClass = isDark ? "bg-[rgba(255,255,255,0.08)]" : "bg-[#e8e2d9]";

  // Box styles
  const noteBoxStyle = isDark
    ? "border-[rgba(255,180,200,0.3)] bg-[rgba(255,255,255,0.04)] text-[#e8b5c4]"
    : "border-[#f4aeba] bg-[#fdf2f5] text-[#902b4d]";

  const pascaBoxStyle = isDark
    ? "border-[#4c7a6b] bg-[rgba(100,180,160,0.1)] text-[#c8ebe1]"
    : "border-[#70b39b] bg-[#eef8f4] text-[#1c6b50]";

  // Auto-scroll effect
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
    <div ref={accordionRef} className={`flex flex-col w-full border-b ${borderColor} last:border-0`}>
      <button
        onClick={onToggle}
        className={`flex items-center justify-between w-full py-[18px] px-[16px] cursor-pointer border-none transition-colors duration-300 ${isOpen ? headerBgColor : 'bg-transparent'}`}
      >
        <div className="flex items-center gap-[12px]">
          {/* Warna dot khusus dimatikan jika light theme, biarkan null atau biarkan custom */}
          {isDark ? (
            <div className="shrink-0 size-[12px] rounded-full shadow-sm" style={{ backgroundColor: data.dotColor }} />
          ) : null}
          <p className={`font-['Outfit',sans-serif] font-bold text-[16px] tracking-[0.2px] ${titleColor}`}>
            {data.name}
          </p>
        </div>
        <ChevronIcon className={chevronColor} isOpen={isOpen} />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className={`flex flex-col gap-[16px] px-[16px] pb-[20px] pt-[4px] ${headerBgColor}`}>

            {/* HARI KEMATIAN */}
            <div className="flex flex-col gap-[12px] w-full">
              <p className={`font-['Outfit',sans-serif] font-bold text-[12px] tracking-[1px] uppercase ${sectionTitleColor}`}>
                HARI KEMATIAN
              </p>
              <div className="flex flex-col gap-[8px]">
                {data.hariKematian.map((item, idx) => (
                  <div key={idx} className="flex gap-[10px] items-start w-full">
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
            <div className={`w-full h-px shrink-0 ${dividerClass}`} />

            {/* PASCA KEMATIAN */}
            <div className="flex flex-col gap-[12px] w-full">
              <p className={`font-['Outfit',sans-serif] font-bold text-[12px] tracking-[1px] uppercase ${sectionTitleColor}`}>
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

          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ─── */
export default function LayananPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string>("islam"); // Default Expanded
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#fefefe] flex justify-center">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
        <NavbarMobileHeader
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col w-full">
          <div className="bg-white shrink-0 w-full">
            <div className="flex flex-col items-center justify-center overflow-clip size-full">
              <div className="flex flex-col gap-[24px] items-center justify-center px-[20px] py-[36px] w-full">

                <LayananHeading />

                {/* Accordion Container (Light Theme) */}
                <div className="border border-[#e8e2d9] rounded-[16px] overflow-hidden bg-[#faf8f5] w-full mt-[8px]">
                  {RELIGION_DATA.map((religion) => (
                    <ReligionAccordion
                      key={religion.id}
                      data={religion}
                      isOpen={activeAccordion === religion.id}
                      onToggle={() => setActiveAccordion(activeAccordion === religion.id ? "" : religion.id)}
                      theme="light" // Menjalankan style Light Mode
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

          <SectionCtaAnggota />
          <Footer />
        </main>
      </div>
    </div>
  );
}