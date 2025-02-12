'use client'

import { Timeline } from "@/components/ui/timeline";
import { GraduationCap, BookOpen, School } from 'lucide-react';

export function Education() {
    const timelineData = [
        {
            title: "2023 - Present",
            content: (
                <div className="group bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 border-2 border-black/10 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] ml-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <GraduationCap className="w-8 h-8 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl tracking-tighter text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                                Applied Degree in Software Engineering
                            </h3>
                            <p className="text-neutral-700 dark:text-neutral-300 font-medium">Lithan Educlaas</p>
                        </div>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 pl-4 border-l-2 border-blue-500/20 group-hover:border-blue-500 transition-colors duration-300">
                        Pursuing advanced software engineering concepts and practical applications
                    </p>
                </div>
            ),
        },
        {
            title: "2023 - Present",
            content: (
                <div className="group bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 border-2 border-black/10 dark:border-white/10 hover:border-green-500/50 dark:hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] dark:hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] ml-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-green-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <BookOpen className="w-8 h-8 text-green-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl tracking-tighter text-gray-800 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-300">
                                Bachelor of Science in Information Technology
                            </h3>
                            <p className="text-neutral-700 dark:text-neutral-300 font-medium">First City Providential College</p>
                        </div>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 pl-4 border-l-2 border-green-500/20 group-hover:border-green-500 transition-colors duration-300">
                        Focusing on software development and engineering principles
                    </p>
                </div>
            ),
        },
        {
            title: "2021 - 2023",
            content: (
                <div className="group bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 border-2 border-black/10 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-purple-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <School className="w-8 h-8 text-purple-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl tracking-tighter text-gray-800 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                                General Academic Strand (GAS)
                            </h3>
                            <p className="text-neutral-700 dark:text-neutral-300 font-medium">Sapang Palay National High School</p>
                        </div>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 pl-4 border-l-2 border-purple-500/20 group-hover:border-purple-500 transition-colors duration-300">
                        Completed secondary education with focus on academic excellence
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="font-inter">
            <Timeline data={timelineData} />
        </div>
    );
}
