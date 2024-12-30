'use client'

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, School } from 'lucide-react';

export function Education() {
    const educationItems = [
        {
            degree: "Applied Degree in Software Engineering",
            institution: "Lithan Educlaas",
            period: "2023 - Ongoing",
            icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
            logo: "/resources/lithan.png", // Add your image path
            description: "Pursuing advanced software engineering concepts and practical applications"
        },
        {
            degree: "Bachelor of Science in Information Technology - Software Engineering",
            institution: "First City Providential College",
            period: "2023 - Ongoing",
            icon: <BookOpen className="w-6 h-6 text-green-500" />,
            logo: "/resources/fcpc.png", // Add your image path
            description: "Focusing on software development and engineering principles"
        },
        {
            degree: "General Academic Strand (GAS)",
            institution: "Sapang Palay National High School",
            period: "2021 - 2023",
            icon: <School className="w-6 h-6 text-purple-500" />,
            logo: "/resources/spnhs.png", // Add your image path
            description: "Completed secondary education with focus on academic excellence"
        }
    ];

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
                className="text-2xl font-bold text-gray-800 dark:text-white tracking-tighter transition-colors duration-300 pb-8"
            >
                Educational Timeline
            </motion.h2>

            <div className="relative">
                {/* Animated Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse" />

                {educationItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                        className="mb-12 ml-16 relative group"
                    >
                        {/* Animated Timeline dot */}
                        <motion.div
                            className="absolute -left-20 mt-1.5 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                                {item.icon}
                            </div>
                        </motion.div>

                        <Card className="transform hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-500 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <motion.div
                                    className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 shadow-inner"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <img
                                        src={item.logo}
                                        alt={`${item.institution} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </motion.div>
                                <div>
                                    <CardTitle className="text-xl font-bold tracking-tighter text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {item.degree}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600 dark:text-gray-300 font-medium">
                                        {item.institution}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-blue-500 dark:text-blue-400">
                                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                                    {item.period}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-blue-500/50 pl-4">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
