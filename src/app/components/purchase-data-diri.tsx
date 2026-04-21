import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import svgChevron from "../../imports/svg-427pcoex8y";
import svgNav from "../../imports/svg-avs0z7lyx4";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { usePageTransition } from "./page-transition";
import { StepSlideWrapper } from "./step-slide-wrapper";

/* ── Stepper Data ─── */
const steps = [
  { number: 1, label: "Pilih Tipe Layanan" },
  { number: 2, label: "Isi Data Diri" },
  { number: 3, label: "Konfirmasi Pembayaran" },
];

/* ── Dropdown options ─── */
const hubunganDaruratOptions = [
  "Pasangan",
  "Orang Tua",
  "Anak",
  "Saudara",
  "Sahabat",
  "Lainnya",
];
const hubunganKeluargaOptions = [
  "Pasangan",
  "Orang Tua",
  "Anak",
  "Saudara",
  "Lainnya",
];

/* ── Shared input class constants ─── */
const inputWrapperBase =
  "bg-[#faf8f4] relative rounded-[10px] w-full border border-[#e3ddd3] transition-all duration-200 focus-within:bg-white focus-within:border-[#bda67a]";
const inputWrapperFlex = inputWrapperBase + " flex items-center";
const inputClass =
  "w-full bg-transparent border-none outline-none px-[16px] py-[12px] font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[#1f1f1f] placeholder-[#9ca3af]";
const inputClassWa =
  "w-full bg-transparent border-none outline-none px-[8px] py-[12px] font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[#1f1f1f] placeholder-[#9ca3af]";
const labelClass =
  "font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#3a3a3a] text-[14px] w-full";

/* ── Section label (warm accent) ─── */
// function SectionLabel({ text }: { text: string }) {
//   return (
//     <div className="flex items-center gap-[10px] w-full">
//       <div className="h-px flex-1 bg-[#e8e2d6]" />
//       <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#bda67a] text-[11px] tracking-[0.8px] uppercase shrink-0">
//         {text}
//       </p>
//       <div className="h-px flex-1 bg-[#e8e2d6]" />
//     </div>
//   );
// }

/* ── Reusable Dropdown ─── */
function Dropdown({
  label,
  value,
  options,
  open,
  onToggle,
  onSelect,
  dropdownRef,
}: {
  label: string;
  value: string;
  options: string[];
  open: boolean;
  onToggle: () => void;
  onSelect: (v: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="flex flex-col gap-[8px] items-start w-full" ref={dropdownRef}>
      <p className={labelClass}>{label}</p>
      <div className="relative w-full">
        <button
          type="button"
          onClick={onToggle}
          className={`rounded-[10px] w-full border flex items-center px-[16px] py-[12px] cursor-pointer transition-all duration-200 ${open ? "bg-white border-[#bda67a]" : "bg-[#faf8f4] border-[#e3ddd3]"
            }`}
        >
          <span
            className={`flex-1 text-left font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] ${value ? "text-[#1f1f1f]" : "text-[#9ca3af]"
              }`}
          >
            {value || "Pilih salah satu"}
          </span>
          <div className="overflow-clip relative shrink-0 size-[12px]">
            <div className="absolute bottom-1/4 left-[5%] right-[5%] top-1/4">
              <svg
                className={`absolute block size-full transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 10.8 6"
              >
                <path d={svgChevron.p23e40d80} fill="#9CA3AF" />
              </svg>
            </div>
          </div>
        </button>

        {open && (
          <div className="absolute top-full left-0 w-full mt-[4px] bg-white border border-[#e3ddd3] rounded-[10px] shadow-lg z-10 overflow-hidden">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onSelect(option)}
                className={`w-full text-left px-[16px] py-[12px] font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] cursor-pointer border-none transition-colors duration-150 ${value === option
                  ? "bg-[#f5f0e8] text-[#1f1f1f]"
                  : "bg-white text-[#4b5563] hover:bg-[#faf8f4]"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Field wrapper ─── */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[8px] items-start w-full">
      <p className={labelClass}>{label}</p>
      {children}
    </div>
  );
}

/* ── Age helper: returns age in years from yyyy-MM-dd ── */
function calcAgeFromISO(iso?: string | null): number | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  const m = now.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age--;
  return age;
}

/* ── Format yyyy-MM-dd → DD/MM/YYYY ── */
function formatISOToDDMMYYYY(iso?: string | null): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return "";
  return `${d}/${m}/${y}`;
}

