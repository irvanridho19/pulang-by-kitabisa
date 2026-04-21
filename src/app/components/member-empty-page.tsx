import { useState } from "react";
import { usePageTransition } from "./page-transition";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";

/* ─── Illustration ─── */
function IllustrationNoMember() {
  return (
    <div className="relative shrink-0 size-[180px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 180">
        <rect fill="#AF9160" fillOpacity="0.1" height="180" rx="90" width="180" />
        <rect height="178.5" rx="89.25" stroke="#AF9160" strokeOpacity="0.2" strokeWidth="1.5" width="178.5" x="0.75" y="0.75" />
        <circle cx="90" cy="90" fill="#AF9160" fillOpacity="0.08" r="60" />
        <circle cx="90" cy="98" fill="#1F1912" fillOpacity="0.12" r="28" />
        <circle cx="90" cy="98" fill="#D8BE90" fillOpacity="0.35" r="22" />
        <circle cx="90" cy="98" fill="#AF9160" fillOpacity="0.9" r="14" />
        <circle cx="88" cy="36" fill="#AF9160" fillOpacity="0.5" r="6" />
        <circle cx="124.5" cy="58.5" fill="#AF9160" fillOpacity="0.5" r="4.5" />
        <circle cx="129.5" cy="103.5" fill="#AF9160" fillOpacity="0.5" r="3.5" />
        <circle cx="39.5" cy="103.5" fill="#AF9160" fillOpacity="0.5" r="3.5" />
        <circle cx="46.5" cy="58.5" fill="#AF9160" fillOpacity="0.5" r="4.5" />
        <circle cx="52" cy="44" fill="#D8BE90" fillOpacity="0.6" r="2" />
        <circle cx="124" cy="44" fill="#D8BE90" fillOpacity="0.6" r="2" />
        <circle cx="141.5" cy="81.5" fill="#D8BE90" fillOpacity="0.6" r="1.5" />
        <circle cx="21.5" cy="81.5" fill="#D8BE90" fillOpacity="0.6" r="1.5" />
        <circle cx="90.5" cy="20.5" fill="#D8BE90" fillOpacity="0.6" r="2.5" />
      </svg>
    </div>
  );
}

/* ─── Benefit card ─── */
function BenefitCard({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div
      className="relative rounded-[12px] w-full"
      style={{ background: "rgba(175,145,96,0.08)" }}
    >
      <div className="flex gap-[10px] items-center px-[14px] py-[10px] w-full">
        <p className="font-['Outfit',sans-serif] font-normal text-[#1f1912] text-[14px] shrink-0">
          {emoji}
        </p>
        <p
          className="flex-1 min-w-0 font-['Outfit',sans-serif] font-medium text-[13px] leading-[1.55]"
          style={{ color: "rgba(58,46,30,0.85)" }}
        >
          {text}
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[12px] pointer-events-none"
        style={{ border: "1px solid rgba(175,145,96,0.2)" }}
      />
    </div>
  );
}

const benefits = [
  { emoji: "💰", text: "Santunan duka Rp 5.000.000 untuk keluarga" },
  { emoji: "🕌", text: "Pemulasaran jenazah secara lengkap" },
  { emoji: "📋", text: "Asisten pengurusan administrasi pasca duka" },
  { emoji: "📝", text: "Pendampingan penulisan surat wasiat" },
];

/* ─── Main Page ─── */
export default function MemberEmptyPage() {
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

        <main className="flex flex-col items-center w-full flex-1">

          {/* Hero empty state */}
          <div className="flex flex-col gap-[16px] items-center px-[32px] pb-[40px] pt-[52px] w-full">
            <IllustrationNoMember />
            <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[22px] text-center leading-[1.45]">
              Kamu belum jadi anggota Pulang
            </p>
            <p
              className="font-['Outfit',sans-serif] font-normal text-[14px] text-center leading-[1.6]"
              style={{ color: "rgba(92,79,58,0.75)" }}
            >
              Bergabung sebagai anggota Pulang dan pastikan kepulangan yang tenang — untuk dirimu dan yang kamu sayangi.
            </p>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full mx-[32px]"
            style={{ background: "rgba(189,166,122,0.2)", maxWidth: "calc(100% - 64px)" }}
          />

          {/* Benefits */}
          <div className="flex flex-col gap-[12px] items-center px-[32px] py-[28px] w-full">
            <p
              className="font-['Outfit',sans-serif] font-semibold text-[12px] text-center tracking-[0.5px] whitespace-nowrap"
              style={{ color: "#967240" }}
            >
              Apa yang kamu dapat?
            </p>
            {benefits.map((b, i) => (
              <BenefitCard key={i} emoji={b.emoji} text={b.text} />
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-[12px] items-center px-[32px] pt-[8px] pb-[40px] w-full">
            <button
              type="button"
              onClick={() => navigateWithLoading("/purchase")}
              className="w-full h-[49px] rounded-[100px] border-none cursor-pointer"
              style={{
                background: "#1f1912",
                boxShadow: "0px 5px 16px 0px rgba(26,18,10,0.22)",
              }}
            >
              <p className="font-['Outfit',sans-serif] font-semibold text-[14px] text-white text-center leading-[1.5]">
                Daftar jadi anggota
              </p>
            </button>
            <p
              className="font-['Outfit',sans-serif] font-medium text-[12px] text-center leading-[1.5]"
              style={{ color: "rgba(112,112,112,0.6)" }}
            >
              Mulai dari Rp 35.000/bulan
            </p>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
}
