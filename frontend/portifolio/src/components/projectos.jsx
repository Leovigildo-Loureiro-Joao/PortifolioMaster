import rightBack from "../assets/icons8_back_7.png"
import leftBack from "../assets/icons8_back_8.png"
import codeIcone from "../assets/code_70x70.png"
import xdIcone from "../assets/xd.png"
import springIcone from "../assets/icons8_spring_logo.png"
import reactIcone from "../assets/icons8_react_native_2.png"
import gitSvg from "../assets/github.svg"
import projetImage from "../assets/Imagem 1.png"
import projetImage2 from "../assets/Web 1920 – 10.png"
import imagem from "../assets/Grupo12.png"
import { useState } from "react"

export const Projectos=()=>{

    const [projectos,setProjectos]= useState([
        {
            "img":projetImage,
            "img2":projetImage2,
            "nome":"TechClass",
            "mini_desc":"Uma plataforma de cursos online.",
            "desc":" Uma plataforma para cursos online, focada na experiência"
                    +"do aluno e no acompanhamento de progresso."
                    +"Focado no ensino de Angola, onde a ideia é levar o ensino a "
                    +"cada canto de uma maneira simples, equilibrada e divertida "
                    +"onde ate os alunos ou professores podem partilhar o que sabem"
                    +"se tornando instrutores",
            "obje": "Permitir um ensino adequado em Angola através de cursos online que a plataforma disponibilizara de forma paga ou gratuita",
            "lance": "Indeterminado",
            "abertura": "--/--/--",
            "tecno":["react","spring","xd","code"]

        }, {
            "img":projetImage,
            "img2":projetImage2,
            "nome":"TechClass",
            "mini_desc":"Uma plataforma de cursos online.",
            "desc":" Uma plataforma para cursos online, focada na experiência"
                    +"do aluno e no acompanhamento de progresso."
                    +"Focado no ensino de Angola, onde a ideia é levar o ensino a "
                    +"cada canto de uma maneira simples, equilibrada e divertida "
                    +"onde ate os alunos ou professores podem partilhar o que sabem"
                    +"se tornando instrutores",
            "obje": "Permitir um ensino adequado em Angola através de cursos online que a plataforma disponibilizara de forma paga ou gratuita",
            "lance": "Indeterminado",
            "abertura": "--/--/--",
            "tecno":["react","spring","xd","code"]

        }, {
            "img":projetImage,
            "img2":projetImage2,
            "nome":"TechClass",
            "mini_desc":"Uma plataforma de cursos online.",
            "desc":" Uma plataforma para cursos online, focada na experiência"
                    +"do aluno e no acompanhamento de progresso."
                    +"Focado no ensino de Angola, onde a ideia é levar o ensino a "
                    +"cada canto de uma maneira simples, equilibrada e divertida "
                    +"onde ate os alunos ou professores podem partilhar o que sabem"
                    +"se tornando instrutores",
            "obje": "Permitir um ensino adequado em Angola através de cursos online que a plataforma disponibilizara de forma paga ou gratuita",
            "lance": "Indeterminado",
            "abertura": "--/--/--",
            "tecno":["react","spring","xd","code"]

        }, {
            "img":projetImage,
            "img2":projetImage2,
            "nome":"TechClass",
            "mini_desc":"Uma plataforma de cursos online.",
            "desc":" Uma plataforma para cursos online, focada na experiência"
                    +"do aluno e no acompanhamento de progresso."
                    +"Focado no ensino de Angola, onde a ideia é levar o ensino a "
                    +"cada canto de uma maneira simples, equilibrada e divertida "
                    +"onde ate os alunos ou professores podem partilhar o que sabem"
                    +"se tornando instrutores",
            "obje": "Permitir um ensino adequado em Angola através de cursos online que a plataforma disponibilizara de forma paga ou gratuita",
            "lance": "Indeterminado",
            "abertura": "--/--/--",
            "tecno":["react","spring","xd","code"]

        }
    ])

    function TecnoFerra(icone) {
        switch (icone) {
            case "react":
               return reactIcone
            case "spring":
               return springIcone
            case "xd":
                return xdIcone
            case "code":
                return codeIcone
        }
    }

    return  <div id="projecto" className="py-20">
                <div className="section-title px-20 flex flex-col w-52">
                    <h1 className="text-xl font-bold text-primary">Projectos</h1>
                    <span className="h-[5px] w-full rounded-boder_radius bg-primary "></span>
                </div>

                <div id="block-project" className="relative flex justify-between items-center gap-10 p-20">
                    <div class="absolute inset-0 -z-10 flex justify-center top-20">

                        <div class="w-1/2 h-full bg-gray-100 -skew-y-6 origin-bottom-left"></div>

                        <div class="w-1/2 h-full bg-gray-100 skew-y-6 origin-bottom-right"></div>
                    </div>
                    <input type="image" className="h-[30px]" src={rightBack} alt=""/>
                    <div id="grid" className="overflow-hidden p-5">
                        <div id="grid-project" className="flex gap-x-5">
                            {
                                projectos.map((value,key)=>(
                                    <div className="card-project bg-white min-w-[310px] w-[310px] pb-0 shadow-lg rounded-md" key={key}>
                                        <div className=" p-5  card-block flex justify-center flex-col items-center gap-3">
                                            <figure className="overflow-hidden">
                                                <img className="face hover:scale-110 transition-all transition-transform" src={value.img} alt=""/>
                                            </figure>
                                            <h2 className="title-project text-text_color font-bold text-base">{value.nome}</h2>
                                            <div className="tecno flex flex-col gap-5">
                                                <h3 className="text-sm tracking-wider text-secondry">Tecnologias e Ferramentas</h3>
                                                <div className="flex gap-5 ">
                                                   {value.tecno.map((v,k)=>(
                                                    <img className="w-[30px] hover:scale-x-50 transition-all" key={k} src={TecnoFerra(v)}/>
                                                   ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex text-sm">
                                            <input type="button" className="w-full h-9 text-white bg-primary rounded-es-md" value="Saiba mais"/>
                                            <input type="image" src={gitSvg} className="w-full h-9 flex items-center justify-center rounded-ee-md border-primary border" value="Ver prototipo"/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <input type="image" className=" h-[30px]" src={leftBack} alt=""/>
                </div>
                
                
           
        
    </div>
}