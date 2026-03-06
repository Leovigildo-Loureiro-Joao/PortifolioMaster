import { supabase } from '../supabase/config'
import { Project } from '../types/project'

const PROJECTS_CACHE_KEY = 'portfolio_projects_cache_v1'
const FEATURED_CACHE_KEY = 'portfolio_featured_projects_cache_v1'
const RECENT_CACHE_KEY = 'portfolio_recent_projects_cache_v1'
const REQUEST_TIMEOUT_MS = 15000
const MAX_RETRIES = 2
const RETRY_BASE_DELAY_MS = 800

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const isRetryableError = (error: unknown): boolean => {
  if (!error || typeof error !== 'object') return false
  const err = error as { name?: string; message?: string; code?: string }
  const message = (err.message || '').toLowerCase()

  return (
    err.name === 'AbortError' ||
    err.code === 'ETIMEDOUT' ||
    message.includes('timeout') ||
    message.includes('timed out') ||
    message.includes('failed to fetch') ||
    message.includes('network')
  )
}

const getProjectsCache = (): Project[] => {
  return getArrayCache(PROJECTS_CACHE_KEY)
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

const runWithRetry = async <T>(
  operation: (signal: AbortSignal) => Promise<T>,
): Promise<T> => {
  let lastError: unknown = null

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    const timeoutController = new AbortController()
    const timeoutId = setTimeout(() => {
      timeoutController.abort()
    }, REQUEST_TIMEOUT_MS)

    try {
      return await operation(timeoutController.signal)
    } catch (error) {
      lastError = error
      const canRetry = isRetryableError(error) && attempt < MAX_RETRIES
      if (!canRetry) break
      await delay(RETRY_BASE_DELAY_MS * (attempt + 1))
    } finally {
      clearTimeout(timeoutId)
    }
  }

  throw lastError
}

export const projectService = {
  // Buscar TODOS os projetos (público)
  async getProjects(): Promise<Project[]> {
    try {
      const projects = await runWithRetry(async (signal) => {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('create_at', { ascending: false })
          .abortSignal(signal)

        if (error) throw error
        return data || []
      })

      setArrayCache(PROJECTS_CACHE_KEY, projects)
      return projects
    } catch (error) {
      const cachedProjects = getProjectsCache()
      if (cachedProjects.length > 0) return cachedProjects

      console.error('Erro ao buscar projetos:', error)
      throw error
    }
  },

  // Buscar projetos por tipo
  async getProjectsByType(type: string): Promise<Project[]> {
    const cacheKey = `portfolio_projects_type_${type.toLowerCase()}_v1`

    try {
      const projects = await runWithRetry(async (signal) => {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('type', type)
          .order('create_at', { ascending: false })
          .abortSignal(signal)

        if (error) throw error
        return data || []
      })

      setArrayCache(cacheKey, projects)
      return projects
    } catch (error) {
      const cachedProjects = getArrayCache(cacheKey)
      if (cachedProjects.length > 0) return cachedProjects

      console.error(`Erro ao buscar projetos do tipo ${type}:`, error)
      throw error
    }
  },

  // Buscar projeto por ID
  async getProjectById(id: string): Promise<Project | null> {
    const cacheKey = `portfolio_project_${id}_v1`

    try {
      const project = await runWithRetry(async (signal) => {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('id', id)
          .single()
          .abortSignal(signal)

        if (error) throw error
        return data
      })

      if (project) setProjectCache(cacheKey, project)
      return project
    } catch (error) {
      const cachedProject = getProjectCache(cacheKey)
      if (cachedProject) return cachedProject

      console.error(`Erro ao buscar projeto ${id}:`, error)
      throw error
    }
  },

  // Buscar projetos com limite (para carousel/home)
  async getFeaturedProjects(limit: number = 3): Promise<Project[]> {
    try {
      const projects = await runWithRetry(async (signal) => {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('create_at', { ascending: false })
          .limit(limit)
          .abortSignal(signal)

        if (error) throw error
        return data || []
      })

      setArrayCache(`${FEATURED_CACHE_KEY}_${limit}`, projects)
      return projects
    } catch (error) {
      const cachedProjects = getArrayCache(`${FEATURED_CACHE_KEY}_${limit}`)
      if (cachedProjects.length > 0) return cachedProjects

      console.error('Erro ao buscar projetos em destaque:', error)
      throw error
    }
  },

  // Buscar projetos com filtro de tecnologias
  async getProjectsByTech(tech: string): Promise<Project[]> {
    const cacheKey = `portfolio_projects_tech_${tech.toLowerCase()}_v1`

    try {
      const projects = await runWithRetry(async (signal) => {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .contains('tecno', [tech])
          .order('create_at', { ascending: false })
          .abortSignal(signal)

        if (error) throw error
        return data || []
      })

      setArrayCache(cacheKey, projects)
      return projects
    } catch (error) {
      const cachedProjects = getArrayCache(cacheKey)
      if (cachedProjects.length > 0) return cachedProjects

      console.error(`Erro ao buscar projetos com tecnologia ${tech}:`, error)
      throw error
    }
  },

  // Buscar projetos recentes (últimos 30 dias)
  async getRecentProjects(): Promise<Project[]> {
    try {
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

      const projects = await runWithRetry(async (signal) => {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .gte('create_at', thirtyDaysAgo.toISOString())
          .order('create_at', { ascending: false })
          .abortSignal(signal)

        if (error) throw error
        return data || []
      })

      setArrayCache(RECENT_CACHE_KEY, projects)
      return projects
    } catch (error) {
      const cachedProjects = getArrayCache(RECENT_CACHE_KEY)
      if (cachedProjects.length > 0) return cachedProjects

      console.error('Erro ao buscar projetos recentes:', error)
      throw error
    }
  }
}
