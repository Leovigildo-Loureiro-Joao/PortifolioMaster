import { motion, Variants } from "framer-motion";
import { useState } from "react";
import forma from "../../assets/images/Caminho6.png";
import perfil from "../../assets/images/perfil.png";
import { mySelf, impactMetrics, timeline, professionalInfo, keyCompetencies } from "../../data/mySelf";
import { 
  FiMapPin, FiCpu, FiCalendar, FiGithub, 
  FiClock, FiCode, FiServer, FiUsers,
  FiTarget, FiLayers, FiExternalLink
} from "react-icons/fi";

export const MySelf = () => {
  const [activeTab, setActiveTab] = useState<"about" | "timeline" | "skills">("about");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'work': return <FiServer className="w-3 h-3" />;
      case 'startup': return <FiTarget className="w-3 h-3" />;
      case 'web': return <FiCode className="w-3 h-3" />;
      case 'mobile': return <FiLayers className="w-3 h-3" />;
      default: return <FiCode className="w-3 h-3" />;
    }
  };

  const getTimelineColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-green-100 text-green-600';
      case 'startup': return 'bg-orange-100 text-orange-600';
      case 'web': return 'bg-blue-100 text-blue-600';
      case 'mobile': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getTimelineLabel = (type: string) => {
    switch (type) {
      case 'work': return 'Trabalho';
      case 'startup': return 'Startup';
      case 'web': return 'Web';
      case 'mobile': return 'Mobile';
      default: return 'Projeto';
    }
  };

  return (
    <section
      id="quemSou"
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white px-4 py-24 sm:px-6 md:px-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondry/5 blur-3xl"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondry/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-primary">Quem</span>{" "}
            <span className="text-secondry">Sou</span>
          </h1>
          <div className="flex justify-center gap-2 mb-4">
            <span className="w-16 h-1 bg-primary rounded-full"></span>
            <span className="w-16 h-1 bg-secondry rounded-full"></span>
          </div>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
            {professionalInfo.summary}
          </p>
        </motion.div>

        {/* Quick Stats / Impact Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {impactMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all group"
              >
                <div className="flex justify-center mb-2 text-primary group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-lg font-bold text-primary sm:text-xl">{metric.value}</div>
                <div className="text-[0.7rem] text-gray-500 sm:text-xs">{metric.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tabs: About / Timeline / Skills */}
        <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={() => setActiveTab("about")}
            className={`flex items-center justify-center gap-2 rounded-full px-5 py-2 font-medium transition-all sm:px-6 ${
              activeTab === "about"
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <FiUsers className="w-4 h-4" />
            Sobre mim
          </button>
          <button
            onClick={() => setActiveTab("timeline")}
            className={`flex items-center justify-center gap-2 rounded-full px-5 py-2 font-medium transition-all sm:px-6 ${
              activeTab === "timeline"
                ? "bg-secondry text-white shadow-lg shadow-secondry/30"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <FiClock className="w-4 h-4" />
            Trajetória
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`flex items-center justify-center gap-2 rounded-full px-5 py-2 font-medium transition-all sm:px-6 ${
              activeTab === "skills"
                ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <FiTarget className="w-4 h-4" />
            Competências
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-12">
          {/* Text Content - Changes based on tab */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full space-y-6 md:w-2/5"
          >
            {activeTab === "about" ? (
              // About content
              <motion.div variants={containerVariants} className="space-y-6">
                {mySelf.map((block, i) => {
                  const IconComponent = block.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: -5 }}
                      className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all cursor-default relative overflow-hidden"
                    >
                      {/* Highlight bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondry"></div>
                      
                      <div className="flex items-start gap-3">
                        <div className="text-primary">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <h2 className="text-base font-semibold text-gray-900 sm:text-lg">
                              {block.title}
                            </h2>
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                              {block.highlight}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-gray-600">
                            {block.info}
                          </p>
                          <div className="mt-3 text-xs text-secondry font-medium">
                            {block.stats}
                          </div>
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/5 to-secondry/5 transition-opacity duration-500"></div>
                    </motion.div>
                  );
                })}

                {/* Mission & Objective */}
                <motion.div
                  variants={itemVariants}
                  className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondry/5 border border-primary/10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <FiTarget className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-primary">Missão</span>
                  </div>
                  <p className="text-sm text-gray-700 italic">"{professionalInfo.mission}"</p>
                </motion.div>
              </motion.div>
            ) : activeTab === "timeline" ? (
              // Timeline content
              <motion.div variants={containerVariants} className="space-y-4">
                <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-gray-800 sm:text-lg">
                  <FiCalendar className="text-primary" />
                  Evolução profissional
                </h3>
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 pb-6 border-l-2 border-gray-200 last:border-0 last:pb-0 group"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondry group-hover:scale-125 transition-transform"></div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-primary">{item.year}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${getTimelineColor(item.type)}`}>
                          {getTimelineIcon(item.type)}
                          {getTimelineLabel(item.type)}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-gray-800 sm:text-base">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Skills content
              <motion.div variants={containerVariants} className="space-y-4">
                <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-gray-800 sm:text-lg">
                  <FiTarget className="text-green-500" />
                  Competências-chave
                </h3>
                {keyCompetencies.map((comp, index) => {
                  const IconComponent = comp.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: -5 }}
                      className="p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-primary">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-semibold text-gray-800">{comp.name}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {comp.skills.map((skill, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative flex w-full max-w-xl items-center justify-center md:w-[45%]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Background shape */}
            <img
              src={forma}
              alt=""
              className="absolute w-[110%] animate-pulse-slow opacity-30"
              aria-hidden="true"
            />
            
            {/* Main image */}
            <motion.img
              src={perfil}
              alt="Leovigildo João - Engenheiro de Software Full-Stack"
              className="relative z-10 w-full rounded-2xl border-4 border-white/50 shadow-2xl md:w-[90%]"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Floating badge - Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-2 right-2 z-20 flex items-center gap-2 rounded-xl bg-white p-3 shadow-lg sm:-bottom-4 sm:-right-4"
            >
              <FiMapPin className="text-primary" />
              <span className="text-xs font-medium sm:text-sm">{professionalInfo.location}</span>
            </motion.div>

            {/* Floating badge - Role */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-2 left-2 z-20 flex items-center gap-2 rounded-xl bg-white p-3 shadow-lg sm:-top-4 sm:-left-4"
            >
              <FiCode className="text-secondry" />
              <span className="text-xs font-medium sm:text-sm">{professionalInfo.role}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* GitHub Stats / Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="https://github.com/Leovigildo-Loureiro-Joao"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            <FiGithub className="w-5 h-5" />
            <span>Ver código no GitHub</span>
            <span className="text-sm bg-white/20 px-2 py-1 rounded-full group-hover:bg-white/30 transition">
              5+ projetos
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/leovigildo-loureiro-joao/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            <FiExternalLink className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
