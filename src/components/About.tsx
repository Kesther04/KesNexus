import profile from "../assets/Images/profile.jpg";
import AboutTab from "./AboutTab";
import TypeWriter from "./TypeWriter";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function About () {
    // This component renders the About section of the portfolio
    return (
        <motion.section
            className="flex flex-col py-20 px-2 md:px-8 xl:px-32 h-auto md:min-h-screen  space-y-4 dark:bg-black dark:text-white" id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // triggers when 10% of section is visible
            transition={{ duration: 0.6 }}
            variants={fadeInUp}    
        >

            <h1 className="sectionHeaders"><TypeWriter text="About Me"/></h1>

            <div className="flex flex-col  justify-between space-y-5   w-full h-full">

                <div className="md:w-full flex flex-col md:flex-row gap-5 md:gap-4 lg:gap-10 xl:gap-16 lg:justify-center lg:items-center">
                    {/* Profile Img */}
                    <motion.div 
                        className="w-auto h-full md:w-1/3 relative group m-2 md:m-0"
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="w-full h-full block rounded  overflow-hidden">
                            <img
                                src={profile}
                                alt="Profile Pic"
                                className="scale-100 hover:scale-105 transition duration-300 w-full h-full  top-0 left-0 rounded shadow"
                            />
                            {/* Overlay appears on hover */}
                            <span className="pointer-events-none absolute inset-0 rounded bg-primary/40 dark:bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </span>
                    </motion.div>

                    <motion.div className="lg:text-lg h-full w-auto md:w-2/3 md:p-5 text-center md:text-left space-y-4"
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p>Hi, I’m <strong>Kesther Ogbu</strong>, founder of <strong>KESNEXUS</strong>, a digital solutions brand helping businesses and individuals thrive online.</p>

                        <p>As a <strong>Full-Stack Developer</strong> and <strong>Copywriter</strong>, I combine the power of code with persuasive communication to create solutions that don’t just work, they perform.</p>

                        <p>With strong <strong>problem-solving</strong> and <strong>critical thinking skills</strong>, I approach challenges with creativity and precision, ensuring every project runs smoothly. I thrive in collaborative environments, bringing a <strong>team player</strong> mindset that helps ideas grow into impactful results.</p>

                        <p>From seamless websites and apps to compelling marketing systems, I craft digital products and messages that capture attention, engage users, and turn ideas into revenue.</p>


                    </motion.div>

                </div>

                {/* about content */}
                <motion.div className="w-auto md:w-full flex flex-col  md:p-10 lg:p-20 space-y-5 text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    
                    {/* skills tab */}
                    <AboutTab/>
                </motion.div>
            </div>
        </motion.section>
    )
}