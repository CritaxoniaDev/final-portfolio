'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Moon, Sun, User, GraduationCap, Code, FolderGit2, Mail, Home } from 'lucide-react';

export function Dock() {
    const [isDark, setIsDark] = useState(true);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    const navItems = [
        { icon: Home, id: 'hero', label: 'Home' },
        { icon: User, id: 'about', label: 'About' },
        { icon: GraduationCap, id: 'education', label: 'Education' },
        { icon: Code, id: 'skills', label: 'Skills' },
        { icon: FolderGit2, id: 'project', label: 'Projects' },
        { icon: Mail, id: 'contact', label: 'Contact' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/80 dark:bg-black/80 backdrop-blur-lg rounded-full p-2 shadow-lg dark:shadow-gray-900/30 border border-gray-200 dark:border-gray-800 transition-all duration-300"
            >
                <div className="flex items-center gap-2">
                    {navItems.map((item) => (
                        <motion.button
                            key={item.id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection(item.id)}
                            className={`p-2 rounded-full transition-all duration-300 group relative ${
                                activeSection === item.id 
                                ? 'bg-gray-100 dark:bg-gray-800 shadow-md' 
                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                        >
                            <item.icon className={`w-5 h-5 transition-colors duration-300 ${
                                activeSection === item.id
                                ? 'text-blue-500 dark:text-blue-400'
                                : 'text-gray-800 dark:text-white'
                            }`} />
                            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {item.label}
                            </span>
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                    <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-2" />
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group relative"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5 text-gray-800 dark:text-white" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
                        )}
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            Toggle theme
                        </span>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
