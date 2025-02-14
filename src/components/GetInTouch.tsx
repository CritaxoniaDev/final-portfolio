'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Canvas } from '@react-three/fiber'
import { Rocket } from './3d/Rocket'
import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react'

export function GetInTouch() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(form.current!);
        const templateParams = {
            from_name: formData.get('user_name'),
            from_email: formData.get('user_email'),
            message: formData.get('message'),
            to_name: 'Admin', // You can customize this
        };

        emailjs.send(
            'service_3c0ag6k', // Replace with your EmailJS service ID
            'template_dywlxfj', // Replace with your EmailJS template ID
             templateParams,
            '3Nc8bkOUze2HISbWo' // Replace with your EmailJS public key
        )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                if (form.current) form.current.reset();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section className="py-10 mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold tracking-tighter">Get in Touch</h2>
                    <p className="text-muted-foreground text-lg font-medium tracking-tight mb-8">
                        Have a project in mind? Let's work together to create something amazing.
                    </p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <Input
                            name="user_name"
                            placeholder="Your Name"
                            className="border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                            required
                        />

                        <Input
                            name="user_email"
                            type="email"
                            placeholder="Your Email"
                            className="border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                            required
                        />

                        <Textarea
                            name="message"
                            placeholder="Your Message"
                            className="min-h-[150px] border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                            required
                        />

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
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
