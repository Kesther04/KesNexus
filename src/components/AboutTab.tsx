import { useEffect, useRef, useState } from "react";
import DevSkills from "./DevSkills";
import CopySkills from "./CopySkills";

export default function AboutTab() {
    const [activeTab, setActiveTab] = useState<'dev' | 'copy'>('dev');
    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

    const devRef = useRef<HTMLButtonElement | null>(null);
    const copyRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const currentTab = activeTab === 'dev' ? devRef.current : copyRef.current;

        if (currentTab) {
        const { offsetLeft, offsetWidth } = currentTab;
        setIndicatorStyle({
            left: offsetLeft,
            width: offsetWidth,
        });
        }
    }, [activeTab]);

    
    return (
        <div className="w-full  mx-auto">
            {/* tab header */}
            <div className="relative flex justify-around text-xl font-medium border-b border-gray-300 skillsTabHead">
                <button 
                ref={devRef} onClick={() => setActiveTab('dev')}
                className={`${activeTab === 'dev' ? 'text-blue-900' : 'text-gray-500'}`}
                >
                    Dev Stack
                </button>
                
                <button
                ref={copyRef} onClick={() => setActiveTab('copy')}
                className={`${activeTab === 'copy' ? 'text-blue-900' : 'text-gray-500'}`}
                >
                Copywriting Stack
                </button>

                {/* indicator Line */}
                <span className="absolute bottom-0 h-0.5 bg-blue-900 transition-all duration-300"
                style={indicatorStyle}
                />
            </div>

            {/* tab content */}
            <div className="mt-4 p-2">

                <DevSkills activeTab={activeTab}/>
                <CopySkills activeTab={activeTab}/>

            </div>
        </div>
    )
}