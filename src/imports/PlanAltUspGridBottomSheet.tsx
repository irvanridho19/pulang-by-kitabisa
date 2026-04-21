function Badge() {
  return (
    <div className="bg-[rgba(175,145,96,0.25)] relative rounded-[100px] shrink-0" data-name="Badge">
      <div className="content-stretch flex items-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#af9160] text-[10px] tracking-[0.8px] whitespace-nowrap">LEBIH EFISIEN</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Bulanan() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[#d8be90] min-h-px min-w-px relative rounded-[100px] shadow-[0px_2px_8px_0px_rgba(20,13,5,0.35)] to-[#a88958]" data-name="Bulanan">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative w-full">
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] whitespace-nowrap">Bulanan</p>
        </div>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#6cca51] content-stretch flex items-center overflow-clip px-[6px] py-[3px] relative rounded-[100px] shrink-0" data-name="Chip">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[9px] text-white whitespace-nowrap">Lebih Hemat</p>
    </div>
  );
}

function Tahunan() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tahunan">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[14px] py-[8px] relative w-full">
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Tahunan</p>
          <Chip />
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 w-[280px]" data-name="Tab">
      <Bulanan />
      <Tahunan />
    </div>
  );
}

function PRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline overflow-clip relative shrink-0" data-name="PRow">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[#e2d0a8] text-[34px]">Rp35.000</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[rgba(255,255,255,0.38)]">/ bulan</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] overflow-clip pb-[4px] relative shrink-0 w-[280px] whitespace-nowrap" data-name="Price">
      <PRow />
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[11px] text-white">Rp420.000 dalam setahun</p>
    </div>
  );
}

function NotePreview() {
  return (
    <div className="bg-[rgba(100,180,160,0.2)] h-[31px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Note Preview">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Outfit:Regular',sans-serif] font-normal h-[15px] leading-[0] relative shrink-0 text-[#c8ebe1] text-[10px] w-[256px]">
          <span className="leading-[normal]">{`✅ Uang santunan duka `}</span>
          <span className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] text-white">Rp 5.000.000</span>
          <span className="leading-[normal]">{` untuk keluarga`}</span>
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(100,180,160,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#af9160] content-stretch flex items-center justify-center overflow-clip py-[13px] relative rounded-[100px] shrink-0 w-[280px]" data-name="CTA">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Daftar jadi anggota</p>
    </div>
  );
}

function Ib() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="IB">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-white whitespace-pre">{`📝  Sebelum kematian`}</p>
    </div>
  );
}

function Usp() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="USP/📁">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Ib />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[17px] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.85)] w-[min-content]">Bantuan mencari dan memesan makam, penyimpanan dokumen penting, dll.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UspR() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[280px]" data-name="USP R1">
      <Usp />
    </div>
  );
}

function Ib1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="IB">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-white whitespace-pre">{`🕌  Di hari kematian`}</p>
    </div>
  );
}

function Usp1() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="USP/🚗">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Ib1 />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[17px] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.85)] w-[min-content]">{`Pemulasaran jenazah untuk muslim & non-muslim, penyediaan ambulans, dll.`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UspR1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[280px]" data-name="USP R2">
      <Usp1 />
    </div>
  );
}

function Ib2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="IB">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-white whitespace-pre">{`📋  Pasca pemakaman`}</p>
    </div>
  );
}

function Usp2() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="USP/🚗">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Ib2 />
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[17px] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.85)] w-[min-content]">Tim Pulang akan mengirim satu asisten khusus untuk bantu keluarga mengurus administrasi.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UspR2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[280px]" data-name="USP R2">
      <Usp2 />
    </div>
  );
}

function SmL() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 text-[#d8be90] text-[12px]" data-name="smL">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">✨</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 w-[198px]">Lihat semua manfaat untuk anggota</p>
    </div>
  );
}

function SeeMore() {
  return (
    <div className="bg-[rgba(175,145,96,0.12)] relative rounded-[100px] shrink-0 w-[280px]" data-name="See More">
      <div className="content-stretch flex items-center justify-between leading-[normal] overflow-clip px-[14px] py-[11px] relative rounded-[inherit] w-full">
        <SmL />
        <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[18px] text-[rgba(216,190,144,0.6)] whitespace-nowrap">›</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.3)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function PBadge() {
  return (
    <div className="bg-[#da336b] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[24px] shrink-0" data-name="PBadge">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">Konsultasi Psikolog - Gratis 3 Sesi</p>
    </div>
  );
}

function Psikolog() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[280px]" data-name="Psikolog">
      <PBadge />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] w-[256px]">Keluarga bisa berkonsultasi dengan psikolog profesional di masa duka</p>
    </div>
  );
}

export default function PlanAltUspGridBottomSheet() {
  return (
    <div className="bg-[#1f1914] content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[28px] pt-[22px] px-[20px] relative rounded-[20px] size-full" data-name="Plan Alt — USP Grid + Bottom Sheet">
      <Badge />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[17px] text-white w-[280px]">Layanan Keanggotaan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.7)] w-[280px]">Cocok untuk yang ingin mempersiapkan kepulangan sejak jauh hari.</p>
      <Tab />
      <Price />
      <NotePreview />
      <Cta />
      <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-[280px]" data-name="Rectangle" />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#af9160] text-[12px] tracking-[0.3px] whitespace-nowrap">Layanan yang kamu dapatkan</p>
      <UspR />
      <UspR1 />
      <UspR2 />
      <SeeMore />
      <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-[280px]" data-name="Rectangle" />
      <Psikolog />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.8)] w-[280px]">*Semua layanan bisa diakses setelah melewati masa tunggu 3 bulan</p>
    </div>
  );
}