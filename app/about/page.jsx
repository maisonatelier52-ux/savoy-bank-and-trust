

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
//   @import url('https://fonts.cdnfonts.com/css/general-sans');

//   .mobile-nav {
//     position: fixed; inset: 0; background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//     transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//   }
//   .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//   .mobile-nav a {
//     font-family: 'Cormorant', Georgia, serif; color: #fff;
//     font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//     letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
//   }
//   .hamburger-btn {
//     display: none; flex-direction: column; gap: 5px;
//     background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//   }
//   .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//   @media (max-width: 1024px) {
//     .hamburger-btn { display: flex; }
//     .desktop-nav { display: none !important; }
//   }
//   .page-header {
//     position: absolute !important;
//     background: linear-gradient(to bottom, rgba(var(--savoy-bg-rgb),0.75) 0%, transparent 100%);
//   }
//   @keyframes slowSpin {
//     from { transform: rotate(0deg); }
//     to   { transform: rotate(360deg); }
//   }
//   .icon-spin { animation: slowSpin 30s linear infinite; }

//   /* Timeline styles */
//   .timeline-track {
//     display: flex;
//     align-items: center;
//     gap: 0;
//     position: relative;
//   }
//   .timeline-line {
//     flex: 1;
//     height: 1px;
//     background: rgba(255,255,255,0.25);
//   }
//   .timeline-node {
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     cursor: pointer;
//     z-index: 2;
//   }
//   .timeline-node-btn {
//   width: 52px;
//   height: 52px;
//   border-radius: 50%;
//   border: 1.5px solid rgba(255,255,255,0.35);
//   background: transparent;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: all 0.35s ease;
//   color: #fff;
//   font-family: 'Cormorant Garamond', Georgia, serif;
//   font-size: 0.72rem;
//   font-weight: 300;
//   letter-spacing: 0.1em;
//   transform-origin: center;
//   flex-shrink: 0;
// }
//   .timeline-node-btn.active {
//   background: #fff;
//   color: var(--savoy-bg, #001a33);
//   border-color: #fff;
//   font-size: 1rem;
//   font-weight: 400;
//   transform: scale(1.25);
// }
//   .timeline-node-btn:hover:not(.active) {
//     border-color: rgba(255,255,255,0.7);
//     background: rgba(255,255,255,0.08);
//   }
//   .timeline-content-panel {
//     opacity: 0;
//     transform: translateY(12px);
//     transition: opacity 0.4s ease, transform 0.4s ease;
//     pointer-events: none;
//   }
//   .timeline-content-panel.visible {
//     opacity: 1;
//     transform: translateY(0);
//     pointer-events: all;
//   }
//   .timeline-nav-btn {
//     width: 36px;
//     height: 36px;
//     border-radius: 50%;
//     border: 1px solid rgba(255,255,255,0.3);
//     background: transparent;
//     color: #fff;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     transition: all 0.25s ease;
//     flex-shrink: 0;
//   }
//   .timeline-nav-btn:hover {
//     border-color: rgba(255,255,255,0.7);
//     background: rgba(255,255,255,0.1);
//   }

//   /* Scrollable timeline track */
//   .tl-scroll-wrap {
//     overflow-x: auto;
//     overflow-y: hidden;
//     scrollbar-width: none;
//     -ms-overflow-style: none;
//     padding-bottom: 8px;
//     cursor: grab;
//     user-select: none;
//   }
//   .tl-scroll-wrap::-webkit-scrollbar { display: none; }
//   .tl-scroll-wrap.grabbing { cursor: grabbing; }

//   /* Progress bar */
//   .tl-progress {
//     width: 100%;
//     height: 1px;
//     background: rgba(255,255,255,0.1);
//     margin-bottom: 32px;
//     position: relative;
//     overflow: hidden;
//   }
//   .tl-progress-fill {
//     position: absolute;
//     top: 0; left: 0; height: 100%;
//     background: rgba(255,255,255,0.5);
//     transition: width 0.4s cubic-bezier(0.16,1,0.3,1);
//   }

//   /* Watermark year */
//   .tl-year-bg {
//     position: absolute;
//     right: 0; top: -20px;
//     font-family: 'Cormorant Garamond', Georgia, serif;
//     font-size: clamp(4rem, 10vw, 7rem);
//     font-weight: 300;
//     color: rgba(255,255,255,0.04);
//     pointer-events: none;
//     line-height: 1;
//     letter-spacing: -0.02em;
//     user-select: none;
//     transition: opacity 0.4s ease;
//   }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans = "'General Sans', 'Inter', system-ui, sans-serif";

// function useInView(threshold = 0.12) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold },
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// const fadeUp = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateY(0)" : "translateY(30px)",
//   transition: `opacity 0.9s ease ${d},transform 0.9s ease ${d}`,
// });
// const fadeLeft = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateX(0)" : "translateX(-36px)",
//   transition: `opacity 0.9s ease ${d},transform 0.9s ease ${d}`,
// });
// const fadeRight = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateX(0)" : "translateX(36px)",
//   transition: `opacity 0.9s ease ${d},transform 0.9s ease ${d}`,
// });

// function Label({ children, center = false }) {
//   return (
//     <p
//       className={`flex items-center gap-3 uppercase text-white/40 ${center ? "justify-center" : ""}`}
//       style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
//     >
//       <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
//       {children}
//     </p>
//   );
// }

// const values = [
//   {
//     n: "01",
//     title: "Discretion",
//     body: "Every client relationship is built on confidentiality and trust. We never compromise on privacy, and we treat every mandate with careful attention regardless of scale.",
//   },
//   {
//     n: "02",
//     title: "Continuity",
//     body: "We build for the long term. Our relationships span generations, and our institutional approach ensures that the knowledge and care we bring today will endure tomorrow.",
//   },
//   {
//     n: "03",
//     title: "Independence",
//     body: "As a privately held institution, Savoy is free from the conflicts of interest that affect large financial conglomerates. Our only obligation is to our clients.",
//   },
//   {
//     n: "04",
//     title: "Judgement",
//     body: "Sound judgement — not algorithms or standardised models — drives every recommendation we make. We think carefully, and we advise with conviction.",
//   },
// ];

// // Updated timeline milestones — Britannia Financial Group history
// const timelineMilestones = [
//   {
//     year: "1986",
//     location: "UNITED KINGDOM",
//     title: "Incorporation of Berkeley Features Limited",
//     text: "The foundations of the group were established in the United Kingdom with the formal incorporation of Berkeley Features Limited, defining the governance framework and institutional lineage that continues to underpin our approach.",
//   },
//   {
//     year: "2012",
//     location: "SWITZERLAND",
//     title: "Incorporation of Britannia Wealth Management",
//     text: "With the establishment of Britannia Wealth Management in Switzerland, the group extended its reach into a premier global financial centre, broadening the suite of wealth management capabilities available to international clients.",
//   },
//   {
//     year: "2016",
//     location: "UNITED KINGDOM",
//     title: "Incorporation of Britannia Financial Group",
//     text: "Britannia Financial Group was incorporated in the United Kingdom, consolidating the growing network of affiliated entities under a single unified holding structure to support continued expansion.",
//   },
//   {
//     year: "2018",
//     location: "UNITED KINGDOM",
//     title: "Britannia Global Investments",
//     text: "Through the strategic acquisition of Dexter Markets UK, Britannia Global Investments was formed — enhancing the group's capital markets capabilities and broadening its investment infrastructure for institutional and private clients alike.",
//   },
//   {
//     year: "2019",
//     location: "UNITED KINGDOM",
//     title: "Britannia Global Markets",
//     text: "The acquisition of Berkeley Futures Limited gave rise to Britannia Global Markets, strengthening the group's derivatives and futures capabilities and reinforcing its position across global financial markets.",
//   },
//   {
//     year: "2019",
//     location: "BAHAMAS",
//     title: "Britannia Bank & Trust",
//     text: "The acquisition of Amber Bank & Trust marked the group's formal entry into private banking in The Bahamas — a jurisdiction of enduring stability and regulatory excellence — establishing Britannia Bank & Trust as the private banking arm of the group.",
//   },
//   {
//     year: "2021",
//     location: "UNITED KINGDOM",
//     title: "Britannia Securities",
//     text: "Britannia Securities was acquired from Arbitral International, further extending the group's regulated securities capabilities and deepening its capacity to deliver comprehensive investment solutions to clients across jurisdictions.",
//   },
//   {
//     year: "2022",
//     location: "UNITED KINGDOM",
//     title: "New Global Headquarters — The Scalpel, London",
//     text: "Britannia Financial Group relocated to its new global headquarters at The Scalpel in the City of London — a landmark address that reflects the group's standing and commitment to operating at the heart of the world's foremost financial centre.",
//   },
// ];

// function InteractiveTimeline() {
//   const [activeIdx, setActiveIdx] = useState(0);
//   const [ref, inView] = useInView(0.1);
//   const scrollRef = useRef(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollStart = useRef(0);

//   const active = timelineMilestones[activeIdx];

//   // Scroll the active node into the center of the scroll container
//   const scrollActiveIntoView = (idx) => {
//     const wrap = scrollRef.current;
//     if (!wrap) return;
//     const nodes = wrap.querySelectorAll(".tl-node-item");
//     const node = nodes[idx];
//     if (!node) return;
//     const wrapRect = wrap.getBoundingClientRect();
//     const nodeRect = node.getBoundingClientRect();
//     const offset =
//       nodeRect.left - wrapRect.left - wrapRect.width / 2 + nodeRect.width / 2;
//     wrap.scrollBy({ left: offset, behavior: "smooth" });
//   };

//   const setActive = (idx) => {
//     setActiveIdx(idx);
//     // Small delay so DOM updates before we measure
//     setTimeout(() => scrollActiveIntoView(idx), 20);
//   };

//   const prev = () => setActive(Math.max(0, activeIdx - 1));
//   const next = () =>
//     setActive(Math.min(timelineMilestones.length - 1, activeIdx + 1));

//   // Drag-to-scroll on the track
//   useEffect(() => {
//     const wrap = scrollRef.current;
//     if (!wrap) return;
//     const onMouseDown = (e) => {
//       isDragging.current = true;
//       startX.current = e.pageX;
//       scrollStart.current = wrap.scrollLeft;
//       wrap.classList.add("grabbing");
//     };
//     const onMouseMove = (e) => {
//       if (!isDragging.current) return;
//       wrap.scrollLeft = scrollStart.current - (e.pageX - startX.current);
//     };
//     const onMouseUp = () => {
//       isDragging.current = false;
//       wrap.classList.remove("grabbing");
//     };
//     wrap.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//     return () => {
//       wrap.removeEventListener("mousedown", onMouseDown);
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseup", onMouseUp);
//     };
//   }, []);

//   const progressPct = (activeIdx / (timelineMilestones.length - 1)) * 100;

//   return (
//     <section
//       ref={ref}
//       style={{ background: "var(--savoy-bg, #001a33)" }}
//       className="py-12 md:py-20 px-6 md:px-20"
//     >
//       {/* Section heading */}
//       <div style={fadeUp(inView)} className="mb-8 md:mb-10">
//         <Label>History &amp; Tradition</Label>
//         <h2
//           style={{
//             fontFamily: serif,
//             fontSize: "clamp(1.6rem,2.8vw,2.6rem)",
//             fontWeight: 300,
//             lineHeight: 1.1,
//             marginTop: "1.5rem",
//           }}
//           className="text-white"
//         >
//           Our Story
//         </h2>
//       </div>

//       {/* Progress bar */}
//       <div style={fadeUp(inView, "0.1s")} className="tl-progress">
//         <div
//           className="tl-progress-fill"
//           style={{ width: `${progressPct}%` }}
//         />
//       </div>

//       {/* Scrollable timeline track */}
//       <div style={fadeUp(inView, "0.15s")} className="tl-scroll-wrap" ref={scrollRef}>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             minWidth: "max-content",
//             padding: "0 8px",
//           }}
//         >
//           {timelineMilestones.map((m, i) => (
//             <div
//               key={`${m.year}-${i}`}
//               style={{ display: "flex", alignItems: "center" }}
//             >
//               {/* Connector line before each node except the first */}
//               {i > 0 && (
//                 <div
//                   style={{
//                     width: "64px",
//                     height: "1px",
//                     background: "rgba(255,255,255,0.2)",
//                     flexShrink: 0,
//                   }}
//                 />
//               )}

