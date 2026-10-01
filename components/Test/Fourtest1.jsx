"use client";

import { useState } from "react";

const services = [
  { title: "Traditional Banking Services",                href: "/services#banking",  index: "01" },
  { title: "Secure Online Banking Platform",               href: "/services#platform", index: "02" },
  { title: "Global Custody & Execution",                   href: "/services#custody",  index: "03" },
  { title: "Money Market Solutions",                       href: "/services#money",    index: "04" },
  { title: "Foreign Exchange",                             href: "/services#fx",       index: "05" },
  { title: "OTC & Derivative Solutions",                   href: "/services#otc",      index: "06" },
  { title: "Payments & Transfers",                         href: "/services#payments", index: "07" },
  { title: "Precious Metals Trading & Custody",            href: "/services#metals",   index: "08" },
  { title: "Credit Solutions & Securities-Based Lending",  href: "/services#credit",   index: "09" },
  { title: "Other Services",                               href: "/services#other",    index: "10" },
  { title: "Philanthropy & Community Impact",              href: "/services#philanthropy", index: "11" },
];

// ── SVG 4-pointed star pattern — recreated entirely in code ──────────────
// The star path traces a 4-pointed sparkle (concave between each point).
// Encoded as a data URL so it tiles seamlessly as a CSS background.
const STAR_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'>
  <path d='M26 4 C26 4 24 18 4 26 C4 26 24 34 26 48 C26 48 28 34 48 26 C48 26 28 18 26 4 Z'
    fill='none' stroke='rgba(130,165,200,0.13)' stroke-width='0.6'/>
</svg>`;
const STAR_URL = `url("data:image/svg+xml,${encodeURIComponent(STAR_SVG)}")`;

// ── Smaller offset star for the second layer (shifted half-tile) ──────────
const STAR_SVG_2 = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'>
  <path d='M26 10 C26 10 24.5 20 10 26 C10 26 24.5 32 26 42 C26 42 27.5 32 42 26 C42 26 27.5 20 26 10 Z'
    fill='none' stroke='rgba(100,140,180,0.06)' stroke-width='0.5'/>
</svg>`;
const STAR_URL_2 = `url("data:image/svg+xml,${encodeURIComponent(STAR_SVG_2)}")`;

