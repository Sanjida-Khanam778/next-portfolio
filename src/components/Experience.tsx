"use client";
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-20 relative bg-slate-900/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Experience</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 md:-ml-px h-full w-0.5 bg-slate-800" />

                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative flex items-start mb-12 md:mb-20 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                        >
                            {/* Icon Bubble */}
                            <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-4 mt-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-950 border-2 border-cyan-500 z-10 flex items-center justify-center">
                                <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
                            </div>

                            {/* Content Card */}
                            <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                                }`}>
                                <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl relative hover:border-cyan-500/30 transition-colors">
                                    <span className="text-cyan-400 text-sm font-semibold mb-1 block">
                                        {exp.period}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                                    <h4 className="text-lg text-slate-400 mb-4">{exp.company}</h4>
                                    <ul className="space-y-2">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-cyan-500/50 rounded-full flex-shrink-0" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
