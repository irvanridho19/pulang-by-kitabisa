import svgPaths from "./svg-goo2oksqsl";

function Badge() {
  return (
    <div className="bg-[rgba(189,166,122,0.15)] relative rounded-[100px] shrink-0" data-name="Badge">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#967240] text-[9px] tracking-[1.2px] whitespace-nowrap">MENU</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[328px]" data-name="Header">
      <Badge />
      <div className="bg-[rgba(189,166,122,0.2)] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Rectangle" />
    </div>
  );
}

function NavSolusi() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-[296px]" data-name="Nav/Solusi">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #BDA67A)" fillOpacity="0.4" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1f1912] text-[16px] whitespace-nowrap">Layanan</p>
    </div>
  );
}

function NavCaraKlaim() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-[296px]" data-name="Nav/Cara Klaim">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #BDA67A)" fillOpacity="0.4" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1f1912] text-[16px] whitespace-nowrap">Cara akses layanan</p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-[328px]" data-name="Nav Links">
      <NavSolusi />
      <NavCaraKlaim />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[208px]" data-name="Name">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#e2d0a8] text-[14px] w-[208px]">Joko Susilo Budiman</p>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="bg-[#1f1912] content-stretch flex items-center overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Profile Card">
      <Name />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 w-[34px]" data-name="Icon">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f1912] text-[16px] whitespace-nowrap">📋</p>
    </div>
  );
}

function TcStatusPemesanan() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="TC/Status Pemesanan">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] w-[244px]">Keanggotaan</p>
    </div>
  );
}

function QStatusPemesanan() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[4px] py-[12px] relative shrink-0 w-[328px]" data-name="Q/Status Pemesanan">
      <Icon />
      <TcStatusPemesanan />
      <div className="relative shrink-0 size-[16px]" data-name="ic_chevron_right">
        <div className="absolute bottom-[8.33%] left-1/4 right-[27.81%] top-[8.33%]" data-name="Rectangle 267 (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.55116 13.3333">
            <path clipRule="evenodd" d={svgPaths.p31f21500} fill="var(--fill-0, #BDA67A)" fillRule="evenodd" id="Rectangle 267 (Stroke)" />
          </svg>
        </div>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="27" />
        </svg>
      </div>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[328px]" data-name="Quick Actions">
      <QStatusPemesanan />
      <div className="bg-[rgba(189,166,122,0.08)] h-px shrink-0 w-[328px]" data-name="Rectangle" />
      <div className="bg-[rgba(189,166,122,0.08)] h-px shrink-0 w-[328px]" data-name="Rectangle" />
    </div>
  );
}

function Emergency() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[100px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0" data-name="Emergency">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#750d33] text-[12px] whitespace-nowrap">Pesan layanan darurat 24 jam via WhatsApp</p>
      <div className="relative shrink-0 size-[14px]" data-name="ic_arrow_next_light">
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none rotate-180 size-[24px]">
            <div className="relative size-full" data-name="28">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="28" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[12.5%] items-center justify-center">
          <div className="flex-none rotate-180 size-[18px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                <path d={svgPaths.p36c6cc00} fill="var(--fill-0, #750D33)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[328px]" data-name="Bottom">
      <Emergency />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#967240] text-[14px] whitespace-nowrap">Keluar</p>
    </div>
  );
}

export default function HamburgerMenuLoggedIn() {
  return (
    <div className="bg-[#faf8f4] content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[32px] relative size-full" data-name="Hamburger Menu — Logged In">
      <Header />
      <NavLinks />
      <div className="bg-[rgba(189,166,122,0.15)] h-px shrink-0 w-[328px]" data-name="Rectangle" />
      <ProfileCard />
      <QuickActions />
      <Bottom />
    </div>
  );
}