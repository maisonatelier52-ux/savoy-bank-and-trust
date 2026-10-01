// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const services = [
//   {
//     description:
//       "Responsive day-to-day banking support delivered with the attention of a relationship-led institution.",
//   },
//   {
//     description:
//       "Secure digital access for convenient account visibility and transaction management.",
//   },
//   {
//     description:
//       "Access to custody and execution capabilities across a range of investment instruments.",
//   },
//   {
//     description:
//       "Liquidity solutions structured around current accounts, term deposits, and fiduciary deposits.",
//   },
//   {
//     description:
//       "Spot, forward, and swap solutions tailored to cross-border requirements.",
//   },
//   {
//     description:
//       "Trading and custody solutions for clients seeking additional diversification.",
//   },
//   {
//     description:
//       "Efficient movement of funds supported by attentive service and clear execution.",
//   },
//   {
//     description:
//       "Asset-backed credit solutions structured around eligible holdings.",
//   },
//   {
//     description:
//       "Additional solutions tailored to more specialized requirements.",
//   },
// ];

// export default function SavoyServices() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

//         /* ── Section shell ── */
//         .fourth-section-root {
//           position: relative;
//           width: 100%;
//           min-height: 100vh;
//           display: flex;
//           flex-direction: row;
//           align-items: flex-start;
//           overflow: hidden;
//         }

//         /* ── Dark overlay sits above bg image ── */
//         .fourth-overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(var(--savoy-bg-rgb),0.20);
//           z-index: 0;
//           pointer-events: none;
//         }

//         /* ── Left text column ── */
//         .fourth-text-col {
//           position: relative;
//           z-index: 1;
//           flex: 0 0 auto;
//           width: 50%;
//           padding: 15vh 4vw 12vh 6.5vw;
//         }

//         /* ── Right image column ── */
//         .fourth-img-col {
//           position: relative;
//           z-index: 1;
//           flex: 0 0 auto;
//           width: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           /* Sticky so the lighthouse stays in view while you scroll the list */
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           padding: 6vh 3vw;
//         }

//         .fourth-img-wrap {
//           width: 100%;
//           max-width: 660px;
//           margin-top: 70vh;   /* nudge image down */
//           /* Fade left edge into the background */
//           -webkit-mask-image: linear-gradient(
//             to right, transparent 0%, black 22%, black 100%
//           );
//           mask-image: linear-gradient(
//             to right, transparent 0%, black 22%, black 100%
//           );
//         }

//         /* ── Tablet ── */
//         @media (max-width: 1024px) {
//           .fourth-text-col {
//             width: 58%;
//             padding: 12vh 3vw 10vh 5vw;
//           }
//           .fourth-img-col {
//             width: 42%;
//             padding: 4vh 2vw;
//           }
//           .fourth-img-wrap { max-width: 340px; }
//           .fourth-heading { font-size: clamp(1.2rem, 3vw, 1.6rem) !important; }
//         }

//         /* ── Mobile: image FIRST, text SECOND ── */
//         @media (max-width: 640px) {
//           .fourth-section-root {
//             flex-direction: column;
//             min-height: unset;
//           }

//           /* image on top */
//           .fourth-img-col {
//             order: 1;
//             width: 100%;
//             height: auto;          /* un-stick on mobile */
//             position: relative;
//             top: unset;
//             padding: 6vh 10vw 2vh;
//             justify-content: center;
//           }

//           /* text below */
//           .fourth-text-col {
//             order: 2;
//             width: 100%;
//             padding: 4vh 6vw 10vh;
//           }

//           .fourth-img-wrap {
//             max-width: 320px;
//             -webkit-mask-image: none;
//             mask-image: none;
//             margin-top: 1vh;
//           }

//           .fourth-heading {
//             font-size: clamp(1.2rem, 5vw, 1.6rem) !important;
//             margin-bottom: 3rem !important;
//           }
//           .fourth-service-desc { font-size: 0.9rem !important; }
//         }
//       `}</style>

