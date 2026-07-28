import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/UI/Header";
import { Home } from "../components/UI/home";
import { Projects } from "../components/Projects";
import { MySelf } from "../components/MySelf";
import { Skills } from "../components/Skills";
import { Contact } from "../components/UI/Contact";
import { Footer } from "../components/UI/footer";

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const sectionId = state?.scrollTo || window.location.hash.replace("#", "");

    if (sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.key]);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Home />
      <Projects />
      <MySelf />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};
