

"use client";

// ── Design B — Icon-card grid ──
// Structure borrowed from the reference screenshot (icon badge + title +
// description + arrow, in a card grid) but recolored entirely into your
// existing navy palette and Cormorant/General Sans type — no light theme,
// no gold, no external image files. Icons are inline SVG so there's
// nothing that can go missing at build time.

const services = [
  {
    title: "Traditional Banking Services",
    desc: "Personalized accounts and everyday banking built on trust and long-term relationships.",
    href: "/services#banking",
    icon: "bank",
  },
  {
    title: "A Secure Digital Banking Platform",
    desc: "Advanced technology for secure, seamless banking anytime, anywhere.",
    href: "/services#platform",
    icon: "shield",
  },
  {
    title: "Global Custody and Execution",
    desc: "Safekeeping and execution of assets across global markets with precision.",
    href: "/services#custody",
    icon: "globe",
  },
  {
    title: "Foreign Exchange",
    desc: "Competitive currency exchange solutions with global reach.",
    href: "/services#fx",
    icon: "fx",
  },
  {
    title: "OTC and Derivatives Instruments",
    desc: "Customized solutions for complex financial strategies and risk management.",
    href: "/services#otc",
    icon: "chart",
  },
  {
    title: "Precious Metals Trading & Custody",
    desc: "Secure trading and custody of precious metals to the highest standards.",
    href: "/services#metals",
    icon: "metals",
  },
  {
    title: "Money Market Solutions",
    desc: "Optimized liquidity and short-term investment solutions.",
    href: "/services#money",
    icon: "pie",
  },
  {
    title: "Payments and Transfers",
    desc: "Fast, secure, and efficient payment solutions across borders.",
    href: "/services#payments",
    icon: "transfer",
  },
  {
    title: "Credit Solutions & Lombard Loans",
    desc: "Flexible credit solutions backed by your assets.",
    href: "/services#credit",
    icon: "document",
  },
];

function ServiceIcon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "bank":
      return (
        <svg {...common}>
          <path d="M3 10l9-6 9 6" />
          <path d="M4 10v9M20 10v9M8 10v9M16 10v9M2 21h20" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 4 5.8 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.8-4-9s1.5-6.5 4-9z" />
        </svg>
      );
    case "fx":
      return (
        <svg {...common}>
          <path d="M17 3l4 4-4 4" />
          <path d="M21 7H7a4 4 0 00-4 4" />
          <path d="M7 21l-4-4 4-4" />
          <path d="M3 17h14a4 4 0 004-4" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19V10M10 19V5M16 19v-7M20 19H4" />
          <path d="M16 6l4-2v6" />
        </svg>
      );
    case "metals":
      return (
        <svg {...common}>
          <rect x="3" y="14" width="7" height="6" rx="0.5" />
          <rect x="14" y="14" width="7" height="6" rx="0.5" />
          <rect x="8.5" y="8" width="7" height="6" rx="0.5" />
        </svg>
      );
    case "pie":
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          <path d="M12 2v10l7 5" />
        </svg>
      );
    case "transfer":
      return (
        <svg {...common}>
          <path d="M4 8h13l-3-3M20 16H7l3 3" />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6M9 17h6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SavoyServicesIconCards() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

        .icards-section {
          position: relative;
          width: 100%;
          background: rgb(3, 22, 41);
          color: #fff;
          padding: 10vh 6vw 12vh;
          overflow: hidden;
        }

        .icards-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: url('/midnight-blue-01.png');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 14%,
            black 86%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 14%,
            black 86%,
            transparent 100%
          );
          pointer-events: none;
        }

        .icards-header,
        .icards-grid {
          position: relative;
          z-index: 1;
        }

        .icards-header {
          max-width: 640px;
          margin: 0 0 4.5rem;
        }

        .icards-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: clamp(2.5rem, 4vw, 4rem);
          line-height: 1.0;
          letter-spacing: 0.02em;
          margin: 0 0 1.3rem;
        }

        .icards-lede {
          font-family: 'General Sans', 'Inter', system-ui, sans-serif;
          font-size: clamp(0.9rem, 1vw, 1rem);
          line-height: 1.65;
          color: rgb(255, 255, 255);
          max-width: 520px;
          font-weight: 400;
        }

        .icards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.1rem;
        }

        /*
        .icards-card {
          position: relative;
          display: flex;
          gap: 1.1rem;
          align-items: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          padding: 1.6rem 1.5rem;
          text-decoration: none;
          color: inherit;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .icards-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.18);
        }
        */

        .icards-card {
          position: relative;
          display: flex;
          gap: 1.1rem;
          // align-items: flex-start;
          align-items: center;

          /* card fill: base navy lifted a touch for depth, same color family as the section */
          background: rgba(8, 28, 50, 0.8);

          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          padding: 1.6rem 1.5rem;
          text-decoration: none;
          color: #e6f0ff;

          /* shadow tinted with the base navy instead of plain black */
          box-shadow: 0 6px 18px rgba(3, 22, 41, 0.55);

          transition: background 0.3s ease,
                      border-color 0.3s ease,
                      transform 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .icards-card:hover {
          background: rgb(13, 38, 64);
          border-color: rgba(255, 255, 255, 0.18);

          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(3, 22, 41, 0.7);
        }

        .icards-icon-badge {
          flex: 0 0 auto;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.75);
        }

        .icards-body {
          flex: 1 1 auto;
          min-width: 0;
        }

        .icards-title-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .icards-card-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-size: 1.2rem;
          line-height: 1.3;
          margin: 0.15rem 0 0.6rem;
          color: rgba(255,255,255,0.92);
        }

        .icards-arrow {
          flex: 0 0 auto;
          color: rgba(255,255,255,0.4);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .icards-card:hover .icards-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .icards-desc {
          font-family: 'General Sans', 'Inter', system-ui, sans-serif;
          font-size: 0.85rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
        }

        @media (max-width: 900px) {
          .icards-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .icards-section { padding: 7vh 6vw 8vh; }
          .icards-title { font-size: clamp(2.4rem, 6vw, 3.2rem); }
          .icards-card { padding: 1.3rem 1.2rem; }
        }
      `}</style>

      <section className="icards-section">
        <div className="icards-bg" />

        <div className="icards-header">
          <h2 className="icards-title">Services</h2>
        </div>

        <div className="icards-grid">
          {services.map((s) => (
            <a key={s.title} href={s.href} className="icards-card">
              <span className="icards-icon-badge">
                <ServiceIcon name={s.icon} />
              </span>
              <span className="icards-body">
                <span className="icards-title-row">
                  <span className="icards-card-title">{s.title}</span>
                  <span className="icards-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}