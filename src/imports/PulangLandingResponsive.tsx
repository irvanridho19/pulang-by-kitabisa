import svgPaths from "./svg-gmo3e23oah";
import imgImageLogo from "@/assets/logo.png";
import imgImageHeroPhoto from "@/assets/hero-photo.png";
import imgImageProblemsBackground from "@/assets/problems-background.png";
import imgImageHighCostIllustration from "@/assets/high-cost-illustration.png";
import imgImageLongAdministrationIllustration from "@/assets/long-administration-illustration.png";
import imgImage from "@/assets/image.png";
import imgImage1 from "@/assets/image-1.png";
import imgImageFooterLogo from "@/assets/footer-logo.png";

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

function StickyBottomCtaBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col items-center left-1/2 px-[16px] py-[12px] rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.05)] w-[360px]" data-name="Sticky / Bottom CTA Bar">
      <div className="bg-[#1f1f1f] relative rounded-[8px] shrink-0 w-full" data-name="Button / Sticky CTA">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative w-full">
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">Mulai persiapan sekarang</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonWhatsAppEmergency() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button / WhatsApp Emergency">
      <div aria-hidden="true" className="absolute border border-[#594635] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="ic_whatsapp">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2dc66800} fill="var(--fill-0, #4CAF50)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[27.39%_24.86%_26.67%_25.79%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8429 11.0254">
                <path d={svgPaths.p36644c40} fill="var(--fill-0, #FAFAFA)" id="Vector" />
              </svg>
            </div>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="27" />
            </svg>
          </div>
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap">Saya butuh layanan darurat *</p>
        </div>
      </div>
    </div>
  );
}

function ButtonSecondaryDisclaimer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Button / Secondary + Disclaimer">
      <ButtonWhatsAppEmergency />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#6b7280] text-[12px] w-full">*Layanan darurat tersedia saat ada keluarga yang butuh pengurusan jenazah dan pemakaman segera</p>
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="CTA Buttons">
      <div className="bg-[#1f1f1f] relative rounded-[8px] shrink-0 w-full" data-name="Button / Primary CTA">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative w-full">
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">Mulai persiapan sekarang</p>
          </div>
        </div>
      </div>
      <ButtonSecondaryDisclaimer />
    </div>
  );
}

function HeroTextCta() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Hero / Text + CTA">
      <div className="font-['Lora:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#1f2a37] text-[0px] text-[20px] text-center w-full">
        <p className="mb-0">
          <span className="leading-[1.5]">{`Menyiapkan `}</span>
          <span className="leading-[1.5] text-[#af9160]">Kepulangan</span>
          <span className="leading-[1.5]">,</span>
        </p>
        <p className="leading-[1.5]">agar Tenang saat Perpisahan</p>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#6b7280] text-[0px] text-[14px] text-center w-full">
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.2] text-[#af9160]">PULANG</span>
        <span className="leading-[1.2]">{` menemani keluargamu di semua fase kematian, sejak sebelum, saat, dan setelah pemakaman.`}</span>
      </p>
      <CtaButtons />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Hero / Content">
      <div className="bg-[#af9160] content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge / Pulang by Kitabisa">
        <div className="flex flex-col font-['Lora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[1.5]">Pulang by Kitabisa</p>
        </div>
      </div>
      <HeroTextCta />
    </div>
  );
}

function HeroImageContainer() {
  return (
    <div className="aspect-[100/100] overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="Hero / Image Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[322px] left-[calc(50%-14.5px)] top-[calc(50%-1px)] w-[583px]" data-name="Image / Hero Photo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHeroPhoto} />
      </div>
    </div>
  );
}

function SectionHero() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section / Hero">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[36px] items-start justify-center px-[20px] py-[36px] relative w-full">
          <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[363px] top-[503px]" data-name="Decoration / Ellipse">
            <div className="absolute inset-[-165.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1563 1563">
                <g filter="url(#filter0_f_1_1872)" id="Decoration / Ellipse">
                  <circle cx="781.5" cy="781.5" fill="var(--fill-0, #AF9160)" r="181.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1563" id="filter0_f_1_1872" width="1563" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_1872" stdDeviation="300" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <HeroContent />
          <HeroImageContainer />
        </div>
      </div>
    </div>
  );
}

function ProblemsHeadingBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-center text-white w-full" data-name="Problems / Heading Block">
      <p className="font-['Lora:Bold',sans-serif] font-['Outfit:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-[18px] w-full">
        <span className="leading-[1.5]">{`Kenyataannya, `}</span>
        <span className="leading-[1.5] text-[#bda67a]">kematian</span>
        <span className="leading-[1.5]">{` tidak sederhana`}</span>
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] w-full">Banyak hal yang harus diurus, menyita waktu dan biaya. Beban emosionalnya pun berat.</p>
    </div>
  );
}

function ProblemsContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Problems / Content">
      <ProblemsHeadingBlock />
    </div>
  );
}

function CardHighCostImageWrapper() {
  return (
    <div className="h-[184px] overflow-clip relative shrink-0 w-full" data-name="Card / High Cost Image Wrapper">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.5px)] size-[173px] top-[calc(50%-0.5px)]" data-name="Image / High Cost Illustration">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[221.88%] left-[-74.35%] max-w-none top-[-15.18%] w-[417.97%]" src={imgImageHighCostIllustration} />
        </div>
      </div>
    </div>
  );
}

function CardHighCostInner() {
  return (
    <div className="bg-[rgba(31,31,31,0.6)] relative shrink-0 w-full" data-name="Card / High Cost Inner">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <CardHighCostImageWrapper />
        <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-center text-white w-full">Biaya pengurusan kematian tinggi</p>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[14px] text-white w-full">Pengurusan jenazah hingga pemakaman butuh biaya besar. Sering juga, banyak biaya tak terduga.</p>
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

function CardLongAdministrationImageWrapper() {
  return (
    <div className="h-[184px] overflow-clip relative shrink-0 w-full" data-name="Card / Long Administration Image Wrapper">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[173px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[161px]" data-name="Image / Long Administration Illustration">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[232.24%] left-[-276.42%] max-w-none top-[-14.49%] w-[457.87%]" src={imgImageLongAdministrationIllustration} />
        </div>
      </div>
    </div>
  );
}

function CardLongAdministrationInner() {
  return (
    <div className="bg-[rgba(31,31,31,0.6)] relative rounded-[16px] shrink-0 w-full" data-name="Card / Long Administration Inner">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <CardLongAdministrationImageWrapper />
        <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-center text-white w-full">Administrasi panjang dan menyita waktu</p>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[14px] text-white w-full">Urusan administrasi tidak selesai di pemakaman. Setelahnya, masih banyak dokumen dan birokrasi lain yang harus diurus.</p>
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

function CardFarFromFamilyImageWrapper() {
  return (
    <div className="h-[184px] overflow-clip relative shrink-0 w-full" data-name="Card / Far From Family Image Wrapper">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[212px] left-1/2 top-1/2 w-[372px]" data-name="Image / Far From Family Illustration">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[234.43%] left-[-26.37%] max-w-none top-[-121.7%] w-[244.94%]" src={imgImageLongAdministrationIllustration} />
        </div>
      </div>
    </div>
  );
}

function CardFarFromFamilyInner() {
  return (
    <div className="bg-[rgba(31,31,31,0.6)] relative rounded-[16px] shrink-0 w-full" data-name="Card / Far From Family Inner">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <CardFarFromFamilyImageWrapper />
        <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-center text-white w-full">Mungkin berada jauh dari kerabat</p>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[14px] text-white w-full">Beberapa orang, seperti perantau, tidak punya akses ke keluarga untuk dibantu mengurus prosesi kematian yang panjang,</p>
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
        <div className="content-stretch flex flex-col gap-[36px] items-start justify-center px-[20px] py-[36px] relative w-full">
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

function PhasesHeadingInner() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-center w-full" data-name="Phases / Heading Inner">
      <p className="font-['Lora:Bold',sans-serif] font-['Outfit:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#1f2a37] text-[0px] text-[18px] w-full">
        <span className="leading-[1.5] text-[#af9160]">Pulang</span>
        <span className="leading-[1.5]">{` menemanimu di setiap fase`}</span>
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#374151] text-[14px] w-full">Dari persiapan kematian hingga urusan pasca pemakaman, Pulang siap meringankan bebanmu dan keluarga.</p>
    </div>
  );
}

function PhasesHeadingBlock() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Phases / Heading Block">
      <PhasesHeadingInner />
    </div>
  );
}

function TabPersiapanActive() {
  return (
    <div className="bg-[#af9160] relative rounded-[8px] shrink-0 w-full" data-name="Tab / Persiapan (Active)">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">Persiapan</p>
        </div>
      </div>
    </div>
  );
}

function TabHariKematian() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Tab / Hari Kematian">
      <div aria-hidden="true" className="absolute border border-[#594635] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">Hari Kematian</p>
        </div>
      </div>
    </div>
  );
}

function TabPascaPemakaman() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Tab / Pasca Pemakaman">
      <div aria-hidden="true" className="absolute border border-[#594635] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">Pasca Pemakaman</p>
        </div>
      </div>
    </div>
  );
}

