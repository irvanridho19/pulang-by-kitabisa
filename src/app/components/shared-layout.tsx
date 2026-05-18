import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import imgImageLogo from "../../assets/Logo/Logo.svg";
import imgFooterLogo from "../../assets/Logo/Logo-1.svg";
import instagramIcon from "../../assets/socials-icon/Instagram.svg";
import phoneIcon from "../../assets/socials-icon/phone.svg";
import whatsappIcon from "../../assets/socials-icon/ic_whatsapp.svg";
import threadsIcon from "../../assets/socials-icon/Threads_(app)_logo 1.svg";
import { usePageTransition } from "./page-transition";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "./auth-context";
import { th } from "date-fns/locale";

/* ── Nav Links Config ─── */
export const navLinks = [
  { label: "Layanan", to: "/layanan", hash: "", href: "" },
  { label: "Cara akses layanan", to: "/cara-akses-layanan", hash: "", href: "" },
  { label: "Partner", to: "/partner", hash: "", href: "" },
  { label: "Manifesto", to: "/manifesto", hash: "", href: "" },
  { label: "FAQ", to: "/faq", hash: "", href: "" },
];

/** Scroll to a hash target, or navigate to landing page with hash */
export function useNavAction() {
  const { navigateWithLoading } = usePageTransition();
  const location = useLocation();

  return (link: (typeof navLinks)[number]) => {
    if (link.hash && location.pathname === "/") {
      const el = document.querySelector(link.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (link.hash) {
      navigateWithLoading("/" + link.hash);
    } else {
      navigateWithLoading(link.to);
    }
  };
}

/* ── Navbar ─── */
export function NavbarMobileHeader({ onMenuToggle, menuOpen }: { onMenuToggle: () => void; menuOpen: boolean }) {
  const { navigateWithLoading } = usePageTransition();
  const { isLoggedIn, login } = useAuth();
  return (
    <div className="sticky top-0 bg-white flex items-center justify-between px-[16px] py-[16px] w-full z-50 border-b border-[#e5e7eb]">
      <button onClick={() => navigateWithLoading("/")} className="h-[44px] shrink-0 cursor-pointer bg-transparent border-none p-0 flex items-center">
        <img alt="Pulang Logo" className="h-full w-auto object-contain pointer-events-none" src={imgImageLogo} />
      </button>
      <div className="flex items-center gap-[10px]">
        {isLoggedIn ? (
          <div
            className="flex items-center justify-center p-[4px] cursor-pointer"
            style={{ borderRadius: "999px", border: "1px solid rgba(175,144,59,0.40)", background: "#FCF6E5" }}
          >
            <div className="size-[32px] rounded-full bg-[#AF9160] flex items-center justify-center">
              <span className="font-['Outfit',sans-serif] font-bold text-[13px] text-white leading-none">J</span>
            </div>
          </div>
        ) : (
          <button
            onClick={login}
            className="h-[36px] px-[16px] flex items-center font-['Outfit',sans-serif] font-semibold text-[13px] text-[#1f1912] whitespace-nowrap cursor-pointer"
            style={{ borderRadius: "10px", border: "1px solid #AF9160", background: "#F1EEE3" }}
          >
            Masuk
          </button>
        )}
        <button onClick={onMenuToggle} className="relative shrink-0 size-[24px] cursor-pointer bg-transparent border-none p-0 flex items-center justify-center">
          {menuOpen ? (
            <X className="size-[22px] text-[#3A3A3A]" strokeWidth={2} />
          ) : (
            <Menu className="size-[22px] text-[#3A3A3A]" strokeWidth={2} />
          )}
        </button>
      </div>
    </div>
  );
}

/* ── Mobile Menu — Logged Out ─── */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { navigateWithLoading } = usePageTransition();
  const { isLoggedIn, login } = useAuth();
  const waLink = "https://wa.me/6281234567890?text=Halo%2C%20saya%20butuh%20layanan%20langsung%20Pulang";

  if (isLoggedIn) {
    return <MobileMenuLoggedIn open={open} onClose={onClose} />;
  }

  return (
    <div
      className={`fixed top-[69px] left-1/2 -translate-x-1/2 w-full max-w-[480px] bottom-0 bg-[#faf8f4] z-40 transition-all duration-300 ease-in-out ${open ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-[#f5f0e8]/80 pointer-events-none" />

      <div className="relative flex flex-col px-[16px] pt-[32px] pb-[24px]">
        {/* Section label */}
        <div className="flex items-center gap-[10px] mb-[16px]">
          <div className="bg-[rgba(189,166,122,0.15)] relative rounded-[100px] shrink-0">
            <div className="flex items-start px-[10px] py-[3px] rounded-[inherit]">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#967240] text-[9px] tracking-[1.2px] whitespace-nowrap">
                MENU
              </p>
            </div>
            <div className="absolute border border-[rgba(189,166,122,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
          <div className="flex-1 h-px bg-[rgba(189,166,122,0.2)]" />
        </div>

        {/* Nav items */}
        <div className="flex flex-col">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => { onClose(); item.href ? window.open(item.href, "_blank", "noopener,noreferrer") : navigateWithLoading(item.to); }}
              className="flex items-center gap-[12px] font-['Outfit',sans-serif] font-medium text-[16px] text-left bg-transparent border-none cursor-pointer rounded-[12px] px-[16px] py-[14px] text-[#1f1912] hover:bg-[rgba(189,166,122,0.08)] transition-all duration-200"
            >
              <span className="w-[5px] h-[5px] rounded-full shrink-0 bg-[#bda67a]/40" />
              {item.label}
            </button>
          ))}
        </div>

        <div className="h-px bg-[rgba(189,166,122,0.15)] my-[16px]" />

        {/* CTA Buttons */}
        <div className="flex flex-col gap-[16px] items-center w-full">
          <button
            onClick={() => { login(); }}
            className="bg-white rounded-[12px] w-full cursor-pointer border border-[#af9160] border-solid block shadow-[0px_4px_12px_0px_rgba(31,25,18,0.15)]"
          >
            <div className="flex items-center justify-center px-[20px] py-[14px]">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[21px] text-[14px] text-center text-[#1f1f1f]">
                Masuk
              </p>
            </div>
          </button>

          <button
            onClick={() => { onClose(); navigateWithLoading("/purchase"); }}
            className="rounded-[12px] w-full cursor-pointer border-none p-0 block shadow-[0px_4px_12px_0px_rgba(31,25,18,0.15)] bg-gradient-to-r from-[#1f1912] to-[#3a2e1e]"
          >
            <div className="flex items-center justify-center px-[20px] py-[14px]">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[21px] text-[14px] text-center text-white">
                Daftar jadi anggota
              </p>
            </div>
          </button>

          {/* WA Emergency CTA (Updated wording & style) */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex flex-col items-center justify-center gap-[4px] w-full rounded-full py-[8px] no-underline mt-[8px]"
          >
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#1f1f1f] text-[13px] text-center">
              Belum jadi anggota dan butuh layanan cepat?
            </p>
            <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#750d33] text-[15px] text-center underline decoration-solid">
              Pesan layanan langsung 24 jam
            </p>
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
  const waLink = "https://wa.me/6281234567890?text=Halo%2C%20saya%20butuh%20layanan%20langsung%20Pulang";

  return (
    <div
      className={`fixed top-[69px] left-1/2 -translate-x-1/2 w-full max-w-[480px] bottom-0 bg-[#faf8f4] z-40 transition-all duration-300 ease-in-out overflow-y-auto ${open ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-[#f5f0e8]/80 pointer-events-none" />

      <div className="relative flex flex-col px-[16px] pt-[32px] pb-[32px] gap-[16px]">
        {/* MENU badge + line */}
        <div className="flex items-center gap-[8px] w-full">
          <div className="bg-[rgba(189,166,122,0.15)] relative rounded-[100px] shrink-0">
            <div className="flex items-start px-[10px] py-[3px] rounded-[inherit]">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#967240] text-[9px] tracking-[1.2px] whitespace-nowrap">
                MENU
              </p>
            </div>
            <div className="absolute border border-[rgba(189,166,122,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
          <div className="flex-1 h-px bg-[rgba(189,166,122,0.2)]" />
        </div>

        {/* Nav items */}
        <div className="flex flex-col">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => { onClose(); item.href ? window.open(item.href, "_blank", "noopener,noreferrer") : navigateWithLoading(item.to); }}
              className="flex items-center gap-[12px] font-['Outfit',sans-serif] font-medium text-[16px] text-left bg-transparent border-none cursor-pointer rounded-[12px] px-[16px] py-[14px] text-[#1f1912] hover:bg-[rgba(189,166,122,0.08)] transition-all duration-200"
            >
              <span className="w-[5px] h-[5px] rounded-full shrink-0 bg-[#bda67a]/40" />
              {item.label}
            </button>
          ))}
        </div>

        <div className="h-px bg-[rgba(189,166,122,0.15)]" />

        {/* Profile Card */}
        <div className="bg-[#1f1912] rounded-[16px] px-[16px] py-[16px] w-full">
          <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#e2d0a8] text-[14px]">
            Joko Susilo Budiman
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col w-full">
          <button
            onClick={() => { onClose(); navigateWithLoading("/member"); }}
            className="flex items-center gap-[12px] w-full bg-transparent border-none cursor-pointer px-[4px] py-[12px] hover:bg-[rgba(189,166,122,0.06)] rounded-[10px] transition-all duration-200"
          >
            <div className="flex items-center justify-center w-[34px] rounded-[10px]">
              <span className="text-[16px]">📋</span>
            </div>
            <p className="flex-1 font-['Outfit',sans-serif] font-medium leading-[normal] text-[#1f1912] text-[14px] text-left">
              Keanggotaan
            </p>
            <ChevronRight className="shrink-0 size-[16px] text-[#BDA67A]" />
          </button>

          <div className="h-px bg-[rgba(189,166,122,0.08)]" />
        </div>

        {/* Bottom: Emergency + Keluar */}
        <div className="flex flex-col gap-[20px] items-center w-full pt-[12px] pb-[8px]">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-[6px] no-underline"
          >
            <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#750d33] text-[13px] whitespace-nowrap">
              Pesan layanan langsung 24 jam via WhatsApp
            </p>
            <ArrowRight className="shrink-0 size-[12px] text-[#750D33]" />
          </a>

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

  return (
    <div className="bg-[#1a140f] flex flex-col items-start shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0.08)] h-px shrink-0 w-full" />
      <div className="shrink-0 w-full">
        <div className="overflow-clip size-full">
          <div className="flex flex-col gap-[20px] items-start pb-[24px] pt-[28px] px-[24px] w-full">
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

            <div className="bg-[rgba(255,255,255,0.07)] h-px shrink-0 w-full" />

            <div className="flex h-[24px] items-center justify-start gap-[20px] overflow-clip shrink-0 w-full">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.55)] hover:text-white transition-colors duration-200">
                <img className="size-[20px]" src={whatsappIcon} alt="WhatsApp" />
              </a>
              <a href="tel:+6281234567890" className="text-[rgba(255,255,255,0.55)] hover:text-white transition-colors duration-200">
                <img className="size-[20px]" src={phoneIcon} alt="Phone" />
              </a>
              <a href="https://instagram.com/kitabisacom" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.55)] hover:text-white transition-colors duration-200">
                <img className="size-[20px]" src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://threads.com/kitabisacom" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.55)] hover:text-white transition-colors duration-200">
                <img className="size-[20px]" src={threadsIcon} alt="Threads" />
              </a>
            </div>

            <div className="bg-[rgba(255,255,255,0.07)] h-px shrink-0 w-full" />

            <a
              href="https://form.kitabisa.com/syaratketentuanpulang"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Outfit',sans-serif] font-semibold text-[13px] text-[rgba(255,255,255,0.7)] no-underline hover:text-white transition-colors duration-200"
            >
              Syarat &amp; Ketentuan
            </a>

            <div className="bg-[rgba(255,255,255,0.07)] h-px shrink-0 w-full" />

            <div className="flex h-[32px] items-center justify-between overflow-clip shrink-0 w-full">
              <p className="font-['Outfit',sans-serif] font-normal leading-[normal] text-[11px] text-[rgba(255,255,255,0.25)] whitespace-nowrap">
                &copy; 2026 Pulang by Kitabisa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[3px] shrink-0 w-full bg-gradient-to-r from-[#bda67a] via-[#967240] to-[#bda67a]" />
    </div>
  );
}

