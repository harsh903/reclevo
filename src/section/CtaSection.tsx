import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ptSerif } from "@/utils/Fonts";

const CtaSection = () => {
  return (
    <section className="relative bg-[#0C5E41] py-20 lg:py-28 overflow-hidden">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ borderRadius: '0 0 50% 50%' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight ${ptSerif.className}`}>
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white mb-10 leading-relaxed">
            Join municipalities and businesses across India using Reclevo
            to streamline waste management and drive sustainability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0C5E41] bg-white rounded-full hover:bg-gray-100 transition-colors">
                Contact Us <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/about">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
