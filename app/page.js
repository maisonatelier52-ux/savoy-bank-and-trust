// SAVOY SITE
// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import { useEffect, useRef, useState } from "react";

// export default function Home() {
//   // ─── Phase legend ───────────────────────────────────────────────────
//   // 0  black screen (mount)
//   // 1  video fades in
//   // 2  header slides in over video
//   // 3  video fades out  ← triggered by video "ended" event
//   // 4  lighthouse + bottom copy fade in
//   // ────────────────────────────────────────────────────────────────────
//   const [phase, setPhase] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [videoEnded, setVideoEnded] = useState(false);

//   const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//       setIsMobile(window.innerWidth <= 768);
//     }, []);

//   const videoRef = useRef(null);
//   // Track whether we already handled the end so fallback doesn't double-fire
//   const endHandled = useRef(false);

//   // ── 1. Scroll to very top on every mount / refresh ──────────────────
//   useEffect(() => {
//     // history.scrollRestoration prevents browser from restoring scroll pos
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) {
//         history.scrollRestoration = "manual";
//       }
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }
//   }, []);

//   // ── 2. Lock scroll until video ends (or fallback fires) ─────────────
//   useEffect(() => {
//     // Combine video-lock and menu-lock without fighting each other
//     const locked = !videoEnded || menuOpen;
//     document.body.style.overflow = locked ? "hidden" : "";
//     document.documentElement.style.overflow = locked ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [videoEnded, menuOpen]);

//   // ── 3. Start video + initial phase timer ────────────────────────────
//   useEffect(() => {
//     // Tiny delay so the browser paints the black screen first
//     const t1 = setTimeout(() => setPhase(1), 300);
//     // Header slides in ~2 s after video is visible
//     // const t2 = setTimeout(() => setPhase(2), 300);

//     // Play video
//     const vid = videoRef.current;
//     if (vid) {
//       vid.play().catch(() => {
//         // Autoplay blocked → skip straight to post-video state
//         handleVideoEnd();
//       });
//     }

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // ── 4. Fallback: unlock scroll if video hasn't ended after 15 s ─────
//   useEffect(() => {
//     const fallback = setTimeout(() => {
//       if (!endHandled.current) {
//         handleVideoEnd();
//       }
//     }, 15_000);
//     return () => clearTimeout(fallback);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // ── 5. What happens when the video finishes ──────────────────────────
//   function handleVideoEnd() {
//     if (endHandled.current) return;
//     endHandled.current = true;

//     // Phase 3 → video layer fades out (CSS transition ~2 s)
//     setPhase(3);

//     // Phase 4 → lighthouse + bottom copy fade in after video is gone
//     setTimeout(() => {
//       setPhase(4);
//       // Unlock scroll AFTER the transition so the page doesn't jump
//       setVideoEnded(true);
//     }, 1_800);
//   }

//   const navItems = ["ABOUT", "COMPANY OVERVIEW", "LEADERSHIP", "CONTACT US"];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//         @import url('https://fonts.cdnfonts.com/css/general-sans');

//         /* ── Mobile drawer ── */
//         .mobile-nav {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,26,51,0.97);
//           z-index: 100;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 2.5rem;
//           pointer-events: none;
//           opacity: 0;
//           transform: translateY(-24px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .mobile-nav.open {
//           opacity: 1;
//           transform: translateY(0);
//           pointer-events: all;
//         }
//         .mobile-nav a {
//           font-family: 'Cormorant', Georgia, serif;
//           color: #fff;
//           font-size: clamp(1.6rem, 6vw, 2.4rem);
//           font-weight: 300;
//           letter-spacing: 0.18em;
//           text-decoration: none;
//           text-transform: uppercase;
//           opacity: 0;
//           transform: translateY(14px);
//           transition: opacity 0.4s ease, transform 0.4s ease;
//         }
//         .mobile-nav.open a { opacity: 1; transform: translateY(0); }
//         .mobile-nav.open a:nth-child(1) { transition-delay: 0.10s; }
//         .mobile-nav.open a:nth-child(2) { transition-delay: 0.18s; }
//         .mobile-nav.open a:nth-child(3) { transition-delay: 0.26s; }
//         .mobile-nav.open a:nth-child(4) { transition-delay: 0.34s; }

//         /* Hamburger — hidden on desktop */
//         .hamburger-btn {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 8px;
//           position: relative;
//           z-index: 110;
//           -webkit-tap-highlight-color: transparent;
//         }
//         .ham-line {
//           display: block;
//           width: 22px;
//           height: 1.5px;
//           background: #fff;
//           transition: transform 0.3s ease, opacity 0.3s ease;
//         }

//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav { display: none !important; }
//           .page-header { padding-left: 2rem !important; padding-right: 2rem !important; padding-top: 2rem !important; }
//           .header-logo { height: 4.5rem !important; }
//         }

//         @media (max-width: 640px) {
//           .page-header { padding-left: 1.25rem !important; padding-right: 1.25rem !important; padding-top: 1.5rem !important; }
//           .header-logo { height: 3.5rem !important; }
//           .hero-bottom { padding-left: 1.25rem !important; padding-bottom: 2rem !important; }
//           .hero-bottom h1 { font-size: 1.1rem !important; max-width: 100% !important; }
//           .hero-bottom p { font-size: 0.72rem !important; }
//         }

//         /* ── Lighthouse responsive ── */
//         .lighthouse-wrap {
//           right: 0;
//           top: 0;
//           bottom: 0;
//           width: 55%;
//         }
//         .lighthouse-img {
//           mask-image:
//             linear-gradient(to right, transparent 5%, black 50%),
//             linear-gradient(to top, transparent 0%, black 45%);
//           -webkit-mask-image:
//             linear-gradient(to right, transparent 5%, black 50%),
//             linear-gradient(to top, transparent 0%, black 45%);
//           mask-composite: intersect;
//           -webkit-mask-composite: source-in;
//         }
//         @media (max-width: 1024px) {
//           .lighthouse-wrap { width: 70% !important; }
//           .lighthouse-img {
//             mask-image:
//               linear-gradient(to right, transparent 0%, black 40%),
//               linear-gradient(to top, transparent 0%, black 45%);
//             -webkit-mask-image:
//               linear-gradient(to right, transparent 0%, black 40%),
//               linear-gradient(to top, transparent 0%, black 45%);
//           }
//         }
//         @media (max-width: 640px) {
//           .lighthouse-wrap { width: 100% !important; top: 0 !important; }
//           .lighthouse-img {
//             mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%);
//             -webkit-mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%);
//             mask-composite: intersect;
//             -webkit-mask-composite: source-in;
//             object-position: right top !important;
//           }
//         }
//       `}</style>

//       {/* ── Mobile drawer nav ── */}
//       <nav
//         className={`mobile-nav${menuOpen ? " open" : ""}`}
//         aria-hidden={!menuOpen}
//       >
//         {/* Close button */}
//         <button
//           onClick={() => setMenuOpen(false)}
//           aria-label="Close menu"
//           style={{
//             position: "absolute",
//             top: "1.5rem",
//             right: "1.5rem",
//             background: "none",
//             border: "none",
//             cursor: "pointer",
//             padding: "8px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "5px",
//             zIndex: 120,
//           }}
//         >
//           <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(3.25px) rotate(45deg)", transition: "transform 0.3s ease" }} />
//           <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(-3.25px) rotate(-45deg)", transition: "transform 0.3s ease" }} />
//         </button>

//         {navItems.map((item) => (
//           <a key={item} href="#" onClick={() => setMenuOpen(false)}>
//             {item}
//           </a>
//         ))}
//       </nav>

//       {/* Tap-outside backdrop */}
//       {menuOpen && (
//         <div
//           onClick={() => setMenuOpen(false)}
//           style={{ position: "fixed", inset: 0, zIndex: 99 }}
//           aria-hidden="true"
//         />
//       )}

//       <div>
//         <div className="relative w-full min-h-screen bg-[#001a33] overflow-hidden">

//           {/* ── VIDEO LAYER ──────────────────────────────────────────────
//               • No `loop` — must fire the `ended` event
//               • `onEnded` drives the entire post-video transition
//               • Fades OUT when phase reaches 3
//           ─────────────────────────────────────────────────────────────── */}
//           <div
//             className="absolute inset-0 transition-opacity"
//             style={{
//               opacity: phase >= 1 && phase < 3 ? 1 : 0,
//               transitionDuration: phase === 1 ? "1800ms" : "2000ms",
//               transitionTimingFunction: "ease-in-out",
//               // Keep the layer in the DOM (but invisible) so the video
//               // element always exists and the ended event still fires
//               pointerEvents: phase >= 3 ? "none" : "auto",
//             }}
//           >
//             <video
//               ref={videoRef}
//               className="w-full h-full object-cover"
//               autoPlay
//               muted
//               playsInline
//               // ⚠️  NO `loop` — we need the ended event
//               onEnded={handleVideoEnd}
//               // src="/homebannervideo2.mp4"
//               src={isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo2.mp4"}
//             />
//           </div>

//           {/* ── LIGHTHOUSE IMAGE — fades in after video fades out ── */}
//           <div
//             className="absolute inset-0 transition-opacity"
//             style={{
//               opacity: phase >= 3 ? 1 : 0,
//               transitionDuration: "3000ms",
//               transitionTimingFunction: "ease-in-out",
//             }}
//           >
//             <div
//               className="absolute lighthouse-wrap"
//               style={{ right: 0, top: '10%', bottom: 0, width: "70%" }}
//             >
//               <img
//                 src="/savoy-12.png"
//                 alt="Lighthouse"
//                 className="lighthouse-img"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   objectPosition: "center top",
//                   maskImage: `
//                     linear-gradient(to right, transparent 5%, black 50%),
//                     linear-gradient(to bottom, black 60%, transparent 100%),
//                     linear-gradient(to top, transparent 0%, black 45%)
//                   `,
//                   WebkitMaskImage: `
//                     linear-gradient(to right, transparent 5%, black 50%),
//                     linear-gradient(to bottom, black 60%, transparent 100%),
//                     linear-gradient(to top, transparent 0%, black 45%)
//                   `,
//                   maskComposite: "intersect",
//                   WebkitMaskComposite: "source-in",
//                 }}
//               />
//             </div>
//           </div>