//               {/* Node */}
//               <div
//                 className="tl-node-item"
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   flexShrink: 0,
//                   cursor: "pointer",
//                   position: "relative",
//                 }}
//                 onClick={() => setActive(i)}
//               >
//                 <button
//                   style={{
//                     borderRadius: "50%",
//                     border:
//                       activeIdx === i
//                         ? "1.5px solid #fff"
//                         : "1.5px solid rgba(255,255,255,0.3)",
//                     background: activeIdx === i ? "#fff" : "transparent",
//                     color:
//                       activeIdx === i ? "var(--savoy-bg, #001a33)" : "#fff",
//                     width: activeIdx === i ? "68px" : "48px",
//                     height: activeIdx === i ? "68px" : "48px",
//                     fontFamily: serif,
//                     fontSize: activeIdx === i ? "0.85rem" : "0.7rem",
//                     fontWeight: activeIdx === i ? 400 : 300,
//                     letterSpacing: "0.06em",
//                     lineHeight: 1.1,
//                     textAlign: "center",
//                     transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                     flexShrink: 0,
//                   }}
//                   aria-label={`Milestone ${m.year}`}
//                 >
//                   {m.year}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Content panel — re-keyed on activeIdx so CSS transition fires on every change */}
//       <div
//         style={{
//           marginTop: "40px",
//           minHeight: "180px",
//           position: "relative",
//         }}
//       >
//         {/* Large ghost watermark year */}
//         <div key={`year-bg-${activeIdx}`} className="tl-year-bg">
//           {active.year}
//         </div>

//         <div
//           key={`panel-${activeIdx}`}
//           className="timeline-content-panel visible"
//           style={{ maxWidth: "620px" }}
//         >
//           <p
//             style={{
//               fontFamily: sans,
//               fontSize: "0.6rem",
//               letterSpacing: "0.22em",
//               color: "rgba(255,255,255,0.35)",
//               textTransform: "uppercase",
//               marginBottom: "10px",
//             }}
//           >
//             {active.location}
//           </p>
//           <h3
//             style={{
//               fontFamily: serif,
//               fontSize: "clamp(1.1rem,1.8vw,1.55rem)",
//               fontWeight: 300,
//               lineHeight: 1.2,
//               color: "#fff",
//               marginBottom: "14px",
//             }}
//           >
//             {active.title}
//           </h3>
//           <p
//             style={{
//               fontFamily: sans,
//               fontSize: "0.82rem",
//               fontWeight: 300,
//               lineHeight: 1.65,
//               color: "rgba(255,255,255,0.75)",
//             }}
//           >
//             {active.text}
//           </p>
//         </div>
//       </div>

//       {/* Prev / Next nav */}
//       {/* <div style={{ display: "flex", gap: "8px", marginTop: "32px" }}>
//         <button
//           className="timeline-nav-btn"
//           onClick={prev}
//           aria-label="Previous milestone"
//           disabled={activeIdx === 0}
//           style={{ opacity: activeIdx === 0 ? 0.25 : 1 }}
//         >
//           <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
//             <path
//               d="M7 2L3.5 5.5 7 9"
//               stroke="currentColor"
//               strokeWidth="1.2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//         <button
//           className="timeline-nav-btn"
//           onClick={next}
//           aria-label="Next milestone"
//           disabled={activeIdx === timelineMilestones.length - 1}
//           style={{
//             opacity: activeIdx === timelineMilestones.length - 1 ? 0.25 : 1,
//           }}
//         >
//           <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
//             <path
//               d="M4 2l3.5 3.5L4 9"
//               stroke="currentColor"
//               strokeWidth="1.2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div> */}
//     </section>
//   );
// }

// export default function About() {
//   const [heroRef, heroInView] = useInView(0.05);
//   const [missionRef, missionInView] = useInView(0.1);
//   const [valuesRef, valuesInView] = useInView(0.05);
//   const [locationRef, locationInView] = useInView(0.1);
//   const [ctaRef, ctaInView] = useInView(0.1);

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="bg-[#001a33] text-white">
//         {/* ══ HERO ══════════════════════════════════════════════ */}
//         {/* <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden px-6 pt-10 pb-12 md:px-20 md:pb-24 md:pt-0"> */}
//         <section
//           ref={heroRef}
//           className="relative  flex items-start overflow-hidden px-6 pt-50 pb-12 md:px-20 md:pt-75 md:pb-5"
//         >
//           <div className="relative z-10 w-full md:max-w-2xl">
//             <h1
//               style={{
//                 ...fadeUp(heroInView, "0.15s"),
//                 fontFamily: serif,
//                 fontSize: "clamp(3.2rem,7vw,6.5rem)",
//                 fontWeight: 300,
//                 lineHeight: 0.75,
//               }}
//               className="text-white"
//             >
//               About
//               <br />
//               <span className="block w-10 h-px bg-white mt-8" />
//               {/* <em style={{ color:"var(--savoy-font)" }}>Savoy.</em> */}
//             </h1>

//             {/* <div style={fadeUp(heroInView,"0.3s")} className="mt-8">
//               <span className="block w-10 h-px bg-white mb-6" />
//               <p className="text-white w-full max-w-lg" style={{ fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}>
//                 Savoy Bank &amp; Trust is a privately held financial institution
//                 licensed in The Bahamas. We exist to serve clients who value
//                 discretion, continuity, and a personal relationship with those
//                 managing their financial affairs.
//               </p>
//             </div> */}
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ WELCOME / MISSION ═══════════════════════════════════════════════ */}
//         <section
//           ref={missionRef}
//           className="relative py-12 md:py-24 px-6 md:px-20 overflow-hidden"
//         >
//           <div
//             className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
//             style={{
//               width: "300px",
//               height: "300px",
//               marginLeft: "-70px",
//               position: "absolute",
//             }}
//           />

//           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
//             <div>
//               <div style={fadeLeft(missionInView)} className="mb-8">
//                 <Label>Welcome to Savoy Bank and Trust</Label>
//               </div>
//               <h2
//                 style={{
//                   ...fadeUp(missionInView, "0.12s"),
//                   fontFamily: serif,
//                   fontSize: "clamp(2rem, 4vw, 4rem)",
//                   fontWeight: 300,
//                   lineHeight: 1.0,
//                 }}
//                 className="text-white mb-6"
//               >
//                 The Standard for
//                 <br />
//                 <em style={{ color: "var(--savoy-font)" }}>Private Banking.</em>
//               </h2>
//               <p
//                 style={{
//                   ...fadeUp(missionInView, "0.2s"),
//                   fontFamily: sans,
//                   fontSize: "0.85rem",
//                   fontWeight: 300,
//                   lineHeight: 1.3,
//                 }}
//                 className="text-white mb-5 max-w-xl"
//               >
//                 Based in Nassau, The Bahamas, Savoy is a privately held private
//                 bank offering a comprehensive suite of investment and banking
//                 services to a discerning clientele. We serve a global client
//                 base of ultra-high-net-worth individuals (UHNWIs), family
//                 offices, and institutions, delivering world-class solutions from
//                 a stable, well-regulated financial center.
//               </p>
//               <p
//                 style={{
//                   ...fadeUp(missionInView, "0.32s"),
//                   fontFamily: sans,
//                   fontSize: "0.85rem",
//                   fontWeight: 300,
//                   lineHeight: 1.3,
//                 }}
//                 className="text-white mb-5 max-w-xl"
//               >
//                 Regulated and licensed by The Central Bank of The Bahamas and
//                 The Securities Commission of the Bahamas, operating in The
//                 Bahamas for over 20 years, providing customized banking and
//                 trust services to meet the needs of its international clientele.
//               </p>
//               <p
//                 style={{
//                   ...fadeUp(missionInView, "0.44s"),
//                   fontFamily: sans,
//                   fontSize: "0.85rem",
//                   fontWeight: 300,
//                   lineHeight: 1.3,
//                 }}
//                 className="text-white max-w-xl"
//               >
//                 Senior executives with decades of global experience and
//                 expertise have worked together for most of their careers
//                 providing a guarantee of stability and continuity. With an old
//                 fashioned focus on client relationships coupled with modern
//                 private banking facilities, Savoy Bank &amp; Trust offers an
//                 environment for tailored services delivered with discretion.
//               </p>
//             </div>

//             {/* Decorative circular image panel */}
//             {/* <div style={fadeRight(missionInView,"0.15s")} className="hidden md:flex justify-center items-center">
//               <div
//                 className="relative"
//                 style={{
//                   width: "460px",
//                   height: "460px",
//                   borderRadius: "50%",
//                   overflow: "hidden",
//                   border: "1px solid rgb(3,22,41)",
//                 }}
//               >
//                 <Image
//                   src="/savoy-2.png"
//                   alt="Savoy Bank & Trust — Nassau, The Bahamas"
//                   fill
//                   style={{ objectFit: "cover", opacity: 0.75 }}
//                 />
//               </div>
//             </div> */}
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ VALUES ════════════════════════════════════════════════ */}
//         {/* <section ref={valuesRef} className="py-12 md:py-24 px-6 md:px-20">
//           <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
//             <div style={fadeUp(valuesInView)}>
//               <Label>Our Values</Label>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
//             {values.map((v, i) => (
//               <div
//                 key={v.n}
//                 style={fadeUp(valuesInView, `${0.08 + i * 0.1}s`)}
//                 className="border-t border-white/10 hover:border-white/40 transition-colors duration-300 py-6 md:py-8 flex gap-4 md:gap-6 items-start"
//               >
//                 <div style={{ fontFamily:serif, fontSize:"0.85rem", fontWeight:300, letterSpacing:"0.1em" }}
//                      className="text-white flex-shrink-0 w-10 pt-0.5">
//                   {v.n}
//                 </div>
//                 <div>
//                   <div style={{ fontFamily:serif, fontSize:"clamp(1.2rem,1.5vw,1.45rem)", fontWeight:400, lineHeight:1.15 }}
//                        className="text-white mb-2 md:mb-3">{v.title}</div>
//                   <div style={{ fontFamily:sans, fontSize:"0.82rem", fontWeight:300, lineHeight:1.3 }}
//                        className="text-white">{v.body}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section> */}

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ INTERACTIVE HISTORY & TRADITION TIMELINE ══════════════ */}
//         <InteractiveTimeline />

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ LOCATION ══════════════════════════════════════════════ */}
//         {/* <section ref={locationRef} className="py-12 md:py-24 px-6 md:px-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

//             <div>
//               <div style={fadeLeft(locationInView)} className="mb-8 md:mb-10">
//                 <Label>Where We Operate</Label>
//               </div>

//               <h2
//                 style={{ ...fadeUp(locationInView,"0.12s"), fontFamily:serif, fontSize:"clamp(1.8rem,3vw,3rem)", fontWeight:300, lineHeight:1.1 }}
//                 className="text-white"
//               >
//                 Nassau,<br />
//                 <em style={{ color:"var(--savoy-font)" }}>The Bahamas.</em>
//               </h2>

//               <p
//                 style={{ ...fadeUp(locationInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
//                 className="text-white mt-6 md:mt-7 max-w-md"
//               >
//                 The Bahamas offers one of the most respected and stable financial
//                 regulatory frameworks in the world. Licensed by the Securities
//                 Commission of The Bahamas, Savoy operates within a jurisdiction
//                 that combines sovereign stability, international connectivity, and
//                 a long tradition of private banking excellence.
//               </p>

//               <div style={fadeUp(locationInView,"0.38s")} className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-5">
//                 {[
//                   ["Regulator",  "Securities Commission of The Bahamas"],
//                   ["Structure",  "Privately Held"],
//                   ["Clientele",  "International"],
//                 ].map(([k,v]) => (
//                   <div key={k} className="flex gap-4 md:gap-6 items-start border-l border-white/20 pl-4 md:pl-5">
//                     <span style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.15em" }}
//                           className="text-white uppercase flex-shrink-0 w-20">{k}</span>
//                     <span style={{ fontFamily:serif, fontSize:"0.95rem", fontWeight:300 }}
//                           className="text-white">{v}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section> */}

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ QUOTE ═════════════════════════════════════════════════ */}
//         {/* <section className="py-12 md:py-20 px-6 md:px-20 flex flex-col items-center text-center">
//           <p
//             style={{ fontFamily:serif, fontSize:"clamp(1.2rem,2.2vw,2rem)", fontWeight:300, fontStyle:"italic", lineHeight:1.3 }}
//             className="text-white max-w-2xl"
//           >
//             &ldquo;We do not measure success by volume. We measure it by the
//             confidence and continuity of the relationships we hold.&rdquo;
//           </p>
//           <span className="block w-10 h-px bg-white mt-8" />
//           <p style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.2em" }} className="uppercase text-white mt-4">
//             Savoy Bank &amp; Trust
//           </p>
//         </section> */}

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ CTA ═══════════════════════════════════════════════════ */}
//         {/* <section ref={ctaRef} className="py-14 md:py-24 px-6 md:px-20 flex flex-col items-center text-center">
//           <div style={fadeUp(ctaInView)}>
//             <Label center>Get in Touch</Label>
//           </div>

