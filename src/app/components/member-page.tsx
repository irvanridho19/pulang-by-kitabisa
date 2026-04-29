import { useState } from "react";
import { usePageTransition } from "./page-transition";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import imgWhite1 from "../../assets/Logo/Logo-1.svg";
import unduhKartuIcon from "../../assets/Illustration/Icons/Unduh Kartu.svg";
import kontakAsistenIcon from "../../assets/Illustration/Icons/Kontak Asisten.svg";

/* ─── Digital Member Card ─── */
function DigitalMemberCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[16px] shrink-0 w-full"
      style={{
        // Rasio aspek kartu standar ATM/KTP (CR80)
        aspectRatio: "1.586 / 1",
        background: "linear-gradient(134.808deg, rgb(54,41,25) 13.397%, rgb(35,27,16) 50%, rgb(23,17,10) 86.603%)",
        boxShadow: "0px 12px 32px 0px rgba(26,18,10,0.38)",
      }}
    >
      {/* Decorative circles - menggunakan persentase agar responsif */}
      <div className="absolute w-[40%] aspect-square" style={{ right: "-5%", top: "-25%" }}>
        <svg className="absolute block size-full" fill="none" viewBox="0 0 130 130">
          <circle cx="65" cy="65" fill="white" fillOpacity="0.06" r="65" />
        </svg>
      </div>
      <div className="absolute w-[25%] aspect-square" style={{ left: "-10%", bottom: "-15%" }}>
        <svg className="absolute block size-full" fill="none" viewBox="0 0 90 90">
          <circle cx="45" cy="45" fill="white" fillOpacity="0.04" r="45" />
        </svg>
      </div>

      {/* Kontainer Utama Padding */}
      <div className="absolute inset-0 flex flex-col justify-between p-[6%]">
        
        {/* Top: Logo */}
        <div className="w-[20%] min-w-[50px] relative">
           {/* Ganti object-cover menjadi object-contain agar logo tidak kepotong */}
          <img alt="Pulang" className="w-full h-auto object-contain" src={imgWhite1} />
        </div>

        {/* Middle: Name & ID */}
        <div className="flex flex-col gap-[1%] mt-[5%]">
          <p
            className="font-['Outfit',sans-serif] font-medium text-[clamp(10px,3vw,14px)] tracking-[2px]"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            PLG – 2025 – 001847
          </p>
          <p className="font-['Lora',serif] font-bold text-[#e2d0a8] text-[clamp(16px,5vw,22px)]">
            Joko Susilo Budiman
          </p>
        </div>

        {/* Bottom: Membership info row */}
        <div className="flex items-end justify-between w-full mt-auto pb-[2%]">
          {/* Keanggotaan */}
          <div className="flex flex-col gap-[2px]">
            <p
              className="font-['Outfit',sans-serif] font-normal text-[clamp(7px,2vw,10px)] tracking-[0.8px] uppercase"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              KEANGGOTAAN
            </p>
            <p
              className="font-['Outfit',sans-serif] font-semibold text-[clamp(10px,3vw,13px)]"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Tahunan
            </p>
          </div>
          {/* Berlaku Hingga */}
          <div className="flex flex-col gap-[2px] items-end">
            <p
              className="font-['Outfit',sans-serif] font-normal text-[clamp(7px,2vw,10px)] tracking-[0.8px] uppercase"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              BERLAKU HINGGA
            </p>
            <p className="font-['Outfit',sans-serif] font-semibold text-[clamp(10px,3vw,13px)]" style={{ color: "rgba(255,255,255,0.85)" }}>
              31 Des 2026
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gold shimmer line */}
      <div
        className="absolute h-[3px] left-0 w-full bottom-0"
        style={{
          background: "linear-gradient(to right, rgba(189,166,122,0), rgba(189,166,122,0.85) 50%, rgba(189,166,122,0))",
        }}
      />
    </div>
  );
}

/* ─── Info Card ─── */
function InfoDivider() {
  return <div className="h-px w-full" style={{ background: "rgba(189,166,122,0.1)" }} />;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[2px] w-full">
      <p className="font-['Outfit',sans-serif] font-normal text-[#8c8c8c] text-[11px]">{label}</p>
      <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[14px]">{value}</p>
    </div>
  );
}

function BadgeAktif() {
  return (
    <div
      className="relative rounded-[100px] shrink-0"
      style={{ background: "rgba(46,159,96,0.12)" }}
    >
      <div className="flex items-center justify-center px-[6px] py-[2px] rounded-[inherit]">
        <p className="font-['Outfit',sans-serif] font-semibold text-[#2e9f60] text-[9px] whitespace-nowrap">
          ✓ Aktif
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[100px] pointer-events-none"
        style={{ border: "1px solid rgba(46,159,96,0.4)" }}
      />
    </div>
  );
}

