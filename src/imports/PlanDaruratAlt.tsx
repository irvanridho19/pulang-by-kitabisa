function PBadge() {
  return (
    <div className="bg-[rgba(89,70,53,0.12)] content-stretch flex items-center overflow-clip px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="PBadge">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#594635] text-[10px] tracking-[0.8px] whitespace-nowrap">TIBA DALAM 1 JAM</p>
    </div>
  );
}

function PRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline overflow-clip relative shrink-0" data-name="PRow">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[#594635] text-[34px]">Rp9.000.000</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#9e9e9e] text-[12px]">/ layanan</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 w-[280px] whitespace-nowrap" data-name="Price">
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[11px] text-[rgba(89,70,53,0.5)] tracking-[0.2px]">Mulai dari</p>
      <PRow />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-center justify-center overflow-clip py-[12px] relative rounded-[100px] shrink-0 w-[280px]" data-name="CTA">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Pesan layanan darurat</p>
    </div>
  );
}

function Note() {
  return (
    <div className="bg-[rgba(89,70,53,0.06)] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Note">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-[rgba(89,70,53,0.75)] whitespace-pre">{`⚡  Respon cepat · Siap 24/7`}</p>
    </div>
  );
}

function Ib() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="IB">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f1f1f] text-[15px] whitespace-pre">{`🕌  Layanan Darurat mencakup layanan:`}</p>
    </div>
  );
}

function Usp() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="USP/🚗">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative size-full">
          <div className="font-['Outfit:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-[rgba(31,31,31,0.85)] w-[111px]">
            <p className="leading-[1.25] mb-0">Ambulans</p>
            <p className="leading-[1.25]">premium</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(89,70,53,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Usp1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[135px]" data-name="USP/🕌">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[12px] text-[rgba(31,31,31,0.85)] w-[111px]">{`Pemulasaran jenazah (muslim & non-muslim)`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(89,70,53,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UspR() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="USP R1">
      <Usp />
      <Usp1 />
    </div>
  );
}

function Usp2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[135px]" data-name="USP/🚌">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <div className="font-['Outfit:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-[rgba(31,31,31,0.85)] w-[111px]">
          <p className="leading-[1.25] mb-0">Transportasi</p>
          <p className="leading-[1.25]">keluarga</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(89,70,53,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Usp3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[135px]" data-name="USP/🌸">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <div className="font-['Outfit:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-[rgba(31,31,31,0.85)] w-[111px]">
          <p className="leading-[1.25] mb-0">Perlengkapan</p>
          <p className="leading-[1.25]">jenazah lengkap</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(89,70,53,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UspR1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-[280px]" data-name="USP R2">
      <Usp2 />
      <Usp3 />
    </div>
  );
}

export default function PlanDaruratAlt() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[20px] size-full" data-name="Plan / Darurat Alt">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[28px] pt-[22px] px-[20px] relative rounded-[inherit] size-full">
        <PBadge />
        <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[17px] w-[280px]">Layanan Darurat</p>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6b6b6b] text-[13px] w-[280px]">Cocok untuk yang belum jadi anggota, tapi butuh bantuan saat ada keluarga meninggal.</p>
        <Price />
        <Cta />
        <Note />
        <div className="bg-[rgba(31,31,31,0.1)] h-px shrink-0 w-[280px]" data-name="Rectangle" />
        <Ib />
        <UspR />
        <UspR1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}