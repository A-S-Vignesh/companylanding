import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// ✅ Configurable nav links
const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Solutions", href: "#services" },
  { label: "Gallery", href: "#gallery"},
  { label: "Contact", href: "#contact", isButton: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-sunlight-lightOrange">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://www.sunlightgroup.co/images/logo.jpg"
              alt="Sunlight Group Logo"
              className="h-10 mr-3"
            />
            <span className="text-2xl font-bold text-sunlight-navy tracking-wide">
              Sunlight
              <span className="text-sunlight-orange">Group</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isButton ? (
                  <a
                    href={item.href}
                    className="px-4 py-2 bg-sunlight-orange text-white rounded-2xl font-semibold
                               hover:bg-sunlight-darkOrange transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="relative text-sunlight-text font-medium hover:text-sunlight-orange transition-colors duration-300
                               after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-sunlight-orange
                               hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl hover:bg-sunlight-lightOrange transition-colors duration-200"
            >
              {menuOpen ? (
                <XMarkIcon className="w-7 h-7 text-sunlight-text" />
              ) : (
                <Bars3Icon className="w-7 h-7 text-sunlight-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            menuOpen ? "max-h-96 pt-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-4 px-2 pb-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block py-2 px-4 rounded-xl font-medium transition-colors duration-200 ${
                    item.isButton
                      ? "bg-sunlight-orange text-white hover:bg-sunlight-darkOrange"
                      : "text-sunlight-text hover:bg-sunlight-lightOrange"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
