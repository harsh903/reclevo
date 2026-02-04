"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ptSerif } from "@/utils/Fonts";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What products does Reclevo offer?",
    answer:
      "We offer two main products: (1) Asset Management Platform for municipalities and panchayats to digitize their waste asset lifecycle, and (2) Rapid Waste Disposal Platform that connects businesses with verified collectors and authorized processing facilities.",
  },
  {
    question: "Who can use Reclevo's platform?",
    answer:
      "Our platform serves multiple stakeholders: Municipalities and Panchayats for asset management, Businesses needing waste disposal, Waste Collectors looking for pickup requests, Processing Facilities managing incoming waste, and Government bodies for monitoring and compliance.",
  },
  {
    question: "How does the Rapid Waste Disposal Platform work?",
    answer:
      "Businesses can book waste pickup in one click, choose from verified collectors with transparent pricing, and track their waste journey from pickup to responsible disposal. Collectors receive requests, optimize routes, and get directed to authorized processing facilities.",
  },
  {
    question: "What compliance features are included?",
    answer:
      "We handle regulatory documentation automatically, generating compliance certificates, waste disposal reports, and audit trails. For government bodies, we provide real-time monitoring, evidence-based penalty issuance, and analytics for planning.",
  },
  {
    question: "How do you ensure responsible waste disposal?",
    answer:
      "Every pickup is tracked to authorized facilities only. Our platform creates complete visibility from waste generation to final disposal, ensuring accountability at every step and preventing illegal dumping.",
  },
  {
    question: "What support do you provide during implementation?",
    answer:
      "We follow a partnership approach: understand your challenges, deploy customized solutions, onboard all stakeholders with training, provide ongoing technical support, and continuously optimize based on data and feedback.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#f9fafb]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-4">
            FAQ
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4 ${ptSerif.className}`}>
            Frequently Asked Questions
          </h2>
          <p className="text-[#4a4a4a] max-w-2xl mx-auto">
            Find answers to the most common questions about our services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#e5e7eb] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f9fafb] transition-colors"
              >
                <span className="text-base font-medium text-[#1a1a1a] pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#0C5E41] flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-[#4a4a4a] text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
