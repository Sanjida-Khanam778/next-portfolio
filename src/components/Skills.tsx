"use client";
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const SkillCategory = ({ title, skills, delay }: { title: string, skills: string[], delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors"
        >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors cursor-default"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive stack of modern technologies I use to build scalable and performant applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SkillCategory title="Frontend" skills={portfolioData.skills.frontend} delay={0.1} />
                    <SkillCategory title="Backend" skills={portfolioData.skills.backend} delay={0.2} />
                    <SkillCategory title="Tools" skills={portfolioData.skills.tools} delay={0.3} />
                    <SkillCategory title="Soft Skills" skills={portfolioData.skills.interpersonal} delay={0.4} />
                </div>
            </div>
        </section>
    );
};
