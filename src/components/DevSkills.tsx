import { Icon } from '@iconify/react';

type Skills = {
    name: string,
    icon: string,
    color: string
}

export default function DevSkills({ activeTab }: any) {

    const frontend: Skills[] = [
    { name: "HTML", icon: "simple-icons:html5", color: "text-orange-600" }, // #E34F26 → orange-600
    { name: "CSS", icon: "simple-icons:css3", color: "text-blue-600" }, // #1572B6 → blue-600
    { name: "JavaScript", icon: "simple-icons:javascript", color: "text-yellow-400" }, // #F7DF1E → yellow-400
    { name: "TypeScript", icon: "simple-icons:typescript", color: "text-blue-500" }, // #3178C6 → blue-500
    { name: "React", icon: "simple-icons:react", color: "text-cyan-300" }, // #61DAFB → cyan-300
    { name: "TailwindCSS", icon: "simple-icons:tailwindcss", color: "text-cyan-400" }, // #06B6D4 → cyan-400
    { name: "React Native (Expo)", icon: "simple-icons:expo", color: "text-gray-900 dark:text-gray-100" } // #000020 → gray-900
    ];

    const backend: Skills[] = [
    { name: "PHP", icon: "simple-icons:php", color: "text-indigo-400" }, // #777BB4 → indigo-400
    { name: "Node.js", icon: "simple-icons:nodedotjs", color: "text-green-600" }, // #339933 → green-600
    { name: "Express.js", icon: "simple-icons:express", color: "text-black dark:text-white" }, // #000000 → black
    { name: "MongoDB", icon: "simple-icons:mongodb", color: "text-green-500" }, // #47A248 → green-500
    { name: "MySQL", icon: "simple-icons:mysql", color: "text-sky-700" } // #4479A1 → sky-700
    ];

    const devTools: Skills[] = [
    { name: "Github", icon: "simple-icons:github", color: "text-gray-900 dark:text-gray-100" }, // #181717 → gray-900
    { name: "Figma", icon: "simple-icons:figma", color: "text-orange-500" }, // #F24E1E → orange-500
    { name: "Netlify", icon: "simple-icons:netlify", color: "text-teal-400" }, // #00C7B7 → teal-400
    { name: "Vercel", icon: "simple-icons:vercel", color: "text-black dark:text-white" } // #000000 → black
    ];


    function iconForm (item: Skills) {
        return (
            <div className="flex flex-col items-center space-x-2  rounded p-1 " key={item.name}>
                <span className="h-16 w-16 lg:h-32 lg:w-32  rounded flex items-center justify-center">
                    <Icon icon={item.icon} className={`h-1/2 w-1/2 ${item.color}`} />
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