"use client";

import { useEffect, useRef, useState } from "react";

const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'General Sans', 'Inter', system-ui, sans-serif";

const whySavoy = [
  {
    n: "01",
    title: "Bespoke Private Banking",
    body: "Solutions tailored to individual and family needs.",
  },
  {
    n: "02",
    title: "Sophisticated Investment Management",
    body: "Guided by experienced professionals.",
  },
  {
    n: "03",
    title: "Trust and Fiduciary Services",
    body: "Focused on wealth preservation and legacy planning.",
  },
  {
    n: "04",
    title: "Global Perspective, Personal Service",
    body: "Delivered through dedicated relationship managers.",
  },
  {
    n: "05",
    title: "Confidentiality, Stability, and Excellence",
    body: "A commitment upheld in every client relationship, without exception.",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const fadeUp = (v, d = "0s") => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(24px)",
  transition: `opacity 0.8s ease ${d}, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${d}`,
});

export default function WhySavoy() {
  const [sectionRef, inView] = useInView(0.08);

  return (
    <section
      ref={sectionRef}
      className="bg-[#001a33] text-white py-16 md:py-10 px-6 md:px-20"
    >
      <div style={fadeUp(inView, "0s")} className="mb-10 md:mb-14">
        <p
          className="flex items-center gap-3 uppercase text-white/40 mb-4"
          style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
        >
          <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
          Why Savoy Bank &amp; Trust
        </p>
        <h2
          style={{
            fontFamily: serif,
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 300,
            lineHeight: 1.05,
          }}
        >
          Wealth deserves <em style={{ color: "var(--savoy-font)" }}>stewardship.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
        {whySavoy.map((item, i) => (
          <div
            key={item.n}
            style={fadeUp(inView, `${0.1 + i * 0.08}s`)}
            className="border-t border-white/15 pt-5"
          >
            <span
              style={{
                fontFamily: serif,
                fontSize: "1rem",
                color: "rgba(180,200,220,0.5)",
              }}
            >
              {item.n}
            </span>
            <h3
              style={{
                fontFamily: serif,
                fontSize: "1.15rem",
                fontWeight: 300,
                lineHeight: 1.2,
                color: "#ffffff",
              }}
              className="mt-2 mb-2"
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: sans,
                fontSize: "0.78rem",
                fontWeight: 300,
                lineHeight: 1.4,
                color: "rgba(210,220,230,0.65)",
              }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}