function NavigationTabs() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Navigation Tabs">
      <TabPersiapanActive />
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#af9160] h-[2px] rounded-[8px] w-[48px]" data-name="Divider" />
        </div>
      </div>
      <TabHariKematian />
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#af9160] h-[2px] rounded-[8px] w-[48px]" data-name="Divider" />
        </div>
      </div>
      <TabPascaPemakaman />
    </div>
  );
}

function PhasesTabNavigation() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Phases / Tab Navigation">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <NavigationTabs />
      </div>
    </div>
  );
}

function PhasesImageBlock() {
  return (
    <div className="content-stretch flex flex-col h-[308px] items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Phases / Image Block">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Image / Phases Photo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHeroPhoto} />
      </div>
    </div>
  );
}

function FeatureItemSuratWasiat() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Feature Item / Surat Wasiat">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">Penulisan Surat Wasiat</p>
    </div>
  );
}

function FeatureItemPengarsipanDigital() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Feature Item / Pengarsipan Digital">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">Pengarsipan Digital</p>
    </div>
  );
}

function FeatureListColumnLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Feature List / Column Left">
      <FeatureItemSuratWasiat />
      <FeatureItemPengarsipanDigital />
    </div>
  );
}

function FeatureItemPencarianMakam() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Feature Item / Pencarian Makam">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">Pencarian Makam</p>
    </div>
  );
}

function FeatureItemKonsultasiFinansial() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Feature Item / Konsultasi Finansial">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">Konsultasi Finansial</p>
    </div>
  );
}

function FeatureListColumnRight() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Feature List / Column Right">
      <FeatureItemPencarianMakam />
      <FeatureItemKonsultasiFinansial />
    </div>
  );
}

function PhasesFeatureList() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Phases / Feature List">
      <FeatureListColumnLeft />
      <FeatureListColumnRight />
    </div>
  );
}

function PhasesDescriptionBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Phases / Description Block">
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] w-full">Persiapan yang baik dapat meringankan beban keluarga di masa mendatang</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#374151] text-[14px] w-full">Mempersiapkan kepulangan dapat memastikan keputusan-keputusan penting, sehingga mengurangi risiko kebingungan dan perdebatan di masa mendatang.</p>
      <PhasesFeatureList />
    </div>
  );
}

function PhasesTabContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative rounded-[24px] shrink-0 w-full" data-name="Phases / Tab Content">
      <PhasesImageBlock />
      <PhasesDescriptionBlock />
    </div>
  );
}

function SectionServicePhases() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section / Service Phases">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[36px] items-start px-[20px] py-[36px] relative w-full">
          <PhasesHeadingBlock />
          <PhasesTabNavigation />
          <PhasesTabContent />
        </div>
      </div>
    </div>
  );
}

