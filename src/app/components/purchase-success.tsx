import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-3qttxie8dt";
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
      {/* Outer glow ellipse */}
      <div className="absolute" style={{ left: "50%", top: "13px", transform: "translateX(-50%)", width: "168px", height: "168px" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 168">
          <circle cx="84" cy="84" fill="url(#paint0_radial_success_outer)" r="84" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="scale(168)" gradientUnits="userSpaceOnUse" id="paint0_radial_success_outer" r="1">
              <stop stopColor="#FCD980" stopOpacity="0.3" />
              <stop offset="0.7" stopColor="#FCD980" stopOpacity="0.08" />
              <stop offset="1" stopColor="#FCD980" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Inner glow ellipse */}
      <div className="absolute" style={{ left: "50%", top: "37px", transform: "translateX(-50%)", width: "120px", height: "120px" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <circle cx="60" cy="60" fill="url(#paint0_radial_success_inner)" r="60" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="scale(120)" gradientUnits="userSpaceOnUse" id="paint0_radial_success_inner" r="1">
              <stop stopColor="#FCCF6B" stopOpacity="0.22" />
              <stop offset="1" stopColor="#FCCF6B" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Sun rays — 8 directional rays */}
      {/* Ray right-top */}
      <div className="absolute" style={{ right: "15%", top: "66px", width: "24.863px", height: "11.982px" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8628 11.9823">
          <path clipRule="evenodd" d={svgPaths.p32dc4b80} fill="#FCCF6B" fillOpacity="0.5" fillRule="evenodd" />
        </svg>
      </div>
      {/* Ray right-bottom */}
      <div className="absolute" style={{ right: "15%", top: "117px", width: "24.863px", height: "11.982px" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8628 11.9823">
          <path clipRule="evenodd" d={svgPaths.p3e7bb480} fill="#FCCF6B" fillOpacity="0.5" fillRule="evenodd" />
        </svg>
      </div>
      {/* Ray bottom-right */}
      <div className="absolute" style={{ left: "57%", top: "152px", width: "11.982px", height: "24.863px" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9823 24.8628">
          <path clipRule="evenodd" d={svgPaths.p27002180} fill="#FCCF6B" fillOpacity="0.5" fillRule="evenodd" />
        </svg>
      </div>
      {/* Ray bottom-left */}
      <div className="absolute" style={{ left: "38%", top: "152px", width: "11.982px", height: "24.863px" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9823 24.8628">
          <path clipRule="evenodd" d={svgPaths.paf8cb00} fill="#FCCF6B" fillOpacity="0.5" fillRule="evenodd" />
        </svg>
      </div>
      {/* Ray left-bottom */}
      <div className="absolute" style={{ left: "15%", top: "117px", width: "24.863px", height: "11.982px" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8628 11.9823">
          <path clipRule="evenodd" d={svgPaths.p2b97b400} fill="#FCCF6B" fillOpacity="0.5" fillRule="evenodd" />
        </svg>
      </div>
      {/* Ray left-top */}
      <div className="absolute" style={{ left: "15%", top: "66px", width: "24.863px", height: "11.982px" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8628 11.9823">
          <path clipRule="evenodd" d={svgPaths.p3f31bf0} fill="#FCCF6B" fillOpacity="0.5" fillRule="evenodd" />
        </svg>
      </div>
      {/* Ray top-left */}
      <div className="absolute" style={{ left: "38%", top: "22px", width: "11.982px", height: "24.863px" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9823 24.8628">
          <path clipRule="evenodd" d={svgPaths.p26202c00} fill="#FCCF6B" fillOpacity="0.5" fillRule="evenodd" />
        </svg>
      </div>
      {/* Ray top-right */}
      <div className="absolute" style={{ left: "57%", top: "22px", width: "11.982px", height: "24.863px" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9823 24.8628">
          <path clipRule="evenodd" d={svgPaths.p19e68a00} fill="#FCCF6B" fillOpacity="0.5" fillRule="evenodd" />
        </svg>
      </div>

      {/* Main sun circle with gradient + shadow */}
      <div
        className="absolute"
        style={{ left: "50%", top: "50px", transform: "translateX(-50%)", width: "110px", height: "110px" }}
      >
        <div className="absolute" style={{ inset: "-22px" }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
            <g filter="url(#filter0_d_success)">
              <circle cx="70" cy="62" fill="url(#paint0_linear_success)" r="46" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="140" id="filter0_d_success" width="140" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="12" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.647 0 0 0 0 0.463 0 0 0 0 0.204 0 0 0 0.45 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_success" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_success" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_success" x1="24" x2="116" y1="16" y2="108">
                <stop stopColor="#F4D189" />
                <stop offset="1" stopColor="#A57634" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Checkmark ✓ */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: "50%", top: "50px", transform: "translateX(-50%)", width: "110px", height: "110px" }}
      >
        <p className="font-['Outfit',sans-serif] font-bold text-white text-[38px] leading-none" style={{ marginTop: "-6px" }}>
          ✓
        </p>
      </div>

      {/* Decorative petal / teardrop ornaments */}
      {/* Top-left petal — peach */}
      <div className="absolute flex items-center justify-center" style={{ left: "9%", top: "18px", width: "15px", height: "18px" }}>
        <div style={{ transform: "rotate(-20deg)" }}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <ellipse cx="5" cy="8" fill="#FCA880" fillOpacity="0.75" rx="5" ry="8" />
          </svg>
        </div>
      </div>
      {/* Top-right petal — gold */}
      <div className="absolute flex items-center justify-center" style={{ right: "9%", top: "14px", width: "12px", height: "15px" }}>
        <div style={{ transform: "rotate(18deg)" }}>
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <ellipse cx="4" cy="6.5" fill="#BDA67A" fillOpacity="0.7" rx="4" ry="6.5" />
          </svg>
        </div>
      </div>
      {/* Bottom-right petal — yellow */}
      <div className="absolute flex items-center justify-center" style={{ right: "7%", bottom: "24px", width: "18px", height: "20px" }}>
        <div style={{ transform: "rotate(-28deg)" }}>
          <svg width="11" height="17" viewBox="0 0 11 17" fill="none">
            <ellipse cx="5.5" cy="8.5" fill="#F4C574" fillOpacity="0.7" rx="5.5" ry="8.5" />
          </svg>
        </div>
      </div>
      {/* Bottom-left petal — brown */}
      <div className="absolute flex items-center justify-center" style={{ left: "4%", bottom: "30px", width: "14px", height: "16px" }}>
        <div style={{ transform: "rotate(22deg)" }}>
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
            <ellipse cx="4.5" cy="7" fill="#8D6A35" fillOpacity="0.55" rx="4.5" ry="7" />
          </svg>
        </div>
      </div>
      {/* Bottom-center petal — gold */}
      <div className="absolute flex items-center justify-center" style={{ left: "50%", bottom: "2px", transform: "translateX(-50%)", width: "9px", height: "12px" }}>
        <div style={{ transform: "rotate(-5deg)" }}>
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <ellipse cx="4" cy="6" fill="#FCCF6B" fillOpacity="0.65" rx="4" ry="6" />
          </svg>
        </div>
      </div>

      {/* Tiny dot ornaments */}
      <div className="absolute" style={{ left: "17%", top: "40px", width: "4px", height: "4px" }}>
        <svg viewBox="0 0 4 4" fill="none" width="4" height="4"><circle cx="2" cy="2" fill="#BDA67A" fillOpacity="0.45" r="2" /></svg>
      </div>
      <div className="absolute" style={{ right: "19%", top: "46px", width: "3px", height: "3px" }}>
        <svg viewBox="0 0 3 3" fill="none" width="3" height="3"><circle cx="1.5" cy="1.5" fill="#BDA67A" fillOpacity="0.45" r="1.5" /></svg>
      </div>
      <div className="absolute" style={{ right: "17%", bottom: "38px", width: "4px", height: "4px" }}>
        <svg viewBox="0 0 4 4" fill="none" width="4" height="4"><circle cx="2" cy="2" fill="#BDA67A" fillOpacity="0.45" r="2" /></svg>
      </div>
      <div className="absolute" style={{ left: "15%", bottom: "36px", width: "3px", height: "3px" }}>
        <svg viewBox="0 0 3 3" fill="none" width="3" height="3"><circle cx="1.5" cy="1.5" fill="#BDA67A" fillOpacity="0.45" r="1.5" /></svg>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute left-0 bottom-0 w-full h-[60px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.18))" }}
      />
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

        {/* Care Manager Banner */}
        <div
          className="px-[20px] pb-[32px] transition-all duration-700 ease-out"
          style={{
            opacity: bannerVisible ? 1 : 0,
            transform: bannerVisible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div
            className="relative rounded-[14px] w-full overflow-hidden"
            style={{ background: "linear-gradient(to right, #fcf6ec, #f5ede0)" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none rounded-[14px]"
              style={{ border: "1px solid rgba(189,166,122,0.25)" }}
            />
            <div className="flex items-center gap-[12px] px-[20px] py-[20px] w-full">
              <div className="relative shrink-0 size-[36px]">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgIconCareManager}
                />
              </div>
              <p className="flex-1 font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] text-[#3a3a3a]">
                Butuh bantuan? Hubungi Care Manager Pulang
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}