import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

type StepCardProps = {
  step: Step;
};

export type Step = {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  color?: string;
  badgePosition: string;
};

const StepCard = ({ step }: StepCardProps) => {
  const Icon = step.icon;
  return (
    <div className="relative group">
      {/* Card */}
      <div
        className={`border-2 rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition transform hover:-translate-y-2 !bg-black border-${step.color}-500`}
      >
        {/* Badge */}
        {step.badgePosition === "top-center" && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="!bg-[#9be367] text-black px-8 py-2 rounded-full font-bold shadow-lg">
              {step.number}
            </div>
          </div>
        )}
        {step.badgePosition === "bottom-center" && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="!bg-[#9be367] text-black px-8 py-2 rounded-full font-bold shadow-lg">
              {step.number}
            </div>
          </div>
        )}
        {step.badgePosition === "bottom-right" && (
          <div className="absolute -bottom-4 right-8">
            <div className="!bg-[#9be367] text-black px-8 py-2 rounded-full font-bold shadow-lg">
              {step.number}
            </div>
          </div>
        )}

        {/* Icon + Title + Subtitle */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`w-16 h-16 rounded-full bg-[#fbf9ef] flex items-center justify-center group-hover:scale-110 transition`}
          >
            <Icon className={`w-8 h-8 text-black`} />
          </div>
          <div>
            <h3 className="text-2xl font-bold !text-white mb-1">
              {step.title}
            </h3>
            <p className="!text-white">{step.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="!text-[#ffffff] mb-6">{step.description}</p>

        {/* Points */}
        <div className="space-y-3">
          {step.points.map((point, i) => (
            <div key={i} className="flex items-center">
              <Check className="w-5 h-5 text-white mr-3" />
              <span className="text-sm !text-white">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
