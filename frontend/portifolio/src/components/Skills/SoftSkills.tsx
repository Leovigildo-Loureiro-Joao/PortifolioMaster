import { motion } from "framer-motion";
import { softSkills } from "../../data/skills";
import { getIconComponent } from "../../utils/iconMap";
import { FiUsers, FiMessageCircle, FiAward, FiTrendingUp } from "react-icons/fi";

// Mapeamento de categorias para ícones
const categoryIcons = {
  mindset: FiTrendingUp,
  comunicacao: FiMessageCircle,
  lideranca: FiUsers,
  colaboracao: FiUsers,
};

export const SoftSkills = () => {
  return (
    <section id="soft-skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondry/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold md:text-[2rem]"
          >
            <span className="text-primary">Soft Skills</span> — 
            <span className="text-secondry"> A Força Humana</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base"
          >
            Tecnologia resolve problemas, mas são as pessoas que constroem soluções.
            Estas são as competências que levo para cada equipa.
          </motion.p>
        </div>

        {/* Grid de Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {softSkills.map((skill, i) => {
            const CategoryIcon = categoryIcons[skill.category as keyof typeof categoryIcons] || FiAward;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Card principal */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Header com ícone e categoria */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${
                        i % 2 === 0 
                          ? 'from-primary/20 to-primary/5' 
                          : 'from-secondry/20 to-secondry/5'
                      }`}>
                        {getIconComponent(skill.icon, `w-6 h-6 ${skill.iconColor}`)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 sm:text-xl">{skill.title}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <CategoryIcon className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-400 capitalize">
                            {skill.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Número (decorativo) */}
                    <span className="text-3xl font-bold text-gray-200 sm:text-4xl">0{i+1}</span>
                  </div>

                  {/* Descrição */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {skill.desc}
                  </p>

                  {/* Quote com aspas estilizadas */}
                  <div className="relative">
                    <span className="absolute -left-2 -top-2 text-3xl text-primary/20 sm:text-4xl">"</span>
                    <p className="text-sm italic text-gray-500 pl-4 border-l-2 border-primary/30">
                      {skill.quote}
                    </p>
                  </div>

                  {/* Barra de destaque inferior */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl ${
                    i % 2 === 0 ? 'bg-primary/30' : 'bg-secondry/30'
                  }`}></div>
                </div>

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/10 to-secondry/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
