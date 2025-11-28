"use client";

import { ptSerif } from "@/utils/Fonts";
import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";

const TransformOperationsSection = () => {
  const features = [
    "One-click waste collection scheduling",
    "ESG reporting and sustainability metrics",
    "Automated compliance documentation",
    "Real-time waste journey tracking",
    "Cost optimization through smart routing",
    "Verified collector network access",
  ];

  return (
    <section className="w-full bg-[#0C5E41] !h-full py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 !gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3
              className={`text-4xl md:text-6xl font-bold !text-[#ffffff] mb-6 ${ptSerif.className}`}
            >
              SIMPLIFIED WASTE MANAGEMENT
            </h3>
            <p
              className={`text-xl mb-14 !text-white  leading-relaxed opacity-90 ${ptSerif.className} `}
            >
              Transform your waste operations with intelligent scheduling,
              transparent tracking, and automated compliance reporting.
            </p>

            {/* Bulleted List */}
            <ul className="list-disc pl-8 space-y-6 !text-white text-lg">
              {features.map((feature, idx) => (
                <li key={idx} className="leading-relaxed">
                  <ScrollReveal
                    direction="left"
                    distance={200}
                    containerClassName="w-full"
                    textClassName={`text-md md:text-md !text-white `}
                  >
                    {feature}
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden  ">
            <Image
              src="/images/DSC_3531.JPG"
              alt="Smart Collection"
              className="w-full h-[700px] object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformOperationsSection;
