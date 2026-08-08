import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hardSkills } from "../../data/skills";
import { FiCode, FiDatabase, FiBox, FiTool, FiSmartphone, FiLayout } from "react-icons/fi";

// Categorias com ícones
const categories = [
  { id: "all", name: "Todas", icon: FiCode },
  { id: "frontend", name: "Frontend", icon: FiLayout },
  { id: "backend", name: "Backend", icon: FiBox },
  { id: "mobile", name: "Mobile", icon: FiSmartphone },
  { id: "database", name: "Database", icon: FiDatabase },
  { id: "devops", name: "DevOps", icon: FiTool },
  { id: "tools", name: "Ferramentas", icon: FiTool },
];

export const HardSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === "all" 
    ? hardSkills 
    : hardSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="hard-skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-2xl font-bold text-primary md:text-[1.9rem]">
            Hard Skills — <span className="text-secondry">Stack Técnica</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
            Tecnologias utilizadas na construção dos meus projetos, aplicando-as de acordo com as necessidades de cada solução.
          </p>
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all sm:text-sm ${
                selectedCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Grid de Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Card da Skill */}
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Ícone com cor da tecnologia */}
                  <div className="relative mb-3 flex justify-center">
                    <div 
                      className="flex h-16 w-16 items-center justify-center rounded-full text-3xl transition-all duration-300 group-hover:scale-110 sm:text-4xl"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </div>
                  </div>

                  {/* Nome da tecnologia */}
                  <h3 className="mb-2 text-center text-sm font-semibold text-gray-800 sm:text-base">
                    {skill.name}
                  </h3>

                  {/* Nível de proficiência */}
                  <div className="mb-3 flex justify-center">
                    <span
                      className="rounded-full px-3 py-1 text-[0.65rem] font-medium sm:text-xs"
                      style={{ backgroundColor: `${skill.color}1A`, color: skill.color }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Projetos associados (tooltip no hover) */}
                  <AnimatePresence>
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs rounded-lg p-2 whitespace-nowrap z-10"
                      >
                        <div className="font-semibold mb-1">Usado em:</div>
                        <div className="flex gap-1">
                          {skill.projects.map((proj, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-700 rounded-full">
                              {proj}
                            </span>
                          ))}
                        </div>
                        {/* Seta do tooltip */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
