// components/EngineeringApproach.tsx
import { motion } from "framer-motion";
import { 
  FiServer, FiWifiOff, FiLock, FiZap, 
  FiCode, FiGitBranch, FiShield, FiCloud
} from "react-icons/fi";

const principles = [
  {
    icon: FiServer,
    title: "Arquitetura Escalável",
    description: "Desenho sistemas pensando no crescimento futuro, com separação clara de responsabilidades e padrões de design robustos.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FiWifiOff,
    title: "Offline-First",
    description: "Experiências que funcionam sem internet, com sincronização inteligente quando a conexão é restabelecida.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FiLock,
    title: "Segurança por Design",
    description: "Práticas de segurança desde a concepção: encriptação, autenticação robusta e proteção de dados sensíveis.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FiZap,
    title: "Performance Otimizada",
    description: "Código eficiente, lazy loading, cache inteligente e métricas de performance como prioridade.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Código limpo, testável e de fácil manutenção seguindo princípios SOLID e boas práticas.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: FiGitBranch,
    title: "CI/CD & DevOps",
    description: "Automação de testes, integração contínua e deployment com Docker e pipelines configuradas.",
    color: "from-gray-700 to-gray-900"
  }
];

export const EngineeringApproach = () => {
  return (
    <section id="engineering" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-2xl font-bold text-primary md:text-[1.9rem]"
          >
            Abordagem de <span className="text-secondry">Engenharia</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base"
          >
            Não se trata apenas de escrever código que funciona. Trata-se de construir 
            sistemas que resistem ao tempo, escalam com o negócio e entregam valor real.
          </motion.p>
        </div>

        {/* Grid de princípios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient background no hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Ícone com gradiente */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${principle.color} p-3 mb-4 text-white shadow-lg`}>
                <principle.icon className="w-full h-full" />
              </div>
              
              {/* Título */}
              <h3 className="mb-2 text-base font-bold text-gray-800 sm:text-lg">
                {principle.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-sm leading-relaxed text-gray-600">
                {principle.description}
              </p>
              
              {/* Linha decorativa */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${principle.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
