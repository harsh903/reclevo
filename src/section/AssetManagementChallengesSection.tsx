"use client"
import {
  TrendingDown,
  Eye,
  Settings,
  Shield,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Title from "@/components/Title";
import { motion } from "framer-motion";

const challenges = [
  {
    id: 1,
    title: "Inefficient Asset Tracking",
    description: "Paper-based systems prone to errors and information loss",
    icon: TrendingDown,
    color: "bg-emerald-600",
    details: [
      "Manual data entry increases error rates by 40%",
      "Lost paperwork causes tracking delays",
      "Difficulty in asset location identification",
      "Time-consuming audit processes",
    ],
  },
  {
    id: 2,
    title: "Limited Visibility",
    description:
      "No centralized monitoring of asset conditions and utilization",
    icon: Eye,
    color: "bg-emerald-600",
    details: [
      "Assets operating beyond optimal capacity",
      "Hidden maintenance requirements",
      "Underutilized resources costing money",
      "No real-time status monitoring",
    ],
  },
  {
    id: 3,
    title: "Reactive Maintenance",
    description: "Crisis-driven repairs rather than preventive approaches",
    icon: Settings,
    color: "bg-emerald-600",
    details: [
      "Emergency repairs cost 3x more than planned maintenance",
      "Unexpected equipment downtime",
      "Shortened asset lifespan",
      "Budget unpredictability",
    ],
  },
  {
    id: 4,
    title: "Compliance & Budget Issues",
    description:
      "Struggles with regulatory documentation and data-driven planning",
    icon: Shield,
    color: "bg-emerald-600",
    details: [
      "Regulatory compliance gaps",
      "Insufficient documentation trails",
      "Budget overruns due to poor planning",
      "Lack of data-driven decision making",
    ],
  },
];

const AssetManagementChallengesSection = () => {
    const [activeChallenge, setActiveChallenge] = useState<number | null>(null);
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Title
                text2="WASTE MANAGEMENT ASSET SYSTEM"
                description="A digital solution designed to modernize government waste operations and support the digitization of municipalities and panchayats."
              />
            </motion.div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Challenges List */}
          <div className="flex flex-col h-full space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Key challenges facing municipalities
            </h2>

            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              const isActive = activeChallenge === index;

              return (
                <div
                  key={challenge.id}
                  onClick={() => setActiveChallenge(isActive ? null : index)}
                  className={`group cursor-pointer transition-all duration-300 ${
                    isActive ? "scale-105" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`rounded-2xl p-6 border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-white shadow-2xl border-emerald-200 ring-4 ring-emerald-100"
                        : "bg-white/80 shadow-lg border-gray-100 hover:shadow-xl hover:border-emerald-100"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-14 h-14 ${
                          challenge.color
                        } rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 ${
                          isActive ? "scale-110" : "group-hover:scale-105"
                        }`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-md font-bold text-gray-900 mb-2">
                          {challenge.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-md lg:text-xl leading-relaxed">
                          {challenge.description}
                        </p>

                        {isActive && (
                          <div className="mt-4 space-y-2 animate-fade-in">
                            {challenge.details.map((detail, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-sm text-gray-500"
                              >
                                <ChevronRight className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Hero Image (same height as left) */}
          <div className="flex h-full">
            <div className="flex-1 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <div className="text-white text-4xl font-bold">AM</div>
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">
                  Municipal Asset Management
                </h3>
                <p className="text-emerald-700">
                  Transforming how cities manage their infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetManagementChallengesSection;