//           {/* ── HEADER ── */}
//           <header
//             className="page-header absolute top-0 left-0 right-0 z-30 flex items-center justify-between pl-15 pr-25 py-10 pt-13"
//             // style={{
//             //   opacity: phase >= 2 ? 1 : 0,
//             //   transform: phase >= 2 ? "translateY(0)" : "translateY(-20px)",
//             //   transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
//             // }}
//             style={{
//                   opacity: phase >= 4 ? 1 : 0,
//                   transform: phase >= 4 ? "translateY(0)" : "translateY(-20px)",
//                   transition: phase >= 4
//                     ? "opacity 1.2s ease-out 0.4s, transform 1.2s ease-out 0.4s"  // 0.4s delay on entry
//                     : "none",  // instant hide — no fade out flash
//                 }}
//           >
//             <div className="flex items-center">
//               <img
//                 src="/savoy-logo.png"
//                 alt="Savoy Logo"
//                 className="header-logo h-27 w-auto"
//               />
//             </div>

//             {/* Desktop nav */}
//             <nav
//               className="desktop-nav hidden sm:flex items-center gap-4"
//               // style={{
//               //   opacity: phase >= 2 ? 1 : 0,
//               //   transition: "opacity 1.4s ease-out 0.3s",
//               // }}
//               style={{
//                       opacity: phase >= 4 ? 1 : 0,
//                       transition: phase >= 4
//                         ? "opacity 1.4s ease-out 0.6s"  // slightly later than header
//                         : "none",
//                     }}
//             >
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="text-white hover:text-white transition-colors text-xs tracking-widest uppercase"
//                   style={{
//                     letterSpacing: "0.1em",
//                     fontSize: "0.8rem",
//                     fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//                   }}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>

//             {/* Hamburger */}
//             <button
//               className="hamburger-btn"
//               onClick={() => setMenuOpen((v) => !v)}
//               aria-label={menuOpen ? "Close menu" : "Open menu"}
//               aria-expanded={menuOpen}
//             >
//               <span className="ham-line" style={menuOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : {}} />
//               <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
//               <span className="ham-line" style={menuOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}} />
//             </button>
//           </header>

//           {/* ── BOTTOM CONTENT — fades in with phase 4 ── */}
//           <div
//             className="hero-bottom absolute bottom-0 left-0 right-0 z-30 pl-20 pb-14"
//             style={{
//               opacity: phase >= 4 ? 1 : 0,
//               transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
//               transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//             }}
//           >
//             <p
//               className="text-white tracking-widest uppercase mb-3"
//               style={{
//                 fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//                 fontSize: "0.95rem",
//                 fontWeight: 300,
//               }}
//             >
//               SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//               <span
//                 style={{
//                   textTransform: "none",
//                   fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//                 }}
//               >
//                 Tailored Banking &amp; Trust Services
//               </span>
//             </p>
//             <h1
//               className="text-white max-w-[680px] leading-none"
//               style={{
//                 fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//                 fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//                 fontWeight: 300,
//                 lineHeight: 1.0,
//               }}
//             >
//               Tailored banking, trust, and market services for clients who value
//               discretion, continuity, and clear guidance in a complex
//               international landscape.
//             </h1>
//           </div>
//         </div>

//         <SecondSection />
//         <Thirdsection />
//         <FourthSection />
//         <BrandFooterSection />
//       </div>
//     </>
//   );
// }

// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import SavoyHeader from "@/components/SavoyHeader";
// import { useEffect, useRef, useState } from "react";

// export default function Home() {
//   const [phase, setPhase] = useState(0);
//   const [videoEnded, setVideoEnded] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const videoRef = useRef(null);
//   const endHandled = useRef(false);

//   // Detect mobile
//   useEffect(() => {
//     setIsMobile(window.innerWidth <= 768);
//   }, []);

//   // Scroll to top on mount
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) {
//         history.scrollRestoration = "manual";
//       }
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }
//   }, []);

//   // Lock scroll while video is playing
//   useEffect(() => {
//     const locked = !videoEnded;
//     document.body.style.overflow = locked ? "hidden" : "";
//     document.documentElement.style.overflow = locked ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [videoEnded]);

//   // Video + Phase timing
//   useEffect(() => {
//     const t1 = setTimeout(() => setPhase(1), 300);

//     const vid = videoRef.current;
//     if (vid) {
//       vid.play().catch(() => handleVideoEnd());
//     }

//     return () => clearTimeout(t1);
//   }, []);

//   // Fallback if video doesn't end
//   useEffect(() => {
//     const fallback = setTimeout(() => {
//       if (!endHandled.current) handleVideoEnd();
//     }, 15000);
//     return () => clearTimeout(fallback);
//   }, []);

//   function handleVideoEnd() {
//     if (endHandled.current) return;
//     endHandled.current = true;

//     setPhase(3);

//     setTimeout(() => {
//       setPhase(4);
//       setVideoEnded(true);
//     }, 1800);
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//         @import url('https://fonts.cdnfonts.com/css/general-sans');

//         /* Mobile Nav Styles */
//         .mobile-nav {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,26,51,0.97);
//           z-index: 100;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 2.5rem;
//           pointer-events: none;
//           opacity: 0;
//           transform: translateY(-24px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .mobile-nav.open {
//           opacity: 1;
//           transform: translateY(0);
//           pointer-events: all;
//         }
//         .mobile-nav a {
//           font-family: 'Cormorant', Georgia, serif;
//           color: #fff;
//           font-size: clamp(1.6rem, 6vw, 2.4rem);
//           font-weight: 300;
//           letter-spacing: 0.18em;
//           text-decoration: none;
//           text-transform: uppercase;
//         }

//         /* Hamburger */
//         .hamburger-btn {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 8px;
//           z-index: 110;
//         }
//         .ham-line {
//           width: 22px;
//           height: 1.5px;
//           background: #fff;
//           transition: all 0.3s ease;
//         }

//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav { display: none !important; }
//         }
//       `}</style>

//       {/* Header Component */}
//       <SavoyHeader phase={phase} />

//       {/* Hero Section */}
//       <div className="relative w-full min-h-screen bg-[#001a33] overflow-hidden">
//         {/* Video */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 1 && phase < 3 ? 1 : 0,
//             transitionDuration: "2000ms",
//           }}
//         >
//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover"
//             autoPlay
//             muted
//             playsInline
//             onEnded={handleVideoEnd}
//             src={
//               isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo2.mp4"
//             }
//           />
//         </div>

//         {/* Lighthouse */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 3 ? 1 : 0,
//             transitionDuration: "3000ms",
//           }}
//         >
//           <div
//             className="absolute lighthouse-wrap"
//             style={{ right: 0, top: "10%", bottom: 0, width: "70%" }}
//           >
//             {/* <img
//               src="/savoy-12.png"
//               alt="Lighthouse"
//               className="lighthouse-img"
//               style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
//             /> */}
//           </div>
//         </div>

//         {/* Bottom Content */}
//         {/* <div
//           // className="hero-bottom absolute bottom-0 left-0 right-0 z-30 pl-20 pb-14"
//           className="hero-bottom absolute bottom-0 left-0 right-0 z-30 pl-6 pr-6 pb-10 md:pl-20 md:pr-0 md:pb-14"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//           }}
//         >
//           <p
//             className="text-white tracking-widest uppercase mb-3"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "0.95rem",
//               fontWeight: 300,
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             <span style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
//               Tailored Banking &amp; Trust Services
//             </span>
//           </p>
//           <h1
//             className="text-white max-w-[680px] leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//               fontWeight: 300,
//             }}
//           >
//             Tailored banking, trust, and market services for clients who value discretion, continuity, and clear guidance in a complex international landscape.
//           </h1>
//         </div> */}
//         {/* Bottom Content */}
//         <div
//           className="hero-bottom absolute bottom-0 left-0 right-0 z-30 px-5 pb-10 md:pl-20 md:pr-0 md:pb-14"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//           }}
//         >
//           <p
//             className="text-white tracking-widest uppercase mb-3"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "0.95rem",
//               fontWeight: 300,
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             <span
//               style={{
//                 fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//               }}
//             >
//               Tailored Banking &amp; Trust Services
//             </span>
//           </p>

//           <h1
//             className="text-white leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 2vw, 1.3rem)", // Much better for mobile
//               fontWeight: 300,
//               maxWidth: "680px",
//             }}
//           >
//             Tailored banking, trust, and market services for clients who value
//             discretion, continuity, and clear guidance in a complex
//             international landscape.
//           </h1>
//         </div>
//       </div>

//       {/* Other Sections */}
//       <SecondSection />
//       <Thirdsection />
//       <FourthSection />
//       <BrandFooterSection />
//     </>
//   );
// }

// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import SavoyHeader from "@/components/SavoyHeader";
// import { useEffect, useRef, useState } from "react";

// let introShown = false;

// export default function Home() {
//   const [phase, setPhase] = useState(4);
//   const [videoEnded, setVideoEnded] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   const videoRef = useRef(null);
//   const endHandled = useRef(false);

//   function handleVideoEnd() {
//     if (endHandled.current) return;
//     endHandled.current = true;
//     setPhase(3);
//     setTimeout(() => {
//       setPhase(4);
//       setVideoEnded(true);
//     }, 400);
//   }

//   function skipToEnd() {
//     endHandled.current = true;
//     setPhase(4);
//     setVideoEnded(true);
//   }

//   // Scroll to top
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) history.scrollRestoration = "manual";
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }
//   }, []);

//   // Lock scroll while video plays
//   useEffect(() => {
//     const locked = !videoEnded;
//     document.body.style.overflow = locked ? "hidden" : "";
//     document.documentElement.style.overflow = locked ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [videoEnded]);

//   // ── Core: play or skip ───────────────────────────────────────
//   // useEffect(() => {
//   //   if (introShown) {
//   //     skipToEnd();
//   //     return;
//   //   }

//   //   introShown = true;

//   //   const t1 = setTimeout(() => setPhase(1), 300);
//   //   const vid = videoRef.current;
//   //   if (vid) {
//   //     vid.playbackRate = 0.75; // slow playback — change to 0.5 for slower, 1.0 for normal slow down 0.6 ,0.5 this good slow down without making it too long
//   //     vid.play().catch(() => handleVideoEnd());
//   //   }
//   //   return () => clearTimeout(t1);
//   // }, []);

//   // // Safety fallback: if video never fires onEnded within 15s
//   // useEffect(() => {
//   //   const fallback = setTimeout(() => {
//   //     if (!endHandled.current) handleVideoEnd();
//   //   }, 15000);
//   //   return () => clearTimeout(fallback);
//   // }, []);
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//         @import url('https://fonts.cdnfonts.com/css/general-sans');

//         .mobile-nav {
//           position: fixed; inset: 0;
//           background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//           display: flex; flex-direction: column; align-items: center; justify-content: center;
//           gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//         .mobile-nav a {
//           font-family: 'Cormorant', Georgia, serif; color: #fff;
//           font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//           letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
//         }
//         .hamburger-btn {
//           display: none; flex-direction: column; gap: 5px;
//           background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//         }
//         .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav { display: none !important; }
//         }
//         @media (max-width: 640px) {
//           .hero-bottom {
//             padding-left: 1.25rem !important;
//             padding-right: 1.25rem !important;
//             padding-bottom: 2rem !important;
//           }

