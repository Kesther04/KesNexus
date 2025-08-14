import { Icon } from '@iconify/react';

type Skills = {
    name: string,
    icon: string,
    color: string
}

export default function DevSkills({ activeTab }: any) {

    const frontend:Skills[] = [
    { name: "HTML", icon: "simple-icons:html5", color: "#E34F26" },
    { name: "CSS", icon: "simple-icons:css3", color: "#1572B6" },
    { name: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
    { name: "TypeScript", icon: "simple-icons:typescript", color: "#3178C6" },
    { name: "React", icon: "simple-icons:react", color: "#61DAFB" },
    { name: "TailwindCSS", icon: "simple-icons:tailwindcss", color: "#06B6D4" },
    { name: "React Native (Expo)", icon: "simple-icons:expo", color: "#000020" }
    ];

    const backend:Skills[] = [
    { name: "PHP", icon: "simple-icons:php", color: "#777BB4" },
    { name: "Node.js", icon: "simple-icons:nodedotjs", color: "#339933" },
    { name: "Express.js", icon: "simple-icons:express", color: "#000000" },
    { name: "MongoDB", icon: "simple-icons:mongodb", color: "#47A248" },
    { name: "MySQL", icon: "simple-icons:mysql", color: "#4479A1" }
    ];

    const devTools:Skills[] = [
    { name: "Github", icon: "simple-icons:github", color: "#181717" },
    { name: "Figma", icon: "simple-icons:figma", color: "#F24E1E" },
    { name: "Netlify", icon: "simple-icons:netlify", color: "#00C7B7" },
    { name: "Vercel", icon: "simple-icons:vercel", color: "#000000" }
    ];


    function iconForm (item: Skills) {
        return (
            <div className="flex flex-col items-center space-x-2 shadow rounded p-1 bg-white text-black dark:bg-gray-500" key={item.name}>
                <span className="h-16 w-16 md:h-32 md:w-32  rounded flex items-center justify-center">
                    <Icon icon={item.icon} color={item.color} className="h-1/2 w-1/2" />
                </span>
                <span className="italic">{item.name}</span>
            </div>
        )
    } 


    return (
        <div className={`${activeTab === 'dev' ? 'tabContent' : 'hidden'}`}>
            <div>
                <h3>Frontend</h3>
                <div className="tabSubContent">
                    <div>
                        
                        {frontend.map((item) => (
                            iconForm(item)
                        ))}
                        
                    </div>
                </div>
            </div>
            
            <div>
                <h3>Backend</h3>
                <div className="tabSubContent">
                    <div>
                        {backend.map((item) => (
                            iconForm(item)
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <h3>Tools</h3>
                <div className="tabSubContent">
                    <div>
                        {devTools.map((tool) => (
                            iconForm(tool)
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}