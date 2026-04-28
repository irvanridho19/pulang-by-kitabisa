import { useState, useEffect } from "react";
import { NavbarMobileHeader, MobileMenu, Footer, SectionCtaAnggota } from "./shared-layout";
import stripImage from "../../assets/Manifesto/ilus.svg";

/* ── Hero Tombstone Image ─── */
function TombstoneHero() {
  return (
    <div className="relative rounded-[16px] overflow-hidden w-full aspect-[4/3] shadow-[0px_8px_24px_0px_rgba(46,33,20,0.15)] my-[8px]">
      <img
        src={stripImage}
        alt="Ilustrasi papan nisan"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default function MisiPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fefefe] flex justify-center">
      <div className="w-full max-w-[480px] bg-white relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col w-full flex-1">
          {/* Main Content */}
          <div className="bg-white w-full pb-[40px]">
            <div className="flex flex-col items-start px-[20px] py-[28px] w-full">

              {/* Badge: MANIFESTO PULANG */}
              <div className="bg-[#f9f7f3] border border-[#e3d5c1] w-fit rounded-[100px] px-[12px] py-[6px] mb-[20px]">
                <p className="font-['Outfit',sans-serif] font-semibold text-[#8a683c] text-[11px] tracking-[1.5px] uppercase">
                  Manifesto Pulang
                </p>
              </div>

              {/* H1 Title */}
              <p className="font-['Lora',serif] font-bold text-[#1f1f1f] text-[26px] leading-[1.3] w-full mb-[24px]">
                Karena Hidup Sependek Tanda Strip (-)
              </p>

              {/* Hero Image */}
              <TombstoneHero />

              {/* Typography Content Wrapper */}
              <div className="flex flex-col gap-[20px] w-full mt-[24px]">

                <p className="font-['Outfit',sans-serif] font-normal text-[#5c5c5c] text-[15px] leading-[1.6]">
                  Pada papan nisan di antara tahun lahir dan tahun wafat, ada sebuah garis kecil tanda strip (-) yang merangkum seluruh cerita hidup kita.
                </p>

                <p className="font-['Outfit',sans-serif] font-normal text-[#5c5c5c] text-[15px] leading-[1.6]">
                  Tanda strip itu adalah cermin kehidupan yang sangat singkat.
                </p>

                <div className="flex flex-col gap-[8px] mt-[8px]">
                  <p className="font-['Outfit',sans-serif] font-bold text-[#1f1f1f] text-[17px] leading-[1.4]">
                    Satu-satunya yang pasti dalam kehidupan ialah kepulangan.
                  </p>
                  <p className="font-['Outfit',sans-serif] font-normal text-[#5c5c5c] text-[15px] leading-[1.6]">
                    Maka membicarakan tutup usia adalah upaya menumbuhkan kesadaran hakiki sebagai manusia.
                  </p>
                </div>

                <div className="flex flex-col gap-[8px] mt-[8px]">
                  <p className="font-['Outfit',sans-serif] font-bold text-[#1f1f1f] text-[17px] leading-[1.4]">
                    Menyiapkan kepulangan juga bentuk cinta pada keluarga.
                  </p>
                  <p className="font-['Outfit',sans-serif] font-normal text-[#5c5c5c] text-[15px] leading-[1.6]">
                    Saat seseorang berpulang, keluarganya melanjutkan hidup dengan duka.
                  </p>
                  <p className="font-['Outfit',sans-serif] font-normal text-[#5c5c5c] text-[15px] leading-[1.6]">
                    Itulah mengapa menyiapkan kepulangan tak lain memberikan mereka kesempatan menyalakan lagi harapan untuk meneruskan perjalanan.
                  </p>
                </div>

                <p className="font-['Outfit',sans-serif] font-bold text-[#1f1f1f] text-[17px] leading-[1.4] mt-[8px]">
                  Pada akhirnya, menyiapkan kepulangan juga ikhtiar memuliakan kehidupan.
                </p>

                <p className="font-['Outfit',sans-serif] font-bold text-[#1f1f1f] text-[17px] leading-[1.4] mt-[8px]">
                  Maka, izinkan Pulang mengantarmu di momen akhir kehidupanmu.
                </p>

                <p className="font-['Outfit',sans-serif] font-bold text-[#1f1f1f] text-[17px] leading-[1.4] mt-[8px]">
                  Menuju tanda strip di sebuah papan nisan.
                </p>

              </div>
            </div>
          </div>

          {/* CTA & Footer components handle the dark section below */}
          <SectionCtaAnggota />
          <Footer />
        </main>
      </div>
    </div>
  );
}