"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ptSerif } from "@/utils/Fonts";

const faqs = [
  {
    question: "What services does Reclevo provide?",
    answer:
      "We provide sustainable waste management solutions including recycling, waste collection, segregation, and eco-friendly disposal.",
  },
  {
    question: "What types of organizations do you work with?",
    answer:
      "We work with governments (from panchayats to state authorities), businesses of all sizes, industries, corporate campuses, and community organizations. Our solutions are scalable and can be customized for any organization dealing with waste management challenges.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Implementation timelines vary based on the scope and complexity of the project. Simple software deployments can be completed in 2-4 weeks, while comprehensive system overhauls may take 3-6 months. We always provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you provide training and support?",
    answer:
      "Yes, we provide comprehensive training for all stakeholders and ongoing support. Our implementation process includes change management, user training, and continuous optimization to ensure successful adoption and maximum impact.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer:
      "Absolutely. Our solutions are designed to integrate seamlessly with existing infrastructure and systems. We conduct thorough assessments to ensure compatibility and smooth integration without disrupting current operations.",
  },
  {
    question:
      "What makes Reclevo different from other waste management companies?",
    answer:
      "We combine 5+ years of proven waste management operations with cutting-edge AI and IoT technology. We focus on partnerships rather than just service delivery, ensuring sustainable, long-term solutions that work for all stakeholders.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 w-full">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#0C5E41] mb-3 tracking-widest uppercase block">
            FAQ
          </span>
          <h2 className={`text-3xl md:text-5xl font-bold text-gray-900 mb-4 ${ptSerif.className}`}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Find answers to the most common questions about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-base font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#0C5E41] flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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
                    <div className="px-5 pb-5 pt-2 text-gray-600 text-base leading-relaxed">
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
