import { useEffect, useState } from 'react';
import { projectService } from '../services/projectService';
import { Project } from '../types/project';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const projectsData = await (projectService.getProjects());
        setProjects(projectsData);
        setError(null);
      } catch (err) {
        const errorMessage =
          err instanceof Error &&
          (err.name === 'AbortError' || err.message.toLowerCase().includes('timeout'))
            ? 'Erro ao carregar projetos devido ao timeout. Tente novamente.'
            : 'Erro ao carregar projetos';
        setError(errorMessage);
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error, setProjects };
}
