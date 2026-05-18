import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { usePageTransition } from "./page-transition";
import { ArrowLeft } from "lucide-react";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { StepSlideWrapper } from "./step-slide-wrapper";
import { DesktopPurchaseNavbar, DesktopStepperBar } from "./purchase-desktop-shared";
import imgCheckCircle from "../../assets/check-circle.svg";
import imgLock from "../../assets/Purchase/Plan Card/Accordion/lock.svg";

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

/* ── Helper untuk sub-bullet Pasca Pemakaman ─── */
function PascaBulletItem({ item, color }: { item: PascaItemType; color: string }) {
  if (typeof item === "string") {
    return <BulletItem text={item} color={color} />;
  }
  return (
    <div className="flex flex-col gap-[4px] w-full">
      <BulletItem text={item.text} color={color} />
      <div className="flex flex-col gap-[4px] pl-[15px] w-full">
        {item.subItems.map((sub, idx) => (
          <div key={idx} className="flex gap-[6px] items-start w-full">
            <div className="text-[rgba(58,44,26,0.6)] mt-[1px] leading-[1.5] text-[13px]">-</div>
            <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.5] text-[13px] text-[rgba(58,44,26,0.6)]">
              {sub}
            </p>
          </div>
        ))}
      </div>
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
type PascaItemType = string | { text: string; subItems: string[] };

const adminPasca = {
  text: "Asisten khusus pengurusan administrasi keluarga:",
  subItems: ["Akta kematian dari Disdukcapil", "Surat keterangan kepolisian", "Penghentian BPJS"],
};

const hariKematianIslam = [
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
];

const hariKematianKristenKatolik = [
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
];

const hariKematianHinduBuddhaKonghucu = [
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
];

const pascaIslam: PascaItemType[] = [adminPasca, "Buku Yasin 50 pcs (opsional, jika butuh)", "Layanan konseling psikolog"];
const pascaNonIslam: PascaItemType[] = [adminPasca, "Layanan konseling psikolog"];

const RELIGION_CONFIG: Record<string, { chipLabel: string; dotColor: string; hariKematian: string[]; pasca: PascaItemType[]; note: string }> = {
  islam: { chipLabel: "☪️ Prosesi Islam", dotColor: "#C4A46E", hariKematian: hariKematianIslam, pasca: pascaIslam, note: "*Tidak termasuk lahan makam dan rumah duka." },
  kristen: { chipLabel: "✝️ Prosesi Kristen Protestan", dotColor: "#6CB4EE", hariKematian: hariKematianKristenKatolik, pasca: pascaNonIslam, note: "*Tidak termasuk lahan makam, rumah duka, dan dekorasi rumah duka." },
  katolik: { chipLabel: "✝️ Prosesi Katolik", dotColor: "#A084D4", hariKematian: hariKematianKristenKatolik, pasca: pascaNonIslam, note: "*Tidak termasuk lahan makam, rumah duka, dan dekorasi rumah duka." },
  hindu: { chipLabel: "🕉️ Prosesi Hindu", dotColor: "#E88C5D", hariKematian: hariKematianHinduBuddhaKonghucu, pasca: pascaNonIslam, note: "*Tidak termasuk lahan makam, rumah duka, dekorasi rumah duka, dan kremasi atau larung." },
  buddha: { chipLabel: "☸️ Prosesi Buddha", dotColor: "#66B68D", hariKematian: hariKematianHinduBuddhaKonghucu, pasca: pascaNonIslam, note: "*Tidak termasuk lahan makam, rumah duka, dekorasi rumah duka, dan kremasi atau larung." },
  konghucu: { chipLabel: "☯️ Prosesi Konghucu", dotColor: "#D65E7A", hariKematian: hariKematianHinduBuddhaKonghucu, pasca: pascaNonIslam, note: "*Tidak termasuk lahan makam, rumah duka, dekorasi rumah duka, dan kremasi atau larung." },
};

/* ── Voucher service map: included + excluded per ceremony ─── */
const voucherServiceMap: Record<string, { included: string[]; excluded: string[] }> = {
  islam: {
    included: [
      "Pemandian jenazah",
      "Pengkafanan sesuai syariat",
      "Kain kafan (sabun, kamper, dan parfum)",
      "Bunga & air mawar (opsional, jika butuh)",
      "Papan nisan dan papan kayu penutup makam",
      "Mobil jenazah elektrik (luas, nyaman, bebas emisi dan suara)",
    ],
    excluded: [
      "Informasi lahan makam",
      "Rumah duka",
      "Penggantian biaya jasa penggalian makam",
      "Snack box",
      "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
    ],
  },
  kristen: {
    included: [
      "Peti jenazah",
      "Tata rias jenazah",
      "Pemberian formalin",
      "Bunga salib atau bunga meja",
      "Mobil jenazah elektrik (luas, nyaman, bebas emisi dan suara)",
    ],
    excluded: [
      "Informasi lahan makam",
      "Rumah duka",
      "Dekorasi rumah duka",
      "Penggantian biaya jasa penggalian makam",
      "Snack box",
    ],
  },
  katolik: {
    included: [
      "Peti jenazah",
      "Tata rias jenazah",
      "Pemberian formalin",
      "Bunga salib atau bunga meja",
      "Mobil jenazah elektrik (luas, nyaman, bebas emisi dan suara)",
    ],
    excluded: [
      "Informasi lahan makam",
      "Rumah duka",
      "Dekorasi rumah duka",
      "Penggantian biaya jasa penggalian makam",
      "Snack box",
    ],
  },
  hindu: {
    included: [
      "Peti jenazah",
      "Tata rias jenazah",
      "Pemberian formalin",
      "Bunga meja",
      "Mobil jenazah elektrik (luas, nyaman, bebas emisi dan suara)",
    ],
    excluded: [
      "Informasi lahan makam",
      "Rumah duka",
      "Dekorasi rumah duka",
      "Kremasi atau larung",
      "Penggantian biaya jasa penggalian makam",
    ],
  },
  buddha: {
    included: [
      "Peti jenazah",
      "Tata rias jenazah",
      "Pemberian formalin",
      "Bunga meja",
      "Mobil jenazah elektrik (luas, nyaman, bebas emisi dan suara)",
    ],
    excluded: [
      "Informasi lahan makam",
      "Rumah duka",
      "Dekorasi rumah duka",
      "Kremasi atau larung",
      "Penggantian biaya jasa penggalian makam",
    ],
  },
  konghucu: {
    included: [
      "Peti jenazah",
      "Tata rias jenazah",
      "Pemberian formalin",
      "Bunga meja",
      "Mobil jenazah elektrik (luas, nyaman, bebas emisi dan suara)",
    ],
    excluded: [
      "Informasi lahan makam",
      "Rumah duka",
      "Dekorasi rumah duka",
      "Kremasi atau larung",
      "Penggantian biaya jasa penggalian makam",
    ],
  },
};

/* ── Voucher check item ─── */
function VoucherCheckItem({ text }: { text: string }) {
  return (
    <div className="flex gap-[8px] items-start w-full">
      <img src={imgCheckCircle} alt="" className="shrink-0 size-[18px] mt-[1px]" />
      <p className="flex-1 font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[13px] leading-[1.5]">{text}</p>
    </div>
  );
}

/* ── Voucher locked item ─── */
function VoucherLockedItem({ text }: { text: string }) {
  return (
    <div className="flex gap-[8px] items-start w-full">
      <img src={imgLock} alt="" className="shrink-0 size-[18px] mt-[1px] opacity-50" />
      <p className="flex-1 font-['Outfit',sans-serif] font-normal text-[#9ca3af] text-[13px] leading-[1.5]">{text}</p>
    </div>
  );
}

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
  const ceremonyKey = onboardData?.ceremony ?? "islam";
  const religion = RELIGION_CONFIG[ceremonyKey] ?? RELIGION_CONFIG["islam"];
  const { chipLabel: ceremonyChipLabel, dotColor, hariKematian: hariKematianItems, pasca: pascaItems, note: footnoteExclusions } = religion;

  const headingLabel = isFamily ? "Layanan untuk keluargamu" : "Layanan untukmu";

  const steps = [
    { number: 1, label: "Detail Layanan" },
    { number: 2, label: "Isi Data Diri" },
    { number: 3, label: "Konfirmasi Pembayaran" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fromVoucher = (onboardData as { fromVoucher?: boolean })?.fromVoucher ?? false;
  const voucherServices = voucherServiceMap[ceremonyKey] ?? voucherServiceMap["islam"];

  return (
    <div className="min-h-screen">

      {/* ══════════════════════════════════════
          DESKTOP  (hidden on mobile)
      ══════════════════════════════════════ */}
      <div className="hidden md:flex flex-col min-h-screen" style={{ background: "#F9F7F3" }}>
        <DesktopPurchaseNavbar />
        <DesktopStepperBar currentStep={1} />
        <div className="flex-1 flex justify-center items-start py-[48px] px-[20px]">
          <div className="w-full max-w-[480px] flex flex-col gap-[16px]">
            <p className="font-['Lora',serif] font-bold text-[#1f1f1f] text-[22px] leading-[1.3] m-0">
              {headingLabel}
            </p>

            {/* Service card */}
            <div
              className="bg-white rounded-[20px] border border-[#e7dfd1] flex flex-col gap-[16px] p-[20px]"
              style={{ boxShadow: "0px_8px_24px_0px_rgba(26,18,10,0.08)" }}
            >
              {/* Chips */}
              <div className="flex gap-[8px] flex-wrap">
                {isFamily ? <Chip>👨‍👩‍👧 Untuk Keluarga</Chip> : <Chip>🧑 Diri Sendiri</Chip>}
                <Chip>{ceremonyChipLabel}</Chip>
              </div>

              <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[22px] leading-[1.2] m-0">
                Layanan Keanggotaan
              </p>
              {fromVoucher ? (
                <p className="font-['Outfit',sans-serif] font-bold text-[#af9160] text-[20px] m-0">
                  GRATIS{" "}
                  <span className="font-['Outfit',sans-serif] font-normal text-[#af9160] text-[14px]">
                    untuk 1 tahun
                  </span>
                </p>
              ) : (
                <div className="flex flex-col gap-[4px] items-start">
                  <p className="font-['Outfit',sans-serif] font-normal text-[rgba(31,25,18,0.5)] text-[12px] tracking-[0.2px]">
                    Bayar tahunan
                  </p>
                  <div className="flex gap-[6px] items-end leading-[normal]">
                    <p className="font-['Lora',serif] font-bold text-[#5c3e1e] text-[28px]">Rp200.000</p>
                    <p className="font-['Outfit',sans-serif] font-normal text-[rgba(31,25,18,0.4)] text-[13px] pb-[4px]">/ tahun</p>
                  </div>
                </div>
              )}

              <div className="h-px bg-[rgba(200,191,175,0.4)] w-full" />

              <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[14px] m-0">
                Layanan yang kamu dapatkan
              </p>

              {fromVoucher ? (
                /* ── Voucher flow ── */
                <>
                  {/* Hari Kematian */}
                  <div className="flex flex-col gap-[10px]">
                    {/* <p className="font-['Outfit',sans-serif] font-semibold text-[#8a6e3e] text-[11px] tracking-[0.8px] m-0">
                      HARI KEMATIAN
                    </p> */}
                    <div className="relative rounded-[14px] bg-[rgba(175,145,96,0.05)] p-[14px] flex flex-col gap-[10px]">
                      {voucherServices.included.map((item, idx) => (
                        <VoucherCheckItem key={idx} text={item} />
                      ))}
                      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] inset-0 pointer-events-none rounded-[14px]" />
                    </div>
                  </div>
                  {/* Layanan tidak termasuk */}
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[14px] m-0">
                      Layanan tidak termasuk
                    </p>
                    <div className="relative rounded-[14px] bg-[rgba(175,145,96,0.03)] p-[14px] flex flex-col gap-[10px]">
                      {voucherServices.excluded.map((item, idx) => (
                        <VoucherLockedItem key={idx} text={item} />
                      ))}
                      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.12)] inset-0 pointer-events-none rounded-[14px]" />
                    </div>
                  </div>
                </>
              ) : (
                /* ── Regular flow: full list matching mobile ── */
                <>
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
                      <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#A80C45] text-[13px]">
                        {footnoteExclusions}
                      </p>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                  </div>

                  {/* Pasca Pemakaman card */}
                  <div className="relative rounded-[14px] w-full bg-[rgba(175,145,96,0.05)]">
                    <div className="flex flex-col gap-[12px] items-start p-[14px] w-full">
                      <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#8a6e3e] text-[13px]">
                        Pasca pemakaman
                      </p>
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
                        {pascaItems.map((item: PascaItemType, idx: number) => (
                          <PascaBulletItem key={idx} item={item} color="#8a6e3e" />
                        ))}
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                  </div>

                  <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[13px] text-[rgba(58,44,26,0.7)] w-full">
                    *Semua layanan bisa diakses 6 bulan sejak terdaftar sebagai anggota aktif
                  </p>
                </>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => navigateWithLoading("/purchase/data-diri", { state: { ...onboardData, billingCycle: "tahunan", slideDir: "forward" } })}
              className="w-full rounded-[12px] py-[16px] bg-[#1f1912] border-none cursor-pointer font-['Outfit',sans-serif] font-semibold text-[15px] text-white shadow-[0px_5px_16px_0px_rgba(26,18,10,0.2)]"
            >
              {fromVoucher ? "Lanjutkan dengan voucher" : "Lanjutkan"}
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE  (hidden on md+)
      ══════════════════════════════════════ */}
      <div className="md:hidden min-h-screen bg-[#fefefe] flex justify-center">
        <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">

          <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
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
                  <p className={`font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] whitespace-nowrap ${step.number === currentStep ? "text-[#4b5563]" : "text-[#6b7280]"
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
                        {isFamily ? (
                          <Chip>👨‍👩‍👧 Untuk Keluarga</Chip>
                        ) : (
                          <Chip>🧑 Diri Sendiri</Chip>
                        )}
                        <Chip>{ceremonyChipLabel}</Chip>
                      </div>

                      {/* Title */}
                      <p className="font-['Lora',serif] font-bold leading-[1.2] text-[#1f1912] text-[22px] w-full">
                        Layanan Keanggotaan
                      </p>

                      {/* Price */}
                      {fromVoucher ? (
                        <p className="font-['Outfit',sans-serif] font-bold text-[#af9160] text-[20px]">
                          GRATIS{" "}
                          <span className="font-['Outfit',sans-serif] font-normal text-[#af9160] text-[14px]">
                            untuk 1 tahun
                          </span>
                        </p>
                      ) : (
                        <div className="flex flex-col gap-[4px] items-start w-full">
                          <p className="font-['Outfit',sans-serif] font-normal leading-[normal] text-[rgba(31,25,18,0.5)] text-[12px] tracking-[0.2px]">
                            Bayar tahunan
                          </p>
                          <div className="flex gap-[6px] items-end leading-[normal]">
                            <p className="font-['Lora',serif] font-bold text-[#5c3e1e] text-[34px]">Rp200.000</p>
                            <p className="font-['Outfit',sans-serif] font-normal text-[rgba(31,25,18,0.4)] text-[13px] pb-[6px]">/ tahun</p>
                          </div>
                        </div>
                      )}

                      {/* Divider */}
                      <div className="bg-[rgba(200,191,175,0.4)] h-px w-full" />

                      {/* Section label */}
                      <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#1f1912] text-[15px]">
                        Layanan yang kamu dapatkan
                      </p>

                      {fromVoucher ? (
                        /* ── Voucher flow ── */
                        <>
                          {/* Hari Kematian */}
                          <div className="flex flex-col gap-[10px] w-full">
                            <p className="font-['Outfit',sans-serif] font-semibold text-[#8a6e3e] text-[11px] tracking-[0.8px]">
                              HARI KEMATIAN
                            </p>
                            <div className="relative rounded-[14px] w-full bg-[rgba(175,145,96,0.05)]">
                              <div className="flex flex-col gap-[10px] p-[14px] w-full">
                                {voucherServices.included.map((item, idx) => (
                                  <VoucherCheckItem key={idx} text={item} />
                                ))}
                              </div>
                              <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] inset-0 pointer-events-none rounded-[14px]" />
                            </div>
                          </div>
                          {/* Layanan tidak termasuk */}
                          <div className="flex flex-col gap-[10px] w-full">
                            <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[15px]">
                              Layanan tidak termasuk
                            </p>
                            <div className="relative rounded-[14px] w-full bg-[rgba(175,145,96,0.03)]">
                              <div className="flex flex-col gap-[10px] p-[14px] w-full">
                                {voucherServices.excluded.map((item, idx) => (
                                  <VoucherLockedItem key={idx} text={item} />
                                ))}
                              </div>
                              <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.12)] inset-0 pointer-events-none rounded-[14px]" />
                            </div>
                          </div>
                        </>
                      ) : (
                        /* ── Regular flow ── */
                        <>
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
                              <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#A80C45] text-[13px]">
                                {footnoteExclusions}
                              </p>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                          </div>

                          {/* Pasca Pemakaman card */}
                          <div className="relative rounded-[14px] w-full bg-[rgba(175,145,96,0.05)]">
                            <div className="flex flex-col gap-[12px] items-start p-[14px] w-full">
                              <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#8a6e3e] text-[13px]">
                                Pasca pemakaman
                              </p>
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
                                {pascaItems.map((item: PascaItemType, idx: number) => (
                                  <PascaBulletItem key={idx} item={item} color="#8a6e3e" />
                                ))}
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                          </div>

                          <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[13px] text-[rgba(58,44,26,0.7)] w-full">
                            *Semua layanan bisa diakses 6 bulan sejak terdaftar sebagai anggota aktif
                          </p>
                        </>
                      )}
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
                        {fromVoucher ? "Lanjutkan dengan voucher" : "Lanjutkan"}
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

    </div>
  );
}