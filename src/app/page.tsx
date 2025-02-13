'use client'

import { useEffect, useState } from "react";
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
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode !== null ? JSON.parse(savedMode) : true;
    }
    return true;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const darkMode = localStorage.getItem('darkMode');
      setIsDark(darkMode === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 font-sans antialiased transition-colors duration-300 scroll-smooth relative overflow-hidden">
      {!isDark ? (
        <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[#FFFFFF]">
          {/* Main Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-fade">
            {/* Floating Shapes */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-black/20 rounded-full animate-float-slow" />
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-black/20 rotate-45 animate-float-medium" />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-black/20 rounded-lg animate-float-fast" />
          </div>
          
          {/* Secondary Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-slide" />
          
          {/* Gradient Dots */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-black/20 to-black/10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float-random ${5 + Math.random() * 5}s infinite`
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <StarsBackground />
          <ShootingStars />
        </>
      )}

      <motion.div
        style={{ y: backgroundY }}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none hidden dark:block"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950 z-10" />
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

        <section id="projects" className="scroll-mt-16">
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
