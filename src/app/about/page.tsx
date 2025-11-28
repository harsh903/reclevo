"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ptSerif } from "@/utils/Fonts";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import MissionAnsVision from "@/section/about/MissionAnsVision";

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen flex flex-col items-start justify-center px-4 sm:px-6 lg:px-12 pt-20">
        <div className="max-w-6xl">
          <span className="text-[#0C5E41] font-semibold mb-3 sm:mb-4 text-xs sm:text-sm tracking-widest uppercase block">
            About Reclevo
          </span>
          <ScrollReveal
            direction="left"
            distance={50}
            containerClassName="w-full"
            textClassName={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl font-bold text-gray-900 leading-tight ${ptSerif.className}`}
          >
            From Goa&apos;s leading waste management innovator to India&apos;s
            technology-driven sustainability partner
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/aboutUs.jpeg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                <span className="font-bold text-[#0C5E41]">Reclevo Infotech Pvt. Ltd</span> is
                pioneering the digital transformation of waste management in India.
                With over 5 years of hands-on operational experience in Goa, we&apos;ve
                built deep expertise in what works on the ground. Now, we&apos;re combining
                that knowledge with AI, IoT, and robotics to deliver solutions that
                actually solve problems—reducing costs, improving efficiency, and
                helping municipalities meet their sustainability goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionAnsVision />

      {/* Challenges Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal
            direction="left"
            distance={50}
            containerClassName="w-full mb-6 sm:mb-8"
            textClassName={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C5E41] leading-tight ${ptSerif.className}`}
          >
            Turning Challenges into Opportunities
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            distance={50}
            containerClassName="w-full lg:w-4/5 lg:ml-auto"
            textClassName="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            Every challenge in waste management is an opportunity to innovate.
            We combine{" "}
            <span className="font-semibold text-gray-900">
              operational expertise with cutting-edge technology
            </span>{" "}
            to deliver solutions that work—starting from our roots in Goa and
            now scaling across India.
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0C5E41]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight ${ptSerif.className}`}>
            Ready to Transform Your Waste Management?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 sm:mb-10 leading-relaxed">
            Let&apos;s explore how Reclevo can help your municipality or business
            achieve operational efficiency and sustainability goals.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
              Contact Us <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
