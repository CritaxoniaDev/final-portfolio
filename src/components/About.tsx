'use client'

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function About() {
    const [timeAlive, setTimeAlive] = useState("");

    useEffect(() => {
        const calculateTimeAlive = () => {
            const birthDate = new Date('2005-10-15');
            const now = new Date();
            const diff = now.getTime() - birthDate.getTime();

            const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
            const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
            const days = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
            const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
            const seconds = Math.floor((diff % (60 * 1000)) / 1000);

            return `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        };

        const interval = setInterval(() => {
            setTimeAlive(calculateTimeAlive());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 px-4"
        >
            <div className="space-y-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold text-gray-800 dark:text-white tracking-tighter transition-colors duration-300"
                >
                    About Me
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 dark:text-white space-y-4 tracking-tighter text-justify transition-colors duration-300"
                >
                    <p>
                        My name is Gian Raphael Alcantara, I am {timeAlive} old, a dedicated software engineering student at First City Providential College. My mission revolves around mastering programming languages, algorithms, and software development methodologies.
                    </p>
                    <p>
                        Fueled by a relentless passion for technology and innovation, I aspire to become a proficient software engineer capable of tackling complex problems and contributing to groundbreaking projects.
                    </p>
                    <p>
                        My vision extends beyond mere academic excellence; I aim to leverage my skills to create impactful solutions that address real-world challenges, whether it's enhancing user experiences, optimizing system performance, or revolutionizing industries through cutting-edge software solutions.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
