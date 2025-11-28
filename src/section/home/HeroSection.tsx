"use client";

import { FlipWords } from "../../components/ui/flip-words";
import { ptSerif } from "@/utils/Fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const words = [
  "Opportunity",
  "Sustainability",
  "Innovation",
  "Value",
  "Impact",
];

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight ${ptSerif.className}`}
          >
            Transforming India&apos;s Waste Into{" "}
            <span className="block mt-2">
              <FlipWords words={words} />
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed px-4">
            Smart waste management solutions powered by AI, IoT, and robotics.
            Empowering municipalities and businesses across India with technology that delivers results.
          </p>

          <div className="mt-8 sm:mt-10">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-[#0C5E41] rounded-full hover:bg-[#0a4f36] transition-all duration-300 hover:shadow-lg border border-white/20">
                Get Started <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
