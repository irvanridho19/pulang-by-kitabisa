import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { usePageTransition } from "./page-transition";
// import { Check } from "lucide-react";
import svgNav from "../../imports/svg-avs0z7lyx4";
// import imgIconCareManager from "@/assets/care-manager-icon.png";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { StepSlideWrapper } from "./step-slide-wrapper";
import { XenditBanner } from "./xendit-banner";

/* ── Types ─── */
type PurchaseState = {
  target?: string;
  age?: string;
  ceremony?: string;
  domicile?: string;
  billingCycle?: "bulanan" | "tahunan";
  dob?: string;
  namaLengkap?: string;
  whatsapp?: string;
  namaKontakDarurat?: string;
  hubunganDarurat?: string;
  waKontakDarurat?: string;
  namaKeluarga?: string;
  hubunganKeluarga?: string;
  waKeluarga?: string;
  namaPengelola?: string;
  waPengelola?: string;
};

/* ── Stepper Data ─── */
const steps = [
  { number: 1, label: "Pilih Tipe Layanan" },
  { number: 2, label: "Isi Data Diri" },
  { number: 3, label: "Konfirmasi Pembayaran" },
];

/* ── Donation presets ─── */
const donationPresets = [2000, 5000, 10000, 15000];

function formatRupiah(n: number): string {
  return "Rp" + n.toLocaleString("id-ID");
}

/* ── Age calculator from dob "DD/MM/YYYY" ─── */
function calculateAge(dob: string): string {
  if (!dob || dob.length < 8) return "–";
  const parts = dob.split("/");
  if (parts.length !== 3) return "–";
  const [dd, mm, yyyy] = parts.map(Number);
  if (!dd || !mm || !yyyy || yyyy < 1900) return "–";
  const birth = new Date(yyyy, mm - 1, dd);
  const today = new Date();
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return `${years} Tahun, ${months} Bulan, ${days} Hari`;
}

/* ── Section divider ─── */
function SectionDivider() {
  return <div className="bg-[#e8e2d6] h-[1px] rounded-full w-full" />;
}

function SectionHeading({ text }: { text: string }) {
  return (
    <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#3a3a3a] text-[15px] w-full">
      {text}
    </p>
  );
}

/* ── Info Row ─── */
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-[12px] items-start w-full">
      <p className="font-['Outfit',sans-serif] font-medium leading-[1.6] text-[#9ca3af] text-[13px] w-[120px] shrink-0">
        {label}
      </p>
      <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#3a3a3a] text-[13px] min-w-0 break-words">
        {value || "–"}
      </p>
    </div>
  );
}

