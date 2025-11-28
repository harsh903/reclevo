"use client";
import { ptSerif } from "@/utils/Fonts";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center py-24 overflow-hidden md:h-[80vh] h-[88vh] ">
      {/* Hero Content */}

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className={`text-5xl md:text-7xl font-bold !text-black ${ptSerif.className}`}
        >
          Transform Waste into Intelligent Solutions
        </h2>

        <p
          className={`text-xl md:text-2xl font-bold pt-6 !text-[#0C5E41] ${ptSerif.className}`}
        >
          Connect businesses with verified collectors through AI-powered
          solutions for transparent, compliant waste disposal with real-time
          tracking and automated optimization.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
