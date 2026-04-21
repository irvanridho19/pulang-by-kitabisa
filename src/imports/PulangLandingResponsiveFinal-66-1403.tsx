import svgPaths from "./svg-7644vs790g";
import imgImageLogo from "@/assets/logo.png";
import imgImageHeroPhoto from "@/assets/hero-photo.png";
import imgImageProblemsBackground from "@/assets/problems-background.png";
import imgImage9 from "@/assets/image-9.png";
import imgWhite1 from "@/assets/footer-logo.png";
import imgAccentBar from "@/assets/accent-bar.png";

function NavbarMobileHeader() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] top-0 w-[360px]" data-name="Navbar / Mobile Header">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="h-[45px] relative shrink-0 w-[90px]" data-name="Image / Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLogo} />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Icon / Hamburger Menu">
        <div className="absolute inset-[18.75%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <g id="Vector">
              <path d={svgPaths.p21607980} fill="var(--fill-0, #3A3A3A)" />
              <path d={svgPaths.p2d36a500} fill="var(--fill-0, #3A3A3A)" />
              <path d={svgPaths.p3e646f0} fill="var(--fill-0, #3A3A3A)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="CTA Buttons">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#707070] text-[13.5px] text-center w-full">Mulai dari Rp 35.000/bulan</p>
      <div className="bg-[#1f1912] relative rounded-[100px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0 w-full" data-name="Button / Primary CTA">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[14px] relative w-full">
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">Daftar jadi anggota</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[100px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0 w-full" data-name="Button / Primary CTA">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#750d33] text-[12px] whitespace-nowrap">Pesan layanan darurat 24 jam via WhatsApp</p>
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-right">
              <div className="absolute inset-[12.5%_0]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
                  <path d={svgPaths.p5ea7d70} fill="var(--fill-0, #750D33)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroTextCta() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Hero / Text + CTA">
      <div className="font-['Lora:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#1f2a37] text-[24px] w-full">
        <p className="leading-[1.4] mb-0">Menemanimu</p>
        <p className="leading-[1.4] text-[#af9160]">Menyiapkan Kepulangan</p>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#707070] text-[0px] w-full">
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.6] text-[13.5px]">PULANG</span>
        <span className="leading-[1.6] text-[13.5px]">{` memberi layanan lengkap mulai dari pra, hari kematian, & pasca kepulangan.`}</span>
      </p>
      <CtaButtons />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Hero / Content">
      <HeroTextCta />
    </div>
  );
}

function HeroImageContainer() {
  return (
    <div className="aspect-[320/260] overflow-clip relative rounded-[22px] shadow-[0px_10px_28px_0px_rgba(46,31,18,0.18)] shrink-0 w-full" data-name="Hero / Image Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[322px] left-[calc(50%-14.5px)] top-[calc(50%-1px)] w-[583px]" data-name="Image / Hero Photo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHeroPhoto} />
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(245,229,209,0)] h-[260px] left-0 to-[rgba(38,26,13,0.25)] top-0 via-[60%] via-[rgba(245,229,209,0)] w-[320px]" data-name="Image Overlay" />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#fffdf9] gap-[24px] items-start justify-center overflow-clip pb-[40px] pt-[44px] px-[20px] relative shrink-0 to-[#f5f0e8] w-[360px]" data-name="Section / Hero">
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[363px] top-[503px]" data-name="Decoration / Ellipse">
        <div className="absolute inset-[-165.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1563 1563">
            <g filter="url(#filter0_f_66_1472)" id="Decoration / Ellipse" opacity="0.3">
              <circle cx="781.5" cy="781.5" fill="var(--fill-0, #AF9160)" r="181.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1563" id="filter0_f_66_1472" width="1563" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_66_1472" stdDeviation="300" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <HeroContent />
      <HeroImageContainer />
    </div>
  );
}

function ProblemsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-white w-full" data-name="Problems / Content">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[22px] w-[min-content]">{`Kenapa penting menyiapkan kepulangan? `}</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[14px] w-[min-content]">Banyak hal yang harus diurus, menyita waktu dan biaya. Beban emosionalnya pun berat.</p>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon Container">
          <rect fill="var(--fill-0, #BDA67A)" fillOpacity="0.15" height="36" rx="8.18182" width="36" />
          <rect height="11.8636" id="Rectangle" rx="1.84091" stroke="var(--stroke-0, #BDA67A)" strokeWidth="1.22727" width="18.4091" x="8.79544" y="12.0681" />
          <rect height="5.31818" id="Rectangle_2" rx="1.02273" stroke="var(--stroke-0, #BDA67A)" strokeWidth="1.22727" width="6.95455" x="20.25" y="15.3413" />
          <circle cx="23.7273" cy="17.9997" fill="var(--fill-0, #BDA67A)" id="Ellipse" r="1.63636" />
          <line id="Line" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.22727" x1="12.0682" x2="23.9319" y1="10.8408" y2="10.8408" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <IconContainer />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[15px] text-white w-[249px]">{`Biaya pengurusan kematian mahal `}</p>
    </div>
  );
}

