import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { usePageTransition } from "./page-transition";
import { ArrowLeft } from "lucide-react";
import checkCircle from "../../assets/check-circle.svg";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { StepSlideWrapper } from "./step-slide-wrapper";
import { XenditBanner } from "./xendit-banner";
import { DesktopPurchaseNavbar, DesktopStepperBar } from "./purchase-desktop-shared";

/* ── Types ─── */
type PurchaseState = {
  target?: string;
  age?: string;
  ceremony?: string;
  domicile?: string;
  billingCycle?: "bulanan" | "tahunan";
  dob?: string;
  fromVoucher?: boolean;
  voucherCode?: string;
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
    <div className="flex justify-between gap-[16px] items-start w-full">
      <p className="font-['Outfit',sans-serif] font-medium leading-[1.6] text-[#9ca3af] text-[13px] shrink-0">
        {label}
      </p>
      <p className="font-['Outfit',sans-serif] font-medium leading-[1.6] text-[#3a3a3a] text-[13px] text-right break-words min-w-0">
        {value || "–"}
      </p>
    </div>
  );
}

/* ── Voucher Applied Card ─── */
function VoucherAppliedCard({ code }: { code: string }) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#3a3a3a] text-[15px] w-full">
        Kode Voucher
      </p>
      <div
        className="rounded-[14px] border border-[#c3e8d6] w-full flex items-center gap-[14px] px-[16px] py-[14px]"
        style={{ background: "rgba(195,232,214,0.18)" }}
      >
        <div className="shrink-0 size-[32px] rounded-full bg-[#2e9f60] flex items-center justify-center">
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
            <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-col gap-[2px] flex-1 min-w-0">
          <p className="font-['Outfit',sans-serif] font-bold leading-[1.4] text-[#1f8a55] text-[14px] tracking-[0.3px]">
            {code}
          </p>
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b7280] text-[13px]">
            Kode voucher berhasil digunakan
          </p>
        </div>
      </div>
    </div>
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
  const fromVoucher = data.fromVoucher ?? false;
  const voucherCode = data.voucherCode ?? "";

  const billingCycle = data.billingCycle ?? "bulanan";
  const isTahunan = billingCycle === "tahunan";
  const basePrice = isTahunan ? 200000 : 25000;
  const total = fromVoucher ? 0 : basePrice;
  const periodeLabel = isTahunan ? "Tahunan" : "Bulanan";
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CEREMONY_LABELS: Record<string, string> = {
    islam: "Islam", kristen: "Kristen Protestan", katolik: "Katolik",
    hindu: "Hindu", buddha: "Buddha", konghucu: "Konghucu",
  };
  const ceremonyLabel = CEREMONY_LABELS[data.ceremony ?? ""] ?? "–";

  const recipientName = isFamily ? data.namaKeluarga : data.namaLengkap;
  const recipientWa = isFamily ? data.waKeluarga : data.whatsapp;

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════
          DESKTOP  (hidden on mobile)
      ══════════════════════════════════════ */}
      <div className="hidden md:flex flex-col min-h-screen" style={{ background: "#F9F7F3" }}>
        <DesktopPurchaseNavbar />
        <DesktopStepperBar currentStep={3} />
        <div className="flex-1 flex justify-center items-start py-[48px] px-[20px]">
          <div
            className="w-full max-w-[480px] bg-white rounded-[16px] border border-[#e7dfd1] px-[32px] py-[32px] flex flex-col gap-[28px]"
            style={{ boxShadow: "0px 4px 20px 0px rgba(26,18,10,0.06)" }}
          >
            {/* Heading */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[22px]">
                Satu langkah lagi, persiapanmu selesai
              </p>
              <p className="font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#6b6050] text-[13px] w-full">
                Cek kembali detail di bawah ini. Pastikan semua data benar.
              </p>
            </div>

            {/* Ringkasan Layanan */}
            <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
              <div className="flex flex-col gap-[16px] items-start p-[20px] w-full">
                <SectionHeading text="Ringkasan Layanan" />
                <InfoRow label="Periode" value={periodeLabel} />
                <InfoRow label="Prosesi Kepulangan" value={ceremonyLabel} />
              </div>
            </div>

            {/* Detail Penerima */}
            <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
              <div className="flex flex-col gap-[16px] items-start p-[20px] w-full">
                <SectionHeading text="Detail Penerima Layanan" />
                {isFamily && (
                  <p className="font-['Outfit',sans-serif] font-normal text-[#9CA3AF] text-[12px] mt-[-10px]">
                    Anggota keluarga yang kamu daftarkan
                  </p>
                )}
                <InfoRow label="Nama Lengkap" value={recipientName || "–"} />
                <InfoRow label="Tanggal Lahir" value={data.dob || "–"} />
                <InfoRow label="Usia" value={data.dob ? calculateAge(data.dob) : "–"} />
                {isFamily && <InfoRow label="Hubungan Denganmu" value={data.hubunganKeluarga || "–"} />}
                <InfoRow label="Nomor WhatsApp" value={recipientWa || "–"} />
              </div>
            </div>

            {/* Kontak Darurat / Pengelola */}
            <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
              <div className="flex flex-col gap-[16px] items-start p-[20px] w-full">
                {isFamily ? (
                  <>
                    <SectionHeading text="Pengelola Akun" />
                    <p className="font-['Outfit',sans-serif] font-normal text-[#9CA3AF] text-[12px] mt-[-10px]">Data dirimu</p>
                    <InfoRow label="Nama Lengkap" value={data.namaPengelola || "–"} />
                    <InfoRow label="Nomor WhatsApp" value={data.waPengelola || "–"} />
                  </>
                ) : (
                  <>
                    <SectionHeading text="Kontak Darurat" />
                    <InfoRow label="Nama Kontak Darurat" value={data.namaKontakDarurat || "–"} />
                    <InfoRow label="Hubungan" value={data.hubunganDarurat || "–"} />
                    <InfoRow label="Nomor WhatsApp" value={data.waKontakDarurat || "–"} />
                  </>
                )}
              </div>
            </div>

            {/* Kode Voucher */}
            {fromVoucher && <VoucherAppliedCard code={voucherCode} />}

            {/* Rincian Biaya */}
            <div className="flex flex-col gap-[16px] items-start w-full">
              <SectionHeading text="Rincian Biaya" />
              <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
                <div className="flex flex-col items-start p-[20px] w-full gap-[14px]">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[14px]">Iuran Keanggotaan</p>
                    <p className={`font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] ${fromVoucher ? "line-through text-[#9ca3af]" : "text-[#3a3a3a]"}`}>
                      {formatRupiah(basePrice)}
                    </p>
                  </div>
                  {fromVoucher && (
                    <div className="flex items-center justify-between w-full">
                      <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#1f8a55] text-[14px]">Diskon Voucher</p>
                      <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#1f8a55] text-[14px]">-{formatRupiah(basePrice)}</p>
                    </div>
                  )}
                  <div className="flex items-center justify-between w-full">
                    <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[14px]">Periode</p>
                    <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#3a3a3a] text-[14px]">{periodeLabel}</p>
                  </div>
                  <div className="bg-[#e8e2d6] h-px w-full" />
                  <div className="flex items-center justify-between w-full">
                    <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#1f1912] text-[15px]">Total Pembayaran</p>
                    <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#876747] text-[18px]">{formatRupiah(total)}</p>
                  </div>
                  {!fromVoucher && (
                    <div className="bg-white rounded-[10px] border border-[#e8e2d6] w-full">
                      <div className="flex gap-[8px] items-center px-[14px] py-[12px] w-full">
                        <img src={checkCircle} className="w-[16px] h-[16px]" alt="Check Icon" />
                        <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#9ca3af] text-[12px]">
                          Iuran sudah mencakup donasi untuk pemakaman gratis bagi yang tak mampu.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Checkbox Persetujuan */}
            <div className="flex gap-[14px] items-start w-full">
              <button
                type="button"
                onClick={() => setAgreedToTerms(!agreedToTerms)}
                className={`shrink-0 mt-[2px] w-[22px] h-[22px] rounded-[4px] border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${agreedToTerms ? "border-[#1f1912] bg-[#1f1912]" : "border-[#9ca3af] bg-white"}`}
              >
                {agreedToTerms && (
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                    <path d="M1 3.5L4 6.5L10 1" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <div className="flex flex-col gap-[6px] flex-1 min-w-0">
                <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#1f1912] text-[14px]">
                  Dengan mendaftar, saya setuju ikut program keanggotaan <span className="font-bold">Pulang.</span>
                </p>
                <p className="font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#6b7280] text-[13px]">
                  Saya memahami iuran anggota digunakan untuk penyelenggaraan program, donasi, pemberian manfaat kepada anggota, dan termasuk kepesertaan perlindungan jiwa.
                </p>
              </div>
            </div>

            <XenditBanner />

            {/* CTA */}
            <button
              disabled={!agreedToTerms}
              onClick={() => navigateWithLoading("/purchase/success", { state: { ...data, total, slideDir: "forward" } })}
              className={`w-full h-[52px] rounded-[12px] border-none transition-all duration-200 ${agreedToTerms ? "bg-[#1f1912] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] cursor-pointer" : "bg-[#989898] cursor-not-allowed"}`}
            >
              <div className="flex items-center justify-center w-full h-full px-[24px]">
                <p className={`font-['Outfit',sans-serif] font-medium leading-[normal] text-[16px] whitespace-nowrap ${agreedToTerms ? "text-white" : "text-[#d8d8d8]"}`}>
                  Selesaikan pendaftaran
                </p>
              </div>
            </button>

            <button
              onClick={() => navigateWithLoading("/purchase/data-diri", { state: { ...data, slideDir: "back" } })}
              className="flex gap-[12px] items-center bg-transparent border-none cursor-pointer p-0"
            >
              <div className="bg-[rgba(189,166,122,0.15)] flex items-center justify-center p-[9px] rounded-[100px] shrink-0">
                <ArrowLeft className="size-[16px] text-[#3a3a3a]" />
              </div>
              <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] text-[#3a3a3a] whitespace-nowrap">Sebelumnya</p>
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
                  className={`font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] whitespace-nowrap ${step.number === currentStep ? "text-[#3a3a3a]" : "text-[#9ca3af]"
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
                    <InfoRow label="Periode" value={periodeLabel} />
                    <InfoRow label="Prosesi Kepulangan" value={ceremonyLabel} />
                  </div>
                </div>

                {/* ── Detail Penerima ── */}
                <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
                  <div className="flex flex-col gap-[16px] items-start p-[20px] w-full">
                    <SectionHeading text="Detail Penerima Layanan" />
                    {isFamily && (
                      <p className="font-['Outfit',sans-serif] font-normal text-[#9CA3AF] text-[12px] mt-[-10px]">
                        Anggota keluarga yang kamu daftarkan
                      </p>
                    )}
                    <InfoRow label="Nama Lengkap" value={recipientName || "–"} />
                    <InfoRow label="Tanggal Lahir" value={data.dob || "–"} />
                    <InfoRow label="Usia" value={data.dob ? calculateAge(data.dob) : "–"} />
                    {isFamily && (
                      <InfoRow label="Hubungan Denganmu" value={data.hubunganKeluarga || "–"} />
                    )}
                    <InfoRow label="Nomor WhatsApp" value={recipientWa || "–"} />
                  </div>
                </div>

                {/* ── Kontak Darurat / Pengelola ── */}
                <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
                  <div className="flex flex-col gap-[16px] items-start p-[20px] w-full">
                    {isFamily ? (
                      <>
                        <SectionHeading text="Pengelola Akun" />
                        <p className="font-['Outfit',sans-serif] font-normal text-[#9CA3AF] text-[12px] mt-[-10px]">
                          Data dirimu
                        </p>
                        <InfoRow label="Nama Lengkap" value={data.namaPengelola || "–"} />
                        <InfoRow label="Nomor WhatsApp" value={data.waPengelola || "–"} />
                      </>
                    ) : (
                      <>
                        <SectionHeading text="Kontak Darurat" />
                        <InfoRow label="Nama Kontak Darurat" value={data.namaKontakDarurat || "–"} />
                        <InfoRow label="Hubungan" value={data.hubunganDarurat || "–"} />
                        <InfoRow label="Nomor WhatsApp" value={data.waKontakDarurat || "–"} />
                      </>
                    )}
                  </div>
                </div>

                {/* ── Kode Voucher ── */}
                {fromVoucher && <VoucherAppliedCard code={voucherCode} />}

                {/* ── Rincian Biaya ── */}
                <div className="flex flex-col gap-[16px] items-start w-full">
                  <SectionHeading text="Rincian Biaya" />
                  <div className="bg-[#faf8f4] rounded-[14px] border border-[#e8e2d6] w-full">
                    <div className="flex flex-col items-start p-[20px] w-full gap-[14px]">
                      <div className="flex items-center justify-between w-full">
                        <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[14px]">Iuran Keanggotaan</p>
                        <p className={`font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] ${fromVoucher ? "line-through text-[#9ca3af]" : "text-[#3a3a3a]"}`}>
                          {formatRupiah(basePrice)}
                        </p>
                      </div>
                      {fromVoucher && (
                        <div className="flex items-center justify-between w-full">
                          <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#1f8a55] text-[14px]">Diskon Voucher</p>
                          <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#1f8a55] text-[14px]">-{formatRupiah(basePrice)}</p>
                        </div>
                      )}
                      <div className="flex items-center justify-between w-full">
                        <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[14px]">Periode</p>
                        <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#3a3a3a] text-[14px]">{periodeLabel}</p>
                      </div>
                      <div className="bg-[#e8e2d6] h-px w-full" />
                      <div className="flex items-center justify-between w-full">
                        <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#1f1912] text-[15px]">Total Pembayaran</p>
                        <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#876747] text-[18px]">{formatRupiah(total)}</p>
                      </div>
                      {!fromVoucher && (
                        <div className="bg-white rounded-[10px] border border-[#e8e2d6] w-full">
                          <div className="flex gap-[8px] items-center px-[14px] py-[12px] w-full">
                            <img src={checkCircle} className="w-[16px] h-[16px]" alt="Check Icon" />
                            <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#9ca3af] text-[12px]">
                              Iuran sudah mencakup donasi untuk pemakaman gratis bagi yang tak mampu.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* ── Checkbox Persetujuan ── */}
                <div className="flex gap-[14px] items-start w-full">
                  <button
                    type="button"
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                    className={`shrink-0 mt-[2px] w-[22px] h-[22px] rounded-[4px] border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${agreedToTerms ? "border-[#1f1912] bg-[#1f1912]" : "border-[#9ca3af] bg-white"}`}
                  >
                    {agreedToTerms && (
                      <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                        <path d="M1 3.5L4 6.5L10 1" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  <div className="flex flex-col gap-[6px] flex-1 min-w-0">
                    <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#1f1912] text-[14px]">
                      Dengan mendaftar, saya setuju ikut program keanggotaan <span className="font-bold">Pulang.</span>
                    </p>
                    <p className="font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#6b7280] text-[13px]">
                      Saya memahami iuran anggota digunakan untuk penyelenggaraan program, donasi, pemberian manfaat kepada anggota, dan termasuk kepesertaan perlindungan jiwa.
                    </p>
                  </div>
                </div>

                {/* ── Flip Payment Card ── */}
                <XenditBanner />

                {/* ── CTA ── */}
                <button
                  disabled={!agreedToTerms}
                  onClick={() => navigateWithLoading("/purchase/success", { state: { ...data, total, slideDir: "forward" } })}
                  className={`w-full h-[52px] rounded-[12px] border-none transition-all duration-200 ${agreedToTerms ? "bg-[#1f1912] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] cursor-pointer" : "bg-[#d1d5db] cursor-not-allowed"}`}
                >
                  <div className="flex items-center justify-center w-full h-full px-[24px]">
                    <p className="font-['Outfit',sans-serif] font-medium leading-[normal] text-[16px] text-white whitespace-nowrap">
                      Selesaikan pendaftaran
                    </p>
                  </div>
                </button>

                {/* Sebelumnya */}
                <button
                  onClick={() => navigateWithLoading("/purchase/data-diri", { state: { ...data, slideDir: "back" } })}
                  className="flex gap-[12px] items-center bg-transparent border-none cursor-pointer p-0"
                >
                  <div className="bg-[rgba(189,166,122,0.15)] flex items-center justify-center p-[9px] rounded-[100px] shrink-0">
                    <ArrowLeft className="size-[16px] text-[#3a3a3a]" />
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

    </div>
  );
}