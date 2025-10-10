import { motion } from "framer-motion";
import forma from "../assets/images/Caminho6.png";
import gif from "../assets/images/f1d6a204-0a35-4b48-a849-8421515cda54.gif";


export const QuemSouEu = () => {
  const info = [
    {
      title: "Alcance Global",
      info:
        "Meu objetivo é conectar pessoas através da tecnologia, criando interfaces intuitivas e soluções que possam ser usadas globalmente, adaptadas a diferentes contextos e necessidades.",
    },
    {
      title: "Paixão pelo Conhecimento",
      info:
        "Tenho sede de aprendizado constante e adoro desafios que me permitem crescer. Seja explorando novas tecnologias ou desenvolvendo habilidades em design, estou sempre buscando expandir meu conhecimento.",
    },
    {
      title: "Criatividade e Autonomia",
      info:
        "Gosto de unir criatividade e lógica para dar vida a projetos únicos. Com uma mente aberta e autônoma, busco sempre inovar e encontrar soluções eficientes para cada desafio.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="quemSou"
      className="relative py-24 px-12 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Glow de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondry/10 blur-3xl"></div>

      {/* Cabeçalho */}
      <div className="flex flex-col items-center mb-16 relative z-10">
      
        <h1 className="text-3xl font-bold text-primary tracking-wide">Quem sou</h1>
        <span className="h-[5px] w-32 bg-gradient-to-r from-primary to-secondry rounded-full mt-2"></span>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center relative z-10 gap-12">
        {/* Texto animado */}
        <motion.div
          className="md:w-2/5 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {info.map((block, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.03,
                x: -10,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="group p-6 rounded-2xl backdrop-blur-md bg-white/30 border border-white/20 shadow-lg cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondry rounded-full animate-pulse"></div>
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-secondry transition-all">
                  {block.title}
                </h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition">
                {block.info}
              </p>

              {/* Efeito de brilho */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-secondry/10 blur-xl transition duration-700"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Imagem animada */}
        <motion.div
          className="relative md:w-[45%] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={forma}
            alt="forma decorativa"
            className="absolute animate-pulse-slow w-[110%] opacity-60"
          />
          <motion.img
            src={gif}
            alt="animação"
            className="rounded-2xl shadow-2xl w-[90%] z-10"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
};
