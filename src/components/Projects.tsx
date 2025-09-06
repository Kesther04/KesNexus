import { DEV_PROJECT_CRED } from '../data/tech'
import { COPY_PROJECT_CRED } from '../data/copy';
import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard";
import { Link } from 'react-router-dom';
import TypeWriter from './TypeWriter';
import { motion } from 'framer-motion';

type projects = {
    title: string,
    image: string,
    description: string,
    stack: string[],
    button: {label:string, link:string}[]
}[];


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15, // delay between each child animation
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: -60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };


export default function Projects () {
    const [currentPj, setCurrentPj] = useState<"dev" | "copywriting">("dev"); // to swith between copywriting and dev
    const [projects,setProjects] = useState<projects>([]); // to set state of latest projects 
    const [loading, setLoading] = useState<boolean>(true); // to set loader function for latest projects


    // to get latest projects data
    useEffect(()=>{ 
        if(currentPj === "dev"){
            setProjects(DEV_PROJECT_CRED);
        }else{
            setProjects(COPY_PROJECT_CRED);
        }

        setLoading(false); 
    },[currentPj]);
    return (
        <motion.section className="flex flex-col py-20 px-2 md:px-8 xl:px-32  space-y-10 h-auto dark:bg-black dark:text-white" id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // triggers when 10% of section is visible
            transition={{ duration: 0.6 }}
            variants={fadeInUp}  
        >
            
            <h1 className="sectionHeaders"><TypeWriter text="Here are my Projects"/></h1>

            <motion.div className=" projectBtn"
                variants={fadeInUp}
                transition={{duration: 0.6, delay: 0.2}}
            >
                <button 
                className={` ${currentPj === "dev" ?  `current` : "" }`} 
                onClick={()=>setCurrentPj("dev")}>
                    Dev Projects
                </button>

                <button 
                className={`${currentPj === "copywriting" ?  "current" : "" }`} 
                onClick={()=>setCurrentPj("copywriting")}>
                    Copywriting Projects
                </button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 lg:gap-10">
                {
                
                    loading ? 
                        "Loading..." 
                        :
                    [...projects].slice(-4).reverse().map((project, index) => (
                        <ProjectCard key={index} index={index} project={project} load={setLoading}/>
                    ))
                
                }
            </div>

            <div className="flex justify-center mt-10">
                <Link 
                    to={`/projects/${currentPj}`} 
                    className="border shadow border-primary text-primary   dark:border-primary-dark dark:text-primary-dark rounded-lg font-medium p-2 transition ease-in-out  hover:bg-primary/20 dark:hover:bg-primary-dark/20"

                >
                   View All {currentPj === "dev" ? "Dev" : "Copywriting"} Projects
                </Link>
            </div>

        </motion.section>
    )
}