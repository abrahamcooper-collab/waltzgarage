import Link from "next/link";
import { SERVICE_AREAS } from "@/app/data/services";

const MAPS_URL =
  "https://www.google.com/maps/place/Waltz's+Garage/@41.4511459,-85.2689499,17z/data=!3m1!4b1!4m6!3m5!1s0x8816153463d78597:0x87d9051ad7e36787!8m2!3d41.4511459!4d-85.2689499!16s%2Fg%2F11p1g36sz_?hl=en&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D";

export default function LocationSection() {
  return (
    <section id="contact" className="py-16 px-8 lg:px-20" style={{ background: "#EDE8DF" }}>
      <div className="max-w-7xl mx-auto space-y-4">

        {/* ── Card 1: Map + address ── */}
        <div
          className="flex flex-col lg:flex-row overflow-hidden"
          style={{
            border: "1px solid #C8BCAA",
            background: "#E8E2D8",
          }}
        >
          {/* Left: text */}
          <div className="p-10 lg:w-[38%] shrink-0 flex flex-col justify-center">
            <p
              className="text-[#9B8060] uppercase mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.28em" }}
            >
              COME SEE US
            </p>
            <h2
              className="font-bold text-[#2C1810] leading-tight mb-6"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(30px, 3.5vw, 46px)",
              }}
            >
              Right here in
              <br />
              <span className="italic text-[#C4845A]">Kendallville.</span>
            </h2>

            <div className="flex items-start gap-2 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0 mt-0.5"
                style={{ width: "14px", height: "14px", color: "#9B8060" }}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 0 0-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-[#4A3728]" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                701 Krueger St
                <br />
                Kendallville, IN 46755
              </div>
            </div>

            <Link
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="location-directions"
              className="inline-flex items-center gap-2 text-[#2C1810] hover:text-[#7A1D2E] transition-colors"
              style={{
                fontSize: "14px",
                borderBottom: "1px solid #2C1810",
                paddingBottom: "2px",
                width: "fit-content",
              }}
            >
              Get directions ↗
            </Link>
          </div>

          {/* Right: embedded map */}
          <div className="relative flex-1" style={{ minHeight: "280px" }}>
            <iframe
              title="Waltz's Garage location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.4587!2d-85.2689499!3d41.4511459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816153463d78597%3A0x87d9051ad7e36787!2sWaltz's%20Garage!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* "Roughly 50 miles" badge */}
            <div
              className="absolute bottom-4 right-4 text-white px-3 py-1.5"
              style={{
                background: "#6B1726",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Roughly 50 miles
            </div>
          </div>
        </div>

        {/* ── Card 2: Service areas ── */}
        <div
          className="p-10 flex flex-col lg:flex-row gap-10"
          style={{ border: "1px solid #C8BCAA", background: "#E8E2D8" }}
        >
          {/* Left: heading */}
          <div className="lg:w-[40%] shrink-0">
            <p
              className="text-[#9B8060] uppercase mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.28em" }}
            >
              CLOSE ENOUGH TO MAKE THE DRIVE
            </p>
            <h3
              className="font-bold text-[#2C1810] leading-tight mb-0"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(26px, 3vw, 38px)",
              }}
            >
              Serving Kendallville
              <br />
              <span className="italic text-[#C4845A]">and the surrounding area.</span>
            </h3>
          </div>

          {/* Right: description + tags */}
          <div className="flex-1">
            <p
              className="text-[#4A3728] leading-relaxed mb-7"
              style={{ fontSize: "14px", maxWidth: "380px" }}
            >
              Waltz&apos;s Garage welcomes drivers from nearby communities across
              northeast Indiana. If you are around the 50-mile mark, give us a
              call and we will help you find the right next step.
            </p>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="text-[#4A3728] hover:text-[#7A1D2E] hover:border-[#7A1D2E] transition-colors"
                  style={{
                    fontSize: "12px",
                    padding: "4px 12px",
                    border: "1px solid #C8BCAA",
                    background: "#EDE8DF",
                  }}
                >
                  {area.city}, {area.state}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
