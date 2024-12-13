'use client'

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GetInTouch } from "@/components/GetInTouch";
import { Dock } from "@/components/Dock";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Experience } from "@/components/Experience";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 font-sans antialiased transition-colors duration-300 scroll-smooth relative overflow-hidden">
      <motion.div
        style={{ y: backgroundY }}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none hidden dark:block"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 scale-110"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      </motion.div>

      <ScrollProgress />
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <section id="hero" className="scroll-mt-16">
          <Hero />
        </section>
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

        <section id="experience" className="scroll-mt-16">
          <Experience />
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
