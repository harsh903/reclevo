"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Recycle, Package, Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/smart-waste-solutions",
      label: "Solutions",
      dropdown: [
        {
          href: "/smart-waste-solutions",
          label: "Smart Waste Solutions",
          icon: <Recycle className="w-5 h-5" />,
        },
        {
          href: "/asset-management",
          label: "Asset Management",
          icon: <Package className="w-5 h-5" />,
        },
      ],
    },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 mx-auto mt-4 rounded-full transition-all duration-300 ease-in-out
        ${isScrolled
          ? "max-w-3xl bg-white shadow-lg border border-[#e5e7eb]"
          : "max-w-7xl bg-[#1a1a1a]/90 backdrop-blur-md"
        }`}
      style={{ marginLeft: 'auto', marginRight: 'auto' }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={isScrolled ? "/images/RECLEVO.png" : "/images/1.png"}
              alt="Reclevo"
              width={150}
              height={50}
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-8" : "h-20"}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href ||
                (item.dropdown?.some((sub) => pathname === sub.href));

              if (item.dropdown) {
                return (
                  <div key={item.href} className="relative group">
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded-full flex items-center gap-1 transition-colors
                        ${isScrolled
                          ? isActive
                            ? "text-[#0C5E41] bg-[#e8f5f0]"
                            : "text-[#4a4a4a] hover:text-[#0C5E41] hover:bg-[#f9fafb]"
                          : isActive
                            ? "text-white bg-white/10"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-[#e5e7eb] py-2 min-w-[220px] overflow-hidden">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors
                              ${pathname === dropdownItem.href
                                ? "text-[#0C5E41] bg-[#e8f5f0] font-medium"
                                : "text-[#4a4a4a] hover:text-[#0C5E41] hover:bg-[#f9fafb]"
                              }`}
                          >
                            <span className="text-[#0C5E41]">{dropdownItem.icon}</span>
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors
                    ${isScrolled
                      ? isActive
                        ? "text-[#0C5E41] bg-[#e8f5f0]"
                        : "text-[#4a4a4a] hover:text-[#0C5E41] hover:bg-[#f9fafb]"
                      : isActive
                        ? "text-white bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors
              ${isScrolled ? "text-[#4a4a4a] hover:bg-[#f9fafb]" : "text-white hover:bg-white/10"}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4">
          <div className="bg-white rounded-xl shadow-lg border border-[#e5e7eb] overflow-hidden">
            <div className="p-3 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                if (item.dropdown) {
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg
                          ${isActive ? "text-[#0C5E41] bg-[#e8f5f0]" : "text-[#4a4a4a] hover:bg-[#f9fafb]"}`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                      </button>

                      {mobileDropdownOpen && (
                        <div className="pl-4 py-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg
                                ${pathname === dropdownItem.href
                                  ? "text-[#0C5E41] bg-[#e8f5f0] font-medium"
                                  : "text-[#4a4a4a] hover:bg-[#f9fafb]"
                                }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="text-[#0C5E41]">{dropdownItem.icon}</span>
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg
                      ${isActive ? "text-[#0C5E41] bg-[#e8f5f0]" : "text-[#4a4a4a] hover:bg-[#f9fafb]"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
