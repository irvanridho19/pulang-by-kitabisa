function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full">Layanan Keanggotaan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.7)] w-full">Cocok untuk yang ingin mempersiapkan kepulangan sejak jauh hari.</p>
    </div>
  );
}

function BillingInfoRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Billing Info Row">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d8be90] text-[11px] whitespace-nowrap">Iuran tahunan</p>
    </div>
  );
}

function PriceRow() {
  return (
    <div className="content-stretch flex gap-[4px] items-end leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="Price Row">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[#e2d0a8] text-[32px]">Rp200.000</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(255,255,255,0.35)]">/ tahun</p>
    </div>
  );
}

function PriceDisplayTahunan() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Price Display / Tahunan">
      <BillingInfoRow />
      <PriceRow />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#af9160] content-stretch flex h-[42px] items-center justify-center overflow-clip py-[12px] relative rounded-[100px] shrink-0 w-full" data-name="CTA">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold h-full leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Daftar jadi anggota</p>
    </div>
  );
}

function Tab() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9px]" data-name="Tab">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #94C7B5)" id="Ellipse" r="3" />
            </svg>
          </div>
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(213,201,170,0.8)] whitespace-nowrap">Muslim</p>
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-[#d5c9aa] flex-[1_0_0] min-h-px min-w-px relative rounded-[9px]" data-name="Tab">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="3" />
            </svg>
          </div>
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#17120d] text-[12px] whitespace-nowrap">Non-Muslim</p>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Tabs">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
          <Tab />
          <Tab1 />
        </div>
      </div>
    </div>
  );
}

function DotHolder() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Pemandian jenazah</p>
    </div>
  );
}

function DotHolder1() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder1 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Tata rias jenazah</p>
    </div>
  );
}

function DotHolder2() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder2 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Pemberian formalin</p>
    </div>
  );
}

function DotHolder3() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder3 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Peti jenazah</p>
    </div>
  );
}

function DotHolder4() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder4 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">{`Kain penutup peti, sarung tangan & kaos kaki`}</p>
    </div>
  );
}

function DotHolder5() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder5 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">{`Lembar duka, wewangian & lilin duka`}</p>
    </div>
  );
}

function DotHolder6() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder6 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Bunga salib atau bunga meja</p>
    </div>
  );
}

function DotHolder7() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder7 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Asisten dari Tim Pulang yang siap sedia membantu segala kebutuhan keluarga</p>
    </div>
  );
}

function DotHolder8() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder8 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Ambulans jenazah</p>
    </div>
  );
}

function DotHolder9() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet9() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder9 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Penggantian biaya jasa penggalian makam</p>
    </div>
  );
}

function DotHolder10() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet10() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder10 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Karangan bunga</p>
    </div>
  );
}

function DotHolder11() {
  return (
    <div className="h-[11px] relative shrink-0 w-[4px]" data-name="dotHolder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
        <g id="dotHolder">
          <circle cx="2" cy="9" fill="var(--fill-0, #9EB5DB)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Bullet11() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Bullet">
      <DotHolder11 />
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Snack box 50 pak</p>
    </div>
  );
}

function ListNonMuslim() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List NonMuslim">
      <Bullet />
      <Bullet1 />
      <Bullet2 />
      <Bullet3 />
      <Bullet4 />
      <Bullet5 />
      <Bullet6 />
      <Bullet7 />
      <Bullet8 />
      <Bullet9 />
      <Bullet10 />
      <Bullet11 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-full" data-name="Footer">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#fecce6] text-[11px] w-[248px]">*Tidak termasuk rumah duka, pencarian lahan makam, dekorasi rumah duka, kremasi dan larung.</p>
    </div>
  );
}

function CardTabsTradisi() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] content-stretch flex flex-col gap-[14px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[280px]" data-name="Card / Tabs Tradisi">
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#d5c9aa] text-[14px] whitespace-nowrap">Hari Kematian</p>
      <Tabs />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#9eb5db] text-[10px] whitespace-nowrap">KHUSUS NON-MUSLIM</p>
      <ListNonMuslim />
      <Footer />
    </div>
  );
}

function NotePreview() {
  return (
    <div className="bg-[rgba(100,180,160,0.2)] relative rounded-[8px] shrink-0 w-full" data-name="Note Preview">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#c8ebe1] text-[0px]">
            <span className="leading-[18px] text-[12px]">{`Uang kedukaan `}</span>
            <span className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[18px] text-[12px] text-white">Rp 1.000.000</span>
            <span className="leading-[18px] text-[12px]">{` untuk keluarga`}</span>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(100,180,160,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Asisten khusus untuk administrasi keluarga</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Akta kematian dari Disdukcapil</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Surat keterangan kepolisian</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Penghentian BPJS</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Buku Yasin 50 pcs (khusus Muslim)</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[12px] text-white">Layanan konseling psikolog</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d5c9aa] text-[14px] whitespace-nowrap">Pasca Kematian</p>
      <NotePreview />
      <Frame8 />
    </div>
  );
}

function CardPersiapan() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[16px] shrink-0 w-full" data-name="Card / Persiapan">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(175,145,96,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

export default function PlanPersiapanJangkaPanjang() {
  return (
    <div className="bg-[#1f1914] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[20px] py-[22px] relative rounded-[20px] size-full" data-name="Plan / Persiapan Jangka Panjang">
      <Frame />
      <PriceDisplayTahunan />
      <Cta />
      <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f9f7f3] text-[16px] whitespace-nowrap">Layanan yang kamu dapatkan</p>
      <CardTabsTradisi />
      <CardPersiapan />
      <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[11px] text-[rgba(255,255,255,0.8)] w-[min-content]">*Semua layanan bisa diakses setelah melewati masa tunggu 6 bulan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[11px] text-[rgba(255,255,255,0.8)] w-[min-content]">**Maksimal usia pendaftaran 65 tahun</p>
    </div>
  );
}