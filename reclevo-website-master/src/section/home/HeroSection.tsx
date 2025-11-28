import { FlipWords } from "../../components/ui/flip-words";
import { Libre_Baskerville } from "next/font/google";
import { bebasNeue, oswald } from "@/utils/Fonts";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

const Libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
});

const words = [
  "Opportunity",
  "Sustainability",
  "Innovation",
  "Employment",
  "Change",
  "Growth",
  "Empowerment",
];

const HeroSection = () => {
  return (
    <section
      className={`${Libre.className} relative overflow-hidden lg:min-h-[110vh] h-[70vh] flex items-center justify-center w-full`}
    >
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay to darken the video */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="relative z-10 px-6 text-center !text-white !my-auto flex flex-col items-center justify-center w-full lg:max-w-8xl transform !-translate-y-30 sm:-translate-y-16">
        <h1
          className={`text-5xl sm:text-7xl lg:text-[8rem] w-full !mt-40  lg:mt-20 !text-white font-extrabold leading-tight ${bebasNeue.className}`}
        >
          Turning India&apos;s waste into{" "}
          <span className="block overflow-hidden">
            <FlipWords words={words} />
          </span>
        </h1>

        <p
          className={`text-base sm:text-lg lg:text-2xl italic !text-gray-300 ${oswald.className} max-w-4xl`}
        >
          We combine hands-on expertise from Goa&apos;s largest waste management
          company with cutting-edge AI, IoT, and robotics to transform how India
          handles its 160,000 tonnes of daily waste.
        </p>

        {/* Contact Button */}

        <Link href="/contact">
          <button
            className="relative overflow-hidden flex items-center justify-center gap-2 w-[250px] mt-10 
    text-black text-xl font-bold !lg:p-4 py-3 rounded-full cursor-pointer 
    transition-all duration-50 bg-gradient-to-r bg-[#9be367]  hover:bg-[#90c06e] 
    bg-right "
          >
            Contact us <ArrowRight size={20} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
