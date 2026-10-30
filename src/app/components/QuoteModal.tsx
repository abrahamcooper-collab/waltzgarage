"use client";

import { useState, useEffect, useRef } from "react";
import { useQuote } from "@/app/context/QuoteContext";

const TOTAL_STEPS = 4;

/* ── Service options ─────────────────────────────── */
const SERVICES = [
  {
    id: "auto-repair",
    label: "Auto Repair",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    id: "exhaust",
    label: "Exhaust",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
  },
  {
    id: "transmission",
    label: "Transmission Repair",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    id: "brakes",
    label: "Brakes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
      </svg>
    ),
  },
  {
    id: "customization",
    label: "Auto Customization",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    id: "oil-change",
    label: "Oil Change Stations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    id: "maintenance",
    label: "Routine Maintenance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    id: "electronics",
    label: "Auto Electronics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
  },
  {
    id: "not-sure",
    label: "Not sure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
];

/* ── Input shared style ─────────────────────────── */
const inputClass =
  "w-full px-4 py-3 text-sm text-[#2C1810] placeholder-[#9B8060] outline-none focus:border-[#7A1D2E] transition-colors";
const inputStyle = {
  background: "#F0EBE1",
  border: "1px solid #C8BCAA",
  borderRadius: "2px",
  fontSize: "14px",
};