//           .hero-bottom p {
//             font-size: 0.74rem !important;
//             line-height: 1.35 !important;
//             letter-spacing: 0.14em !important;
//           }

//           .hero-bottom h1 {
//             font-size: clamp(1.35rem, 7vw, 1.8rem) !important;
//             line-height: 1.05 !important;
//             max-width: 100% !important;
//           }

//           .lighthouse-img {
//             mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             -webkit-mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             mask-composite: intersect !important;
//             -webkit-mask-composite: source-in !important;
//           }
//         }
//       `}</style>

//       <SavoyHeader phase={phase} />

//       {/* ── Hero ── */}
//       <div className="relative w-full min-h-screen bg-[#001a33] overflow-hidden">

//         {/* Video */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 1 && phase < 3 ? 1 : 0,
//             transitionDuration: "2000ms",
//           }}
//         >
//           {/* <video
//             ref={videoRef}
//             className={`w-full h-full ${isMobile ? "object-cover" : "object-fill"}`}
//             autoPlay
//             muted
//             playsInline
//             onEnded={handleVideoEnd}
//             onCanPlay={(e) => {
//               e.target.playbackRate = 0.75; // keeps slow speed after buffering
//             }}
//             src={isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo3.mp4"}
//           /> */}
//         </div>

//         {/* Post-video layer — empty placeholder */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{ opacity: phase >= 3 ? 1 : 0, transitionDuration: "3000ms" }}
//         >
//           <div className="absolute" style={{ right: 0, top: "10%", bottom: 0, width: "70%" }} />
//         </div>

//         {/* Post-video layer — lighthouse */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 3 ? 1 : 0,
//             transitionDuration: "3000ms",
//             transitionTimingFunction: "ease-in-out",
//           }}
//         >
//           {/* <div className="absolute right-0 bottom-0 w-full top-0 md:w-[40%] md:top-[20%]">
//             <img
//               src="/savoy-23.png"
//               alt="Lighthouse"
//               className="lighthouse-img w-full h-full object-cover object-top md:object-[center_top]"
//               style={{
//                 maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 maskComposite: "intersect",
//                 WebkitMaskComposite: "source-in",
//               }}
//             />
//           </div> */}
//         </div>

//         {/* Bottom text */}
//         <div
//           className="hero-bottom absolute bottom-0 left-0 right-0 z-30 px-5 pb-10 md:pl-20 md:pr-0 md:pb-14"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//           }}
//         >
//           <p
//             className="text-white tracking-widest uppercase mb-3"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "0.95rem",
//               fontWeight: 300,
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             <span style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
//               Tailored Banking &amp; Trust Services
//             </span>
//           </p>
//           <h1
//             className="text-white leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//               fontWeight: 300,
//               maxWidth: "680px",
//             }}
//           >
//             Tailored banking, trust, and market services for clients who value
//             discretion, continuity, and clear guidance in a complex
//             international landscape.
//           </h1>
//         </div>
//       </div>

//       <SecondSection />
//       <Thirdsection />
//       <FourthSection />
//       <BrandFooterSection />
//     </>
//   );
// }

// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import SavoyHeader from "@/components/SavoyHeader";
// import { useEffect, useRef, useState } from "react";

// let introShown = false;

// export default function Home() {
//   const [phase, setPhase] = useState(4);
//   const [videoEnded, setVideoEnded] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   const videoRef = useRef(null);
//   const endHandled = useRef(false);

//   function handleVideoEnd() {
//     if (endHandled.current) return;
//     endHandled.current = true;
//     setPhase(3);
//     setTimeout(() => {
//       setPhase(4);
//       setVideoEnded(true);
//     }, 400);
//   }

//   function skipToEnd() {
//     endHandled.current = true;
//     setPhase(4);
//     setVideoEnded(true);
//   }

//   // Scroll to top
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) history.scrollRestoration = "manual";
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }
//   }, []);

//   // Lock scroll while video plays
//   useEffect(() => {
//     const locked = !videoEnded;
//     document.body.style.overflow = locked ? "hidden" : "";
//     document.documentElement.style.overflow = locked ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [videoEnded]);

//   // ── Core: play or skip ───────────────────────────────────────
//   // useEffect(() => {
//   //   if (introShown) {
//   //     skipToEnd();
//   //     return;
//   //   }

//   //   introShown = true;

//   //   const t1 = setTimeout(() => setPhase(1), 300);
//   //   const vid = videoRef.current;
//   //   if (vid) {
//   //     vid.playbackRate = 0.75; // slow playback — change to 0.5 for slower, 1.0 for normal slow down 0.6 ,0.5 this good slow down without making it too long
//   //     vid.play().catch(() => handleVideoEnd());
//   //   }
//   //   return () => clearTimeout(t1);
//   // }, []);

//   // // Safety fallback: if video never fires onEnded within 15s
//   // useEffect(() => {
//   //   const fallback = setTimeout(() => {
//   //     if (!endHandled.current) handleVideoEnd();
//   //   }, 15000);
//   //   return () => clearTimeout(fallback);
//   // }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//         @import url('https://fonts.cdnfonts.com/css/general-sans');

//         .mobile-nav {
//           position: fixed; inset: 0;
//           background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//           display: flex; flex-direction: column; align-items: center; justify-content: center;
//           gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//         .mobile-nav a {
//           font-family: 'Cormorant', Georgia, serif; color: #fff;
//           font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//           letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
//         }
//         .hamburger-btn {
//           display: none; flex-direction: column; gap: 5px;
//           background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//         }
//         .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav { display: none !important; }
//         }
//         @media (max-width: 640px) {
//           .hero-bottom{
//             position: absolute !important;

//             /* move content upward */
//             bottom: 35% !important;

//             left: 0;
//             right: 0;

//             padding-left: 3.25rem !important;
//             padding-right: 1.25rem !important;

//             /* remove huge bottom stick */
//             padding-bottom: 0 !important;
//           }

//           .hero-bottom h1{
//             font-size: clamp(2rem, 9vw, 3rem) !important;
//             line-height: 0.95 !important;
//             max-width: 90% !important;
//           }

//           .lighthouse-img {
//             mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             -webkit-mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             mask-composite: intersect !important;
//             -webkit-mask-composite: source-in !important;
//           }
//         }
//       `}</style>

//       <SavoyHeader phase={phase} />

//       {/* ── Hero ── */}
//       <div className="relative w-full min-h-screen bg-[#001a33] overflow-hidden">
//         {/* Video */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 1 && phase < 3 ? 1 : 0,
//             transitionDuration: "2000ms",
//           }}
//         >
//           {/* <video
//             ref={videoRef}
//             className={`w-full h-full ${isMobile ? "object-cover" : "object-fill"}`}
//             autoPlay
//             muted
//             playsInline
//             onEnded={handleVideoEnd}
//             onCanPlay={(e) => {
//               e.target.playbackRate = 0.75; // keeps slow speed after buffering
//             }}
//             src={isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo3.mp4"}
//           /> */}
//         </div>

//         {/* Post-video layer — empty placeholder */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{ opacity: phase >= 3 ? 1 : 0, transitionDuration: "3000ms" }}
//         >
//           <div
//             className="absolute"
//             style={{ right: 0, top: "10%", bottom: 0, width: "70%" }}
//           />
//         </div>

//         {/* Post-video layer — lighthouse */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 3 ? 1 : 0,
//             transitionDuration: "3000ms",
//             transitionTimingFunction: "ease-in-out",
//           }}
//         >
//           {/* <div className="absolute right-0 bottom-0 w-full top-0 md:w-[40%] md:top-[20%]">
//             <img
//               src="/savoy-23.png"
//               alt="Lighthouse"
//               className="lighthouse-img w-full h-full object-cover object-top md:object-[center_top]"
//               style={{
//                 maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 maskComposite: "intersect",
//                 WebkitMaskComposite: "source-in",
//               }}
//             />
//           </div> */}
//         </div>

//         {/* Bottom text */}
//         <div
//           className="hero-bottom absolute bottom-0 left-0 right-0 z-30 px-5 pb-10 md:pl-20 md:pr-0 md:pb-14"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//           }}
//         >
//           {/* <p
//             className="text-white tracking-widest uppercase mb-3"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "0.95rem",
//               fontWeight: 300,
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             <span style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
//               Tailored Banking &amp; Trust Services
//             </span>
//           </p> */}

//           {/* OLD hero h1 — content replaced below */}
//           {/* <h1
//             className="text-white leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//               fontWeight: 300,
//               maxWidth: "680px",
//             }}
//           >
//             Tailored banking, trust, and market services for clients who value
//             discretion, continuity, and clear guidance in a complex
//             international landscape.
//           </h1> */}

//           {/* NEW hero h1 */}
//           <h1
//             className="text-white leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 4vw, 3.4rem)",
//               // fontSize: "clamp(2rem, 4vw, 3.5rem)",
//               fontWeight: 500,
//               maxWidth: "780px",
//               lineHeight: 1.0,
//               letterSpacing: "0.01em",
//               textTransform: "uppercase",
//             }}
//           >
//             Traditional Excellence.
//             <br />
//             Modern Flexibility.
//             <br />
//             Global Strength.
//           </h1>
//         </div>
//       </div>

//       <SecondSection />
//       <Thirdsection />
//       <FourthSection />
//       <BrandFooterSection />
//     </>
//   );
// }

// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import SavoyHeader from "@/components/SavoyHeader";
// import { useEffect, useRef, useState } from "react";

// let introShown = false;

// export default function Home() {
//   const [phase, setPhase] = useState(0);        // ← was 4, reset so animation plays on mount
//   const [videoEnded, setVideoEnded] = useState(false); // ← was true, reset to allow scroll-lock logic
//   const [isMobile, setIsMobile] = useState(false);

//   const videoRef = useRef(null);
//   const endHandled = useRef(false);

//   function handleVideoEnd() {
//     if (endHandled.current) return;
//     endHandled.current = true;
//     setPhase(3);
//     setTimeout(() => {
//       setPhase(4);
//       setVideoEnded(true);
//     }, 400);
//   }

//   function skipToEnd() {
//     endHandled.current = true;
//     setPhase(4);
//     setVideoEnded(true);
//   }

//   // Scroll to top
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) history.scrollRestoration = "manual";
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }
//   }, []);

//   // Lock scroll while video plays
//   useEffect(() => {
//     const locked = !videoEnded;
//     document.body.style.overflow = locked ? "hidden" : "";
//     document.documentElement.style.overflow = locked ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [videoEnded]);

//   // ── Mount: fade content in without playing video ──────────────
//   useEffect(() => {
//     const t1 = setTimeout(() => setPhase(4), 300);
//     setVideoEnded(true);
//     return () => clearTimeout(t1);
//   }, []);

