import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = ['home', 'about', 'skills', 'projects', 'contact']

export default function Navbar({ darkMode, setDarkMode }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 dark:bg-dark-card/80 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-200/60 dark:border-white/5'
                    : 'bg-transparent'
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="home" smooth spy offset={-80} className="cursor-pointer">
                    <span className="text-xl font-bold gradient-text font-mono">&lt;AS /&gt;</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <Link
                                to={link}
                                smooth
                                spy
                                offset={-80}
                                activeClass="text-primary-500 font-semibold"
                                className="text-sm capitalize text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Controls */}
                <div className="flex items-center gap-3">
                    <button
                        id="theme-toggle"
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors duration-200 text-gray-700 dark:text-gray-300"
                    >
                        {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
                    </button>

                    <button
                        id="menu-toggle"
                        className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors duration-200 text-gray-700 dark:text-gray-300"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-dark-card/95 backdrop-blur-md border-b border-gray-200/60 dark:border-white/5"
                    >
                        <ul className="flex flex-col gap-1 px-6 py-4">
                            {navLinks.map((link) => (
                                <li key={link}>
                                    <Link
                                        to={link}
                                        smooth
                                        spy
                                        offset={-80}
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-2.5 text-sm capitalize text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