//           <h2
//             style={{ ...fadeUp(ctaInView,"0.15s"), fontFamily:serif, fontSize:"clamp(2rem,4vw,3.8rem)", fontWeight:300, lineHeight:1.05 }}
//             className="text-white mt-6"
//           >
//             Begin a Conversation
//           </h2>

//           <p
//             style={{ ...fadeUp(ctaInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
//             className="text-white mt-5 max-w-md"
//           >
//             Whether you have a specific mandate in mind or simply wish to explore
//             how Savoy might serve your needs, we welcome your enquiry.
//           </p>

//           <div style={fadeUp(ctaInView,"0.35s")} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
//             <a
//               href="mailto:info@savoybankandtrust.com"
//               style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
//               className="inline-flex items-center gap-3 uppercase text-white no-underline border border-white px-8 py-3 transition-all duration-300 hover:border-white hover:bg-white/5"
//             >
//               Email Us
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//             <a
//               href="/contact-us"
//               style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
//               className="inline-flex items-center gap-2 uppercase text-white no-underline transition-colors duration-300 hover:text-white"
//             >
//               Contact Page
//               <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//           </div>
//         </section> */}

//         <div className="w-full h-px bg-[#001a33]" />
//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
//   @import url('https://fonts.cdnfonts.com/css/general-sans');

//   .mobile-nav {
//     position: fixed; inset: 0; background: rgba(0,26,51,0.97); z-index: 100;
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//     transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//   }
//   .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//   .mobile-nav a {
//     font-family: 'Cormorant', Georgia, serif; color: #fff;
//     font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//     letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
//   }
//   .hamburger-btn {
//     display: none; flex-direction: column; gap: 5px;
//     background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//   }
//   .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//   @media (max-width: 1024px) {
//     .hamburger-btn { display: flex; }
//     .desktop-nav { display: none !important; }
//   }
//   .page-header {
//     position: absolute !important;
//     background: linear-gradient(to bottom, rgba(0,26,51,0.75) 0%, transparent 100%);
//   }
//   @keyframes slowSpin {
//     from { transform: rotate(0deg); }
//     to   { transform: rotate(360deg); }
//   }
//   .icon-spin { animation: slowSpin 30s linear infinite; }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

// function useInView(threshold = 0.12) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// const fadeUp    = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(30px)",  transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });
// const fadeLeft  = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateX(0)":"translateX(-36px)", transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });
// const fadeRight = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateX(0)":"translateX(36px)",  transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });

// function Label({ children, center = false }) {
//   return (
//     <p className={`flex items-center gap-3 uppercase text-white/40 ${center ? "justify-center" : ""}`}
//        style={{ fontFamily:sans, fontSize:"0.68rem", letterSpacing:"0.22em" }}>
//       <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
//       {children}
//     </p>
//   );
// }

// const values = [
//   { n:"01", title:"Discretion",   body:"Every client relationship is built on confidentiality and trust. We never compromise on privacy, and we treat every mandate with careful attention regardless of scale." },
//   { n:"02", title:"Continuity",   body:"We build for the long term. Our relationships span generations, and our institutional approach ensures that the knowledge and care we bring today will endure tomorrow." },
//   { n:"03", title:"Independence", body:"As a privately held institution, Savoy is free from the conflicts of interest that affect large financial conglomerates. Our only obligation is to our clients." },
//   { n:"04", title:"Judgement",    body:"Sound judgement — not algorithms or standardised models — drives every recommendation we make. We think carefully, and we advise with conviction." },
// ];

// const milestones = [
//   { year:"Founded",  text:"Savoy Bank & Trust established in Nassau, The Bahamas, with a mandate to serve a discerning international clientele." },
//   { year:"Licensed", text:"Fully licensed and regulated by the Securities Commission of The Bahamas, meeting the highest standards of international financial governance." },
//   { year:"Today",    text:"Serving clients across multiple jurisdictions, offering private banking, trust, and market services shaped entirely around individual needs." },
// ];

// export default function About() {
//   const [heroRef,      heroInView]      = useInView(0.05);
//   const [missionRef,   missionInView]   = useInView(0.1);
//   const [valuesRef,    valuesInView]    = useInView(0.05);
//   const [milestoneRef, milestoneInView] = useInView(0.1);
//   const [locationRef,  locationInView]  = useInView(0.1);
//   const [ctaRef,       ctaInView]       = useInView(0.1);

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="bg-[#001a33] text-white">

//         {/* ══ HERO ══════════════════════════════════════════════ */}
//         <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden px-6 pb-16 md:px-20 md:pb-24">

//           {/* Savoy icon — large spinning watermark, right side desktop */}
//           <div className="hidden md:block absolute right-10 top-10 bottom-0 w-1/2 pointer-events-none select-none">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div  style={{ width:"min(660px,44vw)", height:"min(560px,44vw)", position:"relative" }}>
//                 <Image src="/savoy-15.png" alt="" fill style={{ objectFit:"contain", opacity:0.75 }} />
//               </div>
//             </div>
//             <div className="absolute inset-0" style={{ background:"linear-gradient(to right,#001a33 0%,transparent 0%)" }} />
//           </div>

//           {/* Mobile subtle icon */}
//           <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none select-none">
//             <div  style={{ width:"460px", height:"560px", position:"relative" }}>
//               <Image src="/savoy-1.png" alt="" fill style={{ objectFit:"contain", opacity:0.25 }} />
//             </div>
//           </div>

//           <div className="relative z-10 max-w-2xl">
//             {/* Logo mark above heading */}
//             {/* <div style={fadeUp(heroInView,"0.05s")} className="mb-8">
//               <Image src="/savoy-logo.png" alt="Savoy" width={44} height={44} className="opacity-60" />
//             </div> */}

//             <h1
//               style={{ ...fadeUp(heroInView,"0.15s"), fontFamily:serif, fontSize:"clamp(3.2rem,7vw,6.5rem)", fontWeight:300, lineHeight:0.75 }}
//               className="text-white"
//             >
//               About<br />
//               <em style={{  color:"rgb(255, 255, 255)" }}>Savoy.</em>
//             </h1>

//             <div style={fadeUp(heroInView,"0.3s")} className="mt-8">
//               <span className="block w-10 h-px bg-white mb-6" />
//               <p className="text-white max-w-lg" style={{ fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}>
//                 Savoy Bank &amp; Trust is a privately held financial institution
//                 licensed in The Bahamas. We exist to serve clients who value
//                 discretion, continuity, and a personal relationship with those
//                 managing their financial affairs.
//               </p>
//             </div>

//             {/* <div style={fadeUp(heroInView,"0.5s")} className="flex items-center gap-3 mt-12">
//               <div className="w-px h-8" style={{ background:"linear-gradient(to bottom,rgba(255,255,255,0.3),transparent)" }} />
//               <span className="uppercase tracking-widest text-white/18" style={{ fontFamily:sans, fontSize:"0.58rem" }}>Scroll</span>
//             </div> */}
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ MISSION ═══════════════════════════════════════════════ */}
//         <section ref={missionRef} className="relative py-24 px-6 md:px-20 overflow-hidden">
//           {/* Icon watermark left */}
//           <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
//                style={{ width:"300px", height:"300px", marginLeft:"-70px", position:"absolute" }}>
//             {/* <div className="icon-spin w-full h-full relative">
//               <Image src="/savoy-icon.ico" alt="" fill style={{ objectFit:"contain", opacity:0.04 }} />
//             </div> */}
//           </div>

//           <div className="relative z-10 max-w-3xl md:ml-[16%]">
//             <div style={fadeLeft(missionInView)} className="mb-10">
//               <Label>Our Mission</Label>
//             </div>
//             <p
//               style={{ ...fadeUp(missionInView,"0.15s"), fontFamily:serif, fontSize:"clamp(1.5rem,2.5vw,2.4rem)", fontWeight:300, lineHeight:1.0 }}
//               className="text-white"
//             >
//               To be the most trusted private banking partner for internationally
//               minded individuals and families — providing clarity, stability, and
//               bespoke financial guidance across generations.
//             </p>
//             <p
//               style={{ ...fadeUp(missionInView,"0.28s"), fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}
//               className="text-white mt-8 max-w-xl"
//             >
//               We do not pursue scale for its own sake. We pursue depth — of
//               relationships, of understanding, and of service. Every client
//               engagement begins with listening and ends with outcomes shaped
//               precisely around what that individual requires.
//             </p>
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ VALUES ════════════════════════════════════════════════ */}
//         <section ref={valuesRef} className="py-24 px-6 md:px-20">
//           <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
//             <div style={fadeUp(valuesInView)}>
//               <Label>Our Values</Label>
//             </div>
//             {/* <div style={fadeRight(valuesInView,"0.1s")}>
//               <Image src="/savoy-logo.png" alt="Savoy" width={32} height={32} className="opacity-18" />
//             </div> */}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
//             {values.map((v, i) => (
//               <div
//                 key={v.n}
//                 style={fadeUp(valuesInView, `${0.08 + i * 0.1}s`)}
//                 className="border-t border-white/10 hover:border-white/40 transition-colors duration-300 py-8 flex gap-6 items-start"
//               >
//                 <div style={{ fontFamily:serif, fontSize:"0.85rem", fontWeight:300, letterSpacing:"0.1em" }}
//                      className="text-white flex-shrink-0 w-10 pt-0.5">
//                   {v.n}
//                 </div>
//                 <div>
//                   <div style={{ fontFamily:serif, fontSize:"clamp(1.2rem,1.5vw,1.45rem)", fontWeight:400, lineHeight:1.15 }}
//                        className="text-white mb-3">{v.title}</div>
//                   <div style={{ fontFamily:sans, fontSize:"0.82rem", fontWeight:300, lineHeight:1.3 }}
//                        className="text-white">{v.body}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ MILESTONES ════════════════════════════════════════════ */}
//         <section ref={milestoneRef} className="relative py-24 px-6 md:px-20 overflow-hidden">
//           {/* Icon watermark right */}
//           <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
//                style={{ width:"480px", height:"580px", marginRight:"70px", position:"absolute" }}>
//             <div className=" w-full h-full relative">
//               <Image src="/savoy-2.png" alt="" fill style={{ objectFit:"contain", opacity:0.75 }} />
//             </div>
//           </div>

//           <div className="relative z-10 max-w-2xl">
//             <div style={fadeLeft(milestoneInView)} className="mb-14">
//               <Label>Our Story</Label>
//             </div>

//             {milestones.map((m, i) => (
//               <div
//                 key={m.year}
//                 style={fadeUp(milestoneInView, `${0.1 + i * 0.15}s`)}
//                 className="flex gap-8 items-start pb-10 mb-10 border-b border-white/8 last:border-0 last:mb-0 last:pb-0"
//               >
//                 <div className="flex-shrink-0 pt-1">
//                   <span
//                     className="block border border-white px-3 py-1 text-white uppercase"
//                     style={{ fontFamily:sans, fontSize:"0.6rem", letterSpacing:"0.18em" }}
//                   >
//                     {m.year}
//                   </span>
//                 </div>
//                 <p style={{ fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.03 }}
//                    className="text-white">
//                   {m.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ LOCATION ══════════════════════════════════════════════ */}
//         <section ref={locationRef} className="py-24 px-6 md:px-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

//             <div>
//               <div style={fadeLeft(locationInView)} className="mb-10">
//                 <Label>Where We Operate</Label>
//               </div>

//               <h2
//                 style={{ ...fadeUp(locationInView,"0.12s"), fontFamily:serif, fontSize:"clamp(1.8rem,3vw,3rem)", fontWeight:300, lineHeight:1.1 }}
//                 className="text-white"
//               >
//                 Nassau,<br />
//                 <em style={{  color:"rgb(255, 255, 255)" }}>The Bahamas.</em>
//               </h2>

//               <p
//                 style={{ ...fadeUp(locationInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
//                 className="text-white mt-7 max-w-md"
//               >
//                 The Bahamas offers one of the most respected and stable financial
//                 regulatory frameworks in the world. Licensed by the Securities
//                 Commission of The Bahamas, Savoy operates within a jurisdiction
//                 that combines sovereign stability, international connectivity, and
//                 a long tradition of private banking excellence.
//               </p>

