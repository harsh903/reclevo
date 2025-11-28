import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Iphone } from "../../components/ui/iphone";
import { ptSerif } from "@/utils/Fonts";


const HeroSection = () => {
  return (
    <section className="relative w-full lg:h-[110vh] h-[120vh] overflow-clip  ">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/asset.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional for contrast) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 pt-30 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20 text-white">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-6 text-left">
          <h1 className={`text-4xl md:text-6xl font-bold !text-white  leading-snug ${ptSerif.className}`}>
            Empowering Government Waste Operations with Smart Asset Management
          </h1>

          <p className="text-lg md:text-xl !text-white max-w-lg">
            A digital solution designed to modernize government waste operations
            and support the digitization of municipalities and panchayats.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-white text-black px-5 p-4 rounded-xl flex items-center gap-2">
              <FaApple className="text-2xl" />
              App Store
            </button>
            <button className="bg-white text-black px-5 p-4 rounded-xl flex items-center gap-2">
              <FaGooglePlay className="text-2xl" />
              Play Store
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center !mt-10 !lg:mt-90 lg:ml-20 md:mt-0 w-full lg:mt-20 overflow-clip">
          <Iphone src="https://placehold.co/900x1600?text=Hello+World" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
