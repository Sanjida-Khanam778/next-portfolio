"use client";
import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";

export const Contact = () => {
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        const msgData = {
            name, email, message
        }

        try {
            const { data } = await axios.post('https://portfolio-server-nine-umber.vercel.app/sendMails', msgData);
            if (data) {
                Swal.fire({
                    title: "Message sent!",
                    icon: "success",
                    draggable: true,
                    background: "#020617",
                    color: "#ffffff",
                    confirmButtonColor: "#06b6d4",
                });
                form.reset();
            }
        } catch (error) {
            Swal.fire({
                title: "Failed to send!",
                text: "Please try again later.",
                icon: "error",
                background: "#020617",
                color: "#ffffff",
                confirmButtonColor: "#06b6d4",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <footer id="contact" className="pt-20 relative bg-slate-950 border-t border-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">
                            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Connect</span>
                        </h2>
                        <p className="text-slate-400 max-w-md">
                            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                                <Mail className="w-5 h-5 text-cyan-500" />
                                {portfolioData.personalInfo.email}
                            </a>
                            <div className="flex items-center gap-3 text-slate-300">
                                <Phone className="w-5 h-5 text-cyan-500" />
                                {portfolioData.personalInfo.phone}
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <MapPin className="w-5 h-5 text-cyan-500" />
                                {portfolioData.personalInfo.location}
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a
                                href={portfolioData.personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href={portfolioData.personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Simple Contact Form */}
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input name="name" type="text" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input name="email" type="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                                <textarea name="message" required rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Hello..." />
                            </div>
                            <button type="submit" disabled={isSending} className="w-full py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-900 py-8 text-center text-slate-500 text-sm flex items-center justify-center gap-1">
                    <p>© 2025 {portfolioData.personalInfo.name}</p>

                </div>
            </div>
        </footer>
    );
};
