"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    image?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const totalCards = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / totalCards);
    const closestIndex = breakpoints.reduce((acc, bp, i) => {
      const dist = Math.abs(latest - bp);
      return dist < Math.abs(latest - breakpoints[acc]) ? i : acc;
    }, 0);
    setActiveCard(closestIndex);
  });

  const bgGradients = [
    "linear-gradient(185deg, #ffffff 0%, #588157 80%)",
    "linear-gradient(135deg,  #ffffff 0%, #ffffff 100%)",
    "linear-gradient(135deg,  #ffffff 0%, #588157100%)",
  ];

  return (
    <motion.section
      ref={ref}
      animate={{
        background: bgGradients[activeCard % bgGradients.length],
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Subtle overlay glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_60%)] pointer-events-none" />

      <div className="relative w-full">
        {content.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.title + index}
              className={cn(
                "h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-24",
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* 🖼️ Image Side */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                  x: activeCard === index ? 0 : isEven ? -100 : 100,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full  flex justify-center items-center"
              >
                {item.image ? (
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="  rounded-3xl shadow-2xl border w-full h-full border-white/10 object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div className="w-full h-full bg-white/40 rounded-3xl border border-white/10" />
                )}
              </motion.div>

              {/* 🧾 Text Side */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                  y: activeCard === index ? 0 : 60,
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={cn(
                  "backdrop-blur-xl bg-white border-2 border-[#0C5E41] shadow-xl rounded-3xl p-8 md:p-10 max-w-xl text-center lg:text-left transition-all",
                  contentClassName
                )}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};
