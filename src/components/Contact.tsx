import { Icon } from '@iconify/react';
import { Mail, Phone } from 'lucide-react';
import TypeWriter from './TypeWriter';
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from 'react';

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function Contact () {
    const form = useRef<HTMLFormElement | null>(null) as React.MutableRefObject<HTMLFormElement>;
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const templateParams: { time: string } = {
        time: new Date().toLocaleString(),
    };


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs
        .sendForm(
            "service_k768gds",   // service ID from EmailJS dashboard
            "template_pv6e9ix",  // template ID from EmailJS dashboard
            form.current,
            "ZGSOeuGWJ8TQwjNZB"    // public key from EmailJS dashboard
        )
        .then(
            (result: any) => {
            console.log(result.text);
            setSuccess(true);
            form.current.reset();
            setLoading(false);
            },
            (error: any) => {
            console.log(error.text);
            setLoading(false);
            }
        );
    };

    return (
        <section className="flex flex-col py-20 px-2 md:px-8 xl:px-32 min-h-full space-y-10 bg-gray-300 dark:bg-gray-900 dark:text-white" id="contact">

            <h1 className="sectionHeaders"><TypeWriter text="Get in Touch"/></h1>

            <h2 className="text-lg text-center md:text-left">Got a project or idea? Let’s connect and turn your vision into reality.</h2>

            {success && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                <div className="bg-white dark:bg-gray-900 border border-gray-500 rounded-2xl shadow-lg p-6 text-center transform transition-all duration-300 scale-100 animate-fadeIn">
                <h2 className="text-primary dark:text-primary-dark text-xl font-semibold mb-2">Message Sent!</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Your message was sent successfully.
                </p>
                <button
                    onClick={() => setSuccess(false)}
                    className="px-4 py-2 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-primary/60 dark:hover:bg-primary-dark/60 transition"
                >
                    Close
                </button>
                </div>
            </div>
            )}

            <motion.div className="flex flex-col md:flex-row justify-between gap-20 py-6 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // triggers when 10% of section is visible
            transition={{ duration: 0.6 }}
            variants={fadeRight}    
            >

                {/* Contact Form */}
                <div className='w-full md:w-2/3'>
                    <form  ref={form} onSubmit={sendEmail}  className="space-y-4">
                        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10">
                            <input type="text" name="from_name" placeholder="Name.." className="w-full px-4 py-2  rounded-lg focus:outline-none dark:bg-black" required/>
                            <input type="email" name="from_email" placeholder="Email.." className="w-full px-4 py-2  rounded-lg focus:outline-none dark:bg-black" required/>
                        </div>

                        <div>
                            <textarea name="message" placeholder="Message Here.." className="w-full h-40 px-4 py-2 rounded-lg focus:outline-none dark:bg-black" required/>
                            <input type="hidden" name="time" value={templateParams.time} />
                        </div>

                        <button type="submit" 
                        className="px-6 py-2 bg-primary dark:bg-primary-dark text-white dark:text-gray-800 rounded-lg hover:bg-blue-800 dark:hover:bg-primary-dark/60 dark:hover:text-white transition focus:outline-none"
                        disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <motion.div className='flex flex-col justify-start space-y-10 w-1/3 text-lg'
                    variants={fadeRight}
                    transition={{duration:0.6, delay:0.1}}
                >

                    <p className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark">
                        <span className="flex space-x-2 font-semibold"><Mail size={28} /> <span>Email</span></span>
                        <a href="mailto:ogbukesther@gmail.com" className=" hover:underline">ogbukesther@gmail.com</a>
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark">
                        <span className="flex space-x-2 font-semibold"><Phone size={28} /> <span>Phone</span></span>
                        <a href="tel:08103416893" className="hover:underline">08103416893</a>
                    </p>

                    <div className="flex space-x-4 ">
                        <a href="https://x.com/kes_ther?s=09" target="_blank" rel="noopener noreferrer">
                            <Icon icon="fa6-brands:x-twitter" className='text-gray-700 dark:text-gray-300 transition ease-in-out duration-200 hover:text-primary dark:hover:text-primary-dark' width="28" height="28"  />
                        </a>
                        <a href="https://www.linkedin.com/in/kesther-ogbu-5703b0317/" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:linkedin" className="text-gray-700 dark:text-gray-300 transition ease-in-out duration-200 hover:text-primary dark:hover:text-primary-dark" width="28" height="28" />
                        </a>
                        <a href="https://www.instagram.com/kes__ther" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:instagram" className="text-gray-700 dark:text-gray-300 transition ease-in-out duration-200 hover:text-primary dark:hover:text-primary-dark" width="28" height="28" />
                        </a>
                        <a href="https://github.com/kesther04" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:github" className="text-gray-700 dark:text-gray-300 transition ease-in-out duration-200 hover:text-primary dark:hover:text-primary-dark" width="28" height="28" />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}