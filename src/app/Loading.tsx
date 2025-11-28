"use client";

import { motion } from "framer-motion";

export default function Loading() {
  const text = "RECLEVO...";

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative text-8xl font-bold text-gray-300">
        {/* Base gray text */}
        {text}

        {/* Green overlay text filling progressively */}
        <motion.div
          className="absolute inset-0 text-[#0a5c41] overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
}
