"use client";
import { ptSerif } from "@/utils/Fonts";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-[#e8f5f0] text-[#0C5E41] text-sm font-medium rounded-full">
                Rapid Waste Disposal Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6 ${ptSerif.className}`}
            >
              On-Demand Waste
              <span className="block text-[#0C5E41]">Disposal Made Easy</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#4a4a4a] max-w-xl mb-8 leading-relaxed">
              Connect with verified collectors and authorized processing facilities.
              Book pickups, track waste journeys, and get compliance certificates - all in one platform.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-10">
              {["One-Click Booking", "Verified Collectors", "Tracked Disposal"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-[#4a4a4a]">
                  <CheckCircle className="w-5 h-5 text-[#0C5E41]" />
                  <span className="text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#0C5E41] rounded-full hover:bg-[#0a4f36] transition-colors">
                  Schedule a Demo <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/about">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0C5E41] border-2 border-[#0C5E41] rounded-full hover:bg-[#e8f5f0] transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Laptop Mockup */}
              <div className="relative z-10">
                <div className="bg-[#1a1a1a] rounded-t-xl p-2 w-[380px] sm:w-[450px]">
                  {/* Laptop Screen */}
                  <div className="bg-white rounded-lg overflow-hidden">
                    <div className="bg-[#f5f5f5] px-3 py-2 flex items-center gap-2 border-b">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-400 text-center">
                        app.reclevo.com
                      </div>
                    </div>
                    <div className="p-4 h-[220px] sm:h-[260px] bg-gradient-to-br from-[#e8f5f0] to-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-semibold text-[#0C5E41]">Dashboard</div>
                        <div className="text-xs text-gray-400">Welcome, Admin</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-white p-2 rounded-lg shadow-sm">
                          <div className="text-xs text-gray-500">Active Pickups</div>
                          <div className="text-lg font-bold text-[#0C5E41]">24</div>
                        </div>
                        <div className="bg-white p-2 rounded-lg shadow-sm">
                          <div className="text-xs text-gray-500">Collectors</div>
                          <div className="text-lg font-bold text-[#0C5E41]">12</div>
                        </div>
                        <div className="bg-white p-2 rounded-lg shadow-sm">
                          <div className="text-xs text-gray-500">Completed</div>
                          <div className="text-lg font-bold text-[#0C5E41]">156</div>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="text-xs font-medium text-gray-600 mb-2">Recent Activity</div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-600">Pickup completed - Zone A</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span className="text-gray-600">New request - Industrial Area</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="bg-[#2a2a2a] h-3 rounded-b-lg mx-4"></div>
                <div className="bg-[#1a1a1a] h-2 rounded-b-xl mx-12"></div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -right-4 sm:-right-8 bottom-4 z-20">
                <div className="bg-[#1a1a1a] rounded-[2rem] p-2 w-[140px] sm:w-[160px] shadow-2xl">
                  {/* Phone Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] rounded-b-xl z-10"></div>
                  {/* Phone Screen */}
                  <div className="bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="bg-[#0C5E41] px-3 py-4 pt-6">
                      <div className="text-white text-xs font-semibold">Reclevo</div>
                      <div className="text-white/70 text-[10px]">Book Pickup</div>
                    </div>
                    <div className="p-3 h-[180px] sm:h-[200px] bg-gray-50">
                      <div className="bg-white p-2 rounded-lg shadow-sm mb-2">
                        <div className="text-[10px] text-gray-500">Waste Type</div>
                        <div className="text-xs font-medium text-[#1a1a1a]">E-Waste</div>
                      </div>
                      <div className="bg-white p-2 rounded-lg shadow-sm mb-2">
                        <div className="text-[10px] text-gray-500">Quantity</div>
                        <div className="text-xs font-medium text-[#1a1a1a]">50 kg</div>
                      </div>
                      <div className="bg-[#0C5E41] text-white text-center py-2 rounded-lg text-xs font-medium mt-3">
                        Schedule Pickup
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0C5E41]" style={{ borderRadius: '50% 50% 0 0' }} />
    </section>
  );
};

export default HeroSection;
