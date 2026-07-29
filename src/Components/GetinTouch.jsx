import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const GetinTouch = () => {
  const info = [
    {
      icon: <FaEnvelope size={18} />,
      label: "Email",
      value: "anujghimire41@gmail.com",
      href: "mailto:anujghimire41@gmail.com",
      color: "text-[var(--accent)]",
      borderHover: "hover:border-[var(--accent)]",
    },
    {
      icon: <FaPhone size={18} />,
      label: "Phone",
      value: "+977 9762791214",
      href: "tel:+9779762791214",
      color: "text-emerald-400",
      borderHover: "hover:border-emerald-400",
    },
    {
      icon: <FaMapMarkerAlt size={18} />,
      label: "Location",
      value: "Tikathali, Lalitpur",
      href: null,
      color: "text-amber-400",
      borderHover: "hover:border-amber-400",
    },
  ];

  return (
    <div className="px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[var(--text-base)]">
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Have a project in mind or just want to say hi? I&rsquo;m always
              open to new opportunities and collaborations.
            </p>

            <div className="space-y-4">
              {info.map((item) => {
                const content = (
                  <div
                    className={`flex items-center gap-5 p-5 rounded-2xl border border-[var(--border-base)] bg-[var(--bg-surface)] ${item.borderHover} transition-all duration-300 cursor-pointer`}
                  >
                    <div className={`${item.color}`}>{item.icon}</div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-[var(--text-base)] mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
