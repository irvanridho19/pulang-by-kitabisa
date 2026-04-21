import svgPaths from "./svg-58ewg8m6az";
import imgDark1 from "@/assets/logo.png";
import imgWhite1 from "@/assets/footer-logo.png";

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] top-0 w-[360px]" data-name="header">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="h-[45px] relative shrink-0 w-[90px]" data-name="dark 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDark1} />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="ic_hamburger">
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

function LabelPill() {
  return (
    <div className="bg-[#af9160] content-stretch flex items-start overflow-clip px-[20px] py-[8px] relative rounded-[100px] shrink-0" data-name="Label Pill">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">Cara Klaim</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Header">
      <LabelPill />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#1a1a1a] text-[0px] text-[18px] text-center w-[min-content]">
        <span className="leading-[normal]">{`Langkah Mudah untuk Klaim Manfaat `}</span>
        <span className="leading-[normal] text-[#af9160]">Pulang</span>
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[21px] min-w-full relative shrink-0 text-[#737373] text-[14px] text-center w-[min-content]">Proses klaim yang sederhana dan transparan, kami siap mendampingimu di setiap langkah.</p>
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
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[16px] w-full">Hubungi Kami</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#8c8c8c] text-[13px] w-full">Laporkan kejadian melalui hotline 24 jam atau aplikasi Pulang untuk memulai proses klaim Anda.</p>
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Step 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[20px] relative w-full">
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
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[16px] w-full">Lengkapi Dokumen</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#8c8c8c] text-[13px] w-full">Siapkan dan unggah dokumen yang diperlukan melalui portal online kami dengan panduan langkah demi langkah.</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Step 2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[20px] relative w-full">
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
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[16px] w-full">{`Verifikasi & Proses`}</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#8c8c8c] text-[13px] w-full">Tim kami akan memverifikasi dokumen Anda dan memproses klaim dalam waktu 3-5 hari kerja.</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Step 3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[20px] relative w-full">
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
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[16px] w-full">Dana Cair</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#8c8c8c] text-[13px] w-full">Setelah klaim disetujui, dana akan langsung ditransfer ke rekening yang Anda daftarkan.</p>
    </div>
  );
}

function Step3() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Step 4">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[20px] relative w-full">
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
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[24px] py-[40px] relative w-full">
          <div className="absolute left-[-100px] size-[200px] top-[600px]">
            <div className="absolute inset-[-300%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 1400">
                <g filter="url(#filter0_f_2_104)" id="Ellipse 13">
                  <circle cx="700" cy="700" fill="var(--fill-0, #AF9160)" r="100" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1400" id="filter0_f_2_104" width="1400" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_2_104" stdDeviation="300" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute left-[260px] size-[200px] top-[550px]">
            <div className="absolute inset-[-300%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 1400">
                <g filter="url(#filter0_f_2_104)" id="Ellipse 13">
                  <circle cx="700" cy="700" fill="var(--fill-0, #AF9160)" r="100" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1400" id="filter0_f_2_104" width="1400" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_2_104" stdDeviation="300" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Header1 />
          <Stepper />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Link">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Solusi</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Link">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Layanan</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Link">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Harga</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Link">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Dampak</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Link">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Cara Klaim</p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Nav Links">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function LogoSocialLinks() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Logo & Social Links">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-center text-white w-full">© 2026 Pulang. All rights reserved.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start justify-center px-[24px] py-[64px] relative w-full">
          <div className="h-[84px] relative shrink-0 w-[168px]" data-name="white 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhite1} />
          </div>
          <NavLinks />
          <LogoSocialLinks />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Footer">
      <Container1 />
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

export default function CaraKlaimResponsive() {
  return (
    <div className="bg-white relative size-full" data-name="Cara Klaim - Responsive">
      <Header />
      <Container />
    </div>
  );
}