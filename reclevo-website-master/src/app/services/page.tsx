"use client";

import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { ChevronRight } from "lucide-react"; // lightweight icon
import { ClipboardList, Hammer, Rocket, Settings } from "lucide-react";
import { ptSerif } from "@/utils/Fonts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Assessment",
    description:
      "Comprehensive analysis of current waste management systems and challenges",
    color: "emerald",
    icon: <ClipboardList className="w-8 h-8 text-black" />,
  },
  {
    id: 2,
    title: "Design",
    description:
      "Custom solution design based on specific requirements and constraints",
    color: "blue",
    icon: <Hammer className="w-8 h-8 text-black" />,
  },
  {
    id: 3,
    title: "Deployment",
    description:
      "Phased implementation with training and change management support",
    color: "purple",
    icon: <Rocket className="w-8 h-8 text-black" />,
  },
  {
    id: 4,
    title: "Optimization",
    description:
      "Continuous monitoring, optimization, and scaling for maximum impact",
    color: "yellow",
    icon: <Settings className="w-8 h-8 text-black" />,
  },
];
const solutions = [
  {
    title: "Government Solutions",
    description:
      "Comprehensive platforms for municipal corporations, panchayats, and state authorities",
    iconBg: "bg-emerald-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
    points: [
      "Compliance monitoring systems",
      "Resource optimization tools",
      "Citizen engagement platforms",
      "Policy implementation tracking",
    ],
  },
  {
    title: "Business Solutions",
    description:
      "Customized waste management for industries, corporate campuses, and bulk generators",
    iconBg: "bg-blue-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0a2 2 0 012 2v6.5"
      />
    ),
    points: [
      "Corporate waste audits",
      "Sustainability reporting",
      "Cost-effective disposal",
      "Compliance management",
    ],
  },
  {
    title: "Community Solutions",
    description:
      "Platforms that encourage citizen participation and create accountability in waste management",
    iconBg: "bg-purple-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
    points: [
      "Citizen reporting apps",
      "Educational programs",
      "Reward systems",
      "Community dashboards",
    ],
  },
];
const techSolutions = [
  {
    id: 1,
    title: "IoT & Robotics R&D",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    features: [
      {
        title: "Smart Waste Bins",
        desc: "IoT-enabled bins with fill-level sensors and alerts",
      },
      {
        title: "Robotic Segregation",
        desc: "AI-powered robots for accurate sorting",
      },
      {
        title: "Sensor Networks",
        desc: "Environmental monitoring & waste analysis",
      },
    ],
    description:
      "Developing smart bins, sensors, and robotic systems for automated segregation and waste processing.",
    bgColor: "bg-gradient-to-tr from-purple-600 to-indigo-600",
    textColor: "text-white",
    borderColor: "border-purple-400",
  },
  {
    id: 2,
    title: "AI-driven Analytics",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    features: [
      {
        title: "Predictive Analytics",
        desc: "Forecast waste generation patterns and optimize collection schedules",
      },
      {
        title: "Policy Insights",
        desc: "Data-driven recommendations for waste management policies",
      },
      {
        title: "Financial Optimization",
        desc: "Cost analysis and budget optimization for waste management operations",
      },
    ],
    description:
      "Advanced data analytics and machine learning solutions offering data-backed insights for policy-making, operational efficiency, and financial planning.",
    bgColor: "bg-orange-600",
    textColor: "text-white",
    borderColor: "border-orange-500",
  },
];




