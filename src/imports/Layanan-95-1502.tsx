import svgPaths from "./svg-tuvnaa4akf";
import imgWhite1 from "@/assets/footer-logo.png";
import imgAccentBar from "@/assets/accent-bar.png";
import imgDark1 from "@/assets/logo.png";

function Badge() {
  return (
    <div className="bg-[rgba(189,166,122,0.15)] relative rounded-[100px] shrink-0" data-name="Badge">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#967240] text-[10px] tracking-[1.2px] whitespace-nowrap">LAYANAN ANGGOTA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(189,166,122,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function LayananHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Layanan / Heading">
      <Badge />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[#1f1912] text-[22px] w-[min-content]">Manfaat yang kamu dapatkan sebagai anggota</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#6b6b6b] text-[13px] w-[min-content]">
        <span className="leading-[1.55]">{`Dari sebelum hingga selepas pemakaman, `}</span>
        <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.55]">Pulang</span>
        <span className="leading-[1.55]">{` hadir langsung membantumu dan keluarga.`}</span>
      </p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(151,114,64,0.1)] content-stretch flex items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#876747] text-[14px] whitespace-nowrap">Sebelum Kematian</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #977240)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Penulisan surat wasiat</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #977240)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Penyimpanan dokumen penting online</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #977240)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">{`Pencarian & pemesanan makam`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[288px]">
      <Tag />
      <Frame3 />
    </div>
  );
}

function CardPersiapan() {
  return (
    <div className="bg-[#fcfaf6] relative rounded-[16px] shrink-0 w-full" data-name="Card / Persiapan">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(151,114,64,0.2)] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(151,114,64,0.1)] content-stretch flex items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#876747] text-[14px] whitespace-nowrap">Hari Kematian</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #8C6432)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">{`Pemulasaran jenazah (muslim & non-muslim)`}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #8C6432)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Peralatan jenazah lengkap</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #8C6432)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Ambulans jenazah</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #8C6432)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Penggalian makam</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #8C6432)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Karangan bunga</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #8C6432)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Snack box 50 pak</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[288px]">
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[288px]">
      <Tag1 />
      <Frame11 />
    </div>
  );
}

function CardPersiapan1() {
  return (
    <div className="bg-[#fcfaf6] relative rounded-[16px] shrink-0 w-full" data-name="Card / Persiapan">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(151,114,64,0.2)] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(151,114,64,0.1)] content-stretch flex items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#876747] text-[14px] whitespace-nowrap">Pasca Kematian</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #7B5628)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Asisten khusus untuk administrasi keluarga</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #7B5628)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Akta kematian dari Disdukcapil</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #7B5628)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Surat keterangan kepolisian</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #7B5628)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Penghentian BPJS</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #7B5628)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Buku Yasin 50 pcs (khusus Muslim)</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #7B5628)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Uang kedukaan Rp1.000.000</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #7B5628)" fillOpacity="0.6" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(31,25,18,0.85)] w-[276px]">Layanan konseling psikolog</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[288px]">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[288px]">
      <Tag2 />
      <Frame20 />
    </div>
  );
}

function CardPersiapan2() {
  return (
    <div className="bg-[#fcfaf6] relative rounded-[16px] shrink-0 w-full" data-name="Card / Persiapan">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(151,114,64,0.2)] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[328px]">
      <div className="absolute bg-[#bda67a] h-[332px] left-[17px] top-[119px] w-[3px]" />
      <CardPersiapan />
      <CardPersiapan1 />
      <CardPersiapan2 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-gradient-to-b from-[#faf8f4] relative shrink-0 to-[#f5f0e8] w-full" data-name="Content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[20px] py-[36px] relative size-full">
          <LayananHeading />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

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
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#fee5f2] text-[12px] whitespace-nowrap">Pesan layanan darurat 24 jam via WhatsApp</p>
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-right">
              <div className="absolute inset-[12.5%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
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

function SectionCtaAnggota() {
  return (
    <div className="bg-[#1f1912] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[360px]" data-name="Section / CTA Anggota">
      <div className="bg-[rgba(255,255,255,0.08)] h-px shrink-0 w-[360px]" data-name="Top Line" />
      <CtaInner />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Top Row">
      <div className="h-[40px] relative shrink-0 w-[80px]" data-name="white 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhite1} />
      </div>
    </div>
  );
}

function BottomRow() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Bottom Row">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.25)] text-right whitespace-nowrap">© 2026 Pulang by Kitabisa.</p>
    </div>
  );
}

function FooterInner() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Inner">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[24px] pt-[28px] px-[24px] relative size-full">
          <TopRow />
          <div className="bg-[rgba(255,255,255,0.07)] h-px shrink-0 w-full" data-name="Inner Divider 2" />
          <BottomRow />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1a140f] content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Footer">
      <div className="bg-[rgba(255,255,255,0.08)] h-px shrink-0 w-[360px]" data-name="Divider" />
      <FooterInner />
      <div className="h-[3px] relative shrink-0 w-[360px]" data-name="Accent Bar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAccentBar} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[69px] w-[360px]" data-name="Container">
      <Content />
      <SectionCtaAnggota />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] top-0 w-[360px]" data-name="header">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="h-[45px] relative shrink-0 w-[90px]" data-name="dark 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDark1} />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="ic_hamburger">
        <div className="absolute inset-[18.75%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <g id="Vector">
              <path d={svgPaths.p21607980} fill="var(--fill-0, #3A3A3A)" />
              <path d={svgPaths.p2d36a500} fill="var(--fill-0, #3A3A3A)" />
              <path d={svgPaths.p3e646f0} fill="var(--fill-0, #3A3A3A)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Layanan() {
  return (
    <div className="bg-white relative size-full" data-name="Layanan">
      <Container />
      <Header />
    </div>
  );
}