import type React from "react";
import { Fragment } from "react";

type projectForm = {
    title: string,
    image: string,
    description: string,
    stack: string[],
    button: {label:string, link:string}[]
};

export default function ProjectCard ({project, load}: {project: projectForm, load: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (

        <div className="projectCard group">

            {/* Image */}
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-t-xl relative">
                <img
                src={project.image}
                alt="test_img"
                onLoad={() => load(false)}
                className="rounded-t-xl object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                />

                {/* Overlay on hover */}
                <span className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition duration-300 "></span>
            </div>

            {/* Card content */}
            <div className="cardContent">
                {/* Title */}
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                {/* Description & tech stack */}
                <div className="flex flex-col gap-5">
                <p className="italic">
                    {project.description}
                </p>
                <div className="flex space-x-2 flex-wrap">
                    {project?.stack?.map((tech:string) => (
                    <span
                        key={tech}
                        className="text-sm text-gray-500 md:text-gray-50 dark:text-gray-300 border rounded-xl px-2 py-1"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </div>

                {/* Button */}
                <span className="grid grid-rows-2 grid-cols-1 md:block md:space-x-2 space-y-2 md:space-y-0 ">
                    {
                        project.button.map((btn, index) => (
                            <Fragment key={index}>
                                {index > 0 ? (
                                    <a href={btn.link}
                                        className="bg-gray-500 hover:bg-gray-500/80 text-white rounded px-4 py-2 transition duration-300 ease-in-out text-center md:text-left">
                                        {btn.label}
                                    </a>
                                ) : (
                                    <a href={btn.link} 
                                        className="bg-primary hover:bg-primary/80 text-white rounded px-4 py-2 transition duration-300 ease-in-out text-center md:text-left ">
                                        {btn.label}
                                    </a>
                                )}
                            </Fragment>
                        ))
                    }
                </span>
            </div>
        </div>


    )
}