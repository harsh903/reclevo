"use client";
import ModuleCard from "@/components/ModuleCard";
import { ptSerif } from "@/utils/Fonts";
import { Check, Clock, Eye, Leaf, Users } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
const MODULES_DATA = [
  {
    icon: Eye,
    title: "Precision Tracking",
    subtitle: "& Verification",
    topCard: {
      icon: Eye,
      heading: "Precision Tracking & Verification",
      description: "Real-time waste tracking and verification systems",
    },
    heading: "Precision Tracking",
    description:
      "Ensure complete transparency in your waste operations with real-time tracking and verification.",
    bulletPoints: [
      "Monitor waste at every stage",
      "Accurate reporting and verification",
      "Seamless integration with operations",
      "Data-driven insights",
    ],
  },
  {
    icon: Leaf,
    title: "Absolute Waste Compliance",
    subtitle: "Engine",
    topCard: {
      icon: Leaf,
      heading: "Compliance Engine",
      description: "Automated compliance monitoring",
    },
    heading: "Absolute Waste Compliance",
    description:
      "Transform your waste operations with intelligent scheduling, transparent tracking, and automated compliance reporting.",
    bulletPoints: [
      "Intelligent business-collector matching",
      "Real-time availability indicators",
      "Automated service agreements",
      "Performance-based recommendations",
    ],
  },
  {
    icon: Users,
    title: "AI-Powered Route",
    subtitle: "Optimization",
    topCard: {
      icon: Users,
      heading: "Route Optimization",
      description: "Smart routing for efficient collection",
    },
    heading: "AI-Powered Route Optimization",
    description:
      "Optimize collection routes using AI algorithms to save time, fuel, and operational costs.",
    bulletPoints: [
      "Optimized routes for fleets",
      "Reduced operational costs",
      "AI-driven predictions",
      "Dynamic route updates",
    ],
  },
  {
    icon: Clock,
    title: "Real-Time Fleet",
    subtitle: "Intelligence",
    topCard: {
      icon: Clock,
      heading: "Fleet Intelligence",
      description: "Monitor and analyze your fleet in real-time",
    },
    heading: "Real-Time Fleet Intelligence",
    description:
      "Track your fleet live, monitor performance, and make data-driven decisions to improve efficiency.",
    bulletPoints: [
      "Live fleet tracking",
      "Performance metrics monitoring",
      "Predictive maintenance alerts",
      "Improved resource utilization",
    ],
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    subtitle: "Analytics",
    topCard: {
      icon: Leaf,
      heading: "Impact Analytics",
      description: "Measure and reduce environmental impact",
    },
    heading: "Environmental Impact Analytics",
    description:
      "Analyze and reduce the environmental footprint of your waste operations using actionable insights.",
    bulletPoints: [
      "Track emissions and waste reduction",
      "Sustainability reporting",
      "Data-driven environmental decisions",
      "Continuous improvement",
    ],
  },
];

const IntelligentEcosystemSection = () => {
  const [selectedModule, setSelectedModule] = useState(MODULES_DATA[1]); // default selected module
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-4">
            Our Platform
          </span>
          <ScrollReveal
            direction="left"
            distance={100}
            containerClassName="w-full"
            textClassName={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 ${ptSerif.className}`}
          >
            Interconnected Modules for Complete Waste Management
          </ScrollReveal>
          <p className="text-lg text-[#4a4a4a] max-w-3xl mx-auto">
            Six powerful modules working together to create the most advanced waste management platform available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features List */}
          <div className="space-y-4">
            {MODULES_DATA.map((module, idx) => (
              <ModuleCard
                key={idx}
                module={module}
                isSelected={selectedModule.title === module.title}
                onClick={() => setSelectedModule(module)}
              />
            ))}
          </div>

          {/* Right Column - Feature Highlight */}
          <div className="bg-white border-2 border-[#0C5E41] h-auto min-h-[550px] rounded-2xl p-8 shadow-lg sticky top-32">
            {/* Top Card */}
            <div className="rounded-xl p-6 mb-6 text-center">
              <div className="w-16 h-16 bg-[#0C5E41] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <selectedModule.topCard.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className={`text-2xl font-bold text-[#1a1a1a] ${ptSerif.className}`}>
                {selectedModule.topCard.heading}
              </h4>
              <p className="text-[#4a4a4a] text-base mt-2">
                {selectedModule.topCard.description}
              </p>
            </div>

            {/* Title & Description */}
            <h3 className={`text-2xl font-bold mb-4 text-[#1a1a1a] ${ptSerif.className}`}>
              {selectedModule.heading}
            </h3>
            <p className="text-[#4a4a4a] mb-6 text-base leading-relaxed">
              {selectedModule.description}
            </p>

            {/* Features Grid with Bullet Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {selectedModule.bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#0C5E41] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#4a4a4a]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="w-full py-3 px-6 rounded-full bg-[#0C5E41] text-white font-semibold hover:bg-[#0a4f36] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f9fafb]" style={{ borderRadius: '50% 50% 0 0' }} />
    </section>
  );
};

export default IntelligentEcosystemSection;
