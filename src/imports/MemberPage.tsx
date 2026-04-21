import svgPaths from "./svg-lfus5j7whv";
import imgWhite1 from "@/assets/footer-logo.png";
import imgImageLogo from "@/assets/logo.png";

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start leading-[normal] left-[20px] top-[56px] w-[187px]">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[12px] text-[rgba(255,255,255,0.38)] tracking-[2px] w-full">PLG – 2025 – 001847</p>
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[#e2d0a8] text-[19px] w-full">Joko Susilo Budiman</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[132px]">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[8px] text-[rgba(255,255,255,0.38)] tracking-[0.8px] w-full">KEANGGOTAAN</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[11px] text-[rgba(255,255,255,0.85)] w-full">Tahunan</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 text-right w-[120px]">
      <p className="font-['Outfit:Regular',sans-serif] font-normal h-[12px] relative shrink-0 text-[8px] text-[rgba(255,255,255,0.38)] tracking-[0.8px] w-full">BERLAKU HINGGA</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold h-[16px] relative shrink-0 text-[#bda67a] text-[11px] w-full">31 Des 2026</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[28px] items-center leading-[normal] left-[20px] top-[136px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function DigitalMemberCard() {
  return (
    <div className="h-[186px] overflow-clip relative rounded-[20px] shadow-[0px_12px_32px_0px_rgba(26,18,10,0.38)] shrink-0 w-full" data-name="Digital Member Card" style={{ backgroundImage: "linear-gradient(134.808deg, rgb(54, 41, 25) 13.397%, rgb(35, 27, 16) 50%, rgb(23, 17, 10) 86.603%)" }}>
      <div className="absolute left-[240px] size-[130px] top-[-50px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 130">
          <circle cx="65" cy="65" fill="var(--fill-0, white)" fillOpacity="0.06" id="Ellipse" r="65" />
        </svg>
      </div>
      <div className="absolute left-[-30px] size-[90px] top-[110px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
          <circle cx="45" cy="45" fill="var(--fill-0, white)" fillOpacity="0.04" id="Ellipse" r="45" />
        </svg>
      </div>
      <Frame1 />
      <Frame4 />
      <div className="absolute bg-gradient-to-r from-[rgba(189,166,122,0)] h-[3px] left-0 to-[rgba(189,166,122,0)] top-[183px] via-1/2 via-[rgba(189,166,122,0.85)] w-[320px]" data-name="Rectangle" />
      <div className="absolute h-[24px] left-[20px] top-[15px] w-[47px]" data-name="white 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhite1} />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(46,159,96,0.12)] relative rounded-[100px] shrink-0" data-name="badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[6px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2e9f60] text-[9px] whitespace-nowrap">✓ Aktif</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(46,159,96,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Badge />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] whitespace-nowrap">Aktif - Hingga 31 Des 2026</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[208px]">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c8c8c] text-[11px] w-full">Status Keanggotaan</p>
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame16 />
      <div className="bg-[rgba(189,166,122,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 w-[129px]">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#8c8c8c] text-[11px] w-full">Nama Penerima Layanan</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#1f1912] text-[14px] w-full">Joko Susilo Budiman</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame21 />
      <div className="bg-[rgba(189,166,122,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 w-[96px]">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#8c8c8c] text-[11px] w-full">Nomor WhatsApp</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#1f1912] text-[14px] w-full">+62 877 621 212</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[288px]">
      <Frame23 />
      <div className="bg-[rgba(189,166,122,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 w-[96px]">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#8c8c8c] text-[11px] w-full">Prosesi Kepulangan</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#1f1912] text-[14px] w-full">Muslim</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[288px]">
      <Frame25 />
      <div className="bg-[rgba(189,166,122,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 w-[119px]">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#8c8c8c] text-[11px] w-full">Nomor Anggota</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#1f1912] text-[14px] w-full">PLG-2025-001847</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[288px]">
      <Frame17 />
      <Frame19 />
      <Frame22 />
      <Frame24 />
      <Frame26 />
    </div>
  );
}

