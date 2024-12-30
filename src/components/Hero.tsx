'use client'

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FaGithub, FaFacebook, FaPlay } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiDownload } from 'react-icons/hi'

export function Hero() {

    const iconVariants = {
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center pt-36"
        >
            <div className="text-center space-y-4 pb-8 relative z-10">
                <div className="relative">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left pl-4 text-lg md:text-xl font-mono tracking-tight relative group"
                    >
                        <span className="absolute -left-2 text-gray-400 group-hover:text-gray-500 transition-colors duration-300">1</span>
                        <span className="text-pink-500 dark:text-pink-400">const</span>{" "}
                        <span className="text-blue-500 dark:text-blue-400">status</span>{" "}
                        <span className="text-gray-400 dark:text-gray-500">=</span>{" "}
                        <span className="text-amber-500 dark:text-amber-400">'2nd Year Student'</span>
                        <span className="text-gray-400 dark:text-gray-500">;</span>
                        <span className="absolute -left-2 top-0 h-full w-1 bg-primary/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                    </motion.p>
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            type: 'spring',
                            stiffness: 120,
                            damping: 15
                        }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white relative border-b-4 border-gray-900 dark:border-white pb-2"
                        style={{
                            textShadow: '2px 2px 0 #000, -2px -2px 0 #fff',
                            WebkitTextStroke: '1px #000'
                        }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                    >
                        Gian Raphael Alcantara
                    </motion.h1>

                    <motion.img
                        src="/resources/hello-person.png"
                        alt="Decorative overlay"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.8, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute -top-14 left-[85%] transform -translate-x-1/2 w-32 h-32 object-cover mix-blend-overlay pointer-events-none"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-00 font-inter tracking-tighter"
                >
                    BSIT - Software Engineering Student at First City Providential College. and an aspiring Full-Stack Developer based in Bulacan, Philippines.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center space-x-4 mt-6"
                >
                    <motion.a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 shadow-md hover:shadow-xl transform transition-all duration-300"
                        whileHover="hover"
                        variants={iconVariants}
                    >
                        <FaGithub className="w-5 h-5 text-white" />
                    </motion.a>

                    <motion.a
                        href="https://facebook.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-md hover:shadow-xl transform transition-all duration-300"
                        whileHover="hover"
                        variants={iconVariants}
                    >
                        <FaFacebook className="w-5 h-5 text-white" />
                    </motion.a>

                    <motion.a
                        href="mailto:your.email@example.com"
                        className="p-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 shadow-md hover:shadow-xl transform transition-all duration-300"
                        whileHover="hover"
                        variants={iconVariants}
                    >
                        <MdEmail className="w-5 h-5 text-white" />
                    </motion.a>
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center space-x-8 mt-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                        <Button
                            variant="default"
                            size="lg"
                            className="relative px-8 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-purple-500/50 flex items-center gap-3 rounded-lg transition-all duration-500"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                                <FaPlay className="w-5 h-5" />
                            </motion.div>
                            <span className="font-semibold tracking-wide">Video Introduction</span>
                        </Button>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                        <Button
                            variant="default"
                            size="lg"
                            className="relative px-8 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl hover:shadow-emerald-500/50 flex items-center gap-3 rounded-lg transition-all duration-500"
                        >
                            <motion.div
                                whileHover={{ y: -3 }}
                                transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
                            >
                                <HiDownload className="w-5 h-5" />
                            </motion.div>
                            <span className="font-semibold tracking-wide">Download CV</span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );

}
