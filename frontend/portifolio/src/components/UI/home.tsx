import { Typewriter } from "react-simple-typewriter";
import inovation from "../../assets/images/Innovation.gif";

export const Home = () => {
    // Função para rolagem suave
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-10 pt-28 sm:px-6 md:px-10 xl:px-20 xl:pb-0 xl:pt-32">
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:gap-10 xl:gap-14">
                {/* Conteúdo principal */}
                <div id="welcome" className="flex w-full min-w-0 flex-col gap-5 text-text_color leading-7">
                    {/* Título mais direto e de impacto */}
                    <div id="titulo">
                        <h1 className="pb-2 text-[clamp(1.9rem,4.6vw,3.5rem)] font-bold leading-[1.08]">
                            <span className="text-primary">Full-Stack Developer</span>
                            <br />
                            que constrói{" "}
                            <span className="text-secondry">
                                sistemas escaláveis
                            </span>
                        </h1>

                        <h2 className="pb-2 text-[clamp(0.98rem,1.9vw,1.35rem)] text-text_color/80">
                            Especializado em{" "}
                            <span className="text-secondry font-bold">
                                <Typewriter
                                    words={[
                                        "Spring Boot & React",
                                        "Arquitetura Offline-First",
                                        "Aplicações Seguras",
                                        "Sistemas em Produção"
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </span>
                        </h2>
                    </div>

                    {/* Descrição mais focada em valor/resultado */}
                    <div id="text-div" className="flex flex-col gap-6">
                        <p className="max-w-2xl text-[clamp(0.95rem,1.35vw,1.08rem)] leading-relaxed text-text_color/90">
                            Transformo ideias em produtos digitais robustos. 
                            Com experiência em projetos do zero à produção, 
                            meu foco é criar sistemas que resolvem problemas reais 
                            com tecnologia de ponta e boas práticas de engenharia.
                        </p>

                        {/* Tech stack visual - NOVO */}
                        <div className="mt-2 flex flex-wrap gap-2 sm:gap-3">
                            {["Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "Flutter"].map((tech) => (
                                <span 
                                    key={tech}
                                    className="cursor-default rounded-full border border-primary/20 bg-white/5 px-3 py-2 text-[0.68rem] font-mono text-primary transition-all hover:bg-primary/10 sm:px-4 sm:text-[0.72rem] xl:text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* CTAs mais fortes - NOVO */}
                        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <button
                                onClick={() => scrollToSection("projecto")}
                                className="rounded-boder_radius bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary_hover sm:px-8"
                            >
                                Ver Projetos
                            </button>
                            <button
                                onClick={() => scrollToSection("contacto")}
                                className="rounded-boder_radius border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10 sm:px-8"
                            >
                                Contactar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Imagem mantida mas com ajuste */}
                <figure className="mx-auto w-full max-w-[360px] animate-fadeIn md:mx-0 md:max-w-none">
                    <img src={inovation} alt="Desenvolvimento de sistemas" className="h-auto w-full object-contain" />
                </figure>
            </div>

            {/* NOVA SECÇÃO: Highlights / Proof */}
            <div id="highlights" className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:mt-16 md:grid-cols-4">
                {[
                    { number: "4+", label: "Projetos em Produção" },
                    { number: "100%", label: "Código Próprio" },
                    { number: "Offline", label: "Arquitetura First" },
                    { number: "Seguro", label: "Foco em Proteção" }
                ].map((item, index) => (
                    <div key={index} className="text-center">
                        <div className="text-[clamp(1.25rem,2.1vw,1.7rem)] font-bold text-primary">{item.number}</div>
                        <div className="mt-1 text-[clamp(0.7rem,1vw,0.85rem)] text-text_color/70">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};
