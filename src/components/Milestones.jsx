import React from "react";

const milestones = [
  {
    year: "1990",
    title: "Started as Helper",
    description:
      "K.Krishnamoorthy joined 'BIG LETTERS', a Signage company as a Helper.",
  },
  {
    year: "1992",
    title: "Filter Job",
    description: "Moved to 'UNIVERSAL LETTERS' and worked as a Filter.",
  },
  {
    year: "1993",
    title: "Sunlight Letters Founded",
    description:
      "Started 'SUNLIGHT LETTERS' in Mount Road, Chennai with solo operations.",
  },
  {
    year: "1995",
    title: "Metal Letters Production",
    description:
      "Started manufacturing metal letters. American Remedies was the first big client.",
  },
  {
    year: "2000",
    title: "New Office",
    description: "Shifted the office to Chrompet.",
  },
  {
    year: "2005",
    title: "ACP & Glazing Work",
    description:
      "Started ACP cladding & glazing elevation works. Dev Group was first big client.",
  },
  {
    year: "2013",
    title: "Sunlight Developers",
    description: "Launched Sunlight Developers.",
  },
  {
    year: "2014",
    title: "UPVC Windows",
    description: "Ventured into UPVC window systems.",
  },
  {
    year: "2016",
    title: "Sunlight Group Formed",
    description:
      "Shifted to Velachery Road. All verticals consolidated as SUNLIGHT GROUP.",
  },
  {
    year: "2017",
    title: "Residency Inaugurated",
    description: "Launched Sunlight Residency at Chrompet.",
  },
];
const Milestones = () => {
  return (
    <section className="relative bg-white py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-sunlight-lightOrange px-4 py-1.5 rounded-full mb-4">
            <span className="h-2 w-2 bg-sunlight-orange rounded-full"></span>
            <span className="text-sm font-medium uppercase tracking-wider text-sunlight-orange">
              Our Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-sunlight-navy leading-tight mb-4">
            Milestone <span className="text-sunlight-orange">Timeline</span>
          </h2>
          <p className="text-lg text-sunlight-textMuted max-w-2xl mx-auto">
            Key moments that shaped our growth and development over the years
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sunlight-orange to-sunlight-darkOrange hidden md:block"></div>
          <div className="absolute left-4 h-full w-1 bg-gradient-to-b from-sunlight-orange to-sunlight-darkOrange md:hidden"></div>

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Year Marker */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-sunlight-orange flex items-center justify-center z-10 shadow-lg">
                    <span className="font-bold text-sm text-sunlight-orange">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 w-full md:w-5/12 p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-md ${
                      isEven ? "md:mr-auto md:pr-14" : "md:ml-auto md:pl-14"
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="bg-sunlight-lightOrange p-2 rounded-lg mr-4">
                        <div className="bg-sunlight-orange w-8 h-8 rounded-md flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-sunlight-navy mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-sunlight-textMuted">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connector Line (mobile only) */}
                  <div className="h-0.5 w-8 bg-sunlight-orange my-2 md:hidden"></div>

                  {/* Empty Space */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-sunlight-lightOrange mx-auto w-24"></div>
      </div>
    </section>
  );
};

export default Milestones;
