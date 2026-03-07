// components/Contact.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FiMail, FiGithub, FiLinkedin, FiMapPin, 
  FiSend, FiCheckCircle, FiAlertCircle 
} from "react-icons/fi";

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulação de envio - substituir pela tua lógica real
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="relative overflow-hidden px-4 py-24 sm:px-6 md:px-10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondry"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            <span className="text-primary">Vamos</span>{" "}
            <span className="text-secondry">Trabalhar Juntos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Estou disponível para freelas, colaborações e oportunidades desafiadoras.
            Manda uma mensagem e responderei o mais breve possível.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-gray-800 sm:text-lg">
                <FiMail className="text-primary" />
                Contacto Directo
              </h3>
              <div className="space-y-3">
                <a 
                  href="mailto:leovigildojao902@gmail.com"
                  className="group flex items-center gap-3 break-all text-gray-600 transition-colors hover:text-primary sm:break-normal"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FiMail className="w-4 h-4 text-primary" />
                  </div>
                  <span>leovigildojao902@gmail.com</span>
                </a>
                
                <a 
                  href="https://github.com/Leovigildo-Loureiro-Joao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 break-all text-gray-600 transition-colors hover:text-primary sm:break-normal"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FiGithub className="w-4 h-4 text-primary" />
                  </div>
                  <span>/Leovigildo-Loureiro-Joao</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/leovigildo-loureiro-joao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 break-all text-gray-600 transition-colors hover:text-primary sm:break-normal"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FiLinkedin className="w-4 h-4 text-primary" />
                  </div>
                  <span>in/leovigildo-loureiro-joao</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-gray-800 sm:text-lg">
                <FiMapPin className="text-primary" />
                Localização
              </h3>
              <p className="text-gray-600">
                Luanda, Angola<br />
                <span className="text-xs text-gray-400 sm:text-sm">Fuso horário: WAT (UTC+1)</span>
              </p>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-r from-primary/10 to-secondry/10 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700 sm:text-sm">
                  Disponível para novos projetos
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          >
            <h3 className="mb-6 text-base font-semibold text-gray-800 sm:text-lg">Envia uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Teu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="teu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="O que tens em mente?"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondry text-white rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 group"
              >
                {formStatus === "idle" && (
                  <>
                    <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Enviar mensagem
                  </>
                )}
                {formStatus === "sending" && (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                )}
                {formStatus === "success" && (
                  <>
                    <FiCheckCircle className="w-4 h-4" />
                    Mensagem enviada!
                  </>
                )}
                {formStatus === "error" && (
                  <>
                    <FiAlertCircle className="w-4 h-4" />
                    Erro ao enviar
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