export default function Services() {
  const [activeTab, setActiveTab] = useState("waste");
  const [activeId, setActiveId] = useState<number | null>(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev: number | null) =>
        prev === techSolutions[1].id ? techSolutions[1].id : techSolutions[0].id
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
 
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden  py-20 section-padding">
        {/* Centered Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center lg:mt-28">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2
              className={`text-4xl md:text-6xl font-bold !text-[#3a5a40] ${ptSerif.className}`}
            >
              Complete Waste Management Solutions
            </h2>
            <p className=" max-w-3xl mx-auto mb-16 text-2xl !text-[#3a5a40]">
              Our integrated platform covers every stage of the waste management
              lifecycle with cutting-edge technology
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4  mt-20 ">
            {/* Headings */}
            <div className="flex gap-6 mb-8">
              <div className="flex gap-4 flex-end">
                <button
                  onClick={() => setActiveTab("waste")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-sm font-semibold transition-all border ${
                    activeTab === "waste"
                      ? "bg-black text-gray-200 border-black shadow-md"
                      : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  Smart Waste Management
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      activeTab === "waste" ? "rotate-90" : "opacity-50"
                    }`}
                  />
                </button>

                <button
                  onClick={() => setActiveTab("asset")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-sm font-semibold transition-all border ${
                    activeTab === "asset"
                      ? "bg-[#393e2f] text-white border-[#0C5E41] shadow-md"
                      : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  Asset Management
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      activeTab === "asset" ? "rotate-90" : "opacity-50"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Content */}
            <div>
              {activeTab === "waste" && (
                <div className="bg-black p-8 rounded-b-4xl shadow-md !text-white">
                  <h3 className="text-2xl font-bold !text-white mb-4">
                    Smart Waste Management Software
                  </h3>
                  <p className="!text-white mb-6 text-sm sm:text-md lg:text-xl">
                    Comprehensive digital platform streamlining collection,
                    segregation, transport, and disposal with real-time tracking
                    and verified collectors.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Real-time waste collection tracking",
                      "Verified collector registration system",
                      "Route optimization algorithms",
                      "Transparent reporting dashboards",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center ">
                        <svg
                          className="w-5 h-5 text-[#9be367] mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="!text-[#b1ba9b] italic text-sm sm:text-md lg:text-xl">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "asset" && (
                <div className="bg-[#393e2f] p-8 rounded-b-4xl shadow-md">
                  <h3 className="text-2xl font-bold !text-white mb-4">
                    Asset Management Platforms
                  </h3>
                  <p className="!text-white mb-6 text-sm sm:text-md lg:text-xl">
                    Digital solutions helping governments and businesses track
                    and maintain their waste infrastructure efficiently and
                    cost-effectively.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Vehicle fleet management",
                      "Waste bin monitoring systems",
                      "Processing equipment maintenance",
                      "Predictive maintenance alerts",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#9be367] mr-3 italic"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="!text-[#b1ba9b] text-sm sm:text-md lg:text-xl">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-10 lg:py-18 ">
        <div className="mb-14">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2
              className={`text-4xl md:text-6xl font-bold !text-[#3a5a40] ${ptSerif.className}`}
            >
              Advanced Technology Solutions
            </h2>
            <p className=" max-w-3xl mx-auto mb-16 text-2xl !text-[#3a5a40]">
              Cutting-edge research and development in IoT, robotics, and AI for
              next-generation waste management
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-12">
          {/* Left Image */}
          <div className="flex-1">
            <Image
              width={200}
              height={200}
              src="/images/robot.png"
              alt="Technology illustration"
              className="w-full h-auto rounded-xl "
            />
          </div>

          {/* Right Titles & Content */}
          <div className="flex-1 flex flex-col gap-6">
            {techSolutions.map((item) => (
              <div
                key={item.id}
                className={`bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border ${item.borderColor}`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setActiveId(activeId === item.id ? null : item.id)
                  }
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${item.textColor} mb-0`}>
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-white font-bold">
                    {activeId === item.id ? "-" : "+"}
                  </span>
                </div>

                {activeId === item.id && (
                  <div className="mt-4 space-y-4">
                    <p className={`text-gray-200`}>{item.description}</p>
                    {item.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`border-l-4 ${item.borderColor} pl-4`}
                      >
                        <h4 className={`font-semibold ${item.textColor}`}>
                          {feature.title}
                        </h4>
                        <p className="text-gray-300 text-sm">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-10 lg:py-18 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
          <h3
            className={`text-4xl md:text-6xl font-bold !text-[#3a5a40] mb-6 ${ptSerif.className}`}
          >
            Industry-Specific Solutions
          </h3>
          <p
            className={`text-xl  !text-[#3a5a40] !mb-22 leading-relaxed opacity-90 ${ptSerif.className} `}
          >
            Tailored solutions for different sectors and stakeholders in the
            waste management ecosystem
          </p>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className=" p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div
                  className={`w-16 h-16 bg-[#8fc54d] rounded-full flex items-center justify-center  mb-4`}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {solution.icon}
                  </svg>
                </div>
                <h3 className="text-4xl font-bold !text-[#3a5a40] mb-3">
                  {solution.title}
                </h3>
                <p className="!text-[#3a5a40] mb-4 text-md font-semibold ">
                  {solution.description}
                </p>
                <ul className="space-y-2 text-sm !text-[#3a5a40]">
                  {solution.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20  relative overflow-hidden">
        {/* Overall fade-in animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl max-h-9xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Side with Background Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-xl h-[700px]   shadow-lg bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/stop-plastic.jpg')", // put your image path here
            }}
          >
            <div className=" backdrop-blur-xs p-6 rounded-xl">
              <p className="lg:text-sm sm:text-xs !text-yellow-600 font-semibold mb-2">
                OUR PROCESS
              </p>
              <h2 className="lg:text-5xl sm:text-4xl font-bold !text-white mb-4">
                Our Implementation{" "}
                <span className="text-yellow-500">Process</span>
              </h2>
              <p className="!text-gray-200 mb-6 max-w-lg">
                A systematic approach to deploying our solutions, ensuring
                successful adoption and long-term sustainability.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Steps */}
          <div className="flex flex-col space-y-6 sm:space-y-12 relative h-auto sm:h-[700px]">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex items-start gap-4 sm:gap-6 mt-6 sm:mt-12"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center">
                  {/* Circle with Icon */}
                  <div
                    className={`bg-[#8fc54d] rounded-full text-black w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative shadow-md`}
                  >
                    {step.icon}
                    <span
                      className={`absolute -top-2 -right-2 bg-[#8fc54d] text-black w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full font-bold`}
                    >
                      {step.id}
                    </span>
                  </div>
                  {/* Connecting line */}
                  {step.id !== steps.length && (
                    <div className="w-px bg-black flex-1 mt-2"></div>
                  )}
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="text-base sm:text-lg md:text-4xl font-semibold !text-[#3a5a40]">
                    {step.title}
                  </h3>
                  <p className="!text-[#3a5a40] text-sm sm:text-base md:text-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-[#101310] text-center px-6 border-t-2 border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold !text-white mb-4 leading-tight">
            Ready to Transform Your Waste Management?
          </h2>
          <p className="!text-gray-300 font-semibold md:text-lg mb-10">
            Join us in addressing India's 160,000 tonnes daily waste challenge.
            From proven Goa operations to nationwide expans Let's discuss how
            our solutions can address your specific waste management challenges
            and create sustainable impaction with AI and IoT technology.
          </p>
          <Link href="/contact">
            <button className="flex items-center justify-center gap-2 w-[250px] mx-auto mt-10 bg-[#9be367] text-black  text-xl font-bold !p-6 py-3 rounded-full transition-all hover:bg-[#88dc50]  cursor-pointer">
              Contact us <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
