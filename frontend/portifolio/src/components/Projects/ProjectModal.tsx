import { motion, AnimatePresence } from "framer-motion";
import TecnoFerra from "../../utils/TecnoFerra";
import { Project } from "../../types/project";

interface ProjectModalProps {
  selected: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ selected, onClose }: ProjectModalProps) => {
  if (!selected) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl w-[90%] max-w-3xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <video
              src={selected.url || selected.img}
              className="w-full h-56 object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black px-3 py-1 rounded-full"
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-primary mb-3">{selected.nome}</h2>
            <p className="text-gray-700 mb-4">{selected.descricao}</p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Objetivo:</strong> {selected.obje}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Lançamento:</strong> {selected.lance}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Abertura:</strong> {selected.abertura}
            </p>

            <div className="flex gap-4 justify-center">
              {selected.tecno
                .map(tech => String(tech).replace(/[\[\]"\\]/g, '').trim().toLowerCase())
                .filter(tech => tech.length > 0)
                .map((tech, index) => (
                  <TecnoFerra key={index} icone={tech} className="w-5 h-5" />
                ))
              }
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};