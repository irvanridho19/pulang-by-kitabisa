import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";

/* ── Badge ─── */
function Badge() {
  return (
    <div className="bg-[rgba(189,166,122,0.15)] relative rounded-[100px] shrink-0">
      <div className="flex items-start overflow-clip px-[10px] py-[4px] rounded-[inherit]">
        <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#967240] text-[10px] tracking-[1.2px] whitespace-nowrap">
          LAYANAN ANGGOTA
        </p>
      </div>
      <div className="absolute border border-[rgba(189,166,122,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

/* ── Heading ─── */
function LayananHeading() {
  return (
    <div className="flex flex-col gap-[8px] items-start overflow-clip shrink-0 w-full">
      <Badge />
      <p className="font-['Lora',serif] font-bold leading-[1.4] text-[#1f1912] text-[22px] w-full">
        Manfaat yang kamu dapatkan sebagai anggota
      </p>
      <p className="font-['Outfit',sans-serif] font-normal leading-[1.55] text-[#6b6b6b] text-[13px] w-full">
        {"Dari sebelum hingga selepas pemakaman, "}
        <span className="font-['Outfit',sans-serif] font-bold">Pulang</span>
        {" hadir langsung membantumu dan keluarga."}
      </p>
    </div>
  );
}

/* ── Bullet Item ─── */
function BulletItem({ text, dotColor }: { text: string; dotColor: string }) {
  return (
    <div className="flex gap-[8px] items-center shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" r="2" fill={dotColor} fillOpacity="0.6" />
        </svg>
      </div>
      <p className="font-['Outfit',sans-serif] font-normal leading-[18px] text-[12px] text-[rgba(31,25,18,0.85)] flex-1">
        {text}
      </p>
    </div>
  );
}

/* ── Service Card (new simple box style) ─── */
interface ServiceCardProps {
  tag: string;
  dotColor: string;
  items: string[];
}

function ServiceCard({ tag, dotColor, items }: ServiceCardProps) {
  return (
    <div className="bg-[#fcfaf6] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex items-center p-[16px] relative size-full">
          <div className="flex flex-col gap-[12px] items-start w-full">
            {/* Tag */}
            <div className="bg-[rgba(151,114,64,0.1)] flex items-center justify-center overflow-clip px-[12px] py-[4px] rounded-[100px] shrink-0">
              <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#876747] text-[14px] whitespace-nowrap">
                {tag}
              </p>
            </div>
            {/* Items */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              {items.map((item, i) => (
                <BulletItem key={i} text={item} dotColor={dotColor} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Border: thin on top/right/bottom, thick (4px) on left */}
      <div className="absolute inset-0 pointer-events-none rounded-[16px]"
        style={{
          border: "1px solid rgba(151,114,64,0.2)",
          borderLeftWidth: "4px",
        }}
      />
    </div>
  );
}

/* ── Card Data ─── */
const serviceCards: ServiceCardProps[] = [
  {
    tag: "Sebelum Kematian",
    dotColor: "#977240",
    items: [
      "Penulisan surat wasiat",
      "Penyimpanan dokumen penting online",
      "Pencarian & pemesanan makam",
    ],
  },
  {
    tag: "Hari Kematian",
    dotColor: "#8C6432",
    items: [
      "Pemulasaran jenazah (muslim & non-muslim)",
      "Peralatan jenazah lengkap",
      "Ambulans jenazah",
      "Penggalian makam",
      "Karangan bunga",
      "Snack box 50 pak",
    ],
  },
  {
    tag: "Pasca Kematian",
    dotColor: "#7B5628",
    items: [
      "Asisten khusus untuk administrasi keluarga",
      "Akta kematian dari Disdukcapil",
      "Surat keterangan kepolisian",
      "Penghentian BPJS",
      "Buku Yasin 50 pcs (khusus Muslim)",
      "Uang kedukaan Rp1.000.000",
      "Layanan konseling psikolog",
    ],
  },
];

/* ── CTA Section ─── */
const arrowPath = "M11.9348 4.84337C11.9996 4.67929 12.0166 4.49875 11.9835 4.32457C11.9504 4.15039 11.8687 3.99041 11.7487 3.86487L8.31995 0.274058C8.24088 0.188318 8.14629 0.11993 8.04171 0.0728818C7.93713 0.025834 7.82465 0.00106968 7.71083 3.38947e-05C7.59701 -0.00100189 7.48414 0.0217114 7.37879 0.0668487C7.27344 0.111986 7.17774 0.178643 7.09725 0.262931C7.01677 0.347219 6.95312 0.44745 6.91002 0.557774C6.86692 0.668099 6.84523 0.786308 6.84622 0.905505C6.84721 1.0247 6.87085 1.1425 6.91578 1.25202C6.9607 1.36154 7.02601 1.4606 7.10788 1.54341L9.07429 3.60274H0.857197C0.629854 3.60274 0.411823 3.69732 0.251067 3.86568C0.0903117 4.03403 0 4.26236 0 4.50045C0 4.73853 0.0903117 4.96687 0.251067 5.13522C0.411823 5.30357 0.629854 5.39815 0.857197 5.39815H9.07429L7.10874 7.45659C7.02686 7.5394 6.96156 7.63846 6.91664 7.74798C6.87171 7.8575 6.84806 7.9753 6.84707 8.0945C6.84609 8.21369 6.86778 8.3319 6.91088 8.44223C6.95398 8.55255 7.01763 8.65278 7.09811 8.73707C7.17859 8.82136 7.2743 8.88801 7.37965 8.93315C7.485 8.97829 7.59787 9.001 7.71169 8.99997C7.82551 8.99893 7.93799 8.97417 8.04257 8.92712C8.14715 8.88007 8.24174 8.81168 8.32081 8.72594L11.7496 5.13513C11.829 5.05155 11.8919 4.95241 11.9348 4.84337Z";

function SectionCtaAnggota() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1f1912] flex flex-col items-start w-full">
      {/* Top divider line */}
      <div className="bg-[rgba(255,255,255,0.08)] h-px w-full" />

      {/* Inner content */}
      <div className="flex flex-col gap-[16px] items-center px-[24px] py-[36px] w-full">
        {/* Heading */}
        <p className="font-['Lora',serif] font-bold leading-[31px] text-[#e2d0a8] text-[22px] text-center w-full">
          Siapkan sekarang, ringankan beban di hari mendatang
        </p>

        {/* Subtext */}
        <p className="font-['Outfit',sans-serif] font-normal leading-[20px] text-[13px] text-[rgba(255,255,255,0.55)] text-center w-full">
          Dengan menyiapkan kepulangan, kamu membantu keluarga agar lebih tenang melalui momen duka.
        </p>

        {/* Price */}
        <p className="font-['Outfit',sans-serif] font-bold leading-[1.6] text-[#f1eee3] text-[13.5px] text-center w-full">
          Mulai dari Rp 20.000/bulan
        </p>

        {/* Primary CTA — gold gradient pill */}
        <button
          onClick={() => navigate("/purchase")}
          className="w-full rounded-[100px] border-none cursor-pointer shadow-[0px_6px_20px_0px_rgba(168,137,88,0.4)]"
          style={{ background: "linear-gradient(to right, #d8be90, #a88958)" }}
        >
          <div className="flex items-center justify-center px-[24px] py-[14px] w-full">
            <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#1f1912] text-[15px] text-center whitespace-nowrap">
              Daftar jadi anggota
            </p>
          </div>
        </button>

        {/* WhatsApp link */}
        <button
          onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
          className="flex gap-[8px] items-center justify-center bg-transparent border-none cursor-pointer w-full py-[8px]"
        >
          <p className="font-['Outfit',sans-serif] font-semibold leading-[1.5] text-[#fee5f2] text-[12px] whitespace-nowrap">
            Pesan layanan darurat 24 jam via WhatsApp
          </p>
          <div className="shrink-0 size-[12px] relative">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
              <path d={arrowPath} fill="#FEE5F2" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

/* ── Main Page ─── */
export default function LayananPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#fefefe] flex justify-center">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
        <NavbarMobileHeader
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col w-full">
          <div className="bg-gradient-to-b from-[#faf8f4] to-[#f5f0e8] shrink-0 w-full">
            <div className="flex flex-col items-center justify-center overflow-clip size-full">
              <div className="flex flex-col gap-[24px] items-center justify-center px-[20px] py-[36px] w-full">
                <LayananHeading />

                {/* Cards with connector line */}
                <div className="flex flex-col items-start w-full">
                  {serviceCards.map((card, i) => (
                    <div key={i} className="w-full">
                      <ServiceCard {...card} />
                      {i < serviceCards.length - 1 && (
                        <div className="relative h-[16px] w-full">
                          <div
                            className="absolute bg-[#bda67a] w-[3px] top-0 bottom-0"
                            style={{ left: "1.5rem" }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <SectionCtaAnggota />
          <Footer />
        </main>
      </div>
    </div>
  );
}