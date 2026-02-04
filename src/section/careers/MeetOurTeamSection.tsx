"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Title from "@/components/Title";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const teamImages = [
  {
    src: "/images/aboutUs.jpeg",
    alt: "Team collaboration session",
    caption: "Our diverse team collaborating on innovative solutions",
  },
  {
    src: "/images/solution_Overview.jpg",
    alt: "Office workspace",
    caption: "Modern workspace designed for creativity and productivity",
  },
  {
    src: "/images/reclevo1.jpg",
    alt: "Team meeting",
    caption: "Weekly team syncs to align on goals and celebrate wins",
  },
];

const MeetOurTeamSection = () => {
  return (
    <section className="section-padding bg-gray-50 ">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <Title
            text1="Meet Our"
            text2="Team"
            description=" Work alongside talented individuals who are passionate about
            creating sustainable solutions for a cleaner tomorrow."
          />
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8  p-6"
        >
          {teamImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotate: -90, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group bg-[#B6CEB4] p-6 rounded-2xl border-1"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-700 font-medium text-xl">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetOurTeamSection;
