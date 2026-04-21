import svgPaths from "./svg-2zhmn336jh";
import imgImageLogo from "@/assets/logo.png";
import imgImage12 from "@/assets/image-12.png";

function NavbarMobileHeader() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] top-0 w-[360px]" data-name="Navbar / Mobile Header">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="h-[45px] relative shrink-0 w-[90px]" data-name="Image / Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLogo} />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Icon / Hamburger Menu">
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

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[20px] top-[24px] w-[320px]">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1912] text-[18px] w-full">Perpanjang Keanggotaan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <span className="leading-[normal]">{`Perpanjang keanggotaanmu dan terus jaga ketenangan keluarga bersama `}</span>
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal]">Pulang</span>
        <span className="leading-[normal]">.</span>
      </p>
    </div>
  );
}

function HeroBanner() {
  return (
    <div className="absolute bg-gradient-to-b from-[#faf3e3] h-[109px] left-0 overflow-clip to-[#f5ead6] top-[69px] w-[360px]" data-name="Hero Banner">
      <div className="absolute left-[260px] size-[160px] top-[-30px]" data-name="illo-circle1">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 160">
          <circle cx="80" cy="80" fill="var(--fill-0, #BD9657)" fillOpacity="0.08" id="illo-circle1" r="80" />
        </svg>
      </div>
      <div className="absolute left-[-20px] size-[100px] top-[80px]" data-name="illo-circle2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="var(--fill-0, #BD9657)" fillOpacity="0.08" id="illo-circle2" r="50" />
        </svg>
      </div>
      <div className="absolute left-[140px] size-[60px] top-[140px]" data-name="illo-circle3">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" fill="var(--fill-0, #BD9657)" fillOpacity="0.1" id="illo-circle3" r="30" />
        </svg>
      </div>
      <Frame3 />
    </div>
  );
}

function From() {
  return (
    <div className="absolute h-[28px] left-[12px] top-[8px] w-[110px]" data-name="from">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal left-0 text-[#6b7280] text-[10px] top-0">Mulai</p>
      <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold left-0 text-[#1f1912] text-[13px] top-[14px]">6 Apr 2026</p>
    </div>
  );
}

function To() {
  return (
    <div className="absolute h-[28px] left-[168px] top-[8px] w-[108px]" data-name="to">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal left-0 text-[#6b7280] text-[10px] top-0">Berakhir</p>
      <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold left-0 text-[#1f1912] text-[13px] top-[14px]">6 Apr 2027</p>
    </div>
  );
}

function DatePill() {
  return (
    <div className="bg-[#fdf3e3] h-[44px] relative rounded-[8px] shrink-0 w-full whitespace-nowrap" data-name="date-pill">
      <From />
      <To />
    </div>
  );
}

function CardMasaPerpanjangan() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Card - Masa Perpanjangan">
      <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] px-[16px] py-[12px] relative w-full">
        <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#6b7280] text-[11px] w-full">Masa Perpanjangan</p>
        <DatePill />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[12px] w-full">Tipe Keanggotaan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[12px] w-full">Biaya Layanan</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#1f1912] text-[13px] w-full">Total Pembayaran</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative text-right">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#1f1912] text-[12px] w-full">Tahunan</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#1f1912] text-[12px] w-full">Rp400.000</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#bd9657] text-[15px] w-full">Rp400.000</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <Frame1 />
    </div>
  );
}

function CardRincianHarga() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Card - Rincian Harga">
      <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] px-[16px] py-[14px] relative w-full">
        <p className="font-['Outfit:Medium',sans-serif] font-medium h-[15px] relative shrink-0 text-[#6b7280] text-[11px] w-[127px]">Rincian Harga</p>
        <Frame6 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-h-px min-w-px relative">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#3d75ed] text-[12px] w-full">Pembayaran via Xendit</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[10px] w-full">Kamu akan diarahkan ke halaman pembayaran Xendit yang terenkripsi dan aman.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[24px] relative shrink-0 w-[56px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
      <Frame7 />
    </div>
  );
}

function XenditInfo() {
  return (
    <div className="bg-[#edf0fe] content-stretch flex flex-col items-start px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[320px]" data-name="Xendit Info">
      <Frame8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[20px] top-[202px] w-[328px]">
      <CardMasaPerpanjangan />
      <CardRincianHarga />
      <XenditInfo />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#1f1912] content-stretch flex items-center justify-center py-[16px] relative rounded-[16px] shrink-0 w-full">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[15px] text-center text-white w-[320px]">Perpanjang Sekarang</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[20px] content-stretch flex flex-col gap-[13px] items-start left-1/2 w-[320px]">
      <Frame4 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-center w-full">
        <span className="leading-[normal]">{`Dengan memperpanjang, kamu menyetujui syarat & ketentuan layanan `}</span>
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal]">Pulang</span>
        <span className="leading-[normal]">.</span>
      </p>
    </div>
  );
}

export default function Perpanjangan() {
  return (
    <div className="bg-[#fefaf3] relative size-full" data-name="Perpanjangan">
      <NavbarMobileHeader />
      <HeroBanner />
      <Frame2 />
      <Frame5 />
    </div>
  );
}