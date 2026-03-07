import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TecnoFerra from "../../utils/TecnoFerra";
import { Project } from "../../types/project";
import { 
  FiX, 
  FiGithub, 
  FiCalendar, 
  FiCpu, 
  FiZap, 
  FiShield,
  FiLayers,
  FiCode,
  FiTarget,
  FiServer,
  FiLock,
  FiWifiOff,
  FiMonitor,
  FiSmartphone
} from "react-icons/fi";

interface ProjectModalProps {
  selected: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ selected, onClose }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<"overview" | "tech" | "challenges">("overview");

  useEffect(() => {
    setActiveTab("overview");
  }, [selected]);

  if (!selected) return null;

  const isMobileProject = selected.type?.toLowerCase() === "mobile";
  
  // Processar tecnologias
  const technologies = Array.isArray(selected.tecno) 
    ? selected.tecno.flatMap(tech => 
        String(tech).replace(/[\[\]"\\]/g, '').split(',').map(t => t.trim().toLowerCase())
      ).filter(tech => tech.length > 0)
    : [];

  // Função para escolher ícone baseado na tecnologia
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('react')) return <FiCode />;
    if (techLower.includes('spring')) return <FiServer />;
    if (techLower.includes('docker')) return <FiLayers />;
    if (techLower.includes('security') || techLower.includes('aes')) return <FiLock />;
    return <FiCpu />;
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 30, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Media Section */}
          <div className="relative bg-black/5">
            <div className={`relative ${isMobileProject ? 'max-w-sm mx-auto' : ''}`}>
              <video
                src={selected.url || selected.img}
                className="w-full max-h-[40vh] object-contain"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Content Section */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Header */}
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-primary sm:text-3xl">{selected.nome}</h2>
              <p className="text-base text-gray-600 sm:text-lg">{selected.lance}</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b mb-6">
              {[
                { id: "overview", label: "Visão Geral", icon: FiTarget },
                { id: "tech", label: "Stack Técnica", icon: FiCode },
                { id: "challenges", label: "Desafios", icon: FiZap }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative flex items-center gap-2 px-1 pb-2 text-sm font-medium transition-all sm:text-base ${
                    activeTab === tab.id 
                      ? "text-primary" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="min-h-[200px]"
              >
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <FiCode className="w-4 h-4 text-primary" />
                        Descrição
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{selected.descricao}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <FiTarget className="w-4 h-4 text-primary" />
                        Objectivo
                      </h3>
                      <p className="text-sm text-gray-600 sm:text-base">{selected.obje}</p>
                    </div>

                    {/* Métricas */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                      <div className="text-center">
                        <FiCode className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="text-xl font-bold text-primary sm:text-2xl">
                          {selected.type === "WEB" ? "100%" : "✓"}
                        </div>
                        <div className="text-[0.7rem] text-gray-500 sm:text-xs">Código Próprio</div>
                      </div>
                      <div className="text-center">
                        <FiCalendar className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="text-xl font-bold text-primary sm:text-2xl">
                          {new Date(selected.abertura).getFullYear()}
                        </div>
                        <div className="text-[0.7rem] text-gray-500 sm:text-xs">Ano</div>
                      </div>
                      <div className="text-center">
                        {selected.type === "WEB" ? (
                          <FiMonitor className="w-5 h-5 text-primary mx-auto mb-1" />
                        ) : (
                          <FiSmartphone className="w-5 h-5 text-primary mx-auto mb-1" />
                        )}
                        <div className="text-xl font-bold text-primary sm:text-2xl">
                          {selected.type}
                        </div>
                        <div className="text-[0.7rem] text-gray-500 sm:text-xs">Tipo</div>
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
                          <span className="text-xs capitalize sm:text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arquitetura */}
                    {selected.descricao.toLowerCase().includes("arquitetura") && (
                      <div className="mt-6">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <FiLayers className="w-4 h-4 text-primary" />
                          Arquitetura
                        </h3>
                        <p className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600 sm:text-base">
                          {selected.descricao.split('Arquitetura')[1]?.split('.')[0] || 
                           "Arquitetura moderna e escalável"}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "challenges" && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FiZap className="w-4 h-4 text-primary" />
                      Desafios Superados
                    </h3>
                    
                    <div className="space-y-4">
                      {selected.descricao.toLowerCase().includes("offline") && (
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-1 flex items-center gap-2">
                            <FiWifiOff className="w-4 h-4" />
                            Sincronização Offline-First
                          </h4>
                          <p className="text-xs text-blue-600 sm:text-sm">
                            Implementação de estratégia offline-first com fila de sincronização 
                            para garantir consistência de dados mesmo sem conexão.
                          </p>
                        </div>
                      )}
                      
                      {selected.descricao.toLowerCase().includes("segurança") && (
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-1 flex items-center gap-2">
                            <FiShield className="w-4 h-4" />
                            Segurança de Dados
                          </h4>
                          <p className="text-xs text-purple-600 sm:text-sm">
                            Encriptação AES-256 e autenticação biométrica para proteger 
                            informações sensíveis dos utilizadores.
                          </p>
                        </div>
                      )}

                      {/* Fallback */}
                      {!selected.descricao.toLowerCase().includes("offline") && 
                       !selected.descricao.toLowerCase().includes("segurança") && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-800 mb-1 flex items-center gap-2">
                            <FiServer className="w-4 h-4" />
                            Arquitetura Escalável
                          </h4>
                          <p className="text-xs text-gray-600 sm:text-sm">
                            Desenvolvimento com boas práticas de clean code e patterns modernos 
                            garantindo manutenibilidade e escalabilidade.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* CTA Section */}
            <div className="mt-8 pt-6 border-t flex gap-4">
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary_hover sm:text-base"
              >
                <FiGithub className="w-5 h-5" />
                Ver Código no GitHub
              </a>
              <button
                onClick={onClose}
                className="rounded-lg border-2 border-gray-200 px-6 py-3 text-sm font-semibold transition-all hover:bg-gray-50 sm:text-base"
              >
                Fechar
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
