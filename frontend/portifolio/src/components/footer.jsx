
import grupo from "../assets/Grupo 3.jpg"
import { SiLinkedin, SiGithub } from "react-icons/si";

export const Footer =()=>{
    return    <footer className="mx-20 py-10">
        <img src={grupo} alt="" className="img-bloco w-20"/>
        <div id="text-foot" className=" flex flex-col gap-10">
           
           <div>
                <div id="links" className="float-right flex gap-3 flex-col">
                    <h2 className="text-secondry">Links uteis</h2>
                    <nav >
                        <ul className="flex gap-5 font-bold text-blue-950 text-sm">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#projecto">Projectos</a></li>
                            <li><a href="#quemSou">Quem sou</a></li>
                            <li><a href="#habilidade">Habildades</a></li>
                        </ul>
                    </nav>
                    <p className="tracking-wider">Obrigado pela visita! Vamos trabalhar juntos em algo incrível?</p>
                </div>
           </div>
            <div id="foot" className="gap-5 flex flex-col items-center tracking-wider font-thin">
                <p>leovigildojoao902@gmail.com © 2024 Leovigildo Loureiro João. Todos os direitos reservados.</p>
                <div className=" flex flex-row gap-5">
                    <SiGithub className="w-7 h-7"/>
                    <SiLinkedin className="w-7 h-7"/>
                </div>
            </div>
        </div>
       
    </footer>
}