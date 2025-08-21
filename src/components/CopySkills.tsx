import { Icon } from "@iconify/react";

type Skills = {
  name: string,
  icon: string,
  color: string
};

export default function CopySkills({ activeTab }: any) {
  const copyTypes: Skills[] = [
    { name: "Email Sequences", icon: "lucide:mail", color: "text-orange-500" }, // orange
    { name: "Sales Pages", icon: "lucide:file-text", color: "text-blue-600" }, // blue
    { name: "Ad Copy", icon: "lucide:megaphone", color: "text-rose-600" }, // red/rose
    { name: "Landing Pages", icon: "lucide:layout", color: "text-green-600" }, // green
    { name: "VSL Scripts", icon: "lucide:video", color: "text-purple-700" } // purple
  ];

  const copyFrameworks: Skills[] = [
    { name: "AIDA", icon: "lucide:workflow", color: "text-amber-500" }, // amber
    { name: "PAS", icon: "lucide:list-ordered", color: "text-blue-500" }, // blue
    { name: "Cross close", icon: "lucide:merge", color: "text-red-500" }, // red
    { name: "Belief Shift", icon: "lucide:refresh-cw", color: "text-emerald-500" } // green
  ];

  const copyTools: Skills[] = [
    { name: "Google Docs", icon: "simple-icons:googledocs", color: "text-blue-500" }, // Google Blue
    { name: "Grammarly", icon: "simple-icons:grammarly", color: "text-emerald-600" }, // Grammarly green
    { name: "Notion", icon: "simple-icons:notion", color: "text-black dark:text-white" }, // Black
    { name: "Analytics", icon: "simple-icons:googleanalytics", color: "text-orange-500" } // Analytics orange
  ];


    function iconForm(item: Skills) {
      return (
        <div className="flex flex-col items-center space-x-2  rounded p-1" key={item.name}>
          <span className="h-16 w-16 lg:h-32 lg:w-32 rounded flex items-center justify-center">
            <Icon icon={item.icon} className={`h-1/2 w-1/2 ${item.color}`} />
          </span>
          <span className="italic">{item.name}</span>
        </div>
      );
    }

  return (
    <div className={`${activeTab === "copy" ? "tabContent" : "hidden"}`}>
      <div>
        <h3>Types</h3>
        <div className="tabSubContent">
          <div>
            {copyTypes.map((item) => (
              iconForm(item)
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3>Frameworks</h3>
        <div className="tabSubContent">
          <div>
            {copyFrameworks.map((item) => (
              iconForm(item)
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3>Tools</h3>
        <div className="tabSubContent">
          <div>
            {copyTools.map((item) => (
              iconForm(item)
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
