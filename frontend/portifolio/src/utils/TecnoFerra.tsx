import { JSX } from 'react';
import { FaCode, FaJava } from 'react-icons/fa';
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiSvelte,
  SiSpring, SiNodedotjs, SiExpress, SiNestjs, SiDjango, SiFlask,
  SiFlutter, SiIonic, SiSwift,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiSqlite,
  SiDocker, SiKubernetes, SiAmazon, SiGooglecloud,
  SiFirebase, SiVercel, SiNetlify,
  SiGit, SiGithub, SiGitlab, SiFigma, SiAdobexd,
  SiPostman, SiJest, SiCypress, SiEslint, SiPrettier,
  SiJavascript, SiTypescript, SiPython, SiGo, SiRust,
  SiCplusplus, SiPhp, SiRuby, SiKotlin
} from 'react-icons/si';

// Enum para todas as tecnologias suportadas
export enum SupportedTech {
  REACT = "react",
  NEXTJS = "nextjs",
  VUE = "vue",
  ANGULAR = "angular",
  SPRING = "spring",
  NODEJS = "nodejs",
  DOCKER = "docker",
  // ... adiciona todas as outras
}

// Tipo para as props do componente
interface TecnoFerraProps {
  icone: string;
  className?: string;
}

function TecnoFerra({ icone, className = "w-6 h-6" }: TecnoFerraProps): JSX.Element {
  const iconMap: Record<string, JSX.Element> = {
    // 🎨 Frontend
    "react": <SiReact className={className} />,
    "nextjs": <SiNextdotjs className={className} />,
    "vue": <SiVuedotjs className={className} />,
    "angular": <SiAngular className={className} />,
    "svelte": <SiSvelte className={className} />,
    
    // ⚙️ Backend
    "spring": <SiSpring className={className} />,
    "nodejs": <SiNodedotjs className={className} />,
    "express": <SiExpress className={className} />,
    "nestjs": <SiNestjs className={className} />,
    "django": <SiDjango className={className} />,
    "flask": <SiFlask className={className} />,
    
    // 📱 Mobile
    "flutter": <SiFlutter className={className} />,
    "ionic": <SiIonic className={className} />,
    "swift": <SiSwift className={className} />,
    
    // 🗄️ Database
    "mongodb": <SiMongodb className={className} />,
    "postgresql": <SiPostgresql className={className} />,
    "mysql": <SiMysql className={className} />,
    "redis": <SiRedis className={className} />,
    "sqlite": <SiSqlite className={className} />,
    
    // ☁️ Cloud & DevOps
    "docker": <SiDocker className={className} />,
    "kubernetes": <SiKubernetes className={className} />,
    "aws": <SiAmazon className={className} />,
    "gcp": <SiGooglecloud className={className} />,
    "firebase": <SiFirebase className={className} />,
    "vercel": <SiVercel className={className} />,
    "netlify": <SiNetlify className={className} />,
    
    // 🛠️ Tools
    "git": <SiGit className={className} />,
    "github": <SiGithub className={className} />,
    "gitlab": <SiGitlab className={className} />,
    "figma": <SiFigma className={className} />,
    "xd": <SiAdobexd className={className} />,
    "vscode": <FaCode className={className} />,
    "postman": <SiPostman className={className} />,
    "jest": <SiJest className={className} />,
    "cypress": <SiCypress className={className} />,
    "eslint": <SiEslint className={className} />,
    "prettier": <SiPrettier className={className} />,
    
    // 💻 Languages
    "javascript": <SiJavascript className={className} />,
    "typescript": <SiTypescript className={className} />,
    "python": <SiPython className={className} />,
    "java": <FaJava className={className} />,
    "go": <SiGo className={className} />,
    "rust": <SiRust className={className} />,
    "c++": <SiCplusplus className={className} />,
    "php": <SiPhp className={className} />,
    "ruby": <SiRuby className={className} />,
    "kotlin": <SiKotlin className={className} />
  };

  
  const normalizedIcon = icone.toLowerCase();
  return <>
          <div
             
              className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md 
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
               {iconMap[normalizedIcon] || <FaCode className={className} />}
              </div>

              {/* Anel pulsante */}
              <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-40 animate-pulse-slow"></div>
            </div>
          
          </>
}

export default TecnoFerra;