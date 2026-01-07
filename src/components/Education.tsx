"use client";
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export const Education = () => {
    return (
        <section id="education" className="py-20 bg-slate-950/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center justify-center gap-3">
                        Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Qualifaction</span>
                        <GraduationCap className="w-8 h-8 text-violet-400" />
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-4 border-l-cyan-500 rounded-r-xl bg-slate-900/40 p-6 hover:bg-slate-900/60 transition-colors group"
                            style={{
                                borderLeftColor: index === 0 ? '#06b6d4' : index === 1 ? '#22c55e' : '#a855f7'
                            }}
                        >
                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                                {edu.degree}
                            </h3>
                            <p className="text-slate-400 mt-1 text-lg">
                                {edu.institution}
                            </p>
                            <div className="flex gap-4 items-center mt-2 text-sm">
                                <span className="text-slate-500">{edu.period}</span>
                                {edu.grade && (
                                    <span className="px-3 py-1 bg-slate-800 rounded-full text-cyan-400 font-medium">
                                        {edu.grade}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
