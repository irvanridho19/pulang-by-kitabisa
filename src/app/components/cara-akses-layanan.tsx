import { useState, useEffect } from "react";
import { NavbarMobileHeader, MobileMenu, Footer, SectionCtaAnggota } from "./shared-layout";

/* ── Step Card ─── */
function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[20px] relative w-full">
          {/* Step Number */}
          <div className="bg-[#1a1a1a] relative rounded-[22px] shrink-0 size-[44px]">
            <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
              <p className="font-['Outfit',sans-serif] font-bold leading-[normal] text-[18px] text-white whitespace-nowrap">{number}</p>
            </div>
            <div className="absolute border-[3px] border-[#f0e8db] border-solid inset-[-3px] pointer-events-none rounded-[25px]" />
          </div>
          {/* Text Content */}
          <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0 overflow-clip">
            <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#1a1a1a] text-[16px] w-full">{title}</p>
            <p className="font-['Outfit',sans-serif] font-normal leading-[19px] text-[#8c8c8c] text-[13px] w-full">{description}</p>
          </div>
        </div>
      </div>
      <div className="absolute border-[#e5e0d9] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

/* ── Step data ─── */
const stepsAnggota = [
  {
    number: 1,
    title: "Hubungi Call Center Pulang",
    description: "Informasikan nama, nomor anggota, dan alamat anggota yang tutup usia.",
  },
  {
    number: 2,
    title: "Tim Pulang mengecek data",
    description: "Pengecekan cepat ini memastikan layanan yang kamu dapatkan sesuai kebutuhan",
  },
  {
    number: 3,
    title: "Layanan diberikan",
    description: "Tim Pulang hadir untuk melayani keluarga di hari kepulangan dan pasca pemakaman.",
  }
];

const stepsDarurat = [
  {
    number: 1,
    title: "Klik ‘Pesan layanan langsung 24 jam’",
    description: "Informasikan nama dan alamat keluarga yang tutup usia.",
  },
  {
    number: 2,
    title: "Selesaikan pembayaran",
    description: "Kami mengecek datamu dan memastikan layanan yang kamu dapatkan sesuai kebutuhan",
  },
  {
    number: 3,
    title: "Layanan diberikan",
    description: "Tim Pulang hadir untuk melayani keluarga di hari kepulangan dan pasca pemakaman.",
  }
];

export default function CaraKlaimPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"anggota" | "darurat">("anggota");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = activeTab === "anggota" ? stepsAnggota : stepsDarurat;
  const heading =
    activeTab === "anggota"
      ? (<>Cara pesan layanan <span className="text-[#af9160]">Pulang</span> saat anggota meninggal dunia untuk anggota</>)
      : (<>Cara pesan layanan <span className="text-[#af9160]">Pulang</span> saat ada yang meninggal dunia (untuk non-anggota)</>);

  return (
    <div className="min-h-screen bg-[#fefefe] flex justify-center">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col w-full flex-1">
          {/* Content Section */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center overflow-clip size-full">
              <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[24px] py-[40px] relative w-full">
                {/* Decorative blurs */}
                <div className="absolute left-[-100px] size-[200px] top-[600px] pointer-events-none">
                  <div className="absolute inset-[-300%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 1400">
                      <g filter="url(#filter0_f_klaim_1)">
                        <circle cx="700" cy="700" fill="#AF9160" r="100" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1400" id="filter0_f_klaim_1" width="1400" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1" stdDeviation="300" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="absolute left-[260px] size-[200px] top-[550px] pointer-events-none">
                  <div className="absolute inset-[-300%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 1400">
                      <g filter="url(#filter0_f_klaim_2)">
                        <circle cx="700" cy="700" fill="#AF9160" r="100" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1400" id="filter0_f_klaim_2" width="1400" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1" stdDeviation="300" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Header */}
                <div className="flex flex-col gap-[14px] items-start w-full">
                  {/* Badge */}
                  <div className="bg-[rgba(175,145,96,0.12)] relative rounded-[100px] shrink-0">
                    <div className="flex items-start overflow-clip px-[12px] py-[5px] rounded-[inherit]">
                      <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#967240] text-[10px] tracking-[1.5px] whitespace-nowrap">
                        CARA AKSES LAYANAN
                      </p>
                    </div>
                    <div className="absolute border border-[rgba(175,145,96,0.45)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  </div>

                  {/* Tabs */}
                  <div className="relative flex h-[40px] items-stretch w-full">
                    {/* Bottom border across full width */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#e5e7eb] pointer-events-none" />

                    {/* Tab: Keanggotaan */}
                    <button
                      onClick={() => setActiveTab("anggota")}
                      className="flex items-center justify-center flex-1 bg-transparent border-none cursor-pointer p-0 relative"
                    >
                      <p className={`font-['Outfit',sans-serif] font-medium leading-[1.5] text-[15px] whitespace-nowrap ${activeTab === "anggota" ? "text-[#876747]" : "text-[#9ca3af]"}`}>
                        Keanggotaan
                      </p>
                      {activeTab === "anggota" && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#876747] z-10" />
                      )}
                    </button>

                    {/* Tab: Darurat */}
                    <button
                      onClick={() => setActiveTab("darurat")}
                      className="flex items-center justify-center flex-1 bg-transparent border-none cursor-pointer p-0 relative"
                    >
                      <p className={`font-['Outfit',sans-serif] font-medium leading-[1.5] text-[15px] whitespace-nowrap ${activeTab === "darurat" ? "text-[#876747]" : "text-[#9ca3af]"}`}>
                        Pesan Langsung
                      </p>
                      {activeTab === "darurat" && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#876747] z-10" />
                      )}
                    </button>
                  </div>

                  {/* Heading */}
                  <p className="font-['Lora',serif] font-bold leading-[1.4] text-[#1a1a1a] text-[24px] w-full">
                    {heading}
                  </p>
                </div>

                {/* Stepper */}
                <div className="flex flex-col gap-[16px] items-start relative w-full">
                  {/* Connector Line */}
                  <div className="absolute left-[42px] top-[20px] bottom-[20px] w-[2px] flex items-center justify-center pointer-events-none z-0">
                    <div className="bg-[#d1c2a8] h-full w-[2px] rounded-[2px]" />
                  </div>
                  {steps.map((step) => (
                    <div key={step.number} className="relative z-[1] w-full">
                      <StepCard number={step.number} title={step.title} description={step.description} />
                    </div>
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