function PricingHeadingInner() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-center w-full" data-name="Pricing / Heading Inner">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[18px] w-full">Semua layanan, satu biaya pasti dan transparan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#374151] text-[14px] w-full">Dapatkan layanan sesuai kebutuhanmu, tanpa biaya tersembunyi</p>
    </div>
  );
}

function PricingHeadingBlock() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Pricing / Heading Block">
      <PricingHeadingInner />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#750d33] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-name="Container">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[10px] text-white whitespace-nowrap">Efisien menyiapkan ketenangan di masa depan</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <div className="h-[72px] relative shrink-0 w-[53px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function PlanPjpBadges() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full" data-name="Plan / PJP Badges">
      <Container />
      <Container1 />
    </div>
  );
}

function PlanPjpTitlePrice() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Plan / PJP Title + Price">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#3a3a3a] text-[16px] w-[min-content]">Persiapan Jangka Panjang</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#a80c45] text-[18px] whitespace-nowrap">Mulai dari Rp120.000/tahun</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#374151] text-[12px] w-[min-content]">*Tersedia layanan prosesi Muslim dan Non Muslim / Lainnya</p>
    </div>
  );
}

function PlanPjpHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center min-h-px min-w-px relative" data-name="Plan / PJP Header">
      <PlanPjpBadges />
      <PlanPjpTitlePrice />
    </div>
  );
}

function PlanPjpContent() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Plan / PJP Content">
      <PlanPjpHeader />
    </div>
  );
}

function FeatureGroupPersiapanHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Feature Group / Persiapan Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#750d33] text-[14px] whitespace-nowrap">Persiapan</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon">
        <div className="absolute bottom-1/4 left-[5%] right-[5%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 7">
            <path d={svgPaths.p212da580} fill="var(--fill-0, #750D33)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeatureItemPenulisanSuratWasiat() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Penulisan Surat Wasiat">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap">Penulisan surat wasiat</p>
    </div>
  );
}

function FeatureItemPengarsipanDigital1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Pengarsipan Digital">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap">Pengarsipan digital</p>
    </div>
  );
}

function FeatureItemPencarianMakam1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Pencarian Makam">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap">Pencarian makam</p>
    </div>
  );
}

function FeatureGroupPersiapan() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Feature Group / Persiapan">
      <FeatureGroupPersiapanHeader />
      <div className="bg-[#e5e7eb] h-px rounded-[8px] shrink-0 w-full" data-name="Divider" />
      <FeatureItemPenulisanSuratWasiat />
      <FeatureItemPengarsipanDigital1 />
      <FeatureItemPencarianMakam1 />
    </div>
  );
}

function PlanPjpFeatureGroups() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Plan / PJP Feature Groups">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <FeatureGroupPersiapan />
        </div>
      </div>
    </div>
  );
}

function FeatureGroupHkHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Feature Group / HK Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#750d33] text-[14px] whitespace-nowrap">Hari Kematian</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon">
        <div className="absolute bottom-1/4 left-[5%] right-[5%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 7">
            <path d={svgPaths.p212da580} fill="var(--fill-0, #750D33)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeatureItemPemulasaranHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Feature Item / Pemulasaran Header">
      <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px relative text-[#3a3a3a] text-[14px]">Pemulasaran Jenazah Muslim dan Non Muslim</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Muslim</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Petugas pemandian</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Peralatan pemulasaran lengkap*</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function FeatureItemPapanNisan() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Papan Nisan">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">{`Papan nisan & papan dinding ari ari`}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Non Muslim</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Rumah duka 2 tanggal (Full AC)</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Jasa Memandikan</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Peralatan dan perlengkapan rumah duka lengkap*</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function FeatureItemTransportasiHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Feature Item / Transportasi Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#3a3a3a] text-[14px] whitespace-nowrap">Transportasi Jenazah</p>
    </div>
  );
}

function FeatureItemAmbulance() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Ambulance">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Ambulance Jenazah</p>
    </div>
  );
}