/* ── Toggle Switch ─── */
function ToggleSwitch({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative shrink-0 w-[44px] h-[24px] rounded-[40px] border-none cursor-pointer transition-colors duration-200 ${
        on ? "bg-[#bda67a]" : "bg-[#e3ddd3]"
      }`}
    >
      <div
        className={`absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-sm transition-all duration-200 ${
          on ? "left-[22px]" : "left-[2px]"
        }`}
      />
    </button>
  );
}

/* ── Main Page ─── */
export default function PurchaseKonfirmasiPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateWithLoading } = usePageTransition();
  const location = useLocation();
  const currentStep = 3;

  const data: PurchaseState =
    (location.state as PurchaseState | null) ??
    (() => {
      try {
        const stored = sessionStorage.getItem("pulang_purchase");
        return stored ? JSON.parse(stored) : {};
      } catch {
        return {};
      }
    })();

  const isFamily = data.target === "family";

  const billingCycle = data.billingCycle ?? "bulanan";
  const isTahunan = billingCycle === "tahunan";
  const subtotal = isTahunan ? 300000 : 25000;
  const frekuensiLabel = isTahunan ? "Tahunan" : "Bulanan";
  const pembayaranLabel = isTahunan ? "Tahunan" : "Bulanan";

  const [donationOn, setDonationOn] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const [customDonation, setCustomDonation] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const donationContentRef = useRef<HTMLDivElement>(null);
  const [donationHeight, setDonationHeight] = useState(0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    if (donationContentRef.current) {
      setDonationHeight(donationContentRef.current.scrollHeight);
    }
  }, [donationOn, selectedPreset, customDonation]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!donationOn) {
      setDonationAmount(0);
      setSelectedPreset(null);
      setCustomDonation("");
    }
  }, [donationOn]);

  const handlePresetClick = (amount: number) => {
    setSelectedPreset(amount);
    setCustomDonation(amount.toString());
    setDonationAmount(amount);
  };

  const handleCustomDonation = (val: string) => {
    const num = val.replace(/\D/g, "");
    setCustomDonation(num);
    setSelectedPreset(null);
    setDonationAmount(num ? parseInt(num, 10) : 0);
  };

  const total = subtotal + (donationOn ? donationAmount : 0);

  const ceremonyLabel =
    data.ceremony === "muslim"
      ? "Prosesi Muslim"
      : data.ceremony === "non-muslim"
      ? "Prosesi Non-Muslim / Tradisi Lainnya"
      : "–";

  const recipientName = isFamily ? data.namaKeluarga : data.namaLengkap;
  const recipientWa = isFamily ? data.waKeluarga : data.whatsapp;

  return (
    <div className="min-h-screen bg-[#fefefe] flex justify-center">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Stepper Navigation */}
        <div
          className="flex gap-[8px] items-center p-[16px] w-full overflow-x-auto border-b border-[#e8e2d6]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((step, idx) => (
            <div key={step.number} className="flex items-center gap-[8px] shrink-0">
              {idx > 0 && <div className="bg-[#e3ddd3] h-[2px] shrink-0 w-[24px]" />}
              <div className="flex gap-[10px] items-center shrink-0">
                {step.number < currentStep ? (
                  <div className="flex items-center justify-center rounded-full shrink-0 size-[32px] bg-[#bda67a]">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : step.number === currentStep ? (
                  <div className="flex items-center justify-center rounded-full shrink-0 size-[32px] bg-[#1f1912]">
                    <p className="font-['Inter',sans-serif] font-medium leading-[1.25] text-[12px] text-white">
                      {step.number}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center rounded-full shrink-0 size-[32px] border border-[#c9bfa8]">
                    <p className="font-['Inter',sans-serif] font-medium leading-[1.25] text-[12px] text-[#9ca3af]">
                      {step.number}
                    </p>
                  </div>
                )}
                <p
                  className={`font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] whitespace-nowrap ${
                    step.number === currentStep ? "text-[#3a3a3a]" : "text-[#9ca3af]"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="overflow-x-hidden flex-1 flex flex-col">
          <StepSlideWrapper>
            <main className="flex flex-col flex-1 w-full relative">


              <div className="relative flex flex-col gap-[28px] items-start px-[20px] py-[36px] w-full">

                {/* Heading */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[22px]">
                    Satu langkah lagi, persiapanmu selesai
                  </p>
                  <p className="font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#6b6050] text-[13px] w-full">
                    Cek kembali detail di bawah ini. Pastikan semua data benar.
                  </p>
                </div>

                {/* ── Ringkasan Layanan ── */}
                <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
                  <div className="flex flex-col gap-[16px] items-start p-[20px] w-full">
                    <SectionHeading text="Ringkasan Layanan" />
                    <InfoRow label="Pembayaran" value={pembayaranLabel} />
                    <InfoRow label="Prosesi Kepulangan" value={ceremonyLabel} />
                  </div>
                </div>

                {/* ── Detail Penerima ── */}
                <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
                  <div className="flex flex-col gap-[16px] items-start p-[20px] w-full">
                    <SectionHeading text="Detail Penerima Layanan" />
                    <InfoRow label="Nama Lengkap" value={recipientName || "–"} />
                    <InfoRow label="Nomor WhatsApp" value={recipientWa || "–"} />
                    <InfoRow label="Tanggal Lahir" value={data.dob || "–"} />
                    <InfoRow label="Umur" value={data.dob ? calculateAge(data.dob) : "–"} />
                  </div>
                </div>

                {/* ── Kontak Darurat / Pengelola ── */}
                <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
                  <div className="flex flex-col gap-[16px] items-start p-[20px] w-full">
                    {isFamily ? (
                      <>
                        <SectionHeading text="Pengelola Akun" />
                        <InfoRow label="Nama Lengkap" value={data.namaPengelola || "–"} />
                        <InfoRow label="Hubungan" value={data.hubunganKeluarga || "–"} />
                        <InfoRow label="Nomor WhatsApp" value={data.waPengelola || "–"} />
                      </>
                    ) : (
                      <>
                        <SectionHeading text="Kontak Darurat" />
                        <InfoRow label="Nama Kontak" value={data.namaKontakDarurat || "–"} />
                        <InfoRow label="Hubungan" value={data.hubunganDarurat || "–"} />
                        <InfoRow label="Nomor WhatsApp" value={data.waKontakDarurat || "–"} />
                      </>
                    )}
                  </div>
                </div>

                <SectionDivider />

                {/* ── Donasi Tambahan Toggle ── */}
                <div className="flex flex-col gap-[0px] items-start overflow-clip w-full">
                  <div className="flex gap-[16px] items-center w-full">
                    <ToggleSwitch on={donationOn} onToggle={() => setDonationOn(!donationOn)} />
                    <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                      <p className="font-['Outfit',sans-serif] font-semibold leading-[1.4] text-[#1f1912] text-[16px]">
                        🤲 Donasi Tambahan
                      </p>
                      <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#9ca3af] text-[12px] w-full">
                        Bantu lebih banyak keluarga yang membutuhkan.
                      </p>
                    </div>
                  </div>

                  {/* Expandable donation content */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out w-full"
                    style={{ maxHeight: donationOn ? donationHeight + 24 : 0 }}
                  >
                    <div
                      ref={donationContentRef}
                      className="flex flex-col gap-[12px] items-start pt-[20px] w-full"
                    >
                      <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#3a3a3a] text-[14px] w-full">
                        Masukkan nominal donasi
                      </p>

                      <div className="grid grid-cols-2 gap-[8px] w-full">
                        {donationPresets.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => handlePresetClick(amount)}
                            className={`w-full rounded-[10px] px-[12px] py-[11px] cursor-pointer transition-all duration-200 font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] border ${
                              selectedPreset === amount
                                ? "bg-[#bda67a] text-white border-[#bda67a] shadow-[0px_2px_8px_rgba(189,166,122,0.35)]"
                                : "bg-white text-[#3a3a3a] border-[#e3ddd3] hover:border-[#bda67a]"
                            }`}
                          >
                            {formatRupiah(amount)}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center w-full bg-[#faf8f4] rounded-[10px] border border-[#e3ddd3] transition-all duration-200 focus-within:bg-white focus-within:border-[#bda67a]">
                        <span className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[#9ca3af] pl-[16px] select-none shrink-0">
                          Rp
                        </span>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={customDonation}
                          onChange={(e) => handleCustomDonation(e.target.value)}
                          placeholder="Nominal lainnya"
                          className="w-full bg-transparent border-none outline-none px-[8px] py-[12px] font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[#1f1f1f] placeholder-[#9ca3af]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <SectionDivider />

                {/* ── Rincian Biaya ── */}
                <div className="flex flex-col gap-[16px] items-start w-full">
                  <SectionHeading text="Rincian Biaya" />
                  <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
                    <div className="flex flex-col items-start p-[20px] w-full gap-[14px]">

                      <div className="flex items-center justify-between w-full">
                        <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[14px]">
                          Subtotal Layanan
                        </p>
                        <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#3a3a3a] text-[14px]">
                          {formatRupiah(subtotal)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between w-full">
                        <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[14px]">
                          Frekuensi
                        </p>
                        <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#3a3a3a] text-[14px]">
                          {frekuensiLabel}
                        </p>
                      </div>

                      <div className="flex items-center justify-between w-full">
                        <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[14px]">
                          Donasi Tambahan
                        </p>
                        <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#3a3a3a] text-[14px]">
                          {donationOn && donationAmount > 0 ? formatRupiah(donationAmount) : "Rp0"}
                        </p>
                      </div>

                      <div className="bg-[#e8e2d6] h-px w-full" />

                      <div className="flex items-center justify-between w-full">
                        <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#1f1912] text-[15px]">
                          Total Pembayaran
                        </p>
                        <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#bda67a] text-[18px]">
                          {formatRupiah(total)}
                        </p>
                      </div>

                      <div className="bg-white rounded-[10px] border border-[#e8e2d6] w-full">
                        <div className="flex gap-[10px] items-start px-[14px] py-[12px] w-full">
                          <span className="text-[14px] shrink-0 mt-[1px]">✅</span>
                          <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#9ca3af] text-[12px]">
                            Harga sudah mencakup donasi untuk pemulasaran warga yang membutuhkan, seperti tunawisma.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <SectionDivider />

                {/* ── Checkbox Persetujuan ── */}
                <div className="flex gap-[14px] items-start w-full">
                  <button
                    type="button"
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                    className={`shrink-0 mt-[2px] w-[22px] h-[22px] rounded-[4px] border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      agreedToTerms
                        ? "border-[#1f1912] bg-[#1f1912]"
                        : "border-[#9ca3af] bg-white"
                    }`}
                  >
                    {agreedToTerms && (
                      <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.5L4 6.5L10 1" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                  <div className="flex flex-col gap-[6px] flex-1 min-w-0">
                    <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#1f1912] text-[14px]">
                      Dengan ini, saya setuju untuk mendaftar layanan Pulang.
                    </p>
                    <p className="font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#6b7280] text-[13px]">
                      Dengan mendaftar, sebagian biaya layanan akan disalurkan sebagai santunan kepada keluarga, donasi sosial, dan perlindungan asuransi jiwa bagi pendaftar.
                    </p>
                  </div>
                </div>

                {/* ── Xendit Payment Card ── */}
                <XenditBanner />

                {/* ── CTA: Selesaikan Pendaftaran ── */}
                <button
                  disabled={!agreedToTerms}
                  onClick={() =>
                    navigateWithLoading("/purchase/success", {
                      state: { ...data, total, slideDir: "forward" },
                    })
                  }
                  className={`w-full h-[52px] rounded-[100px] border-none cursor-pointer transition-all duration-200 ${
                    agreedToTerms
                      ? "bg-[#1f1912] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] cursor-pointer"
                      : "bg-[#d1d5db] cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center justify-center w-full h-full px-[24px]">
                    <p className="font-['Outfit',sans-serif] font-medium leading-[normal] text-[16px] text-white whitespace-nowrap">
                      Selesaikan Pendaftaran
                    </p>
                  </div>
                </button>

                {/* Sebelumnya */}
                <button
                  onClick={() => navigateWithLoading("/purchase/data-diri", { state: { ...data, slideDir: "back" } })}
                  className="flex gap-[12px] items-center bg-transparent border-none cursor-pointer p-0"
                >
                  <div className="bg-[rgba(189,166,122,0.15)] flex items-center justify-center p-[9px] rounded-[100px] shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                        <path d={svgNav.p2b09b180} fill="#3a3a3a" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] text-[#3a3a3a] whitespace-nowrap">
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