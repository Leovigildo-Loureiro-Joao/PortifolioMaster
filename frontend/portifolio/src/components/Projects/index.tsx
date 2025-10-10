import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProjects } from "../../hooks/useProjects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "../../types/project";
import { LoadingSpinner } from "../UI/LoadingSprinner";
import { ErrorMessage } from "../UI/ErrorMessage";
import { ProjectFilters } from "./ProjectList";

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
    ? projects 
    : projects.filter((p) => p.type.toLowerCase() === filter.toLowerCase());

  return (
    <div id="projecto" className="py-20 relative">
      {/* 🔹 Título */}
      <div className="section-title px-20 flex flex-col w-52">
        <h1 className="text-xl font-bold text-primary">Projectos</h1>
        <span className="h-[5px] w-full rounded-boder_radius bg-gradient-to-r from-primary to-secondry"></span>
      </div>

      {/* 🔹 Filtros */}
      <ProjectFilters filter={filter} setFilter={setFilter} />

      {/* 🔹 Grid de Projetos */}
      <div className="relative flex justify-center items-center gap-10 p-10">
        <div className="overflow-hidden p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
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