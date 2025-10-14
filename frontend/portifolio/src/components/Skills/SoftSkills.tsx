import { motion } from "framer-motion";
import { softSkills } from "../../data/skills";
import { getIconComponent } from "../../utils/iconMap";

export const SoftSkills = () => {
  return (
    <section id="soft-skills" className="py-24 px-6 bg-gradient-to-b from-gray-via-transparent to-gray-100 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Soft Skills — <span className="text-secondry">A Força Humana</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {softSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="relative group p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 p-3 rounded-full backdrop-blur-md">
                  {getIconComponent(skill.iconName, `w-6 h-6 ${skill.iconColor}`)}
                </div>
                <h3 className="font-semibold text-lg">{skill.title}</h3>
              </div>
              <p className="text-gray-700 mb-3">{skill.desc}</p>
              <p className="text-xs italic text-gray-500 group-hover:text-secondry transition">
                “{skill.quote}”
              </p>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-secondry/10 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};