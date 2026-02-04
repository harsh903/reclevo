"use client"

import { MapPin, QrCode, Clock, CheckCircle } from "lucide-react";
import Title from "@/components/Title";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";

const features = [
  {
    icon: QrCode,
    title: "QR & GPS Tracking",
    description: "Real-time location and status monitoring",
  },
  {
    icon: Clock,
    title: "Automated Alerts",
    description: "Predictive maintenance notifications",
  },
  {
    icon: CheckCircle,
    title: "Compliance Monitoring",
    description: "Regulatory compliance tracking",
  },
  {
    icon: MapPin,
    title: "Complete Visibility",
    description: "End-to-end asset visibility",
  },
];
const keyFeatures = [
  {
    id: 1,
    title: "Unified Digital Infrastructure for Assets & Workforce",
    description:
      "A single mobile app for asset tracking, workforce attendance, and operational transparency.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    title: "Smart Waste Processing & Maintenance Optimization",
    description:
      "Automated scheduling and real-time dashboards to streamline waste collection and reduce costs.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 3,
    title: "AI-Powered Reporting & Predictive Analytics",
    description:
      "Actionable insights with predictive maintenance and compliance monitoring for better decision-making.",
    color: "from-cyan-500 to-blue-600",
  },
];


const AssetLifeCycleSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % 4);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  return (
    <section className="section-padding bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800">
      <div className="container-custom">
        <div className="min-h-screen  relative overflow-hidden">
          <div className="text-center mb-12">
            <Title
              text1="FROM PROCUREMENT TO DISPOSAL"
              text2=" SMARTER ASSET LIFECYCLE"
              text2Color="white"
            />
          </div>

          <motion.div
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.blockquote
              className="text-sm sm:text-md lg:text-xl leading-relaxed italic !mb-0" /* important to override */
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              "Our system digitizes the entire waste asset lifecycle: from
              procurement and installation to maintenance, reassignment, and
              final disposal. With QR &amp; GPS-enabled tracking, automated
              maintenance alerts, and compliance monitoring, municipalities gain
              complete visibility, extended asset life, and reduced operational
              costs."
            </motion.blockquote>
          </motion.div>

          {/* Grid directly below the quote card - no top margin */}
          <div className="grid grid-cols-2 gap-4 mt-0">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:bg-gray-300 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon container */}
                    <div className="!bg-emerald-700 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Text content */}
                    <div className="">
                      <h4 className="font-semibold text-base text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm sm:text-md lg:text-xl text-gray-600 leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mb-12 mt-26">
            <Title
              text1="COMPLETE ASSET LIFECYCLE & WORKFORCE MANAGEMENT FOR"
              text2="  PANCHAYATS AND MUNICIPALITIES"
              text2Color="white"
            />
          </div>
          <div
            className={`space-y-6 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {keyFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`relative p-8 rounded-3xl backdrop-blur-lg transition-all duration-500 cursor-pointer transform hover:scale-98 ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} bg-opacity-30 border-2 border-white border-opacity-30 shadow-2xl`
                    : "bg-white bg-opacity-10 border border-white border-opacity-20 hover:bg-opacity-20"
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center font-bold text-2xl text-white shadow-lg`}
                  >
                    {feature.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-emerald-100 text-sm sm:text-md lg:text-xl leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Animated accent */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                    feature.color
                  } transition-all duration-500 ${
                    activeFeature === index ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetLifeCycleSection;