//   // ── Core: play or skip ───────────────────────────────────────
//   // useEffect(() => {
//   //   if (introShown) {
//   //     skipToEnd();
//   //     return;
//   //   }

//   //   introShown = true;

//   //   const t1 = setTimeout(() => setPhase(1), 300);
//   //   const vid = videoRef.current;
//   //   if (vid) {
//   //     vid.playbackRate = 0.75; // slow playback — change to 0.5 for slower, 1.0 for normal slow down 0.6 ,0.5 this good slow down without making it too long
//   //     vid.play().catch(() => handleVideoEnd());
//   //   }
//   //   return () => clearTimeout(t1);
//   // }, []);

//   // // Safety fallback: if video never fires onEnded within 15s
//   // useEffect(() => {
//   //   const fallback = setTimeout(() => {
//   //     if (!endHandled.current) handleVideoEnd();
//   //   }, 15000);
//   //   return () => clearTimeout(fallback);
//   // }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//         @import url('https://fonts.cdnfonts.com/css/general-sans');

//         .mobile-nav {
//           position: fixed; inset: 0;
//           background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//           display: flex; flex-direction: column; align-items: center; justify-content: center;
//           gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//         .mobile-nav a {
//           font-family: 'Cormorant', Georgia, serif; color: #fff;
//           font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//           letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
//         }
//         .hamburger-btn {
//           display: none; flex-direction: column; gap: 5px;
//           background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//         }
//         .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav { display: none !important; }
//         }
//         @media (max-width: 640px) {
//           .hero-bottom{
//             position: absolute !important;

//             /* move content upward */
//             bottom: 100% !important;

//             left: 0;
//             right: 0;

//             padding-left: 2.25rem !important;
//             padding-right: 1.25rem !important;

//             /* remove huge bottom stick */
//             padding-bottom: 0 !important;
//           }

//           .hero-bottom h1{
//             font-size: clamp(2rem, 9vw, 3rem) !important;
//             line-height: 0.95 !important;
//             max-width: 90% !important;
//           }

//           .lighthouse-img {
//             mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             -webkit-mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             mask-composite: intersect !important;
//             -webkit-mask-composite: source-in !important;
//           }
//         }
//       `}</style>

//       <SavoyHeader phase={phase} />

//       {/* ── Hero ── */}
//       <div className="relative w-full min-h-screen bg-[#001a33] overflow-hidden">
//         {/* Video */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 1 && phase < 3 ? 1 : 0,
//             transitionDuration: "2000ms",
//           }}
//         >
//           {/* <video
//             ref={videoRef}
//             className={`w-full h-full ${isMobile ? "object-cover" : "object-fill"}`}
//             autoPlay
//             muted
//             playsInline
//             onEnded={handleVideoEnd}
//             onCanPlay={(e) => {
//               e.target.playbackRate = 0.75; // keeps slow speed after buffering
//             }}
//             src={isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo3.mp4"}
//           /> */}
//         </div>

//         {/* Post-video layer — empty placeholder */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{ opacity: phase >= 3 ? 1 : 0, transitionDuration: "3000ms" }}
//         >
//           <div
//             className="absolute"
//             style={{ right: 0, top: "10%", bottom: 0, width: "70%" }}
//           />
//         </div>

//         {/* Post-video layer — lighthouse */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 3 ? 1 : 0,
//             transitionDuration: "3000ms",
//             transitionTimingFunction: "ease-in-out",
//           }}
//         >
//           {/* <div className="absolute right-0 bottom-0 w-full top-0 md:w-[40%] md:top-[20%]">
//             <img
//               src="/savoy-23.png"
//               alt="Lighthouse"
//               className="lighthouse-img w-full h-full object-cover object-top md:object-[center_top]"
//               style={{
//                 maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 maskComposite: "intersect",
//                 WebkitMaskComposite: "source-in",
//               }}
//             />
//           </div> */}
//         </div>

//         {/* Bottom text */}
//         <div
//           // className="hero-bottom absolute bottom-0 left-0 right-0 z-30 px-5 pb-10 md:pl-20 md:pr-0 md:pb-14"
//           className="hero-bottom absolute top-[50%] left-0 right-0 z-30 px-5 md:pl-20 md:pr-0"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//           }}
//         >
//           {/* <p
//             className="text-white tracking-widest uppercase mb-3"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "0.95rem",
//               fontWeight: 300,
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             <span style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
//               Tailored Banking &amp; Trust Services
//             </span>
//           </p> */}

//           {/* OLD hero h1 — content replaced below */}
//           {/* <h1
//             className="text-white leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//               fontWeight: 300,
//               maxWidth: "680px",
//             }}
//           >
//             Tailored banking, trust, and market services for clients who value
//             discretion, continuity, and clear guidance in a complex
//             international landscape.
//           </h1> */}

//           {/* NEW hero h1 */}
//           <h1
//             className="text-white leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 4vw, 3.4rem)",
//               // fontSize: "clamp(2rem, 4vw, 3.5rem)",
//               fontWeight: 500,
//               maxWidth: "780px",
//               lineHeight: 1.0,
//               letterSpacing: "0.01em",
//               // textTransform: "uppercase",
//             }}
//           >
//             Traditional Excellence.
//             <br />
//             Modern Flexibility.
//             <br />
//             Global Strength.
//           </h1>
//         </div>
//       </div>

//       <SecondSection />
//       <Thirdsection />
//       <FourthSection />
//       <BrandFooterSection />
//     </>
//   );
// }

// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import SavoyHeader from "@/components/SavoyHeader";
// import { useEffect, useRef, useState } from "react";

// let introShown = false;

// export default function Home() {
//   const [phase, setPhase] = useState(0);        // ← was 4, reset so animation plays on mount
//   const [videoEnded, setVideoEnded] = useState(false); // ← was true, reset to allow scroll-lock logic
//   const [isMobile, setIsMobile] = useState(false);

//   const videoRef = useRef(null);
//   const endHandled = useRef(false);

//   function handleVideoEnd() {
//     if (endHandled.current) return;
//     endHandled.current = true;
//     setPhase(3);
//     setTimeout(() => {
//       setPhase(4);
//       setVideoEnded(true);
//     }, 400);
//   }

//   function skipToEnd() {
//     endHandled.current = true;
//     setPhase(4);
//     setVideoEnded(true);
//   }

//   // Scroll to top
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) history.scrollRestoration = "manual";
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }
//   }, []);

//   // Lock scroll while video plays
//   useEffect(() => {
//     const locked = !videoEnded;
//     document.body.style.overflow = locked ? "hidden" : "";
//     document.documentElement.style.overflow = locked ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [videoEnded]);

//   // ── Mount: fade content in without playing video ──────────────
//   useEffect(() => {
//     const t1 = setTimeout(() => setPhase(4), 300);
//     setVideoEnded(true);
//     return () => clearTimeout(t1);
//   }, []);

//   // ── Core: play or skip ───────────────────────────────────────
//   // useEffect(() => {
//   //   if (introShown) {
//   //     skipToEnd();
//   //     return;
//   //   }

//   //   introShown = true;

//   //   const t1 = setTimeout(() => setPhase(1), 300);
//   //   const vid = videoRef.current;
//   //   if (vid) {
//   //     vid.playbackRate = 0.75; // slow playback — change to 0.5 for slower, 1.0 for normal slow down 0.6 ,0.5 this good slow down without making it too long
//   //     vid.play().catch(() => handleVideoEnd());
//   //   }
//   //   return () => clearTimeout(t1);
//   // }, []);

//   // // Safety fallback: if video never fires onEnded within 15s
//   // useEffect(() => {
//   //   const fallback = setTimeout(() => {
//   //     if (!endHandled.current) handleVideoEnd();
//   //   }, 15000);
//   //   return () => clearTimeout(fallback);
//   // }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//         @import url('https://fonts.cdnfonts.com/css/general-sans');

//         .mobile-nav {
//           position: fixed; inset: 0;
//           background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//           display: flex; flex-direction: column; align-items: center; justify-content: center;
//           gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//         .mobile-nav a {
//           font-family: 'Cormorant', Georgia, serif; color: #fff;
//           font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//           letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
//         }
//         .hamburger-btn {
//           display: none; flex-direction: column; gap: 5px;
//           background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//         }
//         .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav { display: none !important; }
//         }

//         /* ── Hero content block ── */
//         .hero-content-block {
//           position: absolute;
//           top: 70%;
//           left: 0;
//           right: 0;
//           z-index: 30;
//           transform: translateY(-50%);
//           padding-left: 5rem;
//           padding-right: 3rem;
//         }

//         .hero-divider {
//           width: 48px;
//           height: 1px;
//           background: rgba(255,255,255,0.35);
//           margin: 1.5rem 0 1.4rem;
//         }

//         .hero-welcome-title {
//           font-family: 'Cormorant Garamond', Georgia, serif;
//           color: var(--savoy-font, #fff);
//           font-size: clamp(1.05rem, 1.4vw, 1.25rem);
//           font-weight: 300;
//           line-height: 1.25;
//           margin-bottom: 0.75rem;
//           letter-spacing: 0.02em;
//         }

//         .hero-body-text {
//           font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//           color: rgba(255,255,255,0.72);
//           font-size: clamp(0.78rem, 0.95vw, 0.88rem);
//           font-weight: 300;
//           line-height: 1.65;
//           max-width: 480px;
//         }

//         /* ── Mobile ── */
//         @media (max-width: 640px) {
//           .hero-content-block {
//             top: 60%;
//             transform: translateY(-50%);
//             padding-left: 1.5rem;
//             padding-right: 1.5rem;
//           }

//           .hero-divider {
//             margin: 1.1rem 0 1rem;
//           }

//           .hero-welcome-title {
//             font-size: clamp(1rem, 4.5vw, 1.15rem);
//           }

//           .hero-body-text {
//             font-size: clamp(0.78rem, 3.8vw, 0.88rem);
//             max-width: 100%;
//           }

//           .lighthouse-img {
//             mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             -webkit-mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             mask-composite: intersect !important;
//             -webkit-mask-composite: source-in !important;
//           }
//         }

//         /* ── Tablet ── */
//         @media (min-width: 641px) and (max-width: 1024px) {
//           .hero-content-block {
//             padding-left: 3rem;
//             padding-right: 3rem;
//           }

//           .hero-body-text {
//             max-width: 420px;
//           }
//         }
//       `}</style>

//       <SavoyHeader phase={phase} />