function CardHighCostInner() {
  return (
    <div className="bg-[rgba(31,31,31,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Card / High Cost Inner">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative w-full">
        <Frame1 />
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#bfbfbf] text-[13px] w-[min-content]">{`Mobil jenazah, pemulasaran jenazah, & kebutuhan pemulasaran butuh biaya besar.`}</p>
      </div>
    </div>
  );
}

function CardHighCost() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Card / High Cost">
      <CardHighCostInner />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon Container">
          <rect fill="var(--fill-0, #BDA67A)" fillOpacity="0.15" height="36" rx="8.18182" width="36" />
          <rect height="18.4091" id="Rectangle" rx="1.02273" stroke="var(--stroke-0, #BDA67A)" strokeWidth="1.22727" width="15.1364" x="10.4318" y="8.79545" />
          <line id="Line" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.22727" x1="14.5227" x2="21.4773" y1="14.9318" y2="14.9318" />
          <line id="Line_2" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.22727" x1="14.5227" x2="21.4773" y1="18.2045" y2="18.2045" />
          <line id="Line_3" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.22727" x1="14.5227" x2="18.2045" y1="21.4773" y2="21.4773" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <IconContainer1 />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap">Administrasi menyita waktu</p>
    </div>
  );
}

function CardLongAdministrationInner() {
  return (
    <div className="bg-[rgba(31,31,31,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Card / Long Administration Inner">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative w-full">
        <Frame2 />
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#bfbfbf] text-[13px] w-[min-content]">{`Pasca kematian, perlu mengurus banyak dokumen & administrasi yang ribet.`}</p>
      </div>
    </div>
  );
}

function CardLongAdministration() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Card / Long Administration">
      <CardLongAdministrationInner />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon Container">
          <rect fill="var(--fill-0, #BDA67A)" fillOpacity="0.15" height="36" rx="8.18182" width="36" />
          <path d={svgPaths.p16b71a00} id="Ellipse" stroke="var(--stroke-0, #BDA67A)" strokeWidth="1.22727" />
          <circle cx="18" cy="13.9091" fill="var(--fill-0, #BDA67A)" id="Ellipse_2" r="1.63636" />
          <line id="Line" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.22727" x1="18.2744" x2="16.3687" y1="22.9142" y2="26.7256" />
          <line id="Line_2" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.22727" x1="18.8233" x2="20.729" y1="23.1835" y2="26.9949" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <IconContainer2 />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[15px] text-white w-[242px]">{`Risiko membebani keluarga `}</p>
    </div>
  );
}

function CardFarFromFamilyInner() {
  return (
    <div className="bg-[rgba(31,31,31,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Card / Far From Family Inner">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative w-full">
        <Frame3 />
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#bfbfbf] text-[13px] w-[min-content]">Tanpa persiapan matang, kepulanganmu bisa memberatkan keluarga.</p>
      </div>
    </div>
  );
}

function CardFarFromFamily() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Card / Far From Family">
      <CardFarFromFamilyInner />
    </div>
  );
}

function ProblemsCardsList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Problems / Cards List">
      <CardHighCost />
      <CardLongAdministration />
      <CardFarFromFamily />
    </div>
  );
}

function SectionProblems() {
  return (
    <div className="bg-[rgba(31,31,31,0.4)] relative shrink-0 w-full" data-name="Section / Problems">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[20px] py-[36px] relative w-full">
          <div className="-translate-x-1/2 absolute bottom-0 h-[1320px] left-1/2 mix-blend-multiply w-[1980px]" data-name="Image / Problems Background">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageProblemsBackground} />
          </div>
          <ProblemsContent />
          <ProblemsCardsList />
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(175,145,96,0.12)] content-stretch flex items-start overflow-clip px-[12px] py-[4px] relative rounded-[100px] shrink-0" data-name="Badge">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#af9160] text-[11px] tracking-[1.2px] whitespace-nowrap">TIPE LAYANAN</p>
    </div>
  );
}

function HeadingBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Heading Block">
      <Badge />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[#1f1f1f] text-[22px] w-[min-content]">Pilih tipe layanan yang kamu butuhkan</p>
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.4] min-w-full relative shrink-0 text-[#1f1f1f] text-[14px] w-[min-content]">Apa pun layanan pilihanmu, Pulang siap hadir langsung membantu keluargamu di masa sulit</p>
    </div>
  );
}

function TabBulananAktif() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] from-[#d8be90] h-[36px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[100px] shadow-[0px_2px_8px_0px_rgba(20,13,5,0.35)] to-[#a88958]" data-name="Tab / Bulanan (Aktif)">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] whitespace-nowrap">Keanggotaan</p>
    </div>
  );
}

function TabTahunan() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[100px]" data-name="Tab / Tahunan">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center px-[16px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3a3a3a] text-[14px] whitespace-nowrap">Darurat</p>
        </div>
      </div>
    </div>
  );
}

function StateRefTabBulananInactive() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex h-[44px] items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 w-[320px]" data-name="State Ref / Tab Bulanan (inactive)">
      <TabBulananAktif />
      <TabTahunan />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <StateRefTabBulananInactive />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[rgba(175,145,96,0.25)] relative rounded-[100px] shrink-0" data-name="Badge">
      <div className="content-stretch flex items-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#af9160] text-[10px] tracking-[0.8px] whitespace-nowrap">LEBIH EFISIEN</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Bulanan() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[#d8be90] min-h-px min-w-px relative rounded-[100px] shadow-[0px_2px_8px_0px_rgba(20,13,5,0.35)] to-[#a88958]" data-name="Bulanan">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative w-full">
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] whitespace-nowrap">Bulanan</p>
        </div>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#6cca51] content-stretch flex items-center overflow-clip px-[6px] py-[3px] relative rounded-[100px] shrink-0" data-name="Chip">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[9px] text-white whitespace-nowrap">Lebih Hemat</p>
    </div>
  );
}

function Tahunan() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tahunan">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[14px] py-[8px] relative w-full">
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Tahunan</p>
          <Chip />
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 w-[280px]" data-name="Tab">
      <Bulanan />
      <Tahunan />
    </div>
  );
}

function PRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline overflow-clip relative shrink-0" data-name="PRow">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[#e2d0a8] text-[34px]">Rp35.000</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[rgba(255,255,255,0.38)]">/ bulan</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] overflow-clip pb-[4px] relative shrink-0 w-[280px] whitespace-nowrap" data-name="Price">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[11px] text-[rgba(255,255,255,0.38)] tracking-[0.2px]">Mulai dari</p>
      <PRow />
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[11px] text-white">Rp420.000 dalam setahun</p>
    </div>
  );
}

function NotePreview() {
  return (
    <div className="bg-[rgba(100,180,160,0.2)] h-[31px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Note Preview">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Outfit:Regular',sans-serif] font-normal h-[15px] leading-[0] relative shrink-0 text-[#c8ebe1] text-[10px] w-[256px]">
          <span className="leading-[normal]">{`✅ Uang santunan duka `}</span>
          <span className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] text-white">Rp 5.000.000</span>
          <span className="leading-[normal]">{` untuk keluarga`}</span>
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(100,180,160,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#af9160] content-stretch flex items-center justify-center overflow-clip py-[13px] relative rounded-[100px] shrink-0 w-[280px]" data-name="CTA">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Daftar jadi anggota</p>
    </div>
  );
}

function Ib() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="IB">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-white whitespace-pre">{`📝  Sebelum kematian`}</p>
    </div>
  );
}

function Usp() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="USP/📁">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Ib />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[17px] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.85)] w-[min-content]">Bantuan mencari dan memesan makam, penyimpanan dokumen penting, dll.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UspR() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[280px]" data-name="USP R1">
      <Usp />
    </div>
  );
}

function Ib1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="IB">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-white whitespace-pre">{`🕌  Di hari kematian`}</p>
    </div>
  );
}

function Usp1() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="USP/🚗">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Ib1 />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[17px] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.85)] w-[min-content]">{`Pemulasaran jenazah untuk muslim & non-muslim, penyediaan ambulans, dll.`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UspR1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[280px]" data-name="USP R2">
      <Usp1 />
    </div>
  );
}

function Ib2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="IB">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-white whitespace-pre">{`📋  Pasca pemakaman`}</p>
    </div>
  );
}

function Usp2() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="USP/🚗">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Ib2 />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[17px] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.85)] w-[min-content]">Tim Pulang akan mengirim satu asisten khusus untuk bantu keluarga mengurus administrasi.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UspR2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[280px]" data-name="USP R2">
      <Usp2 />
    </div>
  );
}

