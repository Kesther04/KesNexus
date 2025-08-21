import { Icon } from '@iconify/react';
import TypeWriter from './TypeWriter';
import { motion } from 'framer-motion';


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


export default function Services () {
    
    const services = [
    {
        icon: "mdi:monitor-cellphone", // Web & App Development
        service: "Web & App Development",
        description: "Design and develop high-performing, fully responsive websites and mobile applications that adapt seamlessly to any device. Using modern frameworks like React, React Native, and Node.js, I ensure your digital product is fast, secure, visually appealing, and built to meet your exact business needs."
    },
    {
        icon: "mdi:server-network", // Backend & API Development
        service: "Backend & API Development",
        description: "Develop secure, scalable, and reliable backend systems with well-structured databases and robust APIs to power your applications. I focus on clean architecture, fast response times, and third-party integrations to make your product flexible and ready for future growth."
    },
    {
        icon: "mdi:pencil-outline", // Sales Copywriting
        service: "Sales Copywriting",
        description: "Write persuasive, emotionally-driven copy that connects deeply with your target audience, builds trust, and turns readers into buyers. Whether it’s for sales pages, landing pages, or complete marketing funnels, my words are designed to influence action and generate measurable results."
    },
    {
        icon: "mdi:cogs", // Tech Stack Integration
        service: "Tech Stack Integration",
        description: "Integrate front-end and back-end technologies into a smooth, optimized, and high-performing system. I handle everything from connecting APIs, setting up databases, and configuring servers to deploying your project, ensuring a seamless flow from code to launch."
    },
    {
        icon: "mdi:email-send-outline", // Email Marketing
        service: "Email Marketing",
        description: "Plan, write, and optimize email campaigns that keep your audience engaged, build long-term relationships, and increase conversions. From welcome sequences to promotional campaigns, I make sure every email feels personal, relevant, and impossible to ignore."
    },
    {
        icon: "mdi:web", // Website Messaging
        service: "Website Messaging",
        description: "Craft clear, compelling, and conversion-focused copy for websites and landing pages. I align the message with your brand voice, address visitor concerns, and guide them toward taking action — whether that’s making a purchase, booking a call, or subscribing to your service."
    }
    ];


    return (
        <motion.section className="flex flex-col py-20 px-2 md:px-32 min-h-screen space-y-10 bg-gray-200 dark:bg-gray-800" id="services"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // triggers when 10% of section is visible
            transition={{ duration: 0.6 }}
            variants={fadeInUp}  
        >
            <h1 className="sectionHeaders"><TypeWriter text="My Services"/></h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {services.map((service, index) => (
                    <motion.div key={index} className="p-8 bg-white/70 dark:bg-black/70 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center md:items-start text-center md:text-left space-y-4 dark:text-white"
                    variants={fadeInUp}
                    transition={
                        index > 2 ? { duration: 0.6, delay: 0.4 } : {duration: 0.6, delay: 0.2}
                    }
                    >
                        {/* icon */}
                        <div className="text-4xl mb-4"><Icon icon={service.icon} className='text-primary-light dark:text-primary-dark' /></div>
                        {/* service */}
                        <h2 className="text-xl font-semibold mb-2">{service.service}</h2>
                        {/* service description */}
                        <p>{service.description}</p>  
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}