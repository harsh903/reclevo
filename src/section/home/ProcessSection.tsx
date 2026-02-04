import React from "react";
import { Search, Settings, Headphones, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ptSerif } from "@/utils/Fonts";

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Understand",
      subtitle: "Step 1",
      description:
        "We start by understanding your specific waste management challenges and requirements through detailed consultation.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Deploy",
      subtitle: "Step 2",
      description:
        "Our digital platform is customized and deployed to meet your needs, with comprehensive onboarding for all stakeholders.",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Support",
      subtitle: "Step 3",
      description:
        "We provide ongoing technical assistance and training to ensure successful adoption across your organization.",
      icon: <Headphones className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Optimize",
      subtitle: "Step 4",
      description:
        "Continuous optimization based on data and feedback to improve efficiency and maximize your return on investment.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-[#0C5E41] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full mb-4">
            How We Work With You
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 ${ptSerif.className}`}>
            Our Partnership Approach
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We don&apos;t just provide software. We work closely with you to ensure
            successful implementation and continuous improvement.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 h-full hover:shadow-lg transition-shadow">
                {/* Step Number & Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#0C5E41] rounded-lg flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <span className={`text-4xl font-bold text-[#e5e7eb] ${ptSerif.className}`}>
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <p className="text-[#0C5E41] font-medium text-sm uppercase tracking-wide mb-2">
                  {step.subtitle}
                </p>
                <h3 className={`text-xl font-bold text-[#1a1a1a] mb-3 ${ptSerif.className}`}>
                  {step.title}
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/smart-waste-solutions">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0C5E41] font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Explore All Solutions <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ borderRadius: '50% 50% 0 0' }} />
    </section>
  );
};

export default ProcessSection;
