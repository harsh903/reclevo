import React from 'react'
import { Users, Briefcase, Home, Leaf } from "lucide-react";
import Title from '@/components/Title';

const PartnershipApproach = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-150 via-blue-100 to-blue-300 overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-emerald-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 right-10 w-60 h-60 bg-purple-400 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-25 animate-bounce-slow"></div>
      <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-red-400 rounded-full opacity-20 animate-spin-slow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Title
            text1="Working in Partnership"
            description="What sets Reclevo apart is our partnership-driven approach. We actively collaborate with all stakeholders to ensure practical, inclusive, and sustainable solutions."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Governments",
              description: "From local panchayats to state-level authorities",
              iconColor: "bg-emerald-300 text-black",
              icon: Users,
              points: [
                "Strengthen waste management",
                "Ensure compliance and regulations",
                "Optimize resource utilization",
              ],
            },
            {
              title: "Businesses",
              description: "Industries, corporates, and bulk waste generators",
              iconColor: "bg-blue-300 text-black",
              icon: Briefcase,
              points: [
                "Customized waste management solutions",
                "Cost-effective disposal methods",
                "Responsible waste management",
              ],
            },
            {
              title: "Communities",
              description: "Citizens and local communities",
              iconColor: "bg-purple-300 text-black",
              icon: Home,
              points: [
                "Encourage citizen participation",
                "Build awareness and education",
                "Create accountability systems",
              ],
            },
          ].map((card, idx) => {
            const IconComponent = card.icon; // ✅ Correctly assign Lucide icon
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-transform duration-500 border-t-4 border-r-4 border-t-blue-700 border-r-blue-700 flex flex-col items-center text-center border-2 border-gray-400"
              >
                {/* Card Icon */}
                <div
                  className={`w-16 h-16 ${card.iconColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">{card.description}</p>

                {/* Card Points */}
                <ul className="mt-4 text-sm text-gray-600">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 mb-2">
                      <Leaf
                        className={`w-5 h-5 flex-shrink-0 text-green-500`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PartnershipApproach
