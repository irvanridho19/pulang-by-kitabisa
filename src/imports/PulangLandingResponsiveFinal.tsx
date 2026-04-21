import svgPaths from "./svg-sufop3nt1x";
import imgImageLogo from "@/assets/logo.png";
import imgImageHeroPhoto from "@/assets/hero-photo.png";
import imgImageProblemsBackground from "@/assets/problems-background.png";
import imgImage9 from "@/assets/image-9.png";
import imgWhite1 from "@/assets/footer-logo.png";
import imgAccentBar from "@/assets/accent-bar.png";

function StickyBottomCtaBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col items-center left-1/2 px-[16px] py-[12px] rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.05)] w-[360px]" data-name="Sticky / Bottom CTA Bar">
      <div className="bg-[#1f1f1f] relative rounded-[36px] shrink-0 w-full" data-name="Button / Sticky CTA">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative w-full">
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">Daftar jadi anggota</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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

function Badge() {
  return (
    <div className="bg-[rgba(175,145,96,0.12)] relative rounded-[100px] shrink-0" data-name="Badge">
      <div className="content-stretch flex items-start overflow-clip px-[12px] py-[5px] relative rounded-[inherit]">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#967240] text-[10px] tracking-[1.5px] whitespace-nowrap">PULANG BY KITABISA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.45)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="CTA Buttons">
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
      <div className="font-['Lora:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#1f2a37] text-[0px] text-[24px] w-full">
        <p className="mb-0">
          <span className="leading-[1.4]">{`Menyiapkan `}</span>
          <span className="leading-[1.4] text-[#af9160]">Kepulangan</span>
          <span className="leading-[1.4]">,</span>
        </p>
        <p>
          <span className="leading-[1.4]">{`agar Tenang saat `}</span>
          <span className="leading-[1.4] text-[#af9160]">Perpisahan</span>
        </p>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#707070] text-[0px] text-[13.5px] w-full">
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.6]">PULANG</span>
        <span className="leading-[1.6]">{` me`}</span>
        <span className="leading-[1.6]">layani pengurusan jenazah</span>
        <span className="leading-[1.6]">{` `}</span>
        <span className="leading-[1.6]">{`hingga `}</span>
        <span className="leading-[1.6]">{`pasca pemakaman. `}</span>
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.6]">Keanggotaan mulai Rp120.000/tahun</span>
        <span className="leading-[1.6]">.</span>
      </p>
      <CtaButtons />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-end relative shrink-0 w-full" data-name="Hero / Content">
      <Badge />
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
            <g filter="url(#filter0_f_36_1393)" id="Decoration / Ellipse" opacity="0.3">
              <circle cx="781.5" cy="781.5" fill="var(--fill-0, #AF9160)" r="181.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1563" id="filter0_f_36_1393" width="1563" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_36_1393" stdDeviation="300" />
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

function Badge1() {
  return (
    <div className="bg-[#bda67a] content-stretch flex items-start overflow-clip px-[12px] py-[4px] relative rounded-[100px] shrink-0" data-name="Badge">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.2px] whitespace-nowrap">FAKTA KEMATIAN</p>
    </div>
  );
}

function ProblemsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Problems / Content">
      <Badge1 />
      <p className="font-['Lora:Bold',sans-serif] font-['Outfit:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[0px] text-[22px] text-white w-[min-content]">
        <span className="leading-[1.4]">{`Kenyataannya, `}</span>
        <span className="leading-[1.4] text-[#bda67a]">kematian</span>
        <span className="leading-[1.4]">{` tidak sederhana`}</span>
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[14px] text-white w-[min-content]">Banyak hal yang harus diurus, menyita waktu dan biaya. Beban emosionalnya pun berat.</p>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon Container">
          <rect fill="var(--fill-0, #BDA67A)" fillOpacity="0.15" height="44" rx="10" width="44" />
          <rect height="14.5" id="Rectangle" rx="2.25" stroke="var(--stroke-0, #BDA67A)" strokeWidth="1.5" width="22.5" x="10.75" y="14.75" />
          <rect height="6.5" id="Rectangle_2" rx="1.25" stroke="var(--stroke-0, #BDA67A)" strokeWidth="1.5" width="8.5" x="24.75" y="18.75" />
          <circle cx="29" cy="22" fill="var(--fill-0, #BDA67A)" id="Ellipse" r="2" />
          <line id="Line" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.5" x1="14.75" x2="29.25" y1="13.25" y2="13.25" />
        </g>
      </svg>
    </div>
  );
}