function FeatureItemTransportasiHiAce() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Transportasi Hi Ace">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Transportasi Keluarga Hi Ace 14 Seat</p>
    </div>
  );
}

function FeatureGroupHkInner() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Feature Group / HK Inner">
      <FeatureGroupHkHeader />
      <div className="bg-[#e5e7eb] h-px rounded-[8px] shrink-0 w-full" data-name="Divider" />
      <FeatureItemPemulasaranHeader />
      <Container2 />
      <FeatureItemPapanNisan />
      <Container6 />
      <div className="bg-[#e5e7eb] h-px rounded-[8px] shrink-0 w-full" data-name="Divider" />
      <FeatureItemTransportasiHeader />
      <FeatureItemAmbulance />
      <FeatureItemTransportasiHiAce />
    </div>
  );
}

function FeatureGroupHariKematian() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Feature Group / Hari Kematian">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <FeatureGroupHkInner />
        </div>
      </div>
    </div>
  );
}

function FeatureGroupPpHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Feature Group / PP Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#750d33] text-[14px] whitespace-nowrap">Pasca Pemakaman</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon">
        <div className="absolute bottom-1/4 left-[5%] right-[5%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 7">
            <path d={svgPaths.p11399100} fill="var(--fill-0, #750D33)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeatureGroupPpInner() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Feature Group / PP Inner">
      <FeatureGroupPpHeader />
    </div>
  );
}

function FeatureGroupPascaPemakaman() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Feature Group / Pasca Pemakaman">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <FeatureGroupPpInner />
        </div>
      </div>
    </div>
  );
}

function NoticeMasaTungguText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Notice / Masa Tunggu Text">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#3a3a3a] text-[14px] w-full">Layanan ini memiliki masa tunggu selama 3 (tiga) bulan.</p>
    </div>
  );
}

function NoticeMasaTunggu() {
  return (
    <div className="bg-[#fef2f3] relative rounded-[8px] shrink-0 w-full" data-name="Notice / Masa Tunggu">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p29daa580} fill="var(--fill-0, #1F1F1F)" id="Vector" />
            </svg>
          </div>
          <NoticeMasaTungguText />
        </div>
      </div>
    </div>
  );
}

function PlanPersiapanJangkaPanjang() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[16px] shrink-0 w-full" data-name="Plan / Persiapan Jangka Panjang">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <PlanPjpContent />
        <div className="bg-[#1f1f1f] relative rounded-[8px] shrink-0 w-full" data-name="Button / PJP CTA">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative w-full">
              <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">Mulai siapkan sekarang</p>
            </div>
          </div>
        </div>
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#3a3a3a] text-[16px] w-full">Paket layanan sudah termasuk</p>
        <PlanPjpFeatureGroups />
        <FeatureGroupHariKematian />
        <FeatureGroupPascaPemakaman />
        <NoticeMasaTunggu />
      </div>
    </div>
  );
}

function PricingPlansContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Pricing / Plans Container">
      <PlanPersiapanJangkaPanjang />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#750d33] content-stretch flex items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-name="Container">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[10px] text-white whitespace-nowrap">Tiba dalam 1 Jam</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#750d33] content-stretch flex items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-name="Container">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[10px] text-white whitespace-nowrap">Siap 24/7</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#750d33] content-stretch flex items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-name="Container">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[10px] text-white whitespace-nowrap">Respon Cepat</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container16 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <div className="h-[72px] relative shrink-0 w-[54px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function PlanLdHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Plan / LD Header">
      <Container11 />
      <Container19 />
    </div>
  );
}

function PlanLdTitlePrice() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Plan / LD Title + Price">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#3a3a3a] text-[16px] w-full">Layanan Darurat di Hari Kematian</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#a80c45] text-[18px] w-full">Mulai dari Rp9.000.000</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#374151] text-[12px] w-full">*Tersedia layanan prosesi Muslim dan Non Muslim / Lainnya</p>
    </div>
  );
}

function PlanLdInner() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Plan / LD Inner">
      <PlanLdHeader />
      <PlanLdTitlePrice />
    </div>
  );
}

function FeatureGroupHkLdHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Feature Group / HK LD Header">
      <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px relative text-[#750d33] text-[14px]">Hari Kematian</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon">
        <div className="absolute bottom-1/4 left-[5%] right-[5%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 7">
            <path d={svgPaths.p212da580} fill="var(--fill-0, #750D33)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeatureItemPemulasaranHeaderLd() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Feature Item / Pemulasaran Header LD">
      <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px relative text-[#3a3a3a] text-[14px]">Pemulasaran Jenazah Muslim dan Non Muslim</p>
    </div>
  );
}

function FeatureItemMuslimLabel() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Feature Item / Muslim Label">
      <p className="flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Muslim</p>
    </div>
  );
}

function FeatureItemPetugasPemandian() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Petugas Pemandian">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Petugas pemandian</p>
    </div>
  );
}

function FeatureItemPeralatanPemulasaran() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Peralatan Pemulasaran">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Peralatan pemulasaran lengkap*</p>
    </div>
  );
}

function FeatureItemPapanNisanLd() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Papan Nisan LD">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">{`Papan nisan & papan dinding ari ari`}</p>
    </div>
  );
}

function FeatureItemNonMuslimLabel() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Feature Item / Non Muslim Label">
      <p className="flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Non Muslim</p>
    </div>
  );
}

function FeatureItemRumahDuka() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Rumah Duka">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Rumah duka 2 tanggal (Full AC)</p>
    </div>
  );
}

function FeatureItemJasaMemandikan() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Jasa Memandikan">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Jasa Memandikan</p>
    </div>
  );
}

function FeatureItemPeralatanRumahDuka() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Peralatan Rumah Duka">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Peralatan dan perlengkapan rumah duka lengkap*</p>
    </div>
  );
}

function FeatureItemTransportasiHeaderLd() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Feature Item / Transportasi Header LD">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#3a3a3a] text-[14px] whitespace-nowrap">Transportasi Jenazah</p>
    </div>
  );
}

function FeatureItemAmbulanceLd() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Ambulance LD">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Ambulance Jenazah</p>
    </div>
  );
}

function FeatureItemTransportasiHiAceLd() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item / Transportasi Hi Ace LD">
      <div className="relative shrink-0 size-[16px]" data-name="check-circle - Font Awesome 5 Pro">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p22992180} fill="var(--fill-0, #89D473)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1f1f] text-[14px]">Transportasi Keluarga Hi Ace 14 Seat</p>
    </div>
  );
}

function FeatureGroupHariKematianLd() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Feature Group / Hari Kematian LD">
      <FeatureGroupHkLdHeader />
      <div className="bg-[#e5e7eb] h-px rounded-[8px] shrink-0 w-full" data-name="Divider" />
      <FeatureItemPemulasaranHeaderLd />
      <FeatureItemMuslimLabel />
      <FeatureItemPetugasPemandian />
      <FeatureItemPeralatanPemulasaran />
      <FeatureItemPapanNisanLd />
      <FeatureItemNonMuslimLabel />
      <FeatureItemRumahDuka />
      <FeatureItemJasaMemandikan />
      <FeatureItemPeralatanRumahDuka />
      <div className="bg-[#e5e7eb] h-px rounded-[8px] shrink-0 w-full" data-name="Divider" />
      <FeatureItemTransportasiHeaderLd />
      <FeatureItemAmbulanceLd />
      <FeatureItemTransportasiHiAceLd />
    </div>
  );
}

function PlanLdFeatureGroups() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Plan / LD Feature Groups">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <FeatureGroupHariKematianLd />
        </div>
      </div>
    </div>
  );
}

function PlanLdContent() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[16px] shrink-0 w-full" data-name="Plan / LD Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <PlanLdInner />
        <div className="bg-[#1f1f1f] relative rounded-[8px] shrink-0 w-full" data-name="Button / LD CTA">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative w-full">
              <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">Pesan layanan darurat</p>
            </div>
          </div>
        </div>
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#3a3a3a] text-[16px] w-full">Paket layanan sudah termasuk</p>
        <PlanLdFeatureGroups />
      </div>
    </div>
  );
}

