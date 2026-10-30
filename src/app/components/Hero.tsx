import Image from "next/image";
import Link from "next/link";
import BookServiceButton from "@/app/components/BookServiceButton";

const MAPS_URL =
  "https://www.google.com/maps/place/Waltz's+Garage/@41.4511459,-85.2689499,17z/data=!3m1!4b1!4m6!3m5!1s0x8816153463d78597:0x87d9051ad7e36787!8m2!3d41.4511459!4d-85.2689499!16s%2Fg%2F11p1g36sz_?hl=en&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D";

function CircularBadge() {
  const radius = 52;
  const cx = 70;
  const cy = 70;
  const circumference = 2 * Math.PI * radius;
  const pathId = "badge-text-path";
  // Arc path for text — goes around the top
  const arcPath = `M ${cx - radius} ${cy} a ${radius} ${radius} 0 1 1 ${radius * 2} 0 a ${radius} ${radius} 0 1 1 -${radius * 2} 0`;

  return (
    <svg
      viewBox="0 0 140 140"
      width="110"
      height="110"
      aria-label="Hands-On Automotive Service badge"
      className="opacity-85"
    >
      {/* Outer circle */}
      <circle cx={cx} cy={cy} r={65} fill="none" stroke="white" strokeWidth="1" opacity="0.45" />
      {/* Inner circle */}
      <circle cx={cx} cy={cy} r={58} fill="none" stroke="white" strokeWidth="0.5" opacity="0.25" />
      {/* W letter */}
      <text
        x={cx}
        y={cy + 14}
        textAnchor="middle"
        fontSize="42"
        fontFamily="var(--font-playfair), Georgia, serif"
        fill="white"
        fontWeight="bold"
      >
        W
      </text>
      {/* Circular text path */}
      <defs>
        <path id={pathId} d={arcPath} />
      </defs>
      <text fontSize="6.5" fill="white" letterSpacing="3.8" opacity="0.85">
        <textPath href={`#${pathId}`} startOffset="3%">
          HANDS-ON AUTOMOTIVE SERVICE
        </textPath>
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Waltz's Garage interior with cars on lifts"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        quality={90}
      />

      {/* Dark gradient overlay — heavier on left where text lives */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,2,2,0.82) 0%, rgba(5,2,2,0.60) 45%, rgba(5,2,2,0.22) 100%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col px-16">
        {/* Top sub-label — sits below the navbar */}
        <div className="mt-28 flex items-center gap-3">
          <span className="block w-8 h-px bg-white/55" />
          <span className="text-[10px] tracking-[0.28em] uppercase text-white/55 font-sans">
            Kendallville, Indiana &nbsp;·&nbsp; Est. In Experience
          </span>
        </div>

        {/* Main text block — vertically centered */}
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          {/* Headline */}
          <h1
            className="font-bold text-white leading-none"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(56px, 7vw, 100px)",
            }}
          >
            Good work.
          </h1>
          <h2
            className="font-bold italic text-copper leading-tight mt-1"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(56px, 7vw, 100px)",
            }}
          >
            Kept close to<br />home.
          </h2>

          {/* Body copy */}
          <p className="text-white/75 text-[15px] leading-relaxed mt-7 max-w-[320px]">
            For 25 years,{" "}
            <Link
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Waltz&apos;s Garage
            </Link>{" "}
            has been helping drivers in Kendallville take care of the vehicles
            they depend on.
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-6 mt-8">
            <BookServiceButton
              id="hero-book-service"
              className="border border-white text-white text-sm px-6 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300 font-medium cursor-pointer"
            >
              Book a service
              <span aria-hidden="true" className="text-xs">↗</span>
            </BookServiceButton>
            <Link
              href="tel:+12602157951"
              id="hero-call"
              className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors duration-200"
              aria-label="Call (260) 215-7951"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              (260) 215-7951
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-end justify-between pb-6">
          {/* Left: scroll + years */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-[0.22em] uppercase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
              Scroll to explore
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="text-white font-bold"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "26px",
                }}
              >
                25
              </span>
              <span className="text-white/50 text-[11px] tracking-wide">
                years in the automotive industry
              </span>
            </div>
          </div>

          {/* Right: circular badge */}
          <CircularBadge />
        </div>
      </div>
    </section>
  );
}
