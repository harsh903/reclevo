
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Iphone } from "../../components/ui/iphone";
import { ptSerif } from "@/utils/Fonts";

const AssetCtaSection = () => {
  return (
    <section className="relative w-full h-fit overflow-hidden  pb-30">
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20 text-white">
        {/* Left Side */}

        {/* Right Side */}
        <div className="flex-1 flex justify-center mb-10 items-center overflow-clip mt-10 lg:ml-20 md:mt-0 w-[300px] lg:mt-10">
          <Iphone src="https://placehold.co/900x1600?text=Hello+World" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start space-y-6 text-left">
          <h1
            className={`text-4xl md:text-6xl font-bold !text-[#0C5E41] leading-tight ${ptSerif.className}`}
          >
            JOIN THE WASTE INTELLIGENCE REVOLUTION{" "}
          </h1>

          <p className="mt-4 !text-[#000000] dark:text-neutral-300 text-lg md:text-xl !font-semibold leading-relaxed">
            It's easy. Download Cool Asset Mnagement App for free from Google
            Play or App Store. Signup using a few simple steps
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="!bg-[#9be367] text-black px-5 p-4 rounded-xl flex items-center gap-2">
              <FaApple className="text-2xl" />
              App Store
            </button>
            <button className="!bg-[#9be367] text-black px-5 p-4 rounded-xl flex items-center gap-2">
              <FaGooglePlay className="text-2xl" />
              Play Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetCtaSection;