function SmL() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 text-[#d8be90] text-[12px]" data-name="smL">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0">✨</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0">Lihat semua manfaat untuk anggota</p>
    </div>
  );
}

function SeeMore() {
  return (
    <div className="bg-[rgba(175,145,96,0.12)] relative rounded-[100px] shrink-0 w-[280px]" data-name="See More">
      <div className="content-stretch flex items-center justify-between leading-[normal] overflow-clip px-[14px] py-[11px] relative rounded-[inherit] w-full whitespace-nowrap">
        <SmL />
        <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[18px] text-[rgba(216,190,144,0.6)]">›</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.3)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function PBadge() {
  return (
    <div className="bg-[#da336b] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[24px] shrink-0" data-name="PBadge">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">Konsultasi Psikolog - Gratis 3 Sesi</p>
    </div>
  );
}

function Psikolog() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[280px]" data-name="Psikolog">
      <PBadge />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] w-[256px]">Keluarga bisa berkonsultasi dengan psikolog profesional di masa duka</p>
    </div>
  );
}

function PlanAltUspGridBottomSheet() {
  return (
    <div className="bg-[#1f1914] content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[28px] pt-[22px] px-[20px] relative rounded-[20px] shrink-0 w-[320px]" data-name="Plan Alt — USP Grid + Bottom Sheet">
      <Badge1 />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[17px] text-white w-[280px]">Layanan Keanggotaan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.7)] w-[280px]">Cocok untuk yang ingin mempersiapkan kepulangan sejak jauh hari.</p>
      <Tab />
      <Price />
      <NotePreview />
      <Cta />
      <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-[280px]" data-name="Rectangle" />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#af9160] text-[12px] tracking-[0.3px] whitespace-nowrap">Layanan yang kamu dapatkan</p>
      <UspR />
      <UspR1 />
      <UspR2 />
      <SeeMore />
      <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-[280px]" data-name="Rectangle" />
      <Psikolog />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.8)] w-[280px]">*Layanan bisa diakses setelah melewati masa tunggu 3 bulan</p>
    </div>
  );
}

function SectionPricing() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-center overflow-clip px-[20px] py-[40px] relative shrink-0 w-[360px]" data-name="Section / Pricing">
      <HeadingBlock />
      <Frame4 />
      <PlanAltUspGridBottomSheet />
    </div>
  );
}

function HeadingBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Heading Block">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#1f1f1f] text-[22px] w-full">Siapa yang bisa kamu daftarkan?</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b6b6b] text-[13px] w-full">Rencanakan untuk dirimu sendiri, atau siapkan untuk keluarga yang kamu sayangi.</p>
    </div>
  );
}

function Illustration() {
  return <div className="bg-[#f4eee5] rounded-[14px] shrink-0 size-[48px]" data-name="Illustration" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Illustration />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#1f1f1f] text-[15px] whitespace-nowrap">Diri Sendiri</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#af9160] relative rounded-[100px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[8px] relative w-full">
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">Mulai persiapanmu</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start min-w-[100px] overflow-clip relative shrink-0 w-full" data-name="Content">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.48] relative shrink-0 text-[#737373] text-[12px] w-full">Pastikan kepergianmu kelak tidak meninggalkan beban dan kebingungan bagi keluarga.</p>
      <Frame />
    </div>
  );
}

function CardUntukDiriSendiri() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip px-[16px] py-[20px] relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(51,38,20,0.08)] shrink-0 w-[320px]" data-name="Card / Untuk Diri Sendiri">
      <Frame8 />
      <Content />
    </div>
  );
}

function Illustration1() {
  return <div className="bg-[#f4eee5] rounded-[14px] shrink-0 size-[48px]" data-name="Illustration" />;
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Illustration1 />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#1f1f1f] text-[15px] whitespace-nowrap">Keluargamu</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#594635] relative rounded-[100px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[8px] relative w-full">
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">Daftarkan keluarga jadi anggota</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start min-w-[100px] overflow-clip relative shrink-0 w-full" data-name="Content">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.48] relative shrink-0 text-[#737373] text-[12px] w-full">Pastikan keluargamu mendapat layanan terbaik saat berpulang.</p>
      <Frame5 />
    </div>
  );
}

function CardUntukDiriSendiri1() {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(51,38,20,0.08)] shrink-0 w-full" data-name="Card / Untuk Diri Sendiri">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame10 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <CardUntukDiriSendiri1 />
    </div>
  );
}

