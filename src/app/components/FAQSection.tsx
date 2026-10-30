"use client";

import { useState } from "react";
import { MAPS_URL } from "@/app/components/BusinessName";


const FAQS = [
  {
    q: "Where is Waltz's Garage located?",
    a: (
      <>
        You can find us at 701 Krueger St, Kendallville, IN 46755.{" "}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[#7A1D2E] transition-colors"
        >
          Get directions →
        </a>
      </>
    ),
  },
  {
    q: "How do I get started?",
    a: "Give us a call at (260) 215-7951 or send an email to doug@waltzautomotivegroup.com. We'll get you scheduled and point you in the right direction.",
  },
  {
    q: "What kind of work do you do?",
    a: "We handle oil changes, general auto repair, exhaust, fabrication, stereo installs, performance modifications, and brakes. If you're not sure, just call — we've seen it all and we'll figure it out together.",
  },
  {
    q: "Do you work on all makes and models?",
    a: "Yes — Japanese, European, German, and domestic, old or new. If it has wheels and an engine, we can help.",
  },
  {
    q: "I'm not sure what service I need. What should I do?",
    a: "That's totally fine. Bring your vehicle in or give us a call and describe what's going on. We have 25 years of experience and we'll help you figure out the right next step.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 px-5 sm:px-8 lg:px-20" style={{ background: "#EDE8DF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: label + heading */}
          <div className="lg:w-[36%] shrink-0">
            <p
              className="text-[#9B8060] uppercase mb-6"
              style={{ fontSize: "10px", letterSpacing: "0.28em" }}
            >
              GOOD TO KNOW
            </p>
            <h2
              className="font-bold text-[#2C1810] leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(34px, 4vw, 52px)",
              }}
            >
              A few things,
              <br />
              <span className="italic text-[#C4845A]">answered.</span>
            </h2>
          </div>

          {/* Right: accordion */}
          <div className="flex-1">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  style={{ borderBottom: "1px solid #C8BCAA" }}
                >
                  <button
                    id={`faq-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="text-[#2C1810] group-hover:text-[#7A1D2E] transition-colors"
                      style={{ fontSize: "15px", fontWeight: "500" }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="shrink-0 text-[#9B8060] transition-transform duration-300"
                      style={{
                        fontSize: "18px",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-5">
                      <p
                        className="text-[#4A3728] leading-relaxed"
                        style={{ fontSize: "14px" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
