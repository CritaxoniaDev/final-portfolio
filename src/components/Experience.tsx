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
                            className="relative flex gap-6 p-6 rounded-xl bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex-shrink-0">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-gray-800 p-2">
                                    <Image
                                        src={experience.logo}
                                        alt={`${experience.company} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {experience.title}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    {experience.company} • {experience.period}
                                </p>

                                <ul className="mt-4 space-y-2">
                                    {experience.description.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {experience.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-2"
                                        >
                                            <skill.icon className="w-4 h-4" />
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
