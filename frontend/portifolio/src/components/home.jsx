import { Typewriter } from "react-simple-typewriter"
import inovation from "../assets/Innovation.gif"

export const Home = () => {
    return (
        <div id="home" className="flex p-20 pb-0 mt-20 justify-between items-start">
            <div id="welcome" className="w-[45%] text-text_color leading-7 flex flex-col gap-5">
                <div id="titulo">
                    <h1 className="text-3xl pb-2">
                        <span className="text-primary">Bem-vindo</span> ao meu portfólio
                    </h1>

                    <h2 className="text-xl pb-2">
                        Sou{" "}
                        <span className="text-secondry font-bold">
                            <Typewriter
                                words={[
                                    "Leovigildo João",
                                    "Desenvolvedor Full Stack",
                                    "Criador de Experiências Digitais"
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h2>
                </div>

                <div id="text-div" className="flex flex-col gap-5">
                    <p className="tracking-widest">
                        Aqui você encontra projetos inovadores que exploram
                        as novas tecnologias e as melhores práticas em
                        design e desenvolvimento.
                    </p>

                    <input
                     onClick={() => {
                        const aboutSection = document.getElementById("quemSou");
                        aboutSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                        type="button"
                        className="w-[150px] text-sm h-10 text-white rounded-boder_radius bg-primary hover:bg-primary_hover transition-all cursor-pointer"
                        value="Saiba mais"
                    />
                </div>
            </div>

            <figure className="w-[40%] -translate-y-[15%] animate-fadeIn">
                <img src={inovation} alt="Inovação" />
            </figure>
        </div>
    )
}