//       {/* <section
//         className="fourth-section-root bg-[#001a33] text-white"
//         style={{
//           fontFamily: "'Cormorant', Georgia, serif",
//           backgroundImage: "url('/savoy-background-blue.png')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       > */}
//         {/* Dark overlay */}
//         {/* <div className="fourth-overlay" /> */}
//         <section
//   className="relative fourth-section-root bg-[#031629] text-white overflow-hidden"
//   style={{
//     fontFamily: "'Cormorant', Georgia, serif",
//     backgroundImage: "url('/midnight-blue-1.png')",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}
// >
//     {/* Dark overlay */}
//   <div className="absolute inset-0 bg-[#031629]/50 pointer-events-none" />
  
//   {/* Combined overlays */}
//   {/* <div
//     className="absolute inset-0 pointer-events-none"
//     style={{
//       background: `
//         linear-gradient(to bottom, #031629 0%, transparent 25%),
//         linear-gradient(to top, #031629 0%, transparent 25%),
//         rgba(var(--savoy-bg-rgb),0.25)
//       `,
//     }}
//   /> */}
//   <div
//   className="absolute inset-0 pointer-events-none"
//   style={{
//     backgroundImage: `
//       linear-gradient(to bottom, #031629 0%, transparent 25%),
//       linear-gradient(to top, #031629 0%, transparent 25%)
//     `,
//     backgroundColor: `rgba(var(--savoy-bg-rgb), 0.25)`,
//   }}
// />

//         {/* ── LEFT: text + service list ── */}
//         {/* <div className="fourth-text-col">
//           <h2
//             className="fourth-heading font-light text-white mb-[76px]"
//             style={{ fontSize: "clamp(1.8rem, 2vw, 1.3rem)", lineHeight: 1.0 }}
//           >
//             Savoy offers a focused range of banking and fiduciary services
//             designed to meet the needs of a diversified international clientele.
//           </h2>

//           <ul className="fourth-service-list list-none p-0 m-0 space-y-16">
//             {services.map((service, i) => (
//               <li key={i}>
//                 <p
//                   className="fourth-service-desc font-normal not-italic text-white max-w-[530px]"
//                   style={{
//                     fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//                     fontSize: "clamp(0.8rem, 1vw, 0.95rem)",
//                     lineHeight: 1.0,
//                   }}
//                 >
//                   {service.description}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div> */}
//         <div className="fourth-text-col ">
//           <h2
//             className="fourth-heading font-light text-white"
//             style={{
//               fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)",
//               lineHeight: 1.0,
//               marginBottom: "4rem",
//               maxWidth: "480px",
//               letterSpacing: "0.02em",
//               fontFamily: "'Cormorant', Georgia, serif",
//             }}
//           >
//             Savoy offers a focused range of banking and fiduciary services
//             designed to meet the needs of a diversified international clientele.
//           </h2>

//           {/* <ul className="fourth-service-list list-none p-0 m-0"> */}
//           <ul className="fourth-service-list list-none p-0 m-0" style={{ paddingBottom: "1.4rem" }}>
//             {services.map((service, i) => (
//               <li
//                 key={i}
//                 onMouseEnter={() => setHoveredIndex(i)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr",
//                   padding: "1.4rem 0",
//                   borderTop:
//                     i === 0
//                       ? "1px solid rgba(255,255,255,0.18)"
//                       : "1px solid rgba(255,255,255,0.08)",
//                   position: "relative",
//                   paddingLeft: "1.25rem",
//                   cursor: "default",
//                   transition: "background 0.3s ease",
//                   background:
//                     hoveredIndex === i
//                       ? "rgba(255,255,255,0.04)"
//                       : "transparent",
//                 }}
//               >
//                 {/* Left accent bar */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     left: 0,
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     width: "2px",
//                     height: hoveredIndex === i ? "100%" : "60%",
//                     transition: "height 0.3s ease, background 0.3s ease",
//                     background:
//                       hoveredIndex === i
//                         ? "rgba(255,255,255,0.9)"
//                         : i % 3 === 0
//                           ? "rgba(255,255,255,0.55)"
//                           : i % 3 === 1
//                             ? "rgba(255,255,255,0.25)"
//                             : "rgba(255,255,255,0.1)",
//                   }}
//                 />

