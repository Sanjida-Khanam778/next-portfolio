"use client";
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const StarBackground = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [stars, setStars] = useState<{ x: number; y: number; size: number; duration: number }[]>([]);

    useEffect(() => {
        // Generate star positions only on client to avoid hydration mismatch
        const generateStars = () => {
            const newStars = [];
            for (let i = 0; i < 100; i++) {
                newStars.push({
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 2 + 1,
                    duration: Math.random() * 3 + 2,
                });
            }
            setStars(newStars);
        }
        generateStars();
    }, []);

    return (
        <div ref={ref} className="fixed inset-0 z-0 bg-slate-950 overflow-hidden pointer-events-none">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 opacity-90" />

            {/* Stars */}
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Shooting Star Effect (Simplified) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <motion.div
                    className="absolute h-0.5 w-[100px] bg-gradient-to-r from-transparent via-white to-transparent"
                    initial={{ top: "10%", left: "-10%", opacity: 0, rotate: 45 }}
                    animate={{ left: "120%", top: "40%", opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
                />
                <motion.div
                    className="absolute h-0.5 w-[80px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    initial={{ top: "40%", left: "-10%", opacity: 0, rotate: 30 }}
                    animate={{ left: "120%", top: "80%", opacity: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 7, ease: "linear", delay: 1 }}
                />
            </div>
        </div>
    );
};
