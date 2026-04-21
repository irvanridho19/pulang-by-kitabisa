import svgPaths from "./svg-iv7jua5se7";
import imgDark1 from "@/assets/logo.png";
import imgTobiasTulliusRit9JuAxOhIUnsplash1 from "@/assets/service-person-photo.png";
import imgImage10 from "@/assets/image-10.png";
import imgImage11 from "@/assets/image-11.png";
import imgWhite1 from "@/assets/footer-logo.png";
import imgAccentBar from "@/assets/accent-bar.png";

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

function Badge() {
  return (
    <div className="bg-[rgba(189,166,122,0.15)] relative rounded-[100px] shrink-0" data-name="Badge">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#967240] text-[10px] tracking-[1.2px] whitespace-nowrap">LAYANAN ANGGOTA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function LayananHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Layanan / Heading">
      <Badge />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[#1f1912] text-[22px] w-[min-content]">Manfaat yang kamu dapatkan sebagai anggota</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[#6b6b6b] text-[13px] w-[min-content]">Sejak persiapan hingga pasca pemakaman, Pulang siap hadir langsung membantumu dan keluargamu.</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="absolute bg-[rgba(31,25,18,0.72)] content-stretch flex items-start left-[12px] overflow-clip px-[9px] py-[4px] rounded-[100px] top-[132px]" data-name="Tag">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#bda67a] text-[9px] tracking-[0.6px] whitespace-nowrap">PERSIAPAN</p>
    </div>
  );
}

function Photo() {
  return (
    <div className="bg-gradient-to-r from-[#d1bfa3] h-[160px] overflow-clip relative shrink-0 to-[#ad9475] w-full" data-name="Photo">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-49px)] text-[11px] text-[rgba(255,255,255,0.55)] top-[72px] whitespace-nowrap">[ Foto Rumah Duka ]</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[214px] left-1/2 top-1/2 w-[320px]" data-name="tobias-tullius-rit9JuAXOhI-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTobiasTulliusRit9JuAxOhIUnsplash1} />
      </div>
      <Tag />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[16px] text-black whitespace-nowrap">🏛️</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#1f1912] text-[12px]">Pendampingan penulisan surat wasiat</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[16px] text-black whitespace-nowrap">🏛️</p>
      <p className="relative shrink-0 text-[#1f1912] text-[12px] w-[202px]">Penyimpanan dokumen online</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[16px] text-black whitespace-nowrap">🏛️</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#1f1912] text-[12px]">Pencarian dan pemesanan makam</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Card Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[12px] items-start leading-[normal] pb-[16px] pt-[14px] px-[16px] relative w-full">
          <Frame />
          <Frame1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function CardRumahDukaEksklusif() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_4px_16px_0px_rgba(46,33,20,0.09)] shrink-0 w-full" data-name="Card / Rumah Duka Eksklusif">
      <Photo />
      <CardContent />
    </div>
  );
}

function Tag1() {
  return (
    <div className="absolute bg-[rgba(31,25,18,0.72)] content-stretch flex items-start left-[12px] overflow-clip px-[9px] py-[4px] rounded-[100px] top-[132px]" data-name="Tag">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#bda67a] text-[9px] tracking-[0.6px] whitespace-nowrap">HARI KEMATIAN</p>
    </div>
  );
}

function Photo1() {
  return (
    <div className="bg-gradient-to-r from-[#d1bfa3] h-[160px] overflow-clip relative shrink-0 to-[#ad9475] w-full" data-name="Photo">
      <div className="-translate-y-1/2 absolute h-[426px] left-0 top-[calc(50%-8px)] w-[319px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-64px)] text-[11px] text-[rgba(255,255,255,0.55)] top-[72px] whitespace-nowrap">[ Foto Armada Ambulans ]</p>
      <Tag1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[16px] text-black whitespace-nowrap">🚑</p>
      <div className="flex-[1_0_0] min-h-px min-w-px relative text-[#1f1912] text-[12px]">
        <p className="mb-0">Asisten Kepulangan hadir membantu</p>
        <p className="mb-0">pemulasaran jenazah</p>
        <p>{`(Muslim & Non Muslim)`}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[16px] text-black whitespace-nowrap">🚑</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#1f1912] text-[12px]">Pemesanan ambulans premium</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[16px] text-black whitespace-nowrap">🚑</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#1f1912] text-[12px]">Penyediaan transportasi keluarga Hi Ace 14 seat</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Card Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[12px] items-start leading-[normal] pb-[16px] pt-[14px] px-[16px] relative w-full">
          <Frame3 />
          <Frame4 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function CardAmbulansJenazahPremium() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_4px_16px_0px_rgba(46,33,20,0.09)] shrink-0 w-full" data-name="Card / Ambulans Jenazah Premium">
      <Photo1 />
      <CardContent1 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="absolute bg-[rgba(31,25,18,0.72)] content-stretch flex items-start left-[12px] overflow-clip px-[9px] py-[4px] rounded-[100px] top-[132px]" data-name="Tag">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#bda67a] text-[9px] tracking-[0.6px] whitespace-nowrap">PASCA PEMAKAMAN</p>
    </div>
  );
}

