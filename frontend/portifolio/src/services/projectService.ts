import { supabase } from '../supabase/config'
import { Project } from '../types/project'



export const projectService = {
  // Buscar TODOS os projetos (público)
  async getProjects(): Promise<Project[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('create_at', { ascending: false })
      
      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Erro ao buscar projetos:', error)
      return []
    }
  },

  // Buscar projetos por tipo
  async getProjectsByType(type: string): Promise<Project[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('type', type)
        .order('create_at', { ascending: false })
      
      if (error) throw error
      return data || []
    } catch (error) {
      console.error(`Erro ao buscar projetos do tipo ${type}:`, error)
      return []
    }
  },

  // Buscar projeto por ID
  async getProjectById(id: string): Promise<Project | null> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    } catch (error) {
      console.error(`Erro ao buscar projeto ${id}:`, error)
      return null
    }
  },

  // Buscar projetos com limite (para carousel/home)
  async getFeaturedProjects(limit: number = 3): Promise<Project[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('create_at', { ascending: false })
        .limit(limit)
      
      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Erro ao buscar projetos em destaque:', error)
      return []
    }
  },

  // Buscar projetos com filtro de tecnologias
  async getProjectsByTech(tech: string): Promise<Project[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .contains('tecno', [tech])
        .order('create_at', { ascending: false })
      
      if (error) throw error
      return data || []
    } catch (error) {
      console.error(`Erro ao buscar projetos com tecnologia ${tech}:`, error)
      return []
    }
  },

  // Buscar projetos recentes (últimos 30 dias)
  async getRecentProjects(): Promise<Project[]> {
    try {
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
      
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .gte('create_at', thirtyDaysAgo.toISOString())
        .order('create_at', { ascending: false })
      
      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Erro ao buscar projetos recentes:', error)
      return []
    }
  }
}