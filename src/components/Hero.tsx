"use client";
import prof from "../assets/prof.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 md:order-1 text-center md:text-left"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-cyan-400 mb-2">
                        Hello, I&apos;m
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-slate-100">
                        {portfolioData.personalInfo.name}
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-slate-400 mb-6 font-light">
                        {portfolioData.personalInfo.title}
                    </h3>
                    <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {portfolioData.personalInfo.objective}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <a
                            href="#projects"
                            className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center gap-2"
                        >
                            View Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1f--acGhKKRO6BzGxlTLIKxVpLE5Xrw3f/view?usp=sharing" download target="_blank" rel="noopener noreferrer"
                            className="px-8 py-3 bg-slate-900 border border-slate-700 text-slate-300 font-semibold rounded-full hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2"
                        >
                            Download CV
                            <Download className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center relative"
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl transform scale-110" />

                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-slate-900 to-violet-500">
                        <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-950">
                            <Image
                                src={prof}
                                alt={portfolioData.personalInfo.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
