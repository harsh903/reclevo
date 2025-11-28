// components/WhyChooseUs.tsx
import { CheckCircle2 } from "lucide-react";
import Title from "./Title";

const reasons = [
  {
    title: "Government-First Design",
    description: "Built understanding municipality workflows and hierarchies",
  },
  {
    title: "Multi-Language Support",
    description: "Available in Hindi, English, and regional languages",
  },
  {
    title: "Swachh Bharat Integration",
    description: "Direct reporting for national cleanliness mission",
  },
  {
    title: "Offline Capability",
    description: "Works in areas with poor connectivity",
  },
  {
    title: "GeM Portal Listed",
    description: "Available for direct government procurement",
  },
  {
    title: "RTI Compliant",
    description: "Transparent data access and reporting features",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Title
            text1="Why Government Bodies"
            text2="Choose Us"
            description=" A trusted digital solution tailored to meet the unique needs of
          municipalities, ensuring transparency, efficiency, and compliance."
          />
        </div>
      </div>

      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto b4">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="group flex items-start  rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 outline-1 bg-gray-200"
          >
            {/* Icon in a circle */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mr-4 group-hover:bg-emerald-100 transition-colors duration-300">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            {/* Text */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
