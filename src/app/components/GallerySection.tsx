import Image from "next/image";

const PHOTOS = [
  { src: "/images/general/IMG_7115.jpeg", caption: "Hands-on expertise",  num: "01", position: "object-center" },
  { src: "/images/general/a.jpeg", caption: "Careful diagnosis",   num: "02", position: "object-center" },
  { src: "/images/brakes/IMG_6994.jpeg", caption: "Work in progress",    num: "03", position: "object-center" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-8 lg:px-20" style={{ background: "#EDE8DF" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p
              className="text-[#9B8060] uppercase mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.28em" }}
            >
              INSIDE THE SHOP
            </p>
            <h2
              className="font-bold text-[#2C1810] leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(36px, 4.5vw, 56px)",
              }}
            >
              Work that speaks
              <br />
              <span className="italic text-[#C4845A]">for itself.</span>
            </h2>
          </div>
          <p
            className="text-[#4A3728] leading-relaxed lg:max-w-xs"
            style={{ fontSize: "14px" }}
          >
            A look at the people, vehicles, and hands-on work that make up a day
            at Waltz&apos;s Garage.
          </p>
        </div>

        {/* Photo grid */}
        <div className="flex flex-col lg:flex-row gap-3" style={{ height: "440px" }}>
          {/* Large left image */}
          <div className="relative flex-1 overflow-hidden" style={{ minWidth: 0 }}>
            <Image
              src={PHOTOS[0].src}
              alt={PHOTOS[0].caption}
              fill
              className={`object-cover ${PHOTOS[0].position}`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(5,2,2,0.65) 0%, transparent 45%)",
              }}
            />
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <span
                className="text-white/50"
                style={{ fontSize: "10px", marginRight: "8px" }}
              >
                {PHOTOS[0].num}
              </span>
              <span style={{ fontSize: "12px" }}>{PHOTOS[0].caption}</span>
            </div>
          </div>

          {/* Right column — two stacked images */}
          <div className="flex flex-col gap-3 lg:w-[40%] shrink-0">
            {/* Top right */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src={PHOTOS[1].src}
                alt={PHOTOS[1].caption}
                fill
                className={`object-cover ${PHOTOS[1].position}`}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,2,2,0.65) 0%, transparent 45%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <span
                  className="text-white/50"
                  style={{ fontSize: "10px", marginRight: "8px" }}
                >
                  {PHOTOS[1].num}
                </span>
                <span style={{ fontSize: "12px" }}>{PHOTOS[1].caption}</span>
              </div>
            </div>

            {/* Bottom right */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src={PHOTOS[2].src}
                alt={PHOTOS[2].caption}
                fill
                className={`object-cover ${PHOTOS[2].position}`}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,2,2,0.65) 0%, transparent 45%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <span
                  className="text-white/50"
                  style={{ fontSize: "10px", marginRight: "8px" }}
                >
                  {PHOTOS[2].num}
                </span>
                <span style={{ fontSize: "12px" }}>{PHOTOS[2].caption}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
