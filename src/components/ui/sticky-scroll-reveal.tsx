"use client";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
import { UserX, Cog, ShieldAlert } from "lucide-react";
import Image from "next/image";

const cardData = [
  {
    icon: <UserX className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
  },
  {
    icon: <Cog className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&q=80",
  },
];

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
  return (
    <section className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0C5E41] text-white text-sm font-semibold rounded-full mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Critical Issues in Waste Management
          </h2>
          <p className="text-lg text-[#636363] max-w-3xl mx-auto">
            Understanding the challenges in current waste management systems
            is the first step towards building sustainable solutions.
          </p>
        </motion.div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={cn(
                "group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                contentClassName
              )}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cardData[index]?.image || "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Number badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0C5E41] font-bold text-sm shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon on image */}
                <div className="absolute bottom-4 left-4 w-11 h-11 bg-[#0C5E41] rounded-xl flex items-center justify-center text-white">
                  {cardData[index]?.icon || <UserX className="w-5 h-5" />}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#636363] leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0C5E41]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