function CardHighCostInner() {
  return (
    <div className="bg-[rgba(31,31,31,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Card / High Cost Inner">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative w-full">
        <IconContainer />
        <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[15px] text-white w-[min-content]">Biaya pengurusan kematian tinggi</p>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#bfbfbf] text-[13px] w-[min-content]">Pengurusan jenazah hingga pemakaman butuh biaya besar. Sering juga, banyak biaya tak terduga.</p>
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
    <div className="relative shrink-0 size-[44px]" data-name="Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon Container">
          <rect fill="var(--fill-0, #BDA67A)" fillOpacity="0.15" height="44" rx="10" width="44" />
          <rect height="22.5" id="Rectangle" rx="1.25" stroke="var(--stroke-0, #BDA67A)" strokeWidth="1.5" width="18.5" x="12.75" y="10.75" />
          <line id="Line" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.5" x1="17.75" x2="26.25" y1="18.25" y2="18.25" />
          <line id="Line_2" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.5" x1="17.75" x2="26.25" y1="22.25" y2="22.25" />
          <line id="Line_3" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.5" x1="17.75" x2="22.25" y1="26.25" y2="26.25" />
        </g>
      </svg>
    </div>
  );
}

function CardLongAdministrationInner() {
  return (
    <div className="bg-[rgba(31,31,31,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Card / Long Administration Inner">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative w-full">
        <IconContainer1 />
        <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[15px] text-white w-[min-content]">Administrasi panjang dan menyita waktu</p>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#bfbfbf] text-[13px] w-[min-content]">Urusan administrasi tidak selesai di pemakaman. Setelahnya, masih banyak dokumen dan birokrasi lain yang harus diurus.</p>
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
    <div className="relative shrink-0 size-[44px]" data-name="Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon Container">
          <rect fill="var(--fill-0, #BDA67A)" fillOpacity="0.15" height="44" rx="10" width="44" />
          <path d={svgPaths.p1145ba80} id="Ellipse" stroke="var(--stroke-0, #BDA67A)" strokeWidth="1.5" />
          <circle cx="22" cy="17" fill="var(--fill-0, #BDA67A)" id="Ellipse_2" r="2" />
          <line id="Line" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.5" x1="22.3354" x2="20.0062" y1="29.0062" y2="33.6646" />
          <line id="Line_2" stroke="var(--stroke-0, #BDA67A)" strokeLinecap="round" strokeWidth="1.5" x1="23.0062" x2="25.3354" y1="28.3354" y2="32.9938" />
        </g>
      </svg>
    </div>
  );
}

function CardFarFromFamilyInner() {
  return (
    <div className="bg-[rgba(31,31,31,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Card / Far From Family Inner">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative w-full">
        <IconContainer2 />
        <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[15px] text-white w-[min-content]">Beberapa orang mungkin berada jauh dari kerabat</p>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#bfbfbf] text-[13px] w-[min-content]">Beberapa orang, seperti perantau, tidak punya akses ke keluarga untuk dibantu mengurus prosesi kematian yang panjang.</p>
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

function Badge2() {
  return (
    <div className="bg-[rgba(175,145,96,0.12)] content-stretch flex items-start overflow-clip px-[12px] py-[4px] relative rounded-[100px] shrink-0" data-name="Badge">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#af9160] text-[11px] tracking-[1.2px] whitespace-nowrap">MANFAAT YANG DIDAPATKAN</p>
    </div>
  );
}

function HeadingBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Heading Block">
      <Badge2 />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#1f1f1f] text-[0px] text-[22px] w-[min-content]">
        <span className="leading-[1.4]">{`Apa pun layanan yang kamu pilih, `}</span>
        <span className="leading-[1.4] text-[#af9160]">Asisten Kepulangan</span>
        <span className="leading-[1.4]">{` siap hadir langsung mendampingi`}</span>
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#6b6b6b] text-[14px] w-[min-content]">Harga sudah mencakup semua layanan.</p>
    </div>
  );
}

function PlanBadge() {
  return (
    <div className="bg-[rgba(175,145,96,0.25)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Plan Badge">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#af9160] text-[10px] tracking-[0.8px] whitespace-nowrap">LEBIH EFISIEN</p>
    </div>
  );
}

