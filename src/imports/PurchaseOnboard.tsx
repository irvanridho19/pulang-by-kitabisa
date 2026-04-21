import svgPaths from "./svg-wpbyuseo3";
import imgDark1 from "@/assets/logo.png";
import imgImage3Tcm4Arj1MH5XDzwlodI1ZfG6JdPqb1 from "@/assets/image-3.png";
import imgImage4GFkBtLamDxBDkfZinYzKjCb6DeCyP1 from "@/assets/image-4.png";
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

function Frame5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]" data-name="image-3Tcm4ARJ1mH5XDzwlodI1ZfG6JdPQB 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3Tcm4Arj1MH5XDzwlodI1ZfG6JdPqb1} />
          </div>
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Untuk Diri Sendiri</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]" data-name="image-4gFKBtLAMDxBDkfZINYzKjCb6DeCyP 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4GFkBtLamDxBDkfZinYzKjCb6DeCyP1} />
          </div>
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

function Frame11() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]" data-name="image-3Tcm4ARJ1mH5XDzwlodI1ZfG6JdPQB 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3Tcm4Arj1MH5XDzwlodI1ZfG6JdPqb1} />
          </div>
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

function Frame13() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]" data-name="image-3Tcm4ARJ1mH5XDzwlodI1ZfG6JdPQB 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3Tcm4Arj1MH5XDzwlodI1ZfG6JdPqb1} />
          </div>
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

function Frame15() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]" data-name="image-3Tcm4ARJ1mH5XDzwlodI1ZfG6JdPQB 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3Tcm4Arj1MH5XDzwlodI1ZfG6JdPqb1} />
          </div>
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

function Frame17() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]" data-name="image-3Tcm4ARJ1mH5XDzwlodI1ZfG6JdPQB 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3Tcm4Arj1MH5XDzwlodI1ZfG6JdPqb1} />
          </div>
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-h-px min-w-px relative">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Prosesi Muslim</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9ca3af] text-[12px] w-[min-content]">Sesuai syariat Islam, mencakup memandikan, mengkafani, dan pemakaman tanpa peti.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]" data-name="image-3Tcm4ARJ1mH5XDzwlodI1ZfG6JdPQB 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3Tcm4Arj1MH5XDzwlodI1ZfG6JdPqb1} />
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame20 />
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

function Frame22() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]" data-name="image-4gFKBtLAMDxBDkfZINYzKjCb6DeCyP 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4GFkBtLamDxBDkfZinYzKjCb6DeCyP1} />
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4b5563] text-[16px] w-[328px]">Di mana domisili saat ini?</p>
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

function Frame25() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]" data-name="image-3Tcm4ARJ1mH5XDzwlodI1ZfG6JdPQB 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3Tcm4Arj1MH5XDzwlodI1ZfG6JdPqb1} />
          </div>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame25 />
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

function Frame27() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]" data-name="image-4gFKBtLAMDxBDkfZINYzKjCb6DeCyP 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4GFkBtLamDxBDkfZinYzKjCb6DeCyP1} />
          </div>
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame27 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame24 />
      <Frame26 />
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
      <div className="bg-[#d8d8d8] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative w-full">
            <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">Lanjutkan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#fdf5ef] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0">
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

function Frame29() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Frame30 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-black whitespace-nowrap">Kembali ke Beranda</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#fef1f8] relative rounded-[16px] shrink-0 w-full">
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

function Frame28() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[36px] items-start left-1/2 px-[16px] py-[32px] w-[360px]">
      <Frame29 />
      <Frame31 />
    </div>
  );
}

export default function PurchaseOnboard() {
  return (
    <div className="bg-white relative size-full" data-name="Purchase - Onboard">
      <Header />
      <Frame />
      <Frame28 />
    </div>
  );
}