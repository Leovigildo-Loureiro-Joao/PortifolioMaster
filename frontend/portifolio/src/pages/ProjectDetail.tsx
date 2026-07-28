import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectService } from "../services/projectService";
import { Project } from "../types/project";
import { LoadingSpinner } from "../components/UI/LoadingSprinner";
import { ErrorMessage } from "../components/UI/ErrorMessage";
import {
  FiArrowLeft,
  FiGithub,
  FiCalendar,
  FiCpu,
  FiCode,
  FiTarget,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "tech" | "challenges">("overview");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await projectService.getProjectById(id!);
      setProject(data);
      setLoading(false);
    };
    load();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!project) return <ErrorMessage message="Projeto não encontrado" />;

  const isMobile = project.type?.toLowerCase() === "mobile";
  const technologies = Array.isArray(project.tecno)
    ? project.tecno.flatMap((tech) =>
        String(tech)
          .replace(/[\[\]"\\]/g, "")
          .split(",")
          .map((t) => t.trim().toLowerCase())
      ).filter((tech) => tech.length > 0)
    : [];

  const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes("react")) return <FiCode />;
    if (t.includes("spring")) return <FiCpu />;
    return <FiCode />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Voltar</span>
          </button>
          <span className="text-sm text-gray-400 truncate max-w-[200px]">{project.nome}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative bg-black/5 flex items-center justify-center p-4">
              <img
                src={project.img}
                alt={project.nome}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>

            <div className="lg:w-1/2 p-6 flex flex-col">
              <h1 className="mb-2 text-2xl font-bold text-primary sm:text-3xl">{project.nome}</h1>
              <p className="mb-6 text-base text-gray-600 sm:text-lg">{project.lance}</p>

            <div className="flex gap-4 border-b mb-6">
              {[
                { id: "overview", label: "Visão Geral", icon: FiTarget },
                { id: "tech", label: "Stack Técnica", icon: FiCode },
                { id: "challenges", label: "Desafios", icon: FiCpu },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative flex items-center gap-2 px-1 pb-2 text-sm font-medium transition-all ${
                    activeTab === tab.id ? "text-primary" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>

            {activeTab === "overview" && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FiCode className="w-4 h-4 text-primary" />
                    Descrição
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">{project.descricao}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FiTarget className="w-4 h-4 text-primary" />
                    Objectivo
                  </h3>
                  <p className="text-sm text-gray-600">{project.obje}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                  <div className="text-center">
                    <FiCode className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-xl font-bold text-primary">100%</div>
                    <div className="text-xs text-gray-500">Código Próprio</div>
                  </div>
                  <div className="text-center">
                    <FiCalendar className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-xl font-bold text-primary">
                      {new Date(project.abertura).getFullYear()}
                    </div>
                    <div className="text-xs text-gray-500">Ano</div>
                  </div>
                  <div className="text-center">
                    {project.type === "WEB" ? (
                      <FiMonitor className="w-5 h-5 text-primary mx-auto mb-1" />
                    ) : (
                      <FiSmartphone className="w-5 h-5 text-primary mx-auto mb-1" />
                    )}
                    <div className="text-xl font-bold text-primary">{project.type}</div>
                    <div className="text-xs text-gray-500">Tipo</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tech" && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiCpu className="w-4 h-4 text-primary" />
                  Tecnologias Utilizadas
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border"
                    >
                      <span className="text-primary">{getTechIcon(tech)}</span>
                      <span className="text-xs capitalize">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "challenges" && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiCpu className="w-4 h-4 text-primary" />
                  Desafios Superados
                </h3>
                {project.descricao.toLowerCase().includes("offline") && (
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-blue-600">
                      Implementação de estratégia offline-first com fila de sincronização.
                    </p>
                  </div>
                )}
                {!project.descricao.toLowerCase().includes("offline") && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Desenvolvimento com boas práticas de clean code e patterns modernos.
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 pt-6 border-t">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary_hover"
              >
                <FiGithub className="w-5 h-5" />
                Ver Código no GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
