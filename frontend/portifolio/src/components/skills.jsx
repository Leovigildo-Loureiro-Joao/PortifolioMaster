import { FaReact } from "react-icons/fa";
import { SiSpring, SiFlutter,SiDocker, SiGit } from "react-icons/si";

export const  Skills=()=> {
  const softSkills = [
    {
      title: "Adaptabilidade",
      icon: "🤝",
      desc: "Consigo me ajustar bem a mudanças e acompanho o ritmo de crescimento do grupo."
    },
    {
      title: "Abertura ao feedback",
      icon: "📢",
      desc: "Estou sempre aberto a ouvir críticas construtivas para melhorar e crescer."
    },
    {
      title: "Motivação e apoio ao desenvolvimento",
      icon: "🚀",
      desc: "Gosto de inspirar e ajudar os outros a evoluir, dando meu máximo para ser uma referência positiva."
    },
    {
      title: "Competitividade saudável",
      icon: "🏆",
      desc: "Encaro desafios com entusiasmo e vejo a competição como uma forma de superação."
    }
  ];

  const hardSkills = [
    { name: "Flutter", icon:<SiFlutter className="w-12 h-12 mb-3"/>},
    { name: "Spring Boot", icon:<SiSpring className="w-12 h-12 mb-3"/>},
    { name: "React",  icon:<FaReact className="w-12 h-12 mb-3"/>},
    { name: "Docker",  icon:<SiDocker className="w-12 h-12 mb-3"/>},
    { name: "Git",  icon:<SiGit className="w-12 h-12 mb-3"/>},
  ];

  return (
    <section className="py-20 px-6 relative">
        <div class="absolute inset-0 -z-10 flex justify-center top-10">

            <div class="w-[30%] h-full bg-gray-100  -skew-y-6 origin-bottom-left"></div>

            <div class="w-[70%] h-full translate-y-14 bg-gray-100 skew-y-6 origin-bottom-right"></div>
        </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Soft Skills */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-6">
            Soft Skills (Habilidades sociais)
          </h2>
          <div className="grid gap-6">
            {softSkills.map((skill, i) => (
              <div 
                key={i} 
                className="p-5 rounded-2xl shadow-md bg-white hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-lg">{skill.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Skills */}
        <div>
          <h2 className="text-xl font-bold text-secondry mb-6">
            Hard Skills (Habilidades técnicas)
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {hardSkills.map((skill, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl shadow-md bg-white flex flex-col items-center hover:shadow-lg transition"
              >
                {skill.icon}
                <p className="text-gray-700 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
