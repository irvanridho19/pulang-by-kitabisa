import svgPaths from "./svg-qytowuwh15";
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
    <div className="bg-[#1f1f1f] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[32px]" data-name="Shape">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">3</p>
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
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[-262px] p-[16px] top-[69px] w-[1440px]" data-name="Stepper Navigation">
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Frame7 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap">Sebelumnya</p>
    </div>
  );
}

function Frame4() {
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

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[36px] items-start left-1/2 px-[16px] py-[32px] w-[360px]">
      <Frame6 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[18px] w-full">Satu langkah lagi, persiapanmu selesai</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[14px] w-full">Cek kembali detail di bawah ini. Pastikan semua data benar.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[14px] w-[110px]">Pilihan Layanan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">:</p>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#4b5563] text-[14px]">Persiapan untuk Masa Depan</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[14px] w-[110px]">Pembayaran</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">:</p>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#4b5563] text-[14px]">Berlangganan tahunan</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[14px] w-[110px]">Tata Cara Kepulangan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">:</p>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#4b5563] text-[14px]">Prosesi Muslim</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[16px] w-full">Ringkasan Layanan</p>
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[14px] w-[110px]">Nama Lengkap</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">:</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[14px] w-[181px]">Joko Susiso Budiman Sudarman Trionoho</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[14px] w-[110px]">Nomor WhatsApp</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">:</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">0877621212</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[16px] w-full">Detail Penerima Layanan</p>
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[14px] w-[110px]">Nama Kontak Darurat</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">:</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[14px] w-[181px]">Arif Didu Himawan</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[14px] w-[110px]">Hubungan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">:</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Adik</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[14px] w-[110px]">Nomor WhatsApp</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">:</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">-</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] text-[16px] w-full">Kontak Darurat</p>
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="Toggle">
      <div className="absolute bg-[#e5e7eb] inset-0 rounded-[40px]" />
      <div className="absolute bg-white inset-[10%_50.57%_10.83%_6.25%] rounded-[40px]" />
    </div>
  );
}

function LabelHelper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Label & Helper">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#111928] text-[20px] whitespace-nowrap">Donasi Tambahan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#4b5563] text-[12px] w-[min-content]">Bantu Yayasan Pulang untuk mendukung lebih banyak keluarga yang membutuhkan. Donasi ini bersifat opsional.</p>
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Toggle">
      <Toggle1 />
      <LabelHelper />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Toggle />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[1.5] relative shrink-0 text-[16px] w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] w-[110px]">Subtotal Layanan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] whitespace-nowrap">:</p>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#4b5563]">Rp100.000</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[1.5] relative shrink-0 text-[16px] w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] w-[110px]">Frekuensi</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] whitespace-nowrap">:</p>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#4b5563]">Tahunan</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[16px] w-[110px]">Donasi Tambahan</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame24 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">:</p>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#4b5563] text-[16px]">Rp0</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[1.5] relative shrink-0 text-[16px] w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#111928] w-[110px]">Total Pembayaran</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] whitespace-nowrap">:</p>
      <p className="flex-[1_0_0] font-['Outfit:Bold',sans-serif] font-bold min-h-px min-w-px relative text-[#1f1f1f]">Rp100.000</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check-circle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p107fb900} fill="var(--fill-0, #03543F)" id="Vector" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#6b7280] text-[12px]">Harga ini sudah mencakup donasi untuk pemulasaran dan pemakaman warga yang membutuhkan, seperti tunawisma.</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <Title />
    </div>
  );
}

function Alerts() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Alerts">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Description />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Frame8 />
        <Frame22 />
        <Frame23 />
        <Frame25 />
        <Alerts />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[20px] w-full">Rincian Biaya</p>
      <Frame21 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame9 />
      <div className="bg-[#e5e7eb] h-[2px] rounded-[8px] shrink-0 w-full" />
      <Frame13 />
      <div className="bg-[#e5e7eb] h-[2px] rounded-[8px] shrink-0 w-full" />
      <Frame16 />
      <div className="bg-[#e5e7eb] h-[2px] rounded-[8px] shrink-0 w-full" />
      <Header1 />
      <div className="bg-[#e5e7eb] h-[2px] rounded-[8px] shrink-0 w-full" />
      <Frame20 />
      <div className="bg-[#1f1f1f] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative w-full">
            <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">Selesaikan Persiapan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-1/2 px-[20px] py-[40px] top-[133px] w-[360px]">
      <Frame2 />
    </div>
  );
}

export default function Ringkasan() {
  return (
    <div className="bg-white relative size-full" data-name="Ringkasan">
      <Header />
      <StepperNavigation />
      <Frame5 />
      <Frame />
    </div>
  );
}