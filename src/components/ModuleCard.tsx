import { LucideIcon } from "lucide-react";

export type ModuleProp = {
  icon: LucideIcon; // main icon
  title: string;
  subtitle: string;
  topCard: {
    icon: LucideIcon;
    heading: string;
    description: string;
  };
  heading: string;
  description: string;
  bulletPoints: string[];
};

type ModuleCardProps = {
  module: ModuleProp;
  isSelected: boolean;
  onClick: () => void;
};

const ModuleCard = ({ module, isSelected, onClick }: ModuleCardProps) => {
  const Icon = module.icon;

  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-4 p-5 rounded-xl shadow-sm transition-all duration-300 cursor-pointer
        ${
          isSelected
            ? "bg-gradient-to-r bg-[#0C5E41] !text-white shadow-lg scale-105 border-r-4 border-b-4 border-[#393e2f]"
            : "bg-white hover:bg-teal-50 hover:shadow-md hover:-translate-y-1"
        }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300
          `}
      >
        <Icon
          className={`w-10 h-10  duration-300
            ${isSelected ? "!text-white" : "text-teal-600"}`}
        />
      </div>

      <div className="text-left">
        <h4 className={`font-semibold text-2xl ${isSelected ? "!text-white" : "text-gray-500"}`}>{module.title}</h4>
        <p
          className={`text-sm ${
            isSelected ? "!text-white" : "text-gray-500"
          }`}
        >
          {module.subtitle}
        </p>
      </div>
      <svg
        className={`absolute w-30 h-16 -right-8 top-1/2 transform }`}
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: isSelected ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <path
          d="M0,40 C40,40 80,0 120,28"
          stroke="#393e2f"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Arrowhead */}
        <polygon points="122,26 112,8 98,38" fill="#393e2f" />
      </svg>
    </div>
  );
};

export default ModuleCard;
