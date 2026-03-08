import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { HiDownload, HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'

const socials = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Abhishek-IEM' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishek-sharma-63901a283/' },
    { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/u/Abhishek090602/' },
    { icon: SiGeeksforgeeks, label: 'GFG', href: 'https://www.geeksforgeeks.org/profile/as611vndq' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center section-padding pt-28"
        >
            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium">
                            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                            Available for opportunities
                        </span>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">Hey there! I'm</p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                            <span className="gradient-text">Abhishek</span>
                            <br />
                            <span className="text-gray-900 dark:text-white">Sharma</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 h-14">
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer', 2000,
                                'MERN Stack Specialist', 2000,
                                'AI Enthusiast', 2000,
                                'Problem Solver', 2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="gradient-text"
                        />
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
                        B.Tech CSE (IoT) student at IEM Kolkata, passionate about building scalable web applications
                        and integrating AI to solve real-world problems.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                        <a
                            id="resume-download"
                            href="/Abhishek_Sharm_Resume.pdf"
                            download
                            className="btn-primary"
                        >
                            <HiDownload size={18} />
                            Download Resume
                        </a>
                        <Link to="projects" smooth offset={-80}>
                            <button id="view-projects" className="btn-secondary cursor-pointer">
                                View Projects
                            </button>
                        </Link>
                    </motion.div>

                    {/* Socials */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
                        {socials.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/40 hover:bg-primary-500/5 transition-all duration-200"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right: Animated avatar card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 to-accent opacity-20 blur-2xl scale-110 animate-pulse" />

                        <div className="relative glass-card p-1 w-72 h-72 md:w-80 md:h-80">
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent flex items-center justify-center overflow-hidden">
                                {/* Code snippet decoration */}
                                <div className="text-white/90 font-mono text-sm p-6 space-y-2">
                                    <div><span className="text-accent">const</span> <span className="text-white">dev</span> = {'{'}</div>
                                    <div className="pl-4"><span className="text-primary-200">name:</span> <span className="text-yellow-300">'Abhishek'</span>,</div>
                                    <div className="pl-4"><span className="text-primary-200">role:</span> <span className="text-yellow-300">'Full Stack'</span>,</div>
                                    <div className="pl-4"><span className="text-primary-200">stack:</span> <span className="text-yellow-300">'MERN'</span>,</div>
                                    <div className="pl-4"><span className="text-primary-200">cgpa:</span> <span className="text-green-300">8.98</span>,</div>
                                    <div className="pl-4"><span className="text-primary-200">passion:</span> <span className="text-yellow-300">'AI'</span></div>
                                    <div>{'}'}</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-4 -right-4 glass-card px-3 py-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400"
                        >
                            CGPA: 8.98 🎓
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute -bottom-4 -left-4 glass-card px-3 py-1.5 text-xs font-semibold text-accent"
                        >
                            Open to Work ✨
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <Link to="about" smooth offset={-80} className="cursor-pointer">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary-500 transition-colors"
                    >
                        <span className="text-xs">scroll</span>
                        <HiArrowDown size={16} />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    )
}
