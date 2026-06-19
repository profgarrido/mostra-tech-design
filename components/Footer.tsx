"use client";

export default function Footer() {
  return (
    <footer className="bg-[#070606] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="https://www.cesar.school/wp-content/themes/alfama/assets/img/marca.svg"
              alt="CESAR School"
              className="h-7 w-auto brightness-0 invert opacity-70"
            />
            <div className="w-px h-6 bg-white/20" />
            <div>
              <p className="text-white font-bold text-sm">Mostra Tech Design</p>
              <p className="text-white/40 text-xs">2026.1</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-white/40 text-xs leading-relaxed max-w-xs text-left sm:text-right">
              Exposição dos projetos desenvolvidos pelos estudantes de Graduação da CESAR School.
            </p>
            <p className="text-white/20 text-xs mt-2">
              © 2026 CESAR School · Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
