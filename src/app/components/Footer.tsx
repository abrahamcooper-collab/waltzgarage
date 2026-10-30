"use client";

import Link from "next/link";
import Image from "next/image";
import { useQuote } from "@/app/context/QuoteContext";
import BusinessName, { MAPS_URL } from "@/app/components/BusinessName";


export default function Footer() {
  const { openModal } = useQuote();

  return (
    <footer style={{ background: "#180A0D", color: "#fff" }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-20">

        {/* ── Top label row ── */}
        <div className="flex justify-between items-center pt-10 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <span className="text-white/30 uppercase" style={{ fontSize: "9px", letterSpacing: "0.28em" }}>
            <BusinessName className="hover:text-white/60 transition-colors">WALTZ&apos;S GARAGE</BusinessName>
          </span>
          <span className="text-white/30 uppercase" style={{ fontSize: "9px", letterSpacing: "0.28em" }}>
            KENDALLVILLE, INDIANA
          </span>
        </div>

        {/* ── Main columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group" aria-label="Waltz's Garage Home">
              <Image
                src="/logo.jpg"
                alt=""
                width={64}
                height={48}
                className="h-12 w-auto rounded-md shrink-0"
              />
              <span
                className="text-white font-bold"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "22px",
                  letterSpacing: "0.01em",
                }}
              >
                Waltz&apos;s
                <br />
                <span style={{ fontSize: "13px", fontWeight: "400", opacity: 0.5, letterSpacing: "0.12em" }}>
                  GARAGE
                </span>
              </span>
            </Link>
            <p className="text-white/40 leading-relaxed mb-6" style={{ fontSize: "13px", maxWidth: "200px" }}>
              A local garage with 25 years in the automotive industry.
            </p>
            <Link
              href="/#contact"
              className="text-[#C4845A] hover:text-[#D9A07A] transition-colors inline-flex items-center gap-1"
              style={{ fontSize: "13px", borderBottom: "1px solid rgba(196,132,90,0.4)", paddingBottom: "2px" }}
            >
              Let&apos;s talk about your vehicle →
            </Link>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3
              className="text-white/30 uppercase mb-5"
              style={{ fontSize: "9px", letterSpacing: "0.28em" }}
            >
              SERVICES
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Auto Repair", href: "/services/auto-repair" },
                { label: "Exhaust & Fabrication", href: "/services/exhaust" },
                { label: "Brakes", href: "/services/brakes" },
                { label: "Performance", href: "/services/performance-modification" },
                { label: "Oil Change", href: "/services/oil-change" },
                { label: "Stereo & Electronics", href: "/services/stereo-electronics" },
                { label: "Maintenance", href: "/services/routine-maintenance" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/55 hover:text-white transition-colors"
                    style={{ fontSize: "14px" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h3
              className="text-white/30 uppercase mb-5"
              style={{ fontSize: "9px", letterSpacing: "0.28em" }}
            >
              SERVICE AREAS
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Kendallville, IN", href: "/service-areas/kendallville-in" },
                { label: "Fort Wayne, IN", href: "/service-areas/fort-wayne-in" },
                { label: "LaGrange, IN", href: "/service-areas/lagrange-in" },
                { label: "Warsaw, IN", href: "/service-areas/warsaw-in" },
                { label: "Albion, IN", href: "/service-areas/albion-in" },
                { label: "Avilla, IN", href: "/service-areas/avilla-in" },
                { label: "Sturgis, MI", href: "/service-areas/sturgis-mi" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/55 hover:text-white transition-colors"
                    style={{ fontSize: "14px" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3
              className="text-white/30 uppercase mb-5"
              style={{ fontSize: "9px", letterSpacing: "0.28em" }}
            >
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="tel:+12602157951"
                  id="footer-phone"
                  className="text-white/55 hover:text-white transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  (260) 215-7951
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:doug@waltzautomotivegroup.com"
                  id="footer-email"
                  className="text-white/55 hover:text-white transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  doug@waltzautomotivegroup.com
                </Link>
              </li>
              <li>
                <Link
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-address"
                  className="text-white/55 hover:text-white transition-colors leading-relaxed"
                  style={{ fontSize: "14px" }}
                >
                  701 Krueger St
                  <br />
                  Kendallville, IN 46755
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: CTA */}
          <div>
            <h3
              className="text-white/30 uppercase mb-5"
              style={{ fontSize: "9px", letterSpacing: "0.28em" }}
            >
              READY WHEN YOU ARE?
            </h3>
            <p className="text-white/45 leading-relaxed mb-6" style={{ fontSize: "13px" }}>
              Tell us what your vehicle needs. We&apos;ll take it from there.
            </p>
            <button
              onClick={() => openModal()}
              id="footer-book"
              className="inline-flex items-center gap-2 border border-white/30 text-white/80 hover:border-white hover:text-white transition-all duration-200 font-medium cursor-pointer"
              style={{ fontSize: "13px", padding: "10px 20px" }}
            >
              Book a service ↗
            </button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-white/25" style={{ fontSize: "12px" }}>
            © 2025{" "}
            <Link
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors"
            >
              Waltz&apos;s Garage
            </Link>
          </p>
          <p className="text-white/20 text-center" style={{ fontSize: "12px" }}>
            Good work. Kept close to home.
          </p>
          <Link
            href="https://upscalers.us"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-built-by"
            className="text-white/35 hover:text-white transition-colors duration-200"
            style={{ fontSize: "12px" }}
          >
            Built by <strong className="font-bold text-white/60">Upscalers</strong>
          </Link>
        </div>
      </div>
    </footer>
  );
}
