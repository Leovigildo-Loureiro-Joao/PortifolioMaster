import { motion } from "framer-motion";
import gitSvg from "../../assets/images/github.svg";
import { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

// Função para determinar badges baseado no tipo e tecnologias
const getProjectBadges = (project: Project): string[] => {
  const badges: string[] = [];
  
  // Badge baseado no tipo
  if (project.type === "WEB") badges.push("Web App");
  else if (project.type === "MOBILE") badges.push("Mobile App");
  
  // Badges baseados na descrição (se tiver palavras-chave)
  if (project.descricao.toLowerCase().includes("offline")) {
    badges.push("Offline-First");
  }
  if (project.descricao.toLowerCase().includes("escalável") || 
      project.descricao.toLowerCase().includes("escalavel")) {
    badges.push("Escalável");
  }
  if (project.descricao.toLowerCase().includes("segurança") || 
      project.descricao.toLowerCase().includes("security")) {
    badges.push("Security-Focused");
  }
  
  return badges.slice(0, 2); // Máximo 2 badges para não poluir
};

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  const badges = getProjectBadges(project);
  
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group card-project flex h-full w-full flex-col rounded-xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Imagem com overlay e badge de tipo */}
      <figure className="h-52 overflow-hidden bg-slate-100 relative">
        <img
          className="face h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          src={project.img}
          alt={project.nome}
        />
        
        {/* Badge de tipo (WEB/MOBILE) - NOVO */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.type === "WEB" 
              ? "bg-primary/90 text-white" 
              : "bg-secondry/90 text-white"
          }`}>
            {project.type}
          </span>
        </div>
        
        {/* Badges de impacto - NOVO */}
        {badges.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-2">
            {badges.map((badge, index) => (
              <span 
                key={index}
              className="rounded-full bg-black/60 px-2 py-1 text-[0.7rem] text-white backdrop-blur-sm sm:text-xs"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </figure>

      {/* Conteúdo */}
      <div className="flex-1 p-5">
        <h2 className="mb-2 text-base font-bold text-primary sm:text-lg">{project.nome}</h2>
        <p className="line-clamp-2 text-sm text-gray-600">{project.mini_desc}</p>
        
        {/* Tecnologias principais (primeiras 3) - NOVO */}
        <div className="flex flex-wrap gap-2 mt-3">
          {Array.isArray(project.tecno) && project.tecno.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="rounded-full bg-gray-100 px-2 py-1 text-[0.7rem] text-gray-600 sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Acções */}
      <div className="flex w-full border-t border-gray-100 text-xs sm:text-sm">
        <button
          onClick={() => onSelect(project)}
          className="flex-1 h-10 text-white bg-primary hover:bg-primary_hover transition-all flex items-center justify-center gap-2"
        >
          <span>Ver detalhes</span>
          <span className="text-base sm:text-lg">→</span>
        </button>
        <button
          onClick={() => window.open(project.link, "_blank")}
          className="flex-1 h-10 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all border-l"
        >
          <img src={gitSvg} className="w-4 h-4" alt="GitHub" />
          <span className="text-gray-600">Código</span>
        </button>
      </div>
    </motion.div>
  );
};
