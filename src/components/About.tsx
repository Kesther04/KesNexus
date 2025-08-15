import profile from "../assets/Images/profile.jpg";
import AboutTab from "./AboutTab";

export default function About () {
    // This component renders the About section of the portfolio
    return (
        <section className="flex flex-col py-20 px-2 md:px-32 min-h-screen  space-y-4 dark:bg-black dark:text-white" id="about">

            <h1 className="sectionHeaders">About Me</h1>

            <div className="flex flex-col  justify-between space-y-5   w-full h-full">

                <div className="md:w-full flex flex-col md:flex-row space-y-5 md:space-y-10 md:space-x-10">
                    {/* Profile Img */}
                    <div className="w-auto h-full md:w-1/3 relative group m-2 md:m-0">
                        <span className="w-full h-full block rounded  overflow-hidden">
                            <img
                                src={profile}
                                alt="Profile Pic"
                                className="scale-100 hover:scale-105 transition duration-300 w-full h-full  top-0 left-0 rounded shadow"
                            />
                            {/* Overlay appears on hover */}
                            <span className="pointer-events-none absolute inset-0 rounded bg-primary/40 dark:bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </span>
                    </div>

                    <div className="md:text-lg h-full w-auto md:w-2/3 md:p-5 text-center md:text-left space-y-4">
                        <p>Hi, I’m <strong>Kesther Ogbu</strong>, founder of <strong>KESNEXUS</strong>, a digital solutions brand helping businesses and individuals thrive online.</p>

                        <p>As a <strong>Full-Stack Developer</strong> and <strong>Copywriter</strong>, I combine the power of code with persuasive communication to create solutions that don’t just work, they perform.</p>

                        <p>With strong <strong>problem-solving</strong> and <strong>critical thinking skills</strong>, I approach challenges with creativity and precision, ensuring every project runs smoothly. I thrive in collaborative environments, bringing a <strong>team player</strong> mindset that helps ideas grow into impactful results.</p>

                        <p>From seamless websites and apps to compelling marketing systems, I craft digital products and messages that capture attention, engage users, and turn ideas into revenue.</p>


                    </div>

                </div>

                {/* about content */}
                <div className="w-auto md:w-full flex flex-col  md:p-20 space-y-5 text-center md:text-left" id="skills">
                    
                    {/* skills tab */}
                    <AboutTab/>
                </div>
            </div>
        </section>
    )
}