//               <div style={fadeUp(locationInView,"0.38s")} className="mt-10 flex flex-col gap-5">
//                 {[
//                   ["Regulator",  "Securities Commission of The Bahamas"],
//                   ["Structure",  "Privately Held"],
//                   ["Clientele",  "International"],
//                 ].map(([k,v]) => (
//                   <div key={k} className="flex gap-6 items-start border-l border-white/20 pl-5">
//                     <span style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.15em" }}
//                           className="text-white uppercase flex-shrink-0 w-20">{k}</span>
//                     <span style={{ fontFamily:serif, fontSize:"0.95rem", fontWeight:300 }}
//                           className="text-white">{v}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Savoy-logo large spin — desktop only */}
//             <div style={fadeRight(locationInView,"0.15s")} className="hidden md:flex justify-center items-center">
//               <div className="relative" style={{ width:"600px", height:"700px" }}>
//                 <Image
//                   src="/savoy-3.png"
//                   alt="Savoy"
//                   fill
//                   style={{
//                     objectFit:"contain", opacity:0.75,
//                     maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
//                     WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ QUOTE ═════════════════════════════════════════════════ */}
//         <section className="py-20 px-6 md:px-20 flex flex-col items-center text-center">
//           {/* <Image src="/savoy-logo.png" alt="Savoy" width={36} height={36} className="opacity-18 mb-8" /> */}
//           <p
//             style={{ fontFamily:serif, fontSize:"clamp(1.2rem,2.2vw,2rem)", fontWeight:300, fontStyle:"italic", lineHeight:1.3 }}
//             className="text-white max-w-2xl"
//           >
//             &ldquo;We do not measure success by volume. We measure it by the
//             confidence and continuity of the relationships we hold.&rdquo;
//           </p>
//           <span className="block w-10 h-px bg-white mt-8" />
//           <p style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.2em" }} className="uppercase text-white mt-4">
//             Savoy Bank &amp; Trust
//           </p>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ CTA ═══════════════════════════════════════════════════ */}
//         <section ref={ctaRef} className="py-24 px-6 md:px-20 flex flex-col items-center text-center">
//           <div style={fadeUp(ctaInView)}>
//             <Label center>Get in Touch</Label>
//           </div>

//           <h2
//             style={{ ...fadeUp(ctaInView,"0.15s"), fontFamily:serif, fontSize:"clamp(2rem,4vw,3.8rem)", fontWeight:300, lineHeight:1.05 }}
//             className="text-white mt-6"
//           >
//             Begin a Conversation
//           </h2>

//           <p
//             style={{ ...fadeUp(ctaInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
//             className="text-white mt-5 max-w-md"
//           >
//             Whether you have a specific mandate in mind or simply wish to explore
//             how Savoy might serve your needs, we welcome your enquiry.
//           </p>

//           <div style={fadeUp(ctaInView,"0.35s")} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
//             <a
//               href="mailto:info@savoybankandtrust.com"
//               style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
//               className="inline-flex items-center gap-3 uppercase text-white no-underline border border-white px-8 py-3 transition-all duration-300 hover:border-white hover:bg-white/5"
//             >
//               Email Us
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//             <a
//               href="/contact-us"
//               style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
//               className="inline-flex items-center gap-2 uppercase text-white no-underline transition-colors duration-300 hover:text-white"
//             >
//               Contact Page
//               <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
//   @import url('https://fonts.cdnfonts.com/css/general-sans');

//   .mobile-nav {
//     position: fixed; inset: 0; background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//     transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//   }
//   .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//   .mobile-nav a {
//     font-family: 'Cormorant', Georgia, serif; color: #fff;
//     font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//     letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
//   }
//   .hamburger-btn {
//     display: none; flex-direction: column; gap: 5px;
//     background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//   }
//   .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//   @media (max-width: 1024px) {
//     .hamburger-btn { display: flex; }
//     .desktop-nav { display: none !important; }
//   }
//   .page-header {
//     position: absolute !important;
//     background: linear-gradient(to bottom, rgba(var(--savoy-bg-rgb),0.75) 0%, transparent 100%);
//   }
//   @keyframes slowSpin {
//     from { transform: rotate(0deg); }
//     to   { transform: rotate(360deg); }
//   }
//   .icon-spin { animation: slowSpin 30s linear infinite; }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

// function useInView(threshold = 0.12) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// const fadeUp    = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(30px)",  transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });
// const fadeLeft  = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateX(0)":"translateX(-36px)", transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });
// const fadeRight = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateX(0)":"translateX(36px)",  transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });

// function Label({ children, center = false }) {
//   return (
//     <p className={`flex items-center gap-3 uppercase text-white/40 ${center ? "justify-center" : ""}`}
//        style={{ fontFamily:sans, fontSize:"0.68rem", letterSpacing:"0.22em" }}>
//       <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
//       {children}
//     </p>
//   );
// }

// const values = [
//   { n:"01", title:"Discretion",   body:"Every client relationship is built on confidentiality and trust. We never compromise on privacy, and we treat every mandate with careful attention regardless of scale." },
//   { n:"02", title:"Continuity",   body:"We build for the long term. Our relationships span generations, and our institutional approach ensures that the knowledge and care we bring today will endure tomorrow." },
//   { n:"03", title:"Independence", body:"As a privately held institution, Savoy is free from the conflicts of interest that affect large financial conglomerates. Our only obligation is to our clients." },
//   { n:"04", title:"Judgement",    body:"Sound judgement — not algorithms or standardised models — drives every recommendation we make. We think carefully, and we advise with conviction." },
// ];

// const milestones = [
//   { year:"Founded",  text:"Savoy Bank & Trust established in Nassau, The Bahamas, with a mandate to serve a discerning international clientele." },
//   { year:"Licensed", text:"Fully licensed and regulated by the Securities Commission of The Bahamas, meeting the highest standards of international financial governance." },
//   { year:"Today",    text:"Serving clients across multiple jurisdictions, offering private banking, trust, and market services shaped entirely around individual needs." },
// ];

// export default function About() {
//   const [heroRef,      heroInView]      = useInView(0.05);
//   const [missionRef,   missionInView]   = useInView(0.1);
//   const [valuesRef,    valuesInView]    = useInView(0.05);
//   const [milestoneRef, milestoneInView] = useInView(0.1);
//   const [locationRef,  locationInView]  = useInView(0.1);
//   const [ctaRef,       ctaInView]       = useInView(0.1);

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="bg-[#001a33] text-white">

//         {/* ══ HERO ══════════════════════════════════════════════ */}
//         <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden px-6 pt-32 pb-12 md:px-20 md:pb-24 md:pt-0">

//           {/* Desktop watermark */}
//           {/* <div className="hidden md:block absolute right-10 top-10 bottom-0 w-1/2 pointer-events-none select-none">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div style={{ width:"min(660px,44vw)", height:"min(560px,44vw)", position:"relative" }}>
//                 <Image src="/savoy-15.png" alt="" fill style={{ objectFit:"contain", opacity:0.75 }} />
//               </div>
//             </div>
//             <div className="absolute inset-0" style={{ background:"linear-gradient(to right,#001a33 0%,transparent 0%)" }} />
//           </div> */}

//           {/* Mobile icon */}
//           {/* <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none select-none">
//             <div style={{ width:"560px", height:"620px", position:"relative" }}>
//               <Image src="/savoy-1.png" alt="" fill style={{ objectFit:"contain", opacity:0.25 }} />
//             </div>
//           </div> */}

//           <div className="relative z-10 w-full md:max-w-2xl">
//             <h1
//               style={{ ...fadeUp(heroInView,"0.15s"), fontFamily:serif, fontSize:"clamp(3.2rem,7vw,6.5rem)", fontWeight:300, lineHeight:0.75 }}
//               className="text-white"
//             >
//               About<br />
//               <em style={{ color:"var(--savoy-font)" }}>Savoy.</em>
//             </h1>

//             <div style={fadeUp(heroInView,"0.3s")} className="mt-8">
//               <span className="block w-10 h-px bg-white mb-6" />
//               <p className="text-white w-full max-w-lg" style={{ fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}>
//                 Savoy Bank &amp; Trust is a privately held financial institution
//                 licensed in The Bahamas. We exist to serve clients who value
//                 discretion, continuity, and a personal relationship with those
//                 managing their financial affairs.
//               </p>
//             </div>
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ MISSION ═══════════════════════════════════════════════ */}
//         <section ref={missionRef} className="relative py-12 md:py-24 px-6 md:px-20 overflow-hidden">
//           <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
//                style={{ width:"300px", height:"300px", marginLeft:"-70px", position:"absolute" }} />

//           <div className="relative z-10 max-w-3xl md:ml-[16%]">
//             <div style={fadeLeft(missionInView)} className="mb-10">
//               <Label>Our Mission</Label>
//             </div>
//             <p
//               style={{ ...fadeUp(missionInView,"0.15s"), fontFamily:serif, fontSize:"clamp(1.5rem,2.5vw,2.4rem)", fontWeight:300, lineHeight:1.0 }}
//               className="text-white"
//             >
//               To be the most trusted private banking partner for internationally
//               minded individuals and families — providing clarity, stability, and
//               bespoke financial guidance across generations.
//             </p>
//             <p
//               style={{ ...fadeUp(missionInView,"0.28s"), fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}
//               className="text-white mt-8 max-w-xl"
//             >
//               We do not pursue scale for its own sake. We pursue depth — of
//               relationships, of understanding, and of service. Every client
//               engagement begins with listening and ends with outcomes shaped
//               precisely around what that individual requires.
//             </p>
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ VALUES ════════════════════════════════════════════════ */}
//         <section ref={valuesRef} className="py-12 md:py-24 px-6 md:px-20">
//           <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
//             <div style={fadeUp(valuesInView)}>
//               <Label>Our Values</Label>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
//             {values.map((v, i) => (
//               <div
//                 key={v.n}
//                 style={fadeUp(valuesInView, `${0.08 + i * 0.1}s`)}
//                 className="border-t border-white/10 hover:border-white/40 transition-colors duration-300 py-6 md:py-8 flex gap-4 md:gap-6 items-start"
//               >
//                 <div style={{ fontFamily:serif, fontSize:"0.85rem", fontWeight:300, letterSpacing:"0.1em" }}
//                      className="text-white flex-shrink-0 w-10 pt-0.5">
//                   {v.n}
//                 </div>
//                 <div>
//                   <div style={{ fontFamily:serif, fontSize:"clamp(1.2rem,1.5vw,1.45rem)", fontWeight:400, lineHeight:1.15 }}
//                        className="text-white mb-2 md:mb-3">{v.title}</div>
//                   <div style={{ fontFamily:sans, fontSize:"0.82rem", fontWeight:300, lineHeight:1.3 }}
//                        className="text-white">{v.body}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ MILESTONES ════════════════════════════════════════════ */}
//         <section ref={milestoneRef} className="relative py-12 md:py-24 px-6 md:px-20 overflow-hidden">
//           {/* Desktop watermark */}
//           {/* <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
//                style={{ width:"480px", height:"580px", marginRight:"70px", position:"absolute" }}>
//             <div className="w-full h-full relative">
//               <Image src="/savoy-2.png" alt="" fill style={{ objectFit:"contain", opacity:0.75 }} />
//             </div>
//           </div> */}

//           <div className="relative z-10 w-full md:max-w-2xl">
//             <div style={fadeLeft(milestoneInView)} className="mb-10 md:mb-14">
//               <Label>Our Story</Label>
//             </div>

//             {/* ── The fix: comment removed from between JSX props ── */}
//             {milestones.map((m, i) => (
//               <div
//                 key={m.year}
//                 style={fadeUp(milestoneInView, `${0.1 + i * 0.15}s`)}
//                 className="flex flex-col sm:flex-row gap-4 md:gap-8 items-start pb-8 mb-8 md:pb-10 md:mb-10 border-b border-white/8 last:border-0 last:mb-0 last:pb-0"
//               >
//                 <div className="flex-shrink-0">
//                   <span
//                     className="block border border-white px-3 py-1 text-white uppercase"
//                     style={{ fontFamily:sans, fontSize:"0.6rem", letterSpacing:"0.18em" }}
//                   >
//                     {m.year}
//                   </span>
//                 </div>
//                 <p style={{ fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.6 }}
//                    className="text-white">
//                   {m.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ LOCATION ══════════════════════════════════════════════ */}
//         <section ref={locationRef} className="py-12 md:py-24 px-6 md:px-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

//             <div>
//               <div style={fadeLeft(locationInView)} className="mb-8 md:mb-10">
//                 <Label>Where We Operate</Label>
//               </div>

//               <h2
//                 style={{ ...fadeUp(locationInView,"0.12s"), fontFamily:serif, fontSize:"clamp(1.8rem,3vw,3rem)", fontWeight:300, lineHeight:1.1 }}
//                 className="text-white"
//               >
//                 Nassau,<br />
//                 <em style={{ color:"var(--savoy-font)" }}>The Bahamas.</em>
//               </h2>

//               <p
//                 style={{ ...fadeUp(locationInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
//                 className="text-white mt-6 md:mt-7 max-w-md"
//               >
//                 The Bahamas offers one of the most respected and stable financial
//                 regulatory frameworks in the world. Licensed by the Securities
//                 Commission of The Bahamas, Savoy operates within a jurisdiction
//                 that combines sovereign stability, international connectivity, and
//                 a long tradition of private banking excellence.
//               </p>

