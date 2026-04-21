import imgQris from "@/assets/qris.png";

function PaymentMethodLogo() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Payment Method Logo">
      <div className="h-[36px] relative shrink-0 w-[86px]" data-name="QRIS">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.18%] left-[-5.99%] max-w-none top-[-17.65%] w-[114.41%]" src={imgQris} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[16px] w-[200px]">Bayar menggunakan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">:</p>
      <PaymentMethodLogo />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#111928] text-[20px] w-full">Metode Pembayaran</p>
      <Frame />
    </div>
  );
}