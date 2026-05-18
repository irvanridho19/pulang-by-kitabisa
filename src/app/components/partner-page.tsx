import { useState } from "react";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { usePageTransition } from "./page-transition";
import { DesktopFooter } from "./purchase-desktop-shared";
import imgKeluarga from "../../assets/Illustration/Keluarga.svg";
import imgLogo from "../../assets/Logo/Logo.svg";
import imgCheckCircle from "../../assets/check-circle.svg";

/* ── Shared data ─── */
const layananItems = [
  "Pemandian jenazah",
  "Pengkafanan sesuai syariat (khusus prosesi Islam)",
  "Kain kafan (sabun, kamper, dan parfum) (khusus prosesi Islam)",
  "Tata rias jenazah (khusus prosesi non Islam)",
  "Pemberian formalin (khusus prosesi non Islam)",
  "Kain penutup peti, sarung tangan & kaos kaki (khusus prosesi non Islam)",
  "Mobil jenazah elektrik (luas, nyaman, bebas emisi dan suara)",
];

/* ─────────────────────────────────────────────────
   MOBILE COMPONENTS
───────────────────────────────────────────────── */

function CheckItemMobile({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[8px] w-full">
      <img src={imgCheckCircle} alt="" className="shrink-0 size-[16px]" />
      <p className="flex-1 font-['Outfit',sans-serif] font-normal text-[12px] leading-[18px] text-[#707070]">{text}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   DESKTOP COMPONENTS
───────────────────────────────────────────────── */

function DesktopNavbar() {
  const { navigateWithLoading } = usePageTransition();

  const navItems = [
    { label: "Beranda", to: "/" },
    { label: "Cara akses layanan", to: "/cara-akses-layanan" },
    { label: "Partner", to: "/partner", active: true },
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
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigateWithLoading(item.to)}
            className={`font-['Outfit',sans-serif] text-[14px] leading-normal bg-transparent border-none cursor-pointer p-0 whitespace-nowrap ${
              item.active ? "font-bold text-[#af9160]" : "font-normal text-[#1f1f1f]"
            }`}
          >
            {item.label}
          </button>
        ))}
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

