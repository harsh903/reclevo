"use client";

import { motion, } from "framer-motion";
import { Recycle, Brain, ArrowRight } from "lucide-react";
import Title from "@/components/Title";
import Image from "next/image";
import {
  Modal,
  ModalBody,
  ModalContent,
   ModalTrigger,
} from "../../components/ui/animated-modal";

const solutions = [
  {
    id: 1,
    title: "Smart Waste Management",
    subtitle: "Digital Platforms & Software",
    description:
      "Comprehensive digital platforms that streamline waste collection, segregation, transport, and disposal with real-time tracking and verified collectors.",
    icon: (
      <Recycle className="w-6 h-6 sm:w-8 sm:h-8 text-white lg:text-green-600" />
    ),
    bgColor: "bg-green-700 lg:bg-green-50",
    textColor: "text-white",
    borderColor: "border-green-400",
    features: [
      {
        title: "Core Features",
        items: ["Real-time tracking", "Route optimization", "Asset management"],
      },
      {
        title: "Benefits",
        items: [
          "40% efficiency increase",
          "60% cost reduction",
          "Transparent reporting",
        ],
      },
    ],
    link: "/smart-waste-solutions",
    cta: "Learn more",
  },
  {
    id: 2,
    title: "Technology & Innovation",
    subtitle: "AI, IoT & Robotics",
    description:
      "Cutting-edge AI, IoT, and robotics solutions that revolutionize waste management through automation, intelligence, and data-driven insights.",
    icon: (
      <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white lg:text-blue-600" />
    ),
    bgColor: "bg-blue-700 lg:bg-blue-50",
    textColor: "text-white",
    borderColor: "border-blue-400",
    features: [
      {
        title: "Technologies",
        items: [
          "AI & Machine Learning",
          "IoT sensor networks",
          "Robotic automation",
        ],
      },
      {
        title: "Outcomes",
        items: [
          "99% sorting accuracy",
          "85% automation rate",
          "24/7 monitoring",
        ],
      },
    ],
    link: "/technology-solutions",
    cta: "Explore technologies",
  },
];

const SolutionsOverviewSection = () => {
  return (
    <section className="relative mt-10 py-10">
      <Title
        text1="Smart Waste Management"
        text2=" Digital Platforms & Software"
        description=" Comprehensive digital platforms that streamline waste collection,
              segregation, transport, and disposal with real-time tracking and
              verified collectors."
      />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Left: Main Image */}
        <motion.div
          className="w-full sm:w-3/4 md:w-2/5 flex-shrink-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/robot3.png"
            alt="Waste Illustration"
            width={600}
            height={600}
            className="rounded-xl object-cover w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </motion.div>

        {/* Right: Background Image with Modals */}
        <div className="flex-1 relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/tree.png"
              alt="Waste Management Background"
              fill
              className="object-cover w-full h-[600px]"
              priority
            />
            <div className="absolute inset-0"></div> {/* Overlay */}
          </div>

          {/* Cards with Modals */}
          <div className="py-40 flex flex-col items-center justify-end gap-8 relative z-20">
            {solutions.map((sol) => (
              <Modal key={sol.id}>
                <ModalTrigger className="bg-white dark:bg-white dark:text-black text-black flex justify-center p-4 rounded-lg cursor-pointer group/modal-btn">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 sm:w-12 sm:h-16 rounded-xl flex items-center justify-center ${sol.bgColor} transition-colors duration-300`}
                    >
                      {sol.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-xl sm:text-2xl font-bold ${sol.textColor}`}
                      >
                        {sol.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base !text-black ${sol.textColor}`}
                      >
                        {sol.subtitle}
                      </p>
                    </div>
                  </div>
                </ModalTrigger>

                <ModalBody>
                  <ModalContent>
                    {/* Directly render the solution content here */}
                    <div className="flex items-center gap-4 mx-10">
                      <div
                        className={`w-12 h-12 sm:w-12 sm:h-16 rounded-xl flex items-center justify-center ${sol.bgColor} transition-colors duration-300`}
                      >
                        {sol.icon}
                      </div>
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl font-bold ${sol.textColor}`}
                        >
                          {sol.title}
                        </h3>
                        <p
                          className={`text-sm sm:text-base !text-black ${sol.textColor}`}
                        >
                          {sol.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-4">
                      <p className="!text-black">{sol.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {sol.features.map((feature, i) => (
                          <div key={i}>
                            <div className="font-semibold mb-2 !text-black">
                              {feature.title}:
                            </div>
                            <ul className="space-y-1 !text-black italic text-md">
                              {feature.items.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex justify-start items-center font-medium text-sm sm:text-base text-green-300 lg:text-green-600 group-hover:translate-x-2 transition-transform duration-300">
                        {sol.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </ModalContent>
                 
                </ModalBody>
              </Modal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverviewSection;