/* ── CTA Anggota Section ─── */
const ctaArrowPath = "M11.9348 4.84337C11.9996 4.67929 12.0166 4.49875 11.9835 4.32457C11.9504 4.15039 11.8687 3.99041 11.7487 3.86487L8.31995 0.274058C8.24088 0.188318 8.14629 0.11993 8.04171 0.0728818C7.93713 0.025834 7.82465 0.00106968 7.71083 3.38947e-05C7.59701 -0.00100189 7.48414 0.0217114 7.37879 0.0668487C7.27344 0.111986 7.17774 0.178643 7.09725 0.262931C7.01677 0.347219 6.95312 0.44745 6.91002 0.557774C6.86692 0.668099 6.84523 0.786308 6.84622 0.905505C6.84721 1.0247 6.87085 1.1425 6.91578 1.25202C6.9607 1.36154 7.02601 1.4606 7.10788 1.54341L9.07429 3.60274H0.857197C0.629854 3.60274 0.411823 3.69732 0.251067 3.86568C0.0903117 4.03403 0 4.26236 0 4.50045C0 4.73853 0.0903117 4.96687 0.251067 5.13522C0.411823 5.30357 0.629854 5.39815 0.857197 5.39815H9.07429L7.10874 7.45659C7.02686 7.5394 6.96156 7.63846 6.91664 7.74798C6.87171 7.8575 6.84806 7.9753 6.84707 8.0945C6.84609 8.21369 6.86778 8.3319 6.91088 8.44223C6.95398 8.55255 7.01763 8.65278 7.09811 8.73707C7.17859 8.82136 7.2743 8.88801 7.37965 8.93315C7.485 8.97829 7.59787 9.001 7.71169 8.99997C7.82551 8.99893 7.93799 8.97417 8.04257 8.92712C8.14715 8.88007 8.24174 8.81168 8.32081 8.72594L11.7496 5.13513C11.829 5.05155 11.8919 4.95241 11.9348 4.84337Z";