//                 <p
//                   className="fourth-service-desc"
//                   style={{
//                     fontFamily:
//                       "'General Sans', 'Inter', system-ui, sans-serif",
//                     fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
//                     fontWeight: hoveredIndex === i ? 500 : 300,
//                     lineHeight: 1.65,
//                     color:
//                       hoveredIndex === i
//                         ? "rgba(255,255,255,1)"
//                         : "rgba(255,255,255,0.82)",
//                     margin: 0,
//                     maxWidth: "460px",
//                     letterSpacing: hoveredIndex === i ? "0.02em" : "0.01em",
//                     transition:
//                       "font-weight 0.2s ease, color 0.2s ease, letter-spacing 0.2s ease",
//                   }}
//                 >
//                   {service.description}
//                 </p>
//               </li>
//             ))}

//             {/* closing rule */}
//             <li
//               style={{
//                 borderTop: "1px solid rgba(255,255,255,0.08)",
//                 height: 0,
//               }}
//             />
//           </ul>
//         </div>

//         {/* ── RIGHT: lighthouse illustration ── */}
//         {/* <div className="fourth-img-col">
//           <div className="fourth-img-wrap">
//             <Image
//               src="/savoy-22.png"
//               alt="Lighthouse illustration"
//               width={460}
//               height={600}
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 display: "block",
//                 opacity: 0.9,
//               }}
//               priority={false}
//             />
//           </div>
//         </div> */}
//       </section>
//     </>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const services = [
//   {
//     title: "Traditional Banking Services",
//     href: "/services",
//   },
//   {
//     title: "A Secure Digital Banking Platform",
//     href: "/services",
//   },
//   {
//     title: "Global Custody and Execution",
//     href: "/services",
//   },
//   {
//     title: "Foreign Exchange",
//     href: "/services",
//   },
//   {
//     title: "OTC and Derivatives Instruments",
//     href: "/services",
//   },
//   {
//     title: "Precious Metals Trading & Custody",
//     href: "/services",
//   },
//   {
//     title: "Money Market Solutions",
//     href: "/services",
//   },
//   {
//     title: "Payments and Transfers",
//     href: "/services",
//   },
//   {
//     title: "Credit Solutions & Lombard Loans",
//     href: "/services",
//   },
// ];

// export default function SavoyServices() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

//         /* ── Section shell ── */
//         .fourth-section-root {
//           position: relative;
//           width: 100%;
//           min-height: 100vh;
//           display: flex;
//           flex-direction: row;
//           align-items: flex-start;
//           overflow: hidden;
//         }

//         /* ── Dark overlay sits above bg image ── */
//         .fourth-overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(var(--savoy-bg-rgb),0.20);
//           z-index: 0;
//           pointer-events: none;
//         }

//         /* ── Left text column ── */
//         .fourth-text-col {
//           position: relative;
//           z-index: 1;
//           flex: 0 0 auto;
//           width: 50%;
//           padding: 15vh 4vw 12vh 6.5vw;
//         }

//         /* ── Right image column ── */
//         .fourth-img-col {
//           position: relative;
//           z-index: 1;
//           flex: 0 0 auto;
//           width: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           /* Sticky so the lighthouse stays in view while you scroll the list */
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           padding: 6vh 3vw;
//         }

//         .fourth-img-wrap {
//           width: 100%;
//           max-width: 660px;
//           margin-top: 70vh;   /* nudge image down */
//           /* Fade left edge into the background */
//           -webkit-mask-image: linear-gradient(
//             to right, transparent 0%, black 22%, black 100%
//           );
//           mask-image: linear-gradient(
//             to right, transparent 0%, black 22%, black 100%
//           );
//         }

//         /* ── Tablet ── */
//         @media (max-width: 1024px) {
//           .fourth-text-col {
//             width: 58%;
//             padding: 12vh 3vw 10vh 5vw;
//           }
//           .fourth-img-col {
//             width: 42%;
//             padding: 4vh 2vw;
//           }
//           .fourth-img-wrap { max-width: 340px; }
//           .fourth-heading { font-size: clamp(1.2rem, 3vw, 1.6rem) !important; }
//         }

