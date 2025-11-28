"use client"; // if using Next.js App Router

import { motion } from "framer-motion";

type TitleProp = {
  text1?: string;
  text2?: string;
  description?: string;
  text1Color?: string; // defaults to black
  text2Color?: string; // defaults to green
};

export default function Title({
  text1,
  text2,
  description,
  text1Color = "#000000",
  text2Color = "#0C5E41",
}: TitleProp) {
  return (
    <div className="text-center">
      {/* Title Part 1 & 2 stacked vertically */}
      {(text1 || text2) && (
        <h2 className="text-2xl sm:text-3xl lg:text-5xl tracking-tight mb-4">
          {text1 && (
            <span
              style={{ color: text1Color }}
              className="block font-medium mr-2 font-[Inter]"
            >
              {text1}
            </span>
          )}

          {text2 && (
            <motion.span
              style={{ color: text2Color }}
              className="block font-extrabold font-['Open_Sans'] text-5xl sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {text2}
            </motion.span>
          )}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="text-sm sm:text-md lg:text-xl !text-gray-300 leading-relaxed max-w-3xl mx-auto font-[Inter]">
          {description}
        </p>
      )}
    </div>
  );
}
