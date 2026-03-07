// data/mySelf.ts
import { 
  FiGlobe, FiZap, FiHeart, FiMapPin, 
  FiCalendar, FiGithub, FiCpu, FiAward 
} from "react-icons/fi";

export const mySelf = [
  {
    title: "De Angola para o Mundo",
    info: "Desenvolvedor full-stack angolano, construindo soluções que conectam culturas e resolvem problemas reais. Experiência em projetos para África, Europa e Américas.",
    icon: FiGlobe, // ← Agora é componente, não string
    stats: "4+ projetos em produção",
    highlight: "Perspectiva global"
  },
  {
    title: "Engenheiro de Software com Propósito",
    info: "Não apenas código funcionando - construo sistemas que resistem ao tempo. Especialista em arquiteturas offline-first que funcionam onde internet é instável, levando tecnologia a quem mais precisa.",
    icon: FiZap,
    stats: "100% código próprio",
    highlight: "Offline-first expert"
  },
  {
    title: "Tecnologia com Impacto Social",
    info: "Do EduGestor (gestão escolar offline) ao SecureVault (segurança digital) - cada projeto resolve um problema real. Acredito que boa tecnologia deve ser acessível e transformadora.",
    icon: FiHeart,
    stats: "3 projetos em produção",
    highlight: "Tech for good"
  }
];

// Dados para a secção de impacto
export const impactMetrics = [
  { value: "4+", label: "Projetos em Produção", icon: FiGlobe },
  { value: "100%", label: "Código Próprio", icon: FiZap },
  { value: "Offline", label: "Primeira Classe", icon: FiCpu },
  { value: "3", label: "Anos de Experiência", icon: FiAward }
];

// Timeline profissional
export const timeline = [
  {
    year: "2024",
    title: "SecureVault",
    description: "App mobile de gestão de senhas com encriptação AES-256",
    type: "mobile"
  },
  {
    year: "2025",
    title: "AudioLearn",
    description: "Plataforma TTS para aprendizagem de idiomas",
    type: "web"
  },
  {
    year: "2026",
    title: "EduGestor",
    description: "Sistema escolar offline-first com sincronização inteligente",
    type: "web"
  }
];