//         /* ── Mobile: image FIRST, text SECOND ── */
//         @media (max-width: 640px) {
//           .fourth-section-root {
//             flex-direction: column;
//             min-height: unset;
//           }

//           /* image on top */
//           .fourth-img-col {
//             order: 1;
//             width: 100%;
//             height: auto;          /* un-stick on mobile */
//             position: relative;
//             top: unset;
//             padding: 6vh 10vw 2vh;
//             justify-content: center;
//           }

//           /* text below */
//           .fourth-text-col {
//             order: 2;
//             width: 100%;
//             padding: 4vh 6vw 10vh;
//           }

//           .fourth-img-wrap {
//             max-width: 320px;
//             -webkit-mask-image: none;
//             mask-image: none;
//             margin-top: 1vh;
//           }

//           .fourth-heading {
//             font-size: clamp(1.2rem, 5vw, 1.6rem) !important;
//             margin-bottom: 3rem !important;
//           }
//           .fourth-service-desc { font-size: 0.9rem !important; }
//         }
//       `}</style>

//       {/* <section
//         className="fourth-section-root bg-[#001a33] text-white"
//         style={{
//           fontFamily: "'Cormorant', Georgia, serif",
//           backgroundImage: "url('/savoy-background-blue.png')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       > */}
//         {/* Dark overlay */}
//         {/* <div className="fourth-overlay" /> */}
//         <section
//   className="relative fourth-section-root bg-[#031629] text-white overflow-hidden"
//   style={{
//     fontFamily: "'Cormorant', Georgia, serif",
//     backgroundImage: "url('/midnight-blue-1.png')",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}
// >
//     {/* Dark overlay */}
//   <div className="absolute inset-0 bg-[#031629]/50 pointer-events-none" />
  
//   {/* Combined overlays */}
//   {/* <div
//     className="absolute inset-0 pointer-events-none"
//     style={{
//       background: `
//         linear-gradient(to bottom, #031629 0%, transparent 25%),
//         linear-gradient(to top, #031629 0%, transparent 25%),
//         rgba(var(--savoy-bg-rgb),0.25)
//       `,
//     }}
//   /> */}
//   <div
//   className="absolute inset-0 pointer-events-none"
//   style={{
//     backgroundImage: `
//       linear-gradient(to bottom, #031629 0%, transparent 25%),
//       linear-gradient(to top, #031629 0%, transparent 25%)
//     `,
//     backgroundColor: `rgba(var(--savoy-bg-rgb), 0.25)`,
//   }}
// />

//         {/* ── LEFT: text + service list ── */}
//         {/* <div className="fourth-text-col">
//           <h2
//             className="fourth-heading font-light text-white mb-[76px]"
//             style={{ fontSize: "clamp(1.8rem, 2vw, 1.3rem)", lineHeight: 1.0 }}
//           >
//             Savoy offers a focused range of banking and fiduciary services
//             designed to meet the needs of a diversified international clientele.
//           </h2>

//           <ul className="fourth-service-list list-none p-0 m-0 space-y-16">
//             {services.map((service, i) => (
//               <li key={i}>
//                 <p
//                   className="fourth-service-desc font-normal not-italic text-white max-w-[530px]"
//                   style={{
//                     fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//                     fontSize: "clamp(0.8rem, 1vw, 0.95rem)",
//                     lineHeight: 1.0,
//                   }}
//                 >
//                   {service.description}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div> */}
//         <div className="fourth-text-col">
//           <h2
//             className="fourth-heading font-light text-white"
//             style={{
//               fontSize: "clamp(2.5rem, 4vw, 4rem)",
//               lineHeight: 1.0,
//               marginBottom: "4rem",
//               maxWidth: "480px",
//               letterSpacing: "0.02em",
//               fontFamily: "'Cormorant', Georgia, serif",
//             }}
//           >
//             Services
//           </h2>

