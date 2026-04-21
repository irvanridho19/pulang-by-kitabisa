import { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { usePageTransition } from "./page-transition";
import imgShieldIcon from "../../assets/shield-icon.png";
import {
  NavbarMobileHeader,
  MobileMenu,
  Footer,
} from "./shared-layout";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

/* ── Blocked Modal ─── */
function BlockedModal({ onGoHome }: { onGoHome: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative bg-white rounded-[8px] w-[calc(100%-40px)] max-w-[440px] flex flex-col items-start">
        <div className="absolute inset-[-0.5px] border border-[#e5e7eb] rounded-[8.5px] pointer-events-none" />
        <div className="w-full">
          <div className="flex items-center p-[24px]">
            <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#111928] text-[18px] whitespace-nowrap">
              INFORMASI LAYANAN
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-[#e5e7eb]" />
        <div className="w-full p-[24px]">
          <div className="flex flex-col gap-[14px] items-center justify-center w-full">
            <div className="relative size-[190px]">
              <div className="absolute inset-[1%]">
                <img
                  alt=""
                  className="absolute left-0 top-0 size-full object-contain"
                  src={imgShieldIcon}
                />
              </div>
            </div>
            <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#1f2a37] text-[18px] text-center w-full">
              Maaf, saat ini layanan belum tersedia untukmu
            </p>
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b7280] text-[16px] text-center w-full">
              <span>Saat ini, paket berlangganan </span>
              <span className="font-['Outfit',sans-serif] font-bold">Pulang</span>
              <span>{" "}baru mencakup jangkauan operasional untuk wilayah{" "}</span>
              <span className="font-['Outfit',sans-serif] font-bold">Jabodetabek</span>
              <span>{" "}serta memenuhi ketentuan asuransi jiwa untuk{" "}</span>
              <span className="font-['Outfit',sans-serif] font-bold">rentang usia 1 hingga 65 tahun</span>
              <span>.</span>
            </p>
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b7280] text-[16px] text-center w-full">
              Terima kasih atas ketertarikanmu. Kami sedang berusaha memperluas jangkauan agar bisa segera hadir melindungi lebih banyak keluarga.
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-[#e5e7eb]" />
        <div className="w-full flex items-center justify-center p-[24px]">
          <button
            onClick={onGoHome}
            className="bg-[#1f1f1f] flex gap-[8px] items-center justify-center px-[20px] py-[10px] rounded-[12px] cursor-pointer border-none"
          >
            <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[14px] text-white whitespace-nowrap">
              Kembali ke Beranda
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Emoji Icon Box ─── */
function EmojiIcon({ emoji, bgColor }: { emoji: string; bgColor: string }) {
  return (
    <div
      className="flex items-center justify-center overflow-clip rounded-[8px] shrink-0 size-[32px]"
      style={{ backgroundColor: bgColor }}
    >
      <span className="font-['Outfit',sans-serif] text-[16px] leading-[normal]">
        {emoji}
      </span>
    </div>
  );
}

/* ── Option Card ─── */
function OptionCard({
  selected,
  onClick,
  emoji,
  emojiBg,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  emoji: string;
  emojiBg: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-white relative rounded-[12px] shrink-0 w-full cursor-pointer p-0 text-left border-none"
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none rounded-[12px] transition-all duration-200 ${
          selected
            ? "border-2 border-[#bda67a] shadow-[0px_2px_8px_0px_rgba(189,166,122,0.18)] bg-[rgba(189,166,122,0.08)]"
            : "border border-[rgba(189,166,122,0.2)] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]"
        }`}
      />
      <div className="flex flex-row items-center size-full">
        <div className="flex gap-[10px] items-center px-[20px] py-[12px] relative w-full">
          <EmojiIcon emoji={emoji} bgColor={emojiBg} />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </button>
  );
}

/* ── Reveal wrapper with smooth enter ─── */
function Reveal({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`transition-all duration-300 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[8px] pointer-events-none h-0 overflow-hidden"
      }`}
    >
      {children}
    </div>
  );
}

/* ── Options ─── */
const targetOptions = [
  { value: "self", emoji: "🧑", bg: "#fcf6ec", label: "Diri sendiri" },
  { value: "family", emoji: "👨‍👩‍👧", bg: "#f0f4fc", label: "Anggota keluarga" },
];

const ceremonyOptions = [
  {
    value: "muslim",
    emoji: "☪️",
    bg: "#ecf4f8",
    label: "Prosesi Muslim",
    desc: "Sesuai syariat Islam, mencakup memandikan, mengkafani, dan pemakaman tanpa peti.",
  },
  {
    value: "non-muslim",
    emoji: "✝️",
    bg: "#f4effc",
    label: "Prosesi Non-Muslim",
    desc: "Mencakup penyediaan peti jenazah, formalin, kain tile, sarung tangan, kaos kaki, lembar duka, bunga, dll.",
  },
];

const domicileOptions = [
  { value: "jabodetabek", emoji: "🏙️", bg: "#ecf0f8", label: "Area Jabodetabek" },
  { value: "non-jabodetabek", emoji: "🗺️", bg: "#f0f8f3", label: "Luar Jabodetabek" },
];

/* ── Age helper ─── */
function calcAge(d: Date | undefined): number | null {
  if (!d) return null;
  if (isNaN(d.getTime())) return null;
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  const m = now.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age--;
  return age;
}

function ageToRange(age: number | null): string | null {
  if (age == null) return null;
  if (age < 25) return "<25";
  if (age <= 55) return "25-55";
  if (age <= 65) return "55-65";
  return ">65";
}

/* ── Main Purchase Onboard Page ─── */
export default function PurchaseOnboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateWithLoading } = usePageTransition();

  const [target, setTarget] = useState<string | null>(null);
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [ceremony, setCeremony] = useState<string | null>(null);
  const [domicile, setDomicile] = useState<string | null>(null);
  const [dateOpen, setDateOpen] = useState(false);

  const age = useMemo(() => calcAge(birthDate), [birthDate]);
  const ageRange = useMemo(() => ageToRange(age), [age]);

  const allSelected = target && birthDate && ceremony && domicile;
  const isBlocked =
    ageRange === "<25" || ageRange === ">65" || domicile === "non-jabodetabek";
  const [showBlockedModal, setShowBlockedModal] = useState(false);

  const handleContinue = () => {
    if (!allSelected) return;
    if (isBlocked) {
      setShowBlockedModal(true);
      return;
    }
    const onboardData = {
      target,
      age: ageRange,
      birthDate: birthDate ? format(birthDate, "yyyy-MM-dd") : null,
      ceremony,
      domicile,
    };
    sessionStorage.setItem("pulang_onboard", JSON.stringify(onboardData));
    navigateWithLoading("/purchase/layanan", {
      state: { ...onboardData, slideDir: "forward" },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showBlockedModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showBlockedModal]);

  const isFamily = target === "family";
  const birthLabel = isFamily
    ? "Tanggal Lahir Orang yang Didaftarkan"
    : "Tanggal Lahirmu";
  const ceremonyLabel = isFamily
    ? "Bagaimana tata cara kepulangan yang diharapkan keluargamu?"
    : "Bagaimana tata cara kepulangan yang kamu harapkan?";
  const domicileLabel = isFamily
    ? "Di mana tempat tinggal keluargamu saat ini?"
    : "Di mana tempat tinggalmu saat ini?";

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[480px] relative flex flex-col min-h-screen bg-white">
        <NavbarMobileHeader
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Main Content */}
        <main className="flex flex-col flex-1 w-full px-[20px] py-[32px] gap-[28px] min-h-[calc(100vh-160px)]">
          {/* Question 1: Target — always visible */}
          <div className="flex flex-col gap-[14px] items-start w-full">
            <div className="flex flex-col gap-[6px] items-start w-full">
              <p className="font-['Lora',serif] font-bold leading-[1.35] text-[#1f2a37] text-[20px]">
                Siapa yang ingin kamu daftarkan?
              </p>
              <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#9ca3af] text-[13px]">
                Layanan Pulang akan diberikan saat orang yang kamu daftarkan meninggal dunia.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] items-start w-full">
              {targetOptions.map((opt) => (
                <OptionCard
                  key={opt.value}
                  selected={target === opt.value}
                  onClick={() => setTarget(opt.value)}
                  emoji={opt.emoji}
                  emojiBg={opt.bg}
                >
                  <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#4b5563] text-[14px]">
                    {opt.label}
                  </p>
                </OptionCard>
              ))}
            </div>
          </div>

          {/* Revealed only after target is selected */}
          <Reveal show={!!target}>
            <div className="flex flex-col gap-[28px] items-start w-full">
              {/* Question 2: Birth date */}
              <div className="flex flex-col gap-[14px] items-start w-full">
                <p className="font-['Lora',serif] font-bold leading-[1.35] text-[#1f2a37] text-[18px]">
                  {birthLabel}
                </p>
                <Popover open={dateOpen} onOpenChange={setDateOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={`bg-white w-full rounded-[12px] border shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)] px-[20px] py-[14px] flex items-center justify-between gap-[8px] font-['Outfit',sans-serif] text-[14px] text-left outline-none transition-colors ${
                        birthDate
                          ? "border-[#bda67a] text-[#1f2a37]"
                          : "border-[rgba(189,166,122,0.2)] text-[#9ca3af]"
                      }`}
                    >
                      <span>
                        {birthDate
                          ? format(birthDate, "d MMMM yyyy", { locale: localeId })
                          : "dd/mm/yyyy"}
                      </span>
                      <CalendarIcon className="size-[18px] text-[#9ca3af] shrink-0" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={birthDate}
                      onSelect={(d) => {
                        setBirthDate(d);
                        setDateOpen(false);
                      }}
                      captionLayout="dropdown"
                      fromYear={1940}
                      toYear={new Date().getFullYear()}
                      defaultMonth={birthDate ?? new Date(1990, 0)}
                      disabled={(d) => d > new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Question 3: Ceremony */}
              <div className="flex flex-col gap-[14px] items-start w-full">
                <p className="font-['Lora',serif] font-bold leading-[1.35] text-[#1f2a37] text-[18px]">
                  {ceremonyLabel}
                </p>
                <div className="flex flex-col gap-[10px] items-start w-full">
                  {ceremonyOptions.map((opt) => (
                    <OptionCard
                      key={opt.value}
                      selected={ceremony === opt.value}
                      onClick={() => setCeremony(opt.value)}
                      emoji={opt.emoji}
                      emojiBg={opt.bg}
                    >
                      <div className="flex flex-col gap-[2px] leading-[1.5]">
                        <p className="font-['Outfit',sans-serif] font-semibold text-[#1f2a37] text-[14px]">
                          {opt.label}
                        </p>
                        <p className="font-['Outfit',sans-serif] font-normal text-[#9ca3af] text-[12px]">
                          {opt.desc}
                        </p>
                      </div>
                    </OptionCard>
                  ))}
                </div>
              </div>

              {/* Question 4: Domicile */}
              <div className="flex flex-col gap-[14px] items-start w-full">
                <p className="font-['Lora',serif] font-bold leading-[1.35] text-[#1f2a37] text-[18px]">
                  {domicileLabel}
                </p>
                <div className="flex flex-col gap-[10px] items-start w-full">
                  {domicileOptions.map((opt) => (
                    <OptionCard
                      key={opt.value}
                      selected={domicile === opt.value}
                      onClick={() => setDomicile(opt.value)}
                      emoji={opt.emoji}
                      emojiBg={opt.bg}
                    >
                      <p className="font-['Outfit',sans-serif] font-medium leading-[1.5] text-[#4b5563] text-[14px]">
                        {opt.label}
                      </p>
                    </OptionCard>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* CTA Button — pinned to bottom of content area */}
          <button
            disabled={!allSelected}
            className={`relative rounded-[12px] shrink-0 w-full cursor-pointer border-none p-0 transition-all duration-200 mt-auto ${
              allSelected
                ? "bg-[#1f1912] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.2)]"
                : "bg-[#d8d8d8] cursor-not-allowed"
            }`}
            onClick={handleContinue}
          >
            <div className="flex items-center justify-center px-[20px] py-[16px]">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[16px] text-white">
                Lanjutkan
              </p>
            </div>
          </button>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Blocked Modal */}
      {showBlockedModal && (
        <BlockedModal onGoHome={() => navigateWithLoading("/")} />
      )}
    </div>
  );
}
