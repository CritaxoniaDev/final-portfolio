'use client'

import { MacbookScroll } from "./ui/macbook-scroll";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    objective: string;
    isIndustry?: boolean;
    githubLink?: string;
}

export function ProjectDetail({ project }: { project: Project }) {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDark, setIsDark] = useState(true);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    useEffect(() => {
        const theme = localStorage.getItem('theme') ?? 'dark';
        setIsDark(theme === 'dark');

        const handleThemeChange = (e: CustomEvent<boolean>) => {
            setIsDark(e.detail);
        };

        document.addEventListener('themeToggle', handleThemeChange as EventListener);

        return () => {
            document.removeEventListener('themeToggle', handleThemeChange as EventListener);
        };
    }, []);

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 font-sans antialiased transition-all duration-500 ease-in-out scroll-smooth relative overflow-hidden">
            <AnimatePresence mode="wait">
                {!isDark ? (
                    <motion.div
                        key="light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 pointer-events-none overflow-hidden bg-[#FFFFFF]"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-fade">
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-black/20 rounded-full animate-float-slow" />
                            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-black/20 rotate-45 animate-float-medium" />
                            <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-black/20 rounded-lg animate-float-fast" />
                        </div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-slide" />
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
                    </motion.div>
                ) : (
                    <motion.div
                        key="dark"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <StarsBackground />
                        <ShootingStars />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-8 mt-8"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl font-bold"
                        >
                            {project.title}
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            {project.description}
                        </motion.p>
                    </div>

                    <div ref={containerRef} className="h-[150vh] relative">
                        <motion.div 
                            style={{ y, opacity, scale }}
                            className="sticky top-20"
                        >
                            <MacbookScroll
                                src={project.image}
                                showGradient
                                title={
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Project Overview</h3>
                                        <p className="text-muted-foreground">{project.objective}</p>
                                    </div>
                                }
                            />
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20"
                    >
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 * index }}
                                        key={index}
                                        className="px-3 py-1 bg-primary/10 rounded-full text-sm hover:bg-primary/20 transition-colors duration-300"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Key Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <motion.li 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    Responsive Design
                                </motion.li>
                                <motion.li 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    Modern UI/UX
                                </motion.li>
                                <motion.li 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    Performance Optimized
                                </motion.li>
                            </ul>
                        </div>
                        
                        {project.githubLink && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="md:col-span-2 flex justify-center mt-8"
                            >
                                <Button 
                                    variant="outline"
                                    size="lg"
                                    className="group"
                                    asChild
                                >
                                    <a 
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                    >
                                        View Source Code
                                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                </Button>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
