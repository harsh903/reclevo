"use client";
import Image from "next/image";
import { ArrowRight, Target, Eye, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ptSerif } from "@/utils/Fonts";
import Link from "next/link";

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-6">
                About Reclevo
              </span>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6 ${ptSerif.className}`}>
                Transforming How
                <span className="text-[#0C5E41]"> India Handles Waste</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#4a4a4a] leading-relaxed">
                Reclevo Infotech Pvt. Ltd. is a technology-driven waste management company
                building smart digital solutions that connect all stakeholders into one seamless ecosystem.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/solution_Overview.jpg"
                  alt="Reclevo operations"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f9fafb]" style={{ borderRadius: '50% 50% 0 0' }} />
      </section>

      {/* Story Section */}
      <section className="relative py-16 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/reclevo1.jpg"
                alt="Reclevo team"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-4">
                Who We Are
              </span>
              <h2 className={`text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6 ${ptSerif.className}`}>
                Technology Meets Waste Management
              </h2>
              <p className="text-[#4a4a4a] leading-relaxed mb-6">
                We build smart digital solutions that connect governments, businesses,
                waste collectors, and processing facilities into one seamless ecosystem.
                Our platform creates complete visibility from waste generation to final disposal.
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                By combining technology with deep domain expertise, we&apos;re transforming
                how India handles waste, making it traceable, accountable, and sustainable.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ borderRadius: '50% 50% 0 0' }} />
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f9fafb] rounded-xl p-8 border border-[#e5e7eb]"
            >
              <div className="w-12 h-12 bg-[#0C5E41] rounded-lg flex items-center justify-center text-white mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold text-[#1a1a1a] mb-4 ${ptSerif.className}`}>
                Our Mission
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                Transform waste into a resource using technology, partnerships,
                and a vision for a circular economy. We connect all stakeholders
                to create transparency and accountability in waste management.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f9fafb] rounded-xl p-8 border border-[#e5e7eb]"
            >
              <div className="w-12 h-12 bg-[#0C5E41] rounded-lg flex items-center justify-center text-white mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold text-[#1a1a1a] mb-4 ${ptSerif.className}`}>
                Our Vision
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                A cleaner India where every waste journey is tracked, every
                disposal is responsible, and every city has access to smart
                waste management technology that actually works.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f9fafb]" style={{ borderRadius: '50% 50% 0 0' }} />
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-4">
              Why Reclevo
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4 ${ptSerif.className}`}>
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Ground-Level Experience",
                description: "5+ years of hands-on waste management operations across Goa."
              },
              {
                title: "Technology-First",
                description: "AI, IoT, and analytics solutions designed for real-world impact."
              },
              {
                title: "Partnership Focus",
                description: "Collaborative approach that prioritizes your success."
              },
              {
                title: "Scalable Solutions",
                description: "Flexible platforms that grow with your requirements."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-[#e5e7eb]"
              >
                <CheckCircle className="w-8 h-8 text-[#0C5E41] mb-4" />
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0C5E41]" style={{ borderRadius: '50% 50% 0 0' }} />
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-[#0C5E41] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight ${ptSerif.className}`}>
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Let&apos;s explore how Reclevo can help your municipality or business
              achieve operational efficiency and sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0C5E41] bg-white rounded-full hover:bg-gray-100 transition-colors">
                  Get in Touch <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/smart-waste-solutions">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-colors">
                  View Solutions
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
