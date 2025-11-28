"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
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
      "Our unique joint venture combines 5+ years of proven waste management operations with cutting-edge AI and IoT technology. We focus on partnerships rather than just service delivery, ensuring sustainable, long-term solutions that work for all stakeholders.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20  w-full">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[50vh] flex flex-col items-start justify-center overflow-hidden">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <h4
            className={`text-4xl md:text-7xl font-bold !text-[#3a5a44] ${ptSerif.className}`}
          >
            Frequently Asked Questions
          </h4>
        </div>

        <ScrollReveal
          direction="left"
          distance={100}
          containerClassName="w-full mt-6"
          textClassName="text-[#3a5a40] font-bold mb-4 text-2xl tracking-wide max-w-4xl"
        >
          Find answers to the most common questions about our services.
        </ScrollReveal>
      </div>

      <div className="space-y-4 w-5/7  mx-auto mb-20">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full grid grid-cols-1 !lg:grid-cols-2 items-center p-6 text-left bg-[#393e2f] text-white  border-2 border-black"
            >
              {/* Question */}
              <span className="text-xl font-medium !text-[#aeb28d]">
                {faq.question}
              </span>

              {/* Arrow (keeps to right column on lg) */}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="justify-self-end text-[#9be367] "
              >
                ▼
              </motion.span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="overflow-hidden px-6 pb-4 text-md pt-2 text-gray-600 border-2 border-black rounded-b-2xl bg-gray-100"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
