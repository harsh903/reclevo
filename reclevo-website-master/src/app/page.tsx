"use client";
import ProcessSection from "@/section/home/ProcessSection";
import Testimonials from "@/section/TestimonialSection";
import HeroSection from "@/section/home/HeroSection";
import { ArrowRight } from "lucide-react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
import { Building2, Landmark, Users } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { ptSerif } from "@/utils/Fonts";
import Link from "next/link";
import { NumberTicker } from "../components/ui/number-ticker";
import { FaTrashAlt, FaMedal, FaCogs } from 'react-icons/fa'; // Icons from react-icons


const content = [
  {
    title: "Unverified Stakeholders",
    description: `Many waste management operations are handled by unregistered and unauthorized individuals or organizations. 
This lack of verification leads to unsafe practices, illegal waste transportation, and increased risk of environmental hazards. 
Communities often face the consequences of unmonitored waste movement, including contamination, odor issues, and non-compliance with local regulations. 
Addressing this challenge requires robust stakeholder verification systems and better oversight mechanisms.`,
    image: "/images/unverified.jpg", // 🖼️ Add your image path here
  },
  {
    title: "Operational Inefficiencies",
    description: `The current waste and sewage management infrastructure often suffers from severe inefficiencies. 
Many facilities remain underutilized due to poor planning, limited accessibility, or lack of coordination among stakeholders. 
This results in delays, higher operational costs, and unprocessed waste accumulating in critical areas. 
Efficient resource allocation, optimized facility management, and streamlined logistics are necessary to overcome these inefficiencies and ensure timely waste treatment.`,
   
  },
  {
    title: "Compliance & Sustainability Hurdles",
    description: `Ensuring compliance with environmental regulations and maintaining sustainable waste practices is a significant challenge. 
Illegal dumping, improper discharge of solid and liquid waste, and disregard for environmental guidelines are common hurdles. 
Such practices not only threaten public health and ecosystems but also undermine efforts towards sustainability. 
Overcoming these hurdles requires strict monitoring, public awareness campaigns, and incentives for compliant behavior.`,
    image: "/linear.webp", // ✅ The image you had inside your <Image /> JSX
  },
];

