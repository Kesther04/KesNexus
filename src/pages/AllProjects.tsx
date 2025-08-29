import { Link, useNavigate, useParams } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { DEV_PROJECT_CRED } from "../data/tech";
import { COPY_PROJECT_CRED } from "../data/copy";
import ScrollToTop from "../utils/ScrollToTop";
import TypeWriter from "../components/TypeWriter";
import {motion} from "framer-motion";

type projects = {
    title: string,image: string,description: string,stack: string[],button: {label:string, link:string}[]
}[];




export default function AllProjects () {
    let navigate = useNavigate();
    
    // to check current category
    const catCheck = (category: any) => {
        if (category == undefined) {
            return"all"
        }else if (category == "dev" || category == "copywriting"){
            return category;
        }else{
            return navigate("/");
        }
    }

    const param = useParams();
    let category:any = param.category;
    category = catCheck(category);
    const [currentPj, setCurrentPj] = useState(category); // to swith between copywriting and dev
    const [projects,setProjects] = useState<projects>([]); // to set state of latest projects 
    const [loading, setLoading] = useState<boolean>(true); // to set loader function for latest projects



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
            <ScrollToTop />
            <Header/>

            <main>
                <section className="flex flex-col py-20 px-2 md:px-8 xl:px-32  space-y-10  min-h-screen dark:bg-black dark:text-white" id="projects">
                            
                    <h1 className="sectionHeaders"><TypeWriter text="Project Collection"/></h1>

                    <p className="italic md:text-lg text-center md:text-left ">
                        A curated collection of my Full-Stack Development and Copywriting projects, crafted to spark ideas and showcase impactful digital experiences.
                    </p>
        
                    <motion.div 
                        className="projectLinks"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link to={"/projects"}
                        className={`${currentPj === "all" ? "current" : "" }`} 
                        onClick={()=>setCurrentPj("all")}>
                            All Projects
                        </Link>

                        <Link to={"/projects/dev"}
                        className={`${currentPj === "dev" ?  "current" : "" }`} 
                        onClick={()=>setCurrentPj("dev")}>
                            Dev Projects
                        </Link>
        
                        <Link to={"/projects/copywriting"}
                        className={`${currentPj === "copywriting" ?  "current" : "" }`} 
                        onClick={()=>setCurrentPj("copywriting")}>
                            Copywriting Projects
                        </Link>
                    </motion.div>
        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 lg:gap-10">
                        {
                        
                            loading ? 
                                "Loading..." 
                                :
                            [...projects].sort(
                                () => Math.random() - 0.5
                            ).map(
                                (project, index) => (
                                    <ProjectCard key={index} index={index} project={project} load={setLoading} />
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