//       {/* ── Hero ── */}
//       <div className="relative w-full min-h-screen bg-[#001a33] overflow-hidden">
//         {/* Video */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 1 && phase < 3 ? 1 : 0,
//             transitionDuration: "2000ms",
//           }}
//         >
//           {/* <video
//             ref={videoRef}
//             className={`w-full h-full ${isMobile ? "object-cover" : "object-fill"}`}
//             autoPlay
//             muted
//             playsInline
//             onEnded={handleVideoEnd}
//             onCanPlay={(e) => {
//               e.target.playbackRate = 0.75; // keeps slow speed after buffering
//             }}
//             src={isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo3.mp4"}
//           /> */}
//         </div>

//         {/* Post-video layer — empty placeholder */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{ opacity: phase >= 3 ? 1 : 0, transitionDuration: "3000ms" }}
//         >
//           <div
//             className="absolute"
//             style={{ right: 0, top: "10%", bottom: 0, width: "70%" }}
//           />
//         </div>

//         {/* Post-video layer — lighthouse */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 3 ? 1 : 0,
//             transitionDuration: "3000ms",
//             transitionTimingFunction: "ease-in-out",
//           }}
//         >
//           <div className="absolute right-0 bottom-0 w-full top-0 md:w-[40%] md:top-[20%]">
//             <img
//               src="/logo-savoy.png"
//               alt="Lighthouse"
//               className="lighthouse-img w-full h-full object-cover object-top md:object-[center_top]"
//               style={{
//                 maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 maskComposite: "intersect",
//                 WebkitMaskComposite: "source-in",
//               }}
//             />
//           </div>
//         </div>

//         {/* ── Hero content: h1 + divider + welcome text + body ── */}
//         <div
//           className="hero-content-block"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transform: phase >= 4 ? "translateY(-50%)" : "translateY(calc(-50% + 24px))",
//             transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//           }}
//         >
//           {/* Main headline */}
//           <h1
//             className="text-white leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 4vw, 3.4rem)",
//               // fontSize: "clamp(2rem, 4vw, 3.5rem)",
//               fontWeight: 500,
//               maxWidth: "780px",
//               lineHeight: 1.0,
//               letterSpacing: "0.01em",
//               // textTransform: "uppercase",
//             }}
//           >
//             Traditional Excellence.
//             <br />
//             Modern Flexibility.
//             <br />
//             Global Strength.
//           </h1>

//           {/* Thin divider line */}
//           <div className="hero-divider" />

//           {/* Welcome sub-heading */}
//           <p className="hero-welcome-title">
//             Welcome to Savoy Bank and Trust.
//             <br />
//             The Standard for Private Banking.
//           </p>

//           {/* Body paragraph */}
//           <p className="hero-body-text">
//             Based in Nassau, The Bahamas, Savoy Bank &amp; Trust is a privately
//             held private bank offering a comprehensive suite of investment and
//             banking services to a discerning clientele. We serve a global client
//             base of ultra-high-net-worth individuals (UHNWIs), family offices,
//             and institutions, delivering world-class solutions from a stable,
//             well-regulated financial center.
//           </p>
//         </div>
//       </div>

//       <SecondSection />
//       <Thirdsection />
//       <FourthSection />
//       <BrandFooterSection />
//     </>
//   );
// }

// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import SavoyHeader from "@/components/SavoyHeader";
// import { useEffect, useRef, useState } from "react";

// let introShown = false;

// export default function Home() {
//   const [phase, setPhase] = useState(0);        // ← was 4, reset so animation plays on mount
//   const [videoEnded, setVideoEnded] = useState(false); // ← was true, reset to allow scroll-lock logic
//   const [isMobile, setIsMobile] = useState(false);

//   // ── Logo scale animation state (mirrors SecondSection rowInView) ──
//   const [logoAnimated, setLogoAnimated] = useState(false);

//   const videoRef = useRef(null);
//   const endHandled = useRef(false);

//   function handleVideoEnd() {
//     if (endHandled.current) return;
//     endHandled.current = true;
//     setPhase(3);
//     setTimeout(() => {
//       setPhase(4);
//       setVideoEnded(true);
//     }, 400);
//   }

//   function skipToEnd() {
//     endHandled.current = true;
//     setPhase(4);
//     setVideoEnded(true);
//   }

//   // Scroll to top
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) history.scrollRestoration = "manual";
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }
//   }, []);

//   // Lock scroll while video plays
//   useEffect(() => {
//     const locked = !videoEnded;
//     document.body.style.overflow = locked ? "hidden" : "";
//     document.documentElement.style.overflow = locked ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [videoEnded]);

//   // ── Mount: fade content in without playing video ──────────────
//   useEffect(() => {
//     const t1 = setTimeout(() => setPhase(4), 300);
//     setVideoEnded(true);
//     return () => clearTimeout(t1);
//   }, []);

//   // ── Trigger logo scale animation once phase reaches 4 ─────────
//   useEffect(() => {
//     if (phase >= 4) {
//       // Small delay so the scale springs in just after the content fades in
//       const t = setTimeout(() => setLogoAnimated(true), 200);
//       return () => clearTimeout(t);
//     }
//   }, [phase]);

//   // ── Core: play or skip ───────────────────────────────────────
//   // useEffect(() => {
//   //   if (introShown) {
//   //     skipToEnd();
//   //     return;
//   //   }

//   //   introShown = true;

//   //   const t1 = setTimeout(() => setPhase(1), 300);
//   //   const vid = videoRef.current;
//   //   if (vid) {
//   //     vid.playbackRate = 0.75; // slow playback — change to 0.5 for slower, 1.0 for normal slow down 0.6 ,0.5 this good slow down without making it too long
//   //     vid.play().catch(() => handleVideoEnd());
//   //   }
//   //   return () => clearTimeout(t1);
//   // }, []);

//   // // Safety fallback: if video never fires onEnded within 15s
//   // useEffect(() => {
//   //   const fallback = setTimeout(() => {
//   //     if (!endHandled.current) handleVideoEnd();
//   //   }, 15000);
//   //   return () => clearTimeout(fallback);
//   // }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//         @import url('https://fonts.cdnfonts.com/css/general-sans');

//         .mobile-nav {
//           position: fixed; inset: 0;
//           background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//           display: flex; flex-direction: column; align-items: center; justify-content: center;
//           gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//         .mobile-nav a {
//           font-family: 'Cormorant', Georgia, serif; color: #fff;
//           font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//           letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
//         }
//         .hamburger-btn {
//           display: none; flex-direction: column; gap: 5px;
//           background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//         }
//         .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav { display: none !important; }
//         }

//         /* ── Hero content block ── */
//         .hero-content-block {
//           position: absolute;
//           top: 70%;
//           left: 0;
//           right: 0;
//           z-index: 30;
//           transform: translateY(-50%);
//           padding-left: 5rem;
//           padding-right: 3rem;
//         }

//         .hero-divider {
//           width: 48px;
//           height: 1px;
//           background: rgba(255,255,255,0.35);
//           margin: 1.5rem 0 1.4rem;
//         }

//         .hero-welcome-title {
//           font-family: 'Cormorant Garamond', Georgia, serif;
//           color: var(--savoy-font, #fff);
//           font-size: clamp(1.05rem, 1.4vw, 1.25rem);
//           font-weight: 300;
//           line-height: 1.25;
//           margin-bottom: 0.75rem;
//           letter-spacing: 0.02em;
//         }

//         .hero-body-text {
//           font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//           color: rgba(255,255,255,0.72);
//           font-size: clamp(0.78rem, 0.95vw, 0.88rem);
//           font-weight: 300;
//           line-height: 1.65;
//           max-width: 480px;
//         }

//         /* ── Hero logo scale wrapper ── */
//         .hero-logo-scale-wrap {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           transform-origin: center center;
//         }

//         /* ── Mobile ── */
//         @media (max-width: 640px) {
//           .hero-content-block {
//             top: 60%;
//             transform: translateY(-50%);
//             padding-left: 1.5rem;
//             padding-right: 1.5rem;
//           }

//           .hero-divider {
//             margin: 1.1rem 0 1rem;
//           }

//           .hero-welcome-title {
//             font-size: clamp(1rem, 4.5vw, 1.15rem);
//           }

//           .hero-body-text {
//             font-size: clamp(0.78rem, 3.8vw, 0.88rem);
//             max-width: 100%;
//           }

//           .lighthouse-img {
//             mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             -webkit-mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             mask-composite: intersect !important;
//             -webkit-mask-composite: source-in !important;
//           }

//           /* On mobile the logo sits below content; reset scale wrapper */
//           .hero-logo-scale-wrap {
//             left: 50% !important;
//             top: 50% !important;
//           }
//         }

//         /* ── Tablet ── */
//         @media (min-width: 641px) and (max-width: 1024px) {
//           .hero-content-block {
//             padding-left: 3rem;
//             padding-right: 3rem;
//           }

//           .hero-body-text {
//             max-width: 420px;
//           }
//         }
//       `}</style>

//       <SavoyHeader phase={phase} />

//       {/* ── Hero ── */}
//       <div className="relative w-full min-h-screen bg-[#001a33] overflow-hidden">
//         {/* Video */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 1 && phase < 3 ? 1 : 0,
//             transitionDuration: "2000ms",
//           }}
//         >
//           {/* <video
//             ref={videoRef}
//             className={`w-full h-full ${isMobile ? "object-cover" : "object-fill"}`}
//             autoPlay
//             muted
//             playsInline
//             onEnded={handleVideoEnd}
//             onCanPlay={(e) => {
//               e.target.playbackRate = 0.75; // keeps slow speed after buffering
//             }}
//             src={isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo3.mp4"}
//           /> */}
//         </div>

//         {/* Post-video layer — empty placeholder */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{ opacity: phase >= 3 ? 1 : 0, transitionDuration: "3000ms" }}
//         >
//           <div
//             className="absolute"
//             style={{ right: 0, top: "10%", bottom: 0, width: "70%" }}
//           />
//         </div>

