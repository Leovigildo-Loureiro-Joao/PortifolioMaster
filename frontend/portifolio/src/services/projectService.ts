import { Projects } from '../components/Projects';
import { ProjectModal } from '../components/Projects/ProjectModal';
import { Project } from '../types/project';
import api from './api';



export const projectService = {
  async getProjects(): Promise<Project[]> {
    const response = await api.get('/projects');
    return response.data;
  },

  async getProjectById(id: number): Promise<Project> {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },

  async createProject(projectData: FormData): Promise<Project> {
    const response = await api.post('/projects', projectData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async updateProject(id: number, projectData: FormData): Promise<Project> {
    const response = await api.put(`/projects/${id}`, projectData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async deleteProject(id: number): Promise<void> {
    await api.delete(`/projects/${id}`);
  }
};


const CACHE_KEY = 'portfolio_projects';
const CACHE_DURATION = 1000 * 60 * 60 * 24; // 24 horas

export const getProjectsCache = async () => {
  // 1. Tenta do cache primeiro
  const cached = getFromCache();
  if (cached) {
    console.log('📦 Usando cache local');
    return cached;
  }

  // 2. Se não tem cache, busca da API
  try {
    const response = await fetchWithTimeout(
      `${import.meta.env.VITE_API_URL}/projects`,
      { timeout: 5000 } // Timeout curto para Render lento
    );
    
    const projects = await response.json();
    
    // 3. Salva no cache para próxima vez
    saveToCache(projects);
    console.log('🌐 Dados da API + cache atualizado');
    return projects;
    
  } catch (error) {
    console.log('❌ API offline, usando fallback');
    return getFallbackProjects(); // Dados estáticos de fallback
  }
};

// Helper functions
const getFromCache = () => {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;
  
  const { data, timestamp } = JSON.parse(cached);
  const isExpired = Date.now() - timestamp > CACHE_DURATION;
  
  return isExpired ? null : data;
};

const saveToCache = (data:Project) => {
  const cacheData = {
    data,
    timestamp: Date.now()
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
};

const fetchWithTimeout = (url: string, options: RequestInit & { timeout?: number } = {}): Promise<Response> => {
  const { timeout = 8000, ...fetchOptions } = options as RequestInit & { timeout?: number };
  
  return Promise.race([
    fetch(url, fetchOptions),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), timeout)
    )
  ]) as Promise<Response>;
};

// Fallback para quando API está down
const getFallbackProjects = () => [
  {
    "id": 1,
    "nome": "SecureVault",
    "miniDesc": "Gestor de senhas offline com criptografia avançada",
    "descricao": "Aplicativo móvel que gerencia credenciais com segurança máxima usando criptografia AES-256. Funciona 100% offline com autenticação por senha master e sistema de recuperação por perguntas de segurança.",
    "obje": "Resolver o problema de gestão segura de senhas sem dependência de serviços cloud",
    "lance": "Proteção de dados sensíveis com privacidade total",
    "abertura": "Desafio de implementar criptografia robusta em ambiente móvel",
    "tecno": ["Flutter", "Dart", "Hive", "AES-256", "Cryptography"],
    "img": "/assets/securevault-preview.jpg",
    "url": "https://securevault-demo.vercel.app",
    "type": "Mobile Security",
    "link": "https://github.com/seuusuario/securevault"
  },
  {
    "id": 2,
    "nome": "AudioLearn",
    "miniDesc": "Plataforma de aprendizado de inglês com síntese de voz",
    "descricao": "Aplicação web progressiva para aprendizado de vocabulário inglês-português usando Web Speech API. Oferece controle de velocidade, modos de prática e persistência local.",
    "obje": "Criar uma ferramenta acessível para prática auditiva de idiomas",
    "lance": "Democratizar o acesso à prática de pronúncia",
    "abertura": "Integração complexa com APIs de síntese de voz nativas",
    "tecno": ["React", "TypeScript", "Web Speech API", "Tailwind CSS", "PWA"],
    "img": "/assets/audiolearn-preview.jpg",
    "url": "https://audiolearn.vercel.app",
    "type": "Education Tech",
    "link": "https://github.com/seuusuario/audiolearn"
  },
  {
    "id": 3,
    "nome": "Portfolio API",
    "miniDesc": "Backend profissional para gerenciamento de projetos",
    "descricao": "API REST completa desenvolvida com Spring Boot para servir dados de portfolio. Inclui autenticação, CRUD de projetos e deploy em cloud com PostgreSQL.",
    "obje": "Demonstrar habilidades backend enterprise-level",
    "lance": "Criar base escalável para projetos futuros",
    "abertura": "Otimização de queries e gestão de CORS em produção",
    "tecno": ["Spring Boot", "Java", "PostgreSQL", "Docker", "REST API"],
    "img": "/assets/api-preview.jpg",
    "url": "https://portifoliomaster.onrender.com/api/projects",
    "type": "Backend API",
    "link": "https://github.com/seuusuario/portfolio-api"
  },
  {
    "id": 4,
    "nome": "TaskMaster Pro",
    "miniDesc": "Sistema de gerenciamento de tarefas com CRUD completo",
    "descricao": "Aplicação web moderna para organização pessoal e profissional. Oferece drag-and-drop, categorias, prazos e sincronização entre dispositivos.",
    "obje": "Oferecer alternativa simples mas poderosa a apps complexos",
    "lance": "Produtividade através de simplicidade",
    "abertura": "Gestão de estado complexo com otimização de performance",
    "tecno": ["React", "Redux", "CSS3", "LocalStorage", "React DnD"],
    "img": "/assets/taskmaster-preview.jpg",
    "url": "https://taskmaster-pro.vercel.app",
    "type": "Productivity",
    "link": "https://github.com/seuusuario/taskmaster"
  },
  {
    "id": 5,
    "nome": "CurrencyX",
    "miniDesc": "Conversor de moedas em tempo real com API",
    "descricao": "Aplicativo que fornece cotações atualizadas de moedas internacionais. Inclui histórico, favoritos e cálculos avançados com atualização automática.",
    "obje": "Facilitar conversões monetárias para negócios internacionais",
    "lance": "Precisão e velocidade em operações financeiras",
    "abertura": "Tratamento de erros de API e estados de loading",
    "tecno": ["Vue.js", "JavaScript", "Exchange API", "Chart.js", "Vuex"],
    "img": "/assets/currencyx-preview.jpg",
    "url": "https://currencyx.vercel.app",
    "type": "Finance",
    "link": "https://github.com/seuusuario/currencyx"
  },
  {
    "id": 6,
    "nome": "WeatherFlow",
    "miniDesc": "Previsão do tempo com geolocalização e UI intuitiva",
    "descricao": "Aplicação meteorológica que combina dados precisos com interface elegante. Oferece previsão extendida, alertas e visualizações interativas.",
    "obje": "Unir dados técnicos com experiência do usuário excepcional",
    "lance": "Tornar dados complexos acessíveis e úteis",
    "abertura": "Integração de múltiplas APIs e responsividade extrema",
    "tecno": ["React", "OpenWeather API", "Geolocation API", "Framer Motion", "CSS Grid"],
    "img": "/assets/weatherflow-preview.jpg",
    "url": "https://weatherflow.vercel.app",
    "type": "Weather",
    "link": "https://github.com/seuusuario/weatherflow"
  },
  {
    "id": 7,
    "nome": "Cristec ERP",
    "miniDesc": "Sistema desktop de gestão empresarial",
    "descricao": "Aplicação desktop desenvolvida com JavaFX para automação de processos empresariais. Inclui módulos de estoque, vendas e relatórios.",
    "obje": "Modernizar sistemas legados com interface intuitiva",
    "lance": "Eficiência operacional através da tecnologia",
    "abertura": "Migração de sistemas antigos mantendo compatibilidade",
    "tecno": ["JavaFX", "Java", "MySQL", "CSS", "Desktop Development"],
    "img": "/assets/cristec-erp-preview.jpg",
    "url": "#",
    "type": "Enterprise",
    "link": "#"
  }
];