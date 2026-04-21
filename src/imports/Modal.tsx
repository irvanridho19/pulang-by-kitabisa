import imgSecurityAccountsAccountProfilePrivacyProtectionShield from "@/assets/shield-icon.png";

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Title">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#111928] text-[18px] whitespace-nowrap">INFORMASI LAYANAN</p>
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modal Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Title />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph 2">
      <p className="flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] min-h-px min-w-px relative text-[#1f2a37] text-[18px] text-center">Maaf, saat ini layanan belum tersedia untukmu</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph 1">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[0px] text-[16px] text-center">
        <span className="font-['Outfit:Regular',sans-serif] leading-[1.5]">{`Saat ini, paket berlangganan `}</span>
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.5]">Pulang</span>
        <span className="font-['Outfit:Regular',sans-serif] leading-[1.5]">{` baru mencakup jangkauan operasional untuk wilayah `}</span>
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.5]">Jabodetabek</span>
        <span className="font-['Outfit:Regular',sans-serif] leading-[1.5]">{` serta memenuhi ketentuan asuransi jiwa untuk `}</span>
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.5]">rentang usia 25 hingga 65 tahun</span>
        <span className="font-['Outfit:Regular',sans-serif] leading-[1.5]">.</span>
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph 3">
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#6b7280] text-[16px] text-center">Terima kasih atas ketertarikanmu. Kami sedang berusaha memperluas jangkauan agar bisa segera hadir melindungi lebih banyak keluarga.</p>
    </div>
  );
}

function ProjectDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Project description">
      <div className="relative shrink-0 size-[190px]" data-name="security, accounts _ account, profile, privacy, protection, shield">
        <div className="absolute inset-[1%]" data-name="security, accounts _ account, profile, privacy, protection, shield">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSecurityAccountsAccountProfilePrivacyProtectionShield} />
          </div>
        </div>
      </div>
      <Paragraph1 />
      <Paragraph />
      <Paragraph2 />
    </div>
  );
}

function ModalBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modal body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <ProjectDescription />
        </div>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modal Footer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[24px] relative w-full">
          <div className="bg-[#1f1f1f] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
            <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">Kembali ke Beranda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] size-full" data-name="Modal">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <ModalHeader />
      <div className="h-px relative shrink-0 w-full" data-name="Separator">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 864 1">
          <path d="M0 0H864V1H0V0Z" fill="var(--fill-0, #E5E7EB)" id="Separator" />
        </svg>
      </div>
      <ModalBody />
      <div className="h-px relative shrink-0 w-full" data-name="Separator">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 864 1">
          <path d="M0 0H864V1H0V0Z" fill="var(--fill-0, #E5E7EB)" id="Separator" />
        </svg>
      </div>
      <ModalFooter />
    </div>
  );
}