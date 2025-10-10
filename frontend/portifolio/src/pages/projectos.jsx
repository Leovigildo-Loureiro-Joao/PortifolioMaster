import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gitSvg from "../assets/images/github.svg";
import { useProjects } from "../hooks/useProjects";
import TecnoFerra from "../utils/TecnoFerra";


export const Projectos = () => {
  const search = ["All", "Mobile", "Web", "Desktop"];
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const projectos=useProjects()


  const filteredProjects =
    filter === "All"
      ? projectos.projects
      : projectos.filter((p) => p.type.toLowerCase() === filter.toLowerCase());

  return (
    <div id="projecto" className="py-20 relative">
      {/* 🔹 Título */}
      <div className="section-title px-20 flex flex-col w-52">
        <h1 className="text-xl font-bold text-primary">Projectos</h1>
        <span className="h-[5px] w-full rounded-boder_radius bg-gradient-to-r from-primary to-secondry "></span>
      </div>

      {/* 🔹 Filtros */}
      <div className="m-10 flex justify-center items-center gap-10">
        {search.map((value) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === value
                ? "bg-primary text-white shadow-md"
                : "text-dark hover:text-primary hover:border-primary border"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* 🔹 Carrossel */}
      <div id="block-project" className="relative flex justify-center items-center gap-10 p-10">
        

        <div id="grid" className="overflow-hidden p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((value, key) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="card-project bg-white min-w-[310px] w-[310px] shadow-lg rounded-xl overflow-hidden"
                >
                  <figure className="overflow-hidden">
                    <img
                      className="face hover:scale-110 transition-all"
                      src={value.img}
                      alt={value.nome}
                    />
                  </figure>
                  <div className="p-5 text-center">
                    <h2 className="font-bold text-primary">{value.nome}</h2>
                    <p className="text-sm text-gray-600 mt-2">{value.miniDesc}</p>
                  </div>
                  <div className="w-full flex text-sm">
                    <button
                      onClick={() => setSelected(value)}
                      className="w-full h-9 text-white bg-primary rounded-es-md hover:bg-primary_hover transition-all cursor-pointer"
                    >
                      Saiba mais
                    </button>
                    <input
                      type="image"
                      src={gitSvg}
                      className="w-full h-9 flex items-center justify-center hover:bg-slate-100 transition-all rounded-ee-md border-primary border"
                      alt="GitHub"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        
      </div>

      {/* 🔹 Modal (Saiba mais) */}
     <AnimatePresence>
        {selected && (
            <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <motion.div
                className="bg-white rounded-xl w-[90%] max-w-3xl shadow-2xl overflow-hidden"
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className="relative">
                <video
                    src={selected.url || selected.img}
                    className="w-full h-56 object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onEnded={(e) => e.target.pause()}
                />
                <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black px-3 py-1 rounded-full"
                >
                    ✕
                </button>
                </div>

                <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-3">{selected.nome}</h2>
                <p className="text-gray-700 mb-4">{selected.desc}</p>
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
        )}
        </AnimatePresence>

    </div>
  );
};