function Photo2() {
  return (
    <div className="bg-gradient-to-r from-[#d1bfa3] h-[160px] overflow-clip relative shrink-0 to-[#ad9475] w-full" data-name="Photo">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-61px)] text-[11px] text-[rgba(255,255,255,0.55)] top-[72px] whitespace-nowrap">[ Foto Tim Pemulasaran ]</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[213px] left-1/2 top-[calc(50%+0.5px)] w-[320px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <Tag2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[16px] text-black whitespace-nowrap">🤲</p>
      <div className="flex-[1_0_0] min-h-px min-w-px relative text-[#1f1912] text-[12px]">
        <p className="mb-0">Asisten Kepulangan membantu mengurus</p>
        <p className="mb-0">semua administrasi dokumen, seperti akta</p>
        <p className="mb-0">kematian, penutupan rekening bank dan</p>
        <p>BPJS, dll.</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[16px] text-black whitespace-nowrap">🤲</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#1f1912] text-[12px]">Penjadwalan konseling psikologis</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[16px] text-black whitespace-nowrap">🤲</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#1f1912] text-[12px]">Santunan tunai untuk kebutuhan lain-lain di rumah</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Card Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[12px] items-start leading-[normal] pb-[16px] pt-[14px] px-[16px] relative w-full">
          <Frame6 />
          <Frame7 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function CardTimPemulasaranProfesional() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_4px_16px_0px_rgba(46,33,20,0.09)] shrink-0 w-full" data-name="Card / Tim Pemulasaran Profesional">
      <Photo2 />
      <CardContent2 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-gradient-to-b from-[#faf8f4] relative shrink-0 to-[#f5f0e8] w-full" data-name="Content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[20px] py-[36px] relative w-full">
          <LayananHeading />
          <CardRumahDukaEksklusif />
          <CardAmbulansJenazahPremium />
          <CardTimPemulasaranProfesional />
        </div>
      </div>
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Top Row">
      <div className="h-[40px] relative shrink-0 w-[80px]" data-name="white 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhite1} />
      </div>
      <div className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.35)] text-right whitespace-nowrap">
        <p className="mb-0">Pulang dengan tenang,</p>
        <p>berangkat dengan ikhlas.</p>
      </div>
    </div>
  );
}

function NavRow() {
  return (
    <div className="content-stretch flex font-['Outfit:Medium',sans-serif] font-medium h-[20px] items-center justify-between leading-[normal] overflow-clip relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] w-full whitespace-nowrap" data-name="Nav Row">
      <p className="relative shrink-0">Solusi</p>
      <p className="relative shrink-0">Layanan</p>
      <p className="relative shrink-0">Harga</p>
      <p className="relative shrink-0">Dampak</p>
      <p className="relative shrink-0">Klaim</p>
    </div>
  );
}

function BottomRow() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Bottom Row">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.25)] text-right whitespace-nowrap">© 2026 Pulang by Kitabisa.</p>
    </div>
  );
}

function FooterInner() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Inner">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[24px] pt-[28px] px-[24px] relative w-full">
          <TopRow />
          <div className="bg-[rgba(255,255,255,0.07)] h-px shrink-0 w-full" data-name="Inner Divider" />
          <NavRow />
          <div className="bg-[rgba(255,255,255,0.07)] h-px shrink-0 w-full" data-name="Inner Divider 2" />
          <BottomRow />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1a140f] content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Footer">
      <div className="bg-[rgba(255,255,255,0.08)] h-px shrink-0 w-[360px]" data-name="Divider" />
      <FooterInner />
      <div className="h-[3px] relative shrink-0 w-[360px]" data-name="Accent Bar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAccentBar} />
      </div>
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

export default function Layanan() {
  return (
    <div className="bg-white relative size-full" data-name="Layanan">
      <Header />
      <Container />
    </div>
  );
}