// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function SavoyHeader({ phase = 4 }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     { name: "ABOUT", href: "/about" },
//     // { name: "COMPANY OVERVIEW", href: "/company-overview" },
//     { name: "SERVICES", href: "/services" },
//     { name: "FAQS", href: "/faqs" },
//     // { name: "LEADERSHIP", href: "/leadership" },
//     { name: "CONTACT US", href: "/contact-us" },
//   ];

//   return (
//     <>
//       {/* Mobile Navigation Drawer */}
//       <nav
//         className={`mobile-nav${menuOpen ? " open" : ""}`}
//         aria-hidden={!menuOpen}
//       >
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
//           <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(3.25px) rotate(45deg)" }} />
//           <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(-3.25px) rotate(-45deg)" }} />
//         </button>

//         {navItems.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             onClick={() => setMenuOpen(false)}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Backdrop */}
//       {menuOpen && (
//         <div
//           onClick={() => setMenuOpen(false)}
//           style={{ position: "fixed", inset: 0, zIndex: 99 }}
//           aria-hidden="true"
//         />
//       )}

//       {/* HEADER - Responsive Padding (Mobile only change) */}
//       <header
//         className="page-header absolute top-0 left-0 right-0 z-30 flex items-center justify-between 
//                    pl-5 pr-5 pt-5 pb-4 
//                    md:pl-15 md:pr-25 md:pt-13 md:py-10"
//         style={{
//           opacity: phase >= 4 ? 1 : 0,
//           transform: phase >= 4 ? "translateY(0)" : "translateY(-20px)",
//           transition: phase >= 4
//             ? "opacity 1.2s ease-out 0.4s, transform 1.2s ease-out 0.4s"
//             : "none",
//         }}
//       >
//         {/* Logo - Click goes to Home */}
//         <div className="flex items-center">
//           <Link href="/" className="block">
//             <img
//               src="/savoy-logo.png"
//               alt="Savoy Logo"
//               className="header-logo h-27 w-auto"
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav
//           className="desktop-nav hidden sm:flex items-center gap-4"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transition: phase >= 4 ? "opacity 1.4s ease-out 0.6s" : "none",
//           }}
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="text-white hover:text-white transition-colors text-xs tracking-widest uppercase"
//               style={{
//                 letterSpacing: "0.1em",
//                 fontSize: "0.6rem",
//                 fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//               }}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Hamburger Button */}
//         <button
//           className="hamburger-btn"
//           onClick={() => setMenuOpen((v) => !v)}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//         >
//           <span className="ham-line" style={menuOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : {}} />
//           <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
//           <span className="ham-line" style={menuOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}} />
//         </button>
//       </header>
//     </>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function SavoyHeader({ phase }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = ["ABOUT", "COMPANY OVERVIEW", "LEADERSHIP", "CONTACT US"];

//   return (
//     <>
//       {/* Mobile Navigation Drawer */}
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
//           <span 
//             style={{ 
//               display: "block", 
//               width: "22px", 
//               height: "1.5px", 
//               background: "#fff", 
//               transform: "translateY(3.25px) rotate(45deg)" 
//             }} 
//           />
//           <span 
//             style={{ 
//               display: "block", 
//               width: "22px", 
//               height: "1.5px", 
//               background: "#fff", 
//               transform: "translateY(-3.25px) rotate(-45deg)" 
//             }} 
//           />
//         </button>

//         {navItems.map((item) => (
//           <Link
//             key={item}
//             href={item === "COMPANY OVERVIEW" ? "/company-overview" : "#"}
//             onClick={() => setMenuOpen(false)}
//           >
//             {item}
//           </Link>
//         ))}
//       </nav>

//       {/* Backdrop */}
//       {menuOpen && (
//         <div
//           onClick={() => setMenuOpen(false)}
//           style={{ position: "fixed", inset: 0, zIndex: 99 }}
//           aria-hidden="true"
//         />
//       )}

