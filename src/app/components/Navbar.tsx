"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuote } from "@/app/context/QuoteContext";
import { SERVICES, SERVICE_AREAS } from "@/app/data/services";

const DROPDOWNS = [
  {
    label: "Services",
    href: "/#services",
    items: SERVICES.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  },
  {
    label: "Service areas",
    href: "/#contact",
    items: SERVICE_AREAS.map((a) => ({
      label: `${a.city}, ${a.state}`,
      href: `/service-areas/${a.slug}`,
    })),
  },
];

const NAV_LINKS = [
  { label: "Our story", href: "/#story" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Faq", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useQuote();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const textClass = scrolled
    ? "text-[#4A3728]/80 hover:text-[#2C1810]"
    : "text-white/85 hover:text-white";

  const hamburgerColor = scrolled ? "#2C1810" : "#fff";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-20 py-4 transition-all duration-300 ${
          scrolled ? "bg-[#EDE8DF] shadow-sm" : "bg-transparent"
        }`}
      >
        {/* Logo → homepage */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Waltz's Garage — Home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={86}
            height={64}
            priority
            className="h-12 sm:h-16 w-auto rounded-md shrink-0"
          />
          <div className="flex flex-col leading-none">
            <span
              className={`font-bold text-[15px] tracking-wide transition-colors duration-300 ${
                scrolled ? "text-[#2C1810]" : "text-white"
              }`}
            >
              Waltz&apos;s
            </span>
            <span
              className={`text-[9px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled ? "text-[#8B7355]" : "text-white/60"
              }`}
            >
              Garage
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {DROPDOWNS.map((menu) => (
            <div key={menu.label} className="relative group">
              <Link
                href={menu.href}
                className={`text-sm flex items-center gap-1 transition-colors duration-200 ${textClass}`}
                aria-haspopup="true"
              >
                {menu.label}
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
                </svg>
              </Link>
              <div className="absolute left-0 top-full pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200">
                <ul className="min-w-[220px] bg-[#180A0D] py-2 shadow-xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  {menu.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-5 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${textClass}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Call us */}
          <Link
            href="tel:+12602157951"
            id="nav-call-us"
            className={`flex items-center gap-1.5 text-sm transition-colors duration-200 ${textClass}`}
            aria-label="Call Waltz's Garage at (260) 215-7951"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            Call us
          </Link>

          {/* CTA button — always maroon */}
          <button
            onClick={() => openModal()}
            id="nav-book-service"
            className="bg-maroon text-white text-sm px-5 py-2.5 flex items-center gap-2 hover:bg-maroon-hover transition-colors duration-200 font-medium cursor-pointer"
          >
            Book a service
            <span aria-hidden="true" className="text-xs">↗</span>
          </button>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => openModal()}
            className="bg-maroon text-white text-xs px-4 py-2 flex items-center gap-1.5 font-medium cursor-pointer"
          >
            Book
            <span aria-hidden="true" className="text-[10px]">↗</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={hamburgerColor} strokeWidth="2">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(20,8,10,0.5)" }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile slide-down menu ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-[45] lg:hidden transition-transform duration-300 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ background: "#180A0D", paddingTop: "72px" }}
      >
        <div className="flex flex-col px-5 sm:px-8 py-6 gap-1 max-h-[calc(100dvh-72px)] overflow-y-auto">
          {DROPDOWNS.map((menu) => (
            <details
              key={menu.label}
              className="group"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <summary
                className="text-white/80 hover:text-white py-3 text-lg flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {menu.label}
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-open:rotate-180" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
                </svg>
              </summary>
              <ul className="pb-3 pl-4 space-y-1">
                {menu.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-[15px] text-white/60 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white py-3 text-lg transition-colors"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="tel:+12602157951"
            onClick={() => setMobileOpen(false)}
            className="text-[#C4845A] py-3 flex items-center gap-2 text-lg"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
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
    </>
  );
}
