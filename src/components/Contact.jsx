import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

const contactInfo = [
    { icon: HiMail, label: 'Email', value: 'as6119552@gmail.com', href: 'mailto:as6119552@gmail.com' },
    { icon: HiPhone, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
    { icon: HiLocationMarker, label: 'Location', value: 'Kolkata, West Bengal, India', href: null },
]

const socials = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Abhishek-IEM' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishek-sharma-63901a283/' },
    { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/u/Abhishek090602/' },
    { icon: SiGeeksforgeeks, label: 'GFG', href: 'https://www.geeksforgeeks.org/profile/as611vndq' },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch("https://formspree.io/f/myzpawok", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    _subject: "New Portfolio Message" // Custom subject line
                }),
            })

            if (response.ok) {
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
                setTimeout(() => setStatus(null), 3000)
            } else {
                throw new Error("Formspree returned an error")
            }
        } catch (error) {
            console.error(error)
            setStatus('error')
            setTimeout(() => setStatus(null), 3000)
        }
    }

    return (
        <section id="contact" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="text-center text-primary-500 font-mono text-sm mb-2"
                >
          // say_hello()
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }}
                    className="section-title gradient-text"
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
                    className="section-subtitle"
                >
                    Have a project in mind, or just want to say hi? My inbox is always open.
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Info column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            I'm currently open to <span className="text-primary-500 font-semibold">full-time roles, internships,
                                and freelance opportunities</span>. Whether you have a question or just want to connect, feel free to reach out!
                        </p>

                        {/* Contact cards */}
                        <div className="space-y-4">
                            {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                <div key={label} className="glass-card p-4 flex items-center gap-4">
                                    <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-500 flex-shrink-0">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                                        {href ? (
                                            <a href={href} className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary-500 transition-colors">
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-800 dark:text-gray-200 font-medium">{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social links */}
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Connect on social</p>
                            <div className="flex gap-3">
                                {socials.map(({ icon: Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="p-3 rounded-xl glass-card text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/40 transition-all duration-200"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }} viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or idea..."
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-colors resize-none"
                                />
                            </div>

                            <button
                                id="contact-submit"
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <>✅ Message sent successfully!</>
                                ) : status === 'error' ? (
                                    <>❌ Error sending message</>
                                ) : (
                                    <>
                                        <HiPaperAirplane size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
