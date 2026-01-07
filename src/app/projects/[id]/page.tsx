"use client";
import React from "react";
import { useParams } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetails() {
    const params = useParams();
    const id = params?.id as string;

    // In a real app with many projects, you might want to valid / handle not found
    const project = portfolioData.projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-slate-400 pt-20">
                <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                <p className="mb-8">Could not find project with ID: <code className="bg-slate-800 px-2 py-1 rounded">{id}</code></p>
                <Link href="/#projects" className="px-6 py-2 bg-slate-800 rounded-full hover:bg-slate-700 text-slate-200 transition-colors">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-20">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                </Link>

                {/* Hero Section of Project */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        {project.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 space-y-12"
                    >
                        {/* Features */}
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Key Features</h2>
                            <ul className="space-y-4">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start text-slate-300">
                                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Challenges & Improvements */}
                        {(project.challenges || project.improvements) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.challenges && (
                                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                                        <h3 className="text-xl font-bold mb-4 text-violet-400">Challenges</h3>
                                        <p className="text-slate-300 leading-relaxed">
                                            {project.challenges}
                                        </p>
                                    </div>
                                )}
                                {project.improvements && (
                                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                                        <h3 className="text-xl font-bold mb-4 text-cyan-400">Future Improvements</h3>
                                        <p className="text-slate-300 leading-relaxed">
                                            {project.improvements}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Screenshots / Image */}
                        <div className="bg-slate-900/50 p-2 rounded-2xl border border-slate-800 overflow-hidden relative">
                            {project.image ? (
                                <div className="relative aspect-video w-full rounded-xl overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="py-20 text-center">
                                    <p className="text-slate-500">Project Screenshots / Demo Video Placeholder</p>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Links */}
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                            <h3 className="text-lg font-semibold mb-4 text-slate-100">Project Links</h3>
                            <div className="space-y-3">
                                {project.links.live && (
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-slate-950 rounded-lg text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 border border-transparent transition-all">
                                        <span className="flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Live Demo</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                                    </a>
                                )}

                                {(project.links.website || project.links.client) && (
                                    <a href={project.links.website || project.links.client} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-slate-950 rounded-lg text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 border border-transparent transition-all">
                                        <span className="flex items-center gap-2">
                                            <Github className="w-4 h-4" />
                                            {project.links.website ? "Website Repo" : "Client Repo"}
                                        </span>
                                    </a>
                                )}

                                {(project.links.admin_dashboard || project.links.server) && (
                                    <a href={project.links.admin_dashboard || project.links.server} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-slate-950 rounded-lg text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 border border-transparent transition-all">
                                        <span className="flex items-center gap-2">
                                            <Github className="w-4 h-4" />
                                            {project.links.admin_dashboard ? "Admin Dashboard" : "Server Repo"}
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                            <h3 className="text-lg font-semibold mb-4 text-slate-100">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-slate-950 text-cyan-200/80 rounded-full text-sm border border-slate-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div >

            <Contact />
        </main >
    );
}

// Simple ArrowRight component for the link
const ArrowRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
)
