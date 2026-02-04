import { ptSerif } from "@/utils/Fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Iphone } from "@/components/ui/iphone";

const AssetCtaSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0C5E41] relative overflow-hidden">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ borderRadius: '0 0 50% 50%' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - iPhone Mockup */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <Iphone src="https://placehold.co/900x1600/ffffff/0C5E41?text=Track+Assets" />
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 ${ptSerif.className}`}
            >
              Ready to Modernize Your Asset Management?
            </h2>

            <p className="text-lg text-white/80 mb-10 max-w-2xl leading-relaxed">
              Join municipalities across India who are using Reclevo to digitize
              their waste operations and improve efficiency.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0C5E41] bg-white rounded-full hover:bg-gray-100 transition-colors">
                  Schedule a Demo <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/smart-waste-solutions">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-colors">
                  Explore Solutions
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetCtaSection;
