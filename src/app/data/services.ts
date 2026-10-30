/* ── Service & Service-Area data ────────────────────────────────────── */

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  faqs: { q: string; a: string }[];
  image: string;         // hero image path
  galleryImages: string[];
}

export interface ServiceAreaData {
  slug: string;
  city: string;
  state: string;
  tagline: string;
  description: string;
  distanceNote: string;
  mapQuery: string;      // google maps embed query
}

/* ── Services ──────────────────────────────────────────────────────── */

export const SERVICES: ServiceData[] = [
  {
    slug: "auto-repair",
    name: "Auto Repair",
    tagline: "From strange sounds to stubborn warning lights.",
    description:
      "Whether it's a weird noise, a warning light, or something just doesn't feel right — bring it in. We'll figure out what's going on and get you back on the road.",
    longDescription:
      "At Waltz's Garage, auto repair isn't just about fixing what's broken — it's about understanding your vehicle and giving you an honest answer. With 25 years of hands-on experience, Doug and the team have seen just about every make, model, and mystery noise that rolls through Kendallville. We use modern diagnostic tools paired with old-school know-how to pinpoint problems fast and fix them right the first time. No upselling, no guesswork — just straight talk and solid work.",
    features: [
      "Full diagnostic scanning & electrical troubleshooting",
      "Engine & transmission repair",
      "Cooling system service",
      "Steering & suspension work",
      "Fuel system diagnostics",
      "Check engine light diagnosis",
      "Pre-purchase vehicle inspections",
      "Drivetrain & differential repair",
    ],
    faqs: [
      {
        q: "How long does a typical auto repair take?",
        a: "It depends on the issue. Simple diagnostics can be done same-day, while more involved repairs may take 1–3 days. We'll always give you a clear timeline upfront.",
      },
      {
        q: "Do you work on all makes and models?",
        a: "Yes — Japanese, European, German, and domestic, old or new. If it has wheels and an engine, we can help.",
      },
      {
        q: "Can I get a quote before you start work?",
        a: "Absolutely. We'll diagnose the issue and give you an honest estimate before we turn a single wrench.",
      },
    ],
    image: "/images/engine/IMG_6946.jpeg",
    galleryImages: [
      "/images/engine/IMG_6734.jpeg",
      "/images/engine/IMG_6855.jpeg",
      "/images/engine/IMG_6910.jpeg",
      "/images/suspension/IMG_0852.jpeg",
      "/images/suspension/5DF4ECB3-49BE-4FB7-9A78-653C119CAFAD.jpeg",
    ],
  },
  {
    slug: "exhaust",
    name: "Exhaust & Fabrication",
    tagline: "Custom exhaust systems done right in Kendallville.",
    description:
      "From stock replacements to full custom exhaust builds, we handle it all. If you need metal bent, welded, or fabricated — we've got the tools and the talent.",
    longDescription:
      "Waltz's Garage is known across northeast Indiana for custom exhaust work that sounds as good as it performs. Whether you need a quiet stock replacement for your daily driver or a full custom mandrel-bent setup for your weekend build, we fabricate everything in-house. Our shop is equipped with professional welding rigs, pipe benders, and years of fabrication experience. We work with stainless steel, mild steel, and aluminized materials to build systems that last.",
    features: [
      "Custom exhaust fabrication & mandrel bending",
      "Catalytic converter replacement",
      "Muffler repair & replacement",
      "Header installation",
      "Exhaust leak repair",
      "Performance exhaust upgrades",
      "Welding & metal fabrication",
      "Resonator delete & modifications",
    ],
    faqs: [
      {
        q: "Can you build a custom exhaust for my truck?",
        a: "Yes — we do full custom builds for trucks, cars, and classic vehicles. We'll work with you on sound, performance, and fitment.",
      },
      {
        q: "How much does a custom exhaust cost?",
        a: "It varies depending on the vehicle and the setup you want. Give us a call or bring it in and we'll give you a clear quote.",
      },
      {
        q: "Do you do exhaust work on classic cars?",
        a: "Absolutely. We love working on classics and can fabricate systems that match original routing or go full custom.",
      },
    ],
    image: "/images/exhaust/IMG_7048.jpeg",
    galleryImages: [
      "/images/exhaust/IMG_7048.jpeg",
      "/images/exhaust/IMG_7082.jpeg",
      "/images/exhaust/IMG_7083.jpeg",
    ],
  },
  {
    slug: "brakes",
    name: "Brakes",
    tagline: "Stop safely. Every time.",
    description:
      "Your brakes are your most important safety system. We inspect, repair, and replace brake components on all makes and models to keep you stopping with confidence.",
    longDescription:
      "Brake problems don't wait — and neither should you. At Waltz's Garage, we take brake service seriously because your safety depends on it. From squealing pads to soft pedals to full brake system overhauls, we've handled it all. We use quality parts, thorough inspections, and honest assessments so you always know exactly what's needed. Whether it's a routine pad swap or a complete rotor-and-caliper rebuild, we'll have you stopping safely in no time.",
    features: [
      "Brake pad & shoe replacement",
      "Rotor resurfacing & replacement",
      "Brake caliper repair & rebuild",
      "Brake fluid flush & bleed",
      "Brake line inspection & repair",
      "Emergency brake adjustment",
      "ABS system diagnostics",
      "Performance brake upgrades",
    ],
    faqs: [
      {
        q: "How do I know if my brakes need service?",
        a: "Common signs include squealing or grinding noises, a soft or spongy brake pedal, vibration when braking, or your vehicle pulling to one side.",
      },
      {
        q: "How long do brake pads last?",
        a: "Typically 30,000–70,000 miles depending on driving habits and conditions. We'll check them during any service visit.",
      },
      {
        q: "Can you upgrade my brakes for better performance?",
        a: "Yes — we offer performance brake upgrades including drilled/slotted rotors, high-performance pads, and stainless steel brake lines.",
      },
    ],
    image: "/images/brakes/IMG_6981.jpeg",
    galleryImages: [
      "/images/brakes/IMG_6981.jpeg",
      "/images/brakes/IMG_6987.jpeg",
      "/images/brakes/IMG_6994.jpeg",
    ],
  },
  {
    slug: "performance-modification",
    name: "Performance Modification",
    tagline: "Make your vehicle perform exactly how you want.",
    description:
      "From bolt-on upgrades to full engine builds, we help you unlock your vehicle's potential with performance modifications done right.",
    longDescription:
      "Whether you're chasing horsepower, building a show truck, or just want your ride to feel more alive — Waltz's Garage is the shop that gets it done. Doug has been building and modifying vehicles for over two decades, and that experience shows in every build. We handle everything from simple intake and exhaust upgrades to full engine swaps, suspension lifts, and custom fabrication. Every mod is installed with precision and tested to make sure it performs as promised.",
    features: [
      "Cold air intake installation",
      "Performance exhaust & headers",
      "Suspension lifts & lowering kits",
      "Engine tuning & ECU programming",
      "Turbo & supercharger installation",
      "Drivetrain upgrades",
      "Engine swaps & builds",
      "Custom fabrication for one-off builds",
    ],
    faqs: [
      {
        q: "Can you build a custom project vehicle?",
        a: "Absolutely. We've done everything from restomod trucks to full race-prep builds. Let's talk about your vision.",
      },
      {
        q: "Will modifications void my warranty?",
        a: "It depends on the vehicle and the modification. We'll walk you through what's involved so you can make an informed decision.",
      },
      {
        q: "How long does a performance build take?",
        a: "Simple bolt-ons can be done in a day. Larger builds like engine swaps or full custom work may take several weeks depending on parts availability.",
      },
    ],
    image: "/images/engine/IMG_7194.jpeg",
    galleryImages: [
      "/images/engine/IMG_7194.jpeg",
      "/images/engine/IMG_6946.jpeg",
      "/images/general/IMG_7192.jpeg",
      "/images/general/IMG_7115.jpeg",
      "/images/general/a.jpeg",
    ],
  },
  {
    slug: "oil-change",
    name: "Oil Change",
    tagline: "Quick, clean, and done right.",
    description:
      "Regular oil changes are the single best thing you can do for your engine. We make it fast, affordable, and thorough — every time.",
    longDescription:
      "An oil change at Waltz's Garage isn't just a drain-and-fill. We treat every oil service as an opportunity to check your vehicle's overall health. We inspect your fluids, filters, belts, and tires while we're under there — because catching a small issue now can save you big money later. We use quality conventional and synthetic oils, and we'll recommend the right product for your vehicle and driving style. No appointments needed for most oil changes — just roll in.",
    features: [
      "Conventional & synthetic oil changes",
      "Oil filter replacement",
      "Multi-point vehicle inspection",
      "Fluid level check & top-off",
      "Tire pressure check",
      "Visual belt & hose inspection",
      "Air filter inspection",
      "Chassis lubrication",
    ],
    faqs: [
      {
        q: "How often should I change my oil?",
        a: "Every 3,000–5,000 miles for conventional oil, or every 7,500–10,000 miles for full synthetic. Check your owner's manual or ask us.",
      },
      {
        q: "Do I need an appointment for an oil change?",
        a: "No appointment needed for most oil changes. Just stop by and we'll get you taken care of.",
      },
      {
        q: "What type of oil do you use?",
        a: "We carry conventional, synthetic blend, and full synthetic options from trusted brands. We'll recommend the best fit for your vehicle.",
      },
    ],
    image: "/images/engine/IMG_6855.jpeg",
    galleryImages: [
      "/images/engine/IMG_6855.jpeg",
      "/images/engine/IMG_6910.jpeg",
    ],
  },
  {
    slug: "stereo-electronics",
    name: "Stereo & Electronics",
    tagline: "Custom installs and electronic diagnostics.",
    description:
      "From upgrading your sound system to diagnosing tricky electrical gremlins, we handle all things automotive electronics.",
    longDescription:
      "Modern vehicles are rolling computers, and Waltz's Garage has the tools and expertise to work on all of it. Whether you want a new head unit, speakers, subwoofers, or a full custom audio build — we handle the install from start to finish with clean wiring and solid fitment. On the diagnostic side, we troubleshoot everything from parasitic battery drains to faulty sensors, wiring harness issues, and module communication problems.",
    features: [
      "Head unit & stereo installation",
      "Speaker & subwoofer upgrades",
      "Amplifier installation & wiring",
      "Backup camera installation",
      "LED & lighting upgrades",
      "Electrical diagnostics & troubleshooting",
      "Wiring harness repair",
      "Battery & charging system service",
    ],
    faqs: [
      {
        q: "Can you install a new stereo in my vehicle?",
        a: "Yes — we install head units, speakers, amps, and subs in all types of vehicles. We'll make sure everything integrates cleanly with your existing systems.",
      },
      {
        q: "My car has an electrical drain. Can you find it?",
        a: "Absolutely. We use specialized tools to track down parasitic drains and faulty circuits. It's one of our specialties.",
      },
      {
        q: "Do you install backup cameras?",
        a: "Yes. We can add aftermarket backup cameras to most vehicles, including older models without factory screens.",
      },
    ],
    image: "/images/engine/IMG_6734.jpeg",
    galleryImages: [
      "/images/engine/IMG_6734.jpeg",
      "/images/engine/IMG_7090.jpeg",
    ],
  },
  {
    slug: "routine-maintenance",
    name: "Routine Maintenance",
    tagline: "Stay ahead of problems.",
    description:
      "Regular maintenance keeps your vehicle running smoothly and prevents costly breakdowns. We make it easy to stay on schedule.",
    longDescription:
      "The best repair is the one you never need. Routine maintenance at Waltz's Garage keeps your vehicle in peak condition and helps avoid expensive surprises down the road. We follow manufacturer-recommended service intervals and keep detailed records so you always know where your vehicle stands. From fluid changes to filter replacements to belt inspections — we handle all the scheduled maintenance your vehicle needs to keep running strong for years to come.",
    features: [
      "Scheduled maintenance services",
      "Transmission fluid service",
      "Coolant flush & fill",
      "Power steering fluid service",
      "Spark plug replacement",
      "Belt & hose replacement",
      "Tire rotation & balancing",
      "Battery testing & replacement",
    ],
    faqs: [
      {
        q: "How do I know what maintenance my car needs?",
        a: "We follow your manufacturer's recommended service schedule. Bring it in and we'll check what's due based on your mileage and history.",
      },
      {
        q: "Is routine maintenance really that important?",
        a: "Absolutely. Keeping up with scheduled maintenance can prevent major repairs, improve fuel economy, and extend your vehicle's life significantly.",
      },
      {
        q: "Can you handle maintenance on newer vehicles?",
        a: "Yes — we service all makes and models, new and old. We use quality parts that meet or exceed OEM specifications.",
      },
    ],
    image: "/images/engine/IMG_7108.jpeg",
    galleryImages: [
      "/images/engine/IMG_7108.jpeg",
      "/images/engine/IMG_6910.jpeg",
    ],
  },
];

