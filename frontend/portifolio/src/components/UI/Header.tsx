import { useState } from "react";

export const Header = () => {
  const [links, setLinks] = useState([
    { href: "#home", data: "Início", check: "select" },
    { href: "#projecto", data: "Projetos", check: "" },
    { href: "#quemSou", data: "Sobre mim", check: "" },
    { href: "#habilidades", data: "Competências", check: "" },
    { href: "#contacto", data: "Contacto", check: "" },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function Select(key: number) {
    setLinks(links =>
      links.map((element, idx) => ({
        ...element,
        check: idx === key ? "select" : "",
      }))
    );
    // Fecha menu mobile após clique
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4 sm:px-6 md:px-10 md:py-5 lg:px-20 lg:py-6">
      {/* Backdrop Blur */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10 border-b border-white/20 z-10"></div>
      
      <nav className="relative z-30 mx-auto max-w-7xl">
        {/* Menu Mobile Button */}
        <button
          className="relative z-50 ml-auto flex flex-col gap-1 p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {/* Menu Desktop & Mobile */}
        <ul className={`
          absolute left-0 top-full flex w-full flex-col gap-4 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur-md transition-all duration-300 md:static md:w-auto md:flex-row md:items-center md:gap-8 md:rounded-none md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none lg:gap-10
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 md:opacity-100 translate-y-4 md:translate-y-0 pointer-events-none md:pointer-events-auto'}
        `}>
          {links.map((item, key) => (
            <li 
              onClick={() => Select(key)} 
              className="h-min cursor-pointer group flex flex-col items-center" 
              key={key}
            >
              <a 
                href={item.href} 
                className={`
                  text-base transition-all hover:text-secondry md:text-sm
                  ${item.check === "select" ? "text-primary font-semibold" : "text-gray-700"}
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
                  ${item.check === "select" ? "opacity-100 w-full bg-primary" : "w-0"}
                `}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
