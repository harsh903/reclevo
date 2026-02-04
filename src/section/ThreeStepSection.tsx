import StepCard from "@/components/StepCard";
import { ptSerif } from "@/utils/Fonts";
import { Settings, Users, BarChart3 } from "lucide-react";
const steps = [
  {
    number: 1,
    title: "Connect",
    subtitle: "Join the Platform",
    description: "Quick onboarding with verification and profile setup",
    color: "teal",
    icon: Users,
    points: ["Platform access", "Verified profile", "Network connection"],
    badgePosition: "bottom-center",
  },
  {
    number: 2,
    title: "Optimize",
    subtitle: "Transform Operations",
    description: "AI-powered optimization of routes, schedules, and processes",
    color: "purple",
    icon: Settings,
    points: ["Route optimization", "Cost reduction", "Efficiency gains"],
    badgePosition: "top-center",
  },
  {
    number: 3,
    title: "Grow",
    subtitle: "Scale & Expand",
    description: "Business growth through expanded network and capabilities",
    color: "pink",
    icon: BarChart3,
    points: ["Revenue growth", "Market expansion", "Sustainability impact"],
    badgePosition: "bottom-right",
  },
];
const ThreeStepSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-[#f9fafb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-4">
            How It Works
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 ${ptSerif.className}`}
          >
            Transform Your Operations in Three Steps
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Join thousands of businesses and collectors who have revolutionized
            their waste management operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <StepCard key={idx} step={step} />
          ))}
        </div>
      </div>
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0C5E41]" style={{ borderRadius: '50% 50% 0 0' }} />
    </section>
  );
};

export default ThreeStepSection;
