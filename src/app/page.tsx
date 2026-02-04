"use client";
import ProcessSection from "@/section/home/ProcessSection";
import HeroSection from "@/section/home/HeroSection";
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Shield } from "lucide-react";
import { ptSerif } from "@/utils/Fonts";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* What We Do - Quick Overview */}
      <section className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-4">
              Our Products
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 ${ptSerif.className}`}>
              Smart Digital Solutions for Waste Management
            </h2>
            <p className="text-lg text-[#4a4a4a] max-w-3xl mx-auto">
              We build technology that connects all stakeholders - governments, businesses,
              collectors, and processing facilities - into one seamless platform.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Complete Visibility",
                description: "Know exactly where your waste goes from pickup to final disposal with real-time tracking."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Easy Compliance",
                description: "We handle regulatory documentation automatically so you can focus on operations."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Transparent Pricing",
                description: "No hidden costs. Negotiate rates directly with verified collectors on our platform."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "One Platform",
                description: "All stakeholders connected, all information in one place for seamless coordination."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f9fafb] p-6 rounded-xl border border-[#e5e7eb] hover:border-[#0C5E41] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#0C5E41] rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">{service.title}</h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f9fafb]" style={{ borderRadius: '50% 50% 0 0' }} />
      </section>

      {/* The Problem We Solve Section */}
      <section className="relative py-16 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-4">
                The Problem We Solve
              </span>
              <h2 className={`text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight ${ptSerif.className}`}>
                India&apos;s Waste Management Is Fragmented
              </h2>
              <p className="text-lg text-[#4a4a4a] mb-8 leading-relaxed">
                The current system lacks visibility, accountability, and coordination.
                This leads to illegal dumping, underutilized facilities, and difficulty
                meeting environmental regulations.
              </p>

              {/* Problem Points */}
              <div className="space-y-4">
                {[
                  "Fragmented communication between waste generators and collectors",
                  "No real-time visibility into waste collection and disposal",
                  "Complex regulatory compliance requirements",
                  "Illegal dumping due to lack of tracking and accountability",
                  "Underutilized waste processing facilities",
                  "Manual, paper-based systems prone to errors"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0C5E41] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-[#4a4a4a]">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image/Stats */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
                <Image
                  src="/images/waste6.jpg"
                  alt="Waste management challenge"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e5e7eb]">
                <h3 className={`text-2xl font-bold text-[#1a1a1a] mb-6 ${ptSerif.className}`}>
                  Our Mission
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  Transform waste into a resource using technology, partnerships,
                  and a vision for a circular economy. We connect all stakeholders
                  to create complete visibility from pickup to responsible disposal.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0C5E41]" style={{ borderRadius: '50% 50% 0 0' }} />
      </section>

      {/* Our Solution / Process Section */}
      <ProcessSection />

      {/* Why Choose Us */}
      <section className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image/Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/aboutUs.jpeg"
                  alt="Reclevo team at work"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-4">
                Why Choose Reclevo
              </span>
              <h2 className={`text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight ${ptSerif.className}`}>
                Technology + Partnerships for Real Impact
              </h2>
              <p className="text-lg text-[#4a4a4a] mb-8 leading-relaxed">
                We don&apos;t just provide software. We work closely with you to understand
                your challenges, deploy customized solutions, and provide ongoing support
                for continuous optimization.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  "Complete visibility from pickup to final disposal",
                  "Easy compliance - we handle regulatory documentation",
                  "Transparent pricing with no hidden costs",
                  "Responsible disposal tracked to authorized facilities only",
                  "Data you can use - reports and insights at your fingertips"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0C5E41] flex-shrink-0" />
                    <span className="text-[#4a4a4a]">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <button className="inline-flex items-center gap-2 text-[#0C5E41] font-semibold hover:underline">
                    Learn More About Us <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
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
              Ready to Transform Your Operations?
            </h2>

            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Join municipalities and businesses across India who have modernized
              their waste management with Reclevo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0C5E41] bg-white rounded-full hover:bg-gray-100 transition-colors">
                  Schedule a Demo <ArrowRight size={18} />
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
