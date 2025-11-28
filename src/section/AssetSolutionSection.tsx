"use client";

import Title from "@/components/Title";
import { motion } from "framer-motion";

const solutionData = [
  {
    title: "🚛 Waste Collection Assets",
    items: [
      "Track garbage trucks, compactors, and tippers with real-time status",
      "Monitor bins, containers, and dumper placer locations with QR codes",
      "Schedule preventive maintenance for vehicles to avoid breakdowns",
      "Manage fuel consumption and vehicle utilization reports",
    ],
  },
  {
    title: "🧹 Sanitation Equipment",
    items: [
      "Track road sweeping machines and fogging equipment",
      "Monitor hand carts, wheelbarrows, and cleaning tools inventory",
      "Manage PPE kit distribution and replacement schedules",
      "Track composting units and waste processing machinery",
    ],
  },
  {
    title: "👷 Workforce Operations",
    items: [
      "Digital attendance for sanitation workers and drivers",
      "Ward-wise worker allocation and duty assignment",
      "Performance tracking with penalty/reward system",
      "Mobile app for supervisors to mark field attendance",
    ],
  },
  {
    title: "📋 Compliance & Documentation",
    items: [
      "Pollution Control Board report generation",
      "Vehicle fitness and emission certificate tracking",
      "Waste collection metrics for Swachh Bharat reporting",
      "Audit trails for government inspections",
    ],
  },
  {
    title: "📊 Analytics Dashboard",
    items: [
      "Ward-wise collection efficiency metrics",
      "Vehicle breakdown analysis and maintenance costs",
      "Worker productivity and attendance patterns",
      "Citizen complaint resolution tracking",
    ],
  },
];

const AssetSolutionSection = () => {
  return (
   

    <section className="section-padding bg-[url('/images/paper_bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="container-custom mb-16">
        <Title
          text1="OUR SOLUTION"
          text1Color="black"
          description="A comprehensive digital platform designed specifically for government
          waste management departments to track, manage, and optimize all waste
          collection assets and workforce operations from a single dashboard."
        />
      </div>

      {/* Feature Cards */}
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutionData.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative  rounded-xl shadow-m hover:shadow-2xl transition-all duration-300 p-6 text-left outline-green-700 outline-2 hover:scale-95 hover:z-10 bg-[#4D8B55]"
          >
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <ul className="space-y-3">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-900 leading-relaxed text-xs sm:text-sm lg:text-md italic">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AssetSolutionSection;
