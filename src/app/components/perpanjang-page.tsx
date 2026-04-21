import { useState } from "react";
import { usePageTransition } from "./page-transition";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { XenditBanner } from "./xendit-banner";
import { ArrowLeft } from "lucide-react";

/* ─── Date helpers ─── */
const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
];

function formatDateShort(d: Date): string {
  return `${d.getDate()} ${MONTHS_SHORT[d.getMonth()]} ${d.getFullYear()}`;
}

function addOneYear(d: Date): Date {
  const copy = new Date(d);
  copy.setFullYear(copy.getFullYear() + 1);
  return copy;
}

/* ─── Hero Banner ─── */
function HeroBanner() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #faf3e3, #f5ead6)", minHeight: 118 }}
    >
      {/* Decorative circles */}
      <div className="absolute size-[160px]" style={{ right: -20, top: -40 }}>
        <svg className="absolute block size-full" fill="none" viewBox="0 0 160 160">
          <circle cx="80" cy="80" fill="#BD9657" fillOpacity="0.08" r="80" />
        </svg>
      </div>
      <div className="absolute size-[100px]" style={{ left: -20, bottom: -20 }}>
        <svg className="absolute block size-full" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#BD9657" fillOpacity="0.08" r="50" />
        </svg>
      </div>
      <div className="absolute size-[60px]" style={{ left: "42%", bottom: -40 }}>
        <svg className="absolute block size-full" fill="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" fill="#BD9657" fillOpacity="0.10" r="30" />
        </svg>
      </div>

      {/* Text */}
      <div className="relative flex flex-col gap-[8px] px-[20px] py-[24px] w-full">
        <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[18px]">
          Perpanjang Keanggotaan
        </p>
        <p className="font-['Outfit',sans-serif] font-normal text-[#6b7280] text-[12px] leading-[1.6]">
          Perpanjang keanggotaanmu dan terus jaga ketenangan keluarga bersama{" "}
          <span className="font-['Outfit',sans-serif] font-bold text-[#6b7280]">Pulang</span>.
        </p>
      </div>
    </div>
  );
}

/* ─── Card: Masa Perpanjangan ─── */
function CardMasaPerpanjangan() {
  const today = new Date();
  const nextYear = addOneYear(today);

  return (
    <div
      className="bg-white relative rounded-[12px] w-full"
      style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.06)" }}
    >
      <div className="flex flex-col gap-[12px] px-[16px] py-[12px] w-full">
        <p className="font-['Outfit',sans-serif] font-medium text-[#6b7280] text-[11px]">
          Masa Perpanjangan
        </p>

        {/* Date pill */}
        <div
          className="relative rounded-[8px] w-full"
          style={{ background: "#fdf3e3" }}
        >
          <div className="flex items-center w-full" style={{ padding: 16 }}>
            {/* Mulai */}
            <div className="flex flex-col gap-[2px] flex-1">
              <p className="font-['Outfit',sans-serif] font-normal text-[#6b7280] text-[10px]">
                Mulai
              </p>
              <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[13px]">
                {formatDateShort(today)}
              </p>
            </div>

            {/* Separator */}
            <div
              className="self-stretch w-px mx-[16px]"
              style={{ background: "rgba(189,150,87,0.3)" }}
            />

            {/* Berakhir */}
            <div className="flex flex-col gap-[2px] flex-1">
              <p className="font-['Outfit',sans-serif] font-normal text-[#6b7280] text-[10px]">
                Berakhir
              </p>
              <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[13px]">
                {formatDateShort(nextYear)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Card: Rincian Harga ─── */
function CardRincianHarga() {
  return (
    <div
      className="bg-white relative rounded-[12px] w-full"
      style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.06)" }}
    >
      <div className="flex flex-col gap-[12px] px-[16px] py-[14px] w-full">
        <p className="font-['Outfit',sans-serif] font-medium text-[#6b7280] text-[11px]">
          Rincian Harga
        </p>

        <div className="flex items-center justify-between w-full">
          {/* Labels */}
          <div className="flex flex-col gap-[8px] flex-1 min-w-0">
            <p className="font-['Outfit',sans-serif] font-normal text-[#6b7280] text-[12px]">
              Tipe Keanggotaan
            </p>
            <p className="font-['Outfit',sans-serif] font-normal text-[#6b7280] text-[12px]">
              Biaya Layanan
            </p>
            <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[13px]">
              Total Pembayaran
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-[8px] items-end shrink-0">
            <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[12px]">
              Tahunan
            </p>
            <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[12px]">
              Rp400.000
            </p>
            <p className="font-['Outfit',sans-serif] font-bold text-[#bd9657] text-[15px]">
              Rp400.000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function PerpanjangPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateWithLoading } = usePageTransition();

  return (
    <div
      className="min-h-screen flex justify-center"
      style={{ background: "#fefaf3" }}
    >
      <div className="w-full max-w-[480px] relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Back bar */}
        <div className="flex items-center gap-[10px] px-[16px] py-[12px] w-full bg-white border-b border-[#f0ebe1]">
          <button
            type="button"
            onClick={() => navigateWithLoading("/member")}
            className="flex items-center justify-center size-[32px] rounded-full border-none cursor-pointer shrink-0"
            style={{ background: "rgba(189,166,122,0.12)" }}
          >
            <ArrowLeft size={16} color="#1f1912" strokeWidth={2} />
          </button>
          <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[14px]">
            Kembali ke Halaman Keanggotaan
          </p>
        </div>

        {/* Hero Banner */}
        <HeroBanner />

        {/* Cards */}
        <main className="flex flex-col gap-[16px] px-[20px] pt-[20px] pb-[40px] w-full">
          <CardMasaPerpanjangan />
          <CardRincianHarga />
          <XenditBanner />

          {/* CTA Button */}
          <button
            type="button"
            onClick={() => navigateWithLoading("/")}
            className="w-full rounded-[16px] border-none cursor-pointer"
            style={{
              background: "#1f1912",
              boxShadow: "0px 5px 16px 0px rgba(26,18,10,0.22)",
            }}
          >
            <div className="flex items-center justify-center px-[24px] py-[16px] w-full">
              <p className="font-['Outfit',sans-serif] font-semibold text-[15px] text-center text-white">
                Perpanjang Sekarang
              </p>
            </div>
          </button>

          <p className="font-['Outfit',sans-serif] font-normal text-[#6b7280] text-[11px] text-center leading-[1.6]">
            Dengan memperpanjang, kamu menyetujui syarat &amp; ketentuan layanan{" "}
            <span className="font-['Outfit',sans-serif] font-bold text-[#6b7280]">Pulang</span>.
          </p>
        </main>

        <Footer />
      </div>
    </div>
  );
}