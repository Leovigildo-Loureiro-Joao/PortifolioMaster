import { FaJava, FaReact } from "react-icons/fa";
 import { motion } from "framer-motion";
import { RiMegaphoneFill, RiShakeHandsFill, RiSpaceShipFill, RiTrophyFill } from "react-icons/ri";
import { SiSpring, SiFlutter,SiDocker, SiGit } from "react-icons/si";

export const  Skills=()=> {
 

  const softSkills = [ 
    {
      title: "Adaptabilidade",
      icon: <RiShakeHandsFill className="w-6 h-6 text-primary" />,
      desc: "Consigo me ajustar bem a mudanças e acompanho o ritmo de crescimento do grupo.",
      quote: "A flexibilidade é o segredo da evolução silenciosa."
    },
    {
      title: "Abertura ao feedback",
      icon: <RiMegaphoneFill className="w-6 h-6 text-secondry" />,
      desc: "Estou sempre aberto a ouvir críticas construtivas para melhorar e crescer.",
      quote: "Ouvir é a ponte entre o que somos e o que podemos ser."
    },
    {
      title: "Motivação e apoio ao desenvolvimento",
      icon: <RiSpaceShipFill className="w-6 h-6 text-primary" />,
      desc: "Gosto de inspirar e ajudar os outros a evoluir, dando meu máximo para ser uma referência positiva.",
      quote: "Quem acende luz nos outros nunca fica no escuro."
    },
    {
      title: "Competitividade saudável",
      icon: <RiTrophyFill className="w-6 h-6 text-secondry" />,
      desc: "Encaro desafios com entusiasmo e vejo a competição como uma forma de superação.",
      quote: "A verdadeira vitória é sobre o teu eu de ontem."
    },
  ];


  const hardSkills = [
     { name: "Java",  icon:<FaJava className="w-8 h-8"/>},
     { name: "Flutter", icon:<SiFlutter className="w-8 h-8"/>},
      { name: "Spring Boot", icon:<SiSpring className="w-8 h-8"/>},
    ,
    
      { name: "React",  icon:<FaReact className="w-8 h-8"/>},
      { name: "Docker",  icon:<SiDocker className="w-8 h-8"/>},
    ,
    { name: "Git",  icon:<SiGit className="w-8 h-8"/>},
  ];

  return (
    <section id="habilidades" className="py-20 px-6 relative">
      
      <div className="max-w-6xl mx-auto flex flex-col  gap-20">
        
        {/* Soft Skills */}
        <section id="soft-skills" className="py-24 px-6 bg-gradient-to-b from-gray-via-transparent to-gray-100 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Soft Skills — <span className="text-secondry">A Força Humana</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {softSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="relative group p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 p-3 rounded-full backdrop-blur-md">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg">{skill.title}</h3>
              </div>
              <p className="text-gray-700 mb-3">{skill.desc}</p>
              <p className="text-xs italic text-gray-500 group-hover:text-secondry transition">
                “{skill.quote}”
              </p>

              {/* Glow sutil no hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-secondry/10 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

        {/* Hard Skills */}
       
    <section id="habilidades" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-xl font-bold text-secondry mb-4">
          Hard Skills (Habilidades técnicas)
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {hardSkills.map((skill, i) => (
            <div
              key={i}
              className="group relative flex items-center justify-center w-[70px] h-[70px] rounded-full bg-white shadow-md 
                        hover:shadow-[0_0_25px_var(--color-primary)] transition-all duration-500
                        hover:scale-110 hover:rotate-[6deg] cursor-pointer"
            >
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                           bg-gradient-to-tr from-primary/30 to-transparent blur-md transition-all duration-700"
              ></div>

              <div
                className="relative text-gray-700 group-hover:text-primary transform transition-transform duration-700 group-hover:rotate-[360deg]"
              >
                {skill.icon}
              </div>

              {/* Anel pulsante */}
              <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-40 animate-pulse-slow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  

      </div>
    </section>
  );
}
