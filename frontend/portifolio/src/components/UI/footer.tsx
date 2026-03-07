// components/Footer.tsx
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiHeart, FiArrowUp } from "react-icons/fi";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 px-4 py-12 text-gray-300 sm:px-6 md:px-10">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondry"></div>
      
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondry text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-xs">
            <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
              Leovigildo Loureiro João
            </h3>
            <p className="text-xs italic text-gray-400 sm:text-sm">
              "Transformando ideias em soluções digitais robustas e escaláveis."
            </p>
            <div className="mt-2 flex items-center gap-1 text-[0.7rem] text-gray-500 sm:text-xs">
              <span>© {currentYear}</span>
              <span>•</span>
              <span>Angola</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"></span>
                  Início
                </a>
              </li>
              <li>
                <a href="#projecto" className="hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-primary transition-colors">
                  Competências
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
              Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
              Redes
            </h4>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://github.com/Leovigildo-Loureiro-Joao" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="GitHub"
              >
                <FaGithub className="text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/leovigildo-loureiro-joao" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="mailto:leovigildojao902@gmail.com" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="Email"
              >
                <FaEnvelope className="text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 border-t border-gray-800 pt-8 text-center text-xs text-gray-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-left">
          <p>
            Desenvolvido com <FiHeart className="inline w-3 h-3 text-secondry" /> em Angola
          </p>
          <p>
            Todos os direitos reservados • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};
