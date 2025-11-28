"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ClipboardList, Hammer, Rocket, Settings, Check, ArrowRight } from "lucide-react";
import { ptSerif } from "@/utils/Fonts";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Assessment",
    description: "Comprehensive analysis of current waste management systems and challenges",
    icon: <ClipboardList className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    id: 2,
    title: "Design",
    description: "Custom solution design based on specific requirements and constraints",
    icon: <Hammer className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    id: 3,
    title: "Deployment",
    description: "Phased implementation with training and change management support",
    icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    id: 4,
    title: "Optimization",
    description: "Continuous monitoring, optimization, and scaling for maximum impact",
    icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
];

const solutions = [
  {
    title: "Government Solutions",
    description: "Complete platforms for municipal corporations, panchayats, and state authorities to manage waste operations efficiently",
    points: [
      "Real-time compliance monitoring",
      "Resource optimization dashboards",
      "Citizen engagement portals",
      "Policy implementation tracking",
    ],
  },
  {
    title: "Business Solutions",
    description: "Tailored waste management for industries, corporate campuses, and bulk waste generators",
    points: [
      "Waste audit and analysis",
      "ESG and sustainability reporting",
      "Cost-optimized disposal",
      "Regulatory compliance management",
    ],
  },
  {
    title: "Community Solutions",
    description: "Platforms that drive citizen participation and build accountability in waste management",
    points: [
      "Citizen reporting apps",
      "Awareness and education programs",
      "Incentive and reward systems",
      "Community performance dashboards",
    ],
  },
];

const techSolutions = [
  {
    id: 1,
    title: "IoT & Robotics",
    features: [
      { title: "Smart Bins", desc: "Fill-level sensors with real-time alerts" },
      { title: "Robotic Segregation", desc: "AI-powered sorting for higher accuracy" },
      { title: "Sensor Networks", desc: "Environmental monitoring at scale" },
    ],
    description: "Next-generation hardware solutions for automated waste collection and segregation.",
  },
  {
    id: 2,
    title: "AI-Powered Analytics",
    features: [
      { title: "Predictive Analytics", desc: "Forecast waste volumes and optimize routes" },
      { title: "Operational Insights", desc: "Data-driven decision making" },
      { title: "Cost Optimization", desc: "Identify savings and efficiency gains" },
    ],
    description: "Machine learning and analytics that turn data into actionable improvements.",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("waste");
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C5E41] mb-4 sm:mb-6 ${ptSerif.className}`}>
            Smart Waste Management Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Technology-driven platforms that cover every stage of the waste lifecycle—
            from collection and tracking to processing and compliance reporting.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <button
              onClick={() => setActiveTab("waste")}
              className={`flex-1 px-4 sm:px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-all ${
                activeTab === "waste"
                  ? "bg-[#0C5E41] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Smart Waste Management
            </button>
            <button
              onClick={() => setActiveTab("asset")}
              className={`flex-1 px-4 sm:px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-all ${
                activeTab === "asset"
                  ? "bg-[#0C5E41] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Asset Management
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8">
            {activeTab === "waste" ? (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Smart Waste Management Platform
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6">
                  Digital platform that brings transparency and efficiency to
                  every step—collection, segregation, transport, and disposal.
                </p>
                <ul className="space-y-3">
                  {["Real-time waste collection tracking", "Verified collector registration system", "Route optimization algorithms", "Transparent reporting dashboards"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                      <Check className="w-5 h-5 text-white flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Asset Management Platform
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6">
                  Track and maintain your entire waste infrastructure—vehicles,
                  bins, and equipment—with real-time visibility and predictive alerts.
                </p>
                <ul className="space-y-3">
                  {["Vehicle fleet management", "Waste bin monitoring systems", "Processing equipment maintenance", "Predictive maintenance alerts"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                      <Check className="w-5 h-5 text-white flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C5E41] mb-3 ${ptSerif.className}`}>
              Technology That Delivers Results
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              IoT sensors, robotics, and AI analytics working together to transform waste operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                width={500}
                height={500}
                src="/images/robot.png"
                alt="Technology illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-4">
              {techSolutions.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</span>
                    <span className="text-[#0C5E41] text-xl font-bold">
                      {activeId === item.id ? "−" : "+"}
                    </span>
                  </button>

                  {activeId === item.id && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <div className="space-y-3">
                        {item.features.map((feature, i) => (
                          <div key={i} className="border-l-2 border-[#0C5E41] pl-3">
                            <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
                            <p className="text-gray-500 text-xs">{feature.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C5E41] mb-3 ${ptSerif.className}`}>
              Industry-Specific Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
              Tailored solutions for different sectors in the waste management ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#0C5E41] rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.points.map((point, i) => (
                    <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0C5E41] rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Image */}
            <div
              className="relative rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[400px] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/stop-plastic.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 p-6 sm:p-8">
                <span className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Our Process
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
                  Implementation Process
                </h2>
                <p className="text-gray-200 text-sm sm:text-base mt-3 max-w-md">
                  A systematic approach to deploying our solutions, ensuring
                  successful adoption and long-term sustainability.
                </p>
              </div>
            </div>

            {/* Right - Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0C5E41] rounded-full flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0C5E41]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight ${ptSerif.className}`}>
            Ready to Transform Your Waste Management?
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-8 sm:mb-10 leading-relaxed">
            Schedule a consultation to explore how Reclevo can streamline
            your waste operations and help achieve your sustainability targets.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#0C5E41] bg-white rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
              Contact Us <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
