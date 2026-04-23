import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import imgImageProblemsBackground from "../../assets/problems-background.png";
import imgImage9 from "../../assets/image-9.png";
import imgHero from "../../assets/Hero/hero.svg";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import { usePageTransition } from "./page-transition";

/* ── Sticky CTA ─── */
function StickyBottomCtaBar({ visible }: { visible: boolean }) {
  const { navigateWithLoading } = usePageTransition();
  const phoneLink = "tel:+6281234567890";
  return (
    <div
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 transition-all duration-300 ease-in-out ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
    >
      <div className="bg-[#f9f7f3] flex flex-col items-start overflow-clip pb-[16px] pt-[12px] px-[16px] rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_-4px_20px_0px_rgba(89,70,53,0.12)] w-full">
        {/* <div className="flex items-center justify-center w-full mb-[12px]">
          <p className="font-['Outfit',sans-serif] font-medium leading-[normal] text-[#594635] text-[12px] whitespace-nowrap">
            Mulai dari Rp 200.000/tahun
          </p>
        </div> */}
        <button
          onClick={() => navigateWithLoading("/purchase")}
          className="bg-[#AF9160] flex h-[52px] items-center justify-center overflow-clip rounded-[12px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] w-full cursor-pointer border-none p-0"
        >
          <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[16px] text-white whitespace-nowrap">
            Daftar jadi anggota
          </p>
        </button>
        <a
          href={phoneLink}
          className="rounded-[12px] shrink-0 no-underline block w-full"
        >
          <div className="flex flex-col gap-[4px] items-center justify-center px-[16px] py-[8px] w-full">
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#1f1f1f] text-[11px] text-center">
              Belum jadi anggota dan butuh layanan cepat?
            </p>
            <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#750d33] text-[13px] text-center underline decoration-solid">
              Pesan layanan langsung 24 jam
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

/* ── Hero Section ─── */
function SectionHero({ ctaRef }: { ctaRef?: React.RefObject<HTMLDivElement | null> }) {
  const { navigateWithLoading } = usePageTransition();
  const phoneLink = "tel:+6281234567890";

  return (
    <div
      className="bg-white flex flex-col gap-[24px] items-start justify-center overflow-clip pb-[40px] pt-[44px] px-[20px] relative w-full"
      id="hero-section"
    >
      {/* Decoration ellipse */}
      <div className="absolute -translate-x-1/2 left-[calc(50%+0.5px)] size-[363px] top-[503px] pointer-events-none">
        <div className="absolute inset-[-165.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1563 1563">
            <g filter="url(#filter0_f_hero)" opacity="0.3">
              <circle cx="781.5" cy="781.5" fill="#AF9160" r="181.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1563" id="filter0_f_hero" width="1563" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="300" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        {/* Heading — centered */}
        <p className="font-['Lora',serif] font-bold text-[#1f1f1f] text-[24px] w-full leading-[1.4] text-center">
          Menemanimu Menyiapkan <br /><span className="text-[#AF9160]">Kepulangan</span>
        </p>

        {/* Hero Image */}
        <div className="relative shrink-0 w-full rounded-[24px] overflow-hidden shadow-[0_12px_32px_-8px_rgba(89,70,53,0.2)]">
          <img
            src={imgHero}
            alt="Keluarga bersama"
            className="block w-full h-auto"
          />
        </div>

        {/* Body — centered */}
        <p className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[13.5px] w-full leading-[1.6] text-center px-[10px]">
          <span className="font-['Outfit',sans-serif] font-bold text-[#555]">PULANG</span>
          <span>{" memberi layanan lengkap mulai dari hari kematian hingga pasca pemakaman."}</span>
        </p>

        {/* CTA Buttons */}

        <div ref={ctaRef} className="flex flex-col gap-[10px] items-center shrink-0 w-full mt-[4px]">
          <button
            onClick={() => navigateWithLoading("/purchase")}
            className="bg-[#1f1912] rounded-[12px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0 w-full cursor-pointer border-none p-0 block transition-transform active:scale-95"
          >
            <div className="flex items-center justify-center px-[24px] py-[14px] w-full">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[14px] text-white whitespace-nowrap">
                Daftar jadi anggota
              </p>
            </div>
          </button>
          <a
            href={phoneLink}
            className="rounded-[12px] shrink-0 no-underline block w-full"
          >
            <div className="flex flex-col gap-[4px] items-center justify-center px-[16px] py-[8px] w-full">
              <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#1f1f1f] text-[11px] text-center">
                Belum jadi anggota dan butuh layanan cepat?
              </p>
              <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#750d33] text-[13px] text-center underline decoration-solid">
                Pesan layanan langsung 24 jam
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Problems / Misi Section ─── */
function SectionProblems() {
  const { navigateWithLoading } = usePageTransition();
  // const problems = [
  //   "Biaya pengurusan kematian mahal",
  //   "Administrasi menyita waktu",
  //   "Duka keluarga panjang",
  // ];

  return (
    <div className="relative shrink-0 w-full overflow-hidden bg-[#1a1613]">
      {/* Background image */}
      <img
        alt=""
        src={imgImageProblemsBackground}
        className="absolute inset-0 size-full object-cover opacity-55 pointer-events-none"
      />
      {/* Vignette overlay for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.75) 60%, rgba(20,16,12,0.92) 100%)",
        }}
      />

      <div className="relative flex flex-col gap-[22px] items-start px-[24px] py-[44px] w-full">
        {/* MISI badge */}
        {/* <div className="bg-[rgba(189,166,122,0.18)] border border-[rgba(189,166,122,0.35)] flex items-center px-[14px] py-[5px] rounded-[100px]">
          <p className="font-['Outfit',sans-serif] font-semibold text-[#d5bf92] text-[11px] tracking-[2px] whitespace-nowrap">
            MISI
          </p>
        </div> */}

        {/* Heading */}
        <p className="font-['Lora',serif] font-bold text-white text-[18px] leading-[1.28] w-full">
          <span className="text-[22px] font-bold">Menyiapkan</span> <span className="text-[22px] font-bold text-[#AF9160]">Kepulangan</span><br /><div className="my-2">=</div>Cara bertanggung jawab menjalani hidup yang sementara
        </p>

        {/* Intro paragraphs */}
        <div className="flex flex-col gap-[14px] w-full">
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[14px] text-[rgba(255,255,255,0.82)] w-full">
            Simbol (-) pada papan nisan di antara tahun lahir dan tahun wafat mengingatkan kita bahwa hidup ini sangat singkat.
          </p>
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[14px] text-[rgba(255,255,255,0.82)] w-full">
            Karena itu, kami hadir untuk membantu kamu dan keluarga agar dapat berpulang dengan tenang.
          </p>
        </div>

        {/* Bullet list */}
        {/* <ul className="flex flex-col gap-[10px] w-full list-none p-0 m-0">
          {problems.map((item, i) => (
            <li key={i} className="flex gap-[12px] items-start w-full">
              <span className="mt-[8px] shrink-0 size-[5px] rounded-full bg-[#d5bf92]" />
              <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[1.6] text-[14px] text-white">
                {item}
              </p>
            </li>
          ))}
        </ul> */}

        {/* CTA pill */}
        <button
          type="button"
          onClick={() => navigateWithLoading("/misi")}
          className="justify-center  flex items-center mt-[4px] cursor-pointer transition-colors hover:bg-[rgba(189,166,122,0.22)]"
        >
          <p className="font-['Outfit',sans-serif] font-semibold text-[#d5bf92] text-[14px] whitespace-nowrap underline decoration-solid">
            Baca selengkapnya Misi Pulang
          </p>
          {/* <ChevronRight className="ml-[8px] size-[18px] text-[#d5bf92]" /> */}
        </button>
      </div>
    </div>
  );
}

/* ── Bullet item helpers ─── */
function BulletDot({ color }: { color: string }) {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <circle cx="2" cy="9" fill={color} r="2" />
      </svg>
    </div>
  );
}

function BulletItem({ text, dotColor }: { text: string; dotColor: string }) {
  return (
    <div className="flex gap-[10px] items-start shrink-0 w-full">
      <BulletDot color={dotColor} />
      <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[18px] text-[12px] text-white">
        {text}
      </p>
    </div>
  );
}

function SmallDot({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[4px] mt-[7px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 4 4">
        <circle cx="2" cy="2" fill={color} r="2" />
      </svg>
    </div>
  );
}

function SmallBulletItem({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex gap-[8px] items-start shrink-0 w-full">
      <SmallDot color={color} />
      <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[18px] text-[12px] text-white">
        {text}
      </p>
    </div>
  );
}

/* ── Helper baru untuk merender sub-bullet ─── */
function PascaBulletItem({ item }: { item: PascaItemType }) {
  // Jika item hanya berupa string biasa (tanpa sub-item)
  if (typeof item === "string") {
    return <SmallBulletItem text={item} color="white" />;
  }

  // Jika item memiliki sub-items (seperti asisten administrasi)
  return (
    <div className="flex flex-col gap-[4px] w-full">
      <SmallBulletItem text={item.text} color="white" />
      <div className="flex flex-col gap-[4px] pl-[12px] w-full">
        {item.subItems.map((sub, idx) => (
          <div key={idx} className="flex gap-[6px] items-start w-full">
            <div className="text-[rgba(255,255,255,0.7)] mt-[1px] leading-[18px] text-[12px]">-</div>
            <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[18px] text-[12px] text-[rgba(255,255,255,0.7)]">
              {sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Keanggotaan Card ─── */
const muslimItems = [
  "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
  "Pemandian jenazah",
  "Pengkafanan sesuai syariat",
  "Kain kafan (sabun, kamper, dan parfum)",
  "Bunga & air mawar (opsional, jika butuh)",
  "Papan nisan dan papan kayu penutup makam",
  "Ambulans jenazah",
  "Penggantian biaya jasa penggalian makam",
  "Karangan bunga",
  "Snack box 50 pak",
];

const nonMuslimItems = [
  "Pemandian jenazah",
  "Tata rias jenazah",
  "Pemberian formalin",
  "Peti jenazah",
  "Kain penutup peti, sarung tangan & kaos kaki",
  "Lembar duka, wewangian & lilin duka",
  "Bunga salib atau bunga meja",
  "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
  "Ambulans jenazah",
  "Penggantian biaya jasa penggalian makam",
  "Karangan bunga",
  "Snack box 50 pak",
];

/* ── Data Pasca Pemakaman dengan Sub-items ─── */
type PascaItemType = string | { text: string; subItems: string[] };

const muslimPascaItems: PascaItemType[] = [
  {
    text: "Asisten khusus pengurusan administrasi keluarga:",
    subItems: [
      "Akta kematian dari Disdukcapil",
      "Surat keterangan kepolisian",
      "Penghentian BPJS",
    ]
  },
  "50 buku Yasin (opsional, jika butuh)",
  "Layanan konseling psikolog",
];

const nonMuslimPascaItems: PascaItemType[] = [
  {
    text: "Asisten khusus pengurusan administrasi keluarga:",
    subItems: [
      "Akta kematian dari Disdukcapil",
      "Surat keterangan kepolisian",
      "Penghentian BPJS",
    ]
  },
  "Layanan konseling psikolog",
];

function KeanggotaanCard({ onNavigate }: { onNavigate: () => void }) {
  const [tradisiTab, setTradisiTab] = useState<"muslim" | "nonmuslim">("muslim");
  const isMuslim = tradisiTab === "muslim";

  return (
    <div className="bg-[#1f1914] relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] w-full">
        <div className="flex flex-col gap-[16px] items-start px-[20px] py-[22px] w-full">

          {/* Title + desc */}
          <p className="font-['Lora',serif] font-bold leading-[normal] text-[18px] text-white w-full">
            Layanan Keanggotaan
          </p>
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[13px] text-[rgba(255,255,255,0.7)] w-full">
            Cocok untuk yang ingin mempersiapkan kepulangan sejak jauh hari.
          </p>

          {/* Price — tahunan only */}
          <div className="flex flex-col gap-[6px] items-start overflow-clip shrink-0 w-full">
            <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-white text-[11px] whitespace-nowrap">
              Iuran tahunan
            </p>
            <div className="flex gap-[4px] items-end leading-[normal] overflow-clip whitespace-nowrap">
              <p className="font-['Lora',serif] font-bold text-white text-[32px]">Rp200.000</p>
              <p className="font-['Outfit',sans-serif] font-normal text-[14px] text-[rgba(255,255,255,0.35)]">/ tahun</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onNavigate}
            className="bg-[#AF9160] flex h-[42px] items-center justify-center overflow-clip py-[12px] rounded-[12px] shrink-0 w-full cursor-pointer border-none"
          >
            <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[14px] text-center text-white whitespace-nowrap">
              Daftar jadi anggota
            </p>
          </button>

          {/* Divider */}
          <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" />

          {/* Services label */}
          <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#f9f7f3] text-[16px] whitespace-nowrap">
            Layanan yang kamu dapatkan
          </p>

          {/* Card: Hari Kematian with Muslim/Non-Muslim tabs */}
          <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[16px] shrink-0 w-full">
            <div className="absolute border border-[rgba(23,66,145,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="flex flex-col gap-[14px] items-start p-[16px] w-full">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[18px] text-[#c6d2ea] text-[14px] whitespace-nowrap">
                Hari Kematian
              </p>

              {/* Muslim / Non-Muslim toggle */}
              <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[12px] shrink-0 w-full border border-[rgba(255,255,255,0.22)]">
                <div className="flex gap-[6px] items-center p-[4px] w-full">
                  {/* Muslim tab */}
                  <button
                    onClick={() => setTradisiTab("muslim")}
                    className={`flex-1 flex gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[9px] border-none cursor-pointer transition-all duration-150 ${isMuslim ? "bg-[#D5C9AA]" : "bg-transparent"
                      }`}
                  >
                    <div className="relative shrink-0 size-[6px]">
                      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 6 6">
                        <circle cx="3" cy="3" fill="#94C7B5" r="3" />
                      </svg>
                    </div>
                    <p className={`font-['Outfit',sans-serif] font-semibold leading-[16px] text-[12px] whitespace-nowrap ${isMuslim ? "text-[#17120d]" : "text-[#D5C9AA]"}`}>
                      Muslim
                    </p>
                  </button>
                  {/* Non-Muslim tab */}
                  <button
                    onClick={() => setTradisiTab("nonmuslim")}
                    className={`flex-1 flex gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[9px] border-none cursor-pointer transition-all duration-150 ${!isMuslim ? "bg-[#D5C9AA]" : "bg-transparent"
                      }`}
                  >
                    <div className="relative shrink-0 size-[6px]">
                      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 6 6">
                        <circle cx="3" cy="3" fill="#9EB5DB" r="3" />
                      </svg>
                    </div>
                    <p className={`font-['Outfit',sans-serif] font-semibold leading-[16px] text-[12px] whitespace-nowrap ${!isMuslim ? "text-[#17120d]" : "text-[#D5C9AA]"}`}>
                      Non-Muslim
                    </p>
                  </button>
                </div>
              </div>

              {/* Tab label */}
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[10px] whitespace-nowrap" style={{ color: isMuslim ? "#94C7B5" : "#9EB5DB" }}>
                {isMuslim ? "KHUSUS MUSLIM" : "KHUSUS NON-MUSLIM"}
              </p>

              {/* Bullet list */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                {(isMuslim ? muslimItems : nonMuslimItems).map((item, i) => (
                  <BulletItem key={i} text={item} dotColor={isMuslim ? "#94C7B5" : "#9EB5DB"} />
                ))}
              </div>

              {/* Footer note */}
              <p className="font-['Outfit',sans-serif] font-normal leading-[15px] text-[#fecce6] text-[11px] w-full">
                {isMuslim
                  ? "*Tidak termasuk pencarian lahan makam dan rumah duka."
                  : "*Tidak termasuk rumah duka, pencarian lahan makam, dekorasi rumah duka, kremasi dan larung."}
              </p>
            </div>
          </div>

          {/* Card: Pasca Pemakaman */}
          <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[16px] shrink-0 w-full">
            <div className="absolute border border-[rgba(23,66,145,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="flex flex-col gap-[12px] items-start p-[12px] w-full">
              {/* Judul disesuaikan dengan gambar */}
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#d5c9aa] text-[14px] whitespace-nowrap">
                Pasca Pemakaman
              </p>
              {/* Green note */}
              <div className="bg-[rgba(100,180,160,0.2)] relative rounded-[8px] shrink-0 w-full">
                <div className="flex items-center overflow-clip px-[12px] py-[8px] rounded-[inherit] w-full">
                  <p className="font-['Outfit',sans-serif] font-normal leading-[18px] text-[12px] text-[#c8ebe1] flex-1">
                    <span>{"Uang kedukaan "}</span>
                    <span className="font-['Outfit',sans-serif] font-semibold text-white">Rp 1.000.000</span>
                    <span>{" untuk keluarga"}</span>
                  </p>
                </div>
                <div className="absolute border border-[rgba(100,180,160,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              {/* Bullet list menggunakan PascaBulletItem */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                {(isMuslim ? muslimPascaItems : nonMuslimPascaItems).map((item, i) => (
                  <PascaBulletItem key={i} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" />

          {/* Footnotes */}
          <p className="font-['Outfit',sans-serif] font-medium leading-[1.45] text-[13px] text-[rgba(255,255,255,0.8)] w-full">
            *Semua layanan bisa diakses 6 bulan sejak terdaftar sebagai anggota aktif
          </p>
          <p className="font-['Outfit',sans-serif] font-medium leading-[1.45] text-[13px] text-[rgba(255,255,255,0.8)] w-full">
            **Maksimal usia pendaftaran 65 tahun
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Darurat Card ─── */
function DaruratCard() {
  const waLink = "https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20memesan%20layanan%20darurat%20Pulang";
  const [isMuslim, setIsMuslim] = useState(true);

  const muslimItems = [
    "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
    "Pemandian jenazah",
    "Pengkafanan sesuai syariat",
    "Kain kafan (sabun, kamper, dan parfum)",
    "Bunga & air mawar (opsional, jika butuh)",
    "Papan nisan dan papan kayu penutup makam",
    "Ambulans jenazah",
    "Penggantian biaya jasa penggalian makam",
    "Karangan bunga",
    "Snack box 50 pak",
  ];

  const nonMuslimItems = [
    "Pemandian jenazah",
    "Tata rias jenazah",
    "Pemberian formalin",
    "Peti jenazah",
    "Kain penutup peti, sarung tangan & kaos kaki",
    "Lembar duka, wewangian & lilin duka",
    "Bunga salib atau bunga meja",
    "Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga",
    "Ambulans jenazah",
    "Penggantian biaya jasa penggalian makam",
    "Karangan bunga",
    "Snack box 50 pak",
  ];

  const items = isMuslim ? muslimItems : nonMuslimItems;
  const footerNote = isMuslim
    ? "*Tidak termasuk pencarian lahan makam dan rumah duka."
    : "*Tidak termasuk rumah duka, pencarian lahan makam, dekorasi rumah duka, kremasi dan larung.";

  return (
    <div className="bg-[#f7f7f7] border border-[#e0e0e0] border-solid flex flex-col gap-[16px] items-start overflow-clip pb-[28px] pt-[22px] px-[20px] relative rounded-[20px] w-full">

      <p className="font-['Lora',serif] font-bold leading-[normal] text-[#1f1f1f] text-[18px] w-full">
        Layanan Darurat
      </p>
      <p className="font-['Outfit',sans-serif] font-normal leading-[20px] text-[#707070] text-[13px] w-full">
        Cocok untuk yang belum jadi anggota, tapi butuh bantuan cepat saat ada keluarga meninggal.
      </p>

      {/* Price */}
      <div className="flex flex-col gap-[6px] items-start leading-[normal] overflow-clip shrink-0 w-full whitespace-nowrap">
        <p className="font-['Outfit',sans-serif] font-normal text-[11px] text-[rgba(89,70,53,0.5)] tracking-[0.2px]">
          Mulai dari
        </p>
        <div className="flex gap-[8px] items-baseline overflow-clip">
          <p className="font-['Lora',serif] font-bold text-[#594635] text-[34px]">Rp15.000.000</p>
          <p className="font-['Outfit',sans-serif] font-normal text-[#9e9e9e] text-[12px]">/ layanan</p>
        </div>
      </div>

      {/* CTA — Phone */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1f1f1f] flex gap-[8px] items-center justify-center overflow-clip py-[12px] rounded-[12px] shrink-0 w-full no-underline"
      >
        <svg className="shrink-0 size-[18px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .82h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.14a16 16 0 006.95 6.95l1.5-1.34a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[14px] text-center text-white whitespace-nowrap">
          Telepon layanan darurat 24 jam
        </p>
      </a>

      {/* Divider */}
      <div className="bg-[rgba(31,31,31,0.1)] h-px shrink-0 w-full" />

      {/* Services label */}
      <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#1f1f1f] text-[14px]">
        Layanan Darurat mencakup layanan:
      </p>

      {/* Card: Hari Kematian */}
      <div className="border border-[rgba(175,145,96,0.15)] flex flex-col gap-[14px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
        <p className="font-['Outfit',sans-serif] font-semibold leading-[18px] text-[#af9160] text-[14px] whitespace-nowrap">
          Hari Kematian
        </p>

        {/* Muslim / Non Muslim tabs */}
        <div className="bg-[#f1eee3] flex gap-[4px] items-center p-[4px] rounded-[12px] w-full">
          <button
            onClick={() => setIsMuslim(true)}
            className={`flex flex-1 gap-[8px] items-center justify-center min-w-0 px-[12px] py-[8px] rounded-[9px] transition-colors ${isMuslim ? "bg-[#d5c9aa]" : ""}`}
          >
            <svg className="shrink-0 size-[6px]" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill={isMuslim ? "#17120d" : "#9e9e9e"} /></svg>
            <p className={`font-['Outfit',sans-serif] font-semibold leading-[16px] text-[12px] whitespace-nowrap ${isMuslim ? "text-[#17120d]" : "text-[#6a6a6a]"}`}>
              Muslim
            </p>
          </button>
          <button
            onClick={() => setIsMuslim(false)}
            className={`flex flex-1 gap-[8px] items-center justify-center min-w-0 px-[12px] py-[8px] rounded-[9px] transition-colors ${!isMuslim ? "bg-[#d5c9aa]" : ""}`}
          >
            <svg className="shrink-0 size-[6px]" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill={!isMuslim ? "#17120d" : "#9e9e9e"} /></svg>
            <p className={`font-['Outfit',sans-serif] font-semibold leading-[16px] text-[12px] whitespace-nowrap ${!isMuslim ? "text-[#17120d]" : "text-[#6a6a6a]"}`}>
              Non Muslim
            </p>
          </button>
        </div>

        {/* Badge */}
        <p className="font-['Outfit',sans-serif] font-semibold leading-[14px] text-[#94c7b5] text-[10px] whitespace-nowrap tracking-[0.5px]">
          {isMuslim ? "KHUSUS MUSLIM" : "KHUSUS NON MUSLIM"}
        </p>

        {/* Bullet list */}
        <div className="flex flex-col gap-[8px] items-start w-full">
          {items.map((item, i) => (
            <div key={i} className="flex gap-[10px] items-start w-full">
              <BulletDot color="#707070" />
              <p className="flex-1 font-['Outfit',sans-serif] font-normal leading-[18px] text-[#707070] text-[12px]">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="flex flex-col gap-[8px] items-start pt-[8px] w-full">
          <p className="font-['Outfit',sans-serif] font-normal leading-[15px] text-[#e9196d] text-[11px] w-full">
            {footerNote}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Pricing Section ─── */
function SectionPricing() {
  const [outerTab, setOuterTab] = useState<"keanggotaan" | "darurat">("keanggotaan");
  const { navigateWithLoading } = usePageTransition();

  return (
    <div
      id="section-pricing"
      className="bg-white flex flex-col gap-[24px] items-start justify-center overflow-clip px-[20px] py-[40px] relative shrink-0 w-full"
    >
      {/* Heading Block */}
      <div className="flex flex-col gap-[10px] items-start overflow-clip shrink-0 w-full">
        <div className="bg-[rgba(175,145,96,0.12)] flex items-start overflow-clip px-[12px] py-[4px] rounded-[100px] shrink-0">
          <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#AF9160] text-[11px] tracking-[1.2px] whitespace-nowrap">
            TIPE LAYANAN
          </p>
        </div>
        <p className="font-['Lora',serif] font-bold text-[22px] text-[#1f1f1f] w-full leading-[1.4]">
          Tenang berpulang dengan dua pilihan layanan
        </p>
        <p className="font-['Outfit',sans-serif] font-normal leading-[1.4] text-[#707070] text-[14px] w-full">
          Siapkan semua layanan sejak jauh hari, atau dapatkan layanan cepat darurat di hari kematian.
        </p>
      </div>

      {/* Outer Tab Pills: Keanggotaan | Darurat */}
      <div className="bg-[#eee] flex h-[44px] items-center justify-center overflow-clip p-[4px] rounded-[12px] w-full">
        <button
          onClick={() => setOuterTab("keanggotaan")}
          className={`flex-1 h-[36px] flex items-center justify-center rounded-[8px] border-none cursor-pointer transition-all duration-200 ${outerTab === "keanggotaan"
            ? "bg-gradient-to-r from-black to-[#1a1a1a]"
            : "bg-transparent"
            }`}
        >
          <p className={`font-['Outfit',sans-serif] font-semibold text-[14px] whitespace-nowrap ${outerTab === "keanggotaan" ? "text-white" : "text-[#333]"}`}>
            Keanggotaan
          </p>
        </button>
        <button
          onClick={() => setOuterTab("darurat")}
          className={`flex-1 h-[36px] flex items-center justify-center rounded-[8px] border-none cursor-pointer transition-all duration-200 ${outerTab === "darurat"
            ? "bg-gradient-to-r from-black to-[#1a1a1a]"
            : "bg-transparent"
            }`}
        >
          <p className={`font-['Outfit',sans-serif] font-medium text-[14px] whitespace-nowrap ${outerTab === "darurat" ? "text-white font-semibold" : "text-[#333]"}`}>
            Darurat
          </p>
        </button>
      </div>

      {outerTab === "keanggotaan" && (
        <KeanggotaanCard onNavigate={() => navigateWithLoading("/purchase")} />
      )}
      {outerTab === "darurat" && <DaruratCard />}
    </div>
  );
}

/* ── Section: Siapa yang bisa kamu daftarkan? ─── */
function SectionCtaCards() {
  const { navigateWithLoading } = usePageTransition();

  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full">
      <div className="flex flex-col gap-[24px] items-start px-[20px] py-[36px] w-full">
        {/* Heading */}
        <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
          <p className="font-['Lora',serif] font-bold leading-[1.4] text-[#1f1f1f] text-[22px] w-full">
            Siapa yang bisa kamu daftarkan?
          </p>
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#707070] text-[13px] w-full">
            Rencanakan untuk dirimu sendiri, atau siapkan untuk keluarga yang kamu sayangi.
          </p>
        </div>

        {/* Card: Diri Sendiri */}
        <div className="bg-white flex flex-col gap-[16px] items-start justify-center overflow-clip px-[16px] py-[20px] relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(51,38,20,0.08)] shrink-0 w-full">
          <div className="flex gap-[16px] items-center shrink-0 w-full">
            <div className="bg-[#f4eee5] rounded-[14px] shrink-0 size-[48px]" />
            <p className="font-['Lora',serif] font-bold leading-[1.4] text-[#1f1f1f] text-[15px] whitespace-nowrap">
              Diri Sendiri
            </p>
          </div>
          <div className="flex flex-col gap-[14px] items-start w-full">
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.48] text-[#707070] text-[12px] w-full">
              Siapkan kepulangan yang layak untukmu, dan pastikan kepergianmu kelak tidak merepotkan keluargamu.
            </p>
            <button
              onClick={() => navigateWithLoading("/purchase", { state: { target: "self" } })}
              className="bg-[#AF9160] flex items-center justify-center overflow-clip px-[16px] py-[12px] rounded-[8px] shrink-0 w-full border-none cursor-pointer"
            >
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[13px] text-white whitespace-nowrap">
                Daftarkan diri sendiri
              </p>
            </button>
          </div>
        </div>

        {/* Card: Keluargamu */}
        <div className="bg-white flex flex-col gap-[16px] items-start justify-center overflow-clip px-[16px] py-[20px] relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(51,38,20,0.08)] shrink-0 w-full">
          <div className="flex gap-[16px] items-center shrink-0 w-full">
            <div className="bg-[#f4eee5] rounded-[14px] shrink-0 size-[48px]" />
            <p className="font-['Lora',serif] font-bold leading-[1.4] text-[#1f1f1f] text-[15px] whitespace-nowrap">
              Keluargamu
            </p>
          </div>
          <div className="flex flex-col gap-[14px] items-start w-full">
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.48] text-[#707070] text-[12px] w-full">
              Muliakan orang tua atau pasanganmu dengan prosesi kepulangan  yang bermartabat, tanpa merepotkan keluarga.
            </p>
            <button
              onClick={() => navigateWithLoading("/purchase", { state: { target: "family" } })}
              className="bg-[#876747] flex items-center justify-center overflow-clip px-[16px] py-[12px] rounded-[12px] shrink-0 w-full border-none cursor-pointer"
            >
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[13px] text-white whitespace-nowrap">
                Daftarkan keluarga jadi anggota
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Social Impact Section ─── */
function SectionSocialImpact() {
  return (
    <div
      id="section-impact"
      className="bg-[#1a140f] flex flex-col items-start overflow-clip relative shrink-0 w-full"
    >
      {/* Photo Block */}
      <div className="h-[158px] overflow-clip relative shrink-0 w-full">
        <div className="absolute bg-[#473829] inset-0" />
        <div className="absolute inset-0">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full"
            src={imgImage9}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(140,102,64,0.25) 0%, rgba(80,59,37,0.425) 50%, rgba(50,37,24,0.5125) 75%, rgba(20,15,10,0.6) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[90px] bg-gradient-to-b from-[rgba(20,15,10,0)] via-[rgba(20,15,10,0.7)] via-[60%] to-[#140f0a]" />
        {/* Badge */}
        <div className="absolute bg-[#BDA67A] flex items-start left-[20px] overflow-clip px-[12px] py-[5px] rounded-[100px] top-[24px]">
          <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#1a140f] text-[10px] tracking-[0.8px] whitespace-nowrap">
            DAMPAK SOSIAL
          </p>
        </div>
        {/* Heading */}
        <p className="absolute font-['Lora',serif] font-bold leading-[1.45] left-[20px] text-[18px] text-white bottom-[12px] right-[20px]">
          Kamu ikut beramal untuk bantu yang tak berpunya
        </p>
      </div>

      {/* Content Block */}
      <div className="bg-[#1a140f] relative shrink-0 w-full">
        <div className="overflow-clip size-full">
          <div className="flex flex-col gap-[20px] items-start pb-[36px] px-[20px] relative w-full">
            <p className="font-['Outfit',sans-serif] font-normal text-[13px] text-[rgba(255,255,255,0.6)] w-full leading-[1.55]">
              <span>{"Sebagian uang pendaftaranmu akan "}</span>
              <span className="font-['Outfit',sans-serif] font-semibold text-[#D5C9AA]">
                didonasikan untuk memberikan layanan pemakaman gratis bagi yang tak mampu.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section: Tentang Kitabisa ─── */
// function SectionTentangKitabisa() {
//   return (
//     <div className="bg-[#f5eee0] flex flex-col items-start overflow-clip relative shrink-0 w-full">
//       {/* Illustration Block */}
//       <div className="h-[175px] relative shrink-0 w-full overflow-clip">
//         <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 175">
//           <g clipPath="url(#clip0_kitabisa)">
//             <rect fill="#EADEC8" height="175" width="360" />
//             <rect fill="url(#paint0_kitabisa)" height="220" width="360" />
//             <ellipse cx="180" cy="220" fill="#D2B996" fillOpacity="0.35" rx="240" ry="140" />
//             <ellipse cx="180" cy="230" fill="#BD9B6C" fillOpacity="0.3" rx="210" ry="120" />
//             <ellipse cx="180" cy="250" fill="#A07848" fillOpacity="0.22" rx="250" ry="100" />
//             <circle cx="180" cy="0" fill="url(#paint1_kitabisa)" r="80" />
//             <circle cx="45" cy="65" fill="#A08250" fillOpacity="0.55" r="5" />
//             <circle cx="294" cy="49" fill="#A08250" fillOpacity="0.4" r="4" />
//             <circle cx="326" cy="126" fill="#A08250" fillOpacity="0.35" r="6" />
//             <circle cx="73" cy="148" fill="#A08250" fillOpacity="0.45" r="3" />
//             <circle cx="203.5" cy="33.5" fill="#A08250" fillOpacity="0.5" r="3.5" />
//             <circle cx="332.5" cy="82.5" fill="#A08250" fillOpacity="0.4" r="2.5" />
//             <circle cx="159" cy="164" fill="#A08250" fillOpacity="0.3" r="4" />
//             <rect fill="#A08250" fillOpacity="0.12" height="1" width="280" x="40" y="130" />
//             <rect fill="#A08250" fillOpacity="0.09" height="1" width="280" x="40" y="146" />
//             <rect fill="#A08250" fillOpacity="0.06" height="1" width="280" x="40" y="162" />
//           </g>
//           <defs>
//             <linearGradient gradientUnits="userSpaceOnUse" id="paint0_kitabisa" x1="0" x2="360" y1="0" y2="220">
//               <stop stopColor="#DCC8AA" />
//               <stop offset="0.5" stopColor="#EADAC0" />
//               <stop offset="1" stopColor="#F5EBD7" />
//             </linearGradient>
//             <radialGradient cx="0" cy="0" gradientTransform="translate(180 0) scale(160)" gradientUnits="userSpaceOnUse" id="paint1_kitabisa" r="1">
//               <stop stopColor="#DCAF64" stopOpacity="0.55" />
//               <stop offset="0.5" stopColor="#D2A050" stopOpacity="0.2" />
//               <stop offset="1" stopColor="#D2A050" stopOpacity="0" />
//             </radialGradient>
//             <clipPath id="clip0_kitabisa">
//               <rect fill="white" height="175" width="360" />
//             </clipPath>
//           </defs>
//         </svg>
//       </div>

//       {/* Content Block */}
//       <div className="relative shrink-0 w-full" style={{ background: "linear-gradient(to bottom, #f5eee0, white)" }}>
//         <div className="flex flex-col gap-[14px] items-start px-[24px] py-[32px] w-full">
//           <p className="font-['Lora',serif] font-bold leading-[1.4] text-[#1a140f] text-[22px] w-full">
//             Pulang dijalankan secara amanah dan profesional oleh Kitabisa
//           </p>
//           <div className="font-['Outfit',sans-serif] font-normal text-[#707070] text-[12px] w-full">
//             <p className="leading-[1.6]">Sejak 2013, Kitabisa telah menjadi platform galang dana dan donasi yang menjembatani kebaikan masyarakat Indonesia.</p>
//             <p className="leading-[1.6] mt-[0.5em]">Hingga saat ini, Kitabisa sudah memfasilitasi:</p>
//           </div>

//           {/* Stats Row */}
//           <div className="bg-[rgba(160,120,72,0.08)] flex items-stretch justify-between overflow-clip py-[16px] relative rounded-[14px] shrink-0 w-full">
//             {/* Stat 1 */}
//             <div className="flex flex-1 flex-col gap-[4px] items-center justify-center leading-[normal] overflow-clip relative">
//               <p className="font-['Lora',serif] font-bold text-[#a08250] text-[22px] whitespace-nowrap">11,7 jt+</p>
//               <p className="font-['Outfit',sans-serif] font-normal text-[#654d35] text-[12px] text-center">Donatur berdonasi</p>
//             </div>
//             {/* Separator */}
//             <div className="bg-[rgba(160,130,80,0.25)] self-stretch shrink-0 w-px" />
//             {/* Stat 2 */}
//             <div className="flex flex-1 flex-col gap-[4px] items-center justify-center leading-[normal] overflow-clip relative whitespace-nowrap">
//               <p className="font-['Lora',serif] font-bold text-[#a08250] text-[22px]">1 jt+</p>
//               <p className="font-['Outfit',sans-serif] font-normal text-[#654d35] text-[12px] text-center">Galang dana dibuat</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/* ── Main Landing Page ─── */
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle hash-based scroll
  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCta(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" }
    );
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fefefe] flex justify-center">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
        <NavbarMobileHeader
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col w-full pb-[160px]">
          <SectionHero ctaRef={ctaRef} />
          <SectionProblems />
          <SectionPricing />
          <SectionCtaCards />
          <SectionSocialImpact />
          {/* <SectionTentangKitabisa /> */}
          <Footer />
        </main>

        <StickyBottomCtaBar visible={showStickyCta} />
      </div>
    </div>
  );
}