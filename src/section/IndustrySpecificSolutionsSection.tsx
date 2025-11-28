"use client"
import { useState } from "react";
const industries = [
  {
    label: "Manufacturing",
    icon: Factory,
    title: "Manufacturing Sector",
    subtitle: "Factory waste management",
    description: [
      "Lorem ipsum dolor sit amet consectetur. Arcu aliquet gravida pellentesque etiam vel tempor.",
      "Pellentesque vitae lacus non viverra faucibus ac consequat.",
    ],
    challenges: ["High volume waste", "Hazardous material handling"],
  },
  {
    label: "Hospitality",
    icon: Hotel,
    title: "Hospitality Sector",
    subtitle: "Hotel and restaurant waste management",
    description: [
      "Aliquam enim consectetur imperdiet eu pretium non tempus.",
      "Ac in aliquam nisl ullamcorper suscipit ut.",
    ],
    challenges: ["Food waste", "Recycling", "Cost efficiency"],
  },
  {
    label: "Healthcare",
    icon: Stethoscope,
    title: "Healthcare Sector",
    subtitle: "Medical facility waste solutions",
    description: ["Biohazard management", "Efficient disposal systems"],
    challenges: ["Biohazard waste", "Regulations", "Cost management"],
  },
  {
    label: "Retail",
    icon: ShoppingBag,
    title: "Retail Sector",
    subtitle: "Store-wide waste management",
    description: ["Packaging waste solutions", "Inventory waste control"],
    challenges: ["Packaging", "Inventory disposal"],
  },
  {
    label: "Education",
    icon: GraduationCap,
    title: "Education Sector",
    subtitle: "Campus-wide waste management",
    description: [
      "Campus waste segregation",
      "Recycling programs and awareness",
    ],
    challenges: ["Segregation", "Awareness", "Volume"],
  },
  {
    label: "Corporate",
    icon: Building2,
    title: "Corporate Sector",
    subtitle: "Office and building waste solutions",
    description: ["Daily office waste", "Paper and electronic recycling"],
    challenges: ["Paper waste", "Electronics disposal"],
  },
];
import {
  Factory,
  Hotel,
  Stethoscope,
  ShoppingBag,
  GraduationCap,
  Building2,
  Check,
  Users,
} from "lucide-react";
import Title from "@/components/Title";

const IndustrySpecificSolutionsSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[4]);
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Title
            text1=" INDUSTRY "
            text2="SPECIFIC SOLUTIONS"
            description="Tailored waste management solutions designed for your industry's unique requirements"
          />
        </div>

        {/* Industry Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div
                key={idx}
                onClick={() => setSelectedIndustry(industry)}
                className="text-center cursor-pointer hover:scale-110 transition-transform duration-300 flex flex-col items-center"
              >
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full ${
                    selectedIndustry.label === industry.label
                      ? "bg-teal-100"
                      : "bg-gray-100"
                  } flex items-center justify-center mb-2`}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
                </div>
                <p className="text-sm sm:text-md font-bold text-black">
                  {industry.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Solution Card */}
        <div className="solution-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 md:p-12 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {selectedIndustry.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {selectedIndustry.subtitle}
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="p-6 sm:p-8 md:p-12">
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
                {selectedIndustry.label}
              </h3>
              <p className="text-gray-600 mb-6">{selectedIndustry.subtitle}</p>

              {selectedIndustry.description.map((desc, idx) => (
                <p key={idx} className="text-gray-700 mb-6 leading-relaxed">
                  {desc}
                </p>
              ))}

              <h4 className="font-bold mb-4">Key Challenges</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedIndustry.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="bg-teal-600 rounded-lg p-4 flex items-center gap-3 hover:bg-teal-700 hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white">
                      <Check className="w-4 h-4" />
                    </div>
                    <p className="text-sm !text-white mt-1">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySpecificSolutionsSection;