function InfoCard() {
  return (
    <div
      className="bg-white relative rounded-[16px] w-full"
      style={{
        border: "1px solid rgba(189,166,122,0.18)",
        boxShadow: "0px 3px 12px 0px rgba(46,33,20,0.07)",
      }}
    >
      <div className="flex flex-col gap-[12px] p-[16px] w-full">

        {/* Status */}
        <div className="flex flex-col gap-[4px] w-full">
          <p className="font-['Outfit',sans-serif] font-normal text-[#8c8c8c] text-[11px]">Status Keanggotaan</p>
          <div className="flex gap-[4px] items-center">
            <BadgeAktif />
            <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[14px] whitespace-nowrap">
              Hingga 31 Des 2026
            </p>
          </div>
        </div>
        <InfoDivider />

        {/* Nama */}
        <InfoRow label="Nama Penerima Layanan" value="Joko Susilo Budiman" />
        <InfoDivider />

        {/* WhatsApp */}
        <InfoRow label="Nomor WhatsApp" value="+62 877 621 212" />
        <InfoDivider />

        {/* Prosesi */}
        <InfoRow label="Prosesi Kepulangan" value="Muslim" />
        <InfoDivider />

        {/* Tanggal Lahir */}
        <InfoRow label="Tanggal Lahir" value="15 Agustus 1975" />
        <InfoDivider />

        {/* Usia */}
        <InfoRow label="Usia" value="50 Tahun, 7 Bulan, 23 Hari" />
        <InfoDivider />

        {/* Nomor Anggota */}
        <InfoRow label="Nomor Anggota" value="PLG-2025-001847" />
      </div>
    </div>
  );
}

/* ─── Payment History ─── */
const paymentHistory = [
  { label: "Pembayaran Tahunan", date: "1 Jan 2026" },
  { label: "Pembayaran Tahunan", date: "1 Jan 2025" },
];

function PaymentRow({ label, date, isLast }: { label: string; date: string; isLast: boolean }) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <div className="flex items-center justify-between w-full">
        {/* Left: icon + text */}
        <div className="flex gap-[16px] items-center flex-1 min-w-0">
          <span className="text-[14px] shrink-0">📋</span>
          <div className="flex flex-col gap-[2px]">
            <p className="font-['Outfit',sans-serif] font-medium text-[#1f1912] text-[13px]">{label}</p>
            <p className="font-['Outfit',sans-serif] font-normal text-[#8c8c8c] text-[11px]">{date}</p>
          </div>
        </div>
        {/* Right: amount */}
        <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[13px] text-right shrink-0 w-[100px]">
          Rp300.000
        </p>
      </div>
      {!isLast && (
        <div className="h-px w-full" style={{ background: "rgba(189,166,122,0.09)" }} />
      )}
    </div>
  );
}

function PaymentHistoryCard() {
  return (
    <div
      className="bg-white relative rounded-[16px] w-full"
      style={{
        border: "1px solid rgba(189,166,122,0.18)",
        boxShadow: "0px 3px 12px 0px rgba(46,33,20,0.07)",
      }}
    >
      <div className="flex flex-col gap-[12px] p-[16px] w-full">
        {paymentHistory.map((item, idx) => (
          <PaymentRow
            key={idx}
            label={item.label}
            date={item.date}
            isLast={idx === paymentHistory.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Action Buttons ─── */
function ActUnduhKartu() {
  return (
    <button
      type="button"
      className="flex-1 rounded-[12px] cursor-pointer border-none"
      style={{ background: "rgba(189,166,122,0.1)", border: "1px solid rgba(189,166,122,0.25)" }}
    >
      <div className="flex flex-col items-center gap-[2px] px-[4px] py-[12px] w-full">
        <img src={unduhKartuIcon} alt="" className="size-[28px] object-contain" />
        <p className="font-['Outfit',sans-serif] font-medium text-[#1f1912] text-[10px] text-center">
          Unduh Kartu
        </p>
      </div>
    </button>
  );
}

function ActKontakAsisten() {
  return (
    <button
      type="button"
      className="flex-1 rounded-[12px] cursor-pointer border-none"
      style={{ background: "rgba(189,166,122,0.1)", border: "1px solid rgba(189,166,122,0.25)" }}
    >
      <div className="flex flex-col items-center gap-[2px] px-[4px] py-[12px] w-full">
        <img src={kontakAsistenIcon} alt="" className="size-[28px] object-contain" />
        <p className="font-['Outfit',sans-serif] font-medium text-[#1f1912] text-[10px] text-center">
          Hubungi Call Center
        </p>
      </div>
    </button>
  );
}

/* ─── Main Page ─── */
export default function MemberPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateWithLoading } = usePageTransition();

  return (
    <div
      className="min-h-screen flex justify-center"
      style={{ background: "linear-gradient(to bottom, #fffdf9, #f5f0e8)" }}
    >
      <div className="w-full max-w-[480px] relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col gap-[16px] px-[20px] pt-[24px] pb-[40px] w-full">

          {/* Digital Member Card */}
          <DigitalMemberCard />

          {/* Info Card */}
          <InfoCard />

          {/* Payment History Section */}
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex items-center justify-between w-full">
              <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[13px]">
                Riwayat Pembayaran Iuran
              </p>
            </div>
            <PaymentHistoryCard />
          </div>

          {/* Perpanjang CTA */}
          <button
            type="button"
            onClick={() => navigateWithLoading("/perpanjang")}
            className="w-full rounded-[12px] border-none cursor-pointer"
            style={{
              background: "#1f1912",
              boxShadow: "0px 5px 16px 0px rgba(26,18,10,0.22)",
            }}
          >
            <div className="flex items-center justify-center gap-[8px] px-[24px] py-[14px] w-full">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[14px] text-white whitespace-nowrap">
                Perpanjang keanggotaan
              </p>
            </div>
          </button>

          {/* Action buttons */}
          <div className="flex gap-[12px] items-center w-full">
            <ActUnduhKartu />
            <ActKontakAsisten />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}