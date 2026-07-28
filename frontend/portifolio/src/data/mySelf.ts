// data/mySelf.ts
import { 
  FiGlobe, FiZap, FiHeart, FiMapPin, 
  FiCalendar, FiGithub, FiCpu, FiAward,
  FiTarget, FiCode, FiServer, FiDatabase,
  FiCloud, FiShield, FiLayers
} from "react-icons/fi";

export const mySelf = [
  {
    title: "Engenheiro de Software Full-Stack",
    info: "Desenvolvedor com experiência em todas as camadas de uma aplicação - do frontend ao backend, da modelação de dados ao deploy. Especializado em React, Spring Boot e arquiteturas escaláveis.",
    icon: FiCode,
    stats: "Full-Stack Developer",
    highlight: "Todas as camadas"
  },
  {
    title: "Arquiteto de Soluções Offline-First",
    info: "Especialista em sistemas que funcionam onde a internet é instável. Arquiteturas com sincronização inteligente, cache local e resiliência - levando tecnologia a quem mais precisa.",
    icon: FiLayers,
    stats: "Offline-first Expert",
    highlight: "Arquitetura escalável"
  },
  {
    title: "Focado em Impacto Real",
    info: "Cada projeto que construo resolve um problema concreto. Do EduGestor (gestão escolar offline) ao SecureVault (segurança digital) - tecnologia deve ser acessível e transformadora.",
    icon: FiTarget,
    stats: "Tech for Good",
    highlight: "Projetos com propósito"
  }
];

// Dados para a secção de impacto
export const impactMetrics = [
  { value: "5+", label: "Projetos em Produção", icon: FiGlobe },
  { value: "React", label: "Spring Boot", icon: FiServer },
  { value: "100%", label: "Código Próprio", icon: FiZap },
  { value: "3+", label: "Anos de Experiência", icon: FiAward }
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
    year: "2024",
    title: "AudioLearn",
    description: "Plataforma TTS para aprendizagem de idiomas com ElevenLabs API",
    type: "web"
  },
  {
    year: "2025",
    title: "KIAR - Backend Developer",
    description: "Desenvolvimento backend com Spring Boot, APIs REST e modelação de bases de dados",
    type: "work"
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
  role: "Engenheiro de Software Full-Stack",
  location: "Luanda, Angola",
  summary: "Engenheiro de software full-stack com experiência em React, Spring Boot, Flutter e arquiteturas offline-first. Focado em construir sistemas robustos, escaláveis e com impacto real. Especialista em resolver problemas complexos e transformar ideias em produtos funcionais.",
  mission: "Construir tecnologia que funciona para todos, independentemente da conectividade ou localização.",
  careerObjective: "Contribuir para equipas que constroem soluções escaláveis e com impacto social, aplicando boas práticas de arquitetura e engenharia de software.",
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