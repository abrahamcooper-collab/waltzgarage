/**
 * Placeholder sections — each has the correct `id` so navbar anchor links
 * scroll to them. Replace these one-by-one as you build each real section.
 */

const PLACEHOLDERS = [
  { id: "services", label: "Services" },
  { id: "story", label: "Our Story" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
  { id: "book", label: "Book a Service" },
];

export default function PlaceholderSections() {
  return (
    <>
      {PLACEHOLDERS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-[60vh] flex items-center justify-center border-b border-white/5"
          style={{ background: "#0d0908" }}
          aria-label={section.label}
        >
          <div className="text-center">
            <p
              className="text-white/20 text-xs tracking-[0.3em] uppercase mb-3"
              aria-hidden="true"
            >
              Section
            </p>
            <h2
              className="text-white/30 font-bold"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(32px, 4vw, 56px)",
              }}
            >
              {section.label}
            </h2>
            <p className="text-white/15 text-sm mt-3">Coming soon</p>
          </div>
        </section>
      ))}
    </>
  );
}
