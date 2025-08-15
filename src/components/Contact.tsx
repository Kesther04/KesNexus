import { Icon } from '@iconify/react';
import { Mail, Phone } from 'lucide-react';



export default function Contact () {
    return (
        <section className="flex flex-col py-20 px-2 md:px-32 min-h-full space-y-10 bg-gray-300 dark:bg-gray-900 dark:text-white" id="contact">
            <h1 className="sectionHeaders">Get in Touch</h1>

            <h2 className="text-lg text-center md:text-left">Got a project or idea? Let’s connect and turn your vision into reality.</h2>

            <div className="flex flex-col md:flex-row justify-between gap-20 py-6 w-full">

                {/* Contact Form */}
                <div className='w-full md:w-2/3'>
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10">
                            <input type="text" placeholder="Name.." className="w-full px-4 py-2  rounded-lg focus:outline-none dark:bg-black" required/>
                            <input type="email" placeholder="Email.." className="w-full px-4 py-2  rounded-lg focus:outline-none dark:bg-black" required/>
                        </div>

                        <div>
                            <textarea placeholder="Message Here.." className="w-full h-40 px-4 py-2 rounded-lg focus:outline-none dark:bg-black" required/>
                        </div>

                        <button type="submit" className="px-6 py-2 bg-primary dark:bg-primary-dark text-white dark:text-gray-800 rounded-lg hover:bg-blue-800 dark:hover:bg-primary-dark/60 dark:hover:text-white transition focus:outline-none">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className='flex flex-col justify-start space-y-10 w-1/3 text-lg'>

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
                </div>
            </div>
        </section>
    )
}