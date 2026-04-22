import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { usePageTransition } from "./page-transition";
import { ArrowLeft } from "lucide-react";
import imgDark1 from "../../assets/logo.png";
import { MobileMenu, Footer } from "./shared-layout";
import { StepSlideWrapper } from "./step-slide-wrapper";

/* ── Colored bullet item ─── */
function BulletItem({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex gap-[10px] items-start w-full">
      <div className="shrink-0 mt-[7px] size-[5px] rounded-full" style={{ backgroundColor: color }} />
      <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#3a2c1a] text-[13px]">
        {text}
      </p>
    </div>
  );
}

/* ── Chip ─── */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-[100px] bg-[rgba(31,25,18,0.04)]">
      <div className="flex items-center gap-[4px] px-[10px] py-[4px] rounded-[inherit]">
        <p className="font-['Outfit',sans-serif] font-medium leading-[normal] text-[11px] text-[rgba(31,25,18,0.6)] whitespace-nowrap">
          {children}
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(31,25,18,0.1)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

/* ── Items data ─── */
const muslimHariKematian = [
  "Pemandian jenazah",
  "Pengkafanan sesuai syariat",
  "Kain kafan lengkap, sabun & kamper",
  "Kembang 7 rupa & air mawar",
  "Papan nisan dan papan kayu penutup",
  "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
  "Ambulans jenazah",
  "Penggantian biaya jasa penggalian makam",
  "Karangan bunga",
  "Snack box 50 pak",
];

const nonMuslimHariKematian = [
  "Pemandian jenazah",
  "Tata rias jenazah",
  "Pemberian formalin",
  "Peti jenazah",
  "Kain penutup peti, sarung tangan & kaos kaki",
  "Lembar duka, wewangian & lilin duka",
  "Bunga salib atau bunga meja",
  "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
  "Ambulans jenazah",
  "Penggantian biaya jasa penggalian makam",
  "Karangan bunga",
  "Snack box 50 pak",
];

const muslimPasca = [
  "Asisten khusus untuk administrasi keluarga",
  "Akta kematian dari Disdukcapil",
  "Surat keterangan kepolisian",
  "Penghentian BPJS",
  "Buku Yasin 50 pcs (khusus Muslim)",
  "Layanan konseling psikolog",
];

const nonMuslimPasca = [
  "Asisten khusus untuk administrasi keluarga",
  "Akta kematian dari Disdukcapil",
  "Surat keterangan kepolisian",
  "Penghentian BPJS",
  "Layanan konseling psikolog",
];