function CheckItemDesktop({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex gap-[8px] items-center py-[12px]">
      <img src={imgCheckCircle} alt="" className="shrink-0 size-[16px]" />
      <div className="flex flex-col gap-[2px]">
        <p className="font-['Outfit',sans-serif] font-medium text-[#1f1912] text-[16px] leading-[1.4]">{title}</p>
        {subtitle && (
          <p className="font-['Outfit',sans-serif] font-normal text-[#8b8176] text-[12px] leading-normal">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function DesktopHero({ code, setCode, onUse }: { code: string; setCode: (v: string) => void; onUse: () => void }) {
  return (
    <div
      className="flex gap-[60px] xl:gap-[80px] items-center px-[80px] xl:px-[120px] py-[120px] w-full"
      style={{ background: "radial-gradient(ellipse at center, rgba(252,241,217,0.9) 0%, rgba(255,255,255,1) 75%)" }}
    >
      {/* Left column */}
      <div className="flex flex-col gap-[32px] items-start w-[480px] xl:w-[560px] shrink-0">
        <div>
          <h1 className="font-['Lora',serif] font-bold text-[#1f1912] text-[36px] xl:text-[44px] leading-[1.2] m-0">
            Masukkan kode voucher untuk dapatkan layanan
          </h1>
          <span className="font-['Lora',serif] font-bold text-[#876747] text-[36px] xl:text-[44px] leading-[1.2]">
            GRATIS
          </span>
        </div>

        {/* <p className="font-['Outfit',sans-serif] font-normal text-[#6b6258] text-[16px] leading-[1.6] m-0">
          Keanggotaan berlaku 1 tahun. Siapkan kepulanganmu sekarang.
        </p> */}

        {/* Voucher card */}
        <div
          className="flex flex-col gap-[12px] p-[24px] rounded-[16px] w-full"
          style={{
            background: "linear-gradient(to right, #f1eee3, #e3dbc5)",
            border: "2px solid rgba(175,144,96,0.45)",
            boxShadow: "0px 8px 28px 0px rgba(175,144,96,0.14)",
          }}
        >
          <p className="font-['Outfit',sans-serif] font-semibold text-[11px] tracking-[1.2px] text-[#8a6d3b] m-0">
            MASUKKAN KODE VOUCHER
          </p>
          <div className="flex gap-[10px] items-center">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="Contoh: VOUCHERPULANG"
              className="flex-1 h-[52px] rounded-[12px] px-[16px] font-['Outfit',sans-serif] text-[14px] text-[#1f1912] outline-none"
              style={{
                background: "#fdfbf6",
                border: "1.5px solid rgba(175,144,96,0.35)",
              }}
            />
            <button
              type="button"
              onClick={onUse}
              disabled={!code.trim()}
              className="h-[52px] px-[24px] rounded-[12px] bg-[#1f1912] border-none cursor-pointer font-['Outfit',sans-serif] font-semibold text-[15px] text-[#fcf0d9] whitespace-nowrap disabled:bg-[#989898] disabled:text-[#d8d8d8] disabled:cursor-not-allowed"
            >
              Gunakan
            </button>
          </div>
        </div>
      </div>

      {/* Right column — service card */}
      <div
        className="flex-1 min-w-0 bg-white rounded-[20px] p-[32px] flex flex-col gap-[16px]"
        style={{
          border: "1px solid rgba(175,144,96,0.18)",
          boxShadow: "0px 4px 20px 0px rgba(45,33,20,0.08)",
        }}
      >
        <p className="font-['Lora',serif] font-semibold text-[#1f1912] text-[24px] leading-normal m-0">
          Layanan gratis yang kamu dapatkan
        </p>

        <div className="h-px w-full" style={{ background: "rgba(175,144,96,0.12)" }} />

        {/* Service icon row */}
        <div className="flex gap-[12px] items-center">
          <div
            className="shrink-0 size-[52px] rounded-full flex items-center justify-center"
            style={{ background: "#f1eee3" }}
          >
            <img src={imgKeluarga} alt="" className="size-[36px] object-contain" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[18px] leading-[1.4] m-0">
              Layanan Hari Kematian
            </p>
            <p className="font-['Outfit',sans-serif] font-normal text-[#6b6258] text-[14px] leading-[1.5] m-0">
              Pengurusan jenazah hingga pengantaran ke pemakaman.
            </p>
          </div>
        </div>

        <div className="h-px w-full" style={{ background: "rgba(175,144,96,0.12)" }} />

        {/* Service items grid */}
        <div className="grid grid-cols-2 gap-x-[24px]">
          <CheckItemDesktop title="Mobil jenazah elektrik" subtitle="Luas, nyaman, bebas emisi dan suara" />
          {/* <CheckItemDesktop title="Pemandian jenazah" subtitle="Dilakukan oleh tim profesional" /> */}
          <CheckItemDesktop title="Pengurusan jenazah" subtitle="Prosesi sesuai agama masing-masing" />
          {/* <CheckItemDesktop title="Pengkafanan / pemasangan peti" subtitle="Sesuai prosesi kepulangan" />
          <CheckItemDesktop title="Ambulans jenazah" subtitle="Layanan tersedia 24 jam" />
          <CheckItemDesktop title="Karangan bunga & snack box" subtitle="Disediakan untuk tamu yang hadir" /> */}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────── */

export default function PartnerPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [code, setCode] = useState("");
  const { navigateWithLoading } = usePageTransition();

  const handleUseVoucher = () => {
    if (!code.trim()) return;
    navigateWithLoading("/purchase", {
      state: { fromVoucher: true, voucherCode: code.trim() },
    });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════
          MOBILE  (hidden on md+)
      ══════════════════════════════════════ */}
      <div className="md:hidden flex justify-center bg-[#fefefe]">
        <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
          <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

          <main className="flex flex-col items-start w-full flex-1">

            {/* ── Hero ── radial gradient bg, centered heading */}
            <div
              className="relative overflow-clip flex flex-col items-center py-[24px] w-full shrink-0"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(252,241,217,0.9) 0%, rgba(255,255,255,1) 100%)" }}
            >
              {/* Decorative blurred circle */}
              <div
                className="absolute -translate-x-1/2 bottom-[-255px] left-1/2 h-[309px] w-[310px] rounded-full pointer-events-none"
                style={{ background: "rgba(240,210,150,0.45)", filter: "blur(48px)" }}
              />
              <div className="flex flex-col gap-[13px] items-center px-[16px] relative w-full">
                <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[24px] text-center tracking-[-0.24px] leading-[1.3] w-full">
                  Masukkan voucher untuk dapatkan layanan kepulangan{" "}
                  <span style={{ color: "#876747" }}>GRATIS</span>
                </p>
              </div>
            </div>

            {/* ── Connected card: voucher input + service info ── */}
            <div className="flex flex-col items-center pb-[24px] px-[16px] w-full">

              {/* Top: beige gradient voucher card */}
              <div
                className="w-full rounded-tl-[16px] rounded-tr-[16px] pt-[16px] pb-[24px] px-[16px] flex flex-col gap-[12px]"
                style={{
                  background: "linear-gradient(to right, #f1eee3, #e3dbc5)",
                  border: "1px solid rgba(189,166,122,0.25)",
                  boxShadow: "0px 8px 12px 0px rgba(112,112,112,0.05)",
                }}
              >
                <p className="font-['Outfit',sans-serif] font-semibold text-[12px] tracking-[1.2px] text-[#8a6d3b] leading-[1.3]">
                  MASUKKAN KODE VOUCHER
                </p>
                <div className="flex flex-col gap-[12px] w-full">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="Contoh: VOUCHERPULANG"
                    className="bg-white rounded-[10px] px-[16px] py-[12px] w-full font-['Outfit',sans-serif] text-[14px] text-[#1f1912] outline-none placeholder:text-[rgba(107,98,88,0.7)]"
                    style={{ border: "1px solid rgba(175,145,96,0.3)" }}
                  />
                  <button
                    type="button"
                    onClick={handleUseVoucher}
                    disabled={!code.trim()}
                    className="bg-[#1f1912] font-['Outfit',sans-serif] font-semibold text-[14px] text-[#fcf1d9] px-[16px] py-[12px] rounded-[10px] w-full border-none cursor-pointer disabled:bg-[#989898] disabled:text-[#d8d8d8] disabled:cursor-not-allowed"
                  >
                    Gunakan
                  </button>
                </div>
              </div>

              {/* Bottom: white service card */}
              <div
                className="bg-white w-full rounded-bl-[16px] rounded-br-[16px]"
                style={{
                  borderLeft: "1px solid rgba(189,166,122,0.25)",
                  borderRight: "1px solid rgba(189,166,122,0.25)",
                  borderBottom: "1px solid rgba(189,166,122,0.25)",
                  borderTop: "4px solid rgba(189,166,122,0.25)",
                }}
              >
                <div
                  className="flex flex-col gap-[16px] pb-[16px] pl-[16px] pr-[18px] pt-[24px]"
                  style={{ background: "linear-gradient(to bottom, rgba(175,145,96,0.06), rgba(255,255,255,0))" }}
                >
                  <p className="font-['Lora',serif] font-bold text-[#1f1f1f] text-[18px] leading-[normal]">
                    Layanan gratis yang kamu dapatkan
                  </p>

                  <div className="bg-[rgba(175,145,96,0.2)] h-px w-full" />

                  {/* Feature row */}
                  <div className="flex gap-[12px] items-center">
                    <div className="bg-[#f1eee3] rounded-full p-[6px] shrink-0">
                      <img src={imgKeluarga} alt="" className="size-[32px] object-contain" />
                    </div>
                    <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                      <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[13px] leading-[1.4]">
                        Layanan Hari Kematian
                      </p>
                      <p className="font-['Outfit',sans-serif] font-normal text-[#6b6258] text-[11px] leading-[1.5]">
                        Pengurusan jenazah hingga pengantaran ke pemakaman.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[rgba(175,145,96,0.2)] h-px w-full" />

                  {/* Check items */}
                  <div className="flex flex-col gap-[8px]">
                    {layananItems.map((item, idx) => (
                      <CheckItemMobile key={idx} text={item} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </main>

          <Footer />
        </div>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP  (hidden on mobile)
      ══════════════════════════════════════ */}
      <div className="hidden md:flex flex-col min-h-screen">
        <DesktopNavbar />
        <main className="flex-1">
          <DesktopHero code={code} setCode={setCode} onUse={handleUseVoucher} />
        </main>
        <DesktopFooter />
      </div>

    </div>
  );
}
