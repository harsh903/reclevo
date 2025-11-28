"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Opting for biogas proved to be a good decision. YIMBY’s service right from installation, to maintenance and routine check-ups, everything is carried out well.",
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
    <section className="py-20 md:mb-10 mb-60  h-screen ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold !text-[#0C5E41]  mb-2 tracking-wide">
          TESTIMONIALS
        </p>
        <h2 className="text-4xl md:text-6xl font-serif font-bold  mb-4 leading-tight !text-black ">
          What People Say
        </h2>
        <p className="!text-[#0C5E41]  mb-12 max-w-2xl mx-auto  font-semibold md:text-lg ">
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
              className="bg-black rounded-xl p-10 shadow-sm border-2 border-green-900"
            >
              <Quote className="w-10 h-10 text-green-900 mx-auto mb-6 fill-green-200" />
              <p className="!text-gray-300 italic leading-relaxed mb-6">
                {item.quote}
              </p>
              <h4 className="font-semibold text-gray-100 mb-3">{item.name}</h4>
              <div className="flex justify-center">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gray-700 fill-green-200"
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
