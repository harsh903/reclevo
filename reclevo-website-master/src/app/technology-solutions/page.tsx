"use client";
import { NumberTicker } from "../../components/ui/number-ticker";
import { motion } from "framer-motion";
import { ptSerif } from "@/utils/Fonts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const technologies = [
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent Automation",
    description:
      "Advanced artificial intelligence and machine learning algorithms that enable predictive analytics, automated decision-making, and intelligent waste classification systems.",
    gradient: "from-blue-500 to-purple-600",
    colorBlocks: [
      {
        title: "Predictive Analytics",
        bg: "bg-[#9be367]",
        points: [
          "Waste generation forecasting",
          "Demand prediction",
          "Maintenance scheduling",
          "Resource optimization",
        ],
      },
      {
        title: "Computer Vision",
        bg: "bg-[#9be367]",
        points: [
          "Automated waste sorting",
          "Quality control",
          "Contamination detection",
          "Real-time monitoring",
        ],
      },
    ],
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "IoT & Sensor Networks",
    subtitle: "Connected Infrastructure",
    description:
      "Comprehensive Internet of Things ecosystem with advanced sensors that provide real-time data on waste levels, environmental conditions, and system performance.",
    gradient: "from-green-500 to-teal-600",
    colorBlocks: [
      {
        title: "Smart Sensors",
        bg: "bg-[#9be367]",
        points: [
          "Fill-level monitoring",
          "Weight measurement",
          "Temperature tracking",
          "Gas emission detection",
        ],
      },
      {
        title: "Connectivity",
        bg: "bg-[#9be367]",
        points: [
          "LoRaWAN networks",
          "5G integration",
          "Edge computing",
          "Cloud synchronization",
        ],
      },
    ],
    iconPath:
      "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
  },
];

const features = [
  {
    iconGradient: "from-blue-500 to-blue-600",
    iconSvg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
      />
    ),
    title: "Quantum Computing",
    desc: "Exploring quantum algorithms for complex optimization problems in waste routing and resource allocation.",
    tag: { text: "Research Phase", color: "#9be367" },
  },
  {
    iconGradient: "from-green-500 to-green-600",
    iconSvg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    ),
    title: "Blockchain Integration",
    desc: "Implementing blockchain for transparent waste tracking, carbon credit verification, and supply chain management.",
    tag: { text: "Development", color: "green" },
  },
  {
    iconGradient: "from-purple-500 to-purple-600",
    iconSvg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
      />
    ),
    title: "Advanced Materials",
    desc: "Developing smart materials and nanotechnology solutions for enhanced waste processing and recycling.",
    tag: { text: "Prototype", color: "purple" },
  },
  {
    iconGradient: "from-orange-500 to-orange-600",
    iconSvg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    title: "Energy Recovery",
    desc: "Innovative technologies for converting waste to energy through advanced thermal and biological processes.",
    tag: { text: "Testing", color: "orange" },
  },
  {
    iconGradient: "from-teal-500 to-teal-600",
    iconSvg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
    title: "Digital Twins",
    desc: "Creating virtual replicas of waste management systems for simulation, optimization, and predictive maintenance.",
    tag: { text: "Pilot", color: "teal" },
  },
  {
    iconGradient: "from-red-500 to-red-600",
    iconSvg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
      />
    ),
    title: "AR/VR Solutions",
    desc: "Augmented and virtual reality applications for training, maintenance, and remote system monitoring.",
    tag: { text: "Beta", color: "red" },
  },
];

