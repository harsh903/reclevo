"use client";
import HeroSection from "@/section/AssetManagement/HeroSection";
import AssetCtaSection from "@/section/AssetManagement/AssetCtaSection";
import { Truck, Users, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { ptSerif } from "@/utils/Fonts";
import { motion } from "framer-motion";
import Link from "next/link";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
}

function Feature({ icon, title }: FeatureProps) {
  return (
    <motion.div
      className="p-4 !bg-[#0C5E41] dark:bg-neutral-900 rounded-xl shadow flex flex-col items-center text-center h-[160px] sm:h-[180px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 10 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 400, damping: 35 }}
    >
      <div className="m-4 text-3xl sm:text-4xl !text-white dark:text-green-400">
        {icon}
      </div>
      <h4
        className={`font-semibold text-xl sm:text-2xl md:text-3xl !text-white dark:text-red-200 ${ptSerif.className}`}
      >
        {title}
      </h4>
    </motion.div>
  );
}

export default function AssetManagement() {
  const sectionMotion = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <HeroSection />

      <main className="space-y-10">
        {/* Problem Section */}
        <motion.section
          className="relative grid lg:grid-cols-3 gap-8 items-end w-full max-w-6xl mx-auto px-6 py-16 md:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={sectionMotion}
        >
          {/* Left box (1/3 width, bottom-aligned) */}
          <div className="lg:col-span-1 flex justify-start order-2 lg:order-1 mt-10 lg:mt-0">
            <motion.div
              className="!bg-[#0C5E41] h-full dark:from-red-900/30 dark:to-red-800/20 shadow-md p-6 sm:p-8 rounded-2xl text-center w-full"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 45 }}
            >
              <h3
                className={`font-semibold text-3xl sm:text-4xl !text-white dark:text-red-200 ${ptSerif.className}`}
              >
                The Consequence
              </h3>
              <p className="mt-3 !text-white/80 dark:text-neutral text-base sm:text-lg md:text-xl leading-relaxed">
                Unhygienic conditions, citizen complaints, and rising
                costs impact public health and municipal reputation.
              </p>
            </motion.div>
          </div>

          {/* Right content (2/3 width) */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-center lg:pl-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-6xl font-bold !text-[#000000] leading-tight ${ptSerif.className}`}
            >
              The Challenge Facing Our Cities
            </h2>
            <p className="mt-4 !text-[#636363] dark:text-neutral-300 text-medium font-semibold sm:text-lg md:text-xl leading-relaxed">
              Municipalities struggle with outdated systems that lack real-time
              visibility—leading to missed collections, equipment failures, and
              compliance issues.
            </p>
            <ul className="mt-6 space-y-2 text-sm sm:text-base font-medium !text-[#636363] dark:text-neutral-300">
              <li>• Untracked vehicles and missed collection routes</li>
              <li>• Reactive maintenance causing frequent downtime</li>
              <li>• Manual attendance tracking and payroll errors</li>
              <li>• No real-time visibility into daily operations</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          id="features"
          className="grid lg:grid-cols-2 gap-8 items-center py-16 md:py-20 dark:bg-neutral-800 p-6 sm:p-10 rounded-2xl max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionMotion}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-6xl font-bold !text-[#000000] leading-tight ${ptSerif.className}`}
            >
              Reclevo’s Smart Solution
            </h2>
            <p className="mt-4 !text-[#636363] dark:text-neutral-300 text-medium font-semibold sm:text-lg md:text-xl leading-relaxed">
              Get complete visibility into your waste infrastructure with
              real-time tracking, predictive maintenance, and workforce management.
            </p>
            <ul className="mt-6 space-y-2 text-sm sm:text-base font-medium !text-[#636363] dark:text-neutral-300">
              <li>• Live GPS fleet tracking and route monitoring</li>
              <li>• QR-enabled bin inventory management</li>
              <li>• Predictive maintenance scheduling</li>
              <li>• Digital attendance and performance reporting</li>
            </ul>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          >
            <Feature icon={<Truck />} title="Fleet Tracking" />
            <Feature icon={<MapPin />} title="Smart Bins" />
            <Feature icon={<Users />} title="Workforce Management" />
            <Feature icon={<ShieldCheck />} title="Analytics Dashboard" />
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="flex flex-col items-center justify-center min-h-[80vh] sm:h-screen bg-[#0C5E41] text-center px-6 py-16 border-t-2 border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 200, damping: 45 }}
        >
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold !text-white mb-4 leading-tight">
              Ready to Transform Your Waste Management?
            </h2>
            <p className="!text-gray-300 font-semibold text-sm sm:text-base md:text-lg mb-10">
              Schedule a consultation to see how Reclevo can bring visibility
              and efficiency to your waste management operations.
            </p>

            <Link href="/contact">
              <button className="flex items-center justify-center gap-2 w-[250px] mx-auto mt-10 bg-[#ffffff] text-black  text-xl font-bold !p-6 py-3 rounded-full transition-all hover:bg-[#0C5E41] hover:border-2 hover:text-white hover:border-white  cursor-pointer">
                Contact us <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </motion.section>
      </main>

      <AssetCtaSection />
    </>
  );
}