//       {/* Main Header */}
//       <header
//         className="page-header absolute top-0 left-0 right-0 z-30 flex items-center justify-between pl-15 pr-25 py-10 pt-13"
//         style={{
//           opacity: phase >= 4 ? 1 : 0,
//           transform: phase >= 4 ? "translateY(0)" : "translateY(-20px)",
//           transition: phase >= 4
//             ? "opacity 1.2s ease-out 0.4s, transform 1.2s ease-out 0.4s"
//             : "none",
//         }}
//       >
//         <div className="flex items-center">
//           <img
//             src="/savoy-logo.png"
//             alt="Savoy Logo"
//             className="header-logo h-27 w-auto"
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <nav
//           className="desktop-nav hidden sm:flex items-center gap-4"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transition: phase >= 4 ? "opacity 1.4s ease-out 0.6s" : "none",
//           }}
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               href={item === "COMPANY OVERVIEW" ? "/company-overview" : "#"}
//               className="text-white hover:text-white transition-colors text-xs tracking-widest uppercase"
//               style={{
//                 letterSpacing: "0.1em",
//                 fontSize: "0.7rem",
//                 fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//               }}
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>

//         {/* Hamburger Button */}
//         <button
//           className="hamburger-btn"
//           onClick={() => setMenuOpen((v) => !v)}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//         >
//           <span className="ham-line" style={menuOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : {}} />
//           <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
//           <span className="ham-line" style={menuOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}} />
//         </button>
//       </header>
//     </>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function SavoyHeader({ phase = 4 }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     { name: "ABOUT", href: "/about" },
//     // { name: "COMPANY OVERVIEW", href: "/company-overview" },
//     { name: "SERVICES", href: "/services" },
//     { name: "FAQS", href: "/faqs" },
//     // { name: "LEADERSHIP", href: "/leadership" },
//     { name: "CONTACT US", href: "/contact-us" },
//   ];

//   return (
//     <>
//       {/* ── Header self-contained styles (mobile/tablet only) ── */}
//       <style>{`
//         /* Mobile nav drawer — solid blue background, no longer transparent */
//         .mobile-nav {
//           position: fixed;
//           inset: 0;
//           background-color: #001a33;
//           background-color: var(--savoy-bg, #001a33);
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
//         .mobile-nav.open a:nth-child(2) { transition-delay: 0.08s; }
//         .mobile-nav.open a:nth-child(3) { transition-delay: 0.16s; }
//         .mobile-nav.open a:nth-child(4) { transition-delay: 0.24s; }
//         .mobile-nav.open a:nth-child(5) { transition-delay: 0.32s; }

//         /* Hamburger button — hidden on desktop, shown on tablet/mobile */
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

//         /* ── Tablet: show hamburger ── */
//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav   { display: none !important; }
//           .page-header   {
//             padding-left: 2rem !important;
//             padding-right: 2rem !important;
//             padding-top: 2rem !important;
//           }
//           .header-logo   { height: 4.2rem !important; }
//         }

//         /* ── Mobile ── */
//         @media (max-width: 640px) {
//           .page-header {
//             padding-left: 1.25rem !important;
//             padding-right: 1.25rem !important;
//             padding-top: 1.5rem !important;
//             padding-bottom: 1rem !important;
//           }
//           .header-logo { height: 6.25rem !important; }
//           .mobile-nav  { gap: 1.75rem !important; }
//           .mobile-nav a { font-size: clamp(1.25rem, 7vw, 1.9rem) !important; }
//         }
//       `}</style>

//       {/* Mobile Navigation Drawer */}
//       <nav
//         className={`mobile-nav${menuOpen ? " open" : ""}`}
//         aria-hidden={!menuOpen}
//       >
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
//           <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(3.25px) rotate(45deg)" }} />
//           <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(-3.25px) rotate(-45deg)" }} />
//         </button>

//         {navItems.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             onClick={() => setMenuOpen(false)}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Backdrop */}
//       {menuOpen && (
//         <div
//           onClick={() => setMenuOpen(false)}
//           style={{ position: "fixed", inset: 0, zIndex: 99 }}
//           aria-hidden="true"
//         />
//       )}

