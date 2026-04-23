import { useState, useEffect } from "react";
import { NavbarMobileHeader, MobileMenu, Footer } from "./shared-layout";

/* ── FAQ Data ─── */
const faqData = [
  {
    question: "Apa itu Pulang?",
    answer: "Pulang adalah gerakan untuk mempersiapkan kematian agar bisa berpulang dengan tenang. Pulang memberikan layanan pemulasaran lengkap mulai dari hari kematian hingga pasca kematian — menemani perjalanan berpulang dengan lebih tenang dan meringankan keluarga.",
  },
  {
    question: "Siapa yang membuat Pulang?",
    answer: "Pulang dijalankan secara amanah oleh Kitabisa. Sejak 2013, Kitabisa telah menjadi platform galang dana dan donasi terpercaya di Indonesia.",
  },
  {
    question: "Apa misi Pulang?",
    answer: "Misi kami adalah memastikan setiap orang dapat berpulang dengan layak dan bermartabat, serta membebaskan keluarga yang ditinggalkan dari beban finansial dan kerepotan administrasi.",
  },
  {
    question: "Bagaimana cara gabung menjadi anggota?",
    answer: "Kamu bisa bergabung dengan mendaftar langsung melalui website ini dengan menekan tombol 'Daftar jadi anggota' di halaman utama atau menu navigasi.",
  },
  {
    question: "Berapa iuran keanggotaan Pulang?",
    answer: "Iuran keanggotaan Pulang dimulai dari Rp200.000 per tahun untuk perlindungan komprehensif.",
  },
  {
    question: "Apakah semua usia bisa menjadi anggota?",
    answer: "Layanan ini dapat diikuti oleh rentang usia 1 hingga 65 tahun pada saat pendaftaran awal.",
  },
  {
    question: "Berapa lama masa keanggotaan Pulang?",
    answer: "Masa keanggotaan berlaku selama 1 tahun dan dapat diperpanjang di tahun-tahun berikutnya. Layanan bisa diklaim setelah melewati masa tunggu 6 bulan sejak pendaftaran aktif.",
  },
];

export default function FaqPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Mengatur index accordion yang terbuka (0 berarti item pertama terbuka by default)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex justify-center bg-[#fefefe]">
      <div className="w-full max-w-[480px] bg-[white] relative flex flex-col min-h-screen">
        <NavbarMobileHeader onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex flex-col flex-1 w-full">
          
          {/* Header Section */}
          <div className="flex flex-col gap-[16px] items-start px-[24px] pt-[32px] pb-[24px] w-full">
            <div className="bg-[#f0e6d5] flex items-center justify-center px-[12px] py-[6px] rounded-[100px] shrink-0">
              <p className="font-['Outfit',sans-serif] font-semibold text-[#a88658] text-[10px] tracking-[1.2px] whitespace-nowrap uppercase">
                Pusat Bantuan
              </p>
            </div>
            <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[28px] w-full">
              Pertanyaan yang sering ditanyakan
            </p>
            <p className="font-['Outfit',sans-serif] font-normal leading-[1.6] text-[#6b6050] text-[14px] w-full pr-[10px]">
              Temukan jawaban seputar Pulang, keanggotaan, layanan, dan cara menghubungi kami.
            </p>
          </div>

          <div className="bg-[#e8e2d6] h-px w-full" />

          {/* FAQ Accordion Section */}
          <div className="flex flex-col px-[20px] py-[24px] w-full">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[16px] w-full mb-[12px] overflow-hidden transition-all duration-300"
                  style={{
                    border: "1px solid rgba(189,166,122,0.2)",
                    boxShadow: "0px 2px 8px 0px rgba(46,33,20,0.03)"
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full px-[16px] py-[18px] bg-transparent border-none cursor-pointer text-left"
                  >
                    <p className="font-['Outfit',sans-serif] font-bold leading-[1.4] text-[#1f1912] text-[14px] pr-[16px] flex-1">
                      {faq.question}
                    </p>
                    <div
                      className={`flex items-center justify-center rounded-full shrink-0 size-[28px] transition-colors duration-300 ${
                        isOpen ? "bg-[#1f1912]" : "bg-[#f5efe4]"
                      }`}
                    >
                      {isOpen ? (
                        /* Minus Icon */
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                          <path d="M1 1H11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ) : (
                        /* Plus Icon */
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke="#a88658" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  {/* Answer Body (Expandable) */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-[16px] pb-[20px]">
                      <div className="h-px w-full bg-[#f3f4f6] mb-[16px]" />
                      <p className="font-['Outfit',sans-serif] font-normal leading-[1.65] text-[#6b6050] text-[13px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Contact Support Card */}
            <div className="bg-[#F4EDE0] rounded-[24px] flex flex-col items-start p-[24px] w-full mt-[12px] shadow-sm relative overflow-hidden">
              <div className="bg-white flex items-center justify-center px-[12px] py-[6px] rounded-[100px] shrink-0 mb-[16px]">
                <p className="font-['Outfit',sans-serif] font-bold text-[#a88658] text-[10px] tracking-[1px] uppercase">
                  Masih Bingung?
                </p>
              </div>
              <p className="font-['Lora',serif] font-bold leading-[1.3] text-[#1f1912] text-[22px] w-full mb-[12px]">
                Kami siap bantu jawab langsung
              </p>
              <p className="font-['Outfit',sans-serif] font-normal leading-[1.55] text-[#6b6050] text-[13px] w-full mb-[20px]">
                Tim Pulang tersedia 24 jam, termasuk akhir pekan dan hari libur. Tanpa biaya konsultasi.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1f1912] w-full flex items-center justify-center gap-[8px] px-[20px] py-[14px] rounded-[12px] no-underline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p className="font-['Outfit',sans-serif] font-semibold text-[14px] text-white">
                  Hubungi tim Pulang
                </p>
              </a>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}