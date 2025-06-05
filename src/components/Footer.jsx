import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sunlight-navy text-white pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-sunlight-lightOrange/20">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="https://www.sunlightgroup.co/images/fav.png"
              alt="Sunlight Group Logo"
              className="h-16 mb-4"
            />
            <h3 className="text-2xl font-bold text-sunlight-orange">
              Sunlight Group
            </h3>
            <p className="text-sm text-sunlight-lightOrange/80 leading-relaxed">
              Pioneering sustainable energy solutions through innovation and
              technological excellence since 1992.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sunlight-orange mb-2">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-sunlight-lightOrange/80">
              <p>
                SR Plaza, 2<sup>nd</sup> Floor, No.98,
              </p>
              <p>Velachery Main Road,</p>
              <p>Sembakkam, Chennai-73</p>
              <p className="mt-4">📞 044-2228 2277</p>
              <p>📱 +91 98414 25176</p>
              <p>✉️ admin@sunlightgroup.co</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sunlight-orange mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-sunlight-lightOrange/80">
              <li>
                <a href="#" className="hover:text-sunlight-orange transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sunlight-orange transition">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sunlight-orange transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sunlight-orange transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sunlight-orange transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sunlight-orange mb-2">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-lg bg-sunlight-navy/50 hover:bg-sunlight-orange transition"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-sunlight-navy/50 hover:bg-sunlight-orange transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-sunlight-navy/50 hover:bg-sunlight-orange transition"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-sunlight-navy/50 hover:bg-sunlight-orange transition"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-sunlight-lightOrange/60 text-center">
            © 2025 Sunlight Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-sunlight-lightOrange/60">
            <a href="#" className="hover:text-sunlight-orange transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sunlight-orange transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-sunlight-orange transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
