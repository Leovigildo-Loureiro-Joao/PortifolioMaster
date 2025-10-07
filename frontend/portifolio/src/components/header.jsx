import { useState } from "react";


export const Header=()=>{

    const [links, setLinks] = useState([
    { href: "#home", data: "Home", check: "select" },
    { href: "#projecto", data: "Projectos", check: "" },
    { href: "#quemSou", data: "Quem sou", check: "" },
    { href: "#habilidades", data: "Habildades", check: "" },
  ]);


    function Select(key){
        setLinks(links =>
            links.map((element, idx) => ({
                ...element,
                check: idx === key ? "select" : "",
            }))
        );
    }

    return <header className="flex p-20 pb-0 w-full z-50 top-0 fixed">
        <nav id="menu" className="flex relative z-30">
            <div id="mobile">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className="flex flex-row gap-10">
                {
                    links.map((item,key)=>(
                        <li onClick={()=>Select(key)} className={item.check+" h-min cursor-pointer group flex flex-col"} key={key}>
                            <a href={item.href} className="hover:text-secondry transition-all">{item.data}</a>
                            <span
                                className={
                                    `h-[5px] rounded-boder_radius bg-primary transition-all  group-hover:w-full group-hover:bg-secondry
                                    ${item.check === "select" ? "opacity-100 w-full bg-primary" : "w-0"}`
                                }
                                />
                        </li>
                    ))
                }

            </ul>
        </nav>
        <div className="absolute inset-0 backdrop-blur-md bg-white/10 border-b border-white/20 z-10"></div>

    </header>
}