interface ContactLink {
  label: string;
  href: string;
  display: string;
  icon: string;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:john@example.com",
    display: "john@example.com",
    icon: "✉",
  },
  {
    label: "GitHub",
    href: "https://github.com/username",
    display: "github.com/username",
    icon: "⌥",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/johndoe",
    display: "linkedin.com/in/johndoe",
    icon: "in",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50/60 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact</h2>
        <p className="text-gray-400 mb-12">Let&apos;s connect</p>

        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-500 leading-relaxed">
              I&apos;m always open to new opportunities, collaborations, or just a good
              conversation. Feel free to reach out through any of the links below —
              I&apos;ll get back to you as soon as I can.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-sm text-gray-400 group-hover:border-gray-500 group-hover:text-gray-700 transition-colors shrink-0">
                  {link.icon}
                </span>
                <div>
                  <p className="text-xs text-gray-400 leading-none mb-1">{link.label}</p>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    {link.display}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}