import React from "react";
import { Smartphone, BarChart3, Brain, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Digital Asset Tracking",
      subtitle: "Unified Infrastructure",
      description:
        "Single platform for asset tracking, workforce management, and real-time operational visibility across all locations.",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      id: 2,
      title: "Smart Operations",
      subtitle: "Automated Workflows",
      description:
        "Intelligent scheduling, route optimization, and real-time dashboards to maximize efficiency and reduce costs.",
      icon: <BarChart3 className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      id: 3,
      title: "AI Analytics",
      subtitle: "Predictive Insights",
      description:
        "Data-driven decision making with predictive maintenance alerts and compliance monitoring dashboards.",
      icon: <Brain className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    },
  ];

  return (
    <section className="relative bg-[#0C5E41] py-20 lg:py-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-full mb-4 border border-white/20">
            Our Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Complete Asset Management for{" "}
            <span className="block sm:inline">Panchayats & Municipalities</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            End-to-end waste management platform designed for government bodies,
            businesses, and communities across India.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* Step number */}
                  <div className="absolute top-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0C5E41] shadow-lg">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-white">
                      {String(step.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#0C5E41] font-semibold mb-1 text-sm uppercase tracking-wide">
                    {step.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#636363] leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0C5E41]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link href="/services">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0C5E41] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore All Solutions <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
