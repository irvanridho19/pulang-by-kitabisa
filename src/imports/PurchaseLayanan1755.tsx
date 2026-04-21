import svgPaths from "./svg-aaue9szqyk";
import imgDark1 from "@/assets/logo.png";
import imgImage6 from "@/assets/image.png";
import imgImageRItzmUmXdJtPy2YOnwJ38Jr4Ft76Ym1 from "@/assets/care-manager-icon.png";

function Header() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] top-0 w-[360px]" data-name="header">
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

function Shape() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[32px]" data-name="Shape">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">1</p>
    </div>
  );
}

function HeadingDesc() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading & Desc">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Pilih Tipe Layanan</p>
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[8px] shrink-0" data-name="Nav Item">
      <Shape />
      <HeadingDesc />
    </div>
  );
}

function Shape1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[32px]" data-name="Shape">
      <div aria-hidden="true" className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">2</p>
    </div>
  );
}

function HeadingDesc1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading & Desc">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Isi Data Diri</p>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Nav Item">
      <Shape1 />
      <HeadingDesc1 />
    </div>
  );
}

function Shape2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[32px]" data-name="Shape">
      <div aria-hidden="true" className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">3</p>
    </div>
  );
}

function HeadingDesc2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading & Desc">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">Konfirmasi Pembayaran</p>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Nav Item">
      <Shape2 />
      <HeadingDesc2 />
    </div>
  );
}

function StepperNavigation() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-0 p-[16px] top-[69px] w-[1440px]" data-name="Stepper Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <NavItem />
      <div className="bg-[#d9d9d9] h-[2px] shrink-0 w-[24px]" />
      <NavItem1 />
      <div className="bg-[#d9d9d9] h-[2px] shrink-0 w-[24px]" />
      <NavItem2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] relative shrink-0 text-[#1f1f1f] w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[18px] whitespace-nowrap">Pilih tipe layanan yang diinginkan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[12px] w-[min-content]">Harga mencakup seluruh kebutuhan pemulasaran dan pemakaman, tanpa biaya tersembunyi.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[1.5] relative shrink-0 text-[18px] w-full">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[#3a3a3a] w-full">Persiapan Jangka Panjang</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a80c45] w-full">Rp120.000/tahun</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="h-[72px] relative shrink-0 w-[53px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <Frame9 />
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="CTA">
      <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative w-full">
            <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">Mulai persiapan sekarang</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px relative text-[#750d33] text-[16px]">Persiapan</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-up">
        <div className="absolute bottom-1/4 left-[5%] right-[5%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
            <path d={svgPaths.p3814a00} fill="var(--fill-0, #750D33)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
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
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Penulisan surat wasiat</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
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
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Pengarsipan digital</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
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
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Pencarian makam</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
      <Frame21 />
      <div className="bg-[#e5e7eb] h-px rounded-[8px] shrink-0 w-full" />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px relative text-[#750d33] text-[16px]">Hari Kematian</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
        <div className="absolute bottom-1/4 left-[5%] right-[5%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
            <path d={svgPaths.pdb65f40} fill="var(--fill-0, #750D33)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
      <Frame22 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px relative text-[#750d33] text-[16px]">Pasca Pemakaman</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
        <div className="absolute bottom-1/4 left-[5%] right-[5%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
            <path d={svgPaths.pdb65f40} fill="var(--fill-0, #750D33)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
      <Frame23 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#3a3a3a] text-[14px] w-full">Layanan ini memiliki masa tunggu selama 3 (tiga) bulan.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="info">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p29daa580} fill="var(--fill-0, #1F2A37)" id="Vector" />
            </svg>
          </div>
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f7f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Frame />
        <Cta />
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#3a3a3a] text-[16px] w-full">Paket layanan sudah termasuk</p>
        <Frame2 />
        <Frame3 />
        <Frame1 />
        <Frame4 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] items-center justify-center left-0 overflow-clip px-[20px] py-[40px] top-[133px] w-[360px]">
      <div className="absolute h-[421px] left-0 top-0 w-[360px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 421">
          <path clipRule="evenodd" d={svgPaths.pcc3bf0} fill="url(#paint0_linear_5_3709)" fillRule="evenodd" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_3709" x1="180" x2="180" y1="0" y2="421">
              <stop stopColor="#D5C9AA" />
              <stop offset="1" stopColor="#D5C9AA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#fdf5ef] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left">
        <div className="absolute inset-[12.5%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
            <path d={svgPaths.p17572900} fill="var(--fill-0, #1F2A37)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Frame19 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap">Sebelumnya</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#fef1f8] relative rounded-[16px] shrink-0 w-full">
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

function Frame17() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[36px] items-start left-1/2 px-[16px] py-[32px] w-[360px]">
      <Frame18 />
      <Frame20 />
    </div>
  );
}

export default function PurchaseLayanan() {
  return (
    <div className="bg-white relative size-full" data-name="Purchase - Layanan - 17-55">
      <Header />
      <StepperNavigation />
      <Frame6 />
      <Frame17 />
    </div>
  );
}