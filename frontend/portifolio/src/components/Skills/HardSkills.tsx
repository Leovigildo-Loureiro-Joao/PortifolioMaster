import { hardSkills } from "../../data/skills";
import { getIconComponent } from "../../utils/iconMap";
import { SiTypescript } from "react-icons/si";
export const HardSkills = () => {
  return (
    <section id="hard-skills" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-xl font-bold text-secondry mb-4">
          Hard Skills (Habilidades técnicas)
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {hardSkills.map((skill, i) => (
            <div
              key={i}
              className="group relative flex items-center justify-center w-[70px] h-[70px] rounded-full bg-white shadow-md 
                        hover:shadow-[0_0_25px_var(--color-primary)] transition-all duration-500
                        hover:scale-110 hover:rotate-[6deg] cursor-pointer"
            >
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                           bg-gradient-to-tr from-primary/30 to-transparent blur-md transition-all duration-700"
              ></div>

              <div
                className="relative text-gray-700 group-hover:text-primary transform transition-transform duration-700 group-hover:rotate-[360deg]"
              >
                {getIconComponent(skill.iconName, "w-8 h-8")}
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-40 animate-pulse-slow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};