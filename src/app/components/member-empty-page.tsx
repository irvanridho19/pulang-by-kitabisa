import { useState } from "react";
import { usePageTransition } from "./page-transition";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import imgEmptyMember from "../../assets/Illustration/Empty Member.svg";

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
  { emoji: "🕌", text: "Pemulasaran jenazah" },
  { emoji: "📋", text: "Asisten pengurusan administrasi pasca pemakaman" },
  { emoji: "💰", text: "Uang kedukaan Rp 1.000.000 untuk keluarga" },
  // { emoji: "📝", text: "Pendampingan penulisan surat wasiat" },
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
            <img src={imgEmptyMember} alt="" className="size-[180px] object-contain" />
            <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[22px] text-center leading-[1.45]">
              Daftar untuk mulai menyiapkan kepulangan
            </p>
            <p
              className="font-['Outfit',sans-serif] font-normal text-[14px] text-center leading-[1.6]"
              style={{ color: "rgba(92,79,58,0.75)" }}
            >
              Dengan menjadi anggota, kamu bisa mendapatkan layanan lengkap agar tenang berpulang.
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
              className="w-full h-[49px] rounded-[12px] border-none cursor-pointer"
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
              Mulai dari Rp200.000/tahun
            </p>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
}
