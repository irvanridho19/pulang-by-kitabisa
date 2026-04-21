import svgPaths from "./svg-rdc3xqj44c";

function Paragraph() {
  return (
    <div className="flex-[1_0_0] h-[11.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#967240] text-[9px] tracking-[1.2px] whitespace-nowrap">MENU</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-0 overflow-clip pt-[3px] px-[10px] rounded-[100px] top-0 w-[50.68px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container2() {
  return <div className="absolute border border-[rgba(189,166,122,0.4)] border-solid h-[17.5px] left-0 rounded-[100px] top-0 w-[50.68px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="bg-[rgba(189,166,122,0.15)] h-[17.5px] relative rounded-[100px] shrink-0 w-[50.68px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return <div className="bg-[rgba(189,166,122,0.2)] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />;
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container />
      <Container3 />
    </div>
  );
}

function Text() {
  return <div className="bg-[rgba(189,166,122,0.4)] rounded-[16777200px] shrink-0 size-[5px]" data-name="Text" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Text />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1f1912] text-[16px] whitespace-nowrap">Layanan</p>
    </div>
  );
}

function Text1() {
  return <div className="bg-[rgba(189,166,122,0.4)] rounded-[16777200px] shrink-0 size-[5px]" data-name="Text" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Text1 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1f1912] text-[16px] whitespace-nowrap">Cara akses layanan</p>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] py-[14px] relative w-full">
          <Frame1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-[rgba(189,166,122,0.15)] h-px shrink-0 w-full" data-name="Container" />;
}

function Container5() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[140.836px] pr-[140.844px] relative size-full">
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#1f1f1f] text-[14px] text-center whitespace-nowrap">Masuk</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[49px] items-start relative rounded-[16777200px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#af9160] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_4px_12px_0px_rgba(31,25,18,0.15)]" />
      <Container5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[126.32px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[21px] left-[63.5px] text-[14px] text-center text-white top-[-0.5px] whitespace-nowrap">Daftar jadi anggota</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[140.836px] pr-[140.844px] relative size-full">
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start relative rounded-[16777200px] shadow-[0px_4px_12px_0px_rgba(31,25,18,0.15)] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(90deg, rgb(31, 25, 18) 0%, rgb(34, 27, 19) 10%, rgb(36, 29, 20) 20%, rgb(39, 31, 22) 30%, rgb(41, 33, 23) 40%, rgb(44, 35, 24) 50%, rgb(47, 37, 25) 60%, rgb(50, 40, 26) 70%, rgb(52, 42, 28) 80%, rgb(55, 44, 29) 90%, rgb(58, 46, 30) 100%)" }}>
      <Container6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Button1 />
      <Button2 />
      <div className="relative rounded-[100px] shadow-[0px_5px_16px_0px_rgba(26,18,10,0.22)] shrink-0 w-full" data-name="Button / Primary CTA">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#750d33] text-[12px] whitespace-nowrap">Pesan layanan darurat 24 jam via WhatsApp</p>
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-right">
              <div className="absolute inset-[12.5%_0]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
                  <path d={svgPaths.p5ea7d70} fill="var(--fill-0, #750D33)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[328px]" data-name="Content">
      <Frame />
      <Button />
      <Container4 />
      <Frame3 />
    </div>
  );
}

export default function HamburgerMenu() {
  return (
    <div className="bg-[#faf8f4] content-stretch flex items-center px-[16px] py-[32px] relative size-full" data-name="Hamburger Menu">
      <Content />
    </div>
  );
}