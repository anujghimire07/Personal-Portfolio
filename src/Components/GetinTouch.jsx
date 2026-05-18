import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const GetinTouch = () => {
  return (
    <div className="min-h-screen text-white px-6 md:px-24 py-24 ">

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl  text-center mb-20">
        Get in Touch
      </h1>

      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT SIDE */}
        <div className="space-y-10">


          {/* Cards */}
          <div className="space-y-6">

            {/* Email */}
            <div className="flex items-center gap-5 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400  transition-all duration-300">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">
                  anujghimire41@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-green-400  transition-all duration-300">
              <FaPhone className="text-green-400 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">
                  +977 9762791214
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-pink-400  transition-all duration-300">
              <FaMapMarkerAlt className="text-pink-400 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">
                  Tikathali, Lalitpur
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default GetinTouch;