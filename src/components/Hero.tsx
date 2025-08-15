import { Download, Mail } from "lucide-react";

export default function Hero () {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-hero bg-cover bg-center text-gray-200 z-10 relative" id="home">
            
            <div className="absolute inset-0 backdrop-blur-lg bg-black/40 dark:bg-black/80"></div>

            <div className="relative z-10 text-center max-w-2xl px-6 py-12 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/20">
                
                {/* Brand Name */}
                <h2 className="text-sm uppercase tracking-widest text-blue-500  dark:text-primary-dark/80 mb-2">
                    KesNexus
                </h2>

                {/* Name */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Hi, I'm Kesther Ogbu</h1>
                
                {/* A little Intro to What I do */}
                <p className="text-white/80 text-lg mb-6">
                    Digital Solutions Expert — crafting high-impact websites, apps & marketing systems that turn ideas into revenue.
                </p>
                

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="/kesther_ogbu_cv.docx" download className="flex gap-2 px-6 py-3 bg-primary dark:bg-primary-dark dark:text-gray-800 dark:hover:bg-primary-dark/40 dark:hover:text-white text-white rounded-lg hover:bg-blue-800 transition">
                        <Download size={18} className="relative top-0.5" /> Download Resume
                    </a>
                    <a href="#contact" className="flex gap-2 px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition">
                        <Mail size={18} className="relative top-0.5"/> Contact Me
                    </a>
                </div>
            </div>

    
        </section>
    )
}