function PlanLayananDarurat() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Plan / Layanan Darurat">
      <PlanLdContent />
    </div>
  );
}

function SectionPricing() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start justify-center overflow-clip px-[20px] py-[36px] relative shrink-0 w-[360px]" data-name="Section / Pricing">
      <div className="absolute h-[977px] left-0 top-0 w-[360px]" data-name="Decoration / Background Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 977">
          <path clipRule="evenodd" d={svgPaths.p213b2100} fill="url(#paint0_linear_1_1840)" fillRule="evenodd" id="Decoration / Background Shape" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1840" x1="180" x2="180" y1="0" y2="977">
              <stop stopColor="#E3DBC5" />
              <stop offset="1" stopColor="#E3DBC5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <PricingHeadingBlock />
      <PricingPlansContainer />
      <PlanLayananDarurat />
    </div>
  );
}

function CtaHeadingInner() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CTA / Heading Inner">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[18px] text-center w-full">Ringankan mereka di hari kepulanganmu, atau siapkan kepulangan yang layak untuk mereka</p>
    </div>
  );
}

function CtaHeadingBlock() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="CTA / Heading Block">
      <CtaHeadingInner />
    </div>
  );
}

function ImageDiriSendiriPlaceholder() {
  return <div className="aspect-[574/308] bg-[#d1d5db] rounded-[16px] shrink-0 w-full" data-name="Image / Diri Sendiri Placeholder" />;
}

function CardUntukDiriSendiri() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Card / Untuk Diri Sendiri">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <ImageDiriSendiriPlaceholder />
        <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] w-full">Untuk Diri Sendiri</p>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#374151] text-[14px] w-full">Pastikan kepergianmu kelak tidak meninggalkan beban dan kebingungan bagi keluarga yang ditinggalkan.</p>
        <div className="bg-[#1f1f1f] relative rounded-[8px] shrink-0 w-full" data-name="Button / Diri Sendiri CTA">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative w-full">
              <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">Mulai persiapan dirimu sekarang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageKeluargamuPlaceholder() {
  return <div className="aspect-[574/308] bg-[#d1d5db] rounded-[16px] shrink-0 w-full" data-name="Image / Keluargamu Placeholder" />;
}

function CardUntukKeluargamu() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Card / Untuk Keluargamu">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <ImageKeluargamuPlaceholder />
        <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] w-full">Untuk Keluargamu</p>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#374151] text-[14px] w-full">Kami siap memberikan layanan kepulangan yang layak untuk mereka, dan menemanimu di masa sulit agar lebih tenang berduka.</p>
        <div className="bg-[#1f1f1f] relative rounded-[8px] shrink-0 w-full" data-name="Button / Keluargamu CTA">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative w-full">
              <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">Mulai persiapan keluargamu sekarang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CtaCards() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-name="CTA / Cards">
      <CardUntukDiriSendiri />
      <CardUntukKeluargamu />
    </div>
  );
}

function SectionCtaCards() {
  return (
    <div className="bg-gradient-to-b from-[rgba(249,247,243,0)] relative shrink-0 to-[#f9f7f3] w-full" data-name="Section / CTA Cards">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[36px] items-start px-[20px] py-[36px] relative w-full">
          <CtaHeadingBlock />
          <CtaCards />
        </div>
      </div>
    </div>
  );
}

function ImpactTextBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-center w-full" data-name="Impact / Text Block">
      <div className="font-['Lora:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[18px] w-full">
        <p className="mb-0">Persiapanmu jadi kebaikan untuk</p>
        <p>yang tak berpunya</p>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#374151] text-[0px] text-[14px] w-full">
        <span className="leading-[1.2]">{`Sebagian uang pendaftaranmu akan disisihkan untuk `}</span>
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.2]">{`donasi pemulasaran dan pemakaman gratis bagi jenazah tunawisma `}</span>
        <span className="leading-[1.2]">yang tak beridentitas.</span>
      </p>
    </div>
  );
}

