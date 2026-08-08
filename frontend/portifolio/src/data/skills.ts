// data/skills.ts
import { 
  FaJava, FaReact, FaDocker, FaGitAlt, FaNodeJs, FaAws,
  FaDatabase, FaLock, FaMobile
} from "react-icons/fa";
import { 
  SiSpring, SiFlutter, SiTypescript, SiPostgresql, 
  SiMysql, SiSupabase, SiTailwindcss, SiDart,
  SiHive, SiFramer, SiVite,
  SiCloudinary, SiPostman
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

// Hard Skills com níveis de proficiência
export const hardSkills = [
  { 
    name: "Java", 
    icon: FaJava,
    level: "Avançado", // nível de proficiência
    category: "backend",
    color: "#007396",
    projects: ["AudioLearn", "Portfolio Vision"]
  },
  { 
    name: "Spring Boot", 
    icon: SiSpring,
    level: "Intermédio-Avançado",
    category: "backend",
    color: "#6DB33F",
    projects: ["AudioLearn", "Portfolio Vision"]
  },
  { 
    name: "React", 
    icon: FaReact,
    level: "Avançado",
    category: "frontend",
    color: "#61DAFB",
    projects: ["EduGestor", "AudioLearn", "Portfolio Vision"]
  },
  { 
    name: "TypeScript", 
    icon: SiTypescript,
    level: "Intermédio-Avançado",
    category: "frontend",
    color: "#3178C6",
    projects: ["EduGestor", "AudioLearn", "Portfolio Vision"]
  },
  { 
    name: "Flutter", 
    icon: SiFlutter,
    level: "Intermédio",
    category: "mobile",
    color: "#02569B",
    projects: ["SecureVault"]
  },
  { 
    name: "Dart", 
    icon: SiDart,
    level: "Intermédio",
    category: "mobile",
    color: "#0175C2",
    projects: ["SecureVault"]
  },
  { 
    name: "PostgreSQL", 
    icon: SiPostgresql,
    level: "Intermédio",
    category: "database",
    color: "#4169E1",
    projects: ["Portfolio Vision", "AudioLearn"]
  },
  { 
    name: "Supabase", 
    icon: SiSupabase,
    level: "Intermédio-Avançado",
    category: "database",
    color: "#3ECF8E",
    projects: ["EduGestor"]
  },
  { 
    name: "Docker", 
    icon: FaDocker,
    level: "Intermédio",
    category: "devops",
    color: "#2496ED",
    projects: ["Portfolio Vision", "AudioLearn"]
  },
  { 
    name: "Git", 
    icon: FaGitAlt,
    level: "Avançado",
    category: "tools",
    color: "#F05032",
    projects: ["Todos"]
  },
  { 
    name: "Tailwind", 
    icon: SiTailwindcss,
    level: "Intermédio-Avançado",
    category: "frontend",
    color: "#06B6D4",
    projects: ["EduGestor", "AudioLearn"]
  },
  { 
    name: "Dexie.js", 
    icon: FaDatabase,
    level: "Intermédio",
    category: "database",
    color: "#4B8BBE",
    projects: ["EduGestor"]
  }
];

// Soft Skills (mantém as tuas, só adiciona categoria)
export const softSkills = [
  {
    title: "Adaptabilidade",
    icon: "RiShakeHandsFill",
    iconColor: "text-primary",
    desc: "Consigo me ajustar bem a mudanças e acompanho o ritmo de crescimento do grupo.",
    quote: "A flexibilidade é o segredo da evolução silenciosa.",
    category: "mindset"
  },
  {
    title: "Abertura ao feedback",
    icon: "RiMegaphoneFill",
    iconColor: "text-secondry",
    desc: "Estou sempre aberto a ouvir críticas construtivas para melhorar e crescer.",
    quote: "Ouvir é a ponte entre o que somos e o que podemos ser.",
    category: "comunicacao"
  },
  {
    title: "Motivação e apoio ao desenvolvimento",
    icon: "RiSpaceShipFill",
    iconColor: "text-primary",
    desc: "Gosto de inspirar e ajudar os outros a evoluir, dando meu máximo para ser uma referência positiva.",
    quote: "Quem acende luz nos outros nunca fica no escuro.",
    category: "lideranca"
  },
  {
    title: "Competitividade saudável",
    icon: "RiTrophyFill",
    iconColor: "text-secondry",
    desc: "Encaro desafios com entusiasmo e vejo a competição como uma forma de superação.",
    quote: "A verdadeira vitória é sobre o teu eu de ontem.",
    category: "mindset"
  },
];