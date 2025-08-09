import { Icon } from '@iconify/react';
import { Mail, Phone } from 'lucide-react';



export default function Contact () {
    return (
        <section className="flex flex-col py-20 px-2 md:px-20 min-h-full space-y-10 bg-gray-400" id="contact">
            <h1 className="sectionHeaders">Get in Touch</h1>


            <div className="flex flex-col md:flex-row justify-between gap-20 py-6 w-full">

                {/* Contact Form */}
                <div className='w-2/3'>
                    <form className="space-y-4">
                        <div className="flex space-x-10">
                            <input type="text" placeholder="Name.." className="w-full px-4 py-2 border rounded-lg focus:outline-none" required/>
                            <input type="email" placeholder="Email.." className="w-full px-4 py-2 border rounded-lg focus:outline-none" required/>
                        </div>

                        <div>
                            <textarea placeholder="Message Here.." className="w-full h-40 px-4 py-2 border rounded-lg focus:outline-none" required/>
                        </div>

                        <button type="submit" className="px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className='flex flex-col justify-start space-y-10 w-1/3 text-lg'>

                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="flex space-x-2 font-semibold"><Mail size={28} /> <span>Email</span></span>
                        <a href="mailto:ogbukesther@gmail.com" className="hover:underline">ogbukesther@gmail.com</a>
                    </p>

                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="flex space-x-2 font-semibold"><Phone size={28} /> <span>Phone</span></span>
                        <a href="tel:08103416893" className=" hover:underline">08103416893</a>
                    </p>

                    <div className="flex space-x-4">
                        <a href="https://x.com/kes_ther?s=09" target="_blank" rel="noopener noreferrer">
                            <Icon icon="fa6-brands:x-twitter" color="navy" width="28" height="28" />
                        </a>
                        <a href="https://www.linkedin.com/in/kesther-ogbu-5703b0317/" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:linkedin" color="navy" width="28" height="28" />
                        </a>
                        <a href="https://www.instagram.com/kes__ther" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:instagram" color="navy" width="28" height="28" />
                        </a>
                        <a href="https://github.com/kesther04" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:github" color="navy" width="28" height="28" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}