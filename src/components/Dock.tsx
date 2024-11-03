'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export function Dock() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-black/80 backdrop-blur-lg rounded-full p-2 shadow-lg dark:shadow-gray-900/30 border border-gray-200 dark:border-gray-800 transition-all duration-300"
        >
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                {isDark ? (
                    <Sun className="w-5 h-5 text-gray-800 dark:text-white" />
                ) : (
                    <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
                )}
            </motion.button>
        </motion.div>
    );
}