//       {/* HEADER - Responsive Padding (Mobile only change) */}
//       <header
//         className="page-header absolute top-0 left-0 right-0 z-30 flex items-center justify-between 
//                    pl-5 pr-5 pt-5 pb-4 
//                    md:pl-15 md:pr-25 md:pt-13 md:py-10"
//         style={{
//           opacity: phase >= 4 ? 1 : 0,
//           transform: phase >= 4 ? "translateY(0)" : "translateY(-20px)",
//           transition: phase >= 4
//             ? "opacity 1.2s ease-out 0.4s, transform 1.2s ease-out 0.4s"
//             : "none",
//         }}
//       >
//         {/* Logo - Click goes to Home */}
//         <div className="flex items-center">
//           <Link href="/" className="block">
//             <img
//               src="/savoy-logo.png"
//               alt="Savoy Logo"
//               className="header-logo h-27 w-auto"
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav
//           className="desktop-nav hidden sm:flex items-center gap-4"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transition: phase >= 4 ? "opacity 1.4s ease-out 0.6s" : "none",
//           }}
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="text-white hover:text-white transition-colors text-xs tracking-widest uppercase"
//               style={{
//                 letterSpacing: "0.1em",
//                 fontSize: "0.6rem",
//                 fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//               }}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Hamburger Button */}
//         <button
//           className="hamburger-btn"
//           onClick={() => setMenuOpen((v) => !v)}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//         >
//           <span className="ham-line" style={menuOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : {}} />
//           <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
//           <span className="ham-line" style={menuOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}} />
//         </button>
//       </header>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";

import BrandLogo from "@/components/BrandLogo";

