import { useState } from "react"
import adverts from '../assets/codeImg/adverts (2).png'
import house from '../assets/codeImg/House-rent (1).png'
import phone from '../assets/codeImg/phone-acc (1).png'
import ProjectCard from "./ProjectCard";

export default function Projects () {
    const [currentPj, setCurrentPj] = useState<"dev" | "copywriting">("dev");

    return (
        <section className="flex flex-col py-20 px-2 md:px-20  space-y-10  min-h-screen" id="projects">
            
            <h1 className="sectionHeaders">Here are my Projects</h1>

            <div className="space-x-4 text-lg">
                <button className={`rounded p-2 transition ease-in-out focus:outline-none ${currentPj === "dev" ?  `text-white bg-blue-950 ` : "border" }`} onClick={()=>setCurrentPj("dev")}>
                    Dev Projects
                </button>

                <button className={`rounded p-2 transition ease-in-out focus:outline-none ${currentPj === "copywriting" ?  `text-white bg-blue-950 ` : "border" }`} onClick={()=>setCurrentPj("copywriting")}>
                    Copywriting Projects
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ProjectCard testImg={adverts} />
                <ProjectCard testImg={house}/>
                <ProjectCard testImg={phone}/>
            </div>

        </section>
    )
}