/* ── Main Purchase Layanan Page ─── */
export default function PurchaseLayananPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateWithLoading } = usePageTransition();
  const location = useLocation();
  const currentStep = 1;

  const onboardData = (location.state as {
    target?: string;
    age?: string;
    ceremony?: string;
    domicile?: string;
  } | null) ?? (() => {
    try {
      const stored = sessionStorage.getItem("pulang_onboard");
      return stored ? JSON.parse(stored) : null;
    } catch { return null; }
  })();

  const isFamily = onboardData?.target === "family";
  const isMuslim = onboardData?.ceremony !== "non-muslim";
  const dotColor = isMuslim ? "#94C7B5" : "#9EB5DB";
  const hariKematianItems = isMuslim ? muslimHariKematian : nonMuslimHariKematian;
  const pascaItems = isMuslim ? muslimPasca : nonMuslimPasca;

  const headingLabel = isFamily ? "Layanan untuk keluargamu" : "Layanan untukmu";
  const ceremonyChipLabel = isMuslim ? "☪️ Prosesi Muslim" : "✝️ Prosesi Non Muslim";
  const footnoteExclusions = isMuslim
    ? "*Tidak termasuk pencarian lahan makam dan rumah duka."
    : "*Tidak termasuk rumah duka, pencarian lahan makam, dekorasi rumah duka, kremasi dan larung.";

  const steps = [
    { number: 1, label: "Detail Layanan" },
    { number: 2, label: "Isi Data Diri" },
    { number: 3, label: "Konfirmasi Pembayaran" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fefefe] flex justify-center">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">

        {/* Header */}
        <div className="bg-white flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6] sticky top-0 z-50">
          <div className="h-[45px] relative shrink-0 w-[90px]">
            <img
              alt="Pulang by Kitabisa"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgDark1}
            />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-transparent border-none cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <rect width="20" height="2" rx="1" fill="#1f1912" />
              <rect y="7" width="14" height="2" rx="1" fill="#1f1912" />
              <rect y="14" width="20" height="2" rx="1" fill="#1f1912" />
            </svg>
          </button>
        </div>
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Stepper Navigation */}
        <div
          className="flex gap-[8px] items-center p-[16px] w-full overflow-x-auto border-b border-[#e5e7eb] bg-white"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((step, idx) => (
            <div key={step.number} className="flex items-center gap-[8px] shrink-0">
              {idx > 0 && <div className="bg-[#d9d9d9] h-[2px] shrink-0 w-[24px]" />}
              <div className="flex gap-[10px] items-center shrink-0">
                {step.number === currentStep ? (
                  <div className="flex items-center justify-center rounded-full shrink-0 size-[32px] bg-[#1f1f1f]">
                    <p className="font-['Inter',sans-serif] font-medium leading-[1.25] text-[12px] text-white">
                      {step.number}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center rounded-full shrink-0 size-[32px] border border-[#6b7280]">
                    <p className="font-['Inter',sans-serif] font-medium leading-[1.25] text-[12px] text-[#6b7280]">
                      {step.number}
                    </p>
                  </div>
                )}
                <p className={`font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] whitespace-nowrap ${
                  step.number === currentStep ? "text-[#4b5563]" : "text-[#6b7280]"
                }`}>
                  {step.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="overflow-x-hidden flex-1 flex flex-col">
          <StepSlideWrapper>
            <main className="flex flex-col flex-1 w-full bg-white relative">

              {/* Decorative gradient bg */}
              {/* <div className="absolute left-0 top-0 w-full h-[421px] pointer-events-none">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 421">
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_layanan" x1="180" x2="180" y1="0" y2="421">
                      <stop stopColor="#F9F7F3" />
                      <stop offset="1" stopColor="#F9F7F3" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <rect width="360" height="421" fill="url(#paint0_linear_layanan)" />
                </svg>
              </div> */}

              {/* Content */}
              <div className="relative flex flex-col gap-[32px] items-center px-[20px] py-[40px] w-full">

                {/* Heading */}
                <div className="flex flex-col gap-[10px] items-start w-full">
                  <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1f1f] text-[22px]">
                    {headingLabel}
                  </p>
                  <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[rgba(31,25,18,0.6)] text-[13px] w-full">
                    Harga sudah termasuk semua layanan lengkap, dari hari kematian hingga pasca pemakaman.
                  </p>
                </div>

                {/* Plan Card */}
                <div className="bg-white relative rounded-[20px] w-full shadow-[0px_8px_24px_0px_rgba(26,18,10,0.08)] border border-[#e7dfd1]">
                  <div className="flex flex-col gap-[16px] items-start px-[20px] pt-[22px] pb-[24px] w-full">

                    {/* Chips */}
                    <div className="flex gap-[8px] items-center flex-wrap">
                      {isFamily && <Chip>👨‍👩‍👧 Untuk Keluarga</Chip>}
                      <Chip>{ceremonyChipLabel}</Chip>
                    </div>

                    {/* Title */}
                    <p className="font-['Lora',serif] font-bold leading-[1.2] text-[#1f1912] text-[22px] w-full">
                      Layanan Keanggotaan
                    </p>

                    {/* Price */}
                    <div className="flex flex-col gap-[4px] items-start w-full">
                      <p className="font-['Outfit',sans-serif] font-normal leading-[normal] text-[rgba(31,25,18,0.5)] text-[12px] tracking-[0.2px]">
                        Bayar tahunan
                      </p>
                      <div className="flex gap-[6px] items-end leading-[normal]">
                        <p className="font-['Lora',serif] font-bold text-[#5c3e1e] text-[34px]">Rp200.000</p>
                        <p className="font-['Outfit',sans-serif] font-normal text-[rgba(31,25,18,0.4)] text-[13px] pb-[6px]">/ tahun</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="bg-[rgba(200,191,175,0.4)] h-px w-full" />

                    {/* Section label */}
                    <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#1f1912] text-[15px]">
                      Layanan yang kamu dapatkan
                    </p>

                    {/* Hari Kematian card */}
                    <div className="relative rounded-[14px] w-full bg-[rgba(175,145,96,0.05)]">
                      <div className="flex flex-col gap-[12px] items-start p-[14px] w-full">
                        <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#8a6e3e] text-[13px]">
                          Di hari kematian
                        </p>
                        <div className="flex flex-col gap-[8px] items-start w-full">
                          {hariKematianItems.map((item) => (
                            <BulletItem key={item} text={item} color={dotColor} />
                          ))}
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                    </div>

                    {/* Pasca Pemakaman card */}
                    <div className="relative rounded-[14px] w-full bg-[rgba(175,145,96,0.05)]">
                      <div className="flex flex-col gap-[12px] items-start p-[14px] w-full">
                        <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#8a6e3e] text-[13px]">
                          Pasca pemakaman
                        </p>

                        {/* Uang kedukaan banner */}
                        <div className="relative rounded-[10px] w-full bg-[rgba(100,180,160,0.12)]">
                          <div className="flex items-center gap-[8px] px-[12px] py-[8px] w-full">
                            <div className="bg-[#5aa894] flex items-center justify-center rounded-full size-[18px] shrink-0">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <p className="font-['Outfit',sans-serif] font-normal leading-[1.4] text-[#1f1912] text-[12px] flex-1">
                              <span>Dapat uang kedukaan sebesar </span>
                              <span className="font-['Outfit',sans-serif] font-bold">Rp1.000.000</span>
                            </p>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[rgba(100,180,160,0.35)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                        </div>

                        <div className="flex flex-col gap-[8px] items-start w-full">
                          {pascaItems.map((item) => (
                            <BulletItem key={item} text={item} color="#8a6e3e" />
                          ))}
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                    </div>

                    {/* Divider */}
                    <div className="bg-[rgba(200,191,175,0.4)] h-px w-full" />

                    {/* Footnotes */}
                    <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[11px] text-[rgba(58,44,26,0.7)] w-full">
                      {footnoteExclusions}
                    </p>
                    <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[11px] text-[rgba(58,44,26,0.7)] w-full">
                      **Semua layanan bisa diakses setelah melewati masa tunggu 6 bulan
                    </p>
                  </div>
                </div>

                {/* Lanjutkan Button */}
                <button
                  onClick={() =>
                    navigateWithLoading("/purchase/data-diri", {
                      state: { ...onboardData, billingCycle: "tahunan", slideDir: "forward" },
                    })
                  }
                  className="bg-[#1f1912] rounded-[12px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] w-full border-none cursor-pointer"
                >
                  <div className="flex items-center justify-center px-[20px] py-[14px] w-full">
                    <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[16px] text-white whitespace-nowrap">
                      Lanjutkan
                    </p>
                  </div>
                </button>

                {/* Sebelumnya */}
                <button
                  onClick={() => navigateWithLoading("/purchase")}
                  className="self-start flex gap-[14px] items-center bg-transparent border-none cursor-pointer p-0"
                >
                  <div className="bg-[rgba(189,166,122,0.15)] flex items-center p-[8px] rounded-[100px] shrink-0">
                    <ArrowLeft className="size-[16px] text-[#1F2A37]" />
                  </div>
                  <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] text-black whitespace-nowrap">
                    Sebelumnya
                  </p>
                </button>
              </div>
            </main>

            {/* Footer */}
            <Footer />
          </StepSlideWrapper>
        </div>
      </div>
    </div>
  );
}