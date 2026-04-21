function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#594635] text-[12px] whitespace-nowrap">Mulai dari Rp 20.000/bulan</p>
    </div>
  );
}

function ButtonCta() {
  return (
    <div className="bg-[#af9160] content-stretch flex h-[52px] items-center justify-center overflow-clip relative rounded-[100px] shadow-[0px_2px_8px_0px_rgba(20,13,5,0.35)] shrink-0 w-full" data-name="Button/CTA">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">Daftar jadi anggota</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame />
      <ButtonCta />
    </div>
  );
}

export default function Bottom() {
  return (
    <div className="bg-[#f9f7f3] content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-[12px] px-[16px] relative rounded-tl-[12px] rounded-tr-[12px] size-full" data-name="Bottom">
      <Frame1 />
    </div>
  );
}