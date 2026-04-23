import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { ChevronDown, ArrowLeft } from "lucide-react";
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
];
const hubunganKeluargaOptions = [
  "Pasangan",
  "Orang Tua",
  "Anak",
];

/* ── Shared input class constants ─── */
const getInputWrapperClass = (hasError: boolean, flex: boolean = false) => {
  const base = `bg-[#faf8f4] relative rounded-[10px] w-full border transition-all duration-200 focus-within:bg-white ${hasError
    ? "border-red-500 focus-within:border-red-500"
    : "border-[#e3ddd3] focus-within:border-[#bda67a]"
    }`;
  return flex ? `${base} flex items-center` : base;
};

const inputClass =
  "w-full bg-transparent border-none outline-none px-[16px] py-[12px] font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[#1f1f1f] placeholder-[#9ca3af]";
const inputClassWa =
  "w-full bg-transparent border-none outline-none px-[8px] py-[12px] font-['Outfit',sans-serif] font-normal leading-[1.5] text-[14px] text-[#1f1f1f] placeholder-[#9ca3af]";
const labelClass =
  "font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#3a3a3a] text-[14px] w-full";

/* ── Validation Helpers ─── */
const getNameError = (name: string): string | null => {
  if (!name) return null; // Tidak tampilkan error jika masih kosong
  if (!/^[a-zA-Z\s.,'-]+$/.test(name)) {
    return "Nama hanya boleh berisi huruf";
  }
  if (name.trim().length < 3) {
    return "Nama minimal terdiri dari 3 huruf";
  }
  return null;
};

const getPhoneError = (phone: string): string | null => {
  if (!phone) return null; // Tidak tampilkan error jika masih kosong
  if (!phone.startsWith("8")) {
    return "Nomor harus diawali angka 8 (Contoh: 812...)";
  }
  if (phone.length < 8) {
    return "Nomor terlalu pendek (minimal 8 angka)";
  }
  if (phone.length > 13) {
    return "Nomor terlalu panjang (maksimal 13 angka)";
  }
  return null;
};

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
          <ChevronDown
            className={`shrink-0 size-[14px] text-[#9CA3AF] transition-transform duration-200 ${open ? "rotate-180" : ""
              }`}
          />
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
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | null;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[8px] items-start w-full">
      <p className={labelClass}>{label}</p>
      {children}
      {error && (
        <p className="font-['Outfit',sans-serif] text-[12px] text-red-500 mt-[-4px]">
          {error}
        </p>
      )}
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
  const onboardData =
    (location.state as {
      target?: string;
      age?: string;
      birthDate?: string;
      ceremony?: string;
      domicile?: string;
    } | null) ??
    (() => {
      try {
        const stored = sessionStorage.getItem("pulang_onboard");
        return stored ? JSON.parse(stored) : null;
      } catch {
        return null;
      }
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
      if (
        dropdownDaruratRef.current &&
        !dropdownDaruratRef.current.contains(e.target as Node)
      ) {
        setDropdownDaruratOpen(false);
      }
      if (
        dropdownKeluargaRef.current &&
        !dropdownKeluargaRef.current.contains(e.target as Node)
      ) {
        setDropdownKeluargaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ── Get Validation Errors ─── */
  const namaLengkapError = getNameError(namaLengkap);
  const whatsappError = getPhoneError(whatsapp);
  const namaKontakDaruratError = getNameError(namaKontakDarurat);
  const waKontakDaruratError = getPhoneError(waKontakDarurat);

  const namaKeluargaError = getNameError(namaKeluarga);
  const waKeluargaError = getPhoneError(waKeluarga);
  const namaPengelolaError = getNameError(namaPengelola);
  const waPengelolaError = getPhoneError(waPengelola);

  /* ── Validity Check for Submit Button ─── */
  const isSelfValid =
    namaLengkap.trim() !== "" &&
    !namaLengkapError &&
    whatsapp.trim() !== "" &&
    !whatsappError &&
    namaKontakDarurat.trim() !== "" &&
    !namaKontakDaruratError &&
    hubunganDarurat !== "" &&
    waKontakDarurat.trim() !== "" &&
    !waKontakDaruratError;

  const isFamilyValid =
    namaKeluarga.trim() !== "" &&
    !namaKeluargaError &&
    hubunganKeluarga !== "" &&
    waKeluarga.trim() !== "" &&
    !waKeluargaError &&
    namaPengelola.trim() !== "" &&
    !namaPengelolaError &&
    waPengelola.trim() !== "" &&
    !waPengelolaError;

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
        <NavbarMobileHeader
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
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
                      <path
                        d="M1 5L5 9L13 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
              <div className="relative flex flex-col gap-[28px] items-start px-[20px] py-[36px] w-full">
                {/* Heading */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[22px]">
                    {isFamily
                      ? "Sekarang, lengkapi data keluargamu"
                      : "Sekarang, lengkapi data dirimu"}
                  </p>
                </div>

                {isFamily ? (
                  /* ══════════ FAMILY VARIANT ══════════ */
                  <>
                    <Field label="Nama Lengkap Keluarga sesuai KTP" error={namaKeluargaError}>
                      <div className={getInputWrapperClass(!!namaKeluargaError)}>
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

                    <Field label="Nomor WhatsApp Keluargamu" error={waKeluargaError}>
                      <div className={getInputWrapperClass(!!waKeluargaError, true)}>
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
                      <div className="flex flex-col gap-[8px] p-[16px] pl-[18px] w-full">
                        <p className="font-['Outfit',sans-serif] font-medium leading-[1.4] text-[#6b6050] text-[13px] w-full">
                          Kamu adalah pengelola akun yang bertugas:
                        </p>
                        <div className="flex flex-col gap-[6px] items-start w-full">
                          <div className="flex gap-[8px] items-start w-full">
                            <div className="shrink-0 mt-[6px] size-[4px] rounded-full bg-[#bda67a]" />
                            <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.4] text-[#6b6050] text-[13px]">
                              Perpanjang keanggotaan keluargamu
                            </p>
                          </div>
                          <div className="flex gap-[8px] items-start w-full">
                            <div className="shrink-0 mt-[6px] size-[4px] rounded-full bg-[#bda67a]" />
                            <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.4] text-[#6b6050] text-[13px]">
                              Menghubungi tim Pulang saat anggota keluargamu tutup usia
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Field label="Nama Lengkapmu" error={namaPengelolaError}>
                      <div className={getInputWrapperClass(!!namaPengelolaError)}>
                        <input
                          type="text"
                          value={namaPengelola}
                          onChange={(e) => setNamaPengelola(e.target.value)}
                          placeholder="Masukkan nama lengkapmu"
                          className={inputClass}
                        />
                      </div>
                    </Field>

                    <Field label="Nomor WhatsApp-mu" error={waPengelolaError}>
                      <div className={getInputWrapperClass(!!waPengelolaError, true)}>
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
                    <Field label="Nama Lengkap sesuai KTP" error={namaLengkapError}>
                      <div className={getInputWrapperClass(!!namaLengkapError)}>
                        <input
                          type="text"
                          value={namaLengkap}
                          onChange={(e) => setNamaLengkap(e.target.value)}
                          placeholder="Masukkan nama lengkap"
                          className={inputClass}
                        />
                      </div>
                    </Field>

                    <Field label="Nomor WhatsApp" error={whatsappError}>
                      <div className={getInputWrapperClass(!!whatsappError, true)}>
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
                            <p className="font-['Outfit',sans-serif] font-bold text-white text-[11px] leading-none">
                              1
                            </p>
                          </div>
                          <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b6050] text-[12px]">
                            Kontak darurat bisa pasangan/orang tua/anak yang bertugas menghubungi tim{" "}
                            <span className="font-bold text-[#3a3a3a]">Pulang</span> saat kamu tutup usia.
                          </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex gap-[10px] items-start w-full">
                          <div className="shrink-0 size-[20px] rounded-full bg-[#bda67a] flex items-center justify-center mt-[1px]">
                            <p className="font-['Outfit',sans-serif] font-bold text-white text-[11px] leading-none">
                              2
                            </p>
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

                    <Field label="Nama Lengkap Kontak Darurat" error={namaKontakDaruratError}>
                      <div className={getInputWrapperClass(!!namaKontakDaruratError)}>
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

                    <Field label="Nomor WhatsApp Kontak Darurat" error={waKontakDaruratError}>
                      <div className={getInputWrapperClass(!!waKontakDaruratError, true)}>
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
                  className={`w-full h-[50px] rounded-[12px] border-none transition-all duration-200 ${isFormValid
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
                  onClick={() =>
                    navigateWithLoading("/purchase/layanan", {
                      state: { ...onboardData, slideDir: "back" },
                    })
                  }
                  className="flex gap-[12px] items-center bg-transparent border-none cursor-pointer p-0"
                >
                  <div className="bg-[rgba(189,166,122,0.15)] flex items-center justify-center p-[9px] rounded-[100px] shrink-0">
                    <ArrowLeft className="size-[16px] text-[#3a3a3a]" />
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