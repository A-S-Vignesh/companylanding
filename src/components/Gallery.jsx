import React, { useState } from "react";

const galleryData = [
  {
    src: "https://sunlightgroup.co/admin/uploads/1013226322s6.jpg",
    category: "LETTERS",
  },
  {
    src: "https://sunlightgroup.co/admin/uploads/650597501s3.jpg",
    category: "LETTERS",
  },
  {
    src: "https://sunlightgroup.co/admin/uploads/539833696s4.jpg",
    category: "UPVCWINDOWS",
  },
  {
    src: "https://sunlightgroup.co/admin/uploads/1133629246s2.jpg",
    category: "DEVELOPERS",
  },
  {
    src: "https://sunlightgroup.co/admin/uploads/1213367136s5.jpg",
    category: "RESIDENCY",
  },
  {
    src: "https://sunlightgroup.co/admin/uploads/935769115s1.jpg",
    category: "RESIDENCY",
  },
];

const categories = ["LETTERS", "UPVCWINDOWS", "DEVELOPERS", "RESIDENCY"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredImages = galleryData.filter(
    (img) => img.category === activeCategory
  );

  return (
    <section id="gallery" className="relative bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-sunlight-lightOrange px-5 py-2.5 rounded-full mb-4">
            <span className="h-2 w-2 bg-sunlight-orange rounded-full"></span>
            <span className="text-sm font-semibold text-sunlight-orange">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-sunlight-navy leading-tight">
            <span className="text-sunlight-orange">Project</span> Gallery
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 font-medium rounded-2xl transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-sunlight-orange text-white shadow-lg"
                  : "text-sunlight-textMuted bg-sunlight-lightOrange hover:bg-sunlight-orange/20"
              }`}
            >
              SUNGLIGHT {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={`${img.category} project`}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sunlight-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <span className="inline-block px-4 py-2 bg-sunlight-orange text-white rounded-full text-sm font-medium">
                    {img.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
