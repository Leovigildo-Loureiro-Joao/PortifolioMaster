
import forma from "../assets/Caminho6.png"
import gif from "../assets/f1d6a204-0a35-4b48-a849-8421515cda54.gif"
import grupo from "../assets/Grupo 3.jpg"

export const QuemSouEu=()=>{

    var info=[
        {
            "title":"Alcance Global",
            "info": " Meu objetivo é conectar pessoas através da tecnologia," 
                    +" criando interfaces intuitivas e soluções que possam ser usadas"
                    +"globalmente, adaptadas a diferentes contextos e necessidades"
        },
        {
            "title":"Paixão pelo Conhecimento",
            "info": " Tenho sede de aprendizado constante e adoro desafios" 
                    +"que me permitem crescer."
                    +"Seja explorando novas tecnologias ou desenvolvendo "
                    +"habilidades em design, estou sempre buscando expandir "
                    +"meu conhecimento"
        },
        {
            "title":"Criatividade e Autonomia",
            "info": "Gosto de unir criatividade e lógica para dar vida a projetos "
                            +"únicos."
                            +"Com uma mente aberta e autônoma, busco sempre inovar e" 
                            +"encontrar soluções eficientes para cada desafio"
        }
    ]

    return <>
          <div id="quemSou" className="pr-20 pb-20">
            <div id="block-left" className="flex flex-col items-end">
                <img src={grupo} alt="" className="img-bloco w-20"/>
                <div className="section-title flex flex-col">
                    <h1 className="text-xl font-bold text-primary">Quem sou</h1>
                    <span className="h-[5px] w-full rounded-boder_radius bg-primary "></span>
                </div>
            </div>
        
            <div id="my-data" className="flex flex-row-reverse justify-between">
                <div className="w-[40%]"> 
                   {
                    info.map((value,k)=>(
                         <div className={"data "+(k==1?" -translate-x-10":"")} key={k}>
                        <div className="title py-5 flex items-center gap-3"><div className="bg-[url(../assets/Elipse_38.png)] w-[35px] h-[35px] [background-size:35px_35px] flex justify-center [transform:rotateY('180')] items-center animate-[girar_1.5s_infinite_steps(500)]"><div className="bg-[url(../assets/Elipse_37.png)] w-[20px] h-[20px] [background-size:20px_20px] z-10 animate-[girarP_1s_infinite_steps(500)]"></div></div><h2>{value.title}</h2></div>
                        <p className="text-text_color text-left tracking-widest text-sm">
                           {value.info}
                        </p>
                        
                    </div>
                    ))
                   }
                    
                  
                </div>
                <div id="gif-animation" className="relative w-[40%]">
                    <img src={forma} alt="" className="absolute translate-x-[1px] translate-y-[0px] "/>
                    <img src={gif} alt="" className="w-[95%] "/>
                </div>
            </div>
        </div>
    </>
}