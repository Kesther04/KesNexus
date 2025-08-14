import { Icon } from '@iconify/react';

export default function Services () {
    
    // const services =  [
    //     {
    //         "icon": "💻",
    //         "service": "Web & App Development",
    //         "description": "Build responsive, functional websites and mobile apps tailored to business needs using modern tools like React, React Native, and Node.js."
    //     },
    //     {
    //         "icon": "🧠",
    //         "service": "Backend & API Development",
    //         "description": "Create secure and scalable server systems, databases, and APIs to power your applications and enable third-party integrations."
    //     },
    //     {
    //         "icon": "✍️",
    //         "service": "Sales Copywriting",
    //         "description": "Craft words that connect with your audience and turn readers into buyers, especially for sales pages and funnels."
    //     },
    //     {
    //         "icon": "🔧",
    //         "service": "Tech Stack Integration",
    //         "description": "Combine front-end and back-end technologies to deliver complete, optimized digital products — from code to deployment."
    //     },

    //     {
    //         "icon": "📬",
    //         "service": "Email Marketing",
    //         "description": "Write email sequences that keep your brand top-of-mind, build trust, and generate consistent engagement and ROI."
    //     },
    //     {
    //         "icon": "🌐",
    //         "service": "Website Messaging",
    //         "description": "Write clean, goal-driven copy for websites and landing pages that explain, engage, and convert visitors."
    //     }
    // ]


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
        <section className="flex flex-col py-20 px-2 md:px-32 min-h-screen space-y-10 bg-gray-200 dark:bg-gray-800" id="services">
            <h1 className="sectionHeaders">My Services</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {services.map((service, index) => (
                    <div key={index} className="p-8 bg-white/70 dark:bg-black/70 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center md:items-start text-center md:text-left space-y-4 dark:text-white">
                        {/* icon */}
                        <div className="text-4xl mb-4"><Icon icon={service.icon} className='text-primary-light' /></div>
                        {/* service */}
                        <h2 className="text-xl font-semibold mb-2">{service.service}</h2>
                        {/* service description */}
                        <p>{service.description}</p>  
                    </div>
                ))}
            </div>
        </section>
    );
}