export default function SavoyHeader({ phase = 4 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ebankingOpen, setEbankingOpen] = useState(false);

  const navItems = [
    { name: "ABOUT", href: "/about" },
    // { name: "COMPANY OVERVIEW", href: "/company-overview" },
    { name: "SERVICES", href: "/services" },
    { name: "FAQS", href: "/faqs" },
    // { name: "LEADERSHIP", href: "/leadership" },
    // { name: "COMMUNITY IMPACT", href: "/community-impact" },
    { name: "CONTACT US", href: "/contact-us" },
    {name: "E-BANKING", href: "/e-banking"},
    
  ];

  return (
    <>
      {/* ── Header self-contained styles (mobile/tablet only) ── */}
      <style>{`
        /* Mobile nav drawer — solid blue background, no longer transparent */
        .mobile-nav {
          position: fixed;
          inset: 0;
          background-color: #001a33;
          background-color: var(--savoy-bg, #001a33);
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          pointer-events: none;
          opacity: 0;
          transform: translateY(-24px);
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .mobile-nav.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .mobile-nav a {
          font-family: 'Cormorant', Georgia, serif;
          color: #fff;
          font-size: clamp(1.6rem, 6vw, 2.4rem);
          font-weight: 300;
          letter-spacing: 0.18em;
          text-decoration: none;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .mobile-nav.open a { opacity: 1; transform: translateY(0); }
        .mobile-nav.open a:nth-child(2) { transition-delay: 0.08s; }
        .mobile-nav.open a:nth-child(3) { transition-delay: 0.16s; }
        .mobile-nav.open a:nth-child(4) { transition-delay: 0.24s; }
        .mobile-nav.open a:nth-child(5) { transition-delay: 0.32s; }

        /* Hamburger button — hidden on desktop, shown on tablet/mobile */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          position: relative;
          z-index: 110;
          -webkit-tap-highlight-color: transparent;
        }
        .ham-line {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #fff;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        /* ── E-Banking dropdown ── */
        .ebanking-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .ebanking-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          padding-top: 10px;
          background: transparent;
          min-width: 160px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-6px);
          transition: opacity 0.22s ease, transform 0.22s ease;
          white-space: nowrap;
          z-index: 200;
        }
        .ebanking-dropdown-inner {
          background: rgba(0, 20, 45, 0.96);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 4px;
          padding: 6px 0;
        }
        .ebanking-wrapper:hover .ebanking-dropdown,
        .ebanking-wrapper:focus-within .ebanking-dropdown {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }
        .ebanking-dropdown a {
          display: block;
          padding: 8px 16px;
          color: rgba(255,255,255,0.85) !important;
          font-family: 'General Sans', 'Inter', system-ui, sans-serif;
          font-size: 0.6rem !important;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.15s ease, background 0.15s ease;
        }
        .ebanking-dropdown a:hover {
          color: #fff !important;
          background: rgba(255,255,255,0.06);
        }

        /* Mobile e-banking sub-items */
        .mobile-ebanking-sub {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-top: -1rem;
        }
        .mobile-ebanking-sub a {
          font-size: clamp(1rem, 4vw, 1.5rem) !important;
          opacity: 0.75;
          letter-spacing: 0.14em;
        }

        /* ── Tablet: show hamburger ── */
        @media (max-width: 1024px) {
          .hamburger-btn { display: flex; }
          .desktop-nav   { display: none !important; }
          .page-header   {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
            padding-top: 2rem !important;
          }
          .header-logo   { width: 300px; height: auto; }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .page-header {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
            padding-top: 1.5rem !important;
            padding-bottom: 1rem !important;
          }
          .header-logo { width: min(235px, 65vw); height: auto; }
          .mobile-nav  { gap: 1.75rem !important; }
          .mobile-nav > a { font-size: clamp(1.25rem, 7vw, 1.9rem) !important; }
        }
      `}</style>

      {/* Mobile Navigation Drawer */}
      <nav
        className={`mobile-nav${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            zIndex: 120,
          }}
        >
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(3.25px) rotate(45deg)" }} />
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(-3.25px) rotate(-45deg)" }} />
        </button>

        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        {/* E-Banking in mobile menu */}
        {/* <Link
          href="https://ebankingbt.britannia.com/app/login"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          E-BANKING
        </Link>
        <div className="mobile-ebanking-sub">
          <Link
            href="https://app.britanniabanktrust.com/apps/OnlineBanking/#/AuthenticationMA/frmLogin"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            NEW E-BANKING
          </Link>
        </div> */}
      </nav>

      {/* Backdrop */} 
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 99 }}
          aria-hidden="true"
        />
      )}

      {/* HEADER - Responsive Padding (Mobile only change) */}
      <header
        className="page-header absolute top-0 left-0 right-0 z-30 flex items-center justify-between 
                   pl-5 pr-5 pt-5 pb-4 
                   md:pl-15 md:pr-25 md:pt-13 md:py-10"
        style={{
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? "translateY(0)" : "translateY(-20px)",
          transition: phase >= 4
            ? "opacity 1.2s ease-out 0.4s, transform 1.2s ease-out 0.4s"
            : "none",
        }}
      >
        {/* Logo - Click goes to Home */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <BrandLogo
              className="header-logo"
              sizes="(max-width: 640px) 235px, 340px"
              preload
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav hidden sm:flex items-center gap-4"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transition: phase >= 4 ? "opacity 1.4s ease-out 0.6s" : "none",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-white transition-colors text-xs tracking-widest uppercase"
              style={{
                letterSpacing: "0.1em",
                fontSize: "0.6rem",
                fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
              }}
            >
              {item.name}
            </Link>
          ))}

          {/* ── E-Banking with hover dropdown ── */}
          {/* <div className="ebanking-wrapper">
            <a
              href="https://ebankingbt.britannia.com/app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors"
              style={{
                letterSpacing: "0.1em",
                fontSize: "0.6rem",
                fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              E-BANKING
            </a>
            <div className="ebanking-dropdown">
              <div className="ebanking-dropdown-inner">
                <a
                  href="https://app.britanniabanktrust.com/apps/OnlineBanking/#/AuthenticationMA/frmLogin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New E-Banking
                </a>
              </div>
            </div>
          </div> */}
        </nav>

        {/* Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="ham-line" style={menuOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : {}} />
          <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
          <span className="ham-line" style={menuOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}} />
        </button>
      </header>
    </>
  );
}