export default function TechnologySolutions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 flex items-center justify-center h-[40vh] my-auto mt-20 overflow-hidden w-full">
        <div className="w-full mx-auto rounded-md   overflow-hidden mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2
              className={`text-4xl md:text-6xl font-bold !text-[#3a5a40] ${ptSerif.className}`}
            >
              Next-Generation Technologies
            </h2>
            <p className=" max-w-3xl mx-auto mb-16 text-2xl !text-[#3a5a40]">
              Cutting-edge AI, IoT, and robotics solutions that revolutionize
              waste management through automation, intelligence, and data-driven
              insights
            </p>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-16 py-12 lg:py-24 gap-8 lg:gap-16 overflow-hidden">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ x: index === 0 ? "-100%" : "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.3 }}
            className="flex-1 bg-[#3a3e2f] rounded-3xl shadow-lg p-6 lg:p-12 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center mb-6">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}
              >
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
                    d={tech.iconPath}
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl lg:text-4xl font-bold !text-white">
                  {tech.title}
                </h3>
                <p className="!text-[#b1ba9b] font-medium text-md lg:text-base">
                  {tech.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="!text-white text-sm lg:text-base mb-6">
              {tech.description}
            </p>

            {/* Sub-blocks */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {tech.colorBlocks.map((block, i) => (
                <div
                  key={i}
                  className={` !bg-[#e9e5e1]  p-4 rounded-lg md:w-1/2 w-full`}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {block.title}
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {block.points.map((point, j) => (
                      <li key={j}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
      {/* Robotics & Automation */}

      <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch py-12 lg:py-24">
        {/* Left Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 flex items-center justify-start" // changed justify-center -> justify-start
        >
          <Image
            height={500}
            width={500}
            src="/images/robot2.png"
            alt="Robotics Illustration"
            className="w-full h-auto max-h-[700px] object-cover rounded-l-2xl" // only round left side
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex-1  rounded-r-2xl p-8 lg:p-12 overflow-y-auto"
          style={{ maxHeight: "100%" }}
        >
          <div className=" gap-8 lg:gap-12">
            {/* Left side of right content */}
            <div className="overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={`!text-[#3a5a44] ${ptSerif.className} text-3xl`}
                  >
                    Robotics & Automation
                  </h3>
                  <p className="!text-[#3a5a44] text-md">
                    Autonomous Operations
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-xl mt-10">
                Advanced robotic systems that automate waste sorting,
                collection, and processing operations, reducing human dependency
                and increasing operational efficiency.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Automated Sorting Robots",
                    desc: "AI-powered robots that identify and sort different types of waste with 99% accuracy",
                  },
                  {
                    title: "Autonomous Collection Vehicles",
                    desc: "Self-driving waste collection trucks with optimized route planning",
                  },
                  {
                    title: "Robotic Process Automation",
                    desc: "Automated workflows for waste processing and facility management",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start m-6 mt-10">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-orange-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <div className="mt-10 mx-4 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className={`text-4xl md:text-6xl font-bold !text-[#3a5a40] ${ptSerif.className}`}
          >
            Innovation Focus Areas
          </h2>
          <p className=" max-w-3xl mx-auto mb-16 text-2xl !text-[#3a5a40]">
            Our research and development efforts are concentrated on
            breakthrough technologies that will shape the future of waste
            management
          </p>
        </div>
      </div>

      {/* Innovation Areas */}
      <section className="section-padding ">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-card p-6 !bg-[#393e2f] rounded-2xl shadow-md cursor-pointer"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  className={`w-14 h-14 !bg-[#9be367] rounded-full flex items-center justify-center mb-4 transition-transform duration-300`}
                >
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.iconSvg}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold !text-[white] mb-3">
                  {feature.title}
                </h3>
                <p className="!text-[#b1ba9b] text-sm mb-4">{feature.desc}</p>
                <div className="text-xs text-gray-500">
                  <span
                    className={`bg-${feature.tag.color}-100 text-${feature.tag.color}-800 px-2 py-1 rounded`}
                  >
                    {feature.tag.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Impact */}
      <section className="bg-[#101310] gap-8 text-white py-20 px-8 text-center w-full h-screen flex flex-col justify-center items-start">
        <div className=" mx-auto">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 !text-white ${ptSerif.className}`}
          >
            Technology Impact Metrics
          </h2>
          <p className="max-w-3xl mx-auto !mb-20 text-2xl !text-white">
            Measurable outcomes from our advanced technology implementations
            across various waste management operations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            <div className="md:max-w-md max-w-xl flex flex-col items-center">
              <div className="flex items-baseline justify-center">
                <NumberTicker
                  value={99.2}
                  decimalPlaces={1}
                  className="md:text-8xl text-7xl font-medium tracking-tighter whitespace-pre-wrap !text-white dark:text-white"
                />
                <span className="md:text-8xl text-7xl  font-medium tracking-tighter whitespace-pre-wrap !text-white dark:text-white">
                  %
                </span>
              </div>
              <p className="!text-[#8fc54d] !md:text-xl mt-2">
                AI Accuracy – In waste classification
              </p>
            </div>

            <div className="md:max-w-md max-w-xl">
              <NumberTicker
                value={24}
                className="md:text-8xl text-7xl font-medium tracking-tighter whitespace-pre-wrap !text-white dark:text-white"
              />
              <span className="md:text-8xl text-7xl font-medium tracking-tighter whitespace-pre-wrap !text-white dark:text-white">
                /7
              </span>
              <p className="!text-[#8fc54d]  !md:text-xl">
                IoT Monitoring-Real-time data collection
              </p>
            </div>

            <div className="md:max-w-md max-w-xl">
              <NumberTicker
                value={85}
                className="md:text-8xl text-7xl font-medium tracking-tighter whitespace-pre-wrap !text-white dark:text-white"
              />
              <span className="md:text-8xl text-7xl font-medium tracking-tighter whitespace-pre-wrap !text-white dark:text-white">
                %
              </span>

              <p className="!text-[#8fc54d]  !md:text-xl">
                Automation Rate-In sorting processes
              </p>
            </div>

            <div className="md:max-w-md max-w-xl">
              <NumberTicker
                value={50}
                className="md:text-8xl text-7xl font-medium tracking-tighter whitespace-pre-wrap !text-white dark:text-white"
              />
              <span className="md:text-8xl text-7xl font-medium tracking-tighter whitespace-pre-wrap !text-white dark:text-white">
                %
              </span>

              <p className="!text-[#8fc54d]  !md:text-xl">
                Energy Reduction-Through optimization
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center md:h-screen h-[70vh] bg-[#101310] text-center px-6 border-t-2 border-gray-800">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold !text-white mb-4 leading-tight">
            Partner with Technology Leaders
          </h2>
          <p className="!text-gray-300 font-semibold md:text-lg mb-10">
            Join the revolution in waste management technology. Let's build the
            future of sustainable waste solutions together.
          </p>

          <button className="flex items-center justify-center gap-2 w-[300px] mx-auto mt-10 bg-[#9be367] text-black  text-xl font-bold !p-6 py-3 rounded-full transition-all hover:bg-[#88dc50]">
            Connect with us <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
