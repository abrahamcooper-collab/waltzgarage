"use client";

import Link from "next/link";
import { useQuote } from "@/app/context/QuoteContext";
import { SERVICES, SERVICE_AREAS } from "@/app/data/services";
import type { ServiceAreaData } from "@/app/data/services";
import BusinessName, { MAPS_URL, withBusinessLinks } from "@/app/components/BusinessName";


export default function ServiceAreaContent({
  area,
}: {
  area: ServiceAreaData;
}) {
  const { openModal } = useQuote();

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[65vh] flex items-end overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #180A0D 0%, #2C1810 50%, #180A0D 100%)",
        }}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent circle */}
        <div
          className="absolute top-1/2 -right-40 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #7A1D2E 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-20 pb-16 pt-40">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/"
              className="text-white/40 hover:text-white/70 transition-colors"
              style={{ fontSize: "12px", letterSpacing: "0.08em" }}
            >
              Home
            </Link>
            <span className="text-white/25" style={{ fontSize: "11px" }}>
              /
            </span>
            <span
              className="text-white/40"
              style={{ fontSize: "12px", letterSpacing: "0.08em" }}
            >
              Service Areas
            </span>
            <span className="text-white/25" style={{ fontSize: "11px" }}>
              /
            </span>
            <span
              className="text-[#C4845A]"
              style={{ fontSize: "12px", letterSpacing: "0.08em" }}
            >
              {area.city}, {area.state}
            </span>
          </div>

          {/* Distance badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6"
            style={{
              background: "rgba(122,29,46,0.2)",
              border: "1px solid rgba(122,29,46,0.3)",
              borderRadius: "2px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C4845A"
              strokeWidth="1.5"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span
              className="text-[#C4845A]"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              {area.distanceNote}
            </span>
          </div>

          <h1
            className="font-bold text-white leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(36px, 5vw, 64px)",
            }}
          >
            Auto Repair for
            <br />
            <span className="italic text-[#C4845A]">
              {area.city}, {area.state}
            </span>
          </h1>
          <p
            className="text-white/55 max-w-xl leading-relaxed mb-8"
            style={{ fontSize: "16px", lineHeight: "1.7" }}
          >
            {area.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => openModal()}
              className="bg-[#6B1726] text-white px-7 py-3.5 flex items-center gap-2 font-medium hover:bg-[#8A1F32] transition-all duration-200 cursor-pointer"
              style={{ fontSize: "14px" }}
            >
              Book a service <span>↗</span>
            </button>
            <Link
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white/80 px-7 py-3.5 flex items-center gap-2 font-medium hover:border-white hover:text-white transition-all duration-200"
              style={{ fontSize: "14px" }}
            >
              Get directions →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          ABOUT THIS AREA
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#EDE8DF" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left */}
            <div className="lg:w-[40%] shrink-0">
              <p
                className="text-[#9B8060] uppercase mb-5"
                style={{ fontSize: "10px", letterSpacing: "0.28em" }}
              >
                SERVING {area.city.toUpperCase()}
              </p>
              <h2
                className="font-bold text-[#2C1810] leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                }}
              >
                Your trusted garage,
                <br />
                <span className="italic text-[#C4845A]">
                  close to home.
                </span>
              </h2>

              {/* Contact card */}
              <div
                className="p-6"
                style={{
                  background: "#F5F0E6",
                  border: "1px solid #C8BCAA",
                }}
              >
                <h3
                  className="text-[#2C1810] font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "16px",
                  }}
                >
                  <BusinessName className="hover:text-[#7A1D2E] transition-colors" />
                </h3>
                <div className="space-y-2">
                  <p
                    className="text-[#4A3728]"
                    style={{ fontSize: "13px" }}
                  >
                    701 Krueger St, Kendallville, IN 46755
                  </p>
                  <Link
                    href="tel:+12602157951"
                    className="text-[#7A1D2E] hover:text-[#961f35] transition-colors block"
                    style={{ fontSize: "13px", fontWeight: "500" }}
                  >
                    (260) 215-7951
                  </Link>
                  <Link
                    href="mailto:doug@waltzautomotivegroup.com"
                    className="text-[#7A1D2E] hover:text-[#961f35] transition-colors block"
                    style={{ fontSize: "13px" }}
                  >
                    doug@waltzautomotivegroup.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex-1">
              <p
                className="text-[#4A3728] leading-relaxed mb-8"
                style={{ fontSize: "15px", lineHeight: "1.8" }}
              >
                {withBusinessLinks(area.description)}
              </p>

              {/* Embedded map */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "16/9", border: "1px solid #C8BCAA" }}
              >
                <iframe
                  src={`https://maps.google.com/maps?saddr=${area.mapQuery.split('+to+')[0]}&daddr=701+Krueger+St,+Kendallville,+IN+46755&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Directions from ${area.city} to Waltz's Garage`}
                />
              </div>
              <p
                className="text-[#9B8060] mt-3"
                style={{ fontSize: "12px" }}
              >
                {area.distanceNote} • Easy drive to our Kendallville shop
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SERVICES WE OFFER
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#180A0D" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">
          <p
            className="text-[#9B8060] uppercase mb-5"
            style={{ fontSize: "10px", letterSpacing: "0.28em" }}
          >
            SERVICES FOR {area.city.toUpperCase()}
          </p>
          <h2
            className="font-bold text-white leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 42px)",
            }}
          >
            Everything your vehicle needs,
            <br />
            <span className="italic text-[#C4845A]">all in one shop.</span>
          </h2>
          <p
            className="text-white/45 max-w-lg leading-relaxed mb-12"
            style={{ fontSize: "14px", lineHeight: "1.7" }}
          >
            {area.city} drivers can count on <BusinessName /> for the full
            range of automotive services. Here&apos;s what we offer:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="p-6">
                  <h3
                    className="text-white font-bold mb-2 group-hover:text-[#C4845A] transition-colors"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "18px",
                    }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="text-white/45 leading-relaxed mb-4"
                    style={{ fontSize: "13px", lineHeight: "1.6" }}
                  >
                    {s.tagline}
                  </p>
                  <span
                    className="text-[#C4845A] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{
                      fontSize: "13px",
                      borderBottom: "1px solid rgba(196,132,90,0.3)",
                      paddingBottom: "2px",
                    }}
                  >
                    Learn more →
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C4845A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          OTHER SERVICE AREAS
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#EDE8DF" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">
          <p
            className="text-[#9B8060] uppercase mb-5"
            style={{ fontSize: "10px", letterSpacing: "0.28em" }}
          >
            ALSO SERVING
          </p>
          <h2
            className="font-bold text-[#2C1810] leading-tight mb-12"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(28px, 3vw, 40px)",
            }}
          >
            Other areas{" "}
            <span className="italic text-[#C4845A]">we serve.</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICE_AREAS.filter((a) => a.slug !== area.slug).map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="group text-center py-5 px-4 hover:bg-[#F5F0E6] transition-colors"
                style={{ border: "1px solid #C8BCAA" }}
              >
                <p
                  className="text-[#2C1810] font-bold group-hover:text-[#7A1D2E] transition-colors mb-1"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "16px",
                  }}
                >
                  {a.city}
                </p>
                <p
                  className="text-[#9B8060]"
                  style={{ fontSize: "12px" }}
                >
                  {a.state} • {a.distanceNote.replace("~", "").replace(" from " + a.city, "")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 px-5 sm:px-8 lg:px-20"
        style={{ background: "#6B1726" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  background: "rgba(255,255,255,0.3)",
                }}
              />
              <span
                className="text-white/45 uppercase"
                style={{ fontSize: "9px", letterSpacing: "0.28em" }}
              >
                READY?
              </span>
            </div>
            <h2
              className="font-bold text-white leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(30px, 4vw, 50px)",
              }}
            >
              {area.city} driver?
              <br />
              <span className="italic text-[#C4845A]">
                We&apos;re ready for you.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 shrink-0">
            <button
              onClick={() => openModal()}
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
                className="text-white flex items-center gap-2 hover:text-white/80 transition-colors"
                style={{ fontSize: "15px", fontWeight: "500" }}
              >
                (260) 215-7951
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
