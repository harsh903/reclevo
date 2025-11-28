// app/careers/page.tsx
"use client";
import { Variants } from "framer-motion";
import { ArrowRight, Award, Briefcase, Clock, MapPin } from "lucide-react";
import Link from "next/link";

import OurCultureSection from "@/section/careers/OurCultureSection";
import WhyWorkWithUsSection from "@/section/careers/WhyWorkWithUsSection";
import { ptSerif } from "@/utils/Fonts";
import { motion } from "framer-motion";
const jobVariants: Variants = {
  hiddenLeft: { opacity: 0, x: -200 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const jobs = [
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    description:
      "Build and maintain our waste management platform using modern web technologies. Work on both frontend interfaces and backend APIs to create seamless user experiences for our municipal and corporate clients.",
    location: "Mapusa,Goa",
    type: "Full-time",
    experience: "2-4 years experience",
    department: "Engineering",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    salary: "₹8-15 LPA",
  },

  {
    id: "mobile-developer",
    title: "Mobile App Developer",
    description:
      "Develop and maintain mobile applications for waste collection staff and end users. Create intuitive interfaces for route optimization, complaint management, and user engagement.",
    location: "Mapusa,Goa",
    type: "Full-time",
    experience: "2-4 years experience",
    department: "Engineering",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    salary: "₹8-14 LPA",
  },

  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description:
      "Design intuitive user interfaces and experiences for our web and mobile platforms. Create user-centered designs that simplify complex waste management workflows for various stakeholders.",
    location: "Mapusa,Goa",
    type: "Full-time",
    experience: "2-5 years experience",
    department: "Design",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
    salary: "₹8-15 LPA",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="section-padding bg-[#F0F0F0] relative overflow-hidden" >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-8">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-grid"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#0C5E41"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          {/* Header */}
          <div className="mb-12">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <div>
                <h2
                  className={`text-4xl md:text-6xl font-bold !text-[#0C5E41] ${ptSerif.className}`}
                >
                  CAREERS AT RECLEVO
                </h2>
              </div>
              <p className="max-w-3xl mx-auto mb-16 text-2xl !text-[#0C5E41]">
                Join our mission to revolutionize waste management through
                technology-driven solutions and collaborative partnerships. At
                Reclevo, you'll work with passionate innovators, contribute to
                cleaner cities, and create real impact for communities across
                India.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-[#0C5E41] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold !text-white">
                {jobs.length}
              </div>
              <div className="text-md !text-[#a6b385]">Open Positions</div>
            </div>
            <div className="bg-[#0C5E41] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold !text-white">5+</div>
              <div className="text-md !text-[#a6b385]">Cities</div>
            </div>
            <div className="bg-[#0C5E41] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold !text-white">50+</div>
              <div className="text-md !text-[#a6b385]">Team Members</div>
            </div>
            <div className="bg-[#0C5E41] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold !text-white">100%</div>
              <div className="text-md !text-[#a6b385]">Remote Friendly</div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                variants={jobVariants} // attach variants
                initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:outline-teal-600 outline  hover:outline-2 hover:scale-[1.02] hover:bg-white outline-1 border border-white/50"
              >
                {/* Job Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Briefcase className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {job.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {job.description}
                </p>

                {/* Experience & Skills */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Award className="w-4 h-4 text-teal-600" />
                    {job.experience}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <Link
                  href={`https://docs.google.com/forms/d/e/1FAIpQLSfabIS2f9UkEpPRaJVUG4jLHS0VBANPq9BxE_Hs3NSOkWTxhg/viewform?usp=header`}
                  className="inline-flex items-center gap-2 bg-[#0C5E41] !text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition-all duration-300 font-medium group"
                >
                  Apply now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Work With Us */}

      {/* Why Work With Us Section */}
      <WhyWorkWithUsSection />

      {/* Our Culture Section */}
      <OurCultureSection />

      {/* Call to Action Section */}
      <section className="flex flex-col items-center justify-center md:h-screen h-[70vh] bg-[#101310] text-center px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold !text-white mb-4 leading-tight">
            Ready to make an impact?
          </h2>
          <p className="!text-gray-300 font-semibold md:text-lg mb-10">
            Send us your resume and join the Reclevo team today!
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfabIS2f9UkEpPRaJVUG4jLHS0VBANPq9BxE_Hs3NSOkWTxhg/viewform?usp=header">
            <button className="flex items-center justify-center gap-2 w-[250px] mx-auto mt-10 bg-[#9be367] text-black  text-xl font-bold !p-6 py-3 rounded-full transition-all hover:bg-[#88dc50]">
              Apply Now <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