//         {/* Post-video layer — lighthouse / logo */}
//         {/*
//           ── ORIGINAL (no scale animation):
//           <div className="absolute right-0 bottom-0 w-full top-0 md:w-[40%] md:top-[20%]">
//             <img
//               src="/logo-savoy.png"
//               alt="Lighthouse"
//               className="lighthouse-img w-full h-full object-cover object-top md:object-[center_top]"
//               style={{
//                 maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 maskComposite: "intersect",
//                 WebkitMaskComposite: "source-in",
//               }}
//             />
//           </div>
//           ──
//         */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 3 ? 1 : 0,
//             transitionDuration: "3000ms",
//             transitionTimingFunction: "ease-in-out",
//           }}
//         >
//           {/*
//             Right-side container: mirrors SecondSection's .second-logo-col —
//             takes up the right ~55% of the screen and is vertically centred.
//             On mobile it spans the full width.
//           */}
//           <div
//             className="absolute right-0 top-0 bottom-0 w-full md:w-[55%] overflow-hidden"
//           >
//             {/*
//               Scale-up wrapper — mirrors SecondSection's .second-logo-inner:
//                 - starts at scale(0.08) + opacity 0
//                 - springs to scale(1) + opacity 1 once logoAnimated is true
//               The mask-image on the img itself keeps the gradient fade effect.
//             */}
//             <div
//               className="hero-logo-scale-wrap"
//               style={{
//                 left: "50%",
//                 top: "60%",
//                 transformOrigin: "center center",
//                 transform: logoAnimated
//                   ? "translate(-50%, -50%) scale(1)"
//                   : "translate(-50%, -50%) scale(0.08)",
//                 opacity: logoAnimated ? 1 : 0,
//                 // transition: [
//                 //   "transform 1.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
//                 //   "opacity 1s ease-in 0.2s",
//                 // ].join(", "),
//                 transition: [
//                     "transform 3.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
//                     "opacity 1.6s ease-in 0.3s",
//                   ].join(", "),
//                 // Size: match the container's natural bounds so the logo fills nicely
//                 width: "min(550px, 90%)",
//                 height: "min(550px, 90vw)",
//               }}
//             >
//               <img
//                 src="/logo-savoy.png"
//                 alt="Lighthouse"
//                 className="lighthouse-img w-full h-full object-contain"
//                 style={{
//                   // maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                   // WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                   // maskComposite: "intersect",
//                   // WebkitMaskComposite: "source-in",
//                 }}
//               />
//               {/* Subtle overlay — kept from SecondSection */}
//               <div className="absolute inset-0 bg-[#031629]/20 pointer-events-none" />
//             </div>
//           </div>
//         </div>

//         {/* ── Hero content: h1 + divider + welcome text + body ── */}
//         <div
//           className="hero-content-block"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transform: phase >= 4 ? "translateY(-50%)" : "translateY(calc(-50% + 24px))",
//             transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//           }}
//         >
//           {/* Main headline */}
//           <h1
//             className="text-white leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 4vw, 3.4rem)",
//               // fontSize: "clamp(2rem, 4vw, 3.5rem)",
//               fontWeight: 500,
//               maxWidth: "780px",
//               lineHeight: 1.0,
//               letterSpacing: "0.01em",
//               // textTransform: "uppercase",
//             }}
//           >
//             Traditional Excellence.
//             <br />
//             Modern Flexibility.
//             <br />
//             Global Strength.
//           </h1>

//           {/* Thin divider line */}
//           <div className="hero-divider" />

//           {/* Welcome sub-heading */}
//           <p className="hero-welcome-title">
//             Welcome to Savoy Bank and Trust.
//             <br />
//             The Standard for Private Banking.
//           </p>

//           {/* Body paragraph */}
//           <p className="hero-body-text">
//             Based in Nassau, The Bahamas, Savoy Bank &amp; Trust is a privately
//             held private bank offering a comprehensive suite of investment and
//             banking services to a discerning clientele. We serve a global client
//             base of ultra-high-net-worth individuals (UHNWIs), family offices,
//             and institutions, delivering world-class solutions from a stable,
//             well-regulated financial center.
//           </p>
//         </div>
//       </div>

//       {/* <SecondSection /> */}
//       <Thirdsection />
//       <FourthSection />
//       <BrandFooterSection />
//     </>
//   );
// }

// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import SavoyHeader from "@/components/SavoyHeader";
// import { useEffect, useRef, useState } from "react";

// let introShown = false;

// export default function Home() {
//   const [phase, setPhase] = useState(0);        // ← was 4, reset so animation plays on mount
//   const [videoEnded, setVideoEnded] = useState(false); // ← was true, reset to allow scroll-lock logic
//   const [isMobile, setIsMobile] = useState(false);

//   // ── Logo scale animation state (mirrors SecondSection rowInView) ──
//   const [logoAnimated, setLogoAnimated] = useState(false);

//   const videoRef = useRef(null);
//   const endHandled = useRef(false);

//   function handleVideoEnd() {
//     if (endHandled.current) return;
//     endHandled.current = true;
//     setPhase(3);
//     setTimeout(() => {
//       setPhase(4);
//       setVideoEnded(true);
//     }, 400);
//   }

//   function skipToEnd() {
//     endHandled.current = true;
//     setPhase(4);
//     setVideoEnded(true);
//   }

//   // Scroll to top
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) history.scrollRestoration = "manual";
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }
//   }, []);

//   // Lock scroll while video plays
//   useEffect(() => {
//     const locked = !videoEnded;
//     document.body.style.overflow = locked ? "hidden" : "";
//     document.documentElement.style.overflow = locked ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [videoEnded]);

//   // ── Mount: fade content in without playing video ──────────────
//   useEffect(() => {
//     const t1 = setTimeout(() => setPhase(4), 300);
//     setVideoEnded(true);
//     return () => clearTimeout(t1);
//   }, []);

//   // ── Trigger logo scale animation once phase reaches 4 ─────────
//   useEffect(() => {
//     if (phase >= 4) {
//       // Small delay so the scale springs in just after the content fades in
//       const t = setTimeout(() => setLogoAnimated(true), 200);
//       return () => clearTimeout(t);
//     }
//   }, [phase]);

//   // ── Core: play or skip ───────────────────────────────────────
//   // useEffect(() => {
//   //   if (introShown) {
//   //     skipToEnd();
//   //     return;
//   //   }

//   //   introShown = true;

//   //   const t1 = setTimeout(() => setPhase(1), 300);
//   //   const vid = videoRef.current;
//   //   if (vid) {
//   //     vid.playbackRate = 0.75; // slow playback — change to 0.5 for slower, 1.0 for normal slow down 0.6 ,0.5 this good slow down without making it too long
//   //     vid.play().catch(() => handleVideoEnd());
//   //   }
//   //   return () => clearTimeout(t1);
//   // }, []);

//   // // Safety fallback: if video never fires onEnded within 15s
//   // useEffect(() => {
//   //   const fallback = setTimeout(() => {
//   //     if (!endHandled.current) handleVideoEnd();
//   //   }, 15000);
//   //   return () => clearTimeout(fallback);
//   // }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//         @import url('https://fonts.cdnfonts.com/css/general-sans');

//         .mobile-nav {
//           position: fixed; inset: 0;
//           background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//           display: flex; flex-direction: column; align-items: center; justify-content: center;
//           gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//         .mobile-nav a {
//           font-family: 'Cormorant', Georgia, serif; color: #fff;
//           font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//           letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
//         }
//         .hamburger-btn {
//           display: none; flex-direction: column; gap: 5px;
//           background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//         }
//         .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav { display: none !important; }
//         }

//         /* ── Hero content block ── */
//         .hero-content-block {
//           position: absolute;
//           top: 70%;
//           left: 0;
//           right: 0;
//           z-index: 30;
//           transform: translateY(-50%);
//           padding-left: 5rem;
//           padding-right: 3rem;
//         }

//         .hero-divider {
//           width: 48px;
//           height: 1px;
//           background: rgba(255,255,255,0.35);
//           margin: 1.5rem 0 1.4rem;
//         }

//         .hero-welcome-title {
//           font-family: 'Cormorant Garamond', Georgia, serif;
//           color: var(--savoy-font, #fff);
//           font-size: clamp(1.05rem, 1.4vw, 1.25rem);
//           font-weight: 300;
//           line-height: 1.25;
//           margin-bottom: 0.75rem;
//           letter-spacing: 0.02em;
//         }

//         .hero-body-text {
//           font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//           color: rgba(255,255,255,0.72);
//           font-size: clamp(0.78rem, 0.95vw, 0.88rem);
//           font-weight: 300;
//           line-height: 1.65;
//           max-width: 480px;
//         }

//         /* ── Hero logo scale wrapper ── */
//         .hero-logo-scale-wrap {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           transform-origin: center center;
//         }

//         /* ── Mobile ── */
//         @media (max-width: 640px) {
//           .hero-content-block {
//             top: 60%;
//             transform: translateY(-50%);
//             padding-left: 1.5rem;
//             padding-right: 1.5rem;
//           }

//           .hero-divider {
//             margin: 1.1rem 0 1rem;
//           }

//           .hero-welcome-title {
//             font-size: clamp(1rem, 4.5vw, 1.15rem);
//           }

//           .hero-body-text {
//             font-size: clamp(0.78rem, 3.8vw, 0.88rem);
//             max-width: 100%;
//           }

//           .lighthouse-img {
//             mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             -webkit-mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%) !important;
//             mask-composite: intersect !important;
//             -webkit-mask-composite: source-in !important;
//           }

//           /* On mobile the logo sits below content; reset scale wrapper */
//           .hero-logo-scale-wrap {
//             left: 50% !important;
//             top: 50% !important;
//           }
//         }

//         /* ── Tablet ── */
//         @media (min-width: 641px) and (max-width: 1024px) {
//           .hero-content-block {
//             padding-left: 3rem;
//             padding-right: 3rem;
//           }

//           .hero-body-text {
//             max-width: 420px;
//           }
//         }
//       `}</style>

//       <SavoyHeader phase={phase} />

//       {/* ── Hero ── */}
//       <div className="relative w-full min-h-screen bg-[#001a33] overflow-hidden">

//         {/* ── MOBILE ONLY: test.png full-cover background layer ─────────────────
//             Shown only on screens ≤ 640px (hidden on md+).
//             Sits at z-index 1, below all other layers and the text (z-30).
//             object-cover fills the full screen without cropping or letterboxing.
//         ── */}
//         <div
//           className="absolute inset-0 md:hidden"
//           style={{
//             zIndex: 1,
//             opacity: phase >= 3 ? 1 : 0,
//             transition: "opacity 3000ms ease-in-out",
//           }}
//         >
//           <img
//             src="/mobile.png"
//             alt=""
//             aria-hidden="true"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               objectPosition: "center center",
//               display: "block",
//             }}
//           />
//           {/* Dark gradient veil so text stays legible over the photo */}
//           {/* <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background:
//                 "linear-gradient(to bottom, rgba(0,26,51,0.45) 100%, rgba(0,26,51,0.25) 40%, rgba(0,26,51,0.55) 100%)",
//             }}
//           /> */}
//           <div
//   className="absolute inset-0 pointer-events-none"
//   style={{
//     background:
//       "linear-gradient(to bottom, rgba(3,22,41,0.88) 0%, rgba(3,22,41,0.78) 45%, rgba(3,22,41,0.92) 100%)",
//   }}
// />
//           {/* Bottom gradient */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: "linear-gradient(to top, #031629 0%, transparent 15%)",
//           }}
//         />
//         </div>
//         {/* ── END MOBILE BACKGROUND ── */}

