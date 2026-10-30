const STEPS = [
  {
    num: "01",
    title: "Tell Us What You Need",
    desc: "Start with a call or a simple service request.",
  },
  {
    num: "02",
    title: "Choose Your Service",
    desc: "We'll help you find the right place to begin.",
  },
  {
    num: "03",
    title: "Schedule Your Visit",
    desc: "Pick the next step that works for you.",
  },
  {
    num: "04",
    title: "Get Back On The Road",
    desc: "Feel good about what comes next.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-8 lg:px-20" style={{ background: "#EDE8DF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left: label + heading */}
          <div className="lg:w-[38%] shrink-0">
            <p
              className="text-[#9B8060] uppercase mb-7"
              style={{ fontSize: "10px", letterSpacing: "0.28em" }}
            >
              THE EASY PART
            </p>
            <h2
              className="font-bold text-[#2C1810] leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(30px, 3.5vw, 48px)",
              }}
            >
              From &ldquo;what&rsquo;s that sound?&rdquo; to{" "}
              <span className="italic text-[#C4845A]">back on the road.</span>
            </h2>
          </div>

          {/* Right: 2×2 step grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {STEPS.map((step, i) => {
                const isLeft = i % 2 === 0;
                const isTop = i < 2;
                return (
                  <div
                    key={step.num}
                    className="py-6 sm:py-8"
                    style={{
                      paddingLeft: isLeft ? "0" : "0",
                      paddingRight: "0",
                      borderBottom: "1px solid #C8BCAA",
                    }}
                  >
                    <div
                      className="sm:hidden-none"
                      style={{
                        paddingLeft: !isLeft ? "20px" : "0",
                        paddingRight: isLeft ? "20px" : "0",
                      }}
                    >
                      {/* Step number + title row with dotted underline */}
                      <div
                        className="flex items-center gap-2 pb-2 mb-3"
                        style={{ borderBottom: "1px dotted #C8BCAA" }}
                      >
                        <span
                          className="text-[#9B8060] shrink-0"
                          style={{ fontSize: "11px", letterSpacing: "0.1em" }}
                        >
                          {step.num}
                        </span>
                        <span className="text-[#9B8060]" style={{ fontSize: "10px" }}>
                          •
                        </span>
                        <span
                          className="font-bold text-[#2C1810]"
                          style={{
                            fontFamily: "var(--font-playfair), Georgia, serif",
                            fontSize: "15px",
                          }}
                        >
                          {step.title}
                        </span>
                      </div>
                      <p className="text-[#6B5540]" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
