import Link from "next/link";
import {
  ArrowRight
  
} from "lucide-react";


const CtaSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen bg-[#0C5E41] text-center px-6 border-t-2 border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold !text-white mb-4 leading-tight">
            JOIN THE WASTE INTELLIGENCE REVOLUTION
          </h2>
          <p className="!text-gray-300 font-semibold md:text-lg mb-10">
            Transform environmental compliance into strategic advantage with the
            most advanced waste management platform
          </p>
          <Link href="/contact">
            <button className="flex items-center justify-center gap-2 w-[250px] mx-auto mt-10 bg-[#ffffff] text-black  text-xl font-bold !p-6 py-3 rounded-full transition-all hover:bg-[#0C5E41] hover:border-2 hover:text-white hover:border-white  cursor-pointer">
              Contact us <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
