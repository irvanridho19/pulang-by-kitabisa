import svgPaths from "./svg-3qttxie8dt";
import imgDark1 from "@/assets/logo.png";
import imgImageRItzmUmXdJtPy2YOnwJ38Jr4Ft76Ym1 from "@/assets/care-manager-icon.png";

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] top-0 w-[360px]" data-name="header">
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

function Frame1() {
  return (
    <div className="bg-gradient-to-r from-[#fcf6ec] relative rounded-[14px] shrink-0 to-[#f5ede0] w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.25)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[36px] py-[24px] relative w-full">
          <div className="relative shrink-0 size-[36px]" data-name="image-RItzmUmXDJtPY2YOnwJ38jr4Ft76YM 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRItzmUmXdJtPy2YOnwJ38Jr4Ft76Ym1} />
          </div>
          <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px relative text-[16px] text-black">Butuh bantuan? Hubungi Care Manager Pulang</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-start left-1/2 px-[16px] py-[32px] w-[360px]">
      <Frame1 />
    </div>
  );
}

function IllustrationSuccess() {
  return (
    <div className="bg-gradient-to-b from-[#fffaf1] h-[240px] overflow-clip relative rounded-[20px] shrink-0 to-[#faedd1] via-1/2 via-[#fef4e2] w-[280px]" data-name="Illustration / Success">
      <div className="absolute left-[56px] size-[168px] top-[26px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 168">
          <circle cx="84" cy="84" fill="url(#paint0_radial_44_1255)" id="Ellipse" r="84" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="scale(168)" gradientUnits="userSpaceOnUse" id="paint0_radial_44_1255" r="1">
              <stop stopColor="#FCD980" stopOpacity="0.3" />
              <stop offset="0.7" stopColor="#FCD980" stopOpacity="0.08" />
              <stop offset="1" stopColor="#FCD980" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[80px] size-[120px] top-[50px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <circle cx="60" cy="60" fill="url(#paint0_radial_44_1249)" id="Ellipse" r="60" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="scale(120)" gradientUnits="userSpaceOnUse" id="paint0_radial_44_1249" r="1">
              <stop stopColor="#FCCF6B" stopOpacity="0.22" />
              <stop offset="1" stopColor="#FCCF6B" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[11.982px] left-[190.9px] top-[78.62px] w-[24.863px]" data-name="Ray">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8628 11.9823">
          <path clipRule="evenodd" d={svgPaths.p32dc4b80} fill="var(--fill-0, #FCCF6B)" fillOpacity="0.5" fillRule="evenodd" id="Ray" />
        </svg>
      </div>
      <div className="absolute h-[11.982px] left-[190.9px] top-[129.4px] w-[24.863px]" data-name="Ray">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8628 11.9823">
          <path clipRule="evenodd" d={svgPaths.p3e7bb480} fill="var(--fill-0, #FCCF6B)" fillOpacity="0.5" fillRule="evenodd" id="Ray" />
        </svg>
      </div>
      <div className="absolute h-[24.863px] left-[159.4px] top-[160.9px] w-[11.982px]" data-name="Ray">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9823 24.8628">
          <path clipRule="evenodd" d={svgPaths.p27002180} fill="var(--fill-0, #FCCF6B)" fillOpacity="0.5" fillRule="evenodd" id="Ray" />
        </svg>
      </div>
      <div className="absolute h-[24.863px] left-[108.62px] top-[160.9px] w-[11.982px]" data-name="Ray">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9823 24.8628">
          <path clipRule="evenodd" d={svgPaths.paf8cb00} fill="var(--fill-0, #FCCF6B)" fillOpacity="0.5" fillRule="evenodd" id="Ray" />
        </svg>
      </div>
      <div className="absolute h-[11.982px] left-[64.24px] top-[129.4px] w-[24.863px]" data-name="Ray">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8628 11.9823">
          <path clipRule="evenodd" d={svgPaths.p2b97b400} fill="var(--fill-0, #FCCF6B)" fillOpacity="0.5" fillRule="evenodd" id="Ray" />
        </svg>
      </div>
      <div className="absolute h-[11.982px] left-[64.24px] top-[78.62px] w-[24.863px]" data-name="Ray">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8628 11.9823">
          <path clipRule="evenodd" d={svgPaths.p3f31bf0} fill="var(--fill-0, #FCCF6B)" fillOpacity="0.5" fillRule="evenodd" id="Ray" />
        </svg>
      </div>
      <div className="absolute h-[24.863px] left-[108.62px] top-[34.24px] w-[11.982px]" data-name="Ray">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9823 24.8628">
          <path clipRule="evenodd" d={svgPaths.p26202c00} fill="var(--fill-0, #FCCF6B)" fillOpacity="0.5" fillRule="evenodd" id="Ray" />
        </svg>
      </div>
      <div className="absolute h-[24.863px] left-[159.4px] top-[34.24px] w-[11.982px]" data-name="Ray">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9823 24.8628">
          <path clipRule="evenodd" d={svgPaths.p19e68a00} fill="var(--fill-0, #FCCF6B)" fillOpacity="0.5" fillRule="evenodd" id="Ray" />
        </svg>
      </div>
      <div className="absolute left-[94px] size-[92px] top-[64px]" data-name="Ellipse">
        <div className="absolute inset-[-17.39%_-26.09%_-34.78%_-26.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
            <g filter="url(#filter0_d_44_1233)" id="Ellipse">
              <circle cx="70" cy="62" fill="url(#paint0_linear_44_1233)" r="46" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="140" id="filter0_d_44_1233" width="140" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="12" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.647 0 0 0 0 0.463 0 0 0 0 0.204 0 0 0 0.45 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_44_1233" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_44_1233" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_44_1233" x1="6687.56" x2="6752.62" y1="-111.525" y2="-46.461">
                <stop stopColor="#F4D189" />
                <stop offset="1" stopColor="#A57634" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Outfit:Bold',sans-serif] font-bold justify-center leading-[0] left-[138.5px] text-[34px] text-center text-white top-[111.5px] whitespace-nowrap">
        <p className="leading-[normal]">✓</p>
      </div>
      <div className="absolute flex h-[18.455px] items-center justify-center left-[26px] top-[34.58px] w-[14.869px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-20 flex-none">
          <div className="h-[16px] relative w-[10px]" data-name="Ellipse">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
              <ellipse cx="5" cy="8" fill="var(--fill-0, #FCA880)" fillOpacity="0.75" id="Ellipse" rx="5" ry="8" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[14.836px] items-center justify-center left-[235.98px] top-[30px] w-[11.626px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-18">
          <div className="h-[13px] relative w-[8px]" data-name="Ellipse">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 13">
              <ellipse cx="4" cy="6.5" fill="var(--fill-0, #BDA67A)" fillOpacity="0.7" id="Ellipse" rx="4" ry="6.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[20.174px] items-center justify-center left-[250px] top-[149.84px] w-[17.693px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-28 flex-none">
          <div className="h-[17px] relative w-[11px]" data-name="Ellipse">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17">
              <ellipse cx="5.5" cy="8.5" fill="var(--fill-0, #F4C574)" fillOpacity="0.7" id="Ellipse" rx="5.5" ry="8.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[16.352px] items-center justify-center left-[12.76px] top-[155px] w-[13.589px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-22">
          <div className="h-[14px] relative w-[9px]" data-name="Ellipse">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
              <ellipse cx="4.5" cy="7" fill="var(--fill-0, #8D6A35)" fillOpacity="0.55" id="Ellipse" rx="4.5" ry="7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[12.652px] items-center justify-center left-[132px] top-[209.3px] w-[9.015px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-5 flex-none">
          <div className="h-[12px] relative w-[8px]" data-name="Ellipse">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
              <ellipse cx="4" cy="6" fill="var(--fill-0, #FCCF6B)" fillOpacity="0.65" id="Ellipse" rx="4" ry="6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[52px] size-[4px] top-[52px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #BDA67A)" fillOpacity="0.45" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[226px] size-[3px] top-[58px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #BDA67A)" fillOpacity="0.45" id="Ellipse" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[234px] size-[4px] top-[178px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #BDA67A)" fillOpacity="0.45" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[46px] size-[3px] top-[180px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #BDA67A)" fillOpacity="0.45" id="Ellipse" r="1.5" />
        </svg>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[60px] left-0 to-[rgba(255,255,255,0.18)] top-[180px] w-[280px]" data-name="Rectangle" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[1.5] relative shrink-0 text-center w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[16px] w-full">Terima kasih sudah memulai persiapan untuk hari yang tak terduga</p>
      <div className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Menyiapkan kepulangan dapat membantu keluargamu menghadapi masa sulit lebih tenang 🤍 `}</p>
        <p>Sekarang, kami akan mengirimkan tautan via WhatsApp berisi akses ke Kartu Persiapan Kepulangan digitalmu.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#1f1912] relative rounded-[100px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[14px] relative w-full">
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">Lihat halaman keanggotaan</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(189,166,122,0.55)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[14px] relative w-full">
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#111928] text-[14px] whitespace-nowrap">Kembali ke Beranda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.18)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_6px_20px_0px_rgba(46,33,20,0.09)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[20px] relative w-full">
          <IllustrationSuccess />
          <Frame3 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 px-[20px] py-[24px] top-[69px] w-[360px]">
      <Frame />
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="bg-gradient-to-b from-[#fffdf9] relative size-full to-[#f5f0e8]" data-name="Success Page">
      <Header />
      <Frame2 />
      <Frame5 />
    </div>
  );
}