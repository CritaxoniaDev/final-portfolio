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
    <main className="min-h-screen bg-white dark:bg-gray-950 font-sans antialiased transition-colors duration-300">
      <ScrollProgress />
      <div className="max-w-2xl mx-auto px-4">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <GetInTouch />
        <Dock />
      </div>
    </main>
  );
}
