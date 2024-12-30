'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLaravel, FaPhp } from "react-icons/fa";
import { SiMysql, SiOpenai } from "react-icons/si";

interface ExperienceEntry {
    title: string;
    company: string;
    logo: string;
    period: string;
    description: string[];
    skills: {
        name: string;
        icon: React.ElementType;
    }[];
}

const experiences: ExperienceEntry[] = [
    {
        title: "Technology Associate",
        company: "Lithan EduClaaS",
        logo: "/resources/educlaas-logo.png", // Add your company logos in public folder
        period: "Nov 2024 - Present",
        description: [
            "Webhosting and web server management",
            "Hands-on experience in LMS platform technical administration",
            "Any other tasks related to the business unit"
        ],
        skills: [
            { name: "Laravel", icon: FaLaravel },
            { name: "PHP", icon: FaPhp },
            { name: "MySQL", icon: SiMysql },
            { name: "OpenAi API", icon: SiOpenai }
        ]
    },
    // Add more experiences as needed
];

export function Experience() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 px-4 tracking-tighter"
        >
            <div className="space-y-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold text-gray-800 dark:text-white tracking-tighter transition-colors duration-300"
                >
                    Experience
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-12"
                >
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="relative flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex-shrink-0">
                                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 p-2 shadow-lg transform hover:rotate-3 transition-transform duration-300">
                                    <Image
                                        src={experience.logo}
                                        alt={`${experience.company} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                    {experience.title}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    {experience.company} • <span className="text-blue-500 dark:text-blue-400">{experience.period}</span>
                                </p>

                                <ul className="mt-4 space-y-3">
                                    {experience.description.map((item, i) => (
                                        <li key={i} className="flex items-start group">
                                            <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500 dark:bg-blue-400 group-hover:scale-125 transition-transform duration-300"></span>
                                            <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {experience.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 text-sm rounded-xl bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center gap-2 hover:shadow-md hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-600"
                                        >
                                            <skill.icon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
