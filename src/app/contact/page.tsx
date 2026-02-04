"use client";
import FAQSection from "@/section/FAQSection";
import ContactForm from "../../components/ContactForm";
import { motion } from "framer-motion";
import { ptSerif } from "@/utils/Fonts";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-6">
                Contact Us
              </span>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6 ${ptSerif.className}`}>
                Get Started
                <span className="text-[#0C5E41]"> With Reclevo</span>
              </h1>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Whether you&apos;re a municipality digitizing assets, a business seeking
                responsible waste disposal, or a collector wanting to grow, we have a solution for you.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/DSC_3531.JPG"
                  alt="Reclevo team"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f9fafb]" style={{ borderRadius: '50% 50% 0 0' }} />
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-16 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm border border-[#e5e7eb]"
            >
              <h2 className={`text-2xl font-bold text-[#1a1a1a] mb-6 ${ptSerif.className}`}>
                Send Us a Message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-2xl font-bold text-[#1a1a1a] mb-8 ${ptSerif.className}`}>
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f5f0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0C5E41]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">Email</h3>
                    <p className="text-[#4a4a4a]">info@reclevo.com</p>
                    <p className="text-[#4a4a4a]">partnerships@reclevo.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f5f0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#0C5E41]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">Phone</h3>
                    <p className="text-[#4a4a4a]">+91 98765 43210</p>
                    <p className="text-sm text-[#6b7280]">Mon - Sat, 10:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f5f0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#0C5E41]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">Headquarters</h3>
                    <p className="text-[#4a4a4a]">Mapusa, Goa, India</p>
                    <p className="text-sm text-[#6b7280]">Expanding operations across India</p>
                  </div>
                </div>
              </div>

              {/* Who We Serve Box */}
              <div className="mt-10 p-6 bg-[#0C5E41] rounded-xl">
                <h3 className={`text-xl font-semibold text-white mb-3 ${ptSerif.className}`}>
                  Who We Serve
                </h3>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  Our platform serves multiple stakeholders in the waste management ecosystem.
                </p>
                <ul className="space-y-2">
                  {[
                    "Municipalities and Panchayats",
                    "Businesses needing waste disposal",
                    "Waste Collectors and Transporters",
                    "Processing Facilities",
                    "Government Monitoring Bodies"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-white/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-white/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ borderRadius: '50% 50% 0 0' }} />
      </section>

      {/* Why Partner Section */}
      <section className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4 ${ptSerif.className}`}>
              Why Partner with Reclevo?
            </h2>
            <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
              5+ years of operational expertise combined with technology
              makes us your trusted partner for waste management transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Complete Visibility",
                description: "Know exactly where your waste goes from pickup to final disposal"
              },
              {
                title: "Easy Compliance",
                description: "We handle regulatory documentation so you don't have to"
              },
              {
                title: "Transparent Pricing",
                description: "No hidden costs, negotiate rates directly with collectors"
              },
              {
                title: "Responsible Disposal",
                description: "Every pickup tracked to authorized facilities only"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f9fafb] rounded-xl p-6 border border-[#e5e7eb] text-center"
              >
                <div className="w-12 h-12 bg-[#0C5E41] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f9fafb]" style={{ borderRadius: '50% 50% 0 0' }} />
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
