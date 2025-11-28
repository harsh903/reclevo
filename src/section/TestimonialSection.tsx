"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { ptSerif } from "@/utils/Fonts";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Opting for biogas proved to be a good decision. Reclevo's service right from installation, to maintenance and routine check-ups, everything is carried out well.",
      name: "Sarpanch, Camorlim Village Panchayat",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "We are happy to have chosen RECLEVO. The entire team associated with the STP project systematically organised the installation and the operators ensured that the system was run efficiently and economically.",
      name: "Chief Engineer, Adwalpalkar Constructions",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:mb-10 mb-40">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-sm font-semibold text-[#0C5E41] mb-3 tracking-widest uppercase block">
          Testimonials
        </span>
        <h2 className={`text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight ${ptSerif.className}`}>
          What People Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-base md:text-lg">
          People embracing waste management are inching closer to a cleaner,
          greener world.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-800"
            >
              <Quote className="w-8 h-8 text-[#9be367] mx-auto mb-6" />
              <p className="text-gray-300 leading-relaxed mb-6 text-base">
                &quot;{item.quote}&quot;
              </p>
              <h4 className="font-semibold text-white mb-3">{item.name}</h4>
              <div className="flex justify-center gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#9be367] fill-[#9be367]"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
