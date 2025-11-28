import React from "react";
import { Recycle, Truck, Package} from "lucide-react";

import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Unified Digital Infrastructure for Assets & Workforce",
      description:
        "A single mobile app for asset tracking, workforce attendance, and operational transparency.",
      icon: <Recycle className="w-8 h-8 text-green-700" />,
    },
    {
      id: 2,
      title: "Smart Waste Processing & Maintenance Optimization",
      description:
        "Automated scheduling and real-time dashboards to streamline waste collection and reduce costs.",
      icon: <Truck className="w-8 h-8 text-green-700" />,
    },
    {
      id: 3,
      title: "AI-Powered Reporting & Predictive Analytics",
      description:
        "Actionable insights with predictive maintenance and compliance monitoring for better decision-making",
      icon: <Package className="w-8 h-8 text-green-700" />,
    },
  ];

  return (
    <section className=" !bg-[#101310] md:py-20 pb-10 md:pb-1 !h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 !text-white">
        {/* Dark overlay */}
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-['Open_Sans'] w-full   p-6 rounded-lg"
        >
          <p className="text-xs sm:text-sm text-yellow-600 font-semibold mb-2">
            Our solution
          </p>
          <h2 className="sm:text-3xl lg:text-6xl !text-gray-300  text-4xl md:text-6xl font-serif font-bold  mb-4 leading-tight ">
            Complete Asset Management for{" "}
            <span className="!text-gray-300">
              Panchayats and Municipalities
            </span>
          </h2>
          <p className="font-[Inter] text-sm sm:text-md lg:text-lg !text-gray-200 mb-6">
            A recycling project can be processed step by step, whether for a
            school, business, or community.
          </p>
        </motion.div>
        {/* Right Side - Steps */}
        <div className="flex flex-col space-y-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex items-start gap-6"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center relative border-b-2 shadow-md hover:scale-110 transition-transform duration-300">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold">
                    {step.id}.
                  </span>
                </div>
                {step.id !== steps.length && (
                  <div className="w-px !bg-[#3a5a40] flex-1 mt-2"></div>
                )}
              </div>
              <div>
                <h3 className="text-md sm:text-xl lg:text-2xl font-semibold !text-gray-300 font-['Open_Sans']">
                  {step.title}
                </h3>
                <p className="!text-gray-300  font-[Inter] text-sm sm:text-md lg:text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
