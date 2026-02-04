import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer1() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/1.png"
                alt="Reclevo"
                width={140}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">
              Transforming waste into a resource using technology, partnerships,
              and a vision for a circular economy.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/reclevo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center text-[#9ca3af] hover:bg-[#0C5E41] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center text-[#9ca3af] hover:bg-[#0C5E41] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center text-[#9ca3af] hover:bg-[#0C5E41] hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9ca3af] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {[
                { href: "/asset-management", label: "Asset Management Platform" },
                { href: "/smart-waste-solutions", label: "Rapid Waste Disposal" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9ca3af] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0C5E41] mt-0.5 flex-shrink-0" />
                <span className="text-[#9ca3af] text-sm">
                  2nd Floor, JMB&apos;s Capital Building, Mapusa, Goa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0C5E41] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-[#9ca3af] text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0C5E41] flex-shrink-0" />
                <a href="mailto:info@reclevo.com" className="text-[#9ca3af] text-sm hover:text-white transition-colors">
                  info@reclevo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-[#6b7280] text-sm text-center">
            &copy; {new Date().getFullYear()} Reclevo Infotech Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