//         {/* Video */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 1 && phase < 3 ? 1 : 0,
//             transitionDuration: "2000ms",
//             zIndex: 2,
//           }}
//         >
//           {/* <video
//             ref={videoRef}
//             className={`w-full h-full ${isMobile ? "object-cover" : "object-fill"}`}
//             autoPlay
//             muted
//             playsInline
//             onEnded={handleVideoEnd}
//             onCanPlay={(e) => {
//               e.target.playbackRate = 0.75; // keeps slow speed after buffering
//             }}
//             src={isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo3.mp4"}
//           /> */}
//         </div>

//         {/* Post-video layer — empty placeholder */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{ opacity: phase >= 3 ? 1 : 0, transitionDuration: "3000ms", zIndex: 2 }}
//         >
//           <div
//             className="absolute"
//             style={{ right: 0, top: "10%", bottom: 0, width: "70%" }}
//           />
//         </div>

//         {/* Post-video layer — lighthouse / logo */}
//         {/*
//           ── ORIGINAL (no scale animation):
//           <div className="absolute right-0 bottom-0 w-full top-0 md:w-[40%] md:top-[20%]">
//             <img
//               src="/logo-savoy.png"
//               alt="Lighthouse"
//               className="lighthouse-img w-full h-full object-cover object-top md:object-[center_top]"
//               style={{
//                 maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                 maskComposite: "intersect",
//                 WebkitMaskComposite: "source-in",
//               }}
//             />
//           </div>
//           ──
//         */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 3 ? 1 : 0,
//             transitionDuration: "3000ms",
//             transitionTimingFunction: "ease-in-out",
//             zIndex: 3,
//           }}
//         >
//           {/*
//             Right-side container: mirrors SecondSection's .second-logo-col —
//             takes up the right ~55% of the screen and is vertically centred.
//             On mobile it spans the full width.
//           */}
//           <div
//             className="absolute right-0 top-0 bottom-0 w-full md:w-[55%] overflow-hidden"
//           >
//             {/*
//               Scale-up wrapper — mirrors SecondSection's .second-logo-inner:
//                 - starts at scale(0.08) + opacity 0
//                 - springs to scale(1) + opacity 1 once logoAnimated is true
//               The mask-image on the img itself keeps the gradient fade effect.
//             */}
//             <div
//               className="hero-logo-scale-wrap"
//               style={{
//                 left: "50%",
//                 top: "60%",
//                 transformOrigin: "center center",
//                 transform: logoAnimated
//                   ? "translate(-50%, -50%) scale(1)"
//                   : "translate(-50%, -50%) scale(0.08)",
//                 opacity: logoAnimated ? 1 : 0,
//                 // transition: [
//                 //   "transform 1.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
//                 //   "opacity 1s ease-in 0.2s",
//                 // ].join(", "),
//                 transition: [
//                     "transform 3.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
//                     "opacity 1.6s ease-in 0.3s",
//                   ].join(", "),
//                 // Size: match the container's natural bounds so the logo fills nicely
//                 width: "min(550px, 90%)",
//                 height: "min(550px, 90vw)",
//               }}
//             >
//               {/* Desktop: logo-savoy.png with mask fade — hidden on mobile via md:block */}
//               <img
//                 src="/logo-savoy.png"
//                 alt="Lighthouse"
//                 className="lighthouse-img w-full h-full object-contain hidden md:block"
//                 style={{
//                   // maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                   // WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
//                   // maskComposite: "intersect",
//                   // WebkitMaskComposite: "source-in",
//                 }}
//               />
//               {/* Subtle overlay — kept from SecondSection */}
//               <div className="absolute inset-0 bg-[#031629]/20 pointer-events-none" />
//             </div>
//           </div>
//         </div>

//         {/* ── Hero content: h1 + divider + welcome text + body ── */}
//         <div
//           className="hero-content-block"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transform: phase >= 4 ? "translateY(-50%)" : "translateY(calc(-50% + 24px))",
//             transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//             zIndex: 30,
//           }}
//         >
//           {/* Main headline */}
//           <h1
//             className="text-white leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 4vw, 3.4rem)",
//               // fontSize: "clamp(2rem, 4vw, 3.5rem)",
//               fontWeight: 500,
//               maxWidth: "780px",
//               lineHeight: 1.0,
//               letterSpacing: "0.01em",
//               // textTransform: "uppercase",
//             }}
//           >
//             Traditional Excellence.
//             <br />
//             Modern Flexibility.
//             <br />
//             Global Strength.
//           </h1>

//           {/* Thin divider line */}
//           <div className="hero-divider" />

//           {/* Welcome sub-heading */}
//           <p className="hero-welcome-title">
//             Welcome to Savoy Bank and Trust.
//             <br />
//             The Standard for Private Banking.
//           </p>

//           {/* Body paragraph */}
//           <p className="hero-body-text">
//             Based in Nassau, The Bahamas, Savoy Bank &amp; Trust is a privately
//             held private bank offering a comprehensive suite of investment and
//             banking services to a discerning clientele. We serve a global client
//             base of ultra-high-net-worth individuals (UHNWIs), family offices,
//             and institutions, delivering world-class solutions from a stable,
//             well-regulated financial center.
//           </p>
//         </div>
//       </div>

//       {/* <SecondSection /> */}
//       <Thirdsection />
//       <FourthSection />
//       <BrandFooterSection />
//     </>
//   );
// }

"use client";

import BrandFooterSection from "@/components/Brandfootersection";
import SecondSection from "@/components/Secondsection";
import Thirdsection from "@/components/Thirdsection";
import FourthSection from "@/components/Fourthsection";
import SavoyHeader from "@/components/SavoyHeader";
import { useEffect, useRef, useState } from "react";

import Fourtest from "@/components/Test/Fourtest1";
import WhySavoy from "@/components/Whysavoy";

let introShown = false;

