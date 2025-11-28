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
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Electronics Recycling",
    description: "Electronics recycling is reprocessing old electronics",
    icon: <Smartphone className="w-8 h-8 text-green-700" />,
  },
  {
    id: 2,
    title: "Glass Recycling",
    description: "Glass recycling is reusing waste glass into new products",
    icon: <GlassWater className="w-8 h-8 text-green-700" />,
  },
  {
    id: 3,
    title: "E-Waste Recycling",
    description:
      "E-waste recycling is recovering materials from discarded electronic",
    icon: <Monitor className="w-8 h-8 text-green-700" />,
  },
  {
    id: 4,
    title: "Food Waste Recycling",
    description: "Food recycling converts food waste into useful resources",
    icon: <Utensils className="w-8 h-8 text-green-700" />,
  },
];

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
          <div>
            <p className="text-sm text-yellow-600 font-semibold mb-2">
              WHAT WE DO
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-green-900 leading-tight">
              Recycling <span className="text-yellow-500">Service</span> for
              Governments, Businesses & Communities
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <p className="text-gray-600 max-w-md mb-4 text-sm sm:text-md lg:text-xl">
              Comprehensive technology-driven solutions for every aspect of
              waste management, from smart collection to sustainable processing
            </p>
            <Link
              href="/services"
              className="text-green-700 font-semibold flex items-center gap-2 hover:text-yellow-500 transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Background Image */}
        <div className="relative h-84 sm:h-90 md:h-full w-full mb-16 rounded-3xl overflow-hidden">
          <Image
            src="/images/women2.png"
            alt="Recycling Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Services Grid overlapping the image */}
        <motion.div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-40 lg:-mt-54 p-6 sm:p-8 pb-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="border rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all bg-white relative z-10"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-xs md:text-xs lg:text-xs text-gray-500 mb-3 sm:mb-4">
                {service.description}
              </p>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
