import svgPaths from "./svg-txzyv3eu3q";
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

function Frame22() {
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

function Frame21() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Frame22 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-black whitespace-nowrap">Kembali ke Beranda</p>
    </div>
  );
}

function Frame19() {
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

function Frame20() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[36px] items-start left-1/2 px-[16px] py-[32px] w-[360px]">
      <Frame21 />
      <Frame19 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#4b5563] text-[0px] text-[16px] whitespace-nowrap">
        <span className="leading-[1.5]">{`Untuk siapa layanan `}</span>
        <span className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5]">Pulang</span>
        <span className="leading-[1.5]">{` ini?`}</span>
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#9ca3af] text-[12px] w-[326px]">Pilih salah satu agar kami bisa menyesuaikan dengan kebutuhanmu.</p>
    </div>
  );
}

function IconDiriSendiri() {
  return (
    <div className="bg-[#fcf6ec] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon / Diri Sendiri">
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">🧑</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <IconDiriSendiri />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Untuk Diri Sendiri</p>
        </div>
      </div>
    </div>
  );
}

function IconKeluarga() {
  return (
    <div className="bg-[#f0f4fc] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon / Keluarga">
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">👨‍👩‍👧</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <IconKeluarga />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Untuk Anggota Keluarga</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">Berapa usia orang yang kamu daftarkan?</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#ecf8f0] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon / < 25">
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">🌱</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <Icon />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">{`< 25 tahun`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#fcf6ec] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon / 25-55">
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">🧑‍💼</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <Icon2 />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">25 - 55 tahun</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#fcf2e8] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon / 55-65">
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">🧓</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <Icon3 />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">55 - 65 tahun</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#faefe4] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon / > 65">
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">👴</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <Icon1 />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">{`> 65 tahun`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame10 />
      <Frame12 />
      <Frame14 />
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[16px] w-[328px]">Bagaimana tata cara kepulangan yang diharapkan?</p>
    </div>
  );
}

function IconMuslim() {
  return (
    <div className="bg-[#ecf4f8] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon / Muslim">
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">☪️</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-h-px min-w-px relative">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Prosesi Muslim</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9ca3af] text-[12px] w-[min-content]">Sesuai syariat Islam, mencakup memandikan, mengkafani, dan pemakaman tanpa peti.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <IconMuslim />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function IconNonMuslim() {
  return (
    <div className="bg-[#f4effc] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon / Non-Muslim">
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">✝️</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-h-px min-w-px relative">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[14px] w-full">Prosesi Non-Muslim / Tradisi Lainnya</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px] w-full">Mencakup penyediaan peti jenazah, tata rias, dan penyesuaian ibadah/tradisi keluarga.</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <IconNonMuslim />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame23 />
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[16px] w-[328px]">Di mana domisili saat ini?</p>
    </div>
  );
}

function IconJabodetabek() {
  return (
    <div className="bg-[#ecf0f8] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon / Jabodetabek">
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">🏙️</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Area Jabodebatek</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <IconJabodetabek />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame29 />
    </div>
  );
}

function IconLuarJabodeta() {
  return (
    <div className="bg-[#f0f8f3] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon / Luar Jabodeta">
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">🗺️</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Luar Jabodetabek</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(46,33,20,0.06)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <IconLuarJabodeta />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame28 />
      <Frame30 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-1/2 px-[20px] py-[40px] top-[69px] w-[360px]">
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <div className="bg-[#d8d8d8] relative rounded-[100px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.2)] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative w-full">
            <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">Lanjutkan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PurchaseOnboard() {
  return (
    <div className="bg-gradient-to-b from-[#fffdf9] relative size-full to-[#f5f0e8]" data-name="Purchase - Onboard">
      <Header />
      <Frame20 />
      <Frame />
    </div>
  );
}