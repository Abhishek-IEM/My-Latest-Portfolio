import { motion } from 'framer-motion'
import {
    SiC,
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiGit,
    SiGithub,
    SiDocker,
    SiPostman
} from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { FaAws } from "react-icons/fa";

const skillCategories = [
    {
        title: 'Languages',
        icon: '💻',
        color: 'from-blue-500 to-cyan-500',
        skills: [
            { name: 'C', icon: SiC },
            { name: 'C++', icon: SiCplusplus },
            { name: 'Java', icon: FaJava },
            { name: 'Python', icon: SiPython },
            { name: 'JavaScript', icon: SiJavascript },
            { name: 'TypeScript', icon: SiTypescript },
        ],
    },
    {
        title: 'Frontend',
        icon: '🎨',
        color: 'from-purple-500 to-pink-500',
        skills: [
            { name: 'React.js', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'HTML5', icon: FaHtml5 },
            { name: 'CSS3', icon: FaCss3Alt },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'Bootstrap', icon: SiBootstrap },
        ],
    },
    {
        title: 'Backend',
        icon: '⚙️',
        color: 'from-green-500 to-emerald-500',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express.js', icon: SiExpress },
        ],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        color: 'from-orange-500 to-amber-500',
        skills: [
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'MySQL', icon: SiMysql },
        ],
    },
    {
        title: 'Tools & Cloud',
        icon: '🛠️',
        color: 'from-red-500 to-rose-500',
        skills: [
            { name: 'Git', icon: SiGit },
            { name: 'GitHub', icon: SiGithub },
            { name: 'Docker', icon: SiDocker },
            { name: 'Postman', icon: SiPostman },
            { name: "AWS", icon: FaAws }
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="text-center text-primary-500 font-mono text-sm mb-2"
                >
          // my_tech_stack()
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }}
                    className="section-title gradient-text"
                >
                    Technical Skills
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
                    className="section-subtitle"
                >
                    Technologies I work with to bring ideas to life.
                </motion.p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, ci) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: ci * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            className="glass-card p-6 group"
                        >
                            {/* Card header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`p-2 rounded-xl bg-gradient-to-br ${category.color} text-lg`}>
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white">{category.title}</h3>
                            </div>

                            {/* Skills grid */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(({ name, icon: Icon }) => (
                                    <motion.div
                                        key={name}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-1.5 skill-badge"
                                    >
                                        <Icon size={14} />
                                        <span>{name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
