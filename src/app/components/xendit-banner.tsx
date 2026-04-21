import imgFlip from "@/assets/flip-logo.png";

/** Shared Flip payment info card – used in /purchase/konfirmasi & /perpanjang */
export function XenditBanner() {
  return (
    <div className="bg-[#FFEDE4] rounded-[14px] w-full">
      <div className="flex items-center gap-[14px] px-[20px] py-[18px] w-full">
        <div className="shrink-0 w-[44px] h-[44px]">
          <img src={imgFlip} alt="Flip" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-[4px] flex-1 min-w-0">
          <p className="font-['Outfit',sans-serif] font-bold leading-[1.4] text-[#FF6B2C] text-[14px]">
            Pembayaran via Flip
          </p>
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.5] text-[#6b7280] text-[13px]">
            Kamu akan diarahkan ke halaman pembayaran Flip yang terenkripsi dan aman
          </p>
        </div>
      </div>
    </div>
  );
}
