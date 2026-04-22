import { useState, useEffect } from "react";
import { usePageTransition } from "./page-transition";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";
import stripImage from "../../assets/Misi/strip.svg";

const misiPoints = [
  {
    title: "Kami ingin memuliakan para orang baik di masa terakhir kehidupannya",
    desc: "Kami memastikan setiap prosesi kepulangan dilakukan dengan penuh rasa hormat dan bermartabat.",
  },
  {
    title: "Kami hadir untuk meringankan keluarga yang ditinggal",
    desc: "Kami urus segala kerumitan teknis di masa duka, sehingga keluarga dapat fokus pada doa dan kenangan indah.",
  },
  {
    title: "Kami memberikan layanan yang inklusif",
    desc: "Kami melayani prosesi kepulangan untuk semua agama.",
  },
  {
    title: "Bersamamu, kami memuliakan jenazah dhuafa dan tunawisma",
    desc: "Sebagian iuran keanggotaan akan didonasikan untuk memberikan layanan pemakaman gratis bagi yang tak mampu.",
  },
];

/* ── Hero tombstone placeholder ─── */
function TombstoneHero() {
  return (
    <div className="relative rounded-[16px] overflow-hidden w-full aspect-[4/3] shadow-[0px_8px_24px_0px_rgba(46,33,20,0.15)]">
      <img src={stripImage} alt="Ilustrasi papan nisan" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}

/* ── Bottom CTA Section ─── */
function BottomCtaSection() {
  const { navigateWithLoading } = usePageTransition();
  const waLink =
    "https://wa.me/6281234567890?text=Halo%2C%20saya%20butuh%20layanan%20darurat%20Pulang";

  return (
    <div className="bg-[#1a140f] flex flex-col gap-[24px] items-center px-[24px] py-[48px] w-full">
      <p className="font-['Lora',serif] font-bold text-white text-[22px] leading-[1.3] text-center w-full">
        Siapkan sekarang, ringankan beban di hari mendatang
      </p>
      <p className="font-['Outfit',sans-serif] font-normal text-[rgba(255,255,255,0.72)] text-[13px] leading-[1.55] text-center w-full">
        Dengan menyiapkan kepulangan, kamu membantu keluarga agar lebih tenang melalui momen duka.
      </p>
      <p className="font-['Outfit',sans-serif] font-medium text-[#d5bf92] text-[13px] text-center w-full">
        Mulai dari Rp 200.000/tahun
      </p>

      <button
        type="button"
        onClick={() => navigateWithLoading("/purchase")}
        className="w-full rounded-[12px] border-none cursor-pointer shadow-[0px_6px_20px_0px_rgba(168,137,88,0.4)]"
        style={{ background: "linear-gradient(to right, #d8be90, #a88958)" }}
      >
        <div className="flex items-center justify-center px-[24px] py-[14px] w-full">
          <p className="font-['Outfit',sans-serif] font-semibold text-[#1f1912] text-[15px] whitespace-nowrap">
            Daftar jadi anggota
          </p>
        </div>
      </button>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-[6px] no-underline"
      >
        <p className="font-['Outfit',sans-serif] font-semibold text-[#d5bf92] text-[13px] whitespace-nowrap">
          Pesan layanan darurat 24 jam via WhatsApp
        </p>
        <svg className="shrink-0" width="12" height="9" viewBox="0 0 12 9" fill="none">
          <path
            d="M11.9348 4.84337C11.9996 4.67929 12.0166 4.49875 11.9835 4.32457C11.9504 4.15039 11.8687 3.99041 11.7487 3.86487L8.31995 0.274058C8.24088 0.188318 8.14629 0.11993 8.04171 0.0728818C7.93713 0.025834 7.82465 0.00106968 7.71083 3.38947e-05C7.59701 -0.00100189 7.48414 0.0217114 7.37879 0.0668487C7.27344 0.111986 7.17774 0.178643 7.09725 0.262931C7.01677 0.347219 6.95312 0.44745 6.91002 0.557774C6.86692 0.668099 6.84523 0.786308 6.84622 0.905505C6.84721 1.0247 6.87085 1.1425 6.91578 1.25202C6.9607 1.36154 7.02601 1.4606 7.10788 1.54341L9.07429 3.60274H0.857197C0.629854 3.60274 0.411823 3.69732 0.251067 3.86568C0.0903117 4.03403 0 4.26236 0 4.50045C0 4.73853 0.0903117 4.96687 0.251067 5.13522C0.411823 5.30357 0.629854 5.39815 0.857197 5.39815H9.07429L7.10874 7.45659C7.02686 7.5394 6.96156 7.63846 6.91664 7.74798C6.87171 7.8575 6.84806 7.9753 6.84707 8.0945C6.84609 8.21369 6.86778 8.3319 6.91088 8.44223C6.95398 8.55255 7.01763 8.65278 7.09811 8.73707C7.17859 8.82136 7.2743 8.88801 7.37965 8.93315C7.485 8.97829 7.59787 9.001 7.71169 8.99997C7.82551 8.99893 7.93799 8.97417 8.04257 8.92712C8.14715 8.88007 8.24174 8.81168 8.32081 8.72594L11.7496 5.13513C11.829 5.05155 11.8919 4.95241 11.9348 4.84337Z"
            fill="#d5bf92"
          />
        </svg>
      </a>
    </div>
  );
}

export default function MisiPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col w-full flex-1">
          {/* Content */}
          <div className="bg-white w-full">
            <div className="flex flex-col gap-[20px] items-start px-[24px] py-[28px] w-full">
              {/* MISI badge */}
              <div className="bg-[rgba(175,145,96,0.12)] relative rounded-[100px] shrink-0">
                <div className="flex items-start overflow-clip px-[12px] py-[5px] rounded-[inherit]">
                  <p className="font-['Outfit',sans-serif] font-semibold leading-[normal] text-[#967240] text-[10px] tracking-[1.5px] whitespace-nowrap">
                    MISI PULANG
                  </p>
                </div>
                <div className="absolute border border-[rgba(175,145,96,0.45)] border-solid inset-0 pointer-events-none rounded-[100px]" />
              </div>

              {/* H1 */}
              <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[22px] leading-[1.32] w-full">
                Karena Hidup Sependek Tanda Strip (-)
              </p>

              {/* Hero image */}
              <TombstoneHero />

              {/* Intro */}
              <p className="font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[14px] leading-[1.65] w-full">
                Di antara tahun lahir dan tahun wafat, ada sebuah garis kecil yang merangkum seluruh cerita kita.
              </p>

              {/* Filosofi Pulang */}
              <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[18px] leading-[1.4] w-full mt-[4px]">
                Filosofi Pulang
              </p>
              <p className="font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[14px] leading-[1.65] w-full">
                Kematian tidak seharusnya tabu dibicarakan. Ia pasti hadir dan, bisa jadi, hadir tiba-tiba. Bukan hanya perlu dibicarakan,{" "}
                <span className="font-semibold">ia perlu disiapkan.</span>
              </p>
              <p className="font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[14px] leading-[1.65] w-full">
                Logo kami terinspirasi dari papan nisan. Simbol (&minus;) di antara tahun lahir dan tahun wafat mengingatkan kita bahwa hidup ini sangat singkat.
              </p>
              <p className="font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[14px] leading-[1.65] w-full">
                Di tengah kesementaraan hidup, menyiapkan kepulangan adalah bentuk memuliakan diri dan orang-orang tersayang. Agar kelak kepulangan kita tidak merepotkan mereka.
              </p>

              {/* Mengapa Kitabisa */}
              <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[18px] leading-[1.4] w-full mt-[4px]">
                Mengapa Kitabisa Membuat Pulang?
              </p>
              <p className="font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[14px] leading-[1.65] w-full">
                Sejak 2013, ada jutaan orang baik yang sudah tolong-menolong menggunakan platform Kitabisa. Kami telah menyaksikan bagaimana kebaikan mengalir tanpa henti.
              </p>
              <p className="font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[14px] leading-[1.65] w-full">
                Kami percaya, orang-orang baik yang telah menjaga sesama, berhak mendapatkan layanan terbaik saat mereka berpulang. Pulang lahir dari keinginan Kitabisa untuk tidak hanya menjadi saksi kebaikan mereka di masa hidup, tetapi juga memuliakan mereka di hari akhir.
              </p>

              {/* Pulang bukan hanya... */}
              <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[18px] leading-[1.4] w-full mt-[4px]">
                Pulang bukan hanya tentang kematian, tapi juga tanda sayang dan gerakan kebaikan
              </p>
              <p className="font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[14px] leading-[1.65] w-full">
                Dengan bergabung jadi anggota Pulang, kamu menyiapkan ketenangan bagi keluarga di masa yang berat nanti.
              </p>
              <p className="font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[14px] leading-[1.65] w-full">
                Bukan hanya itu, kamu ikut mendukung agar jenazah dhuafa dan tunawisma mendapat penghormatan yang layak di hari akhirnya.
              </p>

              {/* Misi Pulang list */}
              <p className="font-['Lora',serif] font-bold text-[#1f1912] text-[18px] leading-[1.4] w-full mt-[4px]">
                Misi Pulang
              </p>
              <ol className="flex flex-col gap-[14px] w-full list-none p-0 m-0">
                {misiPoints.map((point, i) => (
                  <li key={i} className="flex gap-[12px] items-start w-full">
                    <div className="shrink-0 size-[24px] rounded-full bg-[#1f1912] flex items-center justify-center mt-[1px]">
                      <span className="font-['Outfit',sans-serif] font-semibold text-white text-[12px]">
                        {i + 1}
                      </span>
                    </div>
                    <p className="flex-1 font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[14px] leading-[1.6]">
                      <span className="font-semibold">{point.title}</span>
                      <span>. {point.desc}</span>
                    </p>
                  </li>
                ))}
              </ol>

              {/* Closing */}
              <p className="font-['Outfit',sans-serif] font-normal text-[#3a2c1a] text-[14px] leading-[1.65] w-full mt-[4px]">
                Kami berupaya mewujudkan misi itu dengan memberikan layanan terbaik untuk pemulasaran jenazah di hari kematian dan bantuan pasca pemakaman.
              </p>
            </div>
          </div>

          <BottomCtaSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