function PriceRow() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 w-full" data-name="Price Row">
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[11px] text-[rgba(175,145,96,0.8)] w-[min-content]">Mulai dari</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#af9160] text-[26px] w-[min-content]">Rp30.000</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">per bulan</p>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#af9160] content-stretch flex h-[42px] items-center justify-center overflow-clip py-[12px] relative rounded-[100px] shrink-0 w-full" data-name="CTA">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold h-full leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Daftar jadi anggota</p>
    </div>
  );
}

function Note() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] h-[34px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative self-stretch shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-pre">{`⏳  Masa tunggu 3 bulan sejak pendaftaran`}</p>
        </div>
      </div>
    </div>
  );
}

function ItemPenulisanSuratWasiat() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Penulisan surat wasiat">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Menulis surat wasiat</p>
    </div>
  );
}

function ItemDigitalVaultDokumenPenting() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Digital Vault dokumen penting">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Menyimpan dokumen penting secara online</p>
    </div>
  );
}

function ItemPemesananKavlingMakam() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Pemesanan kavling makam">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Mencari dan memesan makam</p>
    </div>
  );
}

function GroupPersiapan() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Group / 📝  Persiapan">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#af9160] text-[12px] tracking-[0.3px] w-full whitespace-pre-wrap">{`📝  Di tahap persiapan, kamu dibantu:`}</p>
      <ItemPenulisanSuratWasiat />
      <ItemDigitalVaultDokumenPenting />
      <ItemPemesananKavlingMakam />
    </div>
  );
}

function ItemPemulasaranJenazahMuslimNonMuslim() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Pemulasaran jenazah Muslim & non-Muslim">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">{`Pemulasaran jenazah (Muslim & non-Muslim)`}</p>
    </div>
  );
}

function ItemAmbulansJenazahPremium() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Ambulans jenazah premium">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Memesankan ambulans premium</p>
    </div>
  );
}

function ItemTransportasiKeluargaHiAce14Seat() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Transportasi keluarga Hi Ace 14 seat">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <div className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">
        <p className="mb-0">Menyediakan transportasi keluarga</p>
        <p>Hi Ace 14 seat</p>
      </div>
    </div>
  );
}

function GroupHariKematian() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Group / 🕌  Hari Kematian">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#af9160] text-[12px] tracking-[0.3px] w-full whitespace-pre-wrap">{`🕌  Saat hari kematian, Asisten Kepulangan hadir membantu:`}</p>
      <ItemPemulasaranJenazahMuslimNonMuslim />
      <ItemAmbulansJenazahPremium />
      <ItemTransportasiKeluargaHiAce14Seat />
    </div>
  );
}

function ItemPendampinganPengurusanDokumen() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Pendampingan pengurusan dokumen">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <div className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">
        <p className="mb-0">Mengurus semua administrasi dokumen</p>
        <p className="mb-0">(akta kematian, tutup rekening bank,</p>
        <p>penutupan BPJS, dll)</p>
      </div>
    </div>
  );
}

function ItemKonsultasiWarisAset() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Konsultasi waris & aset">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Menjadwalkan konseling psikologis</p>
    </div>
  );
}

function ItemKonsultasiWarisAset1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Konsultasi waris & aset">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Memberikan santunan tunai untuk kebutuhan lain-lain di rumah</p>
    </div>
  );
}

function GroupPascaPemakaman() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Group / 📋  Pasca Pemakaman">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#af9160] text-[12px] tracking-[0.3px] w-full whitespace-pre-wrap">{`📋  Pasca pemakaman, Asisten Kepulangan hadir membantu:`}</p>
      <ItemPendampinganPengurusanDokumen />
      <ItemKonsultasiWarisAset />
      <ItemKonsultasiWarisAset1 />
    </div>
  );
}

function PlanPersiapanJangkaPanjang() {
  return (
    <div className="bg-[#1f1914] relative rounded-[20px] shrink-0 w-full" data-name="Plan / Persiapan Jangka Panjang">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[22px] relative w-full">
          <PlanBadge />
          <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[17px] text-white w-[min-content]">Layanan Keanggotaan</p>
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[13px] text-[rgba(255,255,255,0.7)] w-[min-content]">Cocok untuk yang ingin mempersiapkan kepulangan sejak jauh hari.</p>
          <PriceRow />
          <Cta />
          <Note />
          <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
          <GroupPersiapan />
          <GroupHariKematian />
          <GroupPascaPemakaman />
        </div>
      </div>
    </div>
  );
}

