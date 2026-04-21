import svgPaths from "./svg-427pcoex8y";
import imgDark1 from "@/assets/logo.png";
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
    <div className="content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[32px]" data-name="Shape">
      <div aria-hidden="true" className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeadingDesc() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading & Desc">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Pilih Tipe Layanan</p>
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Nav Item">
      <Shape />
      <HeadingDesc />
    </div>
  );
}

function Shape1() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[32px]" data-name="Shape">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">2</p>
    </div>
  );
}

function HeadingDesc1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading & Desc">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Isi Data Diri</p>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[8px] shrink-0" data-name="Nav Item">
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

function Frame8() {
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Frame8 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap">Sebelumnya</p>
    </div>
  );
}

function Frame5() {
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

function Frame6() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[36px] items-start left-1/2 px-[16px] py-[32px] w-[360px]">
      <Frame7 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[18px] whitespace-nowrap">Sekarang, lengkapi data dirimu</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b7280] text-[14px]">
        <p className="leading-[1.5]">Masukkan nama lengkap</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b7280] text-[14px]">
        <p className="leading-[1.5]">+62 8123456789</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[18px] whitespace-nowrap">Kontak Darurat</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[16px] w-full">Siapa kontak darurat yang kamu tunjuk?</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9ca3af] text-[0px] text-[12px] w-full">
        <span className="leading-[1.5]">{`Kontak darurat bertugas menghubungi tim Pulang saat kamu tutup usia. Setelah pendaftaran ini selesai, `}</span>
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.5]">kami akan mengirimkan WhatsApp otomatis kepada mereka</span>
        <span className="leading-[1.5]">{` berisi panduan dan akses digital Kartu Persiapan Kepulangan milikmu.`}</span>
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b7280] text-[14px]">
        <p className="leading-[1.5]">Nama lengkap</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b7280] text-[14px]">
        <p className="leading-[1.5]">Pilih salah satu</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="chevron-down">
        <div className="absolute bottom-1/4 left-[5%] right-[5%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 6">
            <path d={svgPaths.p23e40d80} fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b7280] text-[14px]">
        <p className="leading-[1.5]">+62</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame9 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[14px] w-full">Nama Lengkap Kontak Darurat</p>
        <Input2 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[14px] w-full">Hubungan dengan Kontak Darurat</p>
        <Input3 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[14px] w-full">Nomor WhatsApp Kontak Darurat</p>
        <Input4 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame1 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[14px] w-full">Nama Lengkap sesuai KTP</p>
        <Input />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[14px] w-full">Nomor WhatsApp</p>
        <Input1 />
      </div>
      <Frame4 />
      <div className="bg-[#1f1f1f] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative w-full">
            <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">Selanjutnya</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-1/2 px-[16px] py-[24px] top-[133px] w-[360px]">
      <Frame3 />
    </div>
  );
}

export default function DataDiriDiriSendiri() {
  return (
    <div className="bg-white relative size-full" data-name="Data Diri - Diri Sendiri">
      <Header />
      <StepperNavigation />
      <Frame6 />
      <Frame />
    </div>
  );
}