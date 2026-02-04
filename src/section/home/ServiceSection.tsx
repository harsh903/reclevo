import React from "react";
import {
  Smartphone,
  Monitor,
  GlassWater,
  Utensils,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ptSerif } from "@/utils/Fonts";

const services = [
  {
    id: 1,
    title: "Electronics Recycling",
    description: "Professional processing and recycling of electronic devices and components.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Glass Recycling",
    description: "Converting waste glass into reusable materials for manufacturing.",
    icon: <GlassWater className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "E-Waste Recycling",
    description: "Safe recovery of valuable materials from discarded electronics.",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Food Waste Recycling",
    description: "Converting organic waste into compost and renewable energy.",
    icon: <Utensils className="w-6 h-6" />,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4 ${ptSerif.className}`}>
            Recycling Services for All Sectors
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Comprehensive solutions for governments, businesses, and communities
            to manage waste responsibly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl p-6 border border-[#e5e7eb] hover:border-[#0C5E41] hover:shadow-lg transition-all"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-[#0C5E41] rounded-lg flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#4a4a4a] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link href="/smart-waste-solutions">
            <button className="inline-flex items-center gap-2 text-[#0C5E41] font-semibold hover:underline">
              View All Solutions <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
