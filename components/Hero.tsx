"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://d335luupugsy2.cloudfront.net/cms/files/101189/1747079799/$8jwfnlweh5p), linear-gradient(to bottom, #070606 0%, #1a0a00 100%)",
        backgroundPositionX: "50%",
        backgroundPositionY: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#070606]/80 via-[#070606]/60 to-[#070606]/85" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6002]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF6002]/15 border border-[#FF6002]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF6002] animate-pulse" />
            <span className="text-[#FF6002] text-sm font-medium tracking-widest uppercase">
              CESAR School · 2026.1 · 20 de junho
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-2 tracking-tight">
            Mostra
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6 tracking-tight">
            <span className="text-[#FF6002]">Tech</span>{" "}
            <span className="text-[#FBFAE6]">Design</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-4">
            Conheça os projetos desenvolvidos pelos estudantes dos cursos de Graduação da CESAR School.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10">
            Veja como inovação, arte, tecnologia e cultura se conectam em projetos que propõem soluções para diferentes públicos e contextos. Conheça as mentes criativas da CESAR School e suas visões para o presente e o futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#exposicoes"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6002] hover:bg-[#e05500] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span>Ver exposições</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#programacao"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10"
            >
              Programação do evento
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FBFAE6] to-transparent" />
    </section>
  );
}
