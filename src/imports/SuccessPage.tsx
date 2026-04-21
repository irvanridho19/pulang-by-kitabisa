import svgPaths from "./svg-exb28av5o3";
import imgDark1 from "@/assets/logo.png";
import imgImageRItzmUmXdJtPy2YOnwJ38Jr4Ft76Ym1 from "@/assets/care-manager-icon.png";
import imgGeminiGeneratedImage8V45728V45728V451 from "@/assets/generated-image.png";

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

function Frame1() {
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

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-start left-1/2 px-[16px] py-[32px] w-[360px]">
      <Frame1 />
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
      <div className="bg-[#1f1f1f] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative w-full">
            <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">Cek WhatsApp</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative w-full">
            <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[16px] whitespace-nowrap">Kembali ke Beranda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-1/2 px-[16px] py-[64px] top-[69px] w-[360px]">
      <div className="aspect-[2816/1536] relative shrink-0 w-full" data-name="Gemini_Generated_Image_8v45728v45728v45 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage8V45728V45728V451} />
      </div>
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="bg-white relative size-full" data-name="Success Page">
      <Header />
      <Frame2 />
      <Frame />
    </div>
  );
}