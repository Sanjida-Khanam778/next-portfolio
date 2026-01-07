"use client";
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
  
export const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:shadow-cyan-500/10 hover:shadow-lg transition-all"
                        >
                            {/* Project Image */}
                            <Link href={`/projects/${project.id || index}`} className="block h-48 bg-slate-800 relative overflow-hidden group-hover:opacity-100 transition-opacity cursor-pointer">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 text-slate-600">
                                            <Folder className="w-16 h-16 opacity-20" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                                    </>
                                )}
                            </Link>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <Link href={`/projects/${project.id || index}`} className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </Link>
                                    <div className="flex gap-3">
                                        {/* Website or Client Repo */}
                                        {(project.links.website || project.links.client) && (
                                            <a
                                                href={project.links.website || project.links.client}
                                                className="text-slate-400 hover:text-cyan-400"
                                                title={project.links.website ? "Website Repo" : "Client Repo"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}

                                        {/* Admin Dashboard or Server Repo */}
                                        {(project.links.admin_dashboard || project.links.server) && (
                                            <a
                                                href={project.links.admin_dashboard || project.links.server}
                                                className="text-slate-400 hover:text-cyan-400"
                                                title={project.links.admin_dashboard ? "Admin Dashboard" : "Server Repo"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}

                                        {/* Live Link */}
                                        <a href={project.links.live} className="text-slate-400 hover:text-cyan-400" title="Live Demo" target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 4).map((tech, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-slate-800 text-cyan-200/80 rounded border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded border border-slate-700">
                                            +{project.tech.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