function InfoCard() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Info Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <Frame20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.18)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_3px_12px_0px_rgba(46,33,20,0.07)]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#1f1912] text-[13px]">Riwayat Pembayaran Iuran</p>
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#bda67a] text-[11px]">Lihat semua →</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#1f1912] text-[13px] w-full">Pembayaran Tahunan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#8c8c8c] text-[11px] w-full">1 Jan 2026</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-black whitespace-nowrap">📋</p>
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full">
      <Frame8 />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold h-[18px] relative shrink-0 text-[#1f1912] text-[13px] text-right w-[100px]">Rp400.000</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[292px]">
      <Frame9 />
      <div className="bg-[rgba(189,166,122,0.09)] h-px shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#1f1912] text-[13px] w-full">Pembayaran Tahunan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#8c8c8c] text-[11px] w-full">1 Jan 2025</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-black whitespace-nowrap">📋</p>
      <Frame14 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full">
      <Frame13 />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold h-[18px] relative shrink-0 text-[#1f1912] text-[13px] text-right w-[100px]">Rp400.000</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[292px]">
      <Frame12 />
      <div className="bg-[rgba(189,166,122,0.09)] h-px shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#1f1912] text-[13px] w-full">Pembayaran Tahunan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#8c8c8c] text-[11px] w-full">1 Jan 2024</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-black whitespace-nowrap">📋</p>
      <Frame29 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full">
      <Frame28 />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold h-[18px] relative shrink-0 text-[#1f1912] text-[13px] text-right w-[100px]">Rp400.000</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[292px]">
      <Frame27 />
      <div className="bg-[rgba(189,166,122,0.09)] h-px shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#1f1912] text-[13px] w-full">Pembayaran Tahunan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#8c8c8c] text-[11px] w-full">1 Jan 2023</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-black whitespace-nowrap">📋</p>
      <Frame33 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full">
      <Frame32 />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold h-[18px] relative shrink-0 text-[#1f1912] text-[13px] text-right w-[100px]">Rp400.000</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[292px]">
      <Frame31 />
    </div>
  );
}

function PaymentHistory() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Payment History">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
          <Frame10 />
          <Frame11 />
          <Frame15 />
          <Frame30 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.18)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_3px_12px_0px_rgba(46,33,20,0.07)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[320px]">
      <Frame5 />
      <PaymentHistory />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[rgba(189,166,122,0.18)] overflow-clip relative rounded-[100px] shrink-0 size-[28px]" data-name="Icon">
      <div className="absolute bg-[rgba(189,166,122,0.9)] h-[14px] left-[8px] rounded-[3px] top-[7px] w-[12px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(189,166,122,0.9)] h-[3px] left-[8px] top-[18px] w-[12px]" data-name="Rectangle" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Icon />
      <p className="font-['Outfit:Medium',sans-serif] font-medium h-[14px] leading-[normal] min-w-full relative shrink-0 text-[#1f1912] text-[10px] text-center w-[min-content]">Unduh Kartu</p>
    </div>
  );
}

function ActUnduhKartu() {
  return (
    <div className="bg-[rgba(189,166,122,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Act/Unduh Kartu">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[4px] py-[12px] relative w-full">
          <Frame36 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.25)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[rgba(189,166,122,0.18)] overflow-clip relative rounded-[100px] shrink-0 size-[28px]" data-name="Icon">
      <div className="absolute bg-[rgba(189,166,122,0.9)] h-[12px] left-[7px] rounded-[3px] top-[8px] w-[14px]" data-name="Rectangle" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Icon1 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium h-[14px] leading-[normal] min-w-full relative shrink-0 text-[#1f1912] text-[10px] text-center w-[min-content]">Kontak Asisten</p>
    </div>
  );
}

function ActKontakAsisten() {
  return (
    <div className="bg-[rgba(189,166,122,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Act/Kontak Asisten">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[4px] py-[12px] relative w-full">
          <Frame35 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.25)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <ActUnduhKartu />
      <ActKontakAsisten />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[20px] top-[93px] w-[320px]">
      <DigitalMemberCard />
      <InfoCard />
      <Frame6 />
      <div className="bg-[#1f1912] content-stretch flex gap-[8px] h-[49px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[100px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0 w-[320px]" data-name="Button / Primary CTA">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">Perpanjang keanggotaan</p>
      </div>
      <Frame34 />
    </div>
  );
}

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

export default function MemberPage() {
  return (
    <div className="bg-gradient-to-b from-[#fffdf9] relative size-full to-[#f5f0e8]" data-name="Member Page">
      <Frame />
      <NavbarMobileHeader />
    </div>
  );
}