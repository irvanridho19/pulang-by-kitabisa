import svgPaths from "./svg-ariiju2wzn";
import imgDark1 from "@/assets/logo.png";

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] top-0 w-[360px]" data-name="header">
      <div className="h-[45px] relative shrink-0 w-[90px]" data-name="dark 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDark1} />
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
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Detail Layanan</p>
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] relative shrink-0 text-[#1f1f1f] w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[18px] w-[266px]">Layanan untukmu</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[12px] w-[min-content]">Harga sudah termasuk semua layanan lengkap, dari sebelum kematian hingga pasca pemakaman.</p>
    </div>
  );
}

function BadgeEfisien() {
  return (
    <div className="bg-[rgba(107,79,45,0.08)] content-stretch flex items-center overflow-clip px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Badge/Efisien">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b4f2d] text-[10px] tracking-[1px] whitespace-nowrap">LEBIH EFISIEN</p>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[rgba(31,25,18,0.05)] relative rounded-[100px] shrink-0" data-name="Chip">
      <div className="content-stretch flex items-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[10px] text-[rgba(31,25,18,0.5)] whitespace-pre">{`🧑  Untuk Diri Sendiri`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(31,25,18,0.1)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[rgba(31,25,18,0.05)] relative rounded-[100px] shrink-0" data-name="Chip">
      <div className="content-stretch flex items-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[10px] text-[rgba(31,25,18,0.5)] whitespace-pre">
          <span className="leading-[normal]">☪️</span>
          <span className="leading-[normal]">{`  Prosesi Muslim`}</span>
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(31,25,18,0.1)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Chips() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Chips">
      <Chip />
      <Chip1 />
    </div>
  );
}

function Bulanan() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[#d8be90] min-h-px min-w-px relative rounded-[100px] shadow-[0px_2px_8px_0px_rgba(20,13,5,0.25)] to-[#a88958]" data-name="Bulanan">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative w-full">
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] whitespace-nowrap">Bulanan</p>
        </div>
      </div>
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[#6cca51] content-stretch flex items-center overflow-clip px-[6px] py-[3px] relative rounded-[100px] shrink-0" data-name="Chip">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[9px] text-white whitespace-nowrap">Lebih Hemat</p>
    </div>
  );
}

function Tahunan() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tahunan">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[14px] py-[8px] relative w-full">
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-[rgba(31,25,18,0.45)] whitespace-nowrap">Tahunan</p>
          <Chip2 />
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#ede6da] content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 w-[280px]" data-name="Tab">
      <Bulanan />
      <Tahunan />
    </div>
  );
}

function PRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline overflow-clip relative shrink-0" data-name="PRow">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[#5c3e1e] text-[34px]">Rp35.000</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#9e8e78] text-[13px]">/ bulan</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip pb-[4px] pt-[14px] relative shrink-0 w-[280px] whitespace-nowrap" data-name="Price">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#9e8e78] text-[11px] tracking-[0.2px]">Bayar bulanan</p>
      <PRow />
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#1f1912] text-[11px]">Setara Rp420.000 dalam setahun</p>
    </div>
  );
}

function NoteSantunan() {
  return (
    <div className="bg-[#f5f0e5] relative rounded-[10px] shrink-0 w-[280px]" data-name="Note/Santunan">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-full">
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#3a2c1a] text-[10px] w-[247px]">
          <span className="leading-[normal]">{`✅ Uang santunan duka `}</span>
          <span className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal]">Rp 5.000.000</span>
          <span className="leading-[normal]">{` untuk keluarga`}</span>
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(212,184,150,0.6)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DotWrap() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Menulis surat wasiat</p>
    </div>
  );
}

function DotWrap1() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap1 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Menyimpan dokumen penting secara online</p>
    </div>
  );
}

function DotWrap2() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap2 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Mencari dan memesan makam</p>
    </div>
  );
}

function GroupDiTahapPersiapanKamuMendapatLayanan() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Group/📝  Di tahap persiapan, kamu mendapat layanan:">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8a6e3e] text-[12px] tracking-[0.3px] w-[280px] whitespace-pre-wrap">{`📝  Di tahap persiapan, kamu mendapat layanan:`}</p>
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function DotWrap3() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap3 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Pemulasaran jenazah lengkap, muslim dan non-muslim</p>
    </div>
  );
}

function DotWrap4() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap4 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Peralatan untuk jenazah (keranda, kain, bunga, dll)</p>
    </div>
  );
}