function SectionCtaCards() {
  return (
    <div className="bg-[#f9f7f3] relative shrink-0 w-full" data-name="Section / CTA Cards">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[36px] relative w-full">
          <HeadingBlock1 />
          <CardUntukDiriSendiri />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#bda67a] content-stretch flex items-start left-[20px] overflow-clip px-[12px] py-[5px] rounded-[100px] top-[24px]" data-name="Badge">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a140f] text-[10px] tracking-[0.8px] whitespace-nowrap">DAMPAK SOSIAL</p>
    </div>
  );
}

function PhotoBlock() {
  return (
    <div className="h-[158px] overflow-clip relative shrink-0 w-[360px]" data-name="Photo Block">
      <div className="absolute bg-[#473829] h-[210px] left-0 top-0 w-[360px]" data-name="Photo BG" />
      <div className="-translate-y-1/2 absolute h-[240px] left-0 top-1/2 w-[360px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgImage9} />
      </div>
      <div className="absolute h-[210px] left-0 top-0 w-[360px]" data-name="Texture Overlay" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 360 210\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.714 0 0 9.5455 102.86 105)\\'><stop stop-color=\\'rgba(140,102,64,0.25)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(80,59,37,0.425)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(50,37,24,0.5125)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(20,15,10,0.6)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute bg-gradient-to-b from-[rgba(20,15,10,0)] h-[120px] left-0 to-[#140f0a] top-[90px] via-[60%] via-[rgba(20,15,10,0.7)] w-[360px]" data-name="Bottom Gradient" />
      <Badge2 />
      <p className="absolute font-['Lora:Bold',sans-serif] font-bold leading-[1.45] left-[20px] text-[18px] text-white top-[90px] w-[320px]">Kamu ikut beramal untuk bantu yang tak berpunya</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(189,166,122,0.13)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[6px] py-[14px] relative size-full text-center">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.45)] w-full">Dana terkumpul</p>
          <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#bda67a] text-[20px] w-full">Rp5 Juta</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(189,166,122,0.7)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(189,166,122,0.25)]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(189,166,122,0.13)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[6px] py-[14px] relative size-full text-center">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.45)] w-full">Penerima bantuan</p>
          <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#bda67a] text-[20px] w-full">438+</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(189,166,122,0.7)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(189,166,122,0.25)]" />
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch flex gap-[8px] h-[73px] items-start overflow-clip relative shrink-0 w-full" data-name="Stats Row">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function ContentBlock() {
  return (
    <div className="bg-[#1a140f] relative shrink-0 w-full" data-name="Content Block">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[36px] px-[20px] relative w-full">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] w-full">
            <span className="leading-[1.55]">{`Sebagian uang pendaftaranmu akan `}</span>
            <span className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.55] text-[#d5c9aa]">didonasikan untuk memberikan layanan pemakaman gratis bagi yang tak mampu.</span>
          </p>
          <StatsRow />
        </div>
      </div>
    </div>
  );
}

function SectionSocialImpact() {
  return (
    <div className="bg-[#1a140f] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[360px]" data-name="Section / Social Impact">
      <PhotoBlock />
      <ContentBlock />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Top Row">
      <div className="h-[40px] relative shrink-0 w-[80px]" data-name="white 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhite1} />
      </div>
    </div>
  );
}

function BottomRow() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Bottom Row">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.25)] text-right whitespace-nowrap">© 2026 Pulang by Kitabisa.</p>
    </div>
  );
}

function FooterInner() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Inner">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[24px] pt-[28px] px-[24px] relative w-full">
          <TopRow />
          <div className="bg-[rgba(255,255,255,0.07)] h-px shrink-0 w-full" data-name="Inner Divider 2" />
          <BottomRow />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1a140f] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer">
      <div className="bg-[rgba(255,255,255,0.08)] h-px shrink-0 w-[360px]" data-name="Divider" />
      <FooterInner />
      <div className="h-[3px] relative shrink-0 w-[360px]" data-name="Accent Bar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAccentBar} />
      </div>
    </div>
  );
}

function PageContent() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[69px] w-[360px]" data-name="Page Content">
      <SectionHero />
      <SectionProblems />
      <SectionPricing />
      <SectionCtaCards />
      <SectionSocialImpact />
      <Footer />
    </div>
  );
}

export default function PulangLandingResponsiveFinal() {
  return (
    <div className="bg-white relative size-full" data-name="Pulang Landing - Responsive Final">
      <NavbarMobileHeader />
      <PageContent />
    </div>
  );
}