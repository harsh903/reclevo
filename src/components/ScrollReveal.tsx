"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "left" | "right";
  distance?: number;
  baseOpacity?: number;
  containerClassName?: string;
  textClassName?: string;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "left",
  distance = 100,
  baseOpacity = 0,
  containerClassName = "",
  textClassName = "",
  duration = 0.6,
}) => {
  const initialX = direction === "left" ? -distance : distance;

  return (
    <motion.div
      initial={{ opacity: baseOpacity, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }} // triggers when 50% in view
      exit={{ opacity: baseOpacity, x: initialX }} // reverses when scrolling up
      transition={{ duration, ease: "easeOut" }}
      className={containerClassName}
    >
      <div className={textClassName}>{children}</div>
    </motion.div>
  );
};

export default ScrollReveal;
