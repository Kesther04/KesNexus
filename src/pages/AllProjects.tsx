import { Link, useNavigate, useParams } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { DEV_PROJECT_CRED } from "../data/tech";
import { COPY_PROJECT_CRED } from "../data/copy";


type projects = {
    title: string,image: string,description: string,stack: string[],button: {label:string, link:string}[]
}[];

export default function AllProjects () {
    const param = useParams();
    // let navigate = useNavigate();
    let category:any = param.category;
    category == undefined && (category = "all")
    const [currentPj, setCurrentPj] = useState(category); // to swith between copywriting and dev
    const [projects,setProjects] = useState<projects>([]); // to set state of latest projects 
    const [loading, setLoading] = useState<boolean>(true); // to set loader function for latest projects

    // if (currentPj !== "all" || currentPj !== "dev" || currentPj !== "copywriting") navigate("/");  

    // to get latest projects data
    useEffect(()=>{ 
        if(currentPj === "dev"){
            setProjects(DEV_PROJECT_CRED);
        }
        
        if(currentPj === "copywriting"){
            setProjects(COPY_PROJECT_CRED);
        }

        if(currentPj === "all"){
            setProjects([...DEV_PROJECT_CRED,...COPY_PROJECT_CRED]);
        }

        setLoading(false); 
    },[currentPj]);

  
    console.log(currentPj);
    return (
        <>
            <Header/>

            <main>
                <section className="flex flex-col py-20 px-2 md:px-32  space-y-10  min-h-screen" id="projects">
                            
                    <h1 className="sectionHeaders">Project Collection</h1>

                    <p className="italic md:text-lg text-center md:text-left ">
                        A curated collection of my Full-Stack Development and Copywriting projects, crafted to spark ideas and showcase impactful digital experiences.
                    </p>
        
                    <div className="space-x-0 space-y-4 md:space-y-0 md:space-x-4 text-lg flex flex-col md:flex-row">
                        <Link to={"/projects"}
                        className={`rounded p-2 border  transition ease-in-out focus:outline-none ${currentPj === "all" ?  `text-white bg-blue-950 border-blue-950` : " border-gray-600 hover:text-white hover:bg-blue-950 hover:border-blue-950" }`} 
                        onClick={()=>setCurrentPj("all")}>
                            All Projects
                        </Link>

                        <Link to={"/projects/dev"}
                        className={`rounded p-2 border  transition ease-in-out focus:outline-none ${currentPj === "dev" ?  `text-white bg-blue-950 border-blue-950` : " border-gray-600 hover:text-white hover:bg-blue-950 hover:border-blue-950" }`} 
                        onClick={()=>setCurrentPj("dev")}>
                            Dev Projects
                        </Link>
        
                        <Link to={"/projects/copywriting"}
                        className={`rounded p-2 border transition ease-in-out focus:outline-none ${currentPj === "copywriting" ?  `text-white bg-blue-950 border-blue-950` : " border-gray-600 hover:text-white hover:bg-blue-950 hover:border-blue-950" }`} 
                        onClick={()=>setCurrentPj("copywriting")}>
                            Copywriting Projects
                        </Link>
                    </div>
        
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {
                        
                            loading ? 
                                "Loading..." 
                                :
                            [...projects].sort(
                                () => Math.random() - 0.5
                            ).map(
                                (project, index) => (
                                    <ProjectCard key={index} project={project} load={setLoading} />
                                )
                            )
                        
                        }
                    </div>
        
                </section>
                <Contact/>
            </main>

            <Footer/>
        </>
    )
}