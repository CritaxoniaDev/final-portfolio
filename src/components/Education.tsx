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
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500" />

                {educationItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                        className="mb-8 ml-16 relative"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-20 mt-1.5 w-6 h-6 rounded-full bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center">
                            {item.icon}
                        </div>

                        <Card className="transform dark:hover:shadow-gray-800/30">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    <img
                                        src={item.logo}
                                        alt={`${item.institution} logo`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-semibold tracking-tighter text-gray-800 dark:text-white">
                                        {item.degree}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600 tracking-tighter dark:text-gray-300">
                                        {item.institution}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 tracking-tighter dark:text-gray-400 mb-2">
                                    {item.period}
                                </p>
                                <p className="text-gray-600 tracking-tighter dark:text-gray-300">
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
