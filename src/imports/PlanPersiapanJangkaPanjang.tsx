function PlanBadge() {
  return (
    <div className="bg-[rgba(175,145,96,0.25)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Plan Badge">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#af9160] text-[10px] tracking-[0.8px] whitespace-nowrap">LEBIH EFISIEN</p>
    </div>
  );
}

function TabBulanan() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[36px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[100px]" data-name="Tab / Bulanan">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.48)] whitespace-nowrap">Bulanan</p>
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

function TabTahunanAktif() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#d8be90] gap-[7px] h-[36px] items-center justify-center overflow-clip px-[16px] relative rounded-[100px] shadow-[0px_2px_8px_0px_rgba(20,13,5,0.35)] shrink-0 to-[#a88958]" data-name="Tab / Tahunan (Aktif)">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1912] text-[14px] whitespace-nowrap">Tahunan</p>
      <Chip />
    </div>
  );
}

function TabFrekuensiBayar() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[44px] relative rounded-[100px] shrink-0 w-[280px]" data-name="Tab / Frekuensi Bayar">
      <div className="content-stretch flex items-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <TabBulanan />
        <TabTahunanAktif />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function PriceRow() {
  return (
    <div className="content-stretch flex gap-[6px] items-center leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="Price Row">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[#e2d0a8] text-[32px]">Rp400.000</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[rgba(255,255,255,0.35)]">/ tahun</p>
    </div>
  );
}

function SavingsPill() {
  return (
    <div className="bg-[rgba(46,159,96,0.16)] relative rounded-[100px] shrink-0" data-name="Savings Pill">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#81e0a5] text-[11px] whitespace-nowrap">Hemat Rp20.000+ per tahun</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(46,159,96,0.35)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function SavingsRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Savings Row">
      <SavingsPill />
    </div>
  );
}

function PriceDisplayTahunan() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip pb-[4px] relative shrink-0 w-[280px]" data-name="Price Display / Tahunan">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.35)] tracking-[0.2px] whitespace-nowrap">Bayar tahunan</p>
      <PriceRow />
      <SavingsRow />
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
    <div className="bg-[#af9160] content-stretch flex h-[42px] items-center justify-center overflow-clip py-[12px] relative rounded-[100px] shrink-0 w-full" data-name="CTA">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold h-full leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Daftar jadi anggota</p>
    </div>
  );
}

function ItemPenulisanSuratWasiat() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Penulisan surat wasiat">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Menulis surat wasiat</p>
    </div>
  );
}

function ItemDigitalVaultDokumenPenting() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Digital Vault dokumen penting">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Menyimpan dokumen penting secara online</p>
    </div>
  );
}

function ItemPemesananKavlingMakam() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Pemesanan kavling makam">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Mencari dan memesan makam</p>
    </div>
  );
}

function GroupPersiapan() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Group / 📝  Persiapan">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#af9160] text-[12px] tracking-[0.3px] w-full whitespace-pre-wrap">{`📝  Di tahap persiapan, kamu diberikan layanan:`}</p>
      <ItemPenulisanSuratWasiat />
      <ItemDigitalVaultDokumenPenting />
      <ItemPemesananKavlingMakam />
    </div>
  );
}

function ItemPemulasaranJenazahMuslimNonMuslim() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Pemulasaran jenazah Muslim & non-Muslim">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Pemulasaran jenazah lengkap, muslim dan non-muslim</p>
    </div>
  );
}

function ItemAmbulansJenazahPremium() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Ambulans jenazah premium">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Peralatan untuk jenazah (keranda, kain, bunga, dll)</p>
    </div>
  );
}

function ItemTransportasiKeluargaHiAce14Seat() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Transportasi keluarga Hi Ace 14 seat">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Mobil jenazah premium</p>
    </div>
  );
}

function ItemTransportasiKeluargaHiAce14Seat1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Transportasi keluarga Hi Ace 14 seat">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Transportasi untuk keluarga</p>
    </div>
  );
}

