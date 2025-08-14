import { Icon } from "@iconify/react";

type Skills = {
  name: string,
  icon: string,
  color: string
};

export default function CopySkills({ activeTab }: any) {
  const copyTypes: Skills[] = [
  { name: "Email Sequences", icon: "lucide:mail", color: "#f97316" }, // orange
  { name: "Sales Pages", icon: "lucide:file-text", color: "#2563eb" }, // blue
  { name: "Ad Copy", icon: "lucide:megaphone", color: "#e11d48" }, // red
  { name: "Landing Pages", icon: "lucide:layout", color: "#059669" }, // green
  { name: "VSL Scripts", icon: "lucide:video", color: "#9333ea" } // purple
    ];

    const copyFrameworks: Skills[] = [
  { name: "AIDA", icon: "lucide:workflow", color: "#f59e0b" }, // amber
  { name: "PAS", icon: "lucide:list-ordered", color: "#3b82f6" }, // blue
  { name: "Cross close", icon: "lucide:merge", color: "#ef4444" }, // red
  { name: "Belief Shift", icon: "lucide:refresh-cw", color: "#10b981" } // green
    ];

    const copyTools: Skills[] = [
  { name: "Google Docs", icon: "simple-icons:googledocs", color: "#4285F4" }, // Google Blue
  { name: "Grammarly", icon: "simple-icons:grammarly", color: "#00A982" }, // Grammarly green
  { name: "Notion", icon: "simple-icons:notion", color: "#000000" }, // Black
  { name: "Analytics", icon: "simple-icons:googleanalytics", color: "#FFA500" } // Analytics orange
    ];


    function iconForm(item: Skills) {
      return (
        <div className="flex flex-col items-center space-x-2 shadow rounded p-1 bg-white text-black dark:bg-gray-500" key={item.name}>
          <span className="h-16 w-16 md:h-32 md:w-32 rounded flex items-center justify-center">
            <Icon icon={item.icon} color={item.color} className="h-1/2 w-1/2" />
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
