import svgPaths from "./svg-tglz7hxnh7";

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[20px]" data-name="ic_info_light">
        <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="27">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="27" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-[8.33%]" data-name="ic_info_light">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.667 16.667">
            <path d={svgPaths.p5eba6f0} fill="var(--fill-0, #FFBD20)" id="ic_info_light" />
          </svg>
        </div>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ffbd20] text-[11px] whitespace-nowrap">Maksimal usia pendaftaran 65 tahun</p>
    </div>
  );
}

export default function EligibilityNote() {
  return (
    <div className="bg-[rgba(239,193,84,0.1)] relative rounded-[8px] size-full" data-name="Eligibility Note">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(239,193,84,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}