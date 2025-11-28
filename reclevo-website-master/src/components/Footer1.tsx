import { MapPin, Phone, Instagram, Twitter, Linkedin } from "lucide-react";

import { VideoText } from "../components/ui/video-text";

export default function Footer1() {
  return (
    <footer className="relative text-white outline-2 bg-[#101310] md:py-8 bg-opacity-90 bg-cover bg-center rounded-t-4xl -mt-10 lg:-mt-20 overflow-hidden">
      {/* Video Text Section */}
      <div className="relative flex items-center justify-center w-full h-[150px] md:h-[380px] md:mt-4 bg-black overflow-hidden">
        <VideoText
          src="/videos/footer.mp4"
          fontSize={20}
          fontFamily="Dancing Script"
          className="w-full "
        >
          RECLEVO
        </VideoText>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left px-4 md:px-6">
        {/* Copyright */}
        <p className="!text-gray-200 md:text-sm !text-xs">
          &copy; {new Date().getFullYear()} Reclevo Infotech Pvt. Ltd. All
          rights reserved.
        </p>

        {/* Contact & Social Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 w-full md:w-auto">
          {/* Phone */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={18} className="text-[#9be367]" />
            <p className="!text-white md:text-sm !text-xs !mt-3">+91 98765 43210</p>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-center md:text-left">
            <MapPin size={18} className="!text-[#9be367]" />
            <p className="!text-white md:text-sm !text-xs !mt-3">
              2nd Floor, JMB's Capital Building, Mapusa, Goa
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mt-2 md:mt-0">
            <a
              href="https://www.instagram.com/reclevo/"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-[#9be367] hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram width={18} height={18} />
            </a>
            <a
              href="#"
              className="!text-[#9be367] hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin width={18} height={18} />
            </a>
            <a
              href="#"
              className="!text-[#9be367] hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
