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
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-6xl font-bold !text-[#000000] ${ptSerif.className}`}
          >
            Transform your operastions in three steps
          </h2>

          <p
            className={`text-2xl md:text-2xl font-bold pt-6 !text-[#000000] ${ptSerif.className}`}
          >
            Join thousands of businesses and collectors who have revolutionized
            their waste management operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-12 mt-12">
          {steps.map((step, idx) => (
            <StepCard key={idx} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepSection;
