import React from "react";

const companies = [
  {
    title: "LETTERS",
    description:
      "Sunlight Letters, established in 1993, is a professional manufacturer of sign & display products.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "UPVC WINDOWS",
    description:
      "We serve you SLIDING WINDOWS, OPENABLE WINDOWS, FIXED WINDOWS, FRENCH WINDOWS.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9h18M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "DEVELOPERS",
    description:
      "Sunlight Developers is one of the reputed builders in Chennai. We are the top building contractor.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H3m16 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "RESIDENCY",
    description:
      "Sunlight Residency is a wholly-owned subsidiary of Sunlight Group, focused on real estate.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
];

const GroupCompany = () => {
  return (
    <section id="services" className="bg-sunlight-lightOrange py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full mb-4">
            <span className="h-2 w-2 bg-sunlight-orange rounded-full"></span>
            <span className="text-sm font-semibold text-sunlight-orange">
              Our Divisions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-sunlight-navy leading-tight">
            <span className="text-sunlight-orange">Group of</span> Global
            Companies
          </h2>
        </div>

        {/* Company Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sunlight-lightOrange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-sunlight-lightOrange rounded-2xl text-sunlight-orange">
                  {company.icon}
                </div>
                <h3 className="text-xl font-bold text-sunlight-navy mb-4">
                  {company.title}
                </h3>
                <p className="text-sunlight-textMuted leading-relaxed mb-6">
                  {company.description}
                </p>
                {/* <button className="inline-flex items-center text-sunlight-orange font-medium hover:text-sunlight-darkOrange transition-colors">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCompany;