export default function Home() {
  const [phase, setPhase] = useState(0); // ← was 4, reset so animation plays on mount
  const [videoEnded, setVideoEnded] = useState(false); // ← was true, reset to allow scroll-lock logic
  const [isMobile, setIsMobile] = useState(false);

  // ── Logo scale animation state (mirrors SecondSection rowInView) ──
  const [logoAnimated, setLogoAnimated] = useState(false);

  // ── Mobile-only: content fades in AFTER the logo spring finishes ──
  // Logo animation: 3.2s transform + 0.3s delay = 3.5s. Add 0.2s buffer → 3.7s.
  const [mobileContentVisible, setMobileContentVisible] = useState(false);

  const videoRef = useRef(null);
  const endHandled = useRef(false);

  function handleVideoEnd() {
    if (endHandled.current) return;
    endHandled.current = true;
    setPhase(3);
    setTimeout(() => {
      setPhase(4);
      setVideoEnded(true);
    }, 400);
  }

  function skipToEnd() {
    endHandled.current = true;
    setPhase(4);
    setVideoEnded(true);
  }

  // Scroll to top
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  // Lock scroll while video plays
  useEffect(() => {
    const locked = !videoEnded;
    document.body.style.overflow = locked ? "hidden" : "";
    document.documentElement.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [videoEnded]);

  // ── Detect mobile on mount and on resize ─────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Mount: fade content in without playing video ──────────────
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(4), 300);
    setVideoEnded(true);
    return () => clearTimeout(t1);
  }, []);

  // ── Trigger logo scale animation once phase reaches 4 ─────────
  useEffect(() => {
    if (phase >= 4) {
      // Small delay so the scale springs in just after the content fades in
      const t = setTimeout(() => setLogoAnimated(true), 200);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // ── Mobile content: appear after logo spring finishes ─────────
  // Only fires on mobile (isMobile). On desktop mobileContentVisible stays false
  // and the desktop path (phase >= 4) controls the content instead.
  useEffect(() => {
    if (phase >= 4 && isMobile) {
      // Logo: 3.2s spring + 0.3s delay + 0.2s buffer = 3.7s
      const t = setTimeout(() => setMobileContentVisible(true), 2800);
      return () => clearTimeout(t);
    }
  }, [phase, isMobile]);

  // ── Core: play or skip ───────────────────────────────────────
  // useEffect(() => {
  //   if (introShown) {
  //     skipToEnd();
  //     return;
  //   }

  //   introShown = true;

  //   const t1 = setTimeout(() => setPhase(1), 300);
  //   const vid = videoRef.current;
  //   if (vid) {
  //     vid.playbackRate = 0.75; // slow playback — change to 0.5 for slower, 1.0 for normal slow down 0.6 ,0.5 this good slow down without making it too long
  //     vid.play().catch(() => handleVideoEnd());
  //   }
  //   return () => clearTimeout(t1);
  // }, []);

  // // Safety fallback: if video never fires onEnded within 15s
  // useEffect(() => {
  //   const fallback = setTimeout(() => {
  //     if (!endHandled.current) handleVideoEnd();
  //   }, 15000);
  //   return () => clearTimeout(fallback);
  // }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        @import url('https://fonts.cdnfonts.com/css/general-sans');

        .mobile-nav {
          position: fixed; inset: 0;
          background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
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

        /* ── Hero content block ── */
        .hero-content-block {
          position: absolute;
          top: 65%;
          left: 0;
          right: 0;
          z-index: 30;
          transform: translateY(-50%);
          padding-left: 5rem;
          padding-right: 3rem;
        }

        .hero-divider {
          width: 48px;
          height: 1px;
          background: rgba(255,255,255,0.35);
          margin: 1.5rem 0 1.4rem;
        }

        .hero-welcome-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--savoy-font, #fff);
          font-size: clamp(1.05rem, 1.4vw, 1.25rem);
          font-weight: 300;
          line-height: 1.25;
          margin-bottom: 0.75rem;
          letter-spacing: 0.02em;
        }

        .hero-body-text {
          font-family: 'General Sans', 'Inter', system-ui, sans-serif;
          color: rgba(255,255,255,0.72);
          font-size: clamp(0.68rem, 0.85vw, 0.78rem);
          font-weight: 300;
          line-height: 1.65;
          max-width: 480px;
          text-align: justify;
          text-justify: inter-word;
          word-spacing: -0.1em;
        }

        /* ── Hero logo scale wrapper ── */
        .hero-logo-scale-wrap {
          position: absolute;
          left: 50%;
          top: 50%;
          transform-origin: center center;
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .hero-divider {
            margin: 1.1rem 0 1rem;
          }

          .hero-welcome-title {
            font-size: clamp(1rem, 4.5vw, 1.15rem);
          }

          .hero-body-text {
            font-size: clamp(0.78rem, 3.8vw, 0.88rem);
            max-width: 100%;
            
          }

          /* ── Mobile layout overrides ──────────────────────────────────────────
             On mobile the hero switches from a fully-absolute stack to a flex
             column so the logo sits on top and the text flows naturally below it.
             These rules ONLY fire at ≤640px — zero effect on desktop.
          ── */

          /* 1. Hero root becomes a flex column */
          .hero-root {
            display: flex !important;
            flex-direction: column !important;
            min-height: 100svh !important;
            overflow-x: hidden;
          }

          /* 2. Hide layers that are irrelevant on mobile (video, empty placeholder) */
          .hero-video-layer,
          .hero-placeholder-layer {
            display: none !important;
          }

          /* 3. Logo outer layer: becomes a flex-shrink-0 block at the top */
          .hero-logo-outer-layer {
            position: relative !important;
            inset: auto !important;
            width: 100% !important;
            /* Height = square viewport width so the star is never clipped */
            // height: 100vw !important;
            height: 90vw !important;
            flex-shrink: 0 !important;
            z-index: 3 !important;
            /* keep the phase-driven opacity transition */
          }

          /* 4. Inner column: fill the logo section */
          .hero-logo-col-inner {
            position: relative !important;
            width: 100% !important;
            height: 100% !important;
            right: auto !important;
            top: 40% !important;
            bottom: auto !important;
          }

          /* 5. Scale wrap: fill the available image area, centred */
          .hero-logo-scale-wrap {
            width: 88% !important;
            height: 88% !important;
            left: 50% !important;
            top: 50% !important;
          }

          /* 6. On mobile: no masks on the star image — show it whole, no cutoff */
          .lighthouse-img {
            mask-image: none !important;
            -webkit-mask-image: none !important;
            mask-composite: unset !important;
            -webkit-mask-composite: unset !important;
            object-fit: contain !important;
          }

          /* 7. Content block: flow below the logo image as a flex child.
             transform & opacity are driven by mobileContentVisible inline styles. */
          .hero-content-block {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            transform: none !important;
            z-index: 30;
            // padding: 1.5rem 1.5rem 3.5rem !important;
            padding: 2.5rem 1.5rem 3.5rem !important;
            margin-top: 10rem;
            flex: 1;
          }
        }

        /* ── Tablet ── */
        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-content-block {
            padding-left: 3rem;
            padding-right: 3rem;
          }

          .hero-body-text {
            max-width: 420px;
          }
        }
      `}</style>

      <SavoyHeader phase={phase} />

      {/* ── Hero ── */}
      {/*
        Added class "hero-root" — no desktop effect, used by mobile CSS above
        to switch the hero to a flex-column layout on ≤640px.
      */}
      <div className="hero-root relative w-full min-h-screen bg-[#001a33] overflow-hidden">
        {/* ── MOBILE ONLY: mobile.png full-cover background layer ─────────────────
            Commented out — replaced by the logo image shown below.
        ── */}
        {/* <div
          className="absolute inset-0 md:hidden"
          style={{
            zIndex: 1,
            opacity: phase >= 3 ? 1 : 0,
            transition: "opacity 3000ms ease-in-out",
          }}
        >
          <img
            src="/mobile.png"
            alt=""
            aria-hidden="true"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              display: "block",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,26,51,0.45) 100%, rgba(0,26,51,0.25) 40%, rgba(0,26,51,0.55) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(3,22,41,0.88) 0%, rgba(3,22,41,0.78) 45%, rgba(3,22,41,0.92) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #031629 0%, transparent 15%)",
            }}
          />
        </div> */}
        {/* ── END MOBILE BACKGROUND ── */}

        {/* Video */}
        {/*
          Added class "hero-video-layer" — hidden on mobile via CSS, no desktop change.
        */}
        <div
          className="hero-video-layer absolute inset-0 transition-opacity"
          style={{
            opacity: phase >= 1 && phase < 3 ? 1 : 0,
            transitionDuration: "2000ms",
            zIndex: 2,
          }}
        >
          {/* <video
            ref={videoRef}
            className={`w-full h-full ${isMobile ? "object-cover" : "object-fill"}`}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onCanPlay={(e) => {
              e.target.playbackRate = 0.75; // keeps slow speed after buffering
            }}
            src={isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo3.mp4"}
          /> */}
        </div>

        {/* Post-video layer — empty placeholder */}
        {/*
          Added class "hero-placeholder-layer" — hidden on mobile via CSS, no desktop change.
        */}
        <div
          className="hero-placeholder-layer absolute inset-0 transition-opacity"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transitionDuration: "3000ms",
            zIndex: 2,
          }}
        >
          <div
            className="absolute"
            style={{ right: 0, top: "10%", bottom: 0, width: "70%" }}
          />
        </div>

        {/* Post-video layer — lighthouse / logo */}
        {/*
          ── ORIGINAL (no scale animation):
          <div className="absolute right-0 bottom-0 w-full top-0 md:w-[40%] md:top-[20%]">
            <img
              src="/logo-savoy.png"
              alt="Lighthouse"
              className="lighthouse-img w-full h-full object-cover object-top md:object-[center_top]"
              style={{
                maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
                WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>
          ──
        */}
        {/*
          Added class "hero-logo-outer-layer" — on mobile CSS turns this from
          absolute inset-0 into a flex-shrink-0 block at the top of the column.
          On desktop: zero change.

          NOTE: opacity uses `phase >= 4` on mobile (via isMobile) so the logo
          is immediately visible once mount fires, rather than waiting for phase 3
          which is only set during the video flow.
        */}
        <div
          className="hero-logo-outer-layer absolute inset-0 transition-opacity"
          style={{
            opacity: (isMobile ? phase >= 4 : phase >= 3) ? 1 : 0,
            transitionDuration: "3000ms",
            transitionTimingFunction: "ease-in-out",
            zIndex: 3,
          }}
        >
          {/*
            Right-side container: mirrors SecondSection's .second-logo-col —
            takes up the right ~55% of the screen and is vertically centred.
            On mobile it spans the full width.
            Added class "hero-logo-col-inner" for mobile CSS targeting.
          */}
          <div className="hero-logo-col-inner absolute right-0 top-0 bottom-0 w-full md:w-[55%] overflow-hidden">
            {/*
              Scale-up wrapper — mirrors SecondSection's .second-logo-inner:
                - starts at scale(0.08) + opacity 0
                - springs to scale(1) + opacity 1 once logoAnimated is true
              The mask-image on the img itself keeps the gradient fade effect.
            */}
            <div
              className="hero-logo-scale-wrap"
              style={{
                left: "50%",
                top: "60%",
                transformOrigin: "center center",
                transform: logoAnimated
                  ? "translate(-50%, -50%) scale(1)"
                  : "translate(-50%, -50%) scale(0.08)",
                opacity: logoAnimated ? 1 : 0,
                // transition: [
                //   "transform 1.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                //   "opacity 1s ease-in 0.2s",
                // ].join(", "),
                transition: [
                  "transform 3.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
                  "opacity 1.6s ease-in 0.3s",
                ].join(", "),
                // Size: match the container's natural bounds so the logo fills nicely
                width: "min(550px, 90%)",
                height: "min(550px, 90vw)",
              }}
            >
              {/*
                Same logo-savoy.png on both desktop and mobile.
                Desktop: mask gradients fade the edges (commented out below, re-enable if needed).
                Mobile: .lighthouse-img CSS override strips the mask so the full star shows.
                Removed "hidden md:block" — image is visible on both breakpoints.
              */}
              <img
                src="/logo-savoy.png"
                alt="Lighthouse"
                className="lighthouse-img w-full h-full object-contain"
                style={
                  {
                    // maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
                    // WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
                    // maskComposite: "intersect",
                    // WebkitMaskComposite: "source-in",
                  }
                }
              />
              {/* Subtle overlay — kept from SecondSection */}
              <div className="absolute inset-0 bg-[#031629]/20 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ── Hero content: h1 + divider + welcome text + body ── */}
        {/*
          Desktop path  : position absolute, top 70%, translateY(-50%), driven by phase >= 4.
          Mobile path   : position relative (via CSS overriding to flow below logo),
                          driven by mobileContentVisible which fires only after the logo
                          spring finishes (~3.7 s). This creates the "logo first, then
                          content" sequence on mobile without touching the desktop layout.
        */}
        <div
          className="hero-content-block"
          style={{
            // ── opacity ──────────────────────────────────────────────────────────
            // Desktop: phase >= 4 (fires immediately on mount after 300ms)
            // Mobile : mobileContentVisible (fires after logo animation completes)
            opacity: isMobile
              ? mobileContentVisible
                ? 1
                : 0
              : phase >= 4
                ? 1
                : 0,

            // ── transform ────────────────────────────────────────────────────────
            // Desktop: vertical centering via translateY(-50%) with a subtle slide-up
            // Mobile : simple translateY — CSS forces position:relative so no
            //          vertical centering needed; just a subtle slide-up on entry
            transform: isMobile
              ? mobileContentVisible
                ? "translateY(0)"
                : "translateY(20px)"
              : phase >= 4
                ? "translateY(-50%)"
                : "translateY(calc(-50% + 24px))",

            // ── transition ───────────────────────────────────────────────────────
            transition: isMobile
              ? "opacity 0.9s ease-out, transform 0.9s ease-out"
              : "opacity 1.4s ease-out, transform 1.4s ease-out",

            zIndex: 30,
          }}
        >
          {/* Main headline */}
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: "clamp(1.8rem, 4vw, 3.4rem)",
              // fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 500,
              maxWidth: "780px",
              lineHeight: 1.0,
              letterSpacing: "0.01em",
              // textTransform: "uppercase",
            }}
          >
            Traditional Excellence.
            <br />
            Modern Flexibility.
            <br />
            Global Strength.
          </h1>

          {/* Thin divider line */}
          <div className="hero-divider" />

          {/* Welcome sub-heading */}
          <p className="hero-welcome-title">
            Welcome to Savoy Bank and Trust.
            <br />
            The Standard for Private Banking.
          </p>

          {/* Body paragraph */}
          <p className="hero-body-text">
            Headquartered in Nassau, The Bahamas, Savoy Bank & Trust is an
            independent, privately owned institution dedicated to serving the
            unique needs of ultra-high-net-worth individuals, family offices,
            and institutional clients worldwide.

            We deliver a comprehensive suite of private banking, wealth
            management, and trust services, combining personalized attention
            with sophisticated financial expertise. Our approach is built on
            discretion, integrity, and a deep understanding of the complexities
            of preserving and growing wealth across generations.

            As a trusted partner operating from one of the world's leading
            international financial centers, we provide tailored solutions
            designed to help our clients navigate global opportunities, protect
            their assets, and achieve their long-term objectives with
            confidence.
          </p>
        </div>
      </div>

      {/* <SecondSection /> */}
      <Thirdsection />
      <WhySavoy />
      {/* <FourthSection /> */}
      <Fourtest />
      <BrandFooterSection />
    </>
  );
}
