"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ptSerif, bebasNeue, oswald } from "@/utils/Fonts";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import MissionAnsVision from "@/section/about/MissionAnsVision"; // Replace with relevant icons


export default function About() {
  return (
    <div>
      <section className="relative w-full lg:h-screen h-[60vh] flex flex-col items-start justify-center overflow-hidden px-8 ">
        <h4 className="!text-black font-bold mb-4 text-lg tracking-wide">
          ABOUT RECLEVO
        </h4>
        <ScrollReveal
          direction="left"
          distance={100}
          containerClassName="w-full"
          textClassName={`text-4xl max-w-4xl md:text-7xl font-bold !text-[black] ${ptSerif.className}`}
        >
          From Goa's largest waste management innovator to India's
          technology-driven transformation leader
        </ScrollReveal>
      </section>

      <section className="-py-4 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-2  grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-[300px] sm:h-[500px] md:h-[500px]  rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/aboutUs.jpeg" // replace with your image
              alt="Our Story"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Column - Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p
              className={`!text-[#0C5E41] leading-relaxed text-md mb-8 sm:text-md lg:text-2xl mt-8 ${ptSerif.className}`}
            >
              <span className="font-extrabold">Reclevo Infotech Pvt. Ltd</span>–
              Driving Innovation in Waste Management. India is facing a critical
              waste crisis, generating millions of tonnes each year, much of
              which overwhelms landfills and pollutes communities due to
              inefficient systems. At Reclevo Infotech, we don’t see this as a
              problem—we see an opportunity. Leveraging deep expertise in waste
              management and cutting-edge technology, we deliver innovative,
              scalable solutions that streamline operations, ensure compliance,
              and create cleaner, healthier, and more sustainable communities
              across India.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Mission & Vision */}
      <MissionAnsVision />
      <section className="relative w-full lg:h-screen h-[75vh] flex flex-col items-start  max-w-5xl justify-center gap-2.5 overflow-hidden px-8 sm:px-12 lg:ml-28">
        <div
          className={`text-4xl md:text-7xl  !text-[#3a5a40] leading-snug ${ptSerif.className}`}
        >
          <ScrollReveal
            direction="left"
            distance={100}
            containerClassName="w-full"
            textClassName={`text-4xl max-w-4xl md:text-7xl font-bold !text-[#0C5E41] ${bebasNeue.className}`}
          >
            Turning Challenges into Opportunities
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            distance={100}
            containerClassName="w-4/5"
            textClassName={`text-2xl mt-10 md:text-4xl   text-gray-600 !float-right pt-4 !text-[#0C5E41] ${oswald.className}`}
          >
            At Reclevo Infotech, we turn challenges into drivers of progress. We
            blend
            <span className="font-extrabold !text-black">
              {" "}
              real-world experience with smart technology
            </span>{" "}
            to transform waste management in India — starting from Goa and now
            expanding nationwide.
          </ScrollReveal>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center md:h-screen h-[70vh] !bg-[#0C5E41] text-center px-6">
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
    </div>
  );
} 
