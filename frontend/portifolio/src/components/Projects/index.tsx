import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProjects } from "../../hooks/useProjects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "../../types/project";
import { LoadingSpinner } from "../UI/LoadingSprinner";
import { ErrorMessage } from "../UI/ErrorMessage";
import { ProjectFilters } from "./ProjectFilters";

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const { projects, loading, error } = useProjects();

  // 🔹 Usando loading e error do hook
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

const filteredProjects = filter === "All" 
    ? (Array.isArray(projects) ? projects : [])
    : (Array.isArray(projects) 
        ? projects.filter((p) => p.type?.toLowerCase() === filter.toLowerCase())
        : []);

  return (
    <div id="projecto" className="py-20 px-12 relative">
      {/* 🔹 Título */}
      <div className="section-title px-20 flex flex-col w-52">
        <h1 className="text-xl font-bold text-primary">Projectos</h1>
        <span className="h-[5px] w-full rounded-boder_radius bg-gradient-to-r from-primary to-secondry"></span>
      </div>

      {/* 🔹 Filtros */}
      <ProjectFilters filter={filter} setFilter={setFilter} />

      <div className="relative w-full px-4 py-10">
  <div className="w-full max-w-7xl mx-auto">
    <AnimatePresence mode="wait">
      <motion.div
        key={filter}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="
          grid-card
          grid gap-4 w-full
          grid-cols-1                    /* 📱 Mobile: 1 coluna */
          sm:grid-cols-2                 /* 📟 Tablet pequeno: 2 colunas */
          md:grid-cols-2
          
          lg:grid-cols-3  /* 📟 Tablet: 2 → 💻 Desktop: 3 */
          xl:grid-cols-4                 /* 🖥️ Desktop grande: 4 colunas */
          2xl:grid-cols-5                /* 🖥️💎 Tela enorme: 5 colunas */
        "
      >
        {
       
          filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))
        
        }
      </motion.div>
    </AnimatePresence>
  </div>
</div>

      {/* 🔹 Modal */}
      <ProjectModal
        selected={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};