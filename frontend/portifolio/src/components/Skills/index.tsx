import { SoftSkills } from "./SoftSkills";
import { HardSkills } from "./HardSkills";
import { EngineeringApproach } from "./EngenieerAprovauh";

export const Skills = () => {
  return (
    <section id="habilidades" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <SoftSkills />
         <EngineeringApproach />
        <HardSkills />
      </div>
    </section>
  );
};