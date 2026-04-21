import svgPaths from "./svg-1vps8d23ga";
import imgWhite1 from "@/assets/footer-logo.png";
import imgAccentBar from "@/assets/accent-bar.png";
import imgDark1 from "@/assets/logo.png";

function Badge() {
  return (
    <div className="bg-[rgba(175,145,96,0.12)] relative rounded-[100px] shrink-0" data-name="Badge">
      <div className="content-stretch flex items-start overflow-clip px-[12px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#967240] text-[10px] tracking-[1.5px] whitespace-nowrap">CARA AKSES LAYANAN</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.45)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Active() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="active">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">Keanggotaan</p>
      <div className="h-px relative shrink-0 w-full" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 1">
          <path d="M0 0H140V1H0V0Z" fill="var(--fill-0, #876747)" id="Separator" />
        </svg>
      </div>
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative rounded-[6px] self-stretch" data-name="nav-item">
      <Active />
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative rounded-[6px] self-stretch" data-name="nav-item">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Darurat</p>
    </div>
  );
}

function NavItems() {
  return (
    <div className="content-stretch flex gap-[32px] h-[34px] items-start relative shrink-0 w-full" data-name="nav-items">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <NavItem />
      <NavItem1 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-start justify-between relative shrink-0 w-full" data-name="Tabs">
      <NavItems />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Header">
      <Badge />
      <Tabs />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#1a1a1a] text-[0px] w-[min-content]">
        <span className="leading-[1.4] text-[24px]">Cara pesan layanan</span>
        <span className="leading-[1.4] text-[24px]">{` `}</span>
        <span className="leading-[1.4] text-[#af9160] text-[24px]">{`Pulang `}</span>
        <span className="leading-[1.4] text-[24px]">untuk anggota</span>
      </p>
    </div>
  );
}

function StepNumber() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[22px] shrink-0 size-[44px]" data-name="Step Number">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">1</p>
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[#f0e8db] border-solid inset-[-3px] pointer-events-none rounded-[25px]" />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px overflow-clip relative" data-name="Text Content">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[16px] w-full">Kontak daruratmu menghubungi CS</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#8c8c8c] text-[13px] w-full">Informasikan lewat WhatsApp ada anggota keluarga yang tutup usia.</p>
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Step 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
          <StepNumber />
          <TextContent />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e0d9] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function StepNumber1() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[22px] shrink-0 size-[44px]" data-name="Step Number">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">2</p>
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[#f0e8db] border-solid inset-[-3px] pointer-events-none rounded-[25px]" />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px overflow-clip relative" data-name="Text Content">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[16px] w-full">Isi form kebutuhan layanan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#8c8c8c] text-[13px] w-full">Lengkapi data anggota yang tutup usia dan layanan yang dibutuhkan.</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Step 2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
          <StepNumber1 />
          <TextContent1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e0d9] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function StepNumber2() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[22px] shrink-0 size-[44px]" data-name="Step Number">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">3</p>
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[#f0e8db] border-solid inset-[-3px] pointer-events-none rounded-[25px]" />
    </div>
  );
}

function TextContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px overflow-clip relative" data-name="Text Content">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[16px] w-full">Koordinasi teknis lewat grup WhatsApp</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#8c8c8c] text-[13px] w-full">Tim Pulang mengundang kontak daruratmu ke grup WhatsApp untuk koordinasi teknis layanan.</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Step 3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
          <StepNumber2 />
          <TextContent2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e0d9] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function StepNumber3() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[22px] shrink-0 size-[44px]" data-name="Step Number">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">4</p>
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[#f0e8db] border-solid inset-[-3px] pointer-events-none rounded-[25px]" />
    </div>
  );
}

function TextContent3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px overflow-clip relative" data-name="Text Content">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[16px] w-full">Layanan diberikan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#8c8c8c] text-[13px] w-full">Tim Pulang hadir untuk melayani keluargamu di hari kepulanganmu.</p>
    </div>
  );
}

function Step3() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Step 4">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
          <StepNumber3 />
          <TextContent3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e0d9] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Stepper() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Stepper">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[443px] items-center justify-center left-[calc(50%-112px)] top-[calc(50%-12px)] w-[2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#d1c2a8] h-[2px] rounded-[2px] w-[443px]" data-name="Connector Line" />
        </div>
      </div>
      <Step />
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[24px] py-[40px] relative size-full">
          <div className="absolute left-[-100px] size-[200px] top-[600px]">
            <div className="absolute inset-[-300%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 1400">
                <g filter="url(#filter0_f_93_226)" id="Ellipse 13">
                  <circle cx="700" cy="700" fill="var(--fill-0, #AF9160)" r="100" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1400" id="filter0_f_93_226" width="1400" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_93_226" stdDeviation="300" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute left-[260px] size-[200px] top-[550px]">
            <div className="absolute inset-[-300%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 1400">
                <g filter="url(#filter0_f_93_226)" id="Ellipse 13">
                  <circle cx="700" cy="700" fill="var(--fill-0, #AF9160)" r="100" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1400" id="filter0_f_93_226" width="1400" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_93_226" stdDeviation="300" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Header />
          <Stepper />
        </div>
      </div>
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
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[24px] pt-[28px] px-[24px] relative size-full">
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
    <div className="bg-[#1a140f] content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Footer">
      <div className="bg-[rgba(255,255,255,0.08)] h-px shrink-0 w-[360px]" data-name="Divider" />
      <FooterInner />
      <div className="h-[3px] relative shrink-0 w-[360px]" data-name="Accent Bar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAccentBar} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[69px] w-[360px]" data-name="Container">
      <Content />
      <Footer />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] top-0 w-[360px]" data-name="header">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="h-[45px] relative shrink-0 w-[90px]" data-name="dark 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDark1} />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="ic_hamburger">
        <div className="absolute inset-[18.75%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
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

export default function CaraKlaimResponsive() {
  return (
    <div className="bg-white relative size-full" data-name="Cara Klaim - Responsive">
      <Container />
      <Header1 />
    </div>
  );
}