const statsData = [
  {
    icon: <FaTrashAlt className="text-4xl text-[#0C5E41] mb-2" />,
    stat: "160,000",
    description: "Tonnes of waste generated daily in India",
  },
  {
    icon: <FaMedal className="text-4xl text-[#0C5E41] mb-2" />,
    stat: "Goa Leader",
    description: "Largest waste management innovator",
  },
  {
    icon: <FaCogs className="text-4xl text-[#0C5E41] mb-2" />,
    stat: "AI + IoT",
    description: "Technology-driven solutions",
  },
];


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      <section className="p-8 sm:p-12 rounded-b-4xl !bg-[#101310]">
        {/* Outer container to manage the two-column layout (stacks vertically on mobile) */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-18">
          {/* 1. LEFT COLUMN: THREE KEY STATS (Simulating the original screenshot)
          Applying a light background here to mimic the screenshot's color
        */}
          <div className=" p-8 rounded-lg lg:w-1/3 flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-10">
              {statsData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-4 bg-white p-3 rounded-3xl"
                >
                  <span className="text-4xl !text-[#0C5E41] mb-2">
                    {item.icon}
                  </span>

                  {/* Statistic/Main Text */}
                  <h3
                    className={`text-3xl sm:text-4xl font-extrabold !text-[#0C5E41] mb-1 mt-2 }`}
                  >
                    {item.stat}
                  </h3>

                  {/* Description/Subtitle */}
                  <p className={`text-sm font-medium max-w-xs text-[#0C5E41]`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. RIGHT COLUMN: FOUR NUMBER TICKERS (Horizontal Stats)
          This content is styled for a dark background (white numbers, green description).
        */}
          <div className="lg:w-2/3 flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12">
              <div className="md:max-w-md max-w-xl flex flex-col items-center">
                <div className="flex items-baseline justify-center mr-8">
                  <NumberTicker
                    value={99.2}
                    decimalPlaces={1}
                    className="md:text-7xl text-7xl font-medium tracking-tighter !text-white dark:text-white"
                  />
                  <span className="md:text-7xl text-7xl  font-medium tracking-tighter !text-white dark:text-white">
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
                  className="md:text-7xl text-7xl font-medium tracking-tighter text-white dark:text-white"
                />
                <span className="md:text-7xl text-7xl font-medium tracking-tighter text-white dark:text-white">
                  /7
                </span>{" "}
                <p className="!text-[#8fc54d]  !md:text-xl">
                  IoT Monitoring-Real-time data collection
                </p>
              </div>
              <div className="md:max-w-md max-w-xl">
                <NumberTicker
                  value={75}
                  className="md:text-7xl text-7xl font-medium tracking-tighter text-white dark:text-white"
                />
                <span className="md:text-7xl text-7xl font-medium tracking-tighter text-white  dark:text-white">
                  %
                </span>
                <p className="!text-[#8fc54d]  !md:text-xl">
                  Segregation Improvement-Better waste sorting
                </p>
              </div>{" "}
              <div className="md:max-w-md max-w-xl">
                <NumberTicker
                  value={40}
                  className="md:text-7xl text-7xl font-medium tracking-tighter text-white dark:text-white"
                />
                <span className="md:text-7xl text-7xl font-medium tracking-tighter text-white  dark:text-white">
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
      <section className="relative h-screen ">
        <div className="flex items-center justify-between h-[400px]  w-1/2 ml-10 mt-10">
          <div className="h-[400px] w-1/2  ml-8 absolute right-8 bottom-1.5">
            <p className="md:text-5xl text-xl font-bold mb-10  p-4 !text-black ">
              Reclevo blends
              <span className="pr-4 pl-4 text-[#0C5E41]">“Recycle”</span>
              and <span className="pr-4 text-[#0C5E41]">“Revolution”</span>
              symbolizing a modern movement for sustainability and circular
              innovation.Transforming waste and potential into renewed purpose.
            </p>
          </div>
          <p className="!lg:text-5xl font-bold !text-3xl   p-4 !text-black ">
            Empowering cities and organizations to turn waste into opportunity
            with smart, sustainable solutions.
          </p>
        </div>
      </section>

      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/asset.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Optional dark overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Content over video */}
        <div className="relative z-10 flex flex-col h-full justify-center px-4 lg:px-18 gap-8 lg:gap-20">
          <ScrollReveal
            direction="left"
            distance={100}
            containerClassName="w-full"
            textClassName={`text-4xl md:text-6xl font-bold !text-white max-w-3xl ${ptSerif.className}`}
          >
            The Waste Management Crisis Plaguing Our Cities
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            distance={100}
            containerClassName="w-4/5"
            textClassName={`text-2xl md:text-4xl font-bold text-gray-600 !text-white ${ptSerif.className}`}
          >
            What is the impact? Unhygienic conditions, citizen dissatisfaction,
            increased operational costs, and environmental violations.
          </ScrollReveal>
        </div>
      </section>

      <StickyScroll content={content} />

      {/* Solutions Overview */}
      <ProcessSection />
      <section className="relative h-[120vh] text-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className={`text-4xl md:text-6xl font-bold !text-[#0C5E41] ${ptSerif.className}`}
          >
            Working Hand-in-Hand for a Cleaner India
          </h2>
          <p className=" max-w-3xl mx-auto mb-16 text-2xl !text-[#0C5E41]">
            By engaging governments, businesses, and communities, we ensure that
            our solutions are practical, inclusive, and sustainable.
          </p>

          {/* Circular Ecosystem */}
          <div className="relative flex items-center justify-center mt-60">
            {/* Decorative Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] rounded-full bg-green-500/10 blur-3xl" />
            </div>

            {/* Center Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative z-10 w-40 h-40 rounded-full bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center text-2xl font-bold shadow-[0_0_30px_rgba(34,197,94,0.4)]"
            >
              Reclevo
            </motion.div>

            {/* Outer Circular Ring */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute w-[360px] h-[360px] border border-green-600/40 rounded-full shadow-[0_0_40px_rgba(34,197,94,0.1)]"
            ></motion.div>

            {/* Animated Glow Lines */}
            <svg
              className="absolute w-[380px] h-[380px]"
              viewBox="0 0 380 380"
              fill="none"
            >
              <motion.line
                x1="190"
                y1="300"
                x2="190"
                y2="100"
                stroke="url(#grad)"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              />
              <motion.line
                x1="190"
                y1="190"
                x2="360"
                y2="300"
                stroke="url(#grad)"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
              <motion.line
                x1="190"
                y1="190"
                x2="10"
                y2="300"
                stroke="url(#grad)"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />

              <defs>
                <linearGradient id="grad" x1="1" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#86efac" stopOpacity="0.9" />
                </linearGradient>
              </defs>
            </svg>

            {/* === NODES === */}

            {/* Government Node */}
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: -280 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center text-center mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-20 h-20 bg-gradient-to-br from-[#9be367] to-green-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <Landmark size={28} />
              </motion.div>
              <p className="mt-3 text-lg font-semibold text-white">
                Governments
              </p>
              <p className="text-sm text-gray-300 max-w-[160px]">
                Compliance & Infrastructure
              </p>
            </motion.div>

            {/* Business Node */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 80 }}
              animate={{ opacity: 1, x: 120, y: 80 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute top-1/2 left-1/2 flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.2 }}
                className="w-20 h-20 bg-gradient-to-br from-green-700 to-green-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <Building2 size={28} />
              </motion.div>
              <p className="mt-3 text-lg font-semibold text-white">
                Businesses
              </p>
              <p className="text-sm text-gray-300 md:max-w-[160px] w-[100px]">
                Bulk Waste & Efficiency
              </p>
            </motion.div>

            {/* Community Node */}
            <motion.div
              initial={{ opacity: 0, x: -100, y: 80 }}
              animate={{ opacity: 1, x: -270, y: 80 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute top-1/2 left-1/2 flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.4 }}
                className="w-20  h-20 bg-gradient-to-br from-green-700 to-green-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <Users size={28} />
              </motion.div>
              <p className="mt-3 text-lg font-semibold text-white">
                Communities
              </p>
              <p className="text-sm text-gray-300 md:max-w-[160px] w-[200px]">
                Awareness & Engagement
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.15),transparent_70%)] pointer-events-none"></div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center justify-center h-screen bg-[#0C5E41] text-center px-6 border-t-2 border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold !text-white mb-4 leading-tight">
            Ready to Transform Your Waste Management?
          </h2>
          <p className="!text-gray-300 font-semibold md:text-lg mb-10">
            Let's discuss how our solutions can address your specific waste
            management challenges and create sustainable impact with AI and IoT
            technology.
          </p>
          <Link href="/contact">
            <button className="flex items-center justify-center gap-2 w-[250px] mx-auto mt-10 bg-[#ffffff] text-black  text-xl font-bold !p-6 py-3 rounded-full transition-all hover:bg-[#0C5E41] hover:border-2 hover:text-white hover:border-white  cursor-pointer">
              Contact us <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
      <Testimonials />

      {/* Our Impact & Recognition */}
    </div>
  );
}