/* ── Step 1: Service selection ──────────────────── */
function Step1({
  selected,
  onSelect,
  onNext,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}) {
  const mainServices = SERVICES.slice(0, 8);
  const notSure = SERVICES[8];

  return (
    <div>
      <p className="text-[#2C1810] mb-5" style={{ fontSize: "15px", fontWeight: "500" }}>
        What does your vehicle need?
      </p>

      {/* 2-column grid */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {mainServices.map((svc) => {
          const active = selected === svc.id;
          return (
            <button
              key={svc.id}
              onClick={() => onSelect(svc.id)}
              className="flex items-center gap-2.5 px-3.5 py-3 text-left transition-all duration-150"
              style={{
                background: active ? "#6B1726" : "#EDE8DF",
                border: `1px solid ${active ? "#6B1726" : "#C8BCAA"}`,
                borderRadius: "2px",
                color: active ? "#fff" : "#4A3728",
                fontSize: "13px",
              }}
            >
              <span style={{ color: active ? "#fff" : "#9B8060", flexShrink: 0 }}>
                {svc.icon}
              </span>
              <span className="flex-1">{svc.label}</span>
              {active && <span style={{ fontSize: "11px", opacity: 0.9 }}>✓</span>}
            </button>
          );
        })}
      </div>

      {/* Not sure — full width */}
      <button
        onClick={() => onSelect(notSure.id)}
        className="w-full flex items-center gap-2.5 px-3.5 py-3 text-left transition-all duration-150 mb-6"
        style={{
          background: selected === notSure.id ? "#6B1726" : "#EDE8DF",
          border: `1px solid ${selected === notSure.id ? "#6B1726" : "#C8BCAA"}`,
          borderRadius: "2px",
          color: selected === notSure.id ? "#fff" : "#4A3728",
          fontSize: "13px",
        }}
      >
        <span style={{ color: selected === notSure.id ? "#fff" : "#9B8060", flexShrink: 0 }}>
          {notSure.icon}
        </span>
        <span className="flex-1">{notSure.label}</span>
        {selected === notSure.id && <span style={{ fontSize: "11px" }}>✓</span>}
      </button>

      <button
        onClick={() => { if (selected) onNext(); }}
        disabled={!selected}
        className="flex items-center gap-2 font-medium transition-all duration-200"
        style={{
          background: selected ? "#6B1726" : "#C8BCAA",
          color: "#fff",
          padding: "10px 22px",
          borderRadius: "2px",
          fontSize: "14px",
          cursor: selected ? "pointer" : "not-allowed",
        }}
      >
        Next step <span>→</span>
      </button>
    </div>
  );
}

/* ── Step 2: Describe the issue ─────────────────── */
function Step2({
  description,
  onChange,
  onBack,
  onNext,
}: {
  description: string;
  onChange: (v: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div>
      <p className="text-[#2C1810] mb-2" style={{ fontSize: "15px", fontWeight: "500" }}>
        Tell us what&apos;s going on.
      </p>
      <p className="text-[#9B8060] mb-5" style={{ fontSize: "13px" }}>
        Any details help — sounds, lights, how long it&apos;s been happening.
      </p>
      <textarea
        className={inputClass}
        style={{ ...inputStyle, resize: "none", minHeight: "120px" }}
        placeholder="Describe the issue..."
        value={description}
        onChange={(e) => onChange(e.target.value)}
      />
      <p className="text-[#9B8060] mt-1 mb-6" style={{ fontSize: "11px" }}>
        Optional — skip if you&apos;re not sure.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="text-[#9B8060] hover:text-[#2C1810] transition-colors"
          style={{ fontSize: "13px" }}
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 font-medium"
          style={{
            background: "#6B1726",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: "2px",
            fontSize: "14px",
          }}
        >
          Next step <span>→</span>
        </button>
      </div>
    </div>
  );
}

/* ── Step 3: Contact info ────────────────────────── */
function Step3({
  contactInfo,
  onChange,
  onBack,
  onNext,
}: {
  contactInfo: { name: string; phone: string; email: string };
  onChange: (v: { name: string; phone: string; email: string }) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const set = (field: string, val: string) => onChange({ ...contactInfo, [field]: val });
  const valid = contactInfo.name.trim() && (contactInfo.phone.trim() || contactInfo.email.trim());

  return (
    <div>
      <p className="text-[#2C1810] mb-2" style={{ fontSize: "15px", fontWeight: "500" }}>
        How can we reach you?
      </p>
      <p className="text-[#9B8060] mb-5" style={{ fontSize: "13px" }}>
        We&apos;ll follow up to confirm your visit.
      </p>
      <div className="flex flex-col gap-3 mb-6">
        <input
          className={inputClass}
          style={inputStyle}
          type="text"
          placeholder="Your name *"
          value={contactInfo.name}
          onChange={(e) => set("name", e.target.value)}
        />
        <input
          className={inputClass}
          style={inputStyle}
          type="tel"
          placeholder="Phone number"
          value={contactInfo.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
        <input
          className={inputClass}
          style={inputStyle}
          type="email"
          placeholder="Email address"
          value={contactInfo.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="text-[#9B8060] hover:text-[#2C1810] transition-colors"
          style={{ fontSize: "13px" }}
        >
          ← Back
        </button>
        <button
          onClick={() => { if (valid) onNext(); }}
          disabled={!valid}
          className="flex items-center gap-2 font-medium transition-all"
          style={{
            background: valid ? "#6B1726" : "#C8BCAA",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: "2px",
            fontSize: "14px",
            cursor: valid ? "pointer" : "not-allowed",
          }}
        >
          Submit request <span>→</span>
        </button>
      </div>
    </div>
  );
}

/* ── Step 4: Confirmation ────────────────────────── */
function Step4({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-4">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{ background: "#6B1726" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      <h3
        className="font-bold text-[#2C1810] mb-3"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px" }}
      >
        We&apos;ve got it!
      </h3>
      <p className="text-[#4A3728] mb-8 leading-relaxed" style={{ fontSize: "14px" }}>
        Thanks for reaching out. Doug will be in touch shortly to confirm your
        visit and answer any questions.
      </p>
      <button
        onClick={onClose}
        className="font-medium"
        style={{
          background: "#6B1726",
          color: "#fff",
          padding: "10px 28px",
          borderRadius: "2px",
          fontSize: "14px",
        }}
      >
        Done
      </button>
    </div>
  );
}

/* ── Main modal ─────────────────────────────────── */
export default function QuoteModal() {
  const { isOpen, preSelectedService, closeModal } = useQuote();

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", email: "" });

  const overlayRef = useRef<HTMLDivElement>(null);

  // Sync pre-selected service when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedService(preSelectedService);
      setDescription("");
      setContactInfo({ name: "", phone: "", email: "" });
    }
  }, [isOpen, preSelectedService]);

  // Keyboard close + body scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(20,8,10,0.65)", backdropFilter: "blur(3px)" }}
      onClick={(e) => {
        if (e.target === overlayRef.current) closeModal();
      }}
    >
      <div
        className="relative w-full shadow-2xl overflow-hidden"
        style={{
          maxWidth: "480px",
          background: "#F5F0E6",
          borderRadius: "3px",
        }}
      >
        {/* ── Modal header ── */}
        <div className="flex items-center justify-between px-8 pt-7 pb-3">
          <span
            className="text-[#9B8060] uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.28em" }}
          >
            A QUICK SERVICE REQUEST
          </span>
          <div className="flex items-center gap-4">
            {step < TOTAL_STEPS && (
              <span className="text-[#9B8060]" style={{ fontSize: "11px" }}>
                {String(step).padStart(2, "0")} /{" "}
                {String(TOTAL_STEPS - 1).padStart(2, "0")}
              </span>
            )}
            <button
              onClick={closeModal}
              id="modal-close"
              className="text-[#2C1810] hover:text-[#7A1D2E] transition-colors leading-none"
              style={{ fontSize: "20px", lineHeight: 1, fontWeight: "300" }}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>

        {/* ── Modal title (hidden on step 4) ── */}
        {step < TOTAL_STEPS && (
          <div className="px-8 pb-5">
            <h2
              className="text-[#2C1810] leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(20px, 3vw, 26px)",
              }}
            >
              Let&apos;s get your vehicle
              <br />
              <span className="italic text-[#C4845A]">in the conversation.</span>
            </h2>
            {/* Copper divider */}
            <div
              className="mt-4"
              style={{ height: "1px", background: "#7A1D2E", opacity: 0.35 }}
            />
          </div>
        )}

        {/* ── Step content ── */}
        <div className="px-8 pb-8">
          {step === 1 && (
            <Step1
              selected={selectedService}
              onSelect={setSelectedService}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <Step2
              description={description}
              onChange={setDescription}
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            />
          )}
          {step === 3 && (
            <Step3
              contactInfo={contactInfo}
              onChange={setContactInfo}
              onBack={() => setStep(2)}
              onNext={() => setStep(4)}
            />
          )}
          {step === 4 && <Step4 onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
}