//           {/* <ul className="fourth-service-list list-none p-0 m-0"> */}
//           <ul className="fourth-service-list list-none p-0 m-0" style={{ paddingBottom: "1.4rem" }}>
//             {services.map((service, i) => (
//               <li
//                 key={i}
//                 onMouseEnter={() => setHoveredIndex(i)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr",
//                   padding: "1.4rem 0",
//                   borderTop:
//                     i === 0
//                       ? "1px solid rgba(255,255,255,0.18)"
//                       : "1px solid rgba(255,255,255,0.08)",
//                   position: "relative",
//                   paddingLeft: "1.25rem",
//                   cursor: "pointer",
//                   transition: "background 0.3s ease",
//                   background:
//                     hoveredIndex === i
//                       ? "rgba(255,255,255,0.04)"
//                       : "transparent",
//                 }}
//               >
//                 {/* Left accent bar */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     left: 0,
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     width: "2px",
//                     height: hoveredIndex === i ? "100%" : "60%",
//                     transition: "height 0.3s ease, background 0.3s ease",
//                     background:
//                       hoveredIndex === i
//                         ? "rgba(255,255,255,0.9)"
//                         : i % 3 === 0
//                           ? "rgba(255,255,255,0.55)"
//                           : i % 3 === 1
//                             ? "rgba(255,255,255,0.25)"
//                             : "rgba(255,255,255,0.1)",
//                   }}
//                 />

//                 <a
//                   href={service.href}
//                   className="fourth-service-desc"
//                   style={{
//                     fontFamily: "'Cormorant', Georgia, serif",
//                     fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
//                     fontWeight: hoveredIndex === i ? 500 : 300,
//                     lineHeight: 1.65,
//                     color:
//                       hoveredIndex === i
//                         ? "rgba(255,255,255,1)"
//                         : "rgba(255,255,255,0.82)",
//                     margin: 0,
//                     maxWidth: "460px",
//                     letterSpacing: hoveredIndex === i ? "0.06em" : "0.04em",
//                     textTransform: "uppercase",
//                     textDecoration: "none",
//                     display: "block",
//                     transition:
//                       "font-weight 0.2s ease, color 0.2s ease, letter-spacing 0.2s ease",
//                   }}
//                 >
//                   {service.title}
//                 </a>
//               </li>
//             ))}

//             {/* closing rule */}
//             <li
//               style={{
//                 borderTop: "1px solid rgba(255,255,255,0.08)",
//                 height: 0,
//               }}
//             />
//           </ul>
//         </div>

//         {/* ── RIGHT: lighthouse illustration ── */}
//         {/* <div className="fourth-img-col">
//           <div className="fourth-img-wrap">
//             <Image
//               src="/savoy-22.png"
//               alt="Lighthouse illustration"
//               width={460}
//               height={600}
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 display: "block",
//                 opacity: 0.9,
//               }}
//               priority={false}
//             />
//           </div>
//         </div> */}
//       </section>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";

// ── Clean short IDs — must match the id="" on each ServiceCard ──
const services = [
  { title: "Traditional Banking Services",        href: "/services#banking"   },
  { title: "A Secure Digital Banking Platform",   href: "/services#platform"  },
  { title: "Global Custody and Execution",        href: "/services#custody"   },
  { title: "Foreign Exchange",                    href: "/services#fx"        },
  { title: "OTC and Derivatives Instruments",     href: "/services#otc"       },
  { title: "Precious Metals Trading & Custody",   href: "/services#metals"    },
  { title: "Money Market Solutions",              href: "/services#money"     },
  { title: "Payments and Transfers",              href: "/services#payments"  },
  { title: "Credit Solutions & Lombard Loans",    href: "/services#credit"    },
];

export default function SavoyServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

        /* ── Section shell ── */
        .fourth-section-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          overflow: hidden;
        }

        /* ── Dark overlay sits above bg image ── */
        .fourth-overlay {
          position: absolute;
          inset: 0;
          background: rgba(var(--savoy-bg-rgb),0.20);
          z-index: 0;
          pointer-events: none;
        }

        /* ── Left text column ── */
        .fourth-text-col {
          position: relative;
          z-index: 1;
          flex: 0 0 auto;
          width: 50%;
          padding: 15vh 4vw 12vh 6.5vw;
        }

        /* ── Right image column ── */
        .fourth-img-col {
          position: relative;
          z-index: 1;
          flex: 0 0 auto;
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: sticky;
          top: 0;
          height: 100vh;
          padding: 6vh 3vw;
        }

        .fourth-img-wrap {
          width: 100%;
          max-width: 660px;
          margin-top: 70vh;
          -webkit-mask-image: linear-gradient(
            to right, transparent 0%, black 22%, black 100%
          );
          mask-image: linear-gradient(
            to right, transparent 0%, black 22%, black 100%
          );
        }

        .fourth-img-col{
  position: sticky;
  top: 25%;
  width: 50%;
  height: 120vh;
  overflow: hidden;
}

