import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-sunlight-lightOrange to-transparent rounded-3xl -rotate-2 transform group-hover:rotate-0 transition-transform duration-500"></div>
          <img
            src="https://sunlightgroup.co/admin/uploads/8261324289about.jpg"
            alt="Advanced manufacturing facility"
            className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
          />
          <div className="absolute -left-8 bottom-8 bg-white p-6 rounded-2xl shadow-lg z-20">
            <span className="block text-sm text-sunlight-textMuted mb-1">
              Global Reach
            </span>
            <span className="text-3xl font-bold text-sunlight-orange">50+</span>
            <span className="block text-lg font-medium text-sunlight-navy">
              Countries Served
            </span>
          </div>
        </div>
        {/* Text Content */}
        <div className="space-y-6 md:pr-10">
          <div className="inline-flex items-center gap-3 bg-sunlight-lightOrange px-5 py-2.5 rounded-full mb-2">
            <span className="h-2 w-2 bg-sunlight-orange rounded-full"></span>
            <span className="text-sm font-semibold text-sunlight-orange">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-sunlight-navy leading-tight">
            <span className="text-sunlight-orange">Decades of Innovation</span>
            in Energy Storage
          </h2>

          <p className="text-lg md:text-xl text-sunlight-textMuted leading-relaxed">
            As a global leader in advanced energy solutions, Sunlight Group
            pioneers sustainable battery technologies for industrial and
            mission-critical applications worldwide. Our R&D-driven approach
            ensures cutting-edge performance and environmental responsibility.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-sunlight-orange flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sunlight-navy">
                ISO Certified Production
              </span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-sunlight-orange flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sunlight-navy">Global Distribution</span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-sunlight-orange flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sunlight-navy">24/7 Technical Support</span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-sunlight-orange flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sunlight-navy">Custom Solutions</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-sunlight-orange text-white font-semibold rounded-2xl shadow-lg hover:bg-sunlight-darkOrange hover:shadow-xl transition-all duration-300">
              Our Technology
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