/* ── Service Areas ─────────────────────────────────────────────────── */

export const SERVICE_AREAS: ServiceAreaData[] = [
  {
    slug: "kendallville-in",
    city: "Kendallville",
    state: "IN",
    tagline: "Right here in town — your neighborhood garage.",
    description:
      "Waltz's Garage is proudly located in the heart of Kendallville, Indiana. For over 25 years we've been serving drivers right here on Krueger Street. Whether you live downtown, off Main, or on the outskirts — we're just minutes away. Stop by for an oil change, a repair, or just to talk cars.",
    distanceNote: "Located in town",
    mapQuery: "Waltz's+Garage,+701+Krueger+St,+Kendallville,+IN+46755",
  },
  {
    slug: "lagrange-in",
    city: "LaGrange",
    state: "IN",
    tagline: "Quality auto repair, just a short drive from LaGrange.",
    description:
      "LaGrange drivers trust Waltz's Garage for honest, reliable auto repair. Located just 20 minutes east on US-6, our Kendallville shop is an easy drive for oil changes, brake work, exhaust fabrication, and everything in between. We treat every LaGrange customer like a neighbor — because you are.",
    distanceNote: "~20 minutes from LaGrange",
    mapQuery: "LaGrange,+IN+to+Waltz's+Garage,+Kendallville,+IN",
  },
  {
    slug: "fort-wayne-in",
    city: "Fort Wayne",
    state: "IN",
    tagline: "Worth the drive from Fort Wayne for work done right.",
    description:
      "Fort Wayne drivers looking for a shop that treats them right make the drive to Waltz's Garage in Kendallville. We're about 30 minutes north on US-33, and our customers from the Fort will tell you — the trip is worth it. No dealership runaround, no corporate upsells. Just honest work from people who care.",
    distanceNote: "~30 minutes from Fort Wayne",
    mapQuery: "Fort+Wayne,+IN+to+Waltz's+Garage,+Kendallville,+IN",
  },
  {
    slug: "sturgis-mi",
    city: "Sturgis",
    state: "MI",
    tagline: "Serving Sturgis drivers across the state line.",
    description:
      "Just across the Michigan border, Sturgis drivers have been coming to Waltz's Garage for years. We're about 35 minutes south on IN-9, and we make the trip worthwhile with quality work, fair pricing, and the kind of service that's hard to find. Brakes, exhaust, engine work — we've got you covered.",
    distanceNote: "~35 minutes from Sturgis",
    mapQuery: "Sturgis,+MI+to+Waltz's+Garage,+Kendallville,+IN",
  },
  {
    slug: "warsaw-in",
    city: "Warsaw",
    state: "IN",
    tagline: "Trusted auto repair for Warsaw-area drivers.",
    description:
      "Warsaw drivers who want a personal, reliable auto repair experience choose Waltz's Garage. We're about 35 minutes north on US-33, offering everything from routine oil changes to custom exhaust fabrication. Once you experience the Waltz's difference, you won't go anywhere else.",
    distanceNote: "~35 minutes from Warsaw",
    mapQuery: "Warsaw,+IN+to+Waltz's+Garage,+Kendallville,+IN",
  },
  {
    slug: "avilla-in",
    city: "Avilla",
    state: "IN",
    tagline: "Your go-to garage, just down the road from Avilla.",
    description:
      "Avilla is just a stone's throw from our shop in Kendallville. Whether you need a quick oil change or a full engine teardown, Waltz's Garage is your closest trusted option. We've been serving Avilla drivers for over two decades and we're not going anywhere.",
    distanceNote: "~10 minutes from Avilla",
    mapQuery: "Avilla,+IN+to+Waltz's+Garage,+Kendallville,+IN",
  },
  {
    slug: "albion-in",
    city: "Albion",
    state: "IN",
    tagline: "Reliable service for Albion-area vehicles.",
    description:
      "Albion drivers don't have to go far for quality auto repair. Waltz's Garage in Kendallville is just 10 minutes up the road, offering the full range of services — from brakes and exhaust to stereo installs and performance mods. We treat every vehicle like it's our own.",
    distanceNote: "~10 minutes from Albion",
    mapQuery: "Albion,+IN+to+Waltz's+Garage,+Kendallville,+IN",
  },
];

/* ── Helper fns ────────────────────────────────────────────────────── */

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceAreaBySlug(slug: string): ServiceAreaData | undefined {
  return SERVICE_AREAS.find((s) => s.slug === slug);
}
