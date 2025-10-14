import { FaJava, FaReact } from "react-icons/fa";
import { RiMegaphoneFill, RiShakeHandsFill, RiSpaceShipFill, RiTrophyFill } from "react-icons/ri";
import { SiSpring, SiFlutter, SiDocker, SiGit, SiTypescript } from "react-icons/si";

export const iconMap = {
  // Soft Skills
  RiShakeHandsFill,
  RiMegaphoneFill, 
  RiSpaceShipFill,
  RiTrophyFill,
  
  // Hard Skills
  FaJava,
  FaReact,
  SiSpring,
  SiFlutter,
  SiDocker,
  SiGit,
  SiTypescript,
};

import React, { JSX } from "react";

export const getIconComponent = (iconName: string, className: string = ""): JSX.Element | null => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? React.createElement(IconComponent, { className }) : null;
};