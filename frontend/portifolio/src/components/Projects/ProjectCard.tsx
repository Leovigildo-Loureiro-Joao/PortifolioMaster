import { motion } from "framer-motion";
import gitSvg from "../../assets/images/github.svg";
import { Project } from "../../types/project";
import { FiCalendar, FiTag } from "react-icons/fi";

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
  else if (project.type === "DESKTOP") badges.push("Desktop App");
  else if (project.type === "BACKEND") badges.push("Backend");
  
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
  if (project.descricao.toLowerCase().includes("ia") || 
      project.descricao.toLowerCase().includes("inteligência artificial") ||
      project.descricao.toLowerCase().includes("machine learning")) {
    badges.push("AI/ML");
  }
  
  return badges.slice(0, 2); // Máximo 2 badges para não poluir
};

// Função para formatar data
const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", { 
    year: "numeric", 
    month: "short" 
  });
};

// Função para obter status do projeto
const getProjectStatus = (project: Project): { label: string; color: string } => {
  if (project.status === "testing") return { label: "Em teste", color: "bg-amber-100 text-amber-700" };
  if (project.status === "development") return { label: "Em desenvolvimento", color: "bg-blue-100 text-blue-700" };
  if (project.status === "paused") return { label: "Pausado", color: "bg-gray-100 text-gray-600" };
  if (project.status === "done") return { label: "Finalizado", color: "bg-green-100 text-green-700" };
  return { label: "Em produção", color: "bg-green-100 text-green-700" };
};

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  const badges = getProjectBadges(project);
  const status = getProjectStatus(project);
  
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
        
        {/* Badge de tipo (WEB/MOBILE/DESKTOP) - NOVO */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.type === "WEB" 
              ? "bg-primary/90 text-white" 
              : project.type === "MOBILE"
              ? "bg-secondry/90 text-white"
              : "bg-orange-500/90 text-white"
          }`}>
            {project.type}
          </span>
        </div>
        
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-[0.65rem] font-medium ${status.color}`}>
            {status.label}
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
        <div className="flex items-start justify-between gap-2 mb-2">
          <h2 className="text-base font-bold text-primary sm:text-lg">{project.nome}</h2>
          {project.abertura && (
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <FiCalendar className="w-3 h-3" />
              <span>{formatDate(project.abertura)}</span>
            </div>
          )}
        </div>
        
        <p className="line-clamp-2 text-sm text-gray-600 mb-3">{project.mini_desc}</p>
        
        {/* Tecnologias principais (primeiras 3) - NOVO */}
        <div className="flex flex-wrap gap-2">
          {Array.isArray(project.tecno) && project.tecno.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-[0.7rem] text-gray-600 sm:text-xs"
            >
              <FiTag className="w-3 h-3" />
              {tech}
            </span>
          ))}
          {Array.isArray(project.tecno) && project.tecno.length > 3 && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-[0.7rem] text-gray-500 sm:text-xs">
              +{project.tecno.length - 3}
            </span>
          )}
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
