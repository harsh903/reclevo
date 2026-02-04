import { bebasNeue, oswald } from "@/utils/Fonts";

import Image from "next/image";

const MissionAnsVision = () => {
  return (
    <>
      <section className="relative bg-gray-900 h-screen">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0 min-h-[550px] sm:min-h-[550px] lg:min-h-[700px]">
          {" "}
          {/* increased height */}
          <Image
            src="/images/waste8.png"
            alt="Waste Management Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>{" "}
          {/* dark overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-4 !mb-5 sm:px-6 lg:px-8 py-32 sm:py-36 lg:py-40 min-h-[550px] sm:min-h-[550px] lg:min-h-[700px]">
          {/* Title & Description */}
          <div className="!text-white text-center lg:text-right lg:space-y-6 flex  flex-col items-center justify-center">
            <h2
              className={`text-4xl max-w-4xl md:text-7xl font-bold !text-white ${bebasNeue.className}`}
            >
              Your Waste, Our Expertise
            </h2>
            <p
              className={`text-2xl mt-10 md:text-4xl   !text-gray-100 !float-right pt-4  ${oswald.className}`}
            >
              End-to-end waste management solutions, from collection <br />
              to processing, designed for municipalities and businesses.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionAnsVision;
