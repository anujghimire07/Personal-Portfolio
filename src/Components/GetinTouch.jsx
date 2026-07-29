import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const GetinTouch = () => {
  return (
    <div className="min-h-screen px-6 md:px-24 py-24">
      <h1 className="text-4xl md:text-6xl text-center mb-20">
        Get in Touch
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-5 p-5 rounded-xl border theme-border theme-surface backdrop-blur-md hover:border-cyan-400 transition-all duration-300">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <p className="theme-text-muted text-sm">Email</p>
                <p className="font-medium">anujghimire41@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 rounded-xl border theme-border theme-surface backdrop-blur-md hover:border-green-400 transition-all duration-300">
              <FaPhone className="text-green-400 text-2xl" />
              <div>
                <p className="theme-text-muted text-sm">Phone</p>
                <p className="font-medium">+977 9762791214</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 rounded-xl border theme-border theme-surface backdrop-blur-md hover:border-pink-400 transition-all duration-300">
              <FaMapMarkerAlt className="text-pink-400 text-2xl" />
              <div>
                <p className="theme-text-muted text-sm">Location</p>
                <p className="font-medium">Tikathali, Lalitpur</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
