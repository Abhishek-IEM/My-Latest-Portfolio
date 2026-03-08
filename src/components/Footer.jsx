import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { Link } from 'react-scroll'

const socials = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Abhishek-IEM' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishek-sharma-63901a283/' },
    { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/u/Abhishek090602/' },
    { icon: SiGeeksforgeeks, label: 'GFG', href: 'https://www.geeksforgeeks.org/profile/as611vndq' },
]

const navLinks = ['home', 'about', 'skills', 'projects', 'contact']

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-gray-200/60 dark:border-white/5 bg-white/40 dark:bg-dark-card/40 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <span className="text-xl font-bold gradient-text font-mono">&lt;AS /&gt;</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Full Stack Developer · MERN Stack · AI Enthusiast
                        </p>
                    </div>

                    {/* Nav links */}
                    <ul className="flex items-center gap-5 flex-wrap justify-center">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <Link
                                    to={link}
                                    smooth
                                    offset={-80}
                                    className="text-sm capitalize text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Socials */}
                    <div className="flex gap-3">
                        {socials.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200/60 dark:border-white/5 mt-8 pt-6 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1.5">
                        &copy; {year} Abhishek Sharma. Made with
                        <FaHeart className="text-red-500 animate-pulse" size={12} />
                        in Kolkata, India.
                    </p>
                </div>
            </div>
        </footer>
    )
}
