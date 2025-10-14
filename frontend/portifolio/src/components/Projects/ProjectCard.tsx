import { motion } from "framer-motion";
import gitSvg from "../../assets/images/github.svg";
import { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="card-project bg-white min-w-[200px] max-w-[310px] w-full shadow-lg rounded-xl overflow-hidden"
    >
      <figure className="overflow-hidden">
        <img
          className="face hover:scale-110 transition-all"
          src={project.img}
          alt={project.nome}
        />
      </figure>
      <div className="p-5 text-center">
        <h2 className="font-bold text-primary">{project.nome}</h2>
        <p className="text-sm text-gray-600 mt-2">{project.miniDesc}</p>
      </div>
      <div className="w-full flex text-sm">
        <button
          onClick={() => onSelect(project)}
          className="w-full h-9 text-white bg-primary rounded-es-md hover:bg-primary_hover transition-all cursor-pointer"
        >
          Saiba mais
        </button>
        <input
          type="image"
          src={gitSvg}
          onClick={() => window.open(project.link, "_blank")}
          className="w-full h-9 flex items-center justify-center hover:bg-slate-100 transition-all rounded-ee-md border-primary border"
          alt="GitHub"
        />
      </div>
    </motion.div>
  );
}

