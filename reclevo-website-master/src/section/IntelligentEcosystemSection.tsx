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
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal
          direction="left"
          distance={100}
          containerClassName="w-full"
          textClassName={`text-4xl md:text-7xl font-bold !text-black mb-28 ${ptSerif.className}`}
        >
          Six interconnected modules working together to create the most
          advanced waste management platform
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features List */}
          <div className="space-y-6">
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
          <div className="feature-card !bg-[#ffffff]  !border-[#0C5E41] !border-4   h-[600px] rounded-2xl p-8 hover:shadow-2xl ">
            {/* Top Card */}
            <div className=" rounded-xl p-6 mb-6 text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-[#9be367] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md transition-transform duration-300 hover:rotate-6">
                <selectedModule.topCard.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                {selectedModule.topCard.heading}
              </h4>
              <p className="text-gray-600 text-md mt-2">
                {selectedModule.topCard.description}
              </p>
            </div>

            {/* Title & Description */}
            <h3 className="text-3xl font-bold mb-4 !text-black">
              {selectedModule.heading}
            </h3>
            <p className="!text-black mb-6 text-xl">
              {selectedModule.description}
            </p>

            {/* Features Grid with Bullet Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {selectedModule.bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 !text-black mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium text-md !text-black">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r !bg-[#0C5E41] border-2 border-[#292b24] text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentEcosystemSection;
