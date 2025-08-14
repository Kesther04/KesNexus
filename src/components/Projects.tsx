import { DEV_PROJECT_CRED } from '../data/tech'
import { COPY_PROJECT_CRED } from '../data/copy';
import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard";
import { Link } from 'react-router-dom';

type projects = {
        title: string,
        image: string,
        description: string,
        stack: string[],
        button: {label:string, link:string}[]
    }[];

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
        <section className="flex flex-col py-20 px-2 md:px-32  space-y-10  min-h-screen dark:bg-black dark:text-white" id="projects">
            
            <h1 className="sectionHeaders">Here are my Projects</h1>

            <div className="space-x-4 text-lg">
                <button 
                className={`rounded p-2 border  transition ease-in-out focus:outline-none ${currentPj === "dev" ?  `text-white bg-primary border-primary` : " border-gray-600 hover:text-white hover:bg-primary hover:border-primary" }`} 
                onClick={()=>setCurrentPj("dev")}>
                    Dev Projects
                </button>

                <button 
                className={`rounded p-2 border transition ease-in-out focus:outline-none ${currentPj === "copywriting" ?  `text-white bg-primary border-primary` : " border-gray-600 hover:text-white hover:bg-primary hover:border-primary" }`} 
                onClick={()=>setCurrentPj("copywriting")}>
                    Copywriting Projects
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {
                
                    loading ? 
                        "Loading..." 
                        :
                    [...projects].slice(-4).reverse().map((project, index) => (
                        <ProjectCard key={index} project={project} load={setLoading} />
                    ))
                
                }
            </div>

            <div className="flex justify-center mt-10">
                <Link 
                    to={`/projects/${currentPj}`} 
                    className="border shadow border-primary text-primary rounded-lg font-medium p-2 transition ease-in-out hover:bg-primary/20"

                >
                   View All {currentPj === "dev" ? "Dev" : "Copywriting"} Projects
                </Link>
            </div>

        </section>
    )
}