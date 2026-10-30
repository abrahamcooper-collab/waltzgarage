"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuote } from "@/app/context/QuoteContext";
import { SERVICES } from "@/app/data/services";
import type { ServiceData } from "@/app/data/services";
import { withBusinessLinks } from "@/app/components/BusinessName";

export default function ServicePageContent({
  service,
}: {
  service: ServiceData;
}) {
  const { openModal } = useQuote();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background image */}
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(5,2,2,0.92) 0%, rgba(5,2,2,0.55) 40%, rgba(5,2,2,0.15) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 lg:px-20 pb-16 pt-40">
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
            <Link
              href="/#services"
              className="text-white/40 hover:text-white/70 transition-colors"
              style={{ fontSize: "12px", letterSpacing: "0.08em" }}
            >
              Services
            </Link>
            <span className="text-white/25" style={{ fontSize: "11px" }}>
              /
            </span>
            <span
              className="text-[#C4845A]"
              style={{ fontSize: "12px", letterSpacing: "0.08em" }}
            >
              {service.name}
            </span>
          </div>

          <h1
            className="font-bold text-white leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(40px, 5.5vw, 68px)",
            }}
          >
            {service.name}
          </h1>
          <p
            className="text-white/65 max-w-xl leading-relaxed mb-8"
            style={{ fontSize: "16px", lineHeight: "1.7" }}
          >
            {service.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => openModal(service.slug)}
              className="bg-[#6B1726] text-white px-7 py-3.5 flex items-center gap-2 font-medium hover:bg-[#8A1F32] transition-all duration-200 cursor-pointer"
              style={{ fontSize: "14px" }}
            >
              Book this service <span>↗</span>
            </button>
            <Link
              href="tel:+12602157951"
              className="border border-white/30 text-white/80 px-7 py-3.5 flex items-center gap-2 font-medium hover:border-white hover:text-white transition-all duration-200"
              style={{ fontSize: "14px" }}
            >
              Call (260) 215-7951
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          ABOUT THIS SERVICE
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#EDE8DF" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left */}
            <div className="lg:w-[40%] shrink-0">
              <p
                className="text-[#9B8060] uppercase mb-5"
                style={{ fontSize: "10px", letterSpacing: "0.28em" }}
              >
                ABOUT THIS SERVICE
              </p>
              <h2
                className="font-bold text-[#2C1810] leading-tight"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(30px, 3.5vw, 44px)",
                }}
              >
                What to expect
                <br />
                <span className="italic text-[#C4845A]">from us.</span>
              </h2>
            </div>

            {/* Right */}
            <div className="flex-1">
              <p
                className="text-[#4A3728] leading-relaxed mb-8"
                style={{ fontSize: "15px", lineHeight: "1.8" }}
              >
                {withBusinessLinks(service.longDescription)}
              </p>
              <p
                className="text-[#4A3728] leading-relaxed"
                style={{ fontSize: "15px", lineHeight: "1.8" }}
              >
                {withBusinessLinks(service.description)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FEATURES / WHAT WE DO
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#180A0D" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left */}
            <div className="lg:w-[38%] shrink-0">
              <p
                className="text-[#9B8060] uppercase mb-5"
                style={{ fontSize: "10px", letterSpacing: "0.28em" }}
              >
                WHAT&apos;S INCLUDED
              </p>
              <h2
                className="font-bold text-white leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(28px, 3vw, 40px)",
                }}
              >
                Services &{" "}
                <span className="italic text-[#C4845A]">capabilities.</span>
              </h2>
              <p
                className="text-white/50 leading-relaxed mb-8"
                style={{ fontSize: "14px", lineHeight: "1.7" }}
              >
                Everything we offer under {service.name.toLowerCase()}, handled
                with 25 years of experience.
              </p>
              <button
                onClick={() => openModal(service.slug)}
                className="border border-white/30 text-white/80 px-6 py-3 flex items-center gap-2 font-medium hover:border-white hover:text-white transition-all duration-200 cursor-pointer"
                style={{ fontSize: "13px" }}
              >
                Request a quote <span>↗</span>
              </button>
            </div>

            {/* Right: feature grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-5"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      className="text-[#C4845A] shrink-0 mt-0.5"
                      style={{ fontSize: "14px" }}
                    >
                      ✦
                    </span>
                    <span
                      className="text-white/75"
                      style={{ fontSize: "14px", lineHeight: "1.5" }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          GALLERY
      ════════════════════════════════════════════════════════════════ */}
      {service.galleryImages.length > 0 && (
        <section style={{ background: "#EDE8DF" }} className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <p
              className="text-[#9B8060] uppercase mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.28em" }}
            >
              OUR WORK
            </p>
            <h2
              className="font-bold text-[#2C1810] leading-tight mb-12"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(28px, 3vw, 40px)",
              }}
            >
              See it{" "}
              <span className="italic text-[#C4845A]">in action.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`${service.name} work ${i + 1}`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(107,23,38,0.4) 0%, transparent 60%)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════════════ */}
      {service.faqs.length > 0 && (
        <section style={{ background: "#EDE8DF" }} className="pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <div
              className="pt-16"
              style={{ borderTop: "1px solid #C8BCAA" }}
            >
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left */}
                <div className="lg:w-[36%] shrink-0">
                  <p
                    className="text-[#9B8060] uppercase mb-5"
                    style={{ fontSize: "10px", letterSpacing: "0.28em" }}
                  >
                    COMMON QUESTIONS
                  </p>
                  <h2
                    className="font-bold text-[#2C1810] leading-tight"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "clamp(28px, 3vw, 40px)",
                    }}
                  >
                    {service.name}{" "}
                    <span className="italic text-[#C4845A]">FAQ.</span>
                  </h2>
                </div>

                {/* Right: accordion */}
                <div className="flex-1">
                  {service.faqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div
                        key={i}
                        style={{ borderBottom: "1px solid #C8BCAA" }}
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : i)}
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
                              transform: isOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
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
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════
          OTHER SERVICES
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#180A0D" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <p
            className="text-[#9B8060] uppercase mb-5"
            style={{ fontSize: "10px", letterSpacing: "0.28em" }}
          >
            MORE SERVICES
          </p>
          <h2
            className="font-bold text-white leading-tight mb-12"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(28px, 3vw, 40px)",
            }}
          >
            Explore our other{" "}
            <span className="italic text-[#C4845A]">services.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.slug !== service.slug)
              .slice(0, 6)
              .map((s) => (
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
                  {/* Hover accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C4845A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 px-8 lg:px-20"
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
              Let&apos;s get your
              <br />
              <span className="italic text-[#C4845A]">
                {service.name.toLowerCase()} handled.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 shrink-0">
            <button
              onClick={() => openModal(service.slug)}
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
