import svgPaths from "../../imports/svg-gmo3e23oah";
import svgChevron from "../../imports/svg-goo2oksqsl";
import imgImageLogo from "../../assets/logo.png";
import imgFooterLogo from "../../assets/footer-logo-dark.png";
import { usePageTransition } from "./page-transition";
import { useLocation } from "react-router";
import { useAuth } from "./auth-context";

/* ── Nav Links Config ─── */
export const navLinks = [
  { label: "Solusi", to: "/", hash: "#section-service" },
  { label: "Layanan", to: "/layanan", hash: "" },
  { label: "Harga", to: "/", hash: "#section-pricing" },
  { label: "Dampak", to: "/", hash: "#section-impact" },
  { label: "Cara Klaim", to: "/cara-klaim", hash: "" },
];

/** Scroll to a hash target, or navigate to landing page with hash */
function useNavAction() {
  const { navigateWithLoading } = usePageTransition();
  const location = useLocation();

  return (link: (typeof navLinks)[number]) => {
    if (link.hash && location.pathname === "/") {
      // Already on landing page — just smooth-scroll
      const el = document.querySelector(link.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (link.hash) {
      // On another page — navigate to landing with hash so it scrolls after mount
      navigateWithLoading("/" + link.hash);
    } else {
      navigateWithLoading(link.to);
    }
  };
}

/* ── Navbar ─── */
export function NavbarMobileHeader({ onMenuToggle, menuOpen }: { onMenuToggle: () => void; menuOpen: boolean }) {
  const { navigateWithLoading } = usePageTransition();
  return (
    <div className="sticky top-0 bg-white flex items-center justify-between px-[16px] py-[12px] w-full z-50 border-b border-[#e5e7eb]">
      <button onClick={() => navigateWithLoading("/")} className="h-[45px] relative shrink-0 w-[90px] cursor-pointer bg-transparent border-none p-0">
        <img alt="Pulang Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLogo} />
      </button>
      <button onClick={onMenuToggle} className="relative shrink-0 size-[24px] cursor-pointer bg-transparent border-none p-0">
        <div className="absolute inset-[18.75%_16.67%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            {menuOpen ? (
              <>
                <path d="M1 1L15 14" stroke="#3A3A3A" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 1L1 14" stroke="#3A3A3A" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d={svgPaths.p21607980} fill="#3A3A3A" />
                <path d={svgPaths.p2d36a500} fill="#3A3A3A" />
                <path d={svgPaths.p3e646f0} fill="#3A3A3A" />
              </>
            )}
          </svg>
        </div>
      </button>
    </div>
  );
}

