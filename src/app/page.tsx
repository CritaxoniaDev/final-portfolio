import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GetInTouch } from "@/components/GetInTouch";
import { Dock } from "@/components/Dock";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 font-sans antialiased transition-colors duration-300 scroll-smooth">
      <ScrollProgress />
      <div className="max-w-2xl mx-auto px-4">
        <section id="hero" className="scroll-mt-16">
          <Hero />
        </section>
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
        
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
        
        <section id="education" className="scroll-mt-16">
          <Education />
        </section>
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
        
        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
        
        <section id="project" className="scroll-mt-16"> 
          <Projects />
        </section>
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
        
        <section id="contact" className="scroll-mt-16">
          <GetInTouch />
        </section>
        <Dock />
      </div>
    </main>
  );
}
