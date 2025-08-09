export default function ProjectCard ({testImg}: any) {
    return (
        // <div className="projectCard">
        //     {/* preview image or Gif of App / Thumbnail image or relevant graphic  */}
        //     <div className="w-full h-64 overflow-hidden rounded-t-xl">
        //         <img src={testImg} alt="test_img" className="rounded-t-xl object-fill w-full h-full scale-100 hover:scale-110 transition ease-in-out duration-300" />
        //     </div>

        //     <div className="flex flex-col space-y-5 p-5">

        //         {/* project title */}
        //         <h3 className="text-2xl font-semibold">
        //             FilmsWorld
        //         </h3>

        //         {/* description & tech stack icons / type of copy and context */}
        //         <div className="flex flex-col gap-5">
        //             <p>A movie website built with React and Tailwind CSS. this project showcases a modern design and responsive layout.</p>
        //             <div className="flex space-x-2">
        //                 <span className="text-sm text-gray-500 border rounded-xl p-1 min-w-10">React</span>
        //                 <span className="text-sm text-gray-500 border rounded-xl p-1 min-w-10">Tailwind CSS</span>
        //                 <span className="text-sm text-gray-500 border rounded-xl p-1 min-w-10">PHP</span>
        //                 <span className="text-sm text-gray-500 border rounded-xl p-1 min-w-10">MySQL</span>
        //             </div>
        //         </div>

        //         {/* buttons for live demo, github repo, view sample, CTA, PDF */}
        //         <span className="text-sm text-gray-500">
        //             <button className="bg-blue-900 text-white rounded p-2">View Repository</button>
        //         </span>

        //     </div>
        // </div>
        <div className="projectCard">
    {/* preview image or Gif of App / Thumbnail image or relevant graphic  */}
    <div className="w-full h-64 overflow-hidden rounded-t-xl">
        <img 
            src={testImg} 
            alt="test_img" 
            className="rounded-t-xl object-cover w-full h-full scale-100 hover:scale-110 transition ease-in-out duration-300" 
        />
    </div>

    <div className="flex flex-col space-y-5 p-5">
        {/* project title */}
        <h3 className="text-2xl font-semibold">
            FilmsWorld
        </h3>

        {/* description & tech stack */}
        <div className="flex flex-col gap-5">
            <p className="italic">
                A movie website built with React and Tailwind CSS. This project showcases a modern design and responsive layout.
            </p>
            <div className="flex space-x-2 flex-wrap">
                <span className="text-sm text-gray-500 border rounded-xl px-2 py-1">React</span>
                <span className="text-sm text-gray-500 border rounded-xl px-2 py-1">Tailwind CSS</span>
                <span className="text-sm text-gray-500 border rounded-xl px-2 py-1">PHP</span>
                <span className="text-sm text-gray-500 border rounded-xl px-2 py-1">MySQL</span>
            </div>
        </div>

        {/* button */}
        <span>
            <button className="bg-blue-950 hover:bg-blue-800/80 ease-in-out text-white rounded px-4 py-2 transition">
                View Repository
            </button>
        </span>
    </div>
</div>

    )
}