.fourth-sketch-bg{
  position: absolute;
  inset: 0;

  // background-image: url("/midnight-blue-1.png");
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;

  opacity: 0.9;

  /* left fade near services */
  -webkit-mask-image:
    linear-gradient(to right, transparent 0%, black 22%, black 100%),
    linear-gradient(to top, transparent 0%, black 18%),
    linear-gradient(to bottom, transparent 0%, black 18%);

  mask-image:
    linear-gradient(to right, transparent 0%, black 22%, black 100%),
    linear-gradient(to top, transparent 0%, black 18%),
    linear-gradient(to bottom, transparent 0%, black 18%);

  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .fourth-text-col { width: 58%; padding: 12vh 3vw 10vh 5vw; }
          .fourth-img-col  { width: 42%; padding: 4vh 2vw; }
          .fourth-img-wrap { max-width: 340px; }
          .fourth-heading  { font-size: clamp(1.2rem, 3vw, 1.6rem) !important; }
        }

        /* ── Mobile: image FIRST, text SECOND ── */
        @media (max-width: 640px) {
          .fourth-section-root { flex-direction: column; min-height: unset; }
          .fourth-img-col {
            order: 1; width: 100%; height: auto;
            position: relative; top: unset;
            padding: 6vh 10vw 2vh; justify-content: center;
          }
          .fourth-text-col { order: 2; width: 100%; padding: 4vh 6vw 10vh; }
          .fourth-img-wrap {
            max-width: 320px;
            -webkit-mask-image: none; mask-image: none; margin-top: 1vh;
          }
          .fourth-heading {
            // font-size: clamp(1.2rem, 5vw, 1.6rem) !important;
            font-size: clamp(2.4rem, 6vw, 3.5rem) !important;
            margin-bottom: 3rem !important;
          }
          .fourth-service-desc { font-size: 0.9rem !important; }
        }

        /* ── Service row hover ──
           The <li> is the hover target and carries the row background.
           The <a> fills the entire <li> so any click anywhere in the row works.
        */
        .fourth-service-row {
          position: relative;
          padding: 1.4rem 0 1.4rem 1.25rem;
          cursor: pointer;
          transition: background 0.3s ease;
          background: transparent;
        }
        .fourth-service-row:hover {
          background: rgba(255,255,255,0.04);
        }
        .fourth-service-row:hover .fourth-accent-bar {
          height: 100% !important;
          background: rgba(255,255,255,0.9) !important;
        }
        .fourth-service-row:hover .fourth-service-link {
          color: rgba(255,255,255,1) !important;
          font-weight: 500 !important;
          letter-spacing: 0.06em !important;
        }

        @media (max-width: 640px) {
  .fourth-sketch-bg {
    display: none !important;
  }
}
  .fourth-bg{
  background-image: url('/midnight-blue-1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media (max-width: 640px){
  .fourth-bg{
    background-image: none !important;
  }
}
      `}</style>

      {/* <section
        className="fourth-section-root bg-[#001a33] text-white"
        style={{
          fontFamily: "'Cormorant', Georgia, serif",
          backgroundImage: "url('/savoy-background-blue.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      > */}
        {/* Dark overlay */}
        {/* <div className="fourth-overlay" /> */}
        <section
          className="relative fourth-section-root fourth-bg  bg-[#031629] text-white overflow-hidden"
          style={{
            fontFamily: "'Cormorant', Georgia, serif",
            backgroundImage: "url('/midnight-blue-1.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          {/* <div className="absolute inset-0 bg-[#031629]/50 pointer-events-none" /> */}
          <div className="absolute inset-0 bg-[#031629]/50 pointer-events-none md:hidden" />

          {/* Combined overlays */}
          {/* <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(to bottom, #031629 0%, transparent 25%),
                linear-gradient(to top, #031629 0%, transparent 25%),
                rgba(var(--savoy-bg-rgb),0.25)
              `,
            }}
          /> */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
  linear-gradient(to right, #031629 45%, transparent 70%),
  linear-gradient(to bottom, #031629 0%, transparent 25%),
  linear-gradient(to top, #031629 0%, transparent 25%)
`,
              backgroundColor: `rgba(var(--savoy-bg-rgb), 0.25)`,
            }}
          />

          {/* ── LEFT: text + service list ── */}
          {/* <div className="fourth-text-col">
            <h2
              className="fourth-heading font-light text-white mb-[76px]"
              style={{ fontSize: "clamp(1.8rem, 2vw, 1.3rem)", lineHeight: 1.0 }}
            >
              Savoy offers a focused range of banking and fiduciary services
              designed to meet the needs of a diversified international clientele.
            </h2>
            <ul className="fourth-service-list list-none p-0 m-0 space-y-16">
              {services.map((service, i) => (
                <li key={i}>
                  <p
                    className="fourth-service-desc font-normal not-italic text-white max-w-[530px]"
                    style={{
                      fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
                      fontSize: "clamp(0.8rem, 1vw, 0.95rem)",
                      lineHeight: 1.0,
                    }}
                  >
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="fourth-text-col">
            <h2
              className="fourth-heading font-light text-white"
              style={{
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                lineHeight: 1.0,
                marginBottom: "4rem",
                maxWidth: "480px",
                letterSpacing: "0.02em",
                fontFamily: "'Cormorant', Georgia, serif",
              }}
            >
              Services
            </h2>

            {/* <ul className="fourth-service-list list-none p-0 m-0"> */}
            <ul className="fourth-service-list list-none p-0 m-0" style={{ paddingBottom: "1.4rem" }}>
              {services.map((service, i) => (
                <li
                  key={i}
                  className="fourth-service-row"
                  style={{
                    borderTop:
                      i === 0
                        ? "1px solid rgba(255,255,255,0.18)"
                        : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="fourth-accent-bar"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "2px",
                      height: "60%",
                      transition: "height 0.3s ease, background 0.3s ease",
                      background:
                        i % 3 === 0
                          ? "rgba(255,255,255,0.55)"
                          : i % 3 === 1
                            ? "rgba(255,255,255,0.25)"
                            : "rgba(255,255,255,0.1)",
                    }}
                  />

                  {/*
                    The <a> is position:absolute covering the full <li> so
                    the entire row — including the padding area — is clickable
                    and hover-detectable without gaps.
                  */}
                  <a
                    href={service.href}
                    aria-label={service.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 1,
                    }}
                  />

                  {/* Visible text — pointer-events:none so the <a> above catches all clicks */}
                  <span
                    className="fourth-service-link"
                    style={{
                      fontFamily: "'Cormorant', Georgia, serif",
                      fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                      fontWeight: 300,
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.82)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      display: "block",
                      pointerEvents: "none",
                      transition: "color 0.2s ease, font-weight 0.2s ease, letter-spacing 0.2s ease",
                    }}
                  >
                    {service.title}
                  </span>
                </li>
              ))}

              {/* closing rule */}
              <li style={{ borderTop: "1px solid rgba(255,255,255,0.08)", height: 0 }} />
            </ul>
          </div>

          {/* ── RIGHT: lighthouse illustration ── */}
          {/* <div className="fourth-img-col">
            <div className="fourth-img-wrap">
              <Image
                src="/savoy-22.png"
                alt="Lighthouse illustration"
                width={460}
                height={600}
                style={{ width: "100%", height: "auto", display: "block", opacity: 0.9 }}
                priority={false}
              />
            </div>
          </div> */}
          {/* <div className="fourth-img-col hidden md:block">
  <div className="fourth-sketch-bg" />
</div> */}
        </section>
    </>
  );
}

