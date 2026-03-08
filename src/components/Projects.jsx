import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
    {
        title: 'JobMatch Evaluator',
        description:
            'An AI-powered platform where users upload their resume and a job description to analyze job compatibility using AI and get a job-fit score with detailed insights.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Cohere AI'],
        github: 'https://github.com/Abhishek-IEM',
        live: 'https://jobmatch-ai-f1yg.onrender.com/',
        emoji: '🤖',
        gradient: 'from-violet-600 to-purple-600',
    },
    {
        title: 'Real-Time Code Editor',
        description:
            'A collaborative real-time code editor that supports multiple programming languages with instant code execution and synchronized editing using WebSockets.',
        tech: ['React.js', 'Node.js', 'Express.js', 'WebSockets', 'Piston API'],
        github: 'https://github.com/Abhishek-IEM',
        live: 'https://real-time-code-editor-git-main-as6119552-gmailcoms-projects.vercel.app/',
        emoji: '⚡',
        gradient: 'from-blue-600 to-cyan-500',
    },
    {
        title: 'Text to AI Image Generator',
        description:
            'An AI-powered web application that converts text prompts into images with secure authentication and premium subscription payments using Razorpay.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Clipdrop API'],
        github: 'https://github.com/Abhishek-IEM',
        live: 'https://text-to-ai-image-generator.onrender.com/',
        emoji: '🎨',
        gradient: 'from-pink-600 to-rose-500',
    },
    {
        title: 'AI Powered Chatbot',
        description:
            "An intelligent chatbot application that generates contextual responses using Google's Gemini API with a modern, responsive interface.",
        tech: ['Next.js', 'TypeScript', 'Gemini API'],
        github: 'https://github.com/Abhishek-IEM',
        live: 'https://ai-powered-chatbot-five.vercel.app/',
        emoji: '💬',
        gradient: 'from-green-600 to-emerald-500',
    },
    {
        title: 'Expense Management System',
        description:
            'A full-stack expense tracker that allows users to manage income and expenses, track financial records, and visualize spending patterns.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        github: 'https://github.com/Abhishek-IEM',
        live: 'https://expense-app-deployment.onrender.com/',
        emoji: '💰',
        gradient: 'from-orange-600 to-amber-500',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
}

export default function Projects() {
    return (
        <section id="projects" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="text-center text-primary-500 font-mono text-sm mb-2"
                >
          // featured_projects()
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }}
                    className="section-title gradient-text"
                >
                    Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
                    className="section-subtitle"
                >
                    A selection of projects I've built — from AI tools to real-time collaborative apps.
                </motion.p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="glass-card group flex flex-col overflow-hidden"
                        >
                            {/* Top gradient banner */}
                            <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

                            <div className="p-6 flex flex-col flex-1 gap-4">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-3">
                                    <div className={`text-4xl p-2 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                                        {project.emoji}
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200"
                                        >
                                            <FaGithub size={18} />
                                        </a>
                                    </div>
                                </div>

                                {/* Title + description */}
                                <div className="flex-1 flex flex-col gap-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Actions / Demo */}
                                    <div className="mt-auto space-y-2">
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center justify-center gap-2 w-full text-sm font-semibold rounded-xl px-4 py-2 bg-primary-500/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white transition-colors duration-300 shadow-sm"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                            Live Demo
                                        </motion.a>

                                        {project.live.includes('.onrender.com') && (
                                            <p className="text-[11px] text-amber-600/90 dark:text-amber-500/90 leading-tight">
                                                ⚠️ First load may take a few seconds due to server cold start.
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-200/60 dark:border-white/5">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}
