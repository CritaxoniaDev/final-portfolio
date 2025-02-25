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
];

export function Experience() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 px-4 tracking-tighter"
        >
            <div className="space-y-8">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent tracking-tighter transition-colors duration-300"
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
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.1 * index,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="relative flex gap-6 p-8 bg-gradient-to-br from-gray-50/80 via-white to-gray-100/80 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 rounded-sm border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
                        >
                            <div className="flex-shrink-0">
                                <motion.div
                                    whileHover={{ rotate: 8, scale: 1.1 }}
                                    className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 p-2 shadow-xl border border-gray-100 dark:border-gray-700"
                                >
                                    <Image
                                        src={experience.logo}
                                        alt={`${experience.company} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>
                            </div>

                            <div className="flex-grow">
                                <motion.h3
                                    whileHover={{ x: 10 }}
                                    className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                >
                                    {experience.title}
                                </motion.h3>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    {experience.company} • <span className="text-blue-500 dark:text-blue-400">{experience.period}</span>
                                </p>

                                <ul className="mt-4 space-y-3">
                                    {experience.description.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start group"
                                            whileHover={{ x: 10 }}
                                        >
                                            <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500 dark:bg-blue-400 group-hover:scale-150 group-hover:rotate-180 transition-all duration-300"></span>
                                            <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {experience.skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{ scale: 1.1 }}
                                            className="px-4 py-2 text-sm rounded-xl bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 flex items-center gap-2 hover:shadow-lg transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm"
                                        >
                                            <skill.icon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                                            {skill.name}
                                        </motion.span>
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