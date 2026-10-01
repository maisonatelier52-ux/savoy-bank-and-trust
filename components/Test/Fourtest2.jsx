

"use client";

import { useState } from "react";

const services = [
  { title: "Traditional Banking Services",       href: "/services#banking",  index: "01" },
  { title: "A Secure Digital Banking Platform",  href: "/services#platform", index: "02" },
  { title: "Global Custody and Execution",       href: "/services#custody",  index: "03" },
  { title: "Foreign Exchange",                   href: "/services#fx",       index: "04" },
  { title: "OTC and Derivatives Instruments",    href: "/services#otc",      index: "05" },
  { title: "Precious Metals Trading & Custody",  href: "/services#metals",   index: "06" },
  { title: "Money Market Solutions",             href: "/services#money",    index: "07" },
  { title: "Payments and Transfers",             href: "/services#payments", index: "08" },
  { title: "Credit Solutions & Lombard Loans",   href: "/services#credit",   index: "09" },
];

export default function SavoyServices() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: "#031629" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');

        /* ── Section shell ── */
        .sv-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-color: #031629;
          /* In your Next.js project replace the gradient below with:
             background-image: url('/midnight-blue-1.png');
             background-size: cover;
             background-position: center;
          */
          background-image:
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(14,42,80,0.9) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 20% 80%, rgba(6,28,60,0.8) 0%, transparent 70%);
          overflow: hidden;
          font-family: 'Cormorant', Georgia, serif;
        }

        /* ── Star-cross pattern overlay (mimics midnight-blue-1.png accent) ── */
        .sv-star-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image:
            radial-gradient(circle at 72% 25%, rgba(255,255,255,0.03) 1px, transparent 1px),
            radial-gradient(circle at 85% 55%, rgba(255,255,255,0.025) 1px, transparent 1px),
            radial-gradient(circle at 60% 70%, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 120px 120px, 80px 80px, 200px 200px;
        }

        /* ── Edge fades ── */
        .sv-fade-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 160px;
          background: linear-gradient(to top, #031629 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }
        .sv-fade-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 120px;
          background: linear-gradient(to bottom, #031629 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* ── Inner layout ── */
        .sv-inner {
          position: relative;
          z-index: 2;
          max-width: 100%;
          margin: 0 auto;
          padding: 10vh 5vw 10vh;
        }

        /* ── Header row ── */
        .sv-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 2rem;
          margin-bottom: 5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .sv-title {
          font-family: 'Cormorant', Georgia, serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 300;
          color: rgba(255,255,255,0.92);
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin: 0;
        }

        .sv-title em {
          font-style: italic;
          font-weight: 300;
        }

        .sv-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          gap: 1rem;
        }

        .sv-view-all {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Cormorant', Georgia, serif;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding-bottom: 2px;
          transition: color 0.3s, border-color 0.3s;
        }
        .sv-view-all:hover {
          color: rgba(255,255,255,0.75);
          border-color: rgba(255,255,255,0.4);
        }
        .sv-view-all-arrow {
          transition: transform 0.3s;
        }
        .sv-view-all:hover .sv-view-all-arrow {
          transform: translateX(4px);
        }

        /* ── Services grid ── */
        .sv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        /* ── Service card ── */
        .sv-card {
          position: relative;
          padding: 2.4rem 2rem 2.4rem 0;
          border-right: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          cursor: pointer;
          transition: background 0.4s ease;
          text-decoration: none;
          display: block;
        }

        /* Remove right border on every 3rd card */
        .sv-card:nth-child(3n) {
          border-right: none;
        }

        /* Remove bottom border on last row (cards 7, 8, 9) */
        .sv-card:nth-child(n+7) {
          border-bottom: none;
        }

        .sv-card:hover {
          background: rgba(255,255,255,0.03);
        }

        /* Left accent bar that grows on hover */
        .sv-card-bar {
          position: absolute;
          left: 0;
          top: 2.4rem;
          bottom: 2.4rem;
          width: 1.5px;
          background: rgba(255,255,255,0.12);
          transition: background 0.35s ease, width 0.35s ease;
        }

        .sv-card:hover .sv-card-bar {
          background: rgba(255,255,255,0.7);
          width: 2px;
        }

        /* Padding-left to clear the bar */
        .sv-card-inner {
          padding-left: 1.5rem;
        }

        .sv-card-num {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 0.7rem;
          font-weight: 300;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
          display: block;
          margin-bottom: 1rem;
          transition: color 0.3s;
        }

        .sv-card:hover .sv-card-num {
          color: rgba(255,255,255,0.45);
        }

        .sv-card-title {
          font-family: 'Cormorant', Georgia, serif;
          font-size: clamp(0.92rem, 1.1vw, 1.05rem);
          font-weight: 400;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1.45;
          transition: color 0.3s, letter-spacing 0.3s;
          display: block;
        }

        .sv-card:hover .sv-card-title {
          color: rgba(255,255,255,0.95);
          letter-spacing: 0.08em;
        }

        /* Arrow that appears on hover */
        .sv-card-arrow {
          display: inline-block;
          margin-top: 1.2rem;
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0);
          transition: color 0.35s ease, transform 0.35s ease;
          transform: translateX(-6px);
        }

        .sv-card:hover .sv-card-arrow {
          color: rgba(255,255,255,0.35);
          transform: translateX(0);
        }

        /* ── Bottom label strip ── */
        .sv-bottom-strip {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .sv-bottom-label {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 0.72rem;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }

        .sv-bottom-dots {
          display: flex;
          gap: 0.4rem;
        }

        .sv-bottom-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .sv-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sv-card:nth-child(3n) {
            border-right: 1px solid rgba(255,255,255,0.07);
          }
          .sv-card:nth-child(2n) {
            border-right: none;
          }
          .sv-card:nth-child(n+7) {
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          .sv-card:nth-child(n+8) {
            border-bottom: none;
          }
          .sv-card:last-child {
            border-bottom: none;
            border-right: none;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .sv-header {
            grid-template-columns: 1fr;
            margin-bottom: 3rem;
          }
          .sv-header-right {
            align-items: flex-start;
          }
          .sv-grid {
            grid-template-columns: 1fr;
          }
          .sv-card,
          .sv-card:nth-child(3n),
          .sv-card:nth-child(2n) {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          .sv-card:last-child {
            border-bottom: none;
          }
          .sv-card:nth-child(n+7),
          .sv-card:nth-child(n+8) {
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          .sv-inner {
            padding: 8vh 6vw 8vh;
          }
          .sv-bottom-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>

      <section className="sv-section">
        {/* Texture overlays */}
        <div className="sv-star-overlay" />
        <div className="sv-fade-top" />
        <div className="sv-fade-bottom" />

        <div className="sv-inner">

          {/* ── Header ── */}
          <div className="sv-header">
            <h2 className="sv-title">
             Services
            </h2>
            <div className="sv-header-right">
              <a href="/services" className="sv-view-all">
                View all services
                <span className="sv-view-all-arrow">→</span>
              </a>
            </div>
          </div>

          {/* ── 3-column services grid ── */}
          <div className="sv-grid">
            {services.map((service, i) => (
              <a
                key={i}
                href={service.href}
                className="sv-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="sv-card-bar" />
                <div className="sv-card-inner">
                  <span className="sv-card-num">{service.index}</span>
                  <span className="sv-card-title">{service.title}</span>
                  <span className="sv-card-arrow">Explore →</span>
                </div>
              </a>
            ))}
          </div>

          {/* ── Bottom strip ── */}
          {/* <div className="sv-bottom-strip">
            <span className="sv-bottom-label">Savoy Bank &amp; Trust &nbsp;·&nbsp; Nassau, The Bahamas</span>
            <div className="sv-bottom-dots">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="sv-bottom-dot" />
              ))}
            </div>
            <span className="sv-bottom-label">Private &amp; Confidential</span>
          </div> */}

        </div>
      </section>
    </div>
  );
}