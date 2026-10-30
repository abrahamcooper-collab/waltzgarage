"use client";

import Image from "next/image";
import { useState } from "react";
import { useQuote } from "@/app/context/QuoteContext";


const SERVICES = [
  {
    id: "auto-repair",
    name: "Auto Repair",
    description:
      "From a strange sound to a stubborn warning light, bring us what your vehicle is telling you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    id: "exhaust",
    name: "Exhaust & Fabrication",
    description:
      "Custom exhaust systems and metal fabrication work, done right in Kendallville.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    id: "brakes",
    name: "Brakes",
    description:
      "Stop safely. We inspect, repair, and replace brake systems on all makes and models.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
      </svg>
    ),
  },
  {
    id: "customization",
    name: "Performance Modification",
    description:
      "Upgrades and builds that make your vehicle perform exactly the way you want.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    id: "oil-change",
    name: "Oil Change",
    description:
      "Quick, clean, and done right. Keep your engine running smooth and protected.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    id: "electronics",
    name: "Stereo & Electronics",
    description:
      "Custom stereo installs and electronic diagnostics for all modern vehicles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
  },
  {
    id: "maintenance",
    name: "Routine Maintenance",
    description:
      "Stay ahead of problems. Regular care that keeps your vehicle in peak condition.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
];

const VEHICLE_NEEDS = [
  { icon: "⚠", label: "Something isn't working", serviceId: "auto-repair" },
  { icon: "⚙", label: "Routine maintenance", serviceId: "maintenance" },
  { icon: "◎", label: "Brakes", serviceId: "brakes" },
  { icon: "⚙", label: "Transmission", serviceId: "transmission" },
  { icon: "✦", label: "Customization", serviceId: "customization" },
  { icon: "⚡", label: "Electronics", serviceId: "electronics" },
  { icon: "?", label: "I'm not sure", serviceId: "not-sure" },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];
  const { openModal } = useQuote();

  return (
    <section id="services" style={{ background: "#EDE8DF" }}>
      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 pt-20 lg:pt-28 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p
              className="text-[#9B8060] uppercase mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.28em" }}
            >
              WHAT WE DO
            </p>
            <h2
              className="font-bold text-[#2C1810] leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(36px, 4.5vw, 56px)",
              }}
            >
              Care for the car.
              <br />
              <span className="italic text-[#C4845A]">Care for the driver.</span>
            </h2>
          </div>
          <p
            className="text-[#4A3728] leading-relaxed lg:max-w-xs"
            style={{ fontSize: "14px" }}
          >
            From everyday maintenance to the unexpected, we offer the services
            that keep Kendallville moving.
          </p>
        </div>
      </div>

      {/* ── Service list + image panel ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 pb-0">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Service list */}
          <div className="lg:w-[46%] shrink-0">
            {SERVICES.map((svc, i) => (
              <button
                key={svc.id}
                id={`service-${svc.id}`}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                className="w-full flex items-center gap-4 py-4 text-left transition-colors group"
                style={{
                  borderBottom: "1px solid #C8BCAA",
                  color: activeIndex === i ? "#2C1810" : "#4A3728",
                }}
              >
                <span
                  style={{
                    color: activeIndex === i ? "#7A1D2E" : "#9B8060",
                  }}
                  className="transition-colors shrink-0"
                >
                  {svc.icon}
                </span>
                <span
                  className="flex-1 transition-colors"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "16px",
                    fontWeight: activeIndex === i ? "600" : "400",
                  }}
                >
                  {svc.name}
                </span>
                {activeIndex === i && (
                  <span className="text-[#7A1D2E] text-sm">↗</span>
                )}
              </button>
            ))}
          </div>

          {/* Image panel */}
          <div
            className="lg:flex-1 relative overflow-hidden"
            style={{ minHeight: "400px" }}
          >
            <Image
              src="/hero.jpg"
              alt={active.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(5,2,2,0.88) 0%, rgba(5,2,2,0.3) 50%, rgba(5,2,2,0.0) 100%)",
              }}
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p
                className="text-white/50 mb-2"
                style={{ fontSize: "11px", letterSpacing: "0.1em" }}
              >
                {String(activeIndex + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
              </p>
              <h3
                className="font-bold text-white leading-tight mb-2"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                }}
              >
                {active.name}
              </h3>
              <p
                className="text-white/75 mb-4"
                style={{ fontSize: "13px", maxWidth: "320px", lineHeight: "1.6" }}
              >
                {active.description}
              </p>
              <a
                href={`/services/${active.id === "customization" ? "performance-modification" : active.id === "oil-change" ? "oil-change" : active.id === "electronics" ? "stereo-electronics" : active.id === "maintenance" ? "routine-maintenance" : active.id}`}
                className="text-white inline-flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer"
                style={{
                  fontSize: "13px",
                  background: "none",
                  border: "none",
                  borderBlockEnd: "1px solid rgba(255,255,255,0.5)",
                  paddingBottom: "2px",
                }}
              >
                Explore this service →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── "What does your vehicle need?" maroon card ── */}
      <div
        className="mt-16 mx-8 lg:mx-20 mb-0 rounded-none"
        style={{ background: "#6B1726" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 py-12 flex flex-col lg:flex-row gap-12">
          {/* Left: heading */}
          <div className="lg:w-[36%] shrink-0">
            <div className="flex items-center gap-3 mb-5">
              <span style={{ width: "24px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
              <span
                className="text-white/40 uppercase"
                style={{ fontSize: "9px", letterSpacing: "0.26em" }}
              >
                A SIMPLE PLACE TO START
              </span>
            </div>
            <h3
              className="font-bold text-white leading-tight mb-5"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(26px, 3vw, 38px)",
              }}
            >
              What does your{" "}
              <span className="italic text-[#C4845A]">vehicle need?</span>
            </h3>
            <p className="text-white/55" style={{ fontSize: "14px", lineHeight: "1.65" }}>
              Not sure which service fits? Tell us what is going on and we&apos;ll
              point you in the right direction.
            </p>
          </div>

          {/* Right: category grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {VEHICLE_NEEDS.map((need, i) => (
                <button
                  key={i}
                  onClick={() => openModal(need.serviceId)}
                  className="flex items-center justify-between py-4 text-white/80 hover:text-white transition-colors group cursor-pointer text-left"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#C4845A] text-sm w-5 text-center">
                      {need.icon}
                    </span>
                    <span style={{ fontSize: "14px" }}>{need.label}</span>
                  </div>
                  <span className="text-white/40 group-hover:text-white/80 transition-colors">›</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom spacer */}
      <div className="pb-0" />
    </section>
  );
}
