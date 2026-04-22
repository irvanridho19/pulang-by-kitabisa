import { useState } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router";
import { Compass, Home, ArrowLeft } from "lucide-react";
import { usePageTransition } from "./page-transition";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";

/* ─── Illustration ─── */
function IllustrationNotFound() {
  return (
    <div className="relative shrink-0 size-[180px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 180">
        <rect fill="#AF9160" fillOpacity="0.1" height="180" rx="90" width="180" />
        <rect height="178.5" rx="89.25" stroke="#AF9160" strokeOpacity="0.2" strokeWidth="1.5" width="178.5" x="0.75" y="0.75" />
        <circle cx="90" cy="90" fill="#AF9160" fillOpacity="0.08" r="60" />
        <circle cx="36" cy="52" fill="#D8BE90" fillOpacity="0.6" r="2.5" />
        <circle cx="148" cy="62" fill="#AF9160" fillOpacity="0.5" r="4" />
        <circle cx="142" cy="132" fill="#D8BE90" fillOpacity="0.6" r="2" />
        <circle cx="30" cy="120" fill="#AF9160" fillOpacity="0.5" r="3.5" />
        <circle cx="90" cy="20" fill="#D8BE90" fillOpacity="0.6" r="2.5" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Compass className="size-[72px] text-[#AF9160]" strokeWidth={1.5} />
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function NotFoundPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateWithLoading } = usePageTransition();
  const error = useRouteError();

  const isNotFound = !error || (isRouteErrorResponse(error) && error.status === 404);
  const heading = isNotFound ? "Halaman tidak ditemukan" : "Ada yang tidak beres";
  const body = isNotFound
    ? "Halaman yang kamu cari mungkin sudah dipindahkan atau tidak tersedia. Mari kembali ke halaman utama."
    : "Maaf, terjadi kesalahan saat memuat halaman ini. Coba beberapa saat lagi atau kembali ke halaman utama.";
  const code = isRouteErrorResponse(error) ? error.status : 404;

  return (
    <div
      className="min-h-screen flex justify-center"
      style={{ background: "linear-gradient(to bottom, #fffdf9, #f5f0e8)" }}
    >
      <div className="w-full max-w-[480px] relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col items-center w-full flex-1">
          <div className="flex flex-col gap-[16px] items-center px-[32px] pb-[24px] pt-[52px] w-full">
            <IllustrationNotFound />

            <p
              className="font-['Outfit',sans-serif] font-semibold text-[11px] tracking-[2px] mt-[4px]"
              style={{ color: "#967240" }}
            >
              ERROR {code}
            </p>

            <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[22px] text-center leading-[1.45]">
              {heading}
            </p>

            <p
              className="font-['Outfit',sans-serif] font-normal text-[14px] text-center leading-[1.6]"
              style={{ color: "rgba(92,79,58,0.75)" }}
            >
              {body}
            </p>
          </div>

          <div className="flex flex-col gap-[12px] items-center px-[32px] pt-[8px] pb-[40px] w-full">
            <button
              type="button"
              onClick={() => navigateWithLoading("/")}
              className="w-full h-[49px] rounded-[12px] border-none cursor-pointer flex items-center justify-center gap-[8px]"
              style={{
                background: "#1f1912",
                boxShadow: "0px 5px 16px 0px rgba(26,18,10,0.22)",
              }}
            >
              <Home className="size-[16px] text-white" />
              <p className="font-['Outfit',sans-serif] font-semibold text-[14px] text-white text-center leading-[1.5]">
                Kembali ke halaman utama
              </p>
            </button>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="w-full h-[44px] rounded-[12px] bg-transparent cursor-pointer flex items-center justify-center gap-[8px]"
              style={{ border: "1px solid rgba(175,145,96,0.4)" }}
            >
              <ArrowLeft className="size-[16px] text-[#3a3a3a]" />
              <p className="font-['Outfit',sans-serif] font-medium text-[14px] text-[#3a3a3a] text-center leading-[1.5]">
                Kembali ke halaman sebelumnya
              </p>
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
