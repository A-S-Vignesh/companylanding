import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sunlight-navy text-white pt-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-sunlight-lightOrange/20 pb-12">
          {/* Company Info */}
          <div>
            <img
              src="https://www.sunlightgroup.co/images/fav.png"
              alt="Sunlight Group Logo"
              className="h-14 mb-4"
            />
            <h3 className="text-2xl font-bold text-sunlight-orange mb-2">
              Sunlight Group
            </h3>
            <p className="text-sm text-sunlight-lightOrange/80 leading-relaxed">
              Trusted for excellence in signage, real estate, uPVC windows, and
              construction. With over 30 years of delivering quality and
              customer satisfaction.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-sunlight-orange mb-4">
              Get in Touch
            </h4>
            <ul className="text-sm space-y-2 text-sunlight-lightOrange/80">
              <li>
                SR Plaza, 2<sup>nd</sup> Floor, No.98
              </li>
              <li>Velachery Main Road,</li>
              <li>Sembakkam, Chennai-73</li>
              <li className="mt-3">📞 044-2228 2277</li>
              <li>📱 +91 98414 25176</li>
              <li>✉️ admin@sunlightgroup.co</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-sunlight-orange mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-sunlight-lightOrange/80">
              <li>
                <a
                  href="#about"
                  className="hover:text-sunlight-orange transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-sunlight-orange transition"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-sunlight-orange transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-sunlight-orange transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-sunlight-orange transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-sunlight-orange mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sunlight-navy/40 rounded-full hover:bg-sunlight-orange transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sunlight-navy/40 rounded-full hover:bg-sunlight-orange transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sunlight-navy/40 rounded-full hover:bg-sunlight-orange transition"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sunlight-navy/40 rounded-full hover:bg-sunlight-orange transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sunlight-lightOrange/60 gap-4 mb-10">
          <p>© 2025 Sunlight Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="hover:text-sunlight-orange transition"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-sunlight-orange transition">
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="hover:text-sunlight-orange transition"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
