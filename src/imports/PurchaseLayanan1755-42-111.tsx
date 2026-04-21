import svgPaths from "./svg-avs0z7lyx4";
import imgDark1 from "@/assets/logo.png";
import imgImageRItzmUmXdJtPy2YOnwJ38Jr4Ft76Ym1 from "@/assets/care-manager-icon.png";

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

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] relative shrink-0 text-[#1f1f1f] w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[18px] w-[266px]">Layanan untukmu</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[12px] w-[min-content]">Harga mencakup seluruh kebutuhan pemulasaran dan pemakaman, tanpa biaya tersembunyi.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#594635] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[100px] shrink-0 w-[99px]" data-name="Frame">
      <p className="flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#bda67a] text-[10px] tracking-[1px]">LEBIH EFISIEN</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[100px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.55)] w-[92px] whitespace-pre-wrap">{`🧑  Untuk Diri Sendiri`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[100px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.55)] w-[92px] whitespace-pre-wrap">{`🕌  Prosesi Muslim`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[#e2d0a8] text-[32px] w-full">Rp30.000</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[rgba(255,255,255,0.45)] w-full whitespace-pre-wrap">{`per bulan  ·  Rp120.000/tahun`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#bda67a] h-[48px] relative rounded-[100px] shadow-[0px_4px_12px_0px_rgba(189,166,122,0.35)] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative size-full">
          <p className="flex-[1_0_0] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[15px] text-center text-white">Daftar jadi anggota</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[10px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[12px] text-[rgba(255,255,255,0.5)] whitespace-pre-wrap">{`⏳  Masa tunggu 3 bulan sejak pendaftaran`}</p>
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

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[5px]" data-name="Dot">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.4" id="Dot" r="2.5" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.75)] w-[255px]">Konsultasi perencanaan keuangan dan pembagian waris</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#bda67a] text-[14px] w-full whitespace-pre-wrap">{`📝  Di tahap persiapan, kamu dibantu:`}</p>
      <ItemPenulisanSuratWasiat />
      <ItemDigitalVaultDokumenPenting />
      <ItemPemesananKavlingMakam />
      <Frame8 />
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
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Pemulasaran jenazah (Muslim)</p>
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
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#af9160] text-[14px] tracking-[0.3px] w-full whitespace-pre-wrap">{`🕌  Saat hari kematian, Asisten Kepulangan hadir membantu:`}</p>
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

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#bda67a] text-[14px] w-full whitespace-pre-wrap">{`📋  Pasca pemakaman, Asisten Kepulangan hadir membantu:`}</p>
      <ItemPendampinganPengurusanDokumen />
      <ItemKonsultasiWarisAset />
      <ItemKonsultasiWarisAset1 />
    </div>
  );
}

function PlanCardPersiapanJangkaPanjang() {
  return (
    <div className="bg-[#1f1912] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[24px] relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(26,18,10,0.28)] shrink-0 w-[320px]" data-name="Plan Card / Persiapan Jangka Panjang">
      <Frame />
      <Frame17 />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white w-full">Layanan Keanggotaan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] w-full">Cocok untuk yang ingin mempersiapkan kepulangan sejak jauh hari.</p>
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <div className="bg-[rgba(255,255,255,0.12)] h-px shrink-0 w-full" data-name="Divider" />
      <Frame7 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px shrink-0 w-full" data-name="Rectangle" />
      <GroupHariKematian />
      <div className="bg-[rgba(255,255,255,0.08)] h-px shrink-0 w-full" data-name="Rectangle" />
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <PlanCardPersiapanJangkaPanjang />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] items-center justify-center left-0 overflow-clip px-[20px] py-[40px] top-[133px] w-[360px]">
      <div className="absolute h-[421px] left-0 top-0 w-[360px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 421">
          <path clipRule="evenodd" d={svgPaths.pcc3bf0} fill="url(#paint0_linear_42_116)" fillRule="evenodd" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_42_116" x1="180" x2="180" y1="0" y2="421">
              <stop stopColor="#F9F7F3" />
              <stop offset="1" stopColor="#F9F7F3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[rgba(189,166,122,0.15)] content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-left">
        <div className="absolute inset-[12.5%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
            <path d={svgPaths.p2b09b180} fill="var(--fill-0, #1F2A37)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Frame16 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-black whitespace-nowrap">Sebelumnya</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-gradient-to-r from-[#fcf6ec] relative rounded-[14px] shrink-0 to-[#f5ede0] w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.25)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[36px] py-[24px] relative w-full">
          <div className="relative shrink-0 size-[36px]" data-name="image-RItzmUmXDJtPY2YOnwJ38jr4Ft76YM 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRItzmUmXdJtPy2YOnwJ38Jr4Ft76Ym1} />
          </div>
          <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px relative text-[14px] text-black">Butuh bantuan? Hubungi Care Manager Pulang</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[36px] items-start left-1/2 px-[16px] py-[32px] w-[360px]">
      <Frame15 />
      <Frame13 />
    </div>
  );
}

export default function PurchaseLayanan() {
  return (
    <div className="bg-white relative size-full" data-name="Purchase - Layanan - 17-55">
      <Header />
      <StepperNavigation />
      <Frame10 />
      <Frame14 />
    </div>
  );
}