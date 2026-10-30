import Link from "next/link";
import { MAPS_URL } from "@/app/components/BusinessName";


export default function StorySection() {
  return (
    <section id="story" className="py-24 px-8 lg:px-20" style={{ background: "#EDE8DF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-6">
          {/* Rotated side label + vertical line */}
          <div
            className="hidden lg:flex flex-col items-center shrink-0"
            style={{ width: "44px", minHeight: "230px" }}
          >
            <span
              className="text-[#9B8060]/55 whitespace-nowrap uppercase"
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
                fontSize: "8px",
                letterSpacing: "0.22em",
                marginBottom: "14px",
              }}
            >
              A LITTLE ABOUT US
            </span>
            <div
              style={{ width: "1px", flex: 1, background: "#C8BCAA", opacity: 0.65 }}
            />
          </div>

          {/* Main content */}
          <div className="flex-1 pl-0 lg:pl-6" style={{ maxWidth: "520px" }}>
            <p
              className="text-[#9B8060] uppercase mb-7"
              style={{ fontSize: "10px", letterSpacing: "0.28em" }}
            >
              THE LOCAL GARAGE DIFFERENCE
            </p>
            <h2
              className="font-bold text-[#2C1810] leading-tight mb-7"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(38px, 4.5vw, 56px)",
              }}
            >
              Experience you can feel in the{" "}
              <span className="italic text-[#C4845A]">details.</span>
            </h2>
            <p
              className="text-[#4A3728] leading-relaxed mb-9"
              style={{ fontSize: "15px", maxWidth: "360px" }}
            >
              There is something different about bringing your vehicle to a place that
              knows the neighborhood.{" "}
              <Link
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#7A1D2E] transition-colors"
              >
                Waltz&apos;s Garage
              </Link>{" "}
              is a hands-on automotive business built around 25 years of experience,
              practical knowledge, and doing the work right.
            </p>
            <Link
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2C1810] hover:text-[#7A1D2E] hover:border-[#7A1D2E] transition-colors"
              style={{
                fontSize: "14px",
                borderBottom: "1px solid #2C1810",
                paddingBottom: "2px",
              }}
            >
              Meet us at the garage →
            </Link>
          </div>

          {/* "25" stat */}
          <div className="shrink-0 flex items-baseline gap-3 lg:self-center lg:ml-auto mt-6 lg:mt-0">
            <span
              className="font-bold text-[#7A1D2E] leading-none"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(72px, 10vw, 148px)",
              }}
            >
              25
            </span>
            <div
              className="flex flex-col text-[#9B8060] uppercase leading-[1.65]"
              style={{ fontSize: "8px", letterSpacing: "0.18em" }}
            >
              <span>YEARS</span>
              <span>IN THE</span>
              <span>AUTOMOTIVE</span>
              <span>INDUSTRY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
