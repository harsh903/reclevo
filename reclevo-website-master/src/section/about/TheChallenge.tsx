import React from 'react'

import Image from "next/image";
import { motion } from "framer-motion";

const TheChallenge = () => {
  return (
    <section className="py-6 lg:py-18 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center shadow-2xl">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900 leading-snug ">
            The Challenge We Address
          </h2>
          <p className=" text-gray-700 leading-relaxed mb-10 text-sm sm:text-md lg:text-xl">
            India faces a major challenge: waste management. Every day, over{" "}
            <strong className="text-green-700 italic">
              160,000 tonnes of waste
            </strong>{" "}
            are generated across the country, but less than half is treated
            properly. The rest ends up in overflowing landfills, open dumps, or
            unregulated sites, posing serious risks to our environment, health,
            and future.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-18"
          >
            <h2 className=" font-extrabold mb-6 text-gray-900 leading-snug ">
              Turning Challenge into Opportunity
            </h2>
            <p className=" text-gray-700 mb-6 leading-relaxed text-sm sm:text-md lg:text-xl">
              At Reclevo Infotech, we see every challenge as an opportunity for
              change. We started as a joint venture between{" "}
              <strong className="text-green-700 italic text-sm sm:text-md lg:text-xl">
                Inovativa Waste Aid & Management Pvt. Ltd.
              </strong>{" "}
              and{" "}
              <strong className="text-green-700 italic">
                Xphora AI Technology Pvt. Ltd.
              </strong>
              .
            </p>
            <p className=" text-gray-700 leading-relaxed text-sm sm:text-md lg:text-xl">
              We combine hands-on expertise with the latest technology to change
              how India handles waste. With years of successful operations in
              Goa, deep knowledge of government consulting, and solid
              technological foundations, Reclevo is now expanding across India.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column with Images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Plastic Waste */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, rotate: -2 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center text-center group"
          >
            <motion.div
              className="relative w-full h-72 rounded-2xl overflow-hidden shadow-xl"
              animate={{
                y: [0, -10, 0], // float up & down
                scale: [1, 1.03, 1], // subtle breathing effect
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/waste6.jpg"
                alt="Plastic Waste"
                fill
                className="object-cover"
              />
            </motion.div>
            <h3 className="mt-4 text-2xl font-semibold bg-green-300 w-full p-3 border-r-4 rounded-b-2xl">
              Plastic Waste
            </h3>
            <p className="text-sm text-gray-600">
              9.3M tonnes produced annually in India
            </p>
          </motion.div>

          {/* E-Waste */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, rotate: 5 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center text-center group"
          >
            <motion.div
              className="relative w-full h-72 rounded-2xl overflow-hidden shadow-xl"
              animate={{
                y: [0, -12, 0], // slightly different float for variation
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/e-waste.jpg"
                alt="E-Waste"
                fill
                className="object-cover"
              />
            </motion.div>
            <h3 className="mt-4 text-2xl font-semibold text-green-700 bg-green-300 w-full p-3 border-r-4 rounded-b-2xl">
              E-Waste
            </h3>
            <p className="text-sm text-gray-600">
              2M tonnes generated every year
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TheChallenge
