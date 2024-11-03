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
            className="flex flex-col justify-center items-center pt-32"
        >
            <div className="text-center space-y-4 pb-8 relative z-10">
                <div className="relative">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left pl-4 text-lg md:text-xl font-mono tracking-tighter bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-transparent bg-clip-text"
                    >
                        <span className="text-gray-500">String</span>{" "}
                        <span className="text-blue-500">status</span>{" "}
                        <span className="text-gray-500">=</span>{" "}
                        <span className="text-green-500">"2nd Year Student"</span>;
                    </motion.p>
                    <motion.h1
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter"
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
                    className="text-lg md:text-xl text-gray-600 font-inter tracking-tighter"
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
                    className="flex justify-center space-x-6 mt-8"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="default"
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 flex items-center gap-2"
                        >
                            <FaPlay className="w-4 h-4" />
                            Video Introduction
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="default"
                            size="lg"
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 flex items-center gap-2"
                        >
                            <HiDownload className="w-4 h-4" />
                            Download CV
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );

}