export default function PurchaseDataDiriPage() {
  const { navigateWithLoading } = usePageTransition();
  const location = useLocation();
  const currentStep = 2;
  const [menuOpen, setMenuOpen] = useState(false);

  // Get onboard selections from navigation state (with sessionStorage fallback)
  const onboardData = (location.state as {
    target?: string;
    age?: string;
    birthDate?: string;
    ceremony?: string;
    domicile?: string;
  } | null) ?? (() => {
    try {
      const stored = sessionStorage.getItem("pulang_onboard");
      return stored ? JSON.parse(stored) : null;
    } catch { return null; }
  })();

  const isFamily = onboardData?.target === "family";
  const dob = formatISOToDDMMYYYY(onboardData?.birthDate);
  const ageFromDob = calcAgeFromISO(onboardData?.birthDate);

  /* ── Self variant state ─── */
  const [namaLengkap, setNamaLengkap] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [namaKontakDarurat, setNamaKontakDarurat] = useState("");
  const [hubunganDarurat, setHubunganDarurat] = useState("");
  const [waKontakDarurat, setWaKontakDarurat] = useState("");
  const [dropdownDaruratOpen, setDropdownDaruratOpen] = useState(false);
  const dropdownDaruratRef = useRef<HTMLDivElement>(null);

  /* ── Family variant state ─── */
  const [namaKeluarga, setNamaKeluarga] = useState("");
  const [hubunganKeluarga, setHubunganKeluarga] = useState("");
  const [waKeluarga, setWaKeluarga] = useState("");
  const [namaPengelola, setNamaPengelola] = useState("");
  const [waPengelola, setWaPengelola] = useState("");
  const [dropdownKeluargaOpen, setDropdownKeluargaOpen] = useState(false);
  const dropdownKeluargaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownDaruratRef.current && !dropdownDaruratRef.current.contains(e.target as Node)) {
        setDropdownDaruratOpen(false);
      }
      if (dropdownKeluargaRef.current && !dropdownKeluargaRef.current.contains(e.target as Node)) {
        setDropdownKeluargaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ── Validation ─── */
  const isSelfValid =
    namaLengkap.trim() !== "" &&
    whatsapp.trim() !== "" &&
    namaKontakDarurat.trim() !== "" &&
    hubunganDarurat !== "" &&
    waKontakDarurat.trim() !== "";

  const isFamilyValid =
    namaKeluarga.trim() !== "" &&
    hubunganKeluarga !== "" &&
    waKeluarga.trim() !== "" &&
    namaPengelola.trim() !== "" &&
    waPengelola.trim() !== "";

  const isFormValid = isFamily ? isFamilyValid : isSelfValid;

  const handleSubmit = () => {
    if (!isFormValid) return;
    const formData = isFamily
      ? {
        namaKeluarga,
        hubunganKeluarga,
        waKeluarga: "+62" + waKeluarga,
        namaPengelola,
        waPengelola: "+62" + waPengelola,
        dob,
        age: ageFromDob,
      }
      : {
        namaLengkap,
        whatsapp: "+62" + whatsapp,
        namaKontakDarurat,
        hubunganDarurat,
        waKontakDarurat: "+62" + waKontakDarurat,
        dob,
        age: ageFromDob,
      };
    const fullState = { ...onboardData, ...formData };
    sessionStorage.setItem("pulang_purchase", JSON.stringify(fullState));
    navigateWithLoading("/purchase/konfirmasi", {
      state: { ...fullState, slideDir: "forward" },
    });
  };

  return (
    <div className="min-h-screen bg-[#fefefe] flex justify-center">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Stepper Navigation */}
        <div
          className="flex gap-[8px] items-center p-[16px] w-full overflow-x-auto border-b border-[#e8e2d6]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((step, idx) => (
            <div key={step.number} className="flex items-center gap-[8px] shrink-0">
              {idx > 0 && <div className="bg-[#e3ddd3] h-[2px] shrink-0 w-[24px]" />}
              <div className="flex gap-[10px] items-center shrink-0">
                {step.number < currentStep ? (
                  /* Completed step */
                  <div className="flex items-center justify-center rounded-full shrink-0 size-[32px] bg-[#bda67a]">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : step.number === currentStep ? (
                  /* Active step */
                  <div className="flex items-center justify-center rounded-full shrink-0 size-[32px] bg-[#1f1912]">
                    <p className="font-['Inter',sans-serif] font-medium leading-[1.25] text-[12px] text-white">
                      {step.number}
                    </p>
                  </div>
                ) : (
                  /* Future step */
                  <div className="flex items-center justify-center rounded-full shrink-0 size-[32px] border border-[#c9bfa8]">
                    <p className="font-['Inter',sans-serif] font-medium leading-[1.25] text-[12px] text-[#9ca3af]">
                      {step.number}
                    </p>
                  </div>
                )}
                <p
                  className={`font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] whitespace-nowrap ${step.number === currentStep ? "text-[#3a3a3a]" : "text-[#9ca3af]"
                    }`}
                >
                  {step.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="overflow-x-hidden flex-1 flex flex-col">
          <StepSlideWrapper>
            <main className="flex flex-col flex-1 w-full relative">

              {/* Decorative gradient */}
              {/* <div className="absolute left-0 top-0 w-full h-[300px] pointer-events-none">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 300">
                  <path
                    clipRule="evenodd"
                    d="M0 300L30 266.667C60 233.333 120 166.667 180 166.667C240 166.667 300 233.333 330 266.667L360 300V0H330C300 0 240 0 180 0C120 0 60 0 30 0H0V300Z"
                    fill="url(#paint0_linear_datadiri)"
                    fillRule="evenodd"
                  />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_datadiri" x1="180" x2="180" y1="0" y2="300">
                      <stop stopColor="#F5F0E8" />
                      <stop offset="1" stopColor="#F5F0E8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div> */}

              <div className="relative flex flex-col gap-[28px] items-start px-[20px] py-[36px] w-full">

                {/* Heading */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[22px]">
                    {isFamily ? "Sekarang, lengkapi data keluargamu" : "Sekarang, lengkapi data dirimu"}
                  </p>
                </div>

                {isFamily ? (
                  /* ══════════ FAMILY VARIANT ══════════ */
                  <>
                    <Field label="Nama Lengkap Keluarga sesuai KTP">
                      <div className={inputWrapperBase}>
                        <input
                          type="text"
                          value={namaKeluarga}
                          onChange={(e) => setNamaKeluarga(e.target.value)}
                          placeholder="Masukkan nama keluargamu"
                          className={inputClass}
                        />
                      </div>
                    </Field>

                    <Dropdown
                      label="Hubungan denganmu"
                      value={hubunganKeluarga}
                      options={hubunganKeluargaOptions}
                      open={dropdownKeluargaOpen}
                      onToggle={() => setDropdownKeluargaOpen(!dropdownKeluargaOpen)}
                      onSelect={(v) => {
                        setHubunganKeluarga(v);
                        setDropdownKeluargaOpen(false);
                      }}
                      dropdownRef={dropdownKeluargaRef}
                    />

                    <Field label="Nomor WhatsApp Keluargamu">
                      <div className={inputWrapperFlex}>
                        <span className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[#9ca3af] pl-[16px] select-none shrink-0">
                          +62
                        </span>
                        <input
                          type="tel"
                          value={waKeluarga}
                          onChange={(e) => setWaKeluarga(e.target.value.replace(/\D/g, ""))}
                          placeholder="8123456789"
                          className={inputClassWa}
                        />
                      </div>
                    </Field>
                    <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[22px]">
                      Data dirimu
                    </p>

                    <div className="relative bg-gradient-to-br from-[#faf8f4] to-[#f5efe4] rounded-[14px] border border-[#e8e2d6] w-full overflow-hidden">
                      <div className="absolute top-0 left-0 w-[3px] h-full bg-[#bda67a]" />
                      <div className="flex flex-col gap-[14px] p-[16px] pl-[18px] w-full">
                        <p className="font-['Outfit',sans-serif] font-normal leading-[1.4] text-[#6b6050] text-[13px] flex-1">
                          Kamu adalah pengelola akun yang bertugas menghubungi tim Pulang saat anggota keluargamu tutup usia.
                        </p>
                      </div>
                    </div>

                    <Field label="Nama Lengkapmu">
                      <div className={inputWrapperBase}>
                        <input
                          type="text"
                          value={namaPengelola}
                          onChange={(e) => setNamaPengelola(e.target.value)}
                          placeholder="Masukkan nama lengkapmu"
                          className={inputClass}
                        />
                      </div>
                    </Field>

                    <Field label="Nomor WhatsApp-mu">
                      <div className={inputWrapperFlex}>
                        <span className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[#9ca3af] pl-[16px] select-none shrink-0">
                          +62
                        </span>
                        <input
                          type="tel"
                          value={waPengelola}
                          onChange={(e) => setWaPengelola(e.target.value.replace(/\D/g, ""))}
                          placeholder="8123456789"
                          className={inputClassWa}
                        />
                      </div>
                    </Field>
                  </>
                ) : (
                  /* ══════════ SELF VARIANT ══════════ */
                  <>

                    <Field label="Nama Lengkap sesuai KTP">
                      <div className={inputWrapperBase}>
                        <input
                          type="text"
                          value={namaLengkap}
                          onChange={(e) => setNamaLengkap(e.target.value)}
                          placeholder="Masukkan nama lengkap"
                          className={inputClass}
                        />
                      </div>
                    </Field>

                    <Field label="Nomor WhatsApp">
                      <div className={inputWrapperFlex}>
                        <span className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[#9ca3af] pl-[16px] select-none shrink-0">
                          +62
                        </span>
                        <input
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ""))}
                          placeholder="8123456789"
                          className={inputClassWa}
                        />
                      </div>
                    </Field>

                    <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[22px]">
                      Kontak Darurat
                    </p>
                    <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[16px]">
                      Siapa kontak darurat yang kamu tunjuk?
                    </p>

                    {/* Explanation box — numbered steps */}
                    <div className="relative bg-gradient-to-br from-[#faf8f4] to-[#f5efe4] rounded-[14px] border border-[#e8e2d6] w-full overflow-hidden">
                      <div className="absolute top-0 left-0 w-[3px] h-full bg-[#bda67a]" />
                      <div className="flex flex-col gap-[14px] p-[16px] pl-[18px] w-full">

                        {/* Item 1 */}
                        <div className="flex gap-[10px] items-start w-full">
                          <div className="shrink-0 size-[20px] rounded-full bg-[#bda67a] flex items-center justify-center mt-[1px]">
                            <p className="font-['Outfit',sans-serif] font-bold text-white text-[11px] leading-none">1</p>
                          </div>
                          <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[12px]">
                            Kontak darurat bisa pasangan/orang tua/anak yang bertugas menghubungi tim{" "}
                            <span className="font-bold text-[#3a3a3a]">Pulang</span>{" "}
                            saat kamu tutup usia.
                          </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex gap-[10px] items-start w-full">
                          <div className="shrink-0 size-[20px] rounded-full bg-[#bda67a] flex items-center justify-center mt-[1px]">
                            <p className="font-['Outfit',sans-serif] font-bold text-white text-[11px] leading-none">2</p>
                          </div>
                          <div className="flex-1 flex flex-col gap-[8px]">
                            <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[12px]">
                              Setelah pendaftaran, kami akan mengirim WhatsApp ke kontak daruratmu berisi:
                            </p>
                            <div className="flex flex-col gap-[6px]">
                              <div className="flex gap-[8px] items-start">
                                <div className="shrink-0 mt-[7px] size-[4px] rounded-full bg-[#bda67a]" />
                                <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[12px]">
                                  Cara akses layanan Pulang jika kamu meninggal dunia
                                </p>
                              </div>
                              <div className="flex gap-[8px] items-start">
                                <div className="shrink-0 mt-[7px] size-[4px] rounded-full bg-[#bda67a]" />
                                <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[12px]">
                                  Kartu keanggotaanmu
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Field label="Nama Lengkap Kontak Darurat">
                      <div className={inputWrapperBase}>
                        <input
                          type="text"
                          value={namaKontakDarurat}
                          onChange={(e) => setNamaKontakDarurat(e.target.value)}
                          placeholder="Nama lengkap"
                          className={inputClass}
                        />
                      </div>
                    </Field>

                    <Dropdown
                      label="Hubungan dengan Kontak Darurat"
                      value={hubunganDarurat}
                      options={hubunganDaruratOptions}
                      open={dropdownDaruratOpen}
                      onToggle={() => setDropdownDaruratOpen(!dropdownDaruratOpen)}
                      onSelect={(v) => {
                        setHubunganDarurat(v);
                        setDropdownDaruratOpen(false);
                      }}
                      dropdownRef={dropdownDaruratRef}
                    />

                    <Field label="Nomor WhatsApp Kontak Darurat">
                      <div className={inputWrapperFlex}>
                        <span className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[#9ca3af] pl-[16px] select-none shrink-0">
                          +62
                        </span>
                        <input
                          type="tel"
                          value={waKontakDarurat}
                          onChange={(e) => setWaKontakDarurat(e.target.value.replace(/\D/g, ""))}
                          placeholder="8123456789"
                          className={inputClassWa}
                        />
                      </div>
                    </Field>
                  </>
                )}

                {/* Selanjutnya Button */}
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                  className={`w-full h-[50px] rounded-[100px] border-none cursor-pointer transition-all duration-200 ${isFormValid
                    ? "bg-[#1f1912] cursor-pointer"
                    : "bg-[#d1d5db] cursor-not-allowed"
                    }`}
                >
                  <div className="flex items-center justify-center w-full h-full px-[24px]">
                    <p className="font-['Outfit',sans-serif] font-bold leading-[normal] text-[15px] text-white">
                      Selanjutnya
                    </p>
                  </div>
                </button>

                {/* Sebelumnya */}
                <button
                  onClick={() => navigateWithLoading("/purchase/layanan", { state: { ...onboardData, slideDir: "back" } })}
                  className="flex gap-[12px] items-center bg-transparent border-none cursor-pointer p-0"
                >
                  <div className="bg-[rgba(189,166,122,0.15)] flex items-center justify-center p-[9px] rounded-[100px] shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                        <path d={svgNav.p2b09b180} fill="#3a3a3a" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] text-[#3a3a3a] whitespace-nowrap">
                    Sebelumnya
                  </p>
                </button>
              </div>
            </main>

            <Footer />
          </StepSlideWrapper>
        </div>
      </div>
    </div>
  );
}