export function SectionCtaAnggota() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1f1912] flex flex-col items-start w-full">
      <div className="bg-[rgba(255,255,255,0.08)] h-px w-full" />

      <div className="flex flex-col gap-[16px] items-center px-[24px] py-[36px] w-full">
        <p className="font-['Lora',serif] font-bold leading-[31px] text-[#e2d0a8] text-[22px] text-center w-full">
          Siapkan sekarang agar tenang berpulang
        </p>

        <div className="flex flex-col gap-[4px] items-center w-full">
          <p className="font-['Outfit',sans-serif] font-bold leading-[1.6] text-[#f1eee3] text-[13.5px] text-center w-full">
            Iuran mulai dari Rp200.000/tahun
          </p>
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.4] text-[11px] text-center text-[rgba(255,255,255,0.45)]">
            *Iuran disesuaikan dengan usia saat mendaftar.
          </p>
        </div>

        <button
          onClick={() => navigate("/purchase")}
          className="w-full rounded-[12px] border-none cursor-pointer shadow-[0px_6px_20px_0px_rgba(168,137,88,0.4)]"
          style={{ background: "linear-gradient(to right, #d8be90, #a88958)" }}
        >
          <div className="flex items-center justify-center px-[24px] py-[14px] w-full">
            <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#1f1912] text-[15px] text-center whitespace-nowrap">
              Daftar jadi anggota
            </p>
          </div>
        </button>

        <button
          onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
          className="flex gap-[8px] items-center justify-center bg-transparent border-none cursor-pointer w-full py-[8px]"
        >
          <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#fee5f2] text-[12px] whitespace-nowrap">
            Pesan layanan langsung 24 jam
          </p>
          <div className="shrink-0 size-[12px] relative">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
              <path d={ctaArrowPath} fill="#FEE5F2" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}