function ImpactContent() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Impact / Content">
      <ImpactTextBlock />
    </div>
  );
}

function StatDanaTerkumpul() {
  return (
    <div className="bg-[#fef1f8] relative rounded-[16px] shrink-0 w-full" data-name="Stat / Dana Terkumpul">
      <div aria-hidden="true" className="absolute border border-[#750d33] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[1.5] p-[24px] relative text-[#1f1f1f] text-center w-full">
          <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[20px] w-full">Rp500 Juta</p>
          <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">Dana terkumpul untuk pemakaman gratis.</p>
        </div>
      </div>
    </div>
  );
}

function StatAnggotaBerdonasi() {
  return (
    <div className="bg-[#fef1f8] relative rounded-[16px] shrink-0 w-full" data-name="Stat / Anggota Berdonasi">
      <div aria-hidden="true" className="absolute border border-[#750d33] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[1.5] p-[24px] relative text-[#1f1f1f] text-center w-full">
          <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[20px] w-full">1,200++</p>
          <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">Anggota Pulang yang berdonasi.</p>
        </div>
      </div>
    </div>
  );
}

function StatJenazahDimakamkan() {
  return (
    <div className="bg-[#fef1f8] relative rounded-[16px] shrink-0 w-full" data-name="Stat / Jenazah Dimakamkan">
      <div aria-hidden="true" className="absolute border border-[#750d33] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[1.5] p-[24px] relative text-[#1f1f1f] text-center w-full">
          <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[20px] w-full">438++</p>
          <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">Jenazah tunawisma dimakamkan.</p>
        </div>
      </div>
    </div>
  );
}

function ImpactStatsRow() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Impact / Stats Row">
      <StatDanaTerkumpul />
      <StatAnggotaBerdonasi />
      <StatJenazahDimakamkan />
    </div>
  );
}

function SectionSocialImpact() {
  return (
    <div className="bg-[#fdf6f0] relative shrink-0 w-full" data-name="Section / Social Impact">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[36px] items-start px-[20px] py-[36px] relative w-full">
          <ImpactContent />
          <ImpactStatsRow />
        </div>
      </div>
    </div>
  );
}

function FooterLinkSolusi() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Footer Link / Solusi">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Solusi</p>
    </div>
  );
}

function FooterLinkLayanan() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Footer Link / Layanan">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Layanan</p>
    </div>
  );
}

function FooterLinkHarga() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Footer Link / Harga">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Harga</p>
    </div>
  );
}

function FooterLinkDampak() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Footer Link / Dampak">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Dampak</p>
    </div>
  );
}

function FooterLinkCaraKlaim() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Footer Link / Cara Klaim">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Cara Klaim</p>
    </div>
  );
}

function FooterNavLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Footer / Nav Links">
      <FooterLinkSolusi />
      <FooterLinkLayanan />
      <FooterLinkHarga />
      <FooterLinkDampak />
      <FooterLinkCaraKlaim />
    </div>
  );
}

function FooterLogoCopyright() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Footer / Logo + Copyright">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-center text-white w-full">© 2026 Pulang. All rights reserved.</p>
    </div>
  );
}

function FooterInner() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer / Inner">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start justify-center px-[24px] py-[64px] relative w-full">
          <div className="h-[84px] relative shrink-0 w-[168px]" data-name="Image / Footer Logo">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFooterLogo} />
          </div>
          <FooterNavLinks />
          <FooterLogoCopyright />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Footer">
      <FooterInner />
    </div>
  );
}

function PageContent() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[69px] w-[360px]" data-name="Page Content">
      <SectionHero />
      <SectionProblems />
      <SectionServicePhases />
      <SectionPricing />
      <SectionCtaCards />
      <SectionSocialImpact />
      <Footer />
    </div>
  );
}

export default function PulangLandingResponsive() {
  return (
    <div className="bg-white relative size-full" data-name="Pulang Landing - Responsive">
      <NavbarMobileHeader />
      <StickyBottomCtaBar />
      <PageContent />
    </div>
  );
}