function PlanBadge1() {
  return (
    <div className="bg-[rgba(89,70,53,0.12)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Plan Badge">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#594635] text-[10px] tracking-[0.8px] whitespace-nowrap">TIBA DALAM 1 JAM</p>
    </div>
  );
}

function PriceRow1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 w-full" data-name="Price Row">
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[11px] text-[rgba(89,70,53,0.5)] w-[min-content]">Mulai dari</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#594635] text-[26px] w-[min-content]">Rp9.000.000</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#9e9e9e] text-[12px] whitespace-nowrap">sekali layanan</p>
    </div>
  );
}

function Cta1() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex h-[42px] items-center justify-center overflow-clip py-[12px] relative rounded-[100px] shrink-0 w-full" data-name="CTA">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold h-full leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Pesan layanan darurat</p>
    </div>
  );
}

function Note1() {
  return (
    <div className="bg-[rgba(89,70,53,0.06)] h-[34px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative self-stretch shrink-0 text-[12px] text-[rgba(89,70,53,0.75)] whitespace-pre">{`⚡  Respon cepat · Siap 24/7`}</p>
        </div>
      </div>
    </div>
  );
}

function ItemPemulasaranJenazahMuslimNonMuslim1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Pemulasaran jenazah Muslim & non-Muslim">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #594635)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#1f1f1f] text-[13px] whitespace-nowrap">{`Pemulasaran jenazah (Muslim & non-Muslim)`}</p>
    </div>
  );
}

function ItemAmbulansJenazahPremium1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Ambulans jenazah premium">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #594635)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#1f1f1f] text-[13px] whitespace-nowrap">Memesankan ambulans premium</p>
    </div>
  );
}

function ItemTransportasiKeluargaHiAce14Seat1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Transportasi keluarga Hi Ace 14 seat">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #594635)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <div className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#1f1f1f] text-[13px] whitespace-nowrap">
        <p className="mb-0">Memesankan transportasi keluarga</p>
        <p>Hi Ace 14 seat</p>
      </div>
    </div>
  );
}

function GroupHariKematian1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Group / 🕌  Hari Kematian">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#594635] text-[12px] tracking-[0.3px] w-full whitespace-pre-wrap">{`🕌  Saat hari kematian, Asisten Kepulangan hadir membantu:`}</p>
      <ItemPemulasaranJenazahMuslimNonMuslim1 />
      <ItemAmbulansJenazahPremium1 />
      <ItemTransportasiKeluargaHiAce14Seat1 />
    </div>
  );
}

function PlanLayananDarurat() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[20px] shrink-0 w-full" data-name="Plan / Layanan Darurat">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[22px] relative w-full">
          <PlanBadge1 />
          <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[#1f1f1f] text-[17px] w-[min-content]">Layanan Darurat</p>
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#6b6b6b] text-[13px] w-[min-content]">Cocok untuk yang belum jadi anggota, tapi butuh bantuan saat ada keluarga meninggal.</p>
          <PriceRow1 />
          <Cta1 />
          <Note1 />
          <div className="bg-[rgba(31,31,31,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
          <GroupHariKematian1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function SectionPricing() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-center overflow-clip px-[20px] py-[40px] relative shrink-0 w-[360px]" data-name="Section / Pricing">
      <HeadingBlock />
      <PlanPersiapanJangkaPanjang />
      <PlanLayananDarurat />
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Illustration />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#1f1f1f] text-[15px] whitespace-nowrap">Untuk Diri Sendiri</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#af9160] relative rounded-[100px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[8px] relative w-full">
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">Mulai persiapan dirimu</p>
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
      <Frame5 />
      <Content />
    </div>
  );
}

function Illustration1() {
  return <div className="bg-[#f4eee5] rounded-[14px] shrink-0 size-[48px]" data-name="Illustration" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Illustration1 />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#1f1f1f] text-[15px] whitespace-nowrap">Keluargamu</p>
    </div>
  );
}

