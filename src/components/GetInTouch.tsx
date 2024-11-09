'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Canvas } from '@react-three/fiber'
import { Rocket } from './3d/Rocket'

export function GetInTouch() {
    return (
        <section className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold tracking-tighter">Get in Touch</h2>
                    <p className="text-muted-foreground text-lg">
                        Have a project in mind? Let's work together to create something amazing.
                    </p>

                    <form className="space-y-4">
                        <Input placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <Textarea placeholder="Your Message" className="min-h-[150px]" />
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                        >
                            Send Message
                        </Button>
                    </form>
                </div>

                <div className="h-[400px] mt-10">
                    <Canvas
                        camera={{ fov: 60, near: 1, far: 10000 }}
                        gl={{ antialias: true }}
                    >
                        <Rocket />
                    </Canvas>
                </div>
            </motion.div>
        </section>
    )
}
