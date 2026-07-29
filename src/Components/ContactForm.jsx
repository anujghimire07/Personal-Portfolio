import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzdwpakz");

  if (state.succeeded) {
    return (
      <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-center">
        <p className="text-emerald-400 text-lg font-medium">
          Thank you! I&rsquo;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 p-8 rounded-2xl border border-[var(--border-base)] bg-[var(--bg-surface)]"
    >
      <h3 className="text-xl font-semibold text-[var(--text-base)] mb-2">
        Send a Message
      </h3>

      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Henry"
          required
          className="w-full mt-2 px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-base)] text-[var(--text-base)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
        />
        <ValidationError prefix="name" field="name" errors={state.errors} />
      </div>

      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="w-full mt-2 px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-base)] text-[var(--text-base)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          className="w-full mt-2 px-4 py-3 h-32 rounded-xl bg-[var(--bg-input)] border border-[var(--border-base)] text-[var(--text-base)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none"
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
        className="w-full py-3 rounded-xl bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50 shadow-lg shadow-[var(--accent-glow)]"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
