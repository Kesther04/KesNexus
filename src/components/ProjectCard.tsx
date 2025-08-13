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
                <span className="md:absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition duration-300 "></span>
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
                <span>
                <a  href={project.button[0].link} 
                className="bg-primary hover:bg-primary/80 text-white rounded px-4 py-2 transition duration-300 ease-in-out">
                {project.button[0].label}
                </a>
                </span>
            </div>
        </div>


    )
}