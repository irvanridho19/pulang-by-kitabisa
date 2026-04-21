import imgXendit from "@/assets/xendit.png";

/** Shared Xendit payment info card – used in /purchase/konfirmasi & /perpanjang */
export function XenditBanner() {
  return (
    <div className="bg-[#f0f3ff] rounded-[14px] w-full">
      <div className="flex items-center gap-[14px] px-[20px] py-[18px] w-full">
        <div className="shrink-0 w-[80px]">
          <img src={imgXendit} alt="Xendit" className="w-full object-contain" />
        </div>
        <div className="flex flex-col gap-[4px] flex-1 min-w-0">
          <p className="font-['Outfit',sans-serif] font-bold leading-[1.4] text-[#2B4EFF] text-[14px]">
            Pembayaran via Xendit
          </p>
          <p className="font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#6b7280] text-[13px]">
            Kamu akan diarahkan ke halaman pembayaran Xendit yang terenkripsi dan aman.
          </p>
        </div>
      </div>
    </div>
  );
}
