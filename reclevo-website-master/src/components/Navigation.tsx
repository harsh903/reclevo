"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Recycle, Cpu, Package, Wrench } from "lucide-react";
import { motion} from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLDivElement>(null);

  // 🔹 Track scroll for navbar shrink animation
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80) setIsScrollingDown(true);
      else if (currentScrollY < lastScrollY) setIsScrollingDown(false);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Dropdown hover behavior
  const handleMouseEnter = (label: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 150);
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  // 🔹 Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".dropdown-container")) setActiveDropdown(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    {
      href: "/services",
      label: "Solutions",
      dropdown: [
        {
          href: "/smart-waste-solutions",
          label: "Smart Waste Solutions",
          icon: <Recycle className="w-4 h-4" />,
        },
        {
          href: "/technology-solutions",
          label: "Technology & Innovation",
          icon: <Cpu className="w-4 h-4" />,
        },
        {
          href: "/asset-management",
          label: "Asset Management",
          icon: <Package className="w-4 h-4" />,
        },
        {
          href: "/services",
          label: "All Services",
          icon: <Wrench className="w-4 h-4" />,
        },
      ],
    },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 mx-auto mt-2 rounded-full transition-all duration-500 ease-in-out
        ${
          isScrollingDown
            ? "lg:max-w-3xl max-w-md backdrop-blur-2xl shadow-lg text-black"
            : "lg:max-w-7xl max-w-[90%] bg-[#393e2f]/70 backdrop-blur-lg border-2 border-gray-500 text-white"
        }`}
    >
      {/* Inner container */}
      <div
        className={`relative mx-auto transition-all duration-500 ease-in-out ${
          isScrollingDown ? "max-w-5xl" : "max-w-7xl"
        } px-4 sm:px-6 lg:px-8`}
      >
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center relative flex-shrink-0 transition-all duration-300"
          >
            <Image
              src="/images/1.png"
              alt="Reclevo Infotech Pvt. Ltd."
              width={300}
              height={200}
              className="h-32 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.dropdown &&
                  item.dropdown.some((sub) => pathname === sub.href));

              return (
                <div key={item.href} className="dropdown-container">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`px-3 py-2 text-lg flex items-center transition-colors duration-200 rounded-md
                          ${
                            isActive
                              ? "!text-white font-semibold underline underline-offset-4"
                              : "!text-white hover:text-green-500"
                          }`}
                      >
                        {item.label}
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* ✅ Dropdown matches navbar width */}
                      {activeDropdown === item.label && (
                        <div
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                          className={`absolute top-full ${
                            isScrollingDown
                              ? "transform -translate-x-[700px]"
                              : "transform -translate-x-[1000px]"
                          }  mt-3 z-50 w-[calc(100vw-10%)] lg:w-[80vw] transition-all duration-300 ease-out`}
                        >
                          <motion.div
                            className="bg-white/98 backdrop-blur-md border-t-4 border-[#9BE367] shadow-2xl rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, y: -20 }} // starts slightly above
                            animate={{ opacity: 1, y: 0 }} // slides down into place
                            exit={{ opacity: 0, y: -40 }} // goes back up when hidden
                            transition={{
                              type: "spring",
                              stiffness: 460,
                              damping: 40,
                            }}
                          >
                            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6 px-10 py-8">
                              {item.dropdown.map((dropdownItem) => {
                                const isDropdownActive =
                                  pathname === dropdownItem.href;
                                return (
                                  <Link
                                    key={dropdownItem.href}
                                    href={dropdownItem.href}
                                    className={`group flex items-start gap-4 text-center px-2 py-2  rounded-xl transition-all duration-300 hover:bg-gray-200/50 ${
                                      isDropdownActive
                                        ? "text-[#0C5E41] font-semibold"
                                        : "text-[#393e2f]"
                                    }`}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {/* 🔹 Small image box */}
                                    <div className="relative flex-shrink-0 w-22 h-22 !p-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                      <Image
                                        src={`/images/${dropdownItem.href.replace(
                                          "/",
                                          ""
                                        )}.jpg`}
                                        alt={dropdownItem.label}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>

                                    {/* 🔹 Text + Icon Section */}
                                    <div className="flex flex-col group-hover:scale-105 justify-center  my-auto text-2xl text-black font-bold">
                                      {dropdownItem.label}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-lg font-medium transition-colors duration-200 rounded-md
                        ${
                          isActive
                            ? "!text-white font-semibold underline"
                            : "!text-white hover:text-green-400"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-green-500 focus:outline-none"
            >
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 space-y-1 px-2 pb-4 bg-black/90 backdrop-blur-md rounded-xl z-40">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.dropdown &&
                  item.dropdown.some((sub) => pathname === sub.href));

              return (
                <div key={item.href} className="space-y-1">
                  {item.dropdown ? (
                    <>
                      <div
                        className={`px-3 py-2 text-base font-medium ${
                          isActive
                            ? "text-green-400 underline underline-offset-4 font-semibold"
                            : "text-white hover:text-green-400"
                        }`}
                      >
                        {item.label}
                      </div>
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => {
                          const isDropdownActive =
                            pathname === dropdownItem.href;
                          return (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className={`block px-3 py-2 text-sm transition-colors duration-200 rounded-md ${
                                isDropdownActive
                                  ? "text-green-400 underline underline-offset-2 font-semibold"
                                  : "text-white hover:text-green-400"
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-green-400 underline underline-offset-4 font-semibold"
                          : "text-white hover:text-green-400"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
