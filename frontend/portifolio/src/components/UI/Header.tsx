import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => { 
  const [links] = useState([
    { href: "/#home", data: "Início" },
    { href: "/#projecto", data: "Projetos" },
    { href: "/#quemSou", data: "Sobre mim" },
    { href: "/#habilidades", data: "Competências" },
    { href: "/#contacto", data: "Contacto" },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const sectionId = href.replace("/#", "");

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    window.history.replaceState(null, "", href);
    scrollToSection(sectionId);
  };

  const isActive = (href: string) => {
    if (location.pathname !== "/") return false;
    const sectionId = href.replace("/#", "");
    const hash = window.location.hash.replace("#", "");
    return hash === sectionId;
  };

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4 sm:px-6 md:px-10 md:py-5 lg:px-20 lg:py-6">
      <div className="absolute inset-0 backdrop-blur-md bg-white/10 border-b border-white/20 z-10"></div>

      <nav className="relative z-30 mx-auto max-w-7xl">
        <button
          className="relative z-50 ml-auto flex flex-col gap-1 p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        <ul className={`
          absolute left-0 justify-center top-full flex w-full flex-col gap-4 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur-md transition-all duration-300 md:static md:w-auto md:flex-row md:items-center md:gap-8 md:rounded-none md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none lg:gap-10
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 md:opacity-100 translate-y-4 md:translate-y-0 pointer-events-none md:pointer-events-auto'}
        `}>
          {links.map((item, key) => (
            <li
              onClick={(e) => handleNavClick(e, item.href)}
              className="h-min cursor-pointer group flex flex-col items-center"
              key={key}
            >
              <a
                href={item.href}
                onClick={(e) => e.preventDefault()}
                className={`
                  text-base transition-all hover:text-secondry md:text-sm
                  ${isActive(item.href) ? "text-primary font-semibold" : "text-gray-700"}
                  px-4 py-2 md:px-0 md:py-0 rounded-lg md:rounded-none
                  hover:bg-gray-100 md:hover:bg-transparent
                `}
              >
                {item.data}
              </a>
              <span
                className={`
                  h-[3px] md:h-[5px] rounded-boder_radius bg-primary transition-all
                  group-hover:w-full group-hover:bg-secondry mt-1
                  ${isActive(item.href) ? "opacity-100 w-full bg-primary" : "w-0"}
                `}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
