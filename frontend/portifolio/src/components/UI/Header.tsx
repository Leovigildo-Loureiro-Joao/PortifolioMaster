import { useState } from "react";

export const Header = () => {
  const [links, setLinks] = useState([
    { href: "#home", data: "Home", check: "select" },
    { href: "#projecto", data: "Projectos", check: "" },
    { href: "#quemSou", data: "Quem sou", check: "" },
    { href: "#habilidades", data: "Habilidades", check: "" },
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
    <header className="w-full z-50 top-0 fixed p-4 md:py-6 md:px-20 lg:p-20 lg:pb-0">
      {/* Backdrop Blur */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10 border-b border-white/20 z-10"></div>
      
      <nav className="relative z-30 max-w-7xl mx-auto">
        {/* Menu Mobile Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 ml-auto z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {/* Menu Desktop & Mobile */}
        <ul className={`
          flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-10 
          absolute md:static top-full left-0 w-full md:w-auto
          bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
          p-6 md:p-0 shadow-lg md:shadow-none
          transition-all duration-300
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
                  hover:text-secondry transition-all text-lg md:text-base
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