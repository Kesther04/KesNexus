import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import TypeWriter from "./TypeWriter";

export default function Hero () {  
    // Smooth scroll to section
    const handleScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-hero bg-cover bg-center text-gray-200 z-10 relative"id="home">
        <div className="absolute inset-0 backdrop-blur-lg bg-black/40 dark:bg-black/80"></div>

        <motion.div
            className="relative z-10 text-center max-w-2xl px-6 py-12 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Brand Name */}
            <motion.h2
            className="text-sm uppercase tracking-widest text-blue-500 dark:text-primary-dark/80 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            >
            KesNexus
            </motion.h2>

            {/* Name */}
            <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            >
            <TypeWriter text="Hi, I'm Kesther Ogbu" />
            </motion.h1>

            {/* Intro Text */}
            <motion.p
            className="text-white/80 text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            >
            Digital Solutions Expert — crafting high-impact websites, apps & marketing
            systems that turn ideas into revenue.
            </motion.p>

            {/* Buttons */}
            <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            >
            <a
                href="/Kesther_Ogbu_Resume.pdf"
                download
                className="flex gap-2 px-6 py-3 bg-primary dark:bg-primary-dark dark:text-gray-800 dark:hover:bg-primary-dark/40 dark:hover:text-white text-white rounded-lg hover:bg-blue-800 transition"
            >
                <Download size={18} className="relative top-0.5" /> Download Resume
            </a>
            <a
                href="#contact"
                className="flex gap-2 px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("contact");
                }}
            >
                <Mail size={18} className="relative top-0.5" /> Contact Me
            </a>
            </motion.div>
        </motion.div>
        </section>
    )
}