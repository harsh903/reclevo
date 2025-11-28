"use client";
import ProcessSection from "@/section/home/ProcessSection";
import HeroSection from "@/section/home/HeroSection";
import { ArrowRight } from "lucide-react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import ScrollReveal from "../components/ScrollReveal";
import { ptSerif } from "@/utils/Fonts";
import Link from "next/link";

const content = [
  {
    title: "Unverified Stakeholders",
    description: `Waste management across India often relies on unregistered collectors and unauthorized transporters. This creates unsafe disposal practices, illegal waste trafficking, and serious environmental hazards that affect communities.`,
    image: "/images/unverified.jpg",
  },
  {
    title: "Operational Inefficiencies",
    description: `Most waste infrastructure operates well below capacity due to poor coordination and outdated systems. Missed collections, underutilized facilities, and manual processes lead to higher costs and citizen frustration.`,
  },
  {
    title: "Compliance & Sustainability Gaps",
    description: `Meeting environmental regulations remains a struggle for many municipalities. Without proper tracking and reporting, illegal dumping continues while sustainability goals stay out of reach.`,
    image: "/linear.webp",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 leading-relaxed">
                We help cities and organizations transform waste into measurable value through smart, data-driven solutions.
              </p>
            </div>
            <div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <span className="text-[#0C5E41] font-bold">Reclevo</span> combines
                <span className="text-[#0C5E41] font-bold"> &quot;Recycle&quot; </span>
                and <span className="text-[#0C5E41] font-bold">&quot;Revolution&quot;</span> —
                representing our mission to modernize waste management across India.
                We turn operational challenges into sustainable opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/asset.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col h-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen justify-center px-4 sm:px-6 lg:px-12 py-12">
          <div className="max-w-4xl">
            <ScrollReveal
              direction="left"
              distance={50}
              containerClassName="w-full"
              textClassName={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight ${ptSerif.className}`}
            >
              India&apos;s Waste Crisis Demands Smart Solutions
            </ScrollReveal>

            <div className="mt-6 sm:mt-8">
              <ScrollReveal
                direction="right"
                distance={50}
                containerClassName="w-full"
                textClassName="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed"
              >
                The consequences are clear: overflowing landfills, public health risks,
                rising costs, and regulatory penalties. It&apos;s time for change.
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <StickyScroll content={content} />

      {/* Solutions Overview */}
      <ProcessSection />

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-28 bg-[#0C5E41]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight ${ptSerif.className}`}>
            Ready to Modernize Your Waste Operations?
          </h2>

          <p className="text-base sm:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join municipalities and businesses across India who trust Reclevo
            to streamline operations, reduce costs, and achieve compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0C5E41] bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/services">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300">
                View Solutions
              </button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
