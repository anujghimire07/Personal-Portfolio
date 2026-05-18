import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzdwpakz");

  if (state.succeeded) {
    return (
      <p className="text-green-400 text-lg font-medium">
       Thank you! I’ll get back to you soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
    >

      <h2 className="text-2xl  text-white mb-4">
        Send Message
      </h2>

      {/* NAME */}
      <div>
        <label className="text-sm text-gray-300">NAME</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Henry"
          required
          className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
        />
        <ValidationError prefix="name" field="name" errors={state.errors} />
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-sm text-gray-300">EMAIL</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-sm text-gray-300">MESSAGE</label>
        <textarea
          id="message"
          name="message"
          placeholder="Reason for contact?"
          className="w-full mt-2 px-4 py-3 h-32 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 rounded-lg bg-white text-black font-semibold transition-all duration-300 disabled:opacity-50"
      >
        Submit
      </button>

    </form>
  );
}

export default ContactForm;