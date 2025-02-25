'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    objective: string;
    isIndustry?: boolean;
    githubLink?: string;
}

export const projects: Project[] = [
    {
        title: "Conversational Marketing AI App",
        description: "An enterprise-grade AI-powered conversational marketing platform that enables businesses to engage with customers through intelligent chatbots and automated conversations.",
        technologies: ["Laravel", "TinyMCE API", "PHP", "Blade", "JavaScript", "MySQL", "OpenAI API", "Microsoft Auth API", "CSS"],
        image: "/images/CMA.png", // Add your image here
        objective: "Developed an industry-level AI conversation platform that leverages natural language processing to automate customer interactions and improve lead generation.",
        isIndustry: true // Add this flag to mark it as an industry project
    },
    {
        title: "North Sussex Judo",
        description: "A Java terminal console program to compute monthly training fees for athletes, simplifying fee calculations and managing financial commitments.",
        technologies: ["Java"],
        image: "/images/project-1.png",
        githubLink: "https://github.com/CritaxoniaDev/North-Sussex-Judo",
        objective: "Build a software program that calculates monthly expenses for judo athletes, including training plans, competition entries, and private coaching hours."
    },
    {
        title: "DoBu Martial Arts",
        description: "A website for a martial arts gym offering various classes, fitness training, and self-defense courses.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Tailwind CSS"],
        image: "/images/project-2.png",
        githubLink: "https://github.com/CritaxoniaDev/DobuMartialArts",
        objective: "Design and create an engaging website for DoBu Martial Arts, showcasing the gym's offerings and allowing users to manage their membership."
    },
    {
        title: "Enomy Finances",
        description: "A computer system for personal finance services, serving both staff and clients.",
        technologies: ["JSP", "CSS", "JavaScript", "Tailwind CSS", "MySQL", "Java (Spring Framework)"],
        image: "/images/project-4.png",
        githubLink: "https://github.com/CritaxoniaDev/EnomyFinances",
        objective: "Design and implement a new computer system for Enomy-Finances, including core system processes and software designs for client presentation."
    },
    {
        title: "ABC Cars Portal",
        description: "A Used Car Sales portal with functionalities for Users and Administrators.",
        technologies: ["JSP", "CSS", "Bootstrap", "JavaScript", "MySQL", "Java (Spring Framework)", "Spring Boot"],
        image: "/images/project-5.png",
        githubLink: "https://github.com/CritaxoniaDev/ABCCarsPortal",
        objective: "Create a comprehensive online platform facilitating the buying and selling of used cars, with distinct functionalities for users and administrators."
    },
    {
        title: "Meals on Wheels",
        description: "A software application for MerryMeal, a charitable organization delivering meals to qualified adults.",
        technologies: ["PHP", "Laravel", "Blade", "MySQL", "CSS", "JavaScript", "Tailwind", "Stripe API"],
        image: "/images/project-6.png",
        githubLink: "https://github.com/CritaxoniaDev/Mealsonwheels",
        objective: "Design and develop a comprehensive software application for MerryMeal to streamline various processes including registration, meal planning, and delivery management."
    },
    {
        title: "Weather-App",
        description: "A website that can search for the weather of a specific location using the Open Weather API.",
        technologies: ["Vanilla", "Open Weather API", "Tailwind", "CSS", "JavaScript"],
        image: "/images/project-9.png",
        githubLink: "https://weather-finder-crit.netlify.app/",
        objective: "Just to make a website for a Weather Finder."
    },
    {
        title: "Edu-Insight",
        description: "A website that is a learning platform that can access and knowledge about the different skills of software engineering course.",
        technologies: ["Nextjs", "Typescript", "Tailwind", "CSS", "JavaScript"],
        image: "/images/project-10.png",
        githubLink: "https://edu-insight.vercel.app/",
        objective: "Just to make a website for a Learning Platform."
    },
    {
        title: "BINIWebsite",
        description: "A fan made website for the Bini Philipine-Pop Group.",
        technologies: ["React", "Typescript", "Tailwind", "CSS", "JavaScript"],
        image: "/images/project-7.png",
        githubLink: "https://biniwebsite.netlify.app/",
        objective: "Just to make a website for the BINI Philipine-Pop Group."
    },
    {
        title: "MinstrelMuse",
        description: "A website that is a music player that can search music and videos through a integration of Youtube API.",
        technologies: ["React", "Youtube API", "Tailwind", "CSS", "JavaScript", "Firebase Authentication", "Firebase Storage", "Firebase Firestore"],
        image: "/images/project-8.png",
        githubLink: "https://minstrelmuse.vercel.app/",
        objective: "Just to make a website for a Music Player."
    },
];

export function Projects() {
    const router = useRouter();
    return (
        <section id="projects" className="py-10">
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tighter transition-colors duration-300 mb-8">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [&>*:last-child]:md:col-span-2 [&>*:last-child]:md:max-w-[50%] [&>*:last-child]:md:mx-auto">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className={`group hover:shadow-xl dark:hover:shadow-primary/5 transition-all duration-300 overflow-hidden border-2 border-dashed border-gray-200 dark:border-gray-800 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col h-full ${project.isIndustry ? 'md:col-span-2 border-primary/50' : ''
                                }`}
                        >
                            {project.isIndustry && (
                                <div className="absolute top-4 right-4 z-10">
                                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        Industry Project
                                    </Badge>
                                </div>
                            )}
                            <CardHeader className="p-6 pt-8 bg-gray-900">
                                <div className="relative">
                                    {/* Laptop Top Bar */}
                                    <div className="absolute -top-6 left-0 right-0 h-6 bg-gray-800 rounded-t-2xl flex items-center px-4">
                                        <div className="flex gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                        </div>
                                    </div>

                                    {/* Project Image Container */}
                                    <div className="overflow-hidden border-4 border-gray-800 shadow-inner">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Laptop Bottom */}
                                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gray-800 rounded-b-xl"></div>
                                </div>
                            </CardHeader>

                            <CardContent className="p-6 space-y-4 flex-grow">
                                <div className="space-y-2">
                                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        {project.description}
                                    </CardDescription>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            variant="secondary"
                                            className="text-xs bg-black text-white hover:bg-gray-900 dark:bg-gray-700/50 dark:hover:bg-gray-600/50 transition-all duration-300 font-medium px-2.5 py-0.5 rounded-sm shadow-sm border border-gray-600/10 backdrop-blur-sm transform hover:scale-105"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <p className="text-sm text-muted-foreground border-l-2 border-primary/50 pl-4">
                                    {project.objective}
                                </p>
                            </CardContent>

                            <CardFooter className="p-6 pt-0 flex gap-4 mt-auto">
                                {!project.isIndustry && (
                                    // In the Button section for View Project:
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="group/btn flex-1"
                                        onClick={() => router.push(`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`)}
                                    >
                                        View Project
                                    </Button>
                                )}
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="group/btn hover:border-primary/50 flex-1"
                                    asChild
                                >
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center"
                                    >
                                        <Github className="mr-2 h-4 w-4 group-hover/btn:text-primary transition-colors duration-300" />
                                        GitHub
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

