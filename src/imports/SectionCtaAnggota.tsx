import svgPaths from "./svg-tqzknilpiw";

function CtaPrimary() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#d8be90] items-center justify-center overflow-clip py-[14px] relative rounded-[100px] shadow-[0px_6px_20px_0px_rgba(168,137,88,0.4)] shrink-0 to-[#a88958] w-[312px]" data-name="CTA / Primary">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1912] text-[15px] text-center whitespace-nowrap">Daftar jadi anggota</p>
    </div>
  );
}

function CtaInner() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip px-[24px] py-[36px] relative shrink-0 w-[360px]" data-name="CTA Inner">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[31px] relative shrink-0 text-[#e2d0a8] text-[22px] text-center w-[312px]">Siapkan sekarang, ringankan beban di hari mendatang</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] text-center w-[296px]">Dengan menyiapkan kepulangan, kamu membantu keluarga agar lebih tenang melalui momen duka.</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.6] min-w-full relative shrink-0 text-[#f1eee3] text-[13.5px] text-center w-[min-content]">Mulai dari Rp 35.000/bulan</p>
      <CtaPrimary />
      <div className="relative rounded-[100px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0 w-full" data-name="Button / Primary CTA">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#fee5f2] text-[12px] whitespace-nowrap">Pesan layanan darurat 24 jam via WhatsApp</p>
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-right">
              <div className="absolute inset-[12.5%_0]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
                  <path d={svgPaths.p5ea7d70} fill="var(--fill-0, #FEE5F2)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectionCtaAnggota() {
  return (
    <div className="bg-[#1f1912] content-stretch flex flex-col items-start relative size-full" data-name="Section / CTA Anggota">
      <div className="bg-[rgba(255,255,255,0.08)] h-px shrink-0 w-[360px]" data-name="Top Line" />
      <CtaInner />
    </div>
  );
}