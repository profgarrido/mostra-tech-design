"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#070606]/95 backdrop-blur-sm border-b border-[#FF6002]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://www.cesar.school"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CESAR School"
          >
            <img
              src="https://www.cesar.school/wp-content/themes/alfama/assets/img/marca.svg"
              alt="CESAR School"
              className="h-7 sm:h-8 w-auto brightness-0 invert"
            />
          </a>

          <div className="w-px h-8 bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/101189/1747077261/$dpqn6uh5v76"
              alt="Mostra Tech Design"
              className="h-7 sm:h-8 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="text-white font-semibold text-sm sm:text-base tracking-wide hidden sm:inline">
              Mostra Tech Design
            </span>
          </div>
        </div>

        <a
          href="#exposicoes"
          className="bg-[#FF6002] hover:bg-[#e05500] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 whitespace-nowrap"
        >
          Ver exposições
        </a>
      </div>
    </header>
  );
}
