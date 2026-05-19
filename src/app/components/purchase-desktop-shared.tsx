import imgLogo from "../../assets/Logo/Logo.svg";
import imgLogoLight from "../../assets/Logo/Logo-1.svg";
import imgAccentBar from "../../assets/accent-bar.png";
import imgWhatsapp from "../../assets/socials-icon/ic_whatsapp.svg";
import imgPhone from "../../assets/socials-icon/phone.svg";
import imgInstagram from "../../assets/socials-icon/Instagram.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import imgThreads from "../../assets/socials-icon/Threads_(app)_logo 1.svg";
import { usePageTransition } from "./page-transition";

/* ── Desktop Purchase Navbar ─── */
export function DesktopPurchaseNavbar({ activePath }: { activePath?: string } = {}) {
  const { navigateWithLoading } = usePageTransition();
  const navItems = [
    { label: "Beranda", to: "/" },
    { label: "Cara akses layanan", to: "/cara-akses-layanan" },
    { label: "Partner", to: "/partner" },
    { label: "Manifesto", to: "/manifesto" },
    { label: "FAQ", to: "/faq" },
  ];
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-[#e5e7eb] flex items-center justify-between px-[80px] xl:px-[120px] py-[16px] w-full">
      <button
        onClick={() => navigateWithLoading("/")}
        className="h-[36px] shrink-0 cursor-pointer bg-transparent border-none p-0 flex items-center"
      >
        <img alt="Pulang Logo" className="h-full w-auto object-contain pointer-events-none" src={imgLogo} />
      </button>
      <div className="flex gap-[32px] xl:gap-[40px] items-center">
        {navItems.map((item) => {
          const isActive = activePath === item.to;
          return (
            <button
              key={item.label}
              onClick={() => navigateWithLoading(item.to)}
              className={`font-['Outfit',sans-serif] text-[14px] leading-normal bg-transparent border-none cursor-pointer p-0 whitespace-nowrap ${isActive ? "font-bold text-[#af9160]" : "font-normal text-[#1f1f1f]"}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="flex gap-[12px] items-center">
        <button
          className="font-['Outfit',sans-serif] font-semibold text-[14px] text-[#876747] px-[24px] py-[12px] cursor-pointer"
          style={{ borderRadius: "10px", border: "1px solid #af9160", background: "#f1eee3" }}
        >
          Masuk
        </button>
        <button
          onClick={() => navigateWithLoading("/purchase")}
          className="bg-[#1f1f1f] font-['Outfit',sans-serif] font-semibold text-[14px] text-white px-[24px] py-[12px] rounded-[10px] border-none cursor-pointer whitespace-nowrap"
        >
          Daftar jadi anggota
        </button>
      </div>
    </div>
  );
}

/* ── Desktop Stepper Bar ─── */
export function DesktopStepperBar({ currentStep }: { currentStep: number }) {
  const steps = [
    { number: 1, label: "Detail Layanan" },
    { number: 2, label: "Isi Data Diri" },
    { number: 3, label: "Konfirmasi Pembayaran" },
  ];
  return (
    <div className="bg-white border-b border-[#e5e7eb] flex items-center gap-[8px] px-[80px] xl:px-[120px] py-[16px] w-full">
      {steps.map((step, idx) => (
        <div key={step.number} className="flex items-center gap-[8px]">
          {idx > 0 && <div className="bg-[#e3ddd3] h-[2px] w-[32px] shrink-0" />}
          <div className="flex gap-[10px] items-center">
            {step.number < currentStep ? (
              <div className="flex items-center justify-center rounded-full size-[32px] bg-[#bda67a] shrink-0">
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                  <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ) : step.number === currentStep ? (
              <div className="flex items-center justify-center rounded-full size-[32px] bg-[#1f1912] shrink-0">
                <p className="font-['Inter',sans-serif] font-medium text-[13px] text-white">{step.number}</p>
              </div>
            ) : (
              <div className="flex items-center justify-center rounded-full size-[32px] border border-[#c9bfa8] shrink-0">
                <p className="font-['Inter',sans-serif] font-medium text-[13px] text-[#9ca3af]">{step.number}</p>
              </div>
            )}
            <p className={`font-['Outfit',sans-serif] font-medium text-[14px] whitespace-nowrap ${step.number === currentStep ? "text-[#3a3a3a]" : "text-[#9ca3af]"}`}>
              {step.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Desktop Footer ─── */
export function DesktopFooter() {
  const { navigateWithLoading } = usePageTransition();
  return (
    <div className="bg-[#1a140f] flex flex-col items-start w-full shrink-0">
      <div className="bg-[rgba(255,255,255,0.08)] h-[2px] w-full" />

      <div className="flex gap-[60px] xl:gap-[80px] items-start px-[80px] xl:px-[120px] py-[48px] w-full">
        {/* Left: brand */}
        <div className="flex flex-col gap-[20px] items-start w-[340px] xl:w-[400px] shrink-0">
          <button onClick={() => navigateWithLoading("/")} className="h-[40px] bg-transparent border-none cursor-pointer p-0">
            <img alt="Pulang Logo" className="h-full w-auto object-contain pointer-events-none" src={imgLogoLight} />
          </button>
          <div className="bg-[rgba(255,255,255,0.07)] h-px w-full" />
          <p className="font-['Outfit',sans-serif] font-normal text-[13px] leading-[1.55] text-[rgba(255,255,255,0.4)] m-0">
            Pulang dijalankan secara amanah oleh Kitabisa. Sejak 2013, Kitabisa telah menjadi platform galang dana dan donasi yang menjembatani 11,7 juta lebih donatur dan 1 juta lebih galang dana di Indonesia.
          </p>
          <div className="bg-[rgba(255,255,255,0.07)] h-px w-full" />
          <div className="flex gap-[16px] items-center">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <img src={imgWhatsapp} alt="WhatsApp" className="size-[20px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="tel:+6281234567890">
              <img src={imgPhone} alt="Phone" className="size-[20px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://instagram.com/kitabisacom" target="_blank" rel="noopener noreferrer">
              <img src={imgInstagram} alt="Instagram" className="size-[20px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://threads.net/@kitabisacom" target="_blank" rel="noopener noreferrer">
              <img src={imgThreads} alt="Threads" className="size-[20px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Right: link columns */}
        <div className="flex gap-[48px] xl:gap-[60px] items-start flex-1 min-w-0">
          <div className="flex flex-col gap-[16px] items-start">
            <p className="font-['Outfit',sans-serif] font-semibold text-[#d8be90] text-[11px] tracking-[0.8px] m-0">LAYANAN</p>
            {[
              { label: "Keanggotaan", to: "/purchase" },
              { label: "Pesan Langsung", to: "/" },
              { label: "Manifesto", to: "/manifesto" },
              { label: "Partner", to: "/partner" },
            ].map((item) => (
              <button key={item.label} onClick={() => navigateWithLoading(item.to)}
                className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.4)] text-[13px] bg-transparent border-none cursor-pointer p-0 text-left hover:text-[rgba(255,255,255,0.7)] transition-colors whitespace-nowrap">
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-[16px] items-start">
            <p className="font-['Outfit',sans-serif] font-semibold text-[#d8be90] text-[11px] tracking-[0.8px] m-0">BANTUAN</p>
            {[
              { label: "FAQ", to: "/faq" },
              { label: "Cara akses layanan", to: "/cara-akses-layanan" },
              { label: "Hubungi Call Centre", to: "/" },
            ].map((item) => (
              <button key={item.label} onClick={() => navigateWithLoading(item.to)}
                className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.4)] text-[13px] bg-transparent border-none cursor-pointer p-0 text-left hover:text-[rgba(255,255,255,0.7)] transition-colors whitespace-nowrap">
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-[16px] items-start">
            <p className="font-['Outfit',sans-serif] font-semibold text-[#d8be90] text-[11px] tracking-[0.8px] m-0">LEGAL</p>
            {[
              { label: "Syarat & Ketentuan", href: "https://form.kitabisa.com/syaratketentuanpulang" },
              { label: "Kebijakan Privasi", href: "#" },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.4)] text-[13px] no-underline hover:text-[rgba(255,255,255,0.7)] transition-colors whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.03)] flex items-center justify-center px-[120px] py-[20px] w-full">
        <p className="font-['Outfit',sans-serif] font-normal text-[11px] text-[rgba(255,255,255,0.25)] text-center m-0">
          © 2026 Pulang by Kitabisa.
        </p>
      </div>

      <div className="h-[3px] w-full shrink-0">
        <img src={imgAccentBar} alt="" className="block w-full h-full object-cover pointer-events-none" />
      </div>
    </div>
  );
}
