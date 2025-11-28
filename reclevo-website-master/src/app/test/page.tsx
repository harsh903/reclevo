'use client';

import HeroSection from "@/section/home/HeroSection";
import { NumberTicker } from "@/components/ui/number-ticker";
import { FaTrashAlt, FaMedal, FaCogs } from 'react-icons/fa';

const statsData = [
  {
    icon: <FaTrashAlt className="text-4xl text-[#3a5a40] mb-2" />,
    stat: "160,000",
    description: "Tonnes of waste generated daily in India",
  },
  {
    icon: <FaMedal className="text-4xl text-[#3a5a40] mb-2" />,
    stat: "Goa Leader",
    description: "Largest waste management innovator",
  },
  {
    icon: <FaCogs className="text-4xl text-[#3a5a40] mb-2" />,
    stat: "AI + IoT",
    description: "Technology-driven solutions",
  },
];

export default function TestPage() {
  return (
    <div>
      <HeroSection />
      <section className="p-8 sm:p-12 rounded-b-4xl !bg-[#101310]">
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-18">
          <div className=" p-8 rounded-lg lg:w-1/3 flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-10">
              {statsData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-4 bg-[#e9e5e1] p-3 rounded-3xl"
                >
                  <span className="text-4xl !text-[#8fc54d] mb-2">
                    {item.icon}
                  </span>
                  <h3
                    className={`text-3xl sm:text-4xl font-extrabold !text-[#3a5a40] mb-1 mt-2 }`}
                  >
                    {item.stat}
                  </h3>
                  <p className={`text-sm font-medium max-w-xs text-[#3a5a40]`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12">
              <div className="md:max-w-md max-w-xl flex flex-col items-center">
                <div className="flex items-baseline justify-center mr-8">
                  <NumberTicker
                    value={99.2}
                    decimalPlaces={1}
                    className="md:text-8xl text-7xl font-medium tracking-tighter !text-white dark:text-white"
                  />
                  <span className="md:text-8xl text-7xl  font-medium tracking-tighter !text-white dark:text-white">
                    %
                  </span>
                </div>
                <p className="!text-[#8fc54d] !md:text-xl mt-2">
                  AI Accuracy – In waste classification
                </p>
              </div>
              <div className="md:max-w-md max-w-xl">
                                  <NumberTicker
                                    value={24}
                                    className="md:text-8xl text-7xl font-medium tracking-tighter text-white dark:text-white"
                                  />
                                  <span className="md:text-8xl text-7xl font-medium tracking-tighter text-white dark:text-white">
                                    /7
                                  </span>                <p className="!text-[#8fc54d]  !md:text-xl">
                  IoT Monitoring-Real-time data collection
                </p>
              </div>
              <div className="md:max-w-md max-w-xl">
                                  <NumberTicker
                                    value={75}
                                    className="md:text-8xl text-7xl font-medium tracking-tighter text-white dark:text-white"
                                  />
                                  <span className="md:text-8xl text-7xl font-medium tracking-tighter text-white  dark:text-white">
                                    %
                                  </span>
                <p className="!text-[#8fc54d]  !md:text-xl">
                  Segregation Improvement-Better waste sorting
                </p>
              </div>{" "}
              <div className="md:max-w-md max-w-xl">
                                  <NumberTicker
                                    value={40}
                                    className="md:text-8xl text-7xl font-medium tracking-tighter text-white dark:text-white"
                                  />
                                  <span className="md:text-8xl text-7xl font-medium tracking-tighter text-white  dark:text-white">
                                    %
                                  </span>
                <p className="!text-[#8fc54d]  !md:text-xl">
                  Cost Reduction In collection operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
