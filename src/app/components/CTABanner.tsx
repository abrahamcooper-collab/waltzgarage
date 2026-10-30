"use client";

import Link from "next/link";
import { useQuote } from "@/app/context/QuoteContext";

export default function CTABanner() {
  const { openModal } = useQuote();

  return (
    <section id="book" className="py-20 px-8 lg:px-20" style={{ background: "#6B1726" }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: heading */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span style={{ width: "28px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
            <span
              className="text-white/45 uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.28em" }}
            >
              YOUR NEXT STOP
            </span>
          </div>
          <h2
            className="font-bold text-white leading-tight"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(32px, 4vw, 54px)",
            }}
          >
            Let&apos;s get your
            <br />
            <span className="italic text-[#C4845A]">vehicle taken care of.</span>
          </h2>
        </div>

        {/* Right: CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 shrink-0">
          <button
            onClick={() => openModal()}
            id="cta-banner-book"
            className="border border-white text-white px-6 py-3 flex items-center gap-2 font-medium hover:bg-white hover:text-[#6B1726] transition-all duration-300 cursor-pointer"
            style={{ fontSize: "14px" }}
          >
            Book a service <span>↗</span>
          </button>
          <div>
            <p
              className="text-white/40 uppercase mb-1"
              style={{ fontSize: "9px", letterSpacing: "0.2em" }}
            >
              PREFER TO TALK?
            </p>
            <Link
              href="tel:+12602157951"
              id="cta-banner-phone"
              className="text-white flex items-center gap-2 hover:text-white/80 transition-colors"
              style={{ fontSize: "15px", fontWeight: "500" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ width: "15px", height: "15px" }}
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
      </div>
    </section>
  );
}
