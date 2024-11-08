'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(progress)
        }

        window.addEventListener('scroll', updateScroll)
        return () => window.removeEventListener('scroll', updateScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50">
            <div 
                className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    )
}
