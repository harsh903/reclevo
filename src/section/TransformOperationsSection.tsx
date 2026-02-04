"use client";

import { ptSerif } from "@/utils/Fonts";
import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";

const TransformOperationsSection = () => {
  const features = [
    "Book waste pickup in one click",
    "Choose from verified collectors with transparent pricing",
    "Track your waste journey from pickup to responsible disposal",
    "Get automated compliance certificates",
    "Access your complete waste disposal history anytime",
    "Digital payments and instant invoicing",
  ];

  return (
    <section className="relative w-full bg-[#0C5E41] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full mb-4">
              For Businesses
            </span>
            <h3
              className={`text-4xl md:text-5xl font-bold text-white mb-6 ${ptSerif.className}`}
            >
              Waste Disposal Made Simple
            </h3>
            <p className="text-lg mb-10 text-white/80 leading-relaxed">
              Need waste disposal? Book a pickup, choose your collector,
              and track everything from your dashboard.
            </p>

            {/* Bulleted List */}
            <ul className="list-disc pl-6 space-y-4 text-white text-base">
              {features.map((feature, idx) => (
                <li key={idx} className="leading-relaxed">
                  <ScrollReveal
                    direction="left"
                    distance={200}
                    containerClassName="w-full"
                    textClassName="text-base text-white"
                  >
                    {feature}
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/waste-sorting.jpg"
              alt="Smart Collection"
              className="w-full h-[600px] object-cover"
              width={600}
              height={700}
            />
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ borderRadius: '50% 50% 0 0' }} />
    </section>
  );
};

export default TransformOperationsSection;