/* ── Mobile Menu — Logged Out ─── */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { navigateWithLoading } = usePageTransition();
  const { isLoggedIn, login } = useAuth();
  const waLink =
    "https://wa.me/6281234567890?text=Halo%2C%20saya%20butuh%20layanan%20darurat%20Pulang";

  const menuItems = [
    { label: "Layanan", to: "/layanan" },
    { label: "Cara akses layanan", to: "/cara-klaim" },
    { label: "Misi Pulang", to: "/misi" },
  ];

  // ── Logged In variant ──
  if (isLoggedIn) {
    return <MobileMenuLoggedIn open={open} onClose={onClose} />;
  }

  return (
    <div
      className={`fixed top-[69px] left-1/2 -translate-x-1/2 w-full max-w-[480px] bottom-0 bg-[#faf8f4] z-40 transition-all duration-300 ease-in-out ${open ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none"}`}
    >
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-[#f5f0e8]/80 pointer-events-none" />

      <div className="relative flex flex-col px-[16px] pt-[32px] pb-[24px] gap-[0px]">
        {/* Section label */}
        <div className="flex items-center gap-[10px] mb-[16px] px-[0px]">
          <div className="bg-[rgba(189,166,122,0.15)] relative rounded-[100px] shrink-0">
            <div className="flex items-start overflow-clip px-[10px] py-[3px] rounded-[inherit]">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#967240] text-[9px] tracking-[1.2px] whitespace-nowrap">
                MENU
              </p>
            </div>
            <div className="absolute border border-[rgba(189,166,122,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
          <div className="flex-1 h-px bg-[rgba(189,166,122,0.2)]" />
        </div>

        {/* Nav items */}
        <div className="flex flex-col gap-[0px] mb-[0px]">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { onClose(); navigateWithLoading(item.to); }}
              className="flex items-center gap-[12px] font-['Outfit',sans-serif] font-medium text-[16px] text-left bg-transparent border-none cursor-pointer rounded-[12px] px-[16px] py-[14px] text-[#1f1912] hover:bg-[rgba(189,166,122,0.08)] transition-all duration-200"
            >
              <span className="w-[5px] h-[5px] rounded-full shrink-0 bg-[#bda67a]/40" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(189,166,122,0.15)] my-[16px]" />

        {/* CTA Buttons */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          {/* Masuk — triggers login */}
          <button
            onClick={() => { login(); }}
            className="bg-white rounded-[12px] w-full cursor-pointer border-none p-0 block shadow-[0px_4px_12px_0px_rgba(31,25,18,0.15)] relative"
          >
            <div className="absolute border border-[#af9160] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="flex items-center justify-center px-[20px] py-[14px]">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[21px] text-[14px] text-center text-[#1f1f1f]">
                Masuk
              </p>
            </div>
          </button>

          {/* Daftar jadi anggota — dark gradient */}
          <button
            onClick={() => { onClose(); navigateWithLoading("/purchase"); }}
            className="rounded-[12px] w-full cursor-pointer border-none p-0 block shadow-[0px_4px_12px_0px_rgba(31,25,18,0.15)]"
            style={{ backgroundImage: "linear-gradient(90deg, rgb(31, 25, 18) 0%, rgb(34, 27, 19) 10%, rgb(36, 29, 20) 20%, rgb(39, 31, 22) 30%, rgb(41, 33, 23) 40%, rgb(44, 35, 24) 50%, rgb(47, 37, 25) 60%, rgb(50, 40, 26) 70%, rgb(52, 42, 28) 80%, rgb(55, 44, 29) 90%, rgb(58, 46, 30) 100%)" }}
          >
            <div className="flex items-center justify-center px-[20px] py-[14px]">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[21px] text-[14px] text-center text-white">
                Daftar jadi anggota
              </p>
            </div>
          </button>

          {/* WA Emergency — maroon text link */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-[8px] w-full rounded-full px-[12px] py-[8px] no-underline"
          >
            <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#750d33] text-[12px] whitespace-nowrap">
              Pesan layanan darurat 24 jam via WhatsApp
            </p>
            <svg className="shrink-0" width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M11.9348 4.84337C11.9996 4.67929 12.0166 4.49875 11.9835 4.32457C11.9504 4.15039 11.8687 3.99041 11.7487 3.86487L8.31995 0.274058C8.24088 0.188318 8.14629 0.11993 8.04171 0.0728818C7.93713 0.025834 7.82465 0.00106968 7.71083 3.38947e-05C7.59701 -0.00100189 7.48414 0.0217114 7.37879 0.0668487C7.27344 0.111986 7.17774 0.178643 7.09725 0.262931C7.01677 0.347219 6.95312 0.44745 6.91002 0.557774C6.86692 0.668099 6.84523 0.786308 6.84622 0.905505C6.84721 1.0247 6.87085 1.1425 6.91578 1.25202C6.9607 1.36154 7.02601 1.4606 7.10788 1.54341L9.07429 3.60274H0.857197C0.629854 3.60274 0.411823 3.69732 0.251067 3.86568C0.0903117 4.03403 0 4.26236 0 4.50045C0 4.73853 0.0903117 4.96687 0.251067 5.13522C0.411823 5.30357 0.629854 5.39815 0.857197 5.39815H9.07429L7.10874 7.45659C7.02686 7.5394 6.96156 7.63846 6.91664 7.74798C6.87171 7.8575 6.84806 7.9753 6.84707 8.0945C6.84609 8.21369 6.86778 8.3319 6.91088 8.44223C6.95398 8.55255 7.01763 8.65278 7.09811 8.73707C7.17859 8.82136 7.2743 8.88801 7.37965 8.93315C7.485 8.97829 7.59787 9.001 7.71169 8.99997C7.82551 8.99893 7.93799 8.97417 8.04257 8.92712C8.14715 8.88007 8.24174 8.81168 8.32081 8.72594L11.7496 5.13513C11.829 5.05155 11.8919 4.95241 11.9348 4.84337Z" fill="#750D33" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile Menu — Logged In ─── */
export function MobileMenuLoggedIn({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { navigateWithLoading } = usePageTransition();
  const { logout } = useAuth();
  const waLink =
    "https://wa.me/6281234567890?text=Halo%2C%20saya%20butuh%20layanan%20darurat%20Pulang";

  const menuItems = [
    { label: "Layanan", to: "/layanan" },
    { label: "Cara akses layanan", to: "/cara-klaim" },
    { label: "Misi Pulang", to: "/misi" },
  ];

  return (
    <div
      className={`fixed top-[69px] left-1/2 -translate-x-1/2 w-full max-w-[480px] bottom-0 bg-[#faf8f4] z-40 transition-all duration-300 ease-in-out overflow-y-auto ${open ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-[#f5f0e8]/80 pointer-events-none" />

      <div className="relative flex flex-col px-[16px] pt-[32px] pb-[32px] gap-[16px]">

        {/* MENU badge + line */}
        <div className="flex items-center gap-[8px] w-full">
          <div className="bg-[rgba(189,166,122,0.15)] relative rounded-[100px] shrink-0">
            <div className="flex items-start overflow-clip px-[10px] py-[3px] rounded-[inherit]">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#967240] text-[9px] tracking-[1.2px] whitespace-nowrap">
                MENU
              </p>
            </div>
            <div className="absolute border border-[rgba(189,166,122,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
          <div className="flex-1 h-px bg-[rgba(189,166,122,0.2)]" />
        </div>

        {/* Nav items */}
        <div className="flex flex-col px-[0px]">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { onClose(); navigateWithLoading(item.to); }}
              className="flex items-center gap-[12px] font-['Outfit',sans-serif] font-medium text-[16px] text-left bg-transparent border-none cursor-pointer rounded-[12px] px-[16px] py-[14px] text-[#1f1912] hover:bg-[rgba(189,166,122,0.08)] transition-all duration-200"
            >
              <span className="w-[5px] h-[5px] rounded-full shrink-0 bg-[#bda67a]/40" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Gold divider */}
        <div className="h-px bg-[rgba(189,166,122,0.15)]" />

        {/* Profile Card */}
        <div className="bg-[#1f1912] rounded-[16px] px-[16px] py-[16px] w-full">
          <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#e2d0a8] text-[14px]">
            Joko Susilo Budiman
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col w-full">
          {/* Keanggotaan row */}
          <button
            onClick={() => { onClose(); navigateWithLoading("/member"); }}
            className="flex items-center gap-[12px] w-full bg-transparent border-none cursor-pointer px-[4px] py-[12px] hover:bg-[rgba(189,166,122,0.06)] rounded-[10px] transition-all duration-200"
          >
            {/* icon */}
            <div className="flex items-center justify-center w-[34px] rounded-[10px]">
              <span className="text-[16px]">📋</span>
            </div>
            {/* label */}
            <p className="flex-1 font-['Outfit',sans-serif] font-medium leading-[normal] text-[#1f1912] text-[14px] text-left">
              Keanggotaan
            </p>
            {/* chevron right */}
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path
                  clipRule="evenodd"
                  d={svgChevron.p31f21500}
                  fill="#BDA67A"
                  fillRule="evenodd"
                  transform="scale(0.47) translate(3, 1.5)"
                />
              </svg>
            </div>
          </button>

          <div className="h-px bg-[rgba(189,166,122,0.08)]" />
        </div>

        {/* Bottom: Emergency + Keluar */}
        <div className="flex flex-col gap-[20px] items-center w-full pt-[12px] pb-[8px]">
          {/* Emergency WA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-[6px] no-underline"
          >
            <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#750d33] text-[13px] whitespace-nowrap">
              Pesan layanan darurat 24 jam via WhatsApp
            </p>
            <svg className="shrink-0" width="12" height="10" viewBox="0 0 10.5 10.5" fill="none">
              <path
                d={svgChevron.p36c6cc00}
                fill="#750D33"
                transform="rotate(180, 5.25, 5.25)"
              />
            </svg>
          </a>

          {/* Keluar */}
          <button
            onClick={() => { logout(); onClose(); }}
            className="font-['Outfit',sans-serif] font-medium leading-[normal] text-[#967240] text-[14px] bg-transparent border-none cursor-pointer whitespace-nowrap"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Footer ─── */
export function Footer() {
  const { navigateWithLoading } = usePageTransition();
  const navAction = useNavAction();

  const footerNavLinks = [
    { label: "Layanan", to: "/layanan", hash: "" },
    { label: "Cara akses layanan", to: "/cara-klaim", hash: "" },
  ];

  return (
    <div className="bg-[#1a140f] flex flex-col items-start shrink-0 w-full">
      {/* Divider */}
      <div className="bg-[rgba(255,255,255,0.08)] h-px shrink-0 w-full" />

      {/* Footer Inner */}
      <div className="shrink-0 w-full">
        <div className="overflow-clip size-full">
          <div className="flex flex-col gap-[20px] items-start pb-[24px] pt-[28px] px-[24px] w-full">
            {/* Top Row */}
            <div className="flex items-center justify-between overflow-clip shrink-0 w-full">
              <button
                onClick={() => navigateWithLoading("/")}
                className="h-[40px] relative shrink-0 w-[80px] block bg-transparent border-none cursor-pointer p-0"
              >
                <img
                  alt="Pulang Logo"
                  className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                  src={imgFooterLogo}
                />
              </button>
            </div>

            <div className="flex items-center justify-between shrink-0 w-full">
              <p className="font-['Outfit',sans-serif] font-normal leading-[1.55] text-[11px] text-[rgba(255,255,255,0.25)] w-full">Pulang dijalankan secara amanah oleh Kitabisa. Sejak 2013, Kitabisa telah menjadi platform galang dana dan donasi yang menjembatani 11,7 juta lebih donatur dan 1 juta lebih galang dana di Indonesia.</p>
            </div>

            {/* Inner Divider */}
            <div className="bg-[rgba(255,255,255,0.07)] h-px shrink-0 w-full" />

            {/* Nav Row */}
            <div className="flex h-[20px] items-center justify-start gap-4 overflow-clip shrink-0 w-full">
              {footerNavLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => navAction(link)}
                  className="font-['Outfit',sans-serif] font-medium leading-[normal] text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap bg-transparent border-none cursor-pointer p-0"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Inner Divider 2 */}
            <div className="bg-[rgba(255,255,255,0.07)] h-px shrink-0 w-full" />

            {/* Bottom Row */}
            <div className="flex h-[32px] items-center justify-between overflow-clip shrink-0 w-full">
              <p className="font-['Outfit',sans-serif] font-normal leading-[normal] text-[11px] text-[rgba(255,255,255,0.25)] whitespace-nowrap">
                &copy; 2026 Pulang by Kitabisa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accent Bar */}
      <div className="h-[3px] shrink-0 w-full bg-gradient-to-r from-[#bda67a] via-[#967240] to-[#bda67a]" />
    </div>
  );
}