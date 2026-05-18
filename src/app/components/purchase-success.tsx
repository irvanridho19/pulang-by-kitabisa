import { useState, useEffect } from "react";
import svgPaths from "../../assets/Illustration/Success.svg";
import { useLocation } from "react-router";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { usePageTransition } from "./page-transition";
import { DesktopPurchaseNavbar, DesktopFooter } from "./purchase-desktop-shared";

/* ── Sun Illustration ─── */
function IllustrationSuccess() {
  return (
    <div className="overflow-clip relative rounded-[20px] shrink-0 w-full" style={{ background: "linear-gradient(to bottom, #fffaf1, #fef4e2 50%, #faedd1)" }}>
      <img src={svgPaths} alt="Ilustrasi Success" className="w-full h-auto block" />
    </div>
  );
}

/* ── Feature icon box ─── */
function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="shrink-0 size-[40px] rounded-[10px] flex items-center justify-center" style={{ background: "#f0ebe1" }}>
      {children}
    </div>
  );
}

/* ── Voucher Success Page Content ─── */
function VoucherSuccessContent({ onDaftarkan, onMember, onBeranda, cardVisible, contentVisible }: {
  onDaftarkan: () => void;
  onMember: () => void;
  onBeranda: () => void;
  cardVisible: boolean;
  contentVisible: boolean;
}) {
  const features = [
    {
      title: "Informasi lahan makam",
      desc: "Bantuan mencari lahan makam terdekat dengan domisili.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 10 5a1.5 1.5 0 0 1 0 3.5z" fill="#8a7560"/>
        </svg>
      ),
    },
    {
      title: "Layanan hari kematian",
      desc: "Pengurusan jenazah sesuai tuntunan agama masing-masing, hingga pengantaran ke pemakaman.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="13" width="16" height="5" rx="1" fill="#8a7560"/>
          <rect x="4" y="6" width="3" height="7" rx="0.5" fill="#8a7560"/>
          <rect x="8.5" y="6" width="3" height="7" rx="0.5" fill="#8a7560"/>
          <rect x="13" y="6" width="3" height="7" rx="0.5" fill="#8a7560"/>
          <path d="M1 13h18" stroke="#8a7560" strokeWidth="1" strokeLinecap="round"/>
          <path d="M10 2L2 6h16L10 2z" fill="#8a7560"/>
        </svg>
      ),
    },
    {
      title: "Pasca pemakaman",
      desc: "Pendampingan mengurus akta kematian Disdukcapil, penutupan BPJS, dll.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="8.5" y="10" width="3" height="7" rx="1" fill="#8a7560"/>
          <ellipse cx="10" cy="8" rx="2.5" ry="3.5" fill="#f5c842" opacity="0.85"/>
          <ellipse cx="10" cy="6.5" rx="1.2" ry="1.8" fill="#e8a020" opacity="0.7"/>
          <rect x="8.5" y="8.5" width="3" height="1.5" rx="0.5" fill="#8a7560"/>
        </svg>
      ),
    },
  ];

  return (
    <>
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
        <div className="flex flex-col gap-[20px] p-[20px] w-full">

          {/* Success banner */}
          <div
            className="rounded-[14px] border border-[#a8dfc5] flex items-center gap-[12px] px-[14px] py-[12px] w-full"
            style={{ background: "rgba(168,223,197,0.18)" }}
          >
            <div className="shrink-0 size-[28px] rounded-full bg-[#2e9f60] flex items-center justify-center">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M1 4.5L4.5 8L12 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-[1px] flex-1 min-w-0">
              <p className="font-['Outfit',sans-serif] font-bold leading-[1.4] text-[#1a7a45] text-[14px]">
                Pendaftaran berhasil
              </p>
              <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b7280] text-[13px]">
                Jangan lupa daftarkan orang tuamu
              </p>
            </div>
          </div>

          {/* Heading + subtitle */}
          <div
            className="flex flex-col gap-[10px] w-full transition-all duration-700 ease-out"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[22px]">
              Siapkan layanan kepulangan lengkap untuk orang tuamu
            </p>
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#6b6050] text-[13px]">
              Dari hari kematian hingga pasca pemakaman, kami bantu ringankan beban keluarga.
            </p>
          </div>

          {/* Social proof */}
          <div
            className="rounded-[12px] border border-[#e8e2d6] flex items-center gap-[10px] px-[14px] py-[12px] w-full transition-all duration-700 ease-out"
            style={{
              background: "#faf8f4",
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "60ms",
            }}
          >
            {/* Avatars */}
            <div className="flex items-center shrink-0">
              {[
                { label: "A", bg: "#9a7d45" },
                { label: "R", bg: "#3a2c1a" },
                { label: "S", bg: "#5a4a35" },
                { label: "+178", bg: "#2a2217", small: true },
              ].map((av, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-full border-[2px] border-white shrink-0"
                  style={{
                    width: av.small ? "28px" : "28px",
                    height: "28px",
                    background: av.bg,
                    marginLeft: i > 0 ? "-8px" : "0",
                    zIndex: 4 - i,
                  }}
                >
                  <p className="font-['Outfit',sans-serif] font-bold text-white leading-none" style={{ fontSize: av.small ? "9px" : "11px" }}>
                    {av.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.4] text-[#3a2c1a] text-[12px] flex-1">
              <span className="font-semibold">181 pengguna voucher</span> sudah mendaftarkan orang tuanya
            </p>
          </div>

          {/* Features */}
          <div
            className="flex flex-col w-full transition-all duration-700 ease-out"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "120ms",
            }}
          >
            <p className="font-['Outfit',sans-serif] font-semibold text-[#8a6e3e] text-[11px] tracking-[0.9px] mb-[14px]">
              YANG MEREKA DAPATKAN
            </p>
            <div className="flex flex-col w-full">
              {features.map((f, i) => (
                <div key={i}>
                  <div className="flex gap-[14px] items-start py-[14px] w-full">
                    <FeatureIcon>{f.icon}</FeatureIcon>
                    <div className="flex flex-col gap-[3px] flex-1 min-w-0">
                      <p className="font-['Outfit',sans-serif] font-semibold leading-[1.4] text-[#1f1912] text-[14px]">
                        {f.title}
                      </p>
                      <p className="font-['Outfit',sans-serif] font-normal leading-[1.55] text-[#6b6050] text-[12px]">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                  {i < features.length - 1 && (
                    <div className="w-full h-px" style={{ borderTop: "1.5px dashed rgba(200,191,175,0.5)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "180ms",
            }}
          >
            <button
              onClick={onDaftarkan}
              className="bg-[#1f1912] w-full rounded-[12px] cursor-pointer border-none"
              style={{ boxShadow: "0px 5px 16px 0px rgba(26,18,10,0.22)" }}
            >
              <div className="flex items-center justify-center px-[24px] py-[15px] w-full">
                <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[15px] text-white whitespace-nowrap">
                  Daftarkan orang tua
                </p>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Below-card links */}
      <div
        className="flex flex-col gap-[12px] items-center w-full pt-[4px] pb-[8px] transition-all duration-700 ease-out"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(16px)",
          transitionDelay: "240ms",
        }}
      >
        <button
          onClick={onMember}
          className="bg-transparent border-none cursor-pointer p-0"
        >
          <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#876747] text-[14px] underline underline-offset-[3px]">
            Lihat halaman keanggotaan
          </p>
        </button>
        <button
          onClick={onBeranda}
          className="bg-transparent border-none cursor-pointer p-0"
        >
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#9ca3af] text-[14px]">
            Kembali ke Beranda
          </p>
        </button>
      </div>
    </>
  );
}

/* ── Main Page ─── */
export default function PurchaseSuccessPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateWithLoading } = usePageTransition();
  const location = useLocation();

  const data = (location.state as { target?: string; fromVoucher?: boolean } | null) ?? (() => {
    try {
      const stored = sessionStorage.getItem("pulang_purchase");
      return stored ? JSON.parse(stored) : {};
    } catch { return {}; }
  })();

  const isFamily = data?.target === "family";
  const fromVoucher = data?.fromVoucher ?? false;

  const titleText = isFamily
    ? "Terima kasih sudah membantu keluargamu tenang berpulang 🤍"
    : "Terima kasih sudah membuat persiapan untuk hari kepulanganmu 🤍";

  const subtitleText = isFamily
    ? "Cek kartu anggota keluargamu di halaman keanggotaan. Kami juga mengirimkan kartu yang sama ke keluargamu melalui WhatsApp."
    : "Cek kartu anggotamu di halaman keanggotaan. Kami juga mengirimkan kartu yang sama ke kontak daruratmu melalui WhatsApp.";

  const [cardVisible, setCardVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t1 = setTimeout(() => setCardVisible(true), 100);
    const t2 = setTimeout(() => setContentVisible(true), 380);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const features = [
    {
      title: "Informasi lahan makam",
      desc: "Bantuan mencari lahan makam terdekat dengan domisili.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 10 5a1.5 1.5 0 0 1 0 3.5z" fill="#8a7560"/>
        </svg>
      ),
    },
    {
      title: "Layanan hari kematian",
      desc: "Pengurusan jenazah sesuai tuntunan agama masing-masing, hingga pengantaran ke pemakaman.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="13" width="16" height="5" rx="1" fill="#8a7560"/>
          <rect x="4" y="6" width="3" height="7" rx="0.5" fill="#8a7560"/>
          <rect x="8.5" y="6" width="3" height="7" rx="0.5" fill="#8a7560"/>
          <rect x="13" y="6" width="3" height="7" rx="0.5" fill="#8a7560"/>
          <path d="M1 13h18" stroke="#8a7560" strokeWidth="1" strokeLinecap="round"/>
          <path d="M10 2L2 6h16L10 2z" fill="#8a7560"/>
        </svg>
      ),
    },
    {
      title: "Pasca pemakaman",
      desc: "Pendampingan mengurus akta kematian Disdukcapil, penutupan BPJS, dll.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="8.5" y="10" width="3" height="7" rx="1" fill="#8a7560"/>
          <ellipse cx="10" cy="8" rx="2.5" ry="3.5" fill="#f5c842" opacity="0.85"/>
          <ellipse cx="10" cy="6.5" rx="1.2" ry="1.8" fill="#e8a020" opacity="0.7"/>
          <rect x="8.5" y="8.5" width="3" height="1.5" rx="0.5" fill="#8a7560"/>
        </svg>
      ),
    },
  ];

  const avatars = [
    { label: "A", bg: "#9a7d45" },
    { label: "R", bg: "#3a2c1a" },
    { label: "S", bg: "#5a4a35" },
    { label: "+178", bg: "#2a2217", small: true },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════
          DESKTOP  (hidden on mobile)
      ══════════════════════════════════════ */}
      <div className="hidden md:flex flex-col min-h-screen" style={{ background: fromVoucher ? "#F9F7F3" : "linear-gradient(to bottom, #fffdf9, #f5f0e8)" }}>
        <DesktopPurchaseNavbar />

        <div className="flex-1 flex justify-center items-start py-[56px] px-[40px]">

          {fromVoucher ? (
            /* ── Voucher desktop ── */
            <div className="w-full max-w-[1024px] flex flex-col gap-[20px]">

              {/* 2-column card */}
              <div
                className="bg-white rounded-[24px] w-full flex overflow-hidden transition-all duration-700 ease-out"
                style={{
                  boxShadow: "0px 8px 32px 0px rgba(46,33,20,0.08)",
                  border: "1px solid rgba(189,166,122,0.2)",
                  opacity: cardVisible ? 1 : 0,
                  transform: cardVisible ? "translateY(0)" : "translateY(32px)",
                }}
              >
                {/* Left column */}
                <div className="flex flex-col gap-[28px] p-[48px] flex-1 min-w-0">

                  {/* Success banner */}
                  <div
                    className="rounded-[14px] border border-[#a8dfc5] flex items-center gap-[14px] px-[16px] py-[14px]"
                    style={{ background: "rgba(168,223,197,0.18)" }}
                  >
                    <div className="shrink-0 size-[32px] rounded-full bg-[#2e9f60] flex items-center justify-center">
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-[1px] flex-1 min-w-0">
                      <p className="font-['Outfit',sans-serif] font-bold leading-[1.4] text-[#1a7a45] text-[16px]">
                        Pendaftaran berhasil
                      </p>
                      <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b7280] text-[14px]">
                        Jangan lupa daftarkan orang tuamu
                      </p>
                    </div>
                  </div>

                  {/* Heading + subtitle */}
                  <div
                    className="flex flex-col gap-[12px] transition-all duration-700 ease-out"
                    style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? "translateY(0)" : "translateY(16px)" }}
                  >
                    <p className="font-['Lora',serif] font-bold leading-[1.25] text-[#1f1912] text-[32px]">
                      Siapkan layanan kepulangan lengkap untuk orang tuamu
                    </p>
                    <p className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[#6b6050] text-[15px]">
                      Dari hari kematian hingga pasca pemakaman, kami bantu ringankan beban keluarga.
                    </p>
                  </div>

                  {/* Social proof */}
                  <div
                    className="rounded-[12px] border border-[#e8e2d6] flex items-center gap-[12px] px-[16px] py-[14px] transition-all duration-700 ease-out"
                    style={{
                      background: "#faf8f4",
                      opacity: contentVisible ? 1 : 0,
                      transform: contentVisible ? "translateY(0)" : "translateY(16px)",
                      transitionDelay: "60ms",
                    }}
                  >
                    <div className="flex items-center shrink-0">
                      {avatars.map((av, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center rounded-full border-[2px] border-white shrink-0"
                          style={{ width: "32px", height: "32px", background: av.bg, marginLeft: i > 0 ? "-9px" : "0", zIndex: 4 - i }}
                        >
                          <p className="font-['Outfit',sans-serif] font-bold text-white leading-none" style={{ fontSize: av.small ? "10px" : "12px" }}>
                            {av.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="font-['Outfit',sans-serif] font-normal leading-[1.4] text-[#3a2c1a] text-[13px] flex-1">
                      <span className="font-semibold">181 pengguna voucher</span> sudah mendaftarkan orang tuanya
                    </p>
                  </div>

                  {/* CTA */}
                  <div
                    className="flex flex-col gap-[14px] transition-all duration-700 ease-out mt-auto"
                    style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? "translateY(0)" : "translateY(16px)", transitionDelay: "120ms" }}
                  >
                    <button
                      onClick={() => navigateWithLoading("/purchase", { state: { prefillTarget: "family" } })}
                      className="bg-[#1f1912] w-full rounded-[12px] cursor-pointer border-none"
                      style={{ boxShadow: "0px 5px 16px 0px rgba(26,18,10,0.22)" }}
                    >
                      <div className="flex items-center justify-center px-[24px] py-[16px] w-full">
                        <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[16px] text-white whitespace-nowrap">
                          Daftarkan orang tua
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Vertical divider */}
                <div className="w-px shrink-0 self-stretch" style={{ background: "rgba(200,191,175,0.35)" }} />

                {/* Right column — features */}
                <div
                  className="flex flex-col gap-[24px] p-[48px] w-[400px] shrink-0 transition-all duration-700 ease-out"
                  style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? "translateY(0)" : "translateY(16px)", transitionDelay: "80ms" }}
                >
                  <p className="font-['Outfit',sans-serif] font-semibold text-[#8a6e3e] text-[12px] tracking-[0.9px]">
                    YANG MEREKA DAPATKAN
                  </p>
                  <div className="flex flex-col">
                    {features.map((f, i) => (
                      <div key={i}>
                        <div className="flex gap-[16px] items-start py-[16px]">
                          <div className="shrink-0 size-[44px] rounded-[12px] flex items-center justify-center" style={{ background: "#f0ebe1" }}>
                            {f.icon}
                          </div>
                          <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                            <p className="font-['Outfit',sans-serif] font-semibold leading-[1.4] text-[#1f1912] text-[16px]">
                              {f.title}
                            </p>
                            <p className="font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#6b6050] text-[14px]">
                              {f.desc}
                            </p>
                          </div>
                        </div>
                        {i < features.length - 1 && (
                          <div className="w-full h-px" style={{ borderTop: "1.5px dashed rgba(200,191,175,0.5)" }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Below-card links */}
              <div
                className="flex items-center justify-center gap-[32px] transition-all duration-700 ease-out"
                style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? "translateY(0)" : "translateY(16px)", transitionDelay: "200ms" }}
              >
                <button onClick={() => navigateWithLoading("/member")} className="bg-transparent border-none cursor-pointer p-0">
                  <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#876747] text-[15px] underline underline-offset-[3px]">
                    Lihat halaman keanggotaan
                  </p>
                </button>
                <div className="w-px h-[16px] bg-[#d1cfc9]" />
                <button onClick={() => navigateWithLoading("/")} className="bg-transparent border-none cursor-pointer p-0">
                  <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#9ca3af] text-[15px]">
                    Kembali ke Beranda
                  </p>
                </button>
              </div>
            </div>

          ) : (
            /* ── Regular desktop: centered 480px, same content ── */
            <div className="w-full max-w-[480px]">
              <div
                className="bg-white rounded-[24px] w-full transition-all duration-700 ease-out"
                style={{
                  boxShadow: "0px 6px 20px 0px rgba(46,33,20,0.09)",
                  border: "1px solid rgba(189,166,122,0.18)",
                  opacity: cardVisible ? 1 : 0,
                  transform: cardVisible ? "translateY(0)" : "translateY(32px)",
                }}
              >
                <div className="flex flex-col gap-[24px] items-center p-[32px] w-full">
                  <IllustrationSuccess />
                  <div
                    className="flex flex-col gap-[16px] items-center text-center w-full transition-all duration-700 ease-out"
                    style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? "translateY(0)" : "translateY(20px)" }}
                  >
                    <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#4b5563] text-[17px] w-full">
                      {titleText}
                    </p>
                    <p className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[#9ca3af] text-[14px] w-full">
                      {subtitleText}
                    </p>
                  </div>
                  <div
                    className="flex flex-col gap-[12px] items-start w-full transition-all duration-700 ease-out"
                    style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "80ms" }}
                  >
                    <button
                      className="bg-[#1f1912] w-full rounded-[12px] cursor-pointer border-none"
                      style={{ boxShadow: "0px 5px 16px 0px rgba(26,18,10,0.22)" }}
                      onClick={() => navigateWithLoading("/member")}
                    >
                      <div className="flex items-center justify-center px-[24px] py-[15px] w-full">
                        <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[15px] text-white whitespace-nowrap">
                          Lihat halaman keanggotaan
                        </p>
                      </div>
                    </button>
                    <button
                      className="bg-white w-full rounded-[12px] cursor-pointer relative border-none"
                      onClick={() => navigateWithLoading("/")}
                    >
                      <div aria-hidden="true" className="absolute inset-0 rounded-[12px] pointer-events-none" style={{ border: "1.5px solid rgba(189,166,122,0.55)" }} />
                      <div className="flex items-center justify-center px-[24px] py-[15px] w-full">
                        <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#111928] text-[15px] whitespace-nowrap">
                          Kembali ke Beranda
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        <DesktopFooter />
      </div>

      {/* ══════════════════════════════════════
          MOBILE  (hidden on md+)
      ══════════════════════════════════════ */}
      <div className="md:hidden min-h-screen flex justify-center" style={{ background: "linear-gradient(to bottom, #fffdf9, #f5f0e8)" }}>
        <div className="w-full max-w-[480px] relative flex flex-col min-h-screen">
          <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

          <main className="flex flex-col flex-1 w-full px-[20px] pt-[24px] pb-[32px] gap-[16px]">
            {fromVoucher ? (
              <VoucherSuccessContent
                cardVisible={cardVisible}
                contentVisible={contentVisible}
                onDaftarkan={() => navigateWithLoading("/purchase", { state: { prefillTarget: "family" } })}
                onMember={() => navigateWithLoading("/member")}
                onBeranda={() => navigateWithLoading("/")}
              />
            ) : (
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
                  <IllustrationSuccess />
                  <div
                    className="flex flex-col gap-[16px] items-center text-center w-full transition-all duration-700 ease-out"
                    style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? "translateY(0)" : "translateY(20px)" }}
                  >
                    <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#4b5563] text-[16px] w-full">
                      {titleText}
                    </p>
                    <p className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[#9ca3af] text-[13px] w-full">
                      {subtitleText}
                    </p>
                  </div>
                  <div
                    className="flex flex-col gap-[12px] items-start w-full transition-all duration-700 ease-out"
                    style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "80ms" }}
                  >
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
                    <button
                      className="bg-white w-full rounded-[12px] cursor-pointer relative border-none"
                      onClick={() => navigateWithLoading("/")}
                    >
                      <div aria-hidden="true" className="absolute inset-0 rounded-[12px] pointer-events-none" style={{ border: "1.5px solid rgba(189,166,122,0.55)" }} />
                      <div className="flex items-center justify-center px-[24px] py-[14px] w-full">
                        <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#111928] text-[14px] whitespace-nowrap">
                          Kembali ke Beranda
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>

          <Footer />
        </div>
      </div>

    </div>
  );
}