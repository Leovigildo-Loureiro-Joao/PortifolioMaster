// data/mySelf.ts
import { 
  FiGlobe, FiZap, FiHeart, FiMapPin, 
  FiCalendar, FiGithub, FiCpu, FiAward,
  FiTarget, FiCode, FiServer, FiDatabase,
  FiCloud, FiShield, FiLayers
} from "react-icons/fi";

export const mySelf = [
  {
    title: "Desenvolvedor Full-Stack",
    info: "Desenvolvedor com experiência nas diferentes camadas de uma aplicação, desde interfaces frontend até APIs backend, modelação de dados e processos de deploy. Trabalho com React, Spring Boot e boas práticas para criar sistemas organizados e evolutivos.",
    icon: FiCode,
    stats: "Full-Stack Developer",
    highlight: "Desenvolvimento Full-Stack"
  },
  {
    title: "Desenvolvedor de Soluções Offline-First",
    info: "Desenvolvo soluções pensadas para ambientes com conectividade limitada, utilizando estratégias como cache local, armazenamento offline e sincronização inteligente para criar aplicações mais resilientes.",
    icon: FiLayers,
    stats: "Offline-First Development",
    highlight: "Arquitetura Offline-First"
  },
  {
    title: "Focado em Impacto Real",
    info: "Cada projeto desenvolvido procura resolver problemas reais através da tecnologia. Desde sistemas educacionais offline até aplicações focadas em segurança digital, acredito em criar soluções úteis e acessíveis.",
    icon: FiTarget,
    stats: "Tecnologia com Impacto",
    highlight: "Projetos com propósito"
  }
];

// Dados para a secção de impacto
export const impactMetrics = [
  { value: "5+", label: "Projetos Desenvolvidos", icon: FiGlobe },
  { value: "React", label: "Spring Boot", icon: FiServer },
  { value: "100%", label: "Código Próprio", icon: FiZap },
  { value: "3+", label: "Anos de Desenvolvimento", icon: FiAward }
];

// Timeline profissional
export const timeline = [
  {
    year: "2024",
    title: "SecureVault",
    description: "App mobile de gestão de senhas com encriptação AES-256 e autenticação biométrica",
    type: "mobile"
  },
  {
    year: "2025",
    title: "AudioLearn",
    description: "Plataforma TTS para aprendizagem de idiomas com ElevenLabs API",
    type: "web"
  },
  {
    year: "2025",
    title: "BaluarteInfo",
    description: "Desenvolvimento full-stack com Spring Boot e ReactJS, APIs REST e modelação de bases de dados",
    type: "web"
  },
  {
    year: "2026",
    title: "EduGestor",
    description: "Sistema escolar offline-first com sincronização inteligente e dashboards",
    type: "web"
  }
];

// Informações profissionais para a secção "Quem Sou"
export const professionalInfo = {
  name: "Leovigildo João",
  role: "Desenvolvedor Full-Stack",
  location: "Luanda, Angola",
  summary: "Desenvolvedor full-stack com experiência prática no desenvolvimento de aplicações web e mobile utilizando React, Spring Boot, Flutter e arquiteturas offline-first. Focado em criar sistemas robustos, seguros e escaláveis, aplicando boas práticas de engenharia de software para transformar ideias em soluções funcionais.",
  mission: "Criar tecnologia acessível e confiável, capaz de gerar impacto mesmo em ambientes com diferentes limitações.",
  careerObjective: "Contribuir para equipas de engenharia que desenvolvem soluções escaláveis, aplicando boas práticas de arquitetura, qualidade de código e evolução contínua.",
  technologies: ["React", "TypeScript", "Spring Boot", "Java", "Flutter", "Docker", "PostgreSQL", "Supabase"],
  experience: "3+ anos"
};

// Principais competências técnicas
export const keyCompetencies = [
  { name: "Frontend", icon: FiCode, skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", icon: FiServer, skills: ["Spring Boot", "Java", "APIs REST", "Microserviços"] },
  { name: "Database", icon: FiDatabase, skills: ["PostgreSQL", "Supabase", "Dexie.js", "IndexedDB"] },
  { name: "DevOps", icon: FiCloud, skills: ["Docker", "Vercel", "CI/CD", "Git"] },
  { name: "Mobile", icon: FiShield, skills: ["Flutter", "Dart", "Offline-First", "Sync"] },
  { name: "Arquitetura", icon: FiLayers, skills: ["Clean Architecture", "DDD", "SOLID", "Design Patterns"] }
];