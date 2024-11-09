import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "North Sussex Judo",
        description: "A Java terminal console program to compute monthly training fees for athletes, simplifying fee calculations and managing financial commitments.",
        technologies: ["Java"],
        image: "../images/project-1.png",
        githubLink: "https://github.com/CritaxoniaDev/North-Sussex-Judo",
        objective: "Build a software program that calculates monthly expenses for judo athletes, including training plans, competition entries, and private coaching hours."
    },
    {
        title: "DoBu Martial Arts",
        description: "A website for a martial arts gym offering various classes, fitness training, and self-defense courses.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Tailwind CSS"],
        image: "../images/project-2.png",
        githubLink: "https://github.com/CritaxoniaDev/DobuMartialArts",
        objective: "Design and create an engaging website for DoBu Martial Arts, showcasing the gym's offerings and allowing users to manage their membership."
    },
    {
        title: "Enomy Finances",
        description: "A computer system for personal finance services, serving both staff and clients.",
        technologies: ["JSP", "CSS", "JavaScript", "Bootstrap", "MySQL", "Java (Spring Framework)"],
        image: "../images/project-4.png",
        githubLink: "https://github.com/CritaxoniaDev/Enomy-Finances",
        objective: "Design and implement a new computer system for Enomy-Finances, including core system processes and software designs for client presentation."
    },
    {
        title: "ABC Cars Portal",
        description: "A Used Car Sales portal with functionalities for Users and Administrators.",
        technologies: ["JSP", "CSS", "Bootstrap", "JavaScript", "MySQL", "Java (Spring Framework)", "Spring Boot"],
        image: "../images/project-5.png",
        githubLink: "https://github.com/CritaxoniaDev/ABCCarsPortal",
        objective: "Create a comprehensive online platform facilitating the buying and selling of used cars, with distinct functionalities for users and administrators."
    },
    {
        title: "Meals on Wheels",
        description: "A software application for MerryMeal, a charitable organization delivering meals to qualified adults.",
        technologies: ["PHP", "Laravel", "Blade", "MySQL", "CSS", "JavaScript", "Tailwind", "Stripe API"],
        image: "../images/project-6.png",
        githubLink: "https://github.com/CritaxoniaDev/Mealsonwheels",
        objective: "Design and develop a comprehensive software application for MerryMeal to streamline various processes including registration, meal planning, and delivery management."
    },
    {
        title: "Weather-App",
        description: "A website that can search for the weather of a specific location using the Open Weather API.",
        technologies: ["Vanilla", "Open Weather API", "Tailwind", "CSS", "JavaScript"],
        image: "../images/project-9.png",
        githubLink: "https://weather-finder-crit.netlify.app/",
        objective: "Just to make a website for a Weather Finder."
    },
    {
        title: "Edu-Insight",
        description: "A website that is a learning platform that can access and knowledge about the different skills of software engineering course.",
        technologies: ["Nextjs", "Typescript", "Tailwind", "CSS", "JavaScript"],
        image: "../images/project-10.png",
        githubLink: "https://edu-insight.vercel.app/",
        objective: "Just to make a website for a Learning Platform."
    },
    {
        title: "BINIWebsite",
        description: "A fan made website for the Bini Philipine-Pop Group.",
        technologies: ["React", "Typescript", "Tailwind", "CSS", "JavaScript"],
        image: "../images/project-7.png",
        githubLink: "https://biniwebsite.netlify.app/",
        objective: "Just to make a website for the BINI Philipine-Pop Group."
    },
    {
        title: "MinstrelMuse",
        description: "A website that is a music player that can search music and videos through a integration of Youtube API.",
        technologies: ["React", "Youtube API", "Tailwind", "CSS", "JavaScript", "Firebase Authentication", "Firebase Storage", "Firebase Firestore"],
        image: "../images/project-8.png",
        githubLink: "https://minstrelmuse.vercel.app/",
        objective: "Just to make a website for a Music Player."
    },
];

export function Projects() {
    return (
        <section className="py-10" id="project">
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tighter transition-colors duration-300 mb-8">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl dark:hover:shadow-primary/5 transition-all duration-300 overflow-hidden border-muted/20 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col h-full"
                        >
                            <CardHeader className="p-0">
                                <div className="overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
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
                                            className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 font-medium px-3 py-1 rounded-full shadow-sm border border-gray-700/20"
                                        >
                                            {tech}
                                        </Badge>    
                                    ))}
                                </div>

                                <p className="text-sm text-muted-foreground border-l-2 border-primary/50 pl-4 italic">
                                    {project.objective}
                                </p>
                            </CardContent>

                            <CardFooter className="p-6 pt-0 flex gap-4 mt-auto">
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

                                {project.githubLink.includes('netlify') || project.githubLink.includes('vercel') ? (
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
                                            <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:text-primary transition-colors duration-300" />
                                            Live Demo
                                        </a>
                                    </Button>
                                ) : null}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

