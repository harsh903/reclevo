import { Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ptSerif } from "@/utils/Fonts";
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const cultureSections = [
  {
    src: "/images/careers.jpg",
    alt: "Team building activity",
    caption: "Monthly team building activities and social events",
    bullets: [
      "Recognition for outstanding contributions",
      "Open communication and flat hierarchy",
      "Innovation time for personal projects",
      "Work-life balance and flexible schedules",
    ],
  },
];

const OurCultureSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom space-y-12">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
         
          <div className="mb-12">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <div>
                <h2
                  className={`text-4xl md:text-6xl font-bold !text-[#3a5a40] ${ptSerif.className}`}
                >
                  OUR CULTURE
                </h2>
              </div>
              <p className="max-w-3xl mx-auto mb-16 text-2xl !text-[#3a5a40]">
                We foster a culture of innovation collaboration , and continuous learning  Every
            voice matters, and every idea has the potential to drive meaningful
            change.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image + Caption Sections */}
        {cultureSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center gap-8  group ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/2 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={section.src}
                alt={section.alt}
                width={600}
                height={400}
                className="w-full h-64 lg:h-80 object-cover rounded-2xl"
              />

              <div className="absolute inset-0 bg-gradient-to-t rounded-2xl flex items-end p-4 transition-all duration-300 group-hover:from-black/70">
                <p className="!text-white italic font-semibold text-lg lg:text-base drop-shadow-lg">
                  {section.caption}
                </p>
              </div>
            </motion.div>

            {/* Text / Bullets */}
            <div className="w-full lg:w-1/2 ">
              <ul className="space-y-4 text-gray-700">
                {section.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 border-b-2 p-4 border-gray-200 italic"
                  >
                    <Award className="w-5 h-5 text-teal-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurCultureSection;
