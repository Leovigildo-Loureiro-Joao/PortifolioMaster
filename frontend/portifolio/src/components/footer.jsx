
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


export const Footer =()=>{
    return    <footer class="bg-gray-900 text-gray-300 py-10 px-6 border-t-2 border-gradient-to-r from-teal-400 to-pink-500">
    <div class="max-w-6xl mx-auto flex flex-wrap justify-between items-start gap-8">

     
      <div>
        <h3 class="text-xl font-semibold mb-2 text-white">Leovigildo Loureiro João</h3>
        <p class="text-sm italic">"Transformando ideias em soluções digitais."</p>
      </div>

      
      <div>
        <h4 class="text-white font-semibold mb-3 tracking-widest">Links úteis</h4>
        <ul class="space-y-1 text-sm ">
          <li><a href="#home" class="hover:text-teal-400 tracking-widest">Home</a></li>
          <li><a href="#projecto" class="hover:text-teal-400 tracking-widest">Projetos</a></li>
          <li><a href="#habilidades" class="hover:text-teal-400 tracking-widest">Habilidades</a></li>
          <li><a href="#contato" class="hover:text-teal-400 tracking-widest">Contato</a></li>
        </ul>
      </div>

     
      <div>
        <h4 class="text-white font-semibold mb-3">Conecte-se</h4>
        <div class="flex space-x-4 text-xl ">
          <a href="https://github.com/leovigildo" class="hover:text-white transition-all"><FaGithub/></a>
          <a href="https://linkedin.com/in/leovigildo" class="hover:text-blue-500 transition-all"><FaLinkedin/></a>
          <a href="mailto:leovigildojao902@gmail.com" class="hover:text-pink-500 transition-all"><FaEnvelope/></a>
        </div>
      </div>
    </div>

    <div class="text-center mt-10 text-sm text-gray-500">
      © 2024 Leovigildo Loureiro João — Todos os direitos reservados.
    </div>
  </footer>

}