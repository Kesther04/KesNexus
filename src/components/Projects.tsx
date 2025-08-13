import { PROJECT_CRED } from '../data/tech'
import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom"


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
    const [loading, setLoading] = useState<boolean>(true);


    // to get latest projects data
    useEffect(()=>{ 
        setProjects(PROJECT_CRED);
        setLoading(false);
    },[]);

    console.log([...projects].reverse());
    return (
        <section className="flex flex-col py-20 px-2 md:px-32  space-y-10  min-h-screen" id="projects">
            
            <h1 className="sectionHeaders">Here are my Projects</h1>

            <div className="space-x-4 text-lg">
                <button className={`rounded p-2 transition ease-in-out focus:outline-none ${currentPj === "dev" ?  `text-white bg-blue-950 ` : "border border-gray-600" }`} onClick={()=>setCurrentPj("dev")}>
                    Dev Projects
                </button>

                <button className={`rounded p-2 transition ease-in-out focus:outline-none ${currentPj === "copywriting" ?  `text-white bg-blue-950 ` : "border border-gray-600" }`} onClick={()=>setCurrentPj("copywriting")}>
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
                <Link to="/projects/dev" className="border border-gray-600 rounded p-2 transition ease-in-out hover:bg-gray-200">View All</Link>
            </div>

        </section>
    )
}