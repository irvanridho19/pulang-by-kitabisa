import { useState, useEffect } from "react";
import svgPaths from "../../assets/Illustration/Success.svg";
import imgIconCareManager from "../../assets/care-manager-icon.png";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { usePageTransition } from "./page-transition";

/* ── Sun Illustration ─── */
function IllustrationSuccess() {
  return (
    <div
      className="overflow-clip relative rounded-[20px] shrink-0 w-full"
      style={{
        background: "linear-gradient(to bottom, #fffaf1, #fef4e2 50%, #faedd1)",
        height: "220px",
      }}
    >
      <img src={svgPaths} alt="Ilustrasi Success" />
    </div>
  );
}

/* ── Main Page ─── */
export default function PurchaseSuccessPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateWithLoading } = usePageTransition();

  // Staggered animation states
  const [cardVisible, setCardVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t1 = setTimeout(() => setCardVisible(true), 100);
    const t2 = setTimeout(() => setTextVisible(true), 420);
    const t3 = setTimeout(() => setButtonsVisible(true), 680);
    const t4 = setTimeout(() => setBannerVisible(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="min-h-screen flex justify-center" style={{ background: "linear-gradient(to bottom, #fffdf9, #f5f0e8)" }}>
      <div className="w-full max-w-[480px] relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Main content */}
        <main className="flex flex-col flex-1 w-full px-[20px] pt-[24px] pb-[32px]">

          {/* Card */}
          <div
            className="bg-white rounded-[24px] w-full transition-all duration-700 ease-out"
            style={{
              boxShadow: "0px 6px 20px 0px rgba(46,33,20,0.09)",
              border: "1px solid rgba(189,166,122,0.18)",
              opacity: cardVisible ? 1 : 0,
              transform: cardVisible ? "translateY(0)" : "translateY(32px)",
            }}
          >
            <div className="flex flex-col gap-[24px] items-center p-[20px] w-full">

              {/* Illustration */}
              <IllustrationSuccess />

              {/* Text */}
              <div
                className="flex flex-col gap-[16px] items-center text-center w-full transition-all duration-700 ease-out"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#4b5563] text-[16px] w-full">
                  Terima kasih sudah memulai persiapan untuk hari yang tak terduga
                </p>
                <div className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[#9ca3af] text-[12px] w-full">
                  <p className="mb-[4px]">
                    Menyiapkan kepulangan dapat membantu keluargamu menghadapi masa sulit lebih tenang 🤍
                  </p>
                  <p>
                    Sekarang, kami akan mengirimkan tautan via WhatsApp berisi akses ke Kartu Persiapan Kepulangan digitalmu.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div
                className="flex flex-col gap-[12px] items-start w-full transition-all duration-700 ease-out"
                style={{
                  opacity: buttonsVisible ? 1 : 0,
                  transform: buttonsVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {/* Primary: Lihat halaman keanggotaan */}
                <button
                  className="bg-[#1f1912] w-full rounded-[12px] cursor-pointer border-none"
                  style={{ boxShadow: "0px 5px 16px 0px rgba(26,18,10,0.22)" }}
                  onClick={() => navigateWithLoading("/member")}
                >
                  <div className="flex items-center justify-center px-[24px] py-[14px] w-full">
                    <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[14px] text-white whitespace-nowrap">
                      Lihat halaman keanggotaan
                    </p>
                  </div>
                </button>

                {/* Secondary: Kembali ke Beranda */}
                <button
                  className="bg-white w-full rounded-[12px] cursor-pointer relative"
                  style={{ border: "none" }}
                  onClick={() => navigateWithLoading("/")}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-[12px] pointer-events-none"
                    style={{ border: "1.5px solid rgba(189,166,122,0.55)" }}
                  />
                  <div className="flex items-center justify-center px-[24px] py-[14px] w-full">
                    <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#111928] text-[14px] whitespace-nowrap">
                      Kembali ke Beranda
                    </p>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}