import rawProjects from '../mock/data.json'
import { Project } from '../types/project'
import loadCodeImg from '../assets/images/load_code.jpg'
import edugestorMockup from '../assets/mockups/edugestor.png'
import audiolearnMockup from '../assets/mockups/audiolearn.png'
import kbolsMockup from '../assets/mockups/kbols.png'
import sapphireMockup from '../assets/mockups/sapphire-soiree.png'
import uondoMockup from '../assets/mockups/uondo.png'
import baluarteMockup from '../assets/mockups/baluarte.png'

const PROJECTS_CACHE_KEY = 'portfolio_projects_cache_v1'
const FEATURED_CACHE_KEY = 'portfolio_featured_projects_cache_v1'
const RECENT_CACHE_KEY = 'portfolio_recent_projects_cache_v1'

type RawProject = {
  id?: string | number
  nome?: string
  mini_desc?: string
  miniDesc?: string
  descricao?: string
  obje?: string
  lance?: string
  abertura?: string
  create_at?: string
  tecno?: unknown
  img?: string
  url?: string
  type?: string
  link?: string
  status?: string
}

const getArrayCache = (cacheKey: string): Project[] => {
  try {
    const cached = localStorage.getItem(cacheKey)
    if (!cached) return []
    return JSON.parse(cached) as Project[]
  } catch {
    return []
  }
}

const setArrayCache = (cacheKey: string, projects: Project[]) => {
  try {
    localStorage.setItem(cacheKey, JSON.stringify(projects))
  } catch {
    // Ignora falhas de cache sem quebrar o carregamento.
  }
}

const getProjectCache = (cacheKey: string): Project | null => {
  try {
    const cached = localStorage.getItem(cacheKey)
    if (!cached) return null
    return JSON.parse(cached) as Project
  } catch {
    return null
  }
}

const setProjectCache = (cacheKey: string, project: Project) => {
  try {
    localStorage.setItem(cacheKey, JSON.stringify(project))
  } catch {
    // Ignora falhas de cache sem quebrar o carregamento.
  }
}

const parseDate = (dateValue?: string): number => {
  if (!dateValue) return 0
  const timestamp = new Date(dateValue).getTime()
  return Number.isNaN(timestamp) ? 0 : timestamp
}

const flattenArray = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [String(value)]
  return value.flatMap((item) => flattenArray(item))
}

const parseTechno = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return flattenArray(value)
      .map((item) => item.trim())
      .filter(Boolean)
  }

  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (!trimmed) return []

    try {
      const parsed = JSON.parse(trimmed)
      if (Array.isArray(parsed)) {
        return flattenArray(parsed)
          .map((item) => item.trim())
          .filter(Boolean)
      }
    } catch {
      // Se nao for JSON valido, cai para o split simples.
    }

    return trimmed
      .split(',')
      .map((item) => item.replace(/[\[\]"]/g, '').trim())
      .filter(Boolean)
  }

  return []
}

const mockupMap: Record<string, string> = {
  'EduGestor': edugestorMockup,
  'AudioLearn': audiolearnMockup,
  'KBols - Imetro': kbolsMockup,
  'Sapphire Soiree': sapphireMockup,
  'UONDO': uondoMockup,
  'BaluarteInfo': baluarteMockup,
}

const normalizeProject = (project: RawProject, index: number): Project => {
  const mockImg = mockupMap[project.nome ?? '']
  return {
    id: String(project.id ?? `mock-project-${index}`),
    nome: project.nome ?? 'Projeto sem nome',
    miniDesc: project.miniDesc ?? project.mini_desc ?? '',
    descricao: project.descricao ?? '',
    obje: project.obje ?? '',
    lance: project.lance ?? '',
    abertura: project.abertura ?? '',
    createAt: project.create_at ?? '',
    tecno: parseTechno(project.tecno),
    img: mockImg || ((project.img && !project.img.includes('placeholder')) ? project.img : loadCodeImg),
    url: project.url ?? '',
    type: project.type ?? 'ALL',
    link: project.link ?? '',
    status: project.status,
  }
}

const getAllProjects = (): Project[] => {
  const source = Array.isArray(rawProjects) ? (rawProjects as RawProject[]) : []
  return source
    .map((project, index) => normalizeProject(project, index))
    .sort((a, b) => parseDate(b.createAt) - parseDate(a.createAt))
}

export const projectService = {
  async getProjects(): Promise<Project[]> {
    const projects = getAllProjects()
    setArrayCache(PROJECTS_CACHE_KEY, projects)
    return projects
  },

  async getProjectsByType(type: string): Promise<Project[]> {
    const cacheKey = `portfolio_projects_type_${type.toLowerCase()}_v1`
    const projects = getAllProjects().filter(
      (project) => project.type.toLowerCase() === type.toLowerCase(),
    )
    setArrayCache(cacheKey, projects)
    return projects
  },

  async getProjectById(id: string): Promise<Project | null> {
    const cacheKey = `portfolio_project_${id}_v1`
    const project = getAllProjects().find((item) => item.id === id) ?? null
    if (project) {
      setProjectCache(cacheKey, project)
      return project
    }

    return getProjectCache(cacheKey)
  },

  async getFeaturedProjects(limit: number = 3): Promise<Project[]> {
    const projects = getAllProjects().slice(0, limit)
    setArrayCache(`${FEATURED_CACHE_KEY}_${limit}`, projects)
    return projects
  },

  async getProjectsByTech(tech: string): Promise<Project[]> {
    const normalizedTech = tech.trim().toLowerCase()
    const cacheKey = `portfolio_projects_tech_${normalizedTech}_v1`
    const projects = getAllProjects().filter((project) =>
      project.tecno.some((projectTech) => projectTech.toLowerCase() === normalizedTech),
    )
    setArrayCache(cacheKey, projects)
    return projects
  },

  async getRecentProjects(): Promise<Project[]> {
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000
    const projects = getAllProjects().filter(
      (project) => parseDate(project.createAt || project.abertura) >= thirtyDaysAgo,
    )
    setArrayCache(RECENT_CACHE_KEY, projects)
    return projects
  },
}
