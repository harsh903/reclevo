import { motion } from "framer-motion";

const IntegratedApproch = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-18 bg-gray-50 mt-38">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: -160 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 flex flex-col items-center text-center overflow-hidden  "
          >
            {/* Floating Icons */}
            <div className="absolute top-2 left-4 text-green-200 text-2xl animate-bounce">
              🌿
            </div>
            <div className="absolute top-6 right-6 text-green-300 text-xl animate-pulse">
              🍃
            </div>
            <div className="absolute bottom-4 left-10 text-green-100 text-3xl animate-bounce">
              🌱
            </div>
            <div className="absolute bottom-8 right-12 text-green-200 text-2xl animate-bounce">
              🍂
            </div>
            <div className="absolute top-4 right-26 text-green-300 text-xl animate-pulse">
              🌸
            </div>

            {/* Center Icon */}
            <div className="text-5xl mb-4 text-emerald-500">♻️</div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Our Mission
            </h2>

            {/* Description */}
            <p className="text-base text-gray-700 mb-2">
              To transform waste management in India through innovation,
              technology, and collaborative partnerships.
            </p>
            <p className="text-gray-600 text-sm">
              We tackle the entire waste cycle, from collection and segregation
              to processing and disposal, supported by smart asset management
              solutions.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: -100 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Floating Icons */}
            <div className="absolute top-2 left-4 text-green-200 text-2xl animate-bounce">
              🌿
            </div>
            <div className="absolute top-6 right-6 text-green-300 text-xl animate-pulse">
              🍃
            </div>
            <div className="absolute bottom-4 left-10 text-green-100 text-3xl animate-bounce">
              🌱
            </div>
            <div className="absolute bottom-8 right-12 text-green-200 text-2xl animate-bounce">
              🍂
            </div>
            <div className="absolute top-1/3 left-4/5 -translate-y-1/2 text-green-300 text-xl animate-pulse">
              🌸
            </div>

            {/* Center Icon */}

            {/* Center Icon */}
            <div className="text-5xl mb-4 text-blue-500">🏆</div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Our Vision
            </h2>

            {/* Description */}
            <p className="text-base text-gray-700 mb-2">
              To make India a global leader in waste management innovation,
              where waste becomes a resource, landfills disappear, and
              technology drives a circular economy.
            </p>
            <p className="text-gray-600 text-sm">
              Starting from Goa, a hub of innovation and sustainability, we are
              expanding nationwide to create lasting impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedApproch;
