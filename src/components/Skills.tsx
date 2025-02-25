'use client'

import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaJsSquare,
    FaWind, FaReact, FaJava, FaLeaf, FaDatabase,
    FaLifeRing, FaPhp, FaLaravel, FaPencilRuler,
    FaFigma, FaServer, FaCat,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiFirebase } from 'react-icons/si';

export function Skills() {
    const skills = [
        { name: 'HTML', icon: FaHtml5, color: 'text-red-500', category: 'frontend' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500', category: 'frontend' },
        { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500', category: 'frontend' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', category: 'frontend' },
        { name: 'jQuery', icon: FaJsSquare, color: 'text-blue-400', category: 'frontend' },
        { name: 'Tailwind', icon: FaWind, color: 'text-teal-500', category: 'frontend' },
        { name: 'React', icon: FaReact, color: 'text-blue-400', category: 'frontend' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800 dark:text-white', category: 'frontend' },
        { name: 'Java', icon: FaJava, color: 'text-red-500', category: 'backend' },
        { name: 'Spring Boot', icon: FaLeaf, color: 'text-green-500', category: 'backend' },
        { name: 'MySQL', icon: FaDatabase, color: 'text-blue-600', category: 'backend' },
        { name: 'Spring MVC', icon: FaLeaf, color: 'text-green-600', category: 'backend' },
        { name: 'Liferay', icon: FaLifeRing, color: 'text-blue-500', category: 'backend' },
        { name: 'PHP', icon: FaPhp, color: 'text-purple-600', category: 'backend' },
        { name: 'Laravel', icon: FaLaravel, color: 'text-red-600', category: 'backend' },
        { name: 'Axure RP', icon: FaPencilRuler, color: 'text-gray-600', category: 'uiux' },
        { name: 'Figma', icon: FaFigma, color: 'text-purple-500', category: 'uiux' },
        { name: 'Apache', icon: FaServer, color: 'text-red-500', category: 'backend' },
        { name: 'Tomcat', icon: FaCat, color: 'text-yellow-600', category: 'backend' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', category: 'frontend' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', category: 'backend' },
    ];

    const categories = {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        uiux: 'UI/UX Design'
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 px-4"
        >
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-gray-800 dark:text-white tracking-tighter transition-colors duration-300 mb-8"
            >
                Skills & Technologies
            </motion.h2>

            {Object.entries(categories).map(([category, title]) => (
                <div key={category} className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                        {title}
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                        {skills
                            .filter(skill => skill.category === category)
                            .map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800/30 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700/40 transition-colors duration-300"
                                    >
                                        <Icon className={`w-8 h-8 ${skill.color} opacity-80 dark:opacity-90 hover:opacity-100 transition-opacity duration-300`} />
                                        <span className="mt-2 text-sm text-black dark:text-gray-200 tracking-tighter">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                    </div>
                </div>
            ))}
        </motion.section>
    );
}
