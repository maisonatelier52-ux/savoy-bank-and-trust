"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SavoyHeader from "@/components/SavoyHeader";
import BrandFooterSection from "@/components/Brandfootersection";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
  @import url('https://fonts.cdnfonts.com/css/general-sans');

  .mobile-nav {
    position: fixed; inset: 0;
    background: rgba(var(--savoy-bg-rgb),0.97);
    z-index: 100;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2.5rem;
    pointer-events: none; opacity: 0; transform: translateY(-24px);
    transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
  }
  .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
  .mobile-nav a {
    font-family: 'Cormorant', Georgia, serif;
    color: #fff; font-size: clamp(1.6rem, 6vw, 2.4rem);
    font-weight: 300; letter-spacing: 0.18em;
    text-decoration: none; text-transform: uppercase;
  }
  .hamburger-btn {
    display: none; flex-direction: column; gap: 5px;
    background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
  }
  .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
  @media (max-width: 1024px) {
    .hamburger-btn { display: flex; }
    .desktop-nav { display: none !important; }
  }

  .page-header {
    position: absolute !important;
    background: linear-gradient(to bottom, rgba(var(--savoy-bg-rgb),0.72) 0%, transparent 100%);
  }

  @media (max-width: 640px) {
    .ph-section-pad { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
    .ph-pl { padding-left: 0 !important; }
  }
`;

const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'General Sans', 'Inter', system-ui, sans-serif";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const fadeUp = (inView, delay = "0s") => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
});
const fadeLeft = (inView, delay = "0s") => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateX(0)" : "translateX(-36px)",
  transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
});
const fadeRight = (inView, delay = "0s") => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateX(0)" : "translateX(36px)",
  transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
});

const focusAreas = [
  {
    number: "01",
    title: "Education & Youth Development",
    body: "Supporting programs that expand access to education, leadership development, financial literacy, and opportunities for young people to reach their full potential.",
  },
  {
    number: "02",
    title: "Community Development",
    body: "Contributing to initiatives that promote economic empowerment, social well-being, and sustainable community growth.",
  },
  {
    number: "03",
    title: "Arts, Culture, and Heritage",
    body: "Encouraging the preservation of cultural heritage and the advancement of artistic and creative endeavors that enrich society.",
  },
  {
    number: "04",
    title: "Environmental Stewardship",
    body: "Promoting responsible environmental practices and supporting initiatives that help protect and sustain natural resources for future generations.",
  },
];

const legacyPoints = [
  [
    "Direct Charitable Contributions",
    "Structured giving that channels resources directly toward causes our clients care about most.",
  ],
  [
    "Structured Philanthropic Vehicles",
    "Working with clients and their advisors to design giving strategies suited to their long-term vision.",
  ],
  [
    "Multigenerational Giving Initiatives",
    "Helping families build charitable legacies designed to extend meaningfully across generations.",
  ],
];

function OvLabel({ children, center = false }) {
  return (
    <p
      className={`flex items-center gap-3 uppercase text-white/45 ${center ? "justify-center" : ""}`}
      style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
    >
      <span className="block w-7 h-px bg-white/30 flex-shrink-0" />
      {children}
    </p>
  );
}

export default function Philanthropy() {
  const [heroRef, heroInView] = useInView(0.05);
  const [introRef, introInView] = useInView(0.1);
  const [focusRef, focusInView] = useInView(0.05);
  const [legacyRef, legacyInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.1);

  return (
    <>
      <style>{globalStyles}</style>
      <SavoyHeader phase={4} />

      <main className="bg-[#001a33] text-white">

        {/* ══ HERO ══════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-end overflow-hidden px-8 md:px-16 pb-20"
        >
          {/* Desktop bg image */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {/* <Image
              src="/savoy-9.png"
              alt="Savoy philanthropy"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center", opacity: 0.25 }}
            /> */}
          </div>

          {/* Mobile image — top of section */}
          <div className="md:hidden absolute top-0 left-0 right-0" style={{ height: "800px", zIndex: 0 }}>
            {/* <Image
              src="/savoy-9.png"
              alt="Savoy philanthropy"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center", opacity: 0.4 }}
            /> */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 30%, black 100%)"
            }} />
          </div>

          <div className="relative z-10 w-full mt-[260px] md:mt-0">
            <div className="pl-0 md:pl-5">
              <p
                className="uppercase text-white/60 mb-5"
                style={{ fontFamily: sans, fontSize: "0.72rem", letterSpacing: "0.22em" }}
              >
                Philanthropy &amp; Community Impact
              </p>
              <h1
                className="text-white max-w-[680px] leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  fontSize: "clamp(2rem, 3vw, 3.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.0,
                }}
              >
                Investing in Communities.<br /> Creating Lasting Change.
              </h1>

              <div style={fadeUp(heroInView, "0.35s")} className="mt-5">
                <span className="block w-10 bg-white" />
                <p
                  className="mt-5 max-w-md text-white/90"
                  style={{
                    fontFamily: sans,
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    lineHeight: 1.3,
                  }}
                >
                  At Savoy Bank &amp; Trust, we believe that true wealth extends
                  beyond financial success — it carries a responsibility to
                  contribute positively to the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ WHO WE ARE / INTRO ════════════════════════════ */}
        <section
          ref={introRef}
          className="ph-section-pad relative overflow-hidden py-24 px-8 md:px-16"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden md:block">
            {/* <Image
              src="/savoy-1.png"
              alt=""
              fill
              style={{ objectFit: "contain", objectPosition: "left top", opacity: 0.25 }}
            /> */}
          </div>

          <div className="ph-pl relative z-10 pl-5 max-w-3xl">
            <div style={fadeLeft(introInView)} className="mb-10">
              <OvLabel>Our Commitment</OvLabel>
            </div>
            <p
              style={{
                ...fadeUp(introInView, "0.15s"),
                fontFamily: serif,
                fontSize: "clamp(1.45rem,2vw,2.1rem)",
                fontWeight: 300,
                lineHeight: 1.0,
              }}
              className="text-white"
            >
              Our commitment to philanthropy reflects the values that guide our
              institution — stewardship, integrity, compassion, and long-term
              thinking.
            </p>
            <p
              style={{
                ...fadeUp(introInView, "0.28s"),
                fontFamily: sans,
                fontSize: "0.85rem",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
              className="text-white mt-8 max-w-xl"
            >
              It carries a responsibility to contribute positively to the
              communities we serve and to help create opportunities for future
              generations. Through strategic charitable initiatives, community
              partnerships, and support for meaningful causes, we seek to make
              a lasting and measurable impact.
            </p>
          </div>
        </section>

        <div className="w-full h-px" />

        {/* ══ AREAS OF FOCUS ════════════════════════════════ */}
        <section ref={focusRef} className="ph-section-pad py-24 px-8 md:px-16">
          <div style={fadeUp(focusInView)} className="mb-14">
            <OvLabel>Our Areas of Focus</OvLabel>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            {focusAreas.map((p, i) => (
              <div
                key={p.number}
                style={fadeUp(focusInView, `${0.1 + i * 0.12}s`)}
                className="border-t border-white/10 hover:border-white/45 transition-colors duration-300 py-8 flex gap-6 items-start"
              >
                <div
                  style={{
                    fontFamily: serif,
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    paddingTop: "0.15rem",
                  }}
                  className="text-white flex-shrink-0 w-12"
                >
                  {p.number}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: serif,
                      fontSize: "clamp(1.2rem,1.6vw,1.5rem)",
                      fontWeight: 400,
                      lineHeight: 1.15,
                    }}
                    className="text-white mb-3"
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: sans,
                      fontSize: "0.82rem",
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                    className="text-white"
                  >
                    {p.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ A LEGACY OF GIVING ════════════════════════════ */}
        <section
          ref={legacyRef}
          className="ph-section-pad py-24 px-8 md:px-16 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <div style={fadeLeft(legacyInView)} className="mb-10">
                <OvLabel>A Legacy of Giving</OvLabel>
              </div>
              <h2
                style={{
                  ...fadeUp(legacyInView, "0.15s"),
                  fontFamily: serif,
                  fontSize: "clamp(1.7rem, 3vw, 3.2rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
                className="text-white"
              >
                Philanthropy is often an<br />
                <em style={{ color: "var(--savoy-font)" }}>important part of a family's legacy.</em>
              </h2>
              <p
                style={{
                  ...fadeUp(legacyInView, "0.28s"),
                  fontFamily: sans,
                  fontSize: "0.83rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
                className="text-white mt-8"
              >
                Savoy Bank &amp; Trust works with clients and their advisors to
                support charitable giving strategies that reflect their
                values, priorities, and long-term vision — helping clients
                create meaningful and enduring impact.
              </p>

              {legacyPoints.map(([title, text], i) => (
                <div
                  key={title}
                  style={fadeUp(legacyInView, `${0.38 + i * 0.1}s`)}
                  className="mt-6 pl-4 md:pl-5 border-l border-white/20"
                >
                  <p
                    style={{ fontFamily: sans, fontSize: "0.7rem", letterSpacing: "0.14em" }}
                    className="uppercase text-white mb-1"
                  >
                    {title}
                  </p>
                  <p
                    style={{ fontFamily: sans, fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.6 }}
                    className="text-white"
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop image — hidden on mobile */}
            <div
              style={fadeRight(legacyInView, "0.2s")}
              className="hidden md:flex justify-center"
            >
              <div className="relative w-full max-w-md" style={{ aspectRatio: "3/4" }}>
                {/* <Image
                  src="/savoy-3.png"
                  alt="Savoy legacy"
                  fill
                  style={{
                    objectFit: "contain",
                    opacity: 0.9,
                    maskImage: "radial-gradient(ellipse 80% 85% at 50% 50%, black 45%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 85% at 50% 50%, black 45%, transparent 100%)",
                  }}
                /> */}
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ IMAGE BREAK ═══════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ height: "50vh" }}>
          {/* <Image
            src="/savoy-2.png"
            alt="Community impact"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%", opacity: 0.30 }}
          /> */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: `linear-gradient(to bottom,
                rgba(var(--savoy-bg-rgb),0.85) 0%,
                rgba(var(--savoy-bg-rgb),0.25) 25%,
                transparent 45%,
                transparent 55%,
                rgba(var(--savoy-bg-rgb),0.25) 75%,
                rgba(var(--savoy-bg-rgb),0.85) 100%)`,
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8 text-center z-20">
            <p
              className="text-white max-w-xl"
              style={{
                fontFamily: serif,
                fontSize: "clamp(1rem, 2vw, 1.7rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              &ldquo;Building wealth with purpose. Supporting communities with
              commitment.&rdquo;
            </p>
            <span className="block w-10 h-px bg-white mt-6" />
            <p
              className="uppercase tracking-widest text-white mt-4"
              style={{ fontFamily: sans, fontSize: "0.6rem", letterSpacing: "0.18em" }}
            >
              Creating Legacies That Extend Beyond Generations
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ CTA ═══════════════════════════════════════════ */}
        {/* <section
          ref={ctaRef}
          className="py-14 md:py-20 px-6 md:px-16 flex flex-col items-center text-center"
        >
          <div style={fadeUp(ctaInView)}>
            <OvLabel center>Get in Touch</OvLabel>
          </div>

          <h2
            style={{
              ...fadeUp(ctaInView, "0.15s"),
              fontFamily: serif,
              fontSize: "clamp(1.8rem, 4vw, 3.8rem)",
              fontWeight: 300,
              lineHeight: 1.05,
            }}
            className="text-white mt-6"
          >
            Partner With Purpose
          </h2>

          <p
            style={{
              ...fadeUp(ctaInView, "0.25s"),
              fontFamily: sans,
              fontSize: "0.83rem",
              fontWeight: 300,
              lineHeight: 1.6,
            }}
            className="text-white mt-5 max-w-sm md:max-w-md"
          >
            To learn more about our philanthropic initiatives or to discuss a
            charitable giving strategy of your own, we welcome your enquiry.
          </p>

          <a
            href="mailto:info@savoybankandtrust.com"
            style={{
              ...fadeUp(ctaInView, "0.35s"),
              fontFamily: sans,
              fontSize: "0.68rem",
              letterSpacing: "0.16em",
            }}
            className="mt-10 inline-flex items-center gap-3 uppercase text-white no-underline border border-white/30 px-6 md:px-8 py-3 transition-all duration-300 hover:border-white hover:bg-white/5 break-all md:break-normal text-center"
          >
            info@savoybankandtrust.com
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
              <path
                d="M1 7h12M8 3l5 4-5 4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section> */}

        <div className="w-full h-px bg-[#001a33]" />
      </main>

      <BrandFooterSection />
    </>
  );
}