export default function SavoyServices() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ background: "#031629", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap');

        /* ── Keyframes ── */
        @keyframes sv-drift {
          0%   { background-position: 0 0, 26px 26px; }
          100% { background-position: 52px 52px, 78px 78px; }
        }
        @keyframes sv-shimmer {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }

        /* ── SECTION ── */
        .sv2-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-color: #031629;
          overflow: hidden;
          font-family: 'Cormorant', Georgia, serif;
          color: #fff;
        }

        /* ── Coded star pattern (two offset layers) ── */
        .sv2-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image: ${STAR_URL}, ${STAR_URL_2};
          background-size: 52px 52px, 52px 52px;
          background-position: 0 0, 26px 26px;
          animation: sv-drift 60s linear infinite;
        }

        /* ── Radial vignette: darkens corners, lifts center-left ── */
        .sv2-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          // background:
            // radial-gradient(ellipse 55% 90% at 0% 50%,  rgba(3,22,41,0.85) 0%, transparent 70%),
            // radial-gradient(ellipse 40% 60% at 100% 0%,  rgba(3,22,41,0.6) 0%, transparent 60%),
            // radial-gradient(ellipse 50% 50% at 100% 100%, rgba(3,22,41,0.7) 0%, transparent 60%),
            // linear-gradient(to bottom, rgba(3,22,41,0.55) 0%, transparent 20%, transparent 80%, rgba(3,22,41,0.55) 100%);
             background:
                      linear-gradient(
                          to bottom,
                          rgba(3,22,41,0.9) 0%,
                          rgba(3,22,41,0.3) 15%,
                          transparent 35%,
                          transparent 65%,
                          rgba(3,22,41,0.3) 85%,
                          rgba(3,22,41,0.9) 100%
                      );
        }

        /* ── INNER CONTAINER ── */
        .sv2-inner {
          position: relative;
          z-index: 2;
          // max-width: 1340px;
          // margin: 0 auto;
          // padding: 9vh 5vw 10vh;
          width: 100%;
          padding: 8vh 4vw 12vh 6.5vw;

        }

        /* ── HEADER BLOCK ── */
        .sv2-head {
          display: flex;
          flex-direction: column;
          align-items: left;
          text-align: left;
          margin-bottom: 2rem;
        }

        .sv2-eyebrow {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 0.7rem;
          font-weight: 300;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 1.6rem;
        }

        .sv2-title {
          font-family: 'Cormorant', Georgia, serif;
          // font-size: clamp(3.8rem, 7vw, 7rem);
          font-size: clamp(2.5rem, 5vw, 5rem);
          font-weight: 300;
          color: rgb(255, 255, 255);
          line-height: 0.88;
          // letter-spacing: 0.1em;
          // text-transform: uppercase;
          margin: 0 0 2rem;
        }

        .sv2-title {
          // font-style: italic;
          font-weight: 300;
          color: rgb(255, 255, 255);
          // letter-spacing: 0.06em;
        }

        .sv2-rule {
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.18);
          margin: 0 auto 1.6rem;
        }

        .sv2-subtitle {
          font-family: 'Cormorant', Georgia, serif;
          font-size: clamp(0.85rem, 1.1vw, 1rem);
          font-weight: 300;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.06em;
          line-height: 1.7;
          max-width: 480px;
        }

        /* ── SERVICES TABLE ── */
        .sv2-table {
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        /* ── ROW ── */
        .sv2-row {
          position: relative;
          display: grid;
          // grid-template-columns: 5rem 1fr auto;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 2rem;
          padding: 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          overflow: hidden;
          transition: border-color 0.3s;
          cursor: pointer;
        }

        /* Animated fill bar behind each row */
        .sv2-row::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.028);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .sv2-row:hover::before {
          transform: scaleX(1);
        }
        .sv2-row:hover {
          border-color: rgba(255,255,255,0.13);
        }

        /* ── Row: index number ── */
        .sv2-row-num {
          font-family: 'Cormorant', Georgia, serif;
          font-size: clamp(0.7rem, 0.8vw, 0.78rem);
          font-weight: 300;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.18);
          transition: color 0.3s;
          padding: 1.8rem 0 1.8rem 0;
          position: relative;
          z-index: 1;
        }
        .sv2-row:hover .sv2-row-num {
          color: rgba(255,255,255,0.45);
        }

        /* ── Row: title ── */
        .sv2-row-title {
          font-family: 'Cormorant', Georgia, serif;
          font-size: clamp(1rem, 1.4vw, 1.25rem);
          font-weight: 400;
          // letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.62);
          transition: color 0.3s, letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          z-index: 1;
          padding: 1.8rem 0;
          padding-left: 0.5rem;
        }
        .sv2-row:hover .sv2-row-title {
          color: rgba(255,255,255,0.95);
          // letter-spacing: 0.13em;
          
        }

        /* ── Row: right arrow ── */
        .sv2-row-arrow {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 0.75rem;
          // letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0);
          transition: color 0.35s, transform 0.4s cubic-bezier(0.16,1,0.3,1);
          transform: translateX(-12px);
          position: relative;
          z-index: 1;
          white-space: nowrap;
          padding-right: 0.5rem;
        }
        .sv2-row:hover .sv2-row-arrow {
          color: rgba(255,255,255,0.32);
          transform: translateX(0);
        }

        /* Ghost number watermark behind each row — decorative ── */
        .sv2-row-ghost {
          position: absolute;
          right: 3rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Cormorant', Georgia, serif;
          font-size: clamp(4rem, 6vw, 6.5rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(255,255,255,0);
          line-height: 1;
          letter-spacing: -0.02em;
          pointer-events: none;
          transition: color 0.45s;
          z-index: 0;
          user-select: none;
        }
        .sv2-row:hover .sv2-row-ghost {
          color: rgba(255,255,255,0.04);
        }

        /* ── FOOTER ROW ── */
        .sv2-footer {
          margin-top: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .sv2-footer-label {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 0.7rem;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
        }

        .sv2-footer-link {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 0.78rem;
          font-weight: 300;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 2px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s, border-color 0.3s;
        }
        .sv2-footer-link:hover {
          color: rgba(255,255,255,0.65);
          border-color: rgba(255,255,255,0.35);
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .sv2-inner { padding: 7vh 5vw 8vh; }
          // .sv2-title { letter-spacing: 0.06em; }
          .sv2-head  { margin-bottom: 1.5rem; }
          .sv2-row {
            // grid-template-columns: 3.5rem 1fr;
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .sv2-row-arrow { display: none; }
          .sv2-row-ghost { display: none; }
          .sv2-footer { flex-direction: column; align-items: flex-start; gap: 1rem; }
        }

        @media (max-width: 1024px) {
          .sv2-row-ghost { display: none; }
        }
      `}</style>

      <section className="sv2-section">
        {/* ── Coded star pattern (two-layer offset, slow drift) ── */}
        <div className="sv2-pattern" />
        <div className="sv2-vignette" />

        <div className="sv2-inner">

          {/* ── Header ── */}
          <div className="sv2-head">
            {/* <p className="sv2-eyebrow">Savoy Bank &amp; Trust &nbsp;·&nbsp; Nassau, The Bahamas</p> */}
            <h2 className="sv2-title">
              Services
            </h2>
            {/* <div className="sv2-rule" />
            <p className="sv2-subtitle">
              A focused range of banking and fiduciary services designed for a
              diversified international clientele.
            </p> */}
          </div>

          {/* ── Full-width service rows ── */}
          <div className="sv2-table">
            {services.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="sv2-row"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Ghost watermark number */}
                {/* <span className="sv2-row-ghost">{s.index}</span> */}

                {/* <span className="sv2-row-num">{s.index}</span> */}
                <span className="sv2-row-title">{s.title}</span>
                <span className="sv2-row-arrow">Explore &nbsp;→</span>
              </a>
            ))}
          </div>

          {/* ── Footer strip ── */}
          {/* <div className="sv2-footer">
            <span className="sv2-footer-label">Private &amp; Confidential</span>
            <a href="/services" className="sv2-footer-link">
              View all services &nbsp;→
            </a>
          </div> */}

        </div>
      </section>
    </div>
  );
}