function ItemTransportasiKeluargaHiAce14Seat2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Transportasi keluarga Hi Ace 14 seat">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Tim Pulang hadir langsung membantu segala kebutuhan keluarga</p>
    </div>
  );
}

function GroupHariKematian() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Group / 🕌  Hari Kematian">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#af9160] text-[12px] tracking-[0.3px] w-full whitespace-pre-wrap">{`🕌  Saat hari kematian, layanan yang didapatkan:`}</p>
      <ItemPemulasaranJenazahMuslimNonMuslim />
      <ItemAmbulansJenazahPremium />
      <ItemTransportasiKeluargaHiAce14Seat />
      <ItemTransportasiKeluargaHiAce14Seat1 />
      <ItemTransportasiKeluargaHiAce14Seat2 />
    </div>
  );
}

function ItemPendampinganPengurusanDokumen() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Item / Pendampingan pengurusan dokumen">
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Tim Pulang akan mengirim satu asisten khusus bagi keluarga untuk mengurus administrasi:</p>
    </div>
  );
}

function ItemPendampinganPengurusanDokumen1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Pendampingan pengurusan dokumen">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Akta kematian</p>
    </div>
  );
}

function ItemKonsultasiWarisAset() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Konsultasi waris & aset">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Penutupan BPJS</p>
    </div>
  );
}

function ItemKonsultasiWarisAset1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Konsultasi waris & aset">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Penutupan rekening bank</p>
    </div>
  );
}

function ItemKonsultasiWarisAset2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Item / Konsultasi waris & aset">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #AF9160)" fillOpacity="0.6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[13px] text-[rgba(255,255,255,0.8)]">Segala kebutuhan administrasi lainnya</p>
    </div>
  );
}

function GroupPascaPemakaman() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Group / 📋  Pasca Pemakaman">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#af9160] text-[12px] tracking-[0.3px] w-full whitespace-pre-wrap">
        <span className="leading-[normal]">{`📋  `}</span>
        <span className="leading-[normal]">{`Pasca pemakaman, layanan yang diberikan: `}</span>
      </p>
      <ItemPendampinganPengurusanDokumen />
      <ItemPendampinganPengurusanDokumen1 />
      <ItemKonsultasiWarisAset />
      <ItemKonsultasiWarisAset1 />
      <ItemKonsultasiWarisAset2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#da336b] content-stretch flex items-center justify-center px-[8px] relative rounded-[10px] shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-white whitespace-nowrap">Free - Konsultasi Psikolog</p>
    </div>
  );
}

function Note() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <Frame />
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] w-[min-content]">Keluarga bisa berkonsultasi dengan psikolog profesional di masa duka</p>
        </div>
      </div>
    </div>
  );
}

function ItemPendampinganPengurusanDokumen2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Item / Pendampingan pengurusan dokumen">
      <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[11px] text-[rgba(255,255,255,0.8)]">*Masa tunggu 3 bulan sejak pendaftaran</p>
    </div>
  );
}

export default function PlanPersiapanJangkaPanjang() {
  return (
    <div className="bg-[#1f1914] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[20px] py-[22px] relative rounded-[20px] size-full" data-name="Plan / Persiapan Jangka Panjang">
      <PlanBadge />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[17px] text-white w-[min-content]">Layanan Keanggotaan</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[13px] text-[rgba(255,255,255,0.7)] w-[min-content]">Cocok untuk yang ingin mempersiapkan kepulangan sejak jauh hari.</p>
      <TabFrekuensiBayar />
      <PriceDisplayTahunan />
      <NotePreview />
      <Cta />
      <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
      <GroupPersiapan />
      <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
      <GroupHariKematian />
      <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
      <GroupPascaPemakaman />
      <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="Rectangle" />
      <Note />
      <ItemPendampinganPengurusanDokumen2 />
    </div>
  );
}