function DotWrap5() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap5 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Mobil jenazah premium</p>
    </div>
  );
}

function DotWrap6() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap6 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Transportasi untuk keluarga</p>
    </div>
  );
}

function DotWrap7() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap7 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Asisten khusus dari tim Pulang untuk membantu segala kebutuhan keluarga</p>
    </div>
  );
}

function GroupSaatHariKematianLayananYangDidapatkan() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Group/🕌  Saat hari kematian, layanan yang didapatkan:">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8a6e3e] text-[12px] tracking-[0.3px] w-[280px] whitespace-pre-wrap">{`🕌  Saat hari kematian, layanan yang didapatkan:`}</p>
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function DotWrap8() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap8 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Akta kematian</p>
    </div>
  );
}

function DotWrap9() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap9 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Penutupan BPJS</p>
    </div>
  );
}

function DotWrap10() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap10 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Penutupan rekening bank</p>
    </div>
  );
}

function DotWrap11() {
  return (
    <div className="relative shrink-0 size-[5px]" data-name="DotWrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_68_1315)" id="DotWrap">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Dot" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_68_1315">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Item">
      <DotWrap11 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[267px]">Segala kebutuhan administrasi lainnya</p>
    </div>
  );
}

function GroupPasca() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="Group/Pasca">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8a6e3e] text-[12px] tracking-[0.3px] w-[280px] whitespace-pre-wrap">{`📋  Pasca pemakaman, layanan yang diberikan:`}</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#3a2c1a] text-[13px] w-[280px]">Tim Pulang akan mengirim satu asisten khusus bagi keluarga untuk mengurus administrasi:</p>
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#da336b] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[24px] shrink-0" data-name="Badge">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">Konsultasi Psikolog - Gratis 3 Sesi</p>
    </div>
  );
}

function NotePsikolog() {
  return (
    <div className="bg-[#fff0f5] relative rounded-[12px] shrink-0 w-[280px]" data-name="Note/Psikolog">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Badge />
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(58,44,26,0.65)] w-[256px]">Keluarga bisa berkonsultasi dengan psikolog profesional di masa duka</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(218,51,107,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function PlanCardLightMode() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[320px]" data-name="Plan Card / Light Mode">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[28px] pt-[20px] px-[20px] relative rounded-[inherit] w-full">
        <BadgeEfisien />
        <Chips />
        <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f1912] text-[20px] w-[280px]">Layanan Keanggotaan</p>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] text-[rgba(31,25,18,0.5)] w-[280px]">Cocok untuk yang ingin mempersiapkan kepulangan sejak jauh hari.</p>
        <Tab />
        <Price />
        <NoteSantunan />
        <div className="bg-[rgba(200,191,175,0.4)] h-px shrink-0 w-[280px]" data-name="Divider" />
        <GroupDiTahapPersiapanKamuMendapatLayanan />
        <div className="bg-[rgba(200,191,175,0.4)] h-px shrink-0 w-[280px]" data-name="Divider" />
        <GroupSaatHariKematianLayananYangDidapatkan />
        <div className="bg-[rgba(200,191,175,0.4)] h-px shrink-0 w-[280px]" data-name="Divider" />
        <GroupPasca />
        <div className="bg-[rgba(200,191,175,0.4)] h-px shrink-0 w-[280px]" data-name="Divider" />
        <NotePsikolog />
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[11px] text-[rgba(58,44,26,0.8)] w-[min-content]">*Semua layanan bisa diakses setelah melewati masa tunggu 3 bulan</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0d8cc] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(26,18,10,0.1)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] items-center justify-center left-0 overflow-clip px-[20px] py-[40px] top-[133px] w-[360px]">
      <div className="absolute h-[421px] left-0 top-0 w-[360px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 421">
          <path clipRule="evenodd" d={svgPaths.pcc3bf0} fill="url(#paint0_linear_68_1318)" fillRule="evenodd" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_68_1318" x1="180" x2="180" y1="0" y2="421">
              <stop stopColor="#F9F7F3" />
              <stop offset="1" stopColor="#F9F7F3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame1 />
      <PlanCardLightMode />
      <div className="bg-[#1f1912] relative rounded-[100px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative w-full">
            <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">Lanjutkan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PurchaseLayanan() {
  return (
    <div className="bg-white relative size-full" data-name="Purchase - Layanan - 17-55">
      <Header />
      <StepperNavigation />
      <Frame />
    </div>
  );
}