//               <div style={fadeUp(locationInView,"0.38s")} className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-5">
//                 {[
//                   ["Regulator",  "Securities Commission of The Bahamas"],
//                   ["Structure",  "Privately Held"],
//                   ["Clientele",  "International"],
//                 ].map(([k,v]) => (
//                   <div key={k} className="flex gap-4 md:gap-6 items-start border-l border-white/20 pl-4 md:pl-5">
//                     <span style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.15em" }}
//                           className="text-white uppercase flex-shrink-0 w-20">{k}</span>
//                     <span style={{ fontFamily:serif, fontSize:"0.95rem", fontWeight:300 }}
//                           className="text-white">{v}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Desktop image */}
//             {/* <div style={fadeRight(locationInView,"0.15s")} className="hidden md:flex justify-center items-center">
//               <div className="relative" style={{ width:"600px", height:"700px" }}>
//                 <Image
//                   src="/savoy-3.png"
//                   alt="Savoy"
//                   fill
//                   style={{
//                     objectFit:"contain", opacity:0.75,
//                     maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
//                     WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
//                   }}
//                 />
//               </div>
//             </div> */}
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ QUOTE ═════════════════════════════════════════════════ */}
//         <section className="py-12 md:py-20 px-6 md:px-20 flex flex-col items-center text-center">
//           <p
//             style={{ fontFamily:serif, fontSize:"clamp(1.2rem,2.2vw,2rem)", fontWeight:300, fontStyle:"italic", lineHeight:1.3 }}
//             className="text-white max-w-2xl"
//           >
//             &ldquo;We do not measure success by volume. We measure it by the
//             confidence and continuity of the relationships we hold.&rdquo;
//           </p>
//           <span className="block w-10 h-px bg-white mt-8" />
//           <p style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.2em" }} className="uppercase text-white mt-4">
//             Savoy Bank &amp; Trust
//           </p>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ CTA ═══════════════════════════════════════════════════ */}
//         <section ref={ctaRef} className="py-14 md:py-24 px-6 md:px-20 flex flex-col items-center text-center">
//           <div style={fadeUp(ctaInView)}>
//             <Label center>Get in Touch</Label>
//           </div>

//           <h2
//             style={{ ...fadeUp(ctaInView,"0.15s"), fontFamily:serif, fontSize:"clamp(2rem,4vw,3.8rem)", fontWeight:300, lineHeight:1.05 }}
//             className="text-white mt-6"
//           >
//             Begin a Conversation
//           </h2>

//           <p
//             style={{ ...fadeUp(ctaInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
//             className="text-white mt-5 max-w-md"
//           >
//             Whether you have a specific mandate in mind or simply wish to explore
//             how Savoy might serve your needs, we welcome your enquiry.
//           </p>

//           <div style={fadeUp(ctaInView,"0.35s")} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
//             <a
//               href="mailto:info@savoybankandtrust.com"
//               style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
//               className="inline-flex items-center gap-3 uppercase text-white no-underline border border-white px-8 py-3 transition-all duration-300 hover:border-white hover:bg-white/5"
//             >
//               Email Us
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//             <a
//               href="/contact-us"
//               style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
//               className="inline-flex items-center gap-2 uppercase text-white no-underline transition-colors duration-300 hover:text-white"
//             >
//               Contact Page
//               <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
//   @import url('https://fonts.cdnfonts.com/css/general-sans');

//   .mobile-nav {
//     position: fixed; inset: 0; background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//     transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//   }
//   .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//   .mobile-nav a {
//     font-family: 'Cormorant', Georgia, serif; color: #fff;
//     font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//     letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
//   }
//   .hamburger-btn {
//     display: none; flex-direction: column; gap: 5px;
//     background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//   }
//   .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//   @media (max-width: 1024px) {
//     .hamburger-btn { display: flex; }
//     .desktop-nav { display: none !important; }
//   }
//   .page-header {
//     position: absolute !important;
//     background: linear-gradient(to bottom, rgba(var(--savoy-bg-rgb),0.75) 0%, transparent 100%);
//   }
//   @keyframes slowSpin {
//     from { transform: rotate(0deg); }
//     to   { transform: rotate(360deg); }
//   }
//   .icon-spin { animation: slowSpin 30s linear infinite; }

//   /* Timeline styles */
//   .timeline-track {
//     display: flex;
//     align-items: center;
//     gap: 0;
//     position: relative;
//   }
//   .timeline-line {
//     flex: 1;
//     height: 1px;
//     background: rgba(255,255,255,0.25);
//   }
//   .timeline-node {
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     cursor: pointer;
//     z-index: 2;
//   }
//   .timeline-node-btn {
//     width: 52px;
//     height: 52px;
//     border-radius: 50%;
//     border: 1.5px solid rgba(255,255,255,0.35);
//     background: transparent;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     transition: all 0.35s ease;
//     color: #fff;
//     font-family: 'Cormorant Garamond', Georgia, serif;
//     font-size: 0.72rem;
//     font-weight: 300;
//     letter-spacing: 0.1em;
//   }
//   .timeline-node-btn.active {
//     background: #fff;
//     color: var(--savoy-bg, #001a33);
//     border-color: #fff;
//     width: 72px;
//     height: 72px;
//     font-size: 1rem;
//     font-weight: 400;
//   }
//   .timeline-node-btn:hover:not(.active) {
//     border-color: rgba(255,255,255,0.7);
//     background: rgba(255,255,255,0.08);
//   }
//   .timeline-content-panel {
//     opacity: 0;
//     transform: translateY(12px);
//     transition: opacity 0.4s ease, transform 0.4s ease;
//     pointer-events: none;
//   }
//   .timeline-content-panel.visible {
//     opacity: 1;
//     transform: translateY(0);
//     pointer-events: all;
//   }
//   .timeline-nav-btn {
//     width: 36px;
//     height: 36px;
//     border-radius: 50%;
//     border: 1px solid rgba(255,255,255,0.3);
//     background: transparent;
//     color: #fff;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     transition: all 0.25s ease;
//     flex-shrink: 0;
//   }
//   .timeline-nav-btn:hover {
//     border-color: rgba(255,255,255,0.7);
//     background: rgba(255,255,255,0.1);
//   }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans = "'General Sans', 'Inter', system-ui, sans-serif";

// function useInView(threshold = 0.12) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold },
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// const fadeUp = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateY(0)" : "translateY(30px)",
//   transition: `opacity 0.9s ease ${d},transform 0.9s ease ${d}`,
// });
// const fadeLeft = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateX(0)" : "translateX(-36px)",
//   transition: `opacity 0.9s ease ${d},transform 0.9s ease ${d}`,
// });
// const fadeRight = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateX(0)" : "translateX(36px)",
//   transition: `opacity 0.9s ease ${d},transform 0.9s ease ${d}`,
// });

// function Label({ children, center = false }) {
//   return (
//     <p
//       className={`flex items-center gap-3 uppercase text-white/40 ${center ? "justify-center" : ""}`}
//       style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
//     >
//       <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
//       {children}
//     </p>
//   );
// }

// const values = [
//   {
//     n: "01",
//     title: "Discretion",
//     body: "Every client relationship is built on confidentiality and trust. We never compromise on privacy, and we treat every mandate with careful attention regardless of scale.",
//   },
//   {
//     n: "02",
//     title: "Continuity",
//     body: "We build for the long term. Our relationships span generations, and our institutional approach ensures that the knowledge and care we bring today will endure tomorrow.",
//   },
//   {
//     n: "03",
//     title: "Independence",
//     body: "As a privately held institution, Savoy is free from the conflicts of interest that affect large financial conglomerates. Our only obligation is to our clients.",
//   },
//   {
//     n: "04",
//     title: "Judgement",
//     body: "Sound judgement — not algorithms or standardised models — drives every recommendation we make. We think carefully, and we advise with conviction.",
//   },
// ];

// // Interactive timeline milestones matching Britannia-style history & tradition
// const timelineMilestones = [
//   {
//     year: "1986",
//     location: "UNITED KINGDOM",
//     title: "Incorporation of Berkeley Features Limited",
//     text: "The foundations of what would become Savoy Bank & Trust were laid in the United Kingdom with the formal incorporation of Berkeley Features Limited, establishing the institutional lineage and governance framework that continues to define our approach.",
//   },
//   {
//     year: "2001",
//     location: "THE BAHAMAS",
//     title: "Nassau Operations Established",
//     text: "Savoy Bank & Trust expanded its international footprint by establishing principal operations in Nassau, The Bahamas — a jurisdiction renowned for its stable regulatory environment and long tradition of private banking excellence.",
//   },
//   {
//     year: "2012",
//     location: "REGULATORY MILESTONE",
//     title: "Full Banking & Trust Licence Granted",
//     text: "Following rigorous due diligence, Savoy Bank & Trust received its full banking and trust licence from the Central Bank of The Bahamas and the Securities Commission of The Bahamas, cementing our position as a fully regulated private banking institution.",
//   },
//   {
//     year: "Today",
//     location: "GLOBAL CLIENTELE",
//     title: "A Trusted Partner Across Generations",
//     text: "Serving ultra-high-net-worth individuals, family offices, and institutions across multiple jurisdictions, Savoy Bank & Trust delivers bespoke private banking, trust, and investment services shaped entirely around the needs of each individual client.",
//   },
// ];

// function InteractiveTimeline() {
//   const [activeIdx, setActiveIdx] = useState(0);
//   const [ref, inView] = useInView(0.1);

//   const prev = () => setActiveIdx((i) => Math.max(0, i - 1));
//   const next = () =>
//     setActiveIdx((i) => Math.min(timelineMilestones.length - 1, i + 1));

//   const active = timelineMilestones[activeIdx];

//   return (
//     <section
//       ref={ref}
//       style={{ background: "var(--savoy-bg, #001a33)" }}
//       className="py-12 md:py-20 px-6 md:px-20"
//     >
//       {/* Section heading */}
//       <div style={fadeUp(inView)} className="mb-10 md:mb-14">
//         <Label>History &amp; Tradition</Label>
//         <h2
//           style={{
//             fontFamily: serif,
//             fontSize: "clamp(1.6rem,2.8vw,2.6rem)",
//             fontWeight: 300,
//             lineHeight: 1.1,
//             marginTop: "1.5rem",
//           }}
//           className="text-white"
//         >
//           Our Story
//         </h2>
//       </div>

//       {/* Timeline track */}
//       <div style={fadeUp(inView, "0.15s")} className="w-full mb-10 md:mb-14">
//         <div className="flex items-center gap-0 w-full">
//           {/* Prev button */}
//           <button
//             className="timeline-nav-btn mr-3 md:mr-5"
//             onClick={prev}
//             aria-label="Previous milestone"
//             disabled={activeIdx === 0}
//             style={{ opacity: activeIdx === 0 ? 0.3 : 1 }}
//           >
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//               <path
//                 d="M8 2L4 6l4 4"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           {/* Nodes + lines */}
//           <div className="flex-1 flex items-center">
//             {timelineMilestones.map((m, i) => (
//               <div
//                 key={m.year}
//                 className="flex items-center flex-1 last:flex-none"
//               >
//                 {/* Node */}
//                 <div className="timeline-node" onClick={() => setActiveIdx(i)}>
//                   <button
//                     className={`timeline-node-btn${activeIdx === i ? " active" : ""}`}
//                     aria-label={`Milestone ${m.year}`}
//                   >
//                     {m.year}
//                   </button>
//                 </div>
//                 {/* Line after node (not after last) */}
//                 {i < timelineMilestones.length - 1 && (
//                   <div className="timeline-line" />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Next button */}
//           <button
//             className="timeline-nav-btn ml-3 md:ml-5"
//             onClick={next}
//             aria-label="Next milestone"
//             disabled={activeIdx === timelineMilestones.length - 1}
//             style={{
//               opacity: activeIdx === timelineMilestones.length - 1 ? 0.3 : 1,
//             }}
//           >
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//               <path
//                 d="M4 2l4 4-4 4"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Content panel — fades in on active change */}
//       <div
//         key={activeIdx}
//         className="timeline-content-panel visible"
//         style={{ maxWidth: "680px" }}
//       >
//         <p
//           style={{
//             fontFamily: sans,
//             fontSize: "0.62rem",
//             letterSpacing: "0.22em",
//           }}
//           className="uppercase text-white/40 mb-3"
//         >
//           {active.location}
//         </p>
//         <h3
//           style={{
//             fontFamily: serif,
//             fontSize: "clamp(1.2rem,2vw,1.8rem)",
//             fontWeight: 300,
//             lineHeight: 1.15,
//           }}
//           className="text-white mb-4"
//         >
//           {active.title}
//         </h3>
//         <p
//           style={{
//             fontFamily: sans,
//             fontSize: "0.83rem",
//             fontWeight: 300,
//             lineHeight: 1.6,
//           }}
//           className="text-white"
//         >
//           {active.text}
//         </p>
//       </div>
//     </section>
//   );
// }

// export default function About() {
//   const [heroRef, heroInView] = useInView(0.05);
//   const [missionRef, missionInView] = useInView(0.1);
//   const [valuesRef, valuesInView] = useInView(0.05);
//   const [locationRef, locationInView] = useInView(0.1);
//   const [ctaRef, ctaInView] = useInView(0.1);

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="bg-[#001a33] text-white">
//         {/* ══ HERO ══════════════════════════════════════════════ */}
//         {/* <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden px-6 pt-10 pb-12 md:px-20 md:pb-24 md:pt-0"> */}
//         <section
//           ref={heroRef}
//           className="relative  flex items-start overflow-hidden px-6 pt-24 pb-12 md:px-20 md:pt-75 md:pb-5"
//         >
//           <div className="relative z-10 w-full md:max-w-2xl">
//             <h1
//               style={{
//                 ...fadeUp(heroInView, "0.15s"),
//                 fontFamily: serif,
//                 fontSize: "clamp(3.2rem,7vw,6.5rem)",
//                 fontWeight: 300,
//                 lineHeight: 0.75,
//               }}
//               className="text-white"
//             >
//               About
//               <br />
//               <span className="block w-10 h-px bg-white mt-8" />
//               {/* <em style={{ color:"var(--savoy-font)" }}>Savoy.</em> */}
//             </h1>

//             {/* <div style={fadeUp(heroInView,"0.3s")} className="mt-8">
//               <span className="block w-10 h-px bg-white mb-6" />
//               <p className="text-white w-full max-w-lg" style={{ fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}>
//                 Savoy Bank &amp; Trust is a privately held financial institution
//                 licensed in The Bahamas. We exist to serve clients who value
//                 discretion, continuity, and a personal relationship with those
//                 managing their financial affairs.
//               </p>
//             </div> */}
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ WELCOME / MISSION ═══════════════════════════════════════════════ */}
//         <section
//           ref={missionRef}
//           className="relative py-12 md:py-24 px-6 md:px-20 overflow-hidden"
//         >
//           <div
//             className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
//             style={{
//               width: "300px",
//               height: "300px",
//               marginLeft: "-70px",
//               position: "absolute",
//             }}
//           />

//           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
//             <div>
//               <div style={fadeLeft(missionInView)} className="mb-8">
//                 <Label>Welcome to Savoy Bank and Trust</Label>
//               </div>
//               <h2
//                 style={{
//                   ...fadeUp(missionInView, "0.12s"),
//                   fontFamily: serif,
//                   fontSize: "clamp(2rem, 4vw, 4rem)",
//                   fontWeight: 300,
//                   lineHeight: 1.0,
//                 }}
//                 className="text-white mb-6"
//               >
//                 The Standard for
//                 <br />
//                 <em style={{ color: "var(--savoy-font)" }}>Private Banking.</em>
//               </h2>
//               <p
//                 style={{
//                   ...fadeUp(missionInView, "0.2s"),
//                   fontFamily: sans,
//                   fontSize: "0.85rem",
//                   fontWeight: 300,
//                   lineHeight: 1.3,
//                 }}
//                 className="text-white mb-5 max-w-xl"
//               >
//                 Based in Nassau, The Bahamas, Savoy is a privately held private
//                 bank offering a comprehensive suite of investment and banking
//                 services to a discerning clientele. We serve a global client
//                 base of ultra-high-net-worth individuals (UHNWIs), family
//                 offices, and institutions, delivering world-class solutions from
//                 a stable, well-regulated financial center.
//               </p>
//               <p
//                 style={{
//                   ...fadeUp(missionInView, "0.32s"),
//                   fontFamily: sans,
//                   fontSize: "0.85rem",
//                   fontWeight: 300,
//                   lineHeight: 1.3,
//                 }}
//                 className="text-white mb-5 max-w-xl"
//               >
//                 Regulated and licensed by The Central Bank of The Bahamas and
//                 The Securities Commission of the Bahamas, operating in The
//                 Bahamas for over 20 years, providing customized banking and
//                 trust services to meet the needs of its international clientele.
//               </p>
//               <p
//                 style={{
//                   ...fadeUp(missionInView, "0.44s"),
//                   fontFamily: sans,
//                   fontSize: "0.85rem",
//                   fontWeight: 300,
//                   lineHeight: 1.3,
//                 }}
//                 className="text-white max-w-xl"
//               >
//                 Senior executives with decades of global experience and
//                 expertise have worked together for most of their careers
//                 providing a guarantee of stability and continuity. With an old
//                 fashioned focus on client relationships coupled with modern
//                 private banking facilities, Savoy Bank &amp; Trust offers an
//                 environment for tailored services delivered with discretion.
//               </p>
//             </div>

//             {/* Decorative circular image panel */}
//             {/* <div style={fadeRight(missionInView,"0.15s")} className="hidden md:flex justify-center items-center">
//               <div
//                 className="relative"
//                 style={{
//                   width: "460px",
//                   height: "460px",
//                   borderRadius: "50%",
//                   overflow: "hidden",
//                   border: "1px solid rgb(3,22,41)",
//                 }}
//               >
//                 <Image
//                   src="/savoy-2.png"
//                   alt="Savoy Bank & Trust — Nassau, The Bahamas"
//                   fill
//                   style={{ objectFit: "cover", opacity: 0.75 }}
//                 />
//               </div>
//             </div> */}
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ VALUES ════════════════════════════════════════════════ */}
//         {/* <section ref={valuesRef} className="py-12 md:py-24 px-6 md:px-20">
//           <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
//             <div style={fadeUp(valuesInView)}>
//               <Label>Our Values</Label>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
//             {values.map((v, i) => (
//               <div
//                 key={v.n}
//                 style={fadeUp(valuesInView, `${0.08 + i * 0.1}s`)}
//                 className="border-t border-white/10 hover:border-white/40 transition-colors duration-300 py-6 md:py-8 flex gap-4 md:gap-6 items-start"
//               >
//                 <div style={{ fontFamily:serif, fontSize:"0.85rem", fontWeight:300, letterSpacing:"0.1em" }}
//                      className="text-white flex-shrink-0 w-10 pt-0.5">
//                   {v.n}
//                 </div>
//                 <div>
//                   <div style={{ fontFamily:serif, fontSize:"clamp(1.2rem,1.5vw,1.45rem)", fontWeight:400, lineHeight:1.15 }}
//                        className="text-white mb-2 md:mb-3">{v.title}</div>
//                   <div style={{ fontFamily:sans, fontSize:"0.82rem", fontWeight:300, lineHeight:1.3 }}
//                        className="text-white">{v.body}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section> */}

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ INTERACTIVE HISTORY & TRADITION TIMELINE ══════════════ */}
//         <InteractiveTimeline />

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ LOCATION ══════════════════════════════════════════════ */}
//         {/* <section ref={locationRef} className="py-12 md:py-24 px-6 md:px-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

//             <div>
//               <div style={fadeLeft(locationInView)} className="mb-8 md:mb-10">
//                 <Label>Where We Operate</Label>
//               </div>

//               <h2
//                 style={{ ...fadeUp(locationInView,"0.12s"), fontFamily:serif, fontSize:"clamp(1.8rem,3vw,3rem)", fontWeight:300, lineHeight:1.1 }}
//                 className="text-white"
//               >
//                 Nassau,<br />
//                 <em style={{ color:"var(--savoy-font)" }}>The Bahamas.</em>
//               </h2>

//               <p
//                 style={{ ...fadeUp(locationInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
//                 className="text-white mt-6 md:mt-7 max-w-md"
//               >
//                 The Bahamas offers one of the most respected and stable financial
//                 regulatory frameworks in the world. Licensed by the Securities
//                 Commission of The Bahamas, Savoy operates within a jurisdiction
//                 that combines sovereign stability, international connectivity, and
//                 a long tradition of private banking excellence.
//               </p>

//               <div style={fadeUp(locationInView,"0.38s")} className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-5">
//                 {[
//                   ["Regulator",  "Securities Commission of The Bahamas"],
//                   ["Structure",  "Privately Held"],
//                   ["Clientele",  "International"],
//                 ].map(([k,v]) => (
//                   <div key={k} className="flex gap-4 md:gap-6 items-start border-l border-white/20 pl-4 md:pl-5">
//                     <span style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.15em" }}
//                           className="text-white uppercase flex-shrink-0 w-20">{k}</span>
//                     <span style={{ fontFamily:serif, fontSize:"0.95rem", fontWeight:300 }}
//                           className="text-white">{v}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section> */}

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ QUOTE ═════════════════════════════════════════════════ */}
//         {/* <section className="py-12 md:py-20 px-6 md:px-20 flex flex-col items-center text-center">
//           <p
//             style={{ fontFamily:serif, fontSize:"clamp(1.2rem,2.2vw,2rem)", fontWeight:300, fontStyle:"italic", lineHeight:1.3 }}
//             className="text-white max-w-2xl"
//           >
//             &ldquo;We do not measure success by volume. We measure it by the
//             confidence and continuity of the relationships we hold.&rdquo;
//           </p>
//           <span className="block w-10 h-px bg-white mt-8" />
//           <p style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.2em" }} className="uppercase text-white mt-4">
//             Savoy Bank &amp; Trust
//           </p>
//         </section> */}

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ CTA ═══════════════════════════════════════════════════ */}
//         {/* <section ref={ctaRef} className="py-14 md:py-24 px-6 md:px-20 flex flex-col items-center text-center">
//           <div style={fadeUp(ctaInView)}>
//             <Label center>Get in Touch</Label>
//           </div>

//           <h2
//             style={{ ...fadeUp(ctaInView,"0.15s"), fontFamily:serif, fontSize:"clamp(2rem,4vw,3.8rem)", fontWeight:300, lineHeight:1.05 }}
//             className="text-white mt-6"
//           >
//             Begin a Conversation
//           </h2>

//           <p
//             style={{ ...fadeUp(ctaInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
//             className="text-white mt-5 max-w-md"
//           >
//             Whether you have a specific mandate in mind or simply wish to explore
//             how Savoy might serve your needs, we welcome your enquiry.
//           </p>

//           <div style={fadeUp(ctaInView,"0.35s")} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
//             <a
//               href="mailto:info@savoybankandtrust.com"
//               style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
//               className="inline-flex items-center gap-3 uppercase text-white no-underline border border-white px-8 py-3 transition-all duration-300 hover:border-white hover:bg-white/5"
//             >
//               Email Us
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//             <a
//               href="/contact-us"
//               style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
//               className="inline-flex items-center gap-2 uppercase text-white no-underline transition-colors duration-300 hover:text-white"
//             >
//               Contact Page
//               <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//           </div>
//         </section> */}

//         <div className="w-full h-px bg-[#001a33]" />
//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }

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
    position: fixed; inset: 0; background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
    transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
  }
  .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
  .mobile-nav a {
    font-family: 'Cormorant', Georgia, serif; color: #fff;
    font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
    letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
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
    background: linear-gradient(to bottom, rgba(var(--savoy-bg-rgb),0.75) 0%, transparent 100%);
  }
  @keyframes slowSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .icon-spin { animation: slowSpin 30s linear infinite; }

  /* Timeline styles */
  .timeline-track {
    display: flex;
    align-items: center;
    gap: 0;
    position: relative;
  }
  .timeline-line {
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.25);
  }
  .timeline-node {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    z-index: 2;
  }
  .timeline-node-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.35);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.35s ease;
  color: #fff;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.72rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  transform-origin: center;
  flex-shrink: 0;
}
  .timeline-node-btn.active {
  background: #fff;
  color: var(--savoy-bg, #001a33);
  border-color: #fff;
  font-size: 1rem;
  font-weight: 400;
  transform: scale(1.25);
}
  .timeline-node-btn:hover:not(.active) {
    border-color: rgba(255,255,255,0.7);
    background: rgba(255,255,255,0.08);
  }
  .timeline-content-panel {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: none;
  }
  .timeline-content-panel.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }
  .timeline-nav-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.3);
    background: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s ease;
    flex-shrink: 0;
  }
  .timeline-nav-btn:hover {
    border-color: rgba(255,255,255,0.7);
    background: rgba(255,255,255,0.1);
  }

  /* Scrollable timeline track */
  .tl-scroll-wrap {
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-bottom: 8px;
    cursor: grab;
    user-select: none;
  }
  .tl-scroll-wrap::-webkit-scrollbar { display: none; }
  .tl-scroll-wrap.grabbing { cursor: grabbing; }

  /* Progress bar */
  .tl-progress {
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,0.1);
    margin-bottom: 32px;
    position: relative;
    overflow: hidden;
  }
  .tl-progress-fill {
    position: absolute;
    top: 0; left: 0; height: 100%;
    background: rgba(255,255,255,0.5);
    transition: width 0.4s cubic-bezier(0.16,1,0.3,1);
  }

  /* Watermark year */
  .tl-year-bg {
    position: absolute;
    right: 0; top: -20px;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(4rem, 10vw, 7rem);
    font-weight: 300;
    color: rgba(255,255,255,0.04);
    pointer-events: none;
    line-height: 1;
    letter-spacing: -0.02em;
    user-select: none;
    transition: opacity 0.4s ease;
  }
`;

const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'General Sans', 'Inter', system-ui, sans-serif";

function useInView(threshold = 0.12) {
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
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const fadeUp = (v, d = "0s") => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(30px)",
  transition: `opacity 0.9s ease ${d},transform 0.9s ease ${d}`,
});
const fadeLeft = (v, d = "0s") => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateX(0)" : "translateX(-36px)",
  transition: `opacity 0.9s ease ${d},transform 0.9s ease ${d}`,
});
const fadeRight = (v, d = "0s") => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateX(0)" : "translateX(36px)",
  transition: `opacity 0.9s ease ${d},transform 0.9s ease ${d}`,
});

function Label({ children, center = false }) {
  return (
    <p
      className={`flex items-center gap-3 uppercase text-white/40 ${center ? "justify-center" : ""}`}
      style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
    >
      <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
      {children}
    </p>
  );
}

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

const missionVision = [
  {
    label: "Mission",
    title: "Preserving what matters most.",
    body: "At Savoy Bank & Trust, we are committed to preserving and enhancing the wealth entrusted to us through tailored banking, investment, and trust solutions. Guided by integrity, discretion, and a long-term perspective, we build trusted relationships that empower our clients to achieve their financial aspirations while safeguarding their legacy for future generations.",
  },
  {
    label: "Vision",
    title: "Setting the standard.",
    body: "To be the premier private bank and trust company in The Bahamas, distinguished by exceptional client service, prudent stewardship, and unwavering trust. We aspire to set the standard for private banking by helping generations of clients protect, grow, and transfer wealth through innovative solutions, global perspectives, and enduring partnerships.",
  },
];

const values = [
  {
    n: "01",
    title: "Discretion",
    body: "Every client relationship is built on confidentiality and trust. We never compromise on privacy, and we treat every mandate with careful attention regardless of scale.",
  },
  {
    n: "02",
    title: "Continuity",
    body: "We build for the long term. Our relationships span generations, and our institutional approach ensures that the knowledge and care we bring today will endure tomorrow.",
  },
  {
    n: "03",
    title: "Independence",
    body: "As a privately held institution, Savoy is free from the conflicts of interest that affect large financial conglomerates. Our only obligation is to our clients.",
  },
  {
    n: "04",
    title: "Judgement",
    body: "Sound judgement — not algorithms or standardised models — drives every recommendation we make. We think carefully, and we advise with conviction.",
  },
];

// Updated timeline milestones — Britannia Financial Group history
// const timelineMilestones = [
//   {
//     year: "1986",
//     location: "UNITED KINGDOM",
//     title: "Incorporation of Berkeley Features Limited",
//     text: "The foundations of the group were established in the United Kingdom with the formal incorporation of Berkeley Features Limited, defining the governance framework and institutional lineage that continues to underpin our approach.",
//   },
//   {
//     year: "2012",
//     location: "SWITZERLAND",
//     title: "Incorporation of Britannia Wealth Management",
//     text: "With the establishment of Britannia Wealth Management in Switzerland, the group extended its reach into a premier global financial centre, broadening the suite of wealth management capabilities available to international clients.",
//   },
//   {
//     year: "2016",
//     location: "UNITED KINGDOM",
//     title: "Incorporation of Britannia Financial Group",
//     text: "Britannia Financial Group was incorporated in the United Kingdom, consolidating the growing network of affiliated entities under a single unified holding structure to support continued expansion.",
//   },
//   {
//     year: "2018",
//     location: "UNITED KINGDOM",
//     title: "Britannia Global Investments",
//     text: "Through the strategic acquisition of Dexter Markets UK, Britannia Global Investments was formed — enhancing the group's capital markets capabilities and broadening its investment infrastructure for institutional and private clients alike.",
//   },
//   {
//     year: "2019",
//     location: "UNITED KINGDOM",
//     title: "Britannia Global Markets",
//     text: "The acquisition of Berkeley Futures Limited gave rise to Britannia Global Markets, strengthening the group's derivatives and futures capabilities and reinforcing its position across global financial markets.",
//   },
//   {
//     year: "2019",
//     location: "BAHAMAS",
//     title: "Britannia Bank & Trust",
//     text: "The acquisition of Amber Bank & Trust marked the group's formal entry into private banking in The Bahamas — a jurisdiction of enduring stability and regulatory excellence — establishing Britannia Bank & Trust as the private banking arm of the group.",
//   },
//   {
//     year: "2021",
//     location: "UNITED KINGDOM",
//     title: "Britannia Securities",
//     text: "Britannia Securities was acquired from Arbitral International, further extending the group's regulated securities capabilities and deepening its capacity to deliver comprehensive investment solutions to clients across jurisdictions.",
//   },
//   {
//     year: "2022",
//     location: "UNITED KINGDOM",
//     title: "New Global Headquarters — The Scalpel, London",
//     text: "Britannia Financial Group relocated to its new global headquarters at The Scalpel in the City of London — a landmark address that reflects the group's standing and commitment to operating at the heart of the world's foremost financial centre.",
//   },
// ];
const timelineMilestones = [
  {
    year: "1997",
    title: "Incorporation and Licensing",
    text: "The Bank was incorporated in Nassau, Bahamas as Arrner Bank & Trust Ltd. and licensed by the Central Bank of The Bahamas as a non-resident bank and trust company.",
  },
  {
    year: "2016",
    title: "New Ownership and Strategic Expansion",
    text: "Share purchase agreement with the private investment group, Amber Group Holdings Ltd. and subsequently renamed Amber Bank & Trust Ltd., marking a new phase of growth and the acquisition of client portfolios from BSI Overseas (Bahamas) Limited.",
  },
  {
    year: "2019",
    title: "Joining the Britannia Group",
    text: "The Bank is acquired by the Britannia Financial Group and rebranded as Britannia Bank & Trust Ltd., strengthening its position in private banking and wealth management.",
  },
  {
    year: "2022",
    title: "Lucayas Client Portfolio Acquisition",
    text: "Britannia Bank acquired a book of client assets from Lucayas Bank Limited, further expanding its private banking and fiduciary client base in The Bahamas.",
  },
  {
    year: "2025",
    title: "Deltec Wealth & Fiduciary Acquisition",
    text: "Completion of a business transfer agreement for the acquisition of private banking and fiduciary client assets from Deltec Bank & Trust Ltd., significantly enhancing its scale and service offering.",
  },
  {
    year: "2026",
    title: "A New Chapter as Savoy",
    text: "Britannia Bank & Trust Ltd. was rebranded as Savoy Bank & Trust Ltd., building on nearly three decades of heritage while positioning the institution for its next phase of growth and innovation.",
  },
];

function InteractiveTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [ref, inView] = useInView(0.1);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const active = timelineMilestones[activeIdx];

  // Scroll the active node into the center of the scroll container
  const scrollActiveIntoView = (idx) => {
    const wrap = scrollRef.current;
    if (!wrap) return;
    const nodes = wrap.querySelectorAll(".tl-node-item");
    const node = nodes[idx];
    if (!node) return;
    const wrapRect = wrap.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    const offset =
      nodeRect.left - wrapRect.left - wrapRect.width / 2 + nodeRect.width / 2;
    wrap.scrollBy({ left: offset, behavior: "smooth" });
  };

  const setActive = (idx) => {
    setActiveIdx(idx);
    // Small delay so DOM updates before we measure
    setTimeout(() => scrollActiveIntoView(idx), 20);
  };

  const prev = () => setActive(Math.max(0, activeIdx - 1));
  const next = () =>
    setActive(Math.min(timelineMilestones.length - 1, activeIdx + 1));

  // Drag-to-scroll on the track
  useEffect(() => {
    const wrap = scrollRef.current;
    if (!wrap) return;
    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX;
      scrollStart.current = wrap.scrollLeft;
      wrap.classList.add("grabbing");
    };
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      wrap.scrollLeft = scrollStart.current - (e.pageX - startX.current);
    };
    const onMouseUp = () => {
      isDragging.current = false;
      wrap.classList.remove("grabbing");
    };
    wrap.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      wrap.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const progressPct = (activeIdx / (timelineMilestones.length - 1)) * 100;

  return (
    <section
      ref={ref}
      style={{ background: "var(--savoy-bg, #001a33)" }}
      className="py-12 md:py-20 px-6 md:px-20"
    >
      {/* Section heading */}
      <div style={fadeUp(inView)} className="mb-8 md:mb-10">
        <Label>History &amp; Tradition</Label>
        <h2
          style={{
            fontFamily: serif,
            fontSize: "clamp(1.6rem,2.8vw,2.6rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            marginTop: "1.5rem",
          }}
          className="text-white"
        >
          Our Story
        </h2>
      </div>

      {/* Progress bar */}
      <div style={fadeUp(inView, "0.1s")} className="tl-progress">
        <div
          className="tl-progress-fill"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Scrollable timeline track */}
      <div style={fadeUp(inView, "0.15s")} className="tl-scroll-wrap" ref={scrollRef}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: "max-content",
            padding: "0 8px",
          }}
        >
          {timelineMilestones.map((m, i) => (
            <div
              key={`${m.year}-${i}`}
              style={{ display: "flex", alignItems: "center" }}
            >
              {/* Connector line before each node except the first */}
              {i > 0 && (
                <div
                  style={{
                    width: "64px",
                    height: "1px",
                    background: "rgba(255,255,255,0.2)",
                    flexShrink: 0,
                  }}
                />
              )}

              {/* Node */}
              <div
                className="tl-node-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                  cursor: "pointer",
                  position: "relative",
                }}
                onClick={() => setActive(i)}
              >
                <button
                  style={{
                    borderRadius: "50%",
                    border:
                      activeIdx === i
                        ? "1.5px solid #fff"
                        : "1.5px solid rgba(255,255,255,0.3)",
                    background: activeIdx === i ? "#fff" : "transparent",
                    color:
                      activeIdx === i ? "var(--savoy-bg, #001a33)" : "#fff",
                    width: activeIdx === i ? "68px" : "48px",
                    height: activeIdx === i ? "68px" : "48px",
                    fontFamily: serif,
                    fontSize: activeIdx === i ? "0.85rem" : "0.7rem",
                    fontWeight: activeIdx === i ? 400 : 300,
                    letterSpacing: "0.06em",
                    lineHeight: 1.1,
                    textAlign: "center",
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                  aria-label={`Milestone ${m.year}`}
                >
                  {m.year}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content panel — re-keyed on activeIdx so CSS transition fires on every change */}
      <div
        style={{
          marginTop: "40px",
          minHeight: "180px",
          position: "relative",
        }}
      >
        {/* Large ghost watermark year */}
        <div key={`year-bg-${activeIdx}`} className="tl-year-bg">
          {active.year}
        </div>

        <div
          key={`panel-${activeIdx}`}
          className="timeline-content-panel visible"
          style={{ maxWidth: "620px" }}
        >
          <p
            style={{
              fontFamily: sans,
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            {active.location}
          </p>
          <h3
            style={{
              fontFamily: serif,
              fontSize: "clamp(1.1rem,1.8vw,1.55rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "#fff",
              marginBottom: "14px",
            }}
          >
            {active.title}
          </h3>
          <p
            style={{
              fontFamily: sans,
              fontSize: "0.82rem",
              fontWeight: 300,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {active.text}
          </p>
        </div>
      </div>

      {/* Prev / Next nav */}
      {/* <div style={{ display: "flex", gap: "8px", marginTop: "32px" }}>
        <button
          className="timeline-nav-btn"
          onClick={prev}
          aria-label="Previous milestone"
          disabled={activeIdx === 0}
          style={{ opacity: activeIdx === 0 ? 0.25 : 1 }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path
              d="M7 2L3.5 5.5 7 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="timeline-nav-btn"
          onClick={next}
          aria-label="Next milestone"
          disabled={activeIdx === timelineMilestones.length - 1}
          style={{
            opacity: activeIdx === timelineMilestones.length - 1 ? 0.25 : 1,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path
              d="M4 2l3.5 3.5L4 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div> */}
    </section>
  );
}

export default function About() {
  const [heroRef, heroInView] = useInView(0.05);
  const [whyRef, whyInView] = useInView(0.05);
  const [missionRef, missionInView] = useInView(0.1);
  const [mvRef, mvInView] = useInView(0.1);
  const [valuesRef, valuesInView] = useInView(0.05);
  const [locationRef, locationInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.1);

  return (
    <>
      <style>{globalStyles}</style>
      <SavoyHeader phase={4} />

      <main className="bg-[#001a33] text-white">
        {/* ══ HERO ══════════════════════════════════════════════ */}
        {/* <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden px-6 pt-10 pb-12 md:px-20 md:pb-24 md:pt-0"> */}
        <section
          ref={heroRef}
          className="relative  flex items-start overflow-hidden px-6 pt-50 pb-12 md:px-20 md:pt-75 md:pb-5"
        >
          <div className="relative z-10 w-full md:max-w-2xl">
            <h1
              style={{
                ...fadeUp(heroInView, "0.15s"),
                fontFamily: serif,
                fontSize: "clamp(3.2rem,7vw,6.5rem)",
                fontWeight: 300,
                lineHeight: 0.75,
              }}
              className="text-white"
            >
              About
              <br />
              <span className="block w-10 h-px bg-white mt-8" />
              {/* <em style={{ color:"var(--savoy-font)" }}>Savoy.</em> */}
            </h1>

            {/* <div style={fadeUp(heroInView,"0.3s")} className="mt-8">
              <span className="block w-10 h-px bg-white mb-6" />
              <p className="text-white w-full max-w-lg" style={{ fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}>
                Savoy Bank &amp; Trust is a privately held financial institution
                licensed in The Bahamas. We exist to serve clients who value
                discretion, continuity, and a personal relationship with those
                managing their financial affairs.
              </p>
            </div> */}
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

       

        {/* ══ WELCOME / MISSION ═══════════════════════════════════════════════ */}
        <section
          ref={missionRef}
          className="relative py-12 md:py-24 px-6 md:px-20 overflow-hidden"
        >
          <div
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
            style={{
              width: "300px",
              height: "300px",
              marginLeft: "-70px",
              position: "absolute",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <div style={fadeLeft(missionInView)} className="mb-8">
                <Label>Welcome to Savoy Bank and Trust</Label>
              </div>
              <h2
                style={{
                  ...fadeUp(missionInView, "0.12s"),
                  fontFamily: serif,
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  fontWeight: 300,
                  lineHeight: 1.0,
                }}
                className="text-white mb-6"
              >
                The Standard for
                <br />
                <em style={{ color: "var(--savoy-font)" }}>Private Banking.</em>
              </h2>
              <p
                style={{
                  ...fadeUp(missionInView, "0.2s"),
                  fontFamily: sans,
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  lineHeight: 1.3,
                  textAlign: "justify",
                  textJustify: "inter-word",
                  wordSpacing: "-0.09em",

                }}
                className="text-white mb-5 max-w-xl"
              >
                Savoy Bank &amp; Trust is an independent, privately held
                financial institution based in The Bahamas, dedicated to
                serving the complex financial needs of high-net-worth
                individuals, families, family offices, and institutional
                clients. Rooted in the principles of private banking, we
                provide tailored banking, trust, and wealth structuring
                solutions designed to preserve, protect, and transfer wealth
                across generations.
              </p>
              <p
                style={{
                  ...fadeUp(missionInView, "0.32s"),
                  fontFamily: sans,
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  lineHeight: 1.3,
                  textAlign: "justify",
                  textJustify: "inter-word",
                  wordSpacing: "-0.09em",

                }}
                className="text-white mb-5 max-w-xl"
              >
                Our approach combines the discipline, discretion, and
                personalized service traditionally associated with private
                banking with the agility and responsiveness demanded by
                today&rsquo;s international clients. Operating from one of the
                world&rsquo;s premier international financial centers, Savoy
                Bank &amp; Trust offers a relationship-driven experience built
                on trust, integrity, and long-term partnership.
              </p>
              <p
                style={{
                  ...fadeUp(missionInView, "0.44s"),
                  fontFamily: sans,
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  lineHeight: 1.3,
                  textAlign: "justify",
                  textJustify: "inter-word",
                  wordSpacing: "-0.09em",

                }}
                className="text-white max-w-xl"
              >
                We work closely with our clients and their advisers to deliver
                customized solutions that support their financial objectives
                while adapting to an increasingly complex global environment.
              </p>
            </div>

            {/* Decorative circular image panel */}
            {/* <div style={fadeRight(missionInView,"0.15s")} className="hidden md:flex justify-center items-center">
              <div
                className="relative"
                style={{
                  width: "460px",
                  height: "460px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid rgb(3,22,41)",
                }}
              >
                <Image
                  src="/savoy-2.png"
                  alt="Savoy Bank & Trust — Nassau, The Bahamas"
                  fill
                  style={{ objectFit: "cover", opacity: 0.75 }}
                />
              </div>
            </div> */}
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

         {/* ══ WHY SAVOY BANK & TRUST ═══════════════════════════════════ */}
        <section
          ref={whyRef}
          className="py-12 md:py-24 px-6 md:px-20"
        >
          <div style={fadeUp(whyInView)} className="mb-10 md:mb-14">
            <Label>Why Savoy Bank &amp; Trust</Label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            {whySavoy.map((v, i) => (
              <div
                key={v.n}
                style={fadeUp(whyInView, `${0.08 + i * 0.1}s`)}
                className="border-t border-white/10 hover:border-white/40 transition-colors duration-300 py-6 md:py-8 flex gap-4 md:gap-6 items-start"
              >
                <div
                  style={{ fontFamily: serif, fontSize: "0.85rem", fontWeight: 300, letterSpacing: "0.1em" }}
                  className="text-white flex-shrink-0 w-10 pt-0.5"
                >
                  {v.n}
                </div>
                <div>
                  <div
                    style={{ fontFamily: serif, fontSize: "clamp(1.2rem,1.5vw,1.45rem)", fontWeight: 400, lineHeight: 1.15 }}
                    className="text-white mb-2 md:mb-3"
                  >
                    {v.title}
                  </div>
                  <div
                    style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.3 }}
                    className="text-white"
                  >
                    {v.body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={fadeUp(whyInView, "0.55s")}
            className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/10"
          >
            <p
              style={{ fontFamily: serif, fontSize: "clamp(1.15rem,2vw,1.7rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.4 }}
              className="text-white max-w-2xl"
            >
              At Savoy Bank &amp; Trust, we believe wealth deserves more than
              management — it deserves stewardship.
            </p>
            <p
              style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.3 }}
              className="text-white/80 mt-4 max-w-xl"
            >
              Partner with a private bank committed to protecting your legacy
              and shaping your future.
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ MISSION & VISION ═════════════════════════════════════════ */}
        <section ref={mvRef} className="py-12 md:py-24 px-6 md:px-20">
          <div style={fadeUp(mvInView)} className="mb-10 md:mb-14">
            <Label>Savoy Bank &amp; Trust — Mission and Vision</Label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {missionVision.map((m, i) => (
              <div
                key={m.label}
                style={fadeUp(mvInView, `${0.12 + i * 0.15}s`)}
                className="border-t border-white/10 pt-6 md:pt-8"
              >
                <p
                  style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
                  className="uppercase text-white/45 mb-4"
                >
                  {m.label}
                </p>
                <h3
                  style={{ fontFamily: serif, fontSize: "clamp(1.5rem,2.4vw,2.1rem)", fontWeight: 300, lineHeight: 1.15 }}
                  className="text-white mb-4"
                >
                  <em style={{ fontStyle: "italic", color: "var(--savoy-font)" }}>{m.title}</em>
                </h3>
                <p
                  style={{ fontFamily: sans, fontSize: "0.83rem", fontWeight: 300, lineHeight: 1.65, textAlign: "justify",
                  textJustify: "inter-word",
                  wordSpacing: "-0.09em", }}
                  className="text-white/85 max-w-md"
                >
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ VALUES ════════════════════════════════════════════════ */}
        {/* <section ref={valuesRef} className="py-12 md:py-24 px-6 md:px-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
            <div style={fadeUp(valuesInView)}>
              <Label>Our Values</Label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            {values.map((v, i) => (
              <div
                key={v.n}
                style={fadeUp(valuesInView, `${0.08 + i * 0.1}s`)}
                className="border-t border-white/10 hover:border-white/40 transition-colors duration-300 py-6 md:py-8 flex gap-4 md:gap-6 items-start"
              >
                <div style={{ fontFamily:serif, fontSize:"0.85rem", fontWeight:300, letterSpacing:"0.1em" }}
                     className="text-white flex-shrink-0 w-10 pt-0.5">
                  {v.n}
                </div>
                <div>
                  <div style={{ fontFamily:serif, fontSize:"clamp(1.2rem,1.5vw,1.45rem)", fontWeight:400, lineHeight:1.15 }}
                       className="text-white mb-2 md:mb-3">{v.title}</div>
                  <div style={{ fontFamily:sans, fontSize:"0.82rem", fontWeight:300, lineHeight:1.3 }}
                       className="text-white">{v.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ INTERACTIVE HISTORY & TRADITION TIMELINE ══════════════ */}
        <InteractiveTimeline />

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ LOCATION ══════════════════════════════════════════════ */}
        {/* <section ref={locationRef} className="py-12 md:py-24 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div>
              <div style={fadeLeft(locationInView)} className="mb-8 md:mb-10">
                <Label>Where We Operate</Label>
              </div>

              <h2
                style={{ ...fadeUp(locationInView,"0.12s"), fontFamily:serif, fontSize:"clamp(1.8rem,3vw,3rem)", fontWeight:300, lineHeight:1.1 }}
                className="text-white"
              >
                Nassau,<br />
                <em style={{ color:"var(--savoy-font)" }}>The Bahamas.</em>
              </h2>

              <p
                style={{ ...fadeUp(locationInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
                className="text-white mt-6 md:mt-7 max-w-md"
              >
                The Bahamas offers one of the most respected and stable financial
                regulatory frameworks in the world. Licensed by the Securities
                Commission of The Bahamas, Savoy operates within a jurisdiction
                that combines sovereign stability, international connectivity, and
                a long tradition of private banking excellence.
              </p>

              <div style={fadeUp(locationInView,"0.38s")} className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-5">
                {[
                  ["Regulator",  "Securities Commission of The Bahamas"],
                  ["Structure",  "Privately Held"],
                  ["Clientele",  "International"],
                ].map(([k,v]) => (
                  <div key={k} className="flex gap-4 md:gap-6 items-start border-l border-white/20 pl-4 md:pl-5">
                    <span style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.15em" }}
                          className="text-white uppercase flex-shrink-0 w-20">{k}</span>
                    <span style={{ fontFamily:serif, fontSize:"0.95rem", fontWeight:300 }}
                          className="text-white">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ QUOTE ═════════════════════════════════════════════════ */}
        {/* <section className="py-12 md:py-20 px-6 md:px-20 flex flex-col items-center text-center">
          <p
            style={{ fontFamily:serif, fontSize:"clamp(1.2rem,2.2vw,2rem)", fontWeight:300, fontStyle:"italic", lineHeight:1.3 }}
            className="text-white max-w-2xl"
          >
            &ldquo;We do not measure success by volume. We measure it by the
            confidence and continuity of the relationships we hold.&rdquo;
          </p>
          <span className="block w-10 h-px bg-white mt-8" />
          <p style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.2em" }} className="uppercase text-white mt-4">
            Savoy Bank &amp; Trust
          </p>
        </section> */}

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ CTA ═══════════════════════════════════════════════════ */}
        {/* <section ref={ctaRef} className="py-14 md:py-24 px-6 md:px-20 flex flex-col items-center text-center">
          <div style={fadeUp(ctaInView)}>
            <Label center>Get in Touch</Label>
          </div>

          <h2
            style={{ ...fadeUp(ctaInView,"0.15s"), fontFamily:serif, fontSize:"clamp(2rem,4vw,3.8rem)", fontWeight:300, lineHeight:1.05 }}
            className="text-white mt-6"
          >
            Begin a Conversation
          </h2>

          <p
            style={{ ...fadeUp(ctaInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
            className="text-white mt-5 max-w-md"
          >
            Whether you have a specific mandate in mind or simply wish to explore
            how Savoy might serve your needs, we welcome your enquiry.
          </p>

          <div style={fadeUp(ctaInView,"0.35s")} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="mailto:info@savoybankandtrust.com"
              style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
              className="inline-flex items-center gap-3 uppercase text-white no-underline border border-white px-8 py-3 transition-all duration-300 hover:border-white hover:bg-white/5"
            >
              Email Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/contact-us"
              style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
              className="inline-flex items-center gap-2 uppercase text-white no-underline transition-colors duration-300 hover:text-white"
            >
              Contact Page
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section> */}

        <div className="w-full h-px bg-[#001a33]" />
      </main>

      <BrandFooterSection />
    </>
  );
}