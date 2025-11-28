"use client";
import FAQSection from "@/section/FAQSection";
import ContactForm from "../../components/ContactForm";
import { motion } from "framer-motion";
import ScrollReveal from "../../components/ScrollReveal";
import { ptSerif } from "@/utils/Fonts";


export default function Contact() {
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row items-center ">
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80vh] flex flex-col items-start justify-center overflow-hidden py-20">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <h4
              className={`text-4xl md:text-7xl font-bold !text-[#3a5a44] ${ptSerif.className}`}
            >
              Get in Touch
            </h4>
            <span
              className={`text-4xl md:text-7xl font-bold !text-[#3a5a44] ${ptSerif.className}`}
            >
              &nbsp;|&nbsp; Send us a Message
            </span>
          </div>

          <ScrollReveal
            direction="left"
            distance={100}
            containerClassName="w-full mt-6"
            textClassName="!text-[#3a5a40] font-bold mb-4 text-2xl tracking-wide max-w-4xl"
          >
            Ready to transform your waste management? Let's discuss how our
            innovative solutions can address your specific challenges and create
            sustainable impact.
          </ScrollReveal>
        </section>
      </div>

      {/* Contact Form & Info */}
      <section className=" ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-10">
                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start transition-transform"
                >
                  <div className="w-14 h-14  rounded-full flex items-center bg-[#9be367] justify-center mr-4 shadow-inner">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 hover:text-emerald-600 transition">
                      info@reclevo.com
                    </p>
                    <p className="text-gray-600 hover:text-emerald-600 transition">
                      partnerships@reclevo.com
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start transition-transform"
                >
                  <div className="w-14 h-14  rounded-full flex items-center bg-[#9be367] justify-center mr-4 shadow-inner">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-500 text-sm">
                      Mon - Sat, 10:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start transition-transform"
                >
                  <div className="w-14 h-14  rounded-full flex bg-[#9be367] items-center justify-center mr-4 shadow-inner">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Headquarters
                    </h3>
                    <p className="text-gray-600">Goa,India</p>
                    <p className="text-gray-500 text-sm">
                      Expanding operations across India
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Partnership Information */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 p-6 !bg-[#393e2f] rounded-2xl border border-emerald-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold !text-[white] mb-3">
                  Partnership Opportunities
                </h3>
                <p className="!text-[#b1ba9b] mb-4">
                  We actively collaborate with governments, businesses, and
                  communities. Interested in partnering with us?
                </p>
                <ul className="space-y-2 text-sm !text-[#b1ba9b] list-disc list-inside">
                  <li>Government partnerships for policy implementation</li>
                  <li>Business collaborations for sustainable solutions</li>
                  <li>Community engagement programs</li>
                  <li>Technology integration partnerships</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[50vh] flex flex-col items-start justify-center overflow-hidden">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <h4
              className={`text-4xl md:text-7xl font-bold !text-[#3a5a44] ${ptSerif.className}`}
            >
              Why Partner with Reclevo?
            </h4>
          </div>

          <ScrollReveal
            direction="left"
            distance={100}
            containerClassName="w-full mt-6"
            textClassName="text-[#3a5a40] font-bold mb-4 text-2xl tracking-wide max-w-4xl"
          >
            Our unique combination of experience, technology, and partnership
            approach makes us the ideal choice for your waste management
            transformation
          </ScrollReveal>
        </div>

        {/* Dynamic Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Proven Experience",
                description:
                  "5+ years of successful waste management operations in Goa",
                iconColor: "text-black",
                bgColor: "bg-[#9be367]",
                path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Advanced Technology",
                description: "Cutting-edge AI, IoT, and robotics solutions",
                iconColor: "text-black",
                bgColor: "bg-[#9be367]",
                path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                title: "Partnership Focus",
                description: "Collaborative approach with all stakeholders",
                iconColor: "text-black",
                bgColor: "bg-[#9be367]",
                path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Scalable Solutions",
                description: "End-to-end solutions that grow with your needs",
                iconColor: "text-black",
                bgColor: "bg-[#9be367]",
                path: "M13 10V3L4 14h7v7l9-11h-7z",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-[#393e2f] p-10 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
              >
                <div
                  className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <svg
                    className={`w-8 h-8 ${item.iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={item.path}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold !text-white mb-2">
                  {item.title}
                </h3>
                <p className="!text-[#b1ba9b] text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
