"use client";

import { ptSerif } from "@/utils/Fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center w-full overflow-hidden">
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mov" type="video/mp4" />
      </video>

      {/* White Gradient Overlay - Top to Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40" />

      {/* Additional subtle overlay for text readability */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C5E41]/10 backdrop-blur-sm rounded-full mb-8 border border-[#0C5E41]/20">
            <span className="w-2 h-2 bg-[#0C5E41] rounded-full animate-pulse"></span>
            <span className="text-[#1a1a1a] text-sm font-medium">
              Technology-Driven Waste Management
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] font-bold leading-tight mb-6 ${ptSerif.className}`}
          >
            Transforming Waste
            <span className="block text-[#0C5E41]">Into a Resource</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto mb-10 leading-relaxed">
            Smart digital solutions connecting governments, businesses, waste collectors,
            and processing facilities into one seamless ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#0C5E41] rounded-full hover:bg-[#0a4f36] transition-colors shadow-lg">
                Get Started <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/smart-waste-solutions">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0C5E41] border-2 border-[#0C5E41] rounded-full hover:bg-[#0C5E41]/10 transition-colors">
                Explore Solutions
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#0C5E41]/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#0C5E41]/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