function Frame1() {
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
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.48] relative shrink-0 text-[#737373] text-[12px] w-full whitespace-pre-wrap">{`Kami memastikan mereka mendapatkan layanan yang layak agar kamu sekeluarga  tenang berduka.`}</p>
      <Frame1 />
    </div>
  );
}

function CardUntukDiriSendiri1() {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(51,38,20,0.08)] shrink-0 w-full" data-name="Card / Untuk Diri Sendiri">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame7 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
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
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#bda67a] content-stretch flex items-start left-[20px] overflow-clip px-[12px] py-[5px] rounded-[100px] top-[24px]" data-name="Badge">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a140f] text-[10px] tracking-[0.8px] whitespace-nowrap">DAMPAK SOSIAL</p>
    </div>
  );
}

function PhotoBlock() {
  return (
    <div className="h-[210px] overflow-clip relative shrink-0 w-[360px]" data-name="Photo Block">
      <div className="absolute bg-[#473829] h-[210px] left-0 top-0 w-[360px]" data-name="Photo BG" />
      <div className="-translate-y-1/2 absolute h-[240px] left-0 top-1/2 w-[360px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgImage9} />
      </div>
      <div className="absolute h-[210px] left-0 top-0 w-[360px]" data-name="Texture Overlay" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 360 210\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.714 0 0 9.5455 102.86 105)\\'><stop stop-color=\\'rgba(140,102,64,0.25)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(80,59,37,0.425)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(50,37,24,0.5125)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(20,15,10,0.6)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute bg-gradient-to-b from-[rgba(20,15,10,0)] h-[120px] left-0 to-[#140f0a] top-[90px] via-[60%] via-[rgba(20,15,10,0.7)] w-[360px]" data-name="Bottom Gradient" />
      <Badge3 />
      <div className="absolute font-['Lora:Bold',sans-serif] font-bold leading-[1.45] left-[20px] text-[18px] text-white top-[138px] w-[320px]">
        <p className="mb-0">Persiapanmu jadi kebaikan</p>
        <p>untuk yang tak berpunya</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Frame">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[6px] py-[14px] relative text-center w-full">
          <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#bda67a] text-[15px] w-full">Rp500 Jt+</p>
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.45)] w-full">Dana terkumpul</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Frame">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[6px] py-[14px] relative text-center w-full">
          <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#bda67a] text-[15px] w-full">1.200+</p>
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.45)] w-full">Donasi anggota</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Frame">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[6px] py-[14px] relative text-center w-full">
          <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#bda67a] text-[15px] w-full">438+</p>
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.45)] w-full">Dimakamkan</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch flex gap-[8px] h-[80px] items-start overflow-clip relative shrink-0 w-full" data-name="Stats Row">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function ContentBlock() {
  return (
    <div className="bg-[#1a140f] relative shrink-0 w-full" data-name="Content Block">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[36px] px-[20px] relative w-full">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] w-full">
            <span className="leading-[1.55]">Sebagian uang pendaftaranmu disisihkan untuk do</span>
            <span className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.55] text-[#e2d0a8]">nasi pemulasaran dan pemakaman gratis bagi jenazah tunawisma</span>
            <span className="leading-[1.55]">{` yang tak beridentitas.`}</span>
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
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Top Row">
      <div className="h-[40px] relative shrink-0 w-[80px]" data-name="white 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhite1} />
      </div>
      <div className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.35)] text-right whitespace-nowrap">
        <p className="mb-0">Pulang dengan tenang,</p>
        <p>berangkat dengan ikhlas.</p>
      </div>
    </div>
  );
}

function NavRow() {
  return (
    <div className="content-stretch flex font-['Outfit:Medium',sans-serif] font-medium h-[20px] items-center justify-between leading-[normal] overflow-clip relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] w-full whitespace-nowrap" data-name="Nav Row">
      <p className="relative shrink-0">Solusi</p>
      <p className="relative shrink-0">Layanan</p>
      <p className="relative shrink-0">Harga</p>
      <p className="relative shrink-0">Dampak</p>
      <p className="relative shrink-0">Klaim</p>
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
          <div className="bg-[rgba(255,255,255,0.07)] h-px shrink-0 w-full" data-name="Inner Divider" />
          <NavRow />
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
      <StickyBottomCtaBar />
      <NavbarMobileHeader />
      <PageContent />
    </div>
  );
}