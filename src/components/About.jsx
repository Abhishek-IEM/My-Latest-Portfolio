import { motion } from "framer-motion";
import { HiAcademicCap, HiLocationMarker } from "react-icons/hi";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
  viewport: { once: true },
});

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.p
          {...fadeIn()}
          className="text-center text-primary-500 font-mono text-sm mb-2"
        >
          // get_to_know_me()
        </motion.p>
        <motion.h2 {...fadeIn(0.1)} className="section-title gradient-text">
          About Me
        </motion.h2>
        <motion.p {...fadeIn(0.2)} className="section-subtitle">
          A passionate developer from Kolkata, building things that matter.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <motion.div {...fadeIn(0.2)} className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Hi! I'm{" "}
              <span className="text-primary-500 font-semibold">
                Abhishek Sharma
              </span>
              , a Computer Science and Engineering (IoT) graduate from{" "}
              <span className="text-primary-500 font-semibold">
                Institute of Engineering & Management, Kolkata
              </span>
              .
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Full Stack Developer
              </span>{" "}
              focused on building modern, responsive, and scalable web
              applications using the{" "}
              <span className="font-semibold text-accent">MERN stack</span>. I
              enjoy turning ideas into clean, user-friendly applications and
              solving real-world problems through code.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about exploring{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                AI-powered applications
              </span>
              , improving my problem-solving skills, and continuously learning
              new technologies. I also practice Data Structures & Algorithms to
              strengthen my programming and problem-solving fundamentals.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Problem Solver",
                "Open Source",
                "AI Enthusiast",
                "Team Player",
              ].map((tag) => (
                <span key={tag} className="skill-badge">
                  #{tag.toLowerCase().replace(" ", "_")}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div {...fadeIn(0.3)} className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary-500/15 text-primary-500">
                <HiAcademicCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            {/* IEM */}
            <div className="relative pl-6 border-l-2 border-primary-500/30">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary-500 border-2 border-dark-bg" />
              <p className="text-xs text-primary-500 font-mono font-medium mb-1">
                2022 – 2026
              </p>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                B.Tech in CSE (IoT)
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Institute of Engineering & Management
              </p>
              <div className="flex items-center gap-2 mt-1 text-gray-500 dark:text-gray-400 text-sm">
                <HiLocationMarker size={14} />
                <span>Kolkata, West Bengal, India</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-semibold">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                CGPA: 8.94
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200/60 dark:border-white/5">
              {[
                { label: "Projects", value: "5+" },
                { label: "Technologies", value: "15+" },
                { label: "CGPA", value: "8.94" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-black gradient-text">{value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
