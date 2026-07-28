import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useProjects } from "../../hooks/useProjects";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../../types/project";
import { LoadingSpinner } from "../UI/LoadingSprinner";
import { ErrorMessage } from "../UI/ErrorMessage";
import { ProjectFilters } from "./ProjectFilters";

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();
  const { projects, loading, error } = useProjects();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error}/>;
  }

  const filteredProjects = filter === "All"
    ? (Array.isArray(projects) ? projects : [])
    : (Array.isArray(projects)
        ? projects.filter((p) => p.type?.toLowerCase() === filter.toLowerCase())
        : []);

  const handleSelectProject = (project: Project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <section id="projecto" className="relative px-4 py-20 sm:px-6 md:px-10 lg:px-12">
      <div className="section-title flex w-full max-w-xs flex-col sm:px-4 md:px-10 lg:px-20">
        <h1 className="text-lg font-bold text-primary sm:text-xl">Projectos</h1>
        <span className="h-[5px] w-full rounded-boder_radius bg-gradient-to-r from-primary to-secondry"></span>
      </div>

      <ProjectFilters filter={filter} setFilter={setFilter} />

      <div className="relative w-full px-0 py-10 sm:px-2">
        <div className="mx-auto w-full max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="grid-card grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={handleSelectProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
