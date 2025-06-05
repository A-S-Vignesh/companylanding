import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-sunlight-lightOrange px-5 py-2.5 rounded-full mb-4">
            <span className="h-2 w-2 bg-sunlight-orange rounded-full"></span>
            <span className="text-sm font-semibold text-sunlight-orange">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-sunlight-navy leading-tight">
            Get in <span className="text-sunlight-orange">Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-sunlight-lightOrange rounded-2xl text-sunlight-orange">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sunlight-navy mb-2">
                  Headquarters
                </h3>
                <p className="text-sunlight-textMuted leading-relaxed">
                  SR Plaza, 2<sup>nd</sup> Floor, No.98,
                  <br />
                  Velachery Main Road,
                  <br />
                  Sembakkam, Chennai-73
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-sunlight-lightOrange rounded-2xl text-sunlight-orange">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sunlight-navy mb-2">
                  Phone Numbers
                </h3>
                <p className="text-sunlight-textMuted">044-2228 2277</p>
                <p className="text-sunlight-textMuted">+91 98414 25176</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-sunlight-lightOrange rounded-2xl text-sunlight-orange">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sunlight-navy mb-2">
                  Email Addresses
                </h3>
                <p className="text-sunlight-textMuted">
                  admin@sunlightgroup.co
                </p>
                <p className="text-sunlight-textMuted">
                  marketing@sunlightgroup.co
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-3xl shadow-2xl border border-sunlight-lightOrange">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-sunlight-navy mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Anderson"
                  className="w-full px-4 py-3 border border-sunlight-lightOrange rounded-xl focus:ring-2 focus:ring-sunlight-orange focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sunlight-navy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-sunlight-lightOrange rounded-xl focus:ring-2 focus:ring-sunlight-orange focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sunlight-navy mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-sunlight-lightOrange rounded-xl focus:ring-2 focus:ring-sunlight-orange focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-sunlight-orange hover:bg-sunlight-darkOrange text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
