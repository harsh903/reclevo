import React from "react";
import { ptSerif } from "@/utils/Fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/asset.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* White gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40" />
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 min-h-screen px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C5E41]/10 backdrop-blur-sm rounded-full mb-8 border border-[#0C5E41]/20">
                <span className="w-2 h-2 bg-[#0C5E41] rounded-full animate-pulse"></span>
                <span className="text-[#1a1a1a] text-sm font-medium">
                  Asset Management Platform
                </span>
              </div>

              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6 ${ptSerif.className}`}>
                Digitize Your
                <span className="block text-[#0C5E41]">Waste Asset Lifecycle</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#4a4a4a] max-w-xl mb-10 leading-relaxed">
                Track all waste management assets in real-time using QR codes and GPS.
                Manage workforce, generate compliance reports, and make data-driven decisions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#0C5E41] rounded-full hover:bg-[#0a4f36] transition-colors shadow-lg">
                    Get Started <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="/smart-waste-solutions">
                  <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0C5E41] border-2 border-[#0C5E41] rounded-full hover:bg-[#0C5E41]/10 transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Device Mockups */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative">
                {/* Laptop Mockup */}
                <div className="relative z-10">
                  <div className="bg-[#1a1a1a] rounded-t-xl p-2 w-[380px] sm:w-[450px] shadow-2xl">
                    {/* Laptop Screen */}
                    <div className="bg-white rounded-lg overflow-hidden">
                      <div className="bg-[#f5f5f5] px-3 py-2 flex items-center gap-2 border-b">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-400 text-center">
                          assets.reclevo.com
                        </div>
                      </div>
                      <div className="p-4 h-[220px] sm:h-[260px] bg-gradient-to-br from-[#e8f5f0] to-white">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm font-semibold text-[#0C5E41]">Asset Dashboard</div>
                          <div className="text-xs text-gray-400">Municipality Admin</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <div className="text-xs text-gray-500">Total Assets</div>
                            <div className="text-lg font-bold text-[#0C5E41]">847</div>
                          </div>
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <div className="text-xs text-gray-500">Active</div>
                            <div className="text-lg font-bold text-[#0C5E41]">812</div>
                          </div>
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <div className="text-xs text-gray-500">Maintenance</div>
                            <div className="text-lg font-bold text-orange-500">35</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-xs font-medium text-gray-600 mb-2">Asset Alerts</div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                              <span className="text-gray-600">Vehicle TN-01-1234 due for service</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-gray-600">Bin #B-456 installed at Zone C</span>
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
                        <div className="text-white text-xs font-semibold">Reclevo Assets</div>
                        <div className="text-white/70 text-[10px]">QR Scanner</div>
                      </div>
                      <div className="p-3 h-[180px] sm:h-[200px] bg-gray-50">
                        <div className="bg-white p-2 rounded-lg shadow-sm mb-2 flex items-center gap-2">
                          <div className="w-8 h-8 bg-[#e8f5f0] rounded flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#0C5E41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[10px] text-gray-500">Scan Asset</div>
                            <div className="text-xs font-medium text-[#1a1a1a]">QR Code</div>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded-lg shadow-sm mb-2">
                          <div className="text-[10px] text-gray-500">Last Scanned</div>
                          <div className="text-xs font-medium text-[#1a1a1a]">Bin #B-123</div>
                        </div>
                        <div className="bg-[#0C5E41] text-white text-center py-2 rounded-lg text-xs font-medium mt-3">
                          Scan New Asset
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#0C5E41]/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#0C5E41]/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
