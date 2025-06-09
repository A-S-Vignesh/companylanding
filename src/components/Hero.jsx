import React from "react";
import HeroImage from "../assets/images/sunlight.jpg";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-20 md:py-32">
      <ParticlesBackground />
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Text Section */}
        <div className="space-y-8 md:pr-12">
          <div className="inline-flex items-center gap-3 bg-sunlight-lightOrange px-5 py-2.5 rounded-full mb-4">
            <span className="h-2 w-2 bg-sunlight-orange rounded-full"></span>
            <span className="text-sm font-semibold text-sunlight-orange">
              Chennai-Based Legacy
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sunlight-navy leading-tight mb-6">
            Building Trust Across
            <span className="text-sunlight-orange">
              {" "}
              Signage, Real Estate
            </span>{" "}
            and More
          </h1>

          <p className="text-lg md:text-xl text-sunlight-textMuted mb-8 leading-relaxed max-w-2xl">
            From iconic signage to trusted real estate developments, Sunlight
            Group has been a name of reliability, quality, and innovation across
            Tamil Nadu since 1993.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-sunlight-orange text-white font-semibold rounded-2xl shadow-lg hover:bg-sunlight-darkOrange hover:shadow-xl transition-all duration-300"
            >
              View Our Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-sunlight-navy text-sunlight-navy font-semibold rounded-2xl hover:bg-sunlight-navy hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-sunlight-lightOrange to-transparent rounded-3xl -rotate-2 transform group-hover:rotate-0 transition-transform duration-500"></div>
          <img
            src={HeroImage}
            alt="Sunlight Group Chennai"
            className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
          />
          <div className="absolute -right-8 bottom-8 bg-white p-6 rounded-2xl shadow-lg z-20">
            <span className="block text-sm text-sunlight-textMuted mb-1">
              Since 1993
            </span>
            <span className="text-3xl font-bold text-sunlight-orange">30+</span>
            <span className="block text-lg font-medium text-sunlight-navy">
              Years of Trust
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
