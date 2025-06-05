import React from "react";

const testimonials = [
  {
    name: "Ravi Kumar",
    title: "Project Manager, TechBuild",
    text: "Sunlight Group exceeded our expectations. Their energy solutions are efficient and their support is excellent.",
    image: "/testimonials/user1.jpg",
  },
  {
    name: "Priya Sharma",
    title: "CEO, EcoSpaces",
    text: "Reliable, professional, and sustainable — everything we needed for our project. Highly recommended!",
    image: "/testimonials/user2.jpg",
  },
  {
    name: "Arun Mehta",
    title: "Operations Head, UrbanConstruct",
    text: "Their team delivered on time with great communication. We'll definitely work with them again.",
    image: "/testimonials/user3.jpg",
    },
];

const Testimonials = () => {
  return (
    <section className="relative bg-sunlight-lightOrange py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full mb-4">
            <span className="h-2 w-2 bg-sunlight-orange rounded-full"></span>
            <span className="text-sm font-semibold text-sunlight-orange">
              Client Voices
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-sunlight-navy leading-tight">
            <span className="text-sunlight-orange">Trusted</span> by Industry
            Leaders
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sunlight-orange to-sunlight-darkOrange rounded-t-3xl"></div>

              <div className="flex items-start space-x-5 mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-2xl object-cover border-4 border-sunlight-lightOrange"
                />
                <div>
                  <p className="text-lg font-bold text-sunlight-navy">
                    {t.name}
                  </p>
                  <p className="text-sm text-sunlight-textMuted">{t.title}</p>
                </div>
              </div>

              <p className="text-sunlight-textMuted relative pl-8 before:content-['“'] before:absolute before:left-0 before:top-0 before:text-4xl before:text-sunlight-orange before:opacity-50 before:font-serif">
                {t.text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex space-x-1 text-sunlight-orange">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sunlight-textMuted text-sm">
                  Sunlight Client
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
