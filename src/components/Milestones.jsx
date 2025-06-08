import React from "react";

const milestones = [
  {
    year: "1990",
    title: "Started as Helper",
    description:
      "K.Krishnamoorthy joined 'BIG LETTERS', a Signage company as a Helper.",
    image: "/images/milestones/1.png",
  },
  {
    year: "1992",
    title: "Filter Job",
    description: "Moved to 'UNIVERSAL LETTERS' and worked as a Filter.",
    image: "", // Replace with actual image path
  },
  {
    year: "1993",
    title: "Sunlight Letters Founded",
    description:
      "Started 'SUNLIGHT LETTERS' in Mount Road, Chennai with solo operations.",
    image: "/images/milestones/letters.jpg", // Replace with actual image path
  },
  {
    year: "1995",
    title: "Metal Letters Production",
    description:
      "Started manufacturing metal letters. American Remedies was the first big client.",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='100' y='100' text-anchor='middle' dominant-baseline='middle' font-size='24' fill='%23333'%3E1995%3C/text%3E%3C/svg%3E",
  },
  {
    year: "2000",
    title: "New Office",
    description: "Shifted the office to Chrompet.",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='100' y='100' text-anchor='middle' dominant-baseline='middle' font-size='24' fill='%23333'%3E2000%3C/text%3E%3C/svg%3E",
  },
  {
    year: "2005",
    title: "ACP & Glazing Work",
    description:
      "Started ACP cladding & glazing elevation works. Dev Group was first big client.",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='100' y='100' text-anchor='middle' dominant-baseline='middle' font-size='24' fill='%23333'%3E2005%3C/text%3E%3C/svg%3E",
  },
  {
    year: "2013",
    title: "Sunlight Developers",
    description: "Launched Sunlight Developers.",
    image: "/images/milestones/develop.jpg", // Replace with actual image path
  },
  {
    year: "2014",
    title: "UPVC Windows",
    description: "Ventured into UPVC window systems.",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='100' y='100' text-anchor='middle' dominant-baseline='middle' font-size='24' fill='%23333'%3E2014%3C/text%3E%3C/svg%3E",
  },
  {
    year: "2016",
    title: "Sunlight Group Formed",
    description:
      "Shifted to Velachery Road. All verticals consolidated as SUNLIGHT GROUP.",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='100' y='100' text-anchor='middle' dominant-baseline='middle' font-size='24' fill='%23333'%3E2016%3C/text%3E%3C/svg%3E",
  },
  {
    year: "2017",
    title: "Residency Inaugurated",
    description: "Launched Sunlight Residency at Chrompet.",
    image:
      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='100' y='100' text-anchor='middle' dominant-baseline='middle' font-size='24' fill='%23333'%3E2017%3C/text%3E%3C/svg%3E",
  },
];

const MilestoneTimeline = () => {
  return (
    <section className="bg-white text-sunlight-navy py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 md:px-8">
        {/* Sticky Left */}
        <div className="md:w-1/3">
          <div className="md:sticky top-32">
            <p className="text-sunlight-orange uppercase tracking-wider mb-2">
              Our Journey
            </p>
            <h2 className="text-4xl font-bold leading-snug mb-4">
              Milestone <span className="text-sunlight-orange">Timeline</span>
            </h2>
            <p className="text-sunlight-textMuted mb-6">
              Discover the key moments that shaped Sunlight Group’s growth and
              evolution through the years.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-sunlight-orange text-sunlight-orange hover:text-white border border-sunlight-orange hover:border-transparent rounded py-2 px-4 shadow hover:shadow-lg transition"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* Right Timeline */}
        <div className="md:w-2/3 relative">
          <div className="relative wrap overflow-hidden h-full">
            {/* Vertical Line */}
            <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full border-l-4 border-sunlight-orange"></div>
            <div className="absolute md:hidden left-4 h-full border-l-4 border-sunlight-orange"></div>

            {milestones.map((item, index) => {
              const isImageLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`mb-16 flex flex-col md:flex-row items-center justify-between w-full ${
                    isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="w-full md:w-5/12 mb-4 md:mb-0 flex justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-56 h-56 object-cover rounded-xl shadow-md"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-5/12 px-1 py-4 pl-8 md:pl-0 text-left">
                    <div className="mb-2 inline-flex items-center gap-2 bg-sunlight-lightOrange px-3 py-1 rounded-full text-sm text-sunlight-orange font-semibold justify-center md:justify-start">
                      <span className="w-6 h-6 flex items-center justify-center bg-sunlight-orange text-white rounded">
                        {index + 1}
                      </span>
                      {item.year}
                    </div>
                    <h4 className="mb-2 font-bold text-xl">{item.title}</h4>
                    <p className="text-sunlight-textMuted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="mt-20 w-24 border-t border-sunlight-lightOrange mx-auto" />
        </div>
      </div>
    </section>
  );
};


export default MilestoneTimeline;
