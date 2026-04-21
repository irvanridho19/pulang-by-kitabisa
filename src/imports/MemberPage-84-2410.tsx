import svgPaths from "./svg-yq6428rm3y";
import imgImageLogo from "@/assets/logo.png";

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

function IllustrationNoMember() {
  return (
    <div className="relative shrink-0 size-[180px]" data-name="Illustration / No Member">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 180">
        <g id="Illustration / No Member">
          <rect fill="var(--fill-0, #AF9160)" fillOpacity="0.1" height="180" rx="90" width="180" />
          <rect height="178.5" rx="89.25" stroke="var(--stroke-0, #AF9160)" strokeOpacity="0.2" strokeWidth="1.5" width="178.5" x="0.75" y="0.75" />
          <circle cx="90" cy="90" fill="var(--fill-0, #AF9160)" fillOpacity="0.08" id="Ellipse" r="60" />
          <circle cx="90" cy="98" fill="var(--fill-0, #1F1912)" fillOpacity="0.12" id="Ellipse_2" r="28" />
          <circle cx="90" cy="98" fill="var(--fill-0, #D8BE90)" fillOpacity="0.35" id="Ellipse_3" r="22" />
          <circle cx="90" cy="98" fill="var(--fill-0, #AF9160)" fillOpacity="0.9" id="Ellipse_4" r="14" />
          <circle cx="88" cy="36" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Ellipse_5" r="6" />
          <circle cx="124.5" cy="58.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Ellipse_6" r="4.5" />
          <circle cx="129.5" cy="103.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Ellipse_7" r="3.5" />
          <circle cx="39.5" cy="103.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Ellipse_8" r="3.5" />
          <circle cx="46.5" cy="58.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.5" id="Ellipse_9" r="4.5" />
          <circle cx="52" cy="44" fill="var(--fill-0, #D8BE90)" fillOpacity="0.6" id="Ellipse_10" r="2" />
          <circle cx="124" cy="44" fill="var(--fill-0, #D8BE90)" fillOpacity="0.6" id="Ellipse_11" r="2" />
          <circle cx="141.5" cy="81.5" fill="var(--fill-0, #D8BE90)" fillOpacity="0.6" id="Ellipse_12" r="1.5" />
          <circle cx="21.5" cy="81.5" fill="var(--fill-0, #D8BE90)" fillOpacity="0.6" id="Ellipse_13" r="1.5" />
          <circle cx="90.5" cy="20.5" fill="var(--fill-0, #D8BE90)" fillOpacity="0.6" id="Ellipse_14" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function HeroEmptyState() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[40px] pt-[52px] px-[32px] relative shrink-0 w-[360px]" data-name="Hero / Empty State">
      <IllustrationNoMember />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1f1912] text-[22px] text-center w-[296px]">Kamu belum jadi anggota Pulang</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(92,79,58,0.75)] text-center w-[296px]">Bergabung sebagai anggota Pulang dan pastikan kepulangan yang tenang — untuk dirimu dan yang kamu sayangi.</p>
    </div>
  );
}

function BenefitSantunanDukaRp5000000UntukKeluarga() {
  return (
    <div className="bg-[rgba(175,145,96,0.08)] relative rounded-[12px] shrink-0 w-[296px]" data-name="Benefit / Santunan duka Rp 5.000.000 untuk keluarga">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] w-full">
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] whitespace-nowrap">💰</p>
        <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[13px] text-[rgba(58,46,30,0.85)]">Santunan duka Rp 5.000.000 untuk keluarga</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BenefitPemulasaranJenazahSecaraLengkap() {
  return (
    <div className="bg-[rgba(175,145,96,0.08)] relative rounded-[12px] shrink-0 w-[296px]" data-name="Benefit / Pemulasaran jenazah secara lengkap">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] w-full">
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] whitespace-nowrap">🕌</p>
        <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[13px] text-[rgba(58,46,30,0.85)]">Pemulasaran jenazah secara lengkap</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BenefitAsistenPengurusanAdministrasiPascaDuka() {
  return (
    <div className="bg-[rgba(175,145,96,0.08)] relative rounded-[12px] shrink-0 w-[296px]" data-name="Benefit / Asisten pengurusan administrasi pasca duka">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] w-full">
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] whitespace-nowrap">📋</p>
        <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[13px] text-[rgba(58,46,30,0.85)]">Asisten pengurusan administrasi pasca duka</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BenefitPendampinganPenulisanSuratWasiat() {
  return (
    <div className="bg-[rgba(175,145,96,0.08)] relative rounded-[12px] shrink-0 w-[296px]" data-name="Benefit / Pendampingan penulisan surat wasiat">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] w-full">
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] whitespace-nowrap">📝</p>
        <p className="flex-[1_0_0] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[13px] text-[rgba(58,46,30,0.85)]">Pendampingan penulisan surat wasiat</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Benefits() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip px-[32px] py-[28px] relative shrink-0 w-[360px]" data-name="Benefits">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#967240] text-[12px] text-center tracking-[0.5px] whitespace-nowrap">Apa yang kamu dapat?</p>
      <BenefitSantunanDukaRp5000000UntukKeluarga />
      <BenefitPemulasaranJenazahSecaraLengkap />
      <BenefitAsistenPengurusanAdministrasiPascaDuka />
      <BenefitPendampinganPenulisanSuratWasiat />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pt-[8px] px-[32px] relative shrink-0 w-[360px]" data-name="CTA Section">
      <div className="bg-[#1f1912] content-stretch flex gap-[8px] h-[49px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[100px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0 w-[320px]" data-name="Button / Primary CTA">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">Daftar jadi anggota</p>
      </div>
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[12px] text-[rgba(112,112,112,0.6)] text-center w-[320px]">Mulai dari Rp 35.000/bulan</p>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip top-[69px] w-[360px]" data-name="Content">
      <HeroEmptyState />
      <div className="bg-[rgba(189,166,122,0.2)] h-px shrink-0 w-[296px]" data-name="Rectangle" />
      <Benefits />
      <CtaSection />
    </div>
  );
}

export default function MemberPage() {
  return (
    <div className="bg-gradient-to-b from-[#fffdf9] relative size-full to-[#f5f0e8]" data-name="Member Page">
      <NavbarMobileHeader />
      <Content />
    </div>
  );
}