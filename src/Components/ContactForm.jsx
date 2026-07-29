import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzdwpakz");

  if (state.succeeded) {
    return (
      <p className="text-green-400 text-lg font-medium">
        Thank you! I&rsquo;ll get back to you soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-8 rounded-2xl border theme-border theme-surface backdrop-blur-md"
    >
      <h2 className="text-2xl mb-4">Send Message</h2>

      <div>
        <label className="text-sm theme-text-secondary">NAME</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Henry"
          required
          className="w-full mt-2 px-4 py-3 rounded-lg theme-input border theme-border focus:outline-none focus:border-cyan-400"
        />
        <ValidationError prefix="name" field="name" errors={state.errors} />
      </div>

      <div>
        <label className="text-sm theme-text-secondary">EMAIL</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="w-full mt-2 px-4 py-3 rounded-lg theme-input border theme-border focus:outline-none focus:border-cyan-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label className="text-sm theme-text-secondary">MESSAGE</label>
        <textarea
          id="message"
          name="message"
          placeholder="Reason for contact?"
          className="w-full mt-2 px-4 py-3 h-32 rounded-lg theme-input border theme-border focus:outline-none focus:border-cyan-400"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 rounded-lg theme-inverse theme-text-inverse font-semibold transition-all duration-300 disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
