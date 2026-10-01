

// "use client";

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

//   .faq-card {
//     background: rgba(255,255,255,0.06);
//     border-radius: 12px;
//     padding: 2rem 2.2rem;
//     display: flex;
//     align-items: flex-start;
//     gap: 1.8rem;
//     width: 100%;
//     max-width: 780px;
//     margin: 0 auto;
//   }

//   @media (max-width: 640px) {
//     .faq-card {
//       padding: 1.4rem 1.2rem;
//       gap: 1rem;
//       border-radius: 8px;
//     }

//     .faq-qnum {
//       min-width: 42px;
//       font-size: 2rem;
//     }
//   }

//   .faq-qnum {
//     font-family: 'Cormorant Garamond', Georgia, serif;
//     font-size: clamp(2.4rem, 4vw, 3.2rem);
//     font-weight: 700;
//     color: rgba(255,255,255,0.18);
//     line-height: 1;
//     min-width: 52px;
//     flex-shrink: 0;
//     letter-spacing: -0.02em;
//   }

//   .faq-question {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: clamp(1rem, 1.5vw, 1.15rem);
//     font-weight: 500;
//     color: var(--savoy-font, #0097a7);
//     margin-bottom: 0.6rem;
//     line-height: 1.3;
//   }

//   .faq-answer {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: clamp(0.88rem, 1.2vw, 0.98rem);
//     font-weight: 300;
//     color: rgba(255,255,255,0.72);
//     line-height: 1.7;
//   }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

// const faqs = [
//   {
//     q: "Who can bank with Savoy Bank & Trust?",
//     a: "We serve UHNWIs, family offices, and qualified institutional clients seeking bespoke, cross-border banking solutions.",
//   },
//   {
//     q: "What jurisdictions do you support?",
//     a: "Our services are globally accessible. We work with clients across Europe, Latin America, the Middle East, and Asia.",
//   },
//   {
//     q: "Are deposits insured?",
//     a: "As an offshore bank, we follow the regulations of the Central Bank of The Bahamas. We provide transparency, segregation of client funds, and strong governance.",
//   },
//   {
//     q: "Do you offer online access?",
//     a: "Yes. Our encrypted online banking system provides global access to your accounts, portfolios, and transfers.",
//   },
//   {
//     q: "What assets can be used for Lombard loans?",
//     a: "We accept listed equities and fixed income securities as eligible collateral.",
//   },
// ];

// export default function FAQsPage() {
//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="bg-[#001a33] text-white min-h-screen">

//         {/* ── HERO ── */}
//         <section className="relative pt-32 md:pt-120 pb-16 px-6 md:px-20 overflow-hidden">
//           <h1
//             style={{
//               fontFamily: serif,
//               fontSize: "clamp(3rem,7vw,6rem)",
//               fontWeight: 300,
//               lineHeight: 0.85,
//             }}
//             className="text-white"
//           >
//             FAQs
//           </h1>
//           <span className="block w-10 h-px bg-white mt-8" />
//         </section>

//         <div className="w-full h-px bg-bg-[#001a33]" />

//         {/* ── FAQ CARDS — all visible, centered ── */}
//         <section className="py-16 px-6 md:px-20 flex flex-col items-center gap-6">
//           {faqs.map((item, i) => (
//             <div key={i} className="faq-card">
//               {/* Large Q number */}
//               <span className="faq-qnum">Q{i + 1}</span>

//               {/* Question + Answer */}
//               <div className="flex-1">
//                 <p className="faq-question">{item.q}</p>
//                 <p className="faq-answer">{item.a}</p>
//               </div>
//             </div>
//           ))}
//         </section>

//         <div className="w-full h-px bg-bg-[#001a33]" />

//         {/* ── CTA ── */}
//         {/* <section className="py-16 px-6 md:px-20 flex justify-center">
//           <p
//             style={{
//               fontFamily: sans,
//               fontSize: "0.88rem",
//               fontWeight: 300,
//               color: "rgba(255,255,255,0.55)",
//             }}
//           >
//             Have more questions?{" "}
//             <a
//               href="/contact-us"
//               className="no-underline hover:underline transition-all"
//               style={{ fontFamily: sans, color: "var(--savoy-font, #0097a7)" }}
//             >
//               Contact our team →
//             </a>
//           </p>
//         </section> */}

//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }


"use client";

import SavoyHeader from "@/components/SavoyHeader";
import BrandFooterSection from "@/components/Brandfootersection";
import { useState } from "react";

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

  /* ── OLD faq-card styles (kept, replaced below) ── */
  /* .faq-card {
    background: rgba(255,255,255,0.06);
    border-radius: 12px;
    padding: 2rem 2.2rem;
    display: flex;
    align-items: flex-start;
    gap: 1.8rem;
    width: 100%;
    max-width: 780px;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    .faq-card {
      padding: 1.4rem 1.2rem;
      gap: 1rem;
      border-radius: 8px;
    }
    .faq-qnum {
      min-width: 42px;
      font-size: 2rem;
    }
  }

  .faq-qnum {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(2.4rem, 4vw, 3.2rem);
    font-weight: 700;
    color: rgba(255,255,255,0.18);
    line-height: 1;
    min-width: 52px;
    flex-shrink: 0;
    letter-spacing: -0.02em;
  }

  .faq-question {
    font-family: 'General Sans', 'Inter', system-ui, sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.15rem);
    font-weight: 500;
    color: var(--savoy-font, #0097a7);
    margin-bottom: 0.6rem;
    line-height: 1.3;
  }

  .faq-answer {
    font-family: 'General Sans', 'Inter', system-ui, sans-serif;
    font-size: clamp(0.88rem, 1.2vw, 0.98rem);
    font-weight: 300;
    color: rgba(255,255,255,0.72);
    line-height: 1.7;
  } */

  /* ── NEW FAQ accordion styles ── */
  .faq-item {
    position: relative;
    border-top: 1px solid rgba(255,255,255,0.10);
    cursor: pointer;
    transition: background 0.3s ease;
    width: 100%;
    max-width: 780px;
    margin: 0 auto;
  }
  .faq-item:last-of-type {
    border-bottom: 1px solid rgba(255,255,255,0.10);
  }
  .faq-item:hover { background: rgba(255,255,255,0.025); }
  .faq-item.open  { background: rgba(255,255,255,0.03);  }

  /* left accent bar */
  .faq-item::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: rgba(255,255,255,0);
    transition: background 0.35s ease;
  }
  .faq-item.open::before { background: rgba(255,255,255,0.45); }

  .faq-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.8rem 1.4rem;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
  }
  .faq-trigger-left {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  .faq-index {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 0.78rem;
    font-weight: 300;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.14em;
    min-width: 24px;
    flex-shrink: 0;
  }

  .faq-question {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1.1rem, 1.8vw, 1.4rem);
    font-weight: 300;
    color: rgba(255,255,255,0.85);
    line-height: 1.25;
    letter-spacing: 0.01em;
    transition: color 0.25s ease;
    margin-bottom: 0;
  }
  .faq-item.open .faq-question,
  .faq-item:hover .faq-question { color: rgba(255,255,255,1); }

  /* + icon */
  .faq-icon {
    flex-shrink: 0;
    width: 30px; height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    transition: border-color 0.3s ease, background 0.3s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1);
  }
  .faq-item.open .faq-icon {
    background: rgba(255,255,255,0.07);
    border-color: rgba(255,255,255,0.35);
    transform: rotate(45deg);
  }
  .faq-icon svg {
    width: 11px; height: 11px;
    stroke: rgba(255,255,255,0.45);
    transition: stroke 0.3s ease;
  }
  .faq-item.open .faq-icon svg { stroke: rgba(255,255,255,0.85); }

  /* smooth open/close */
  .faq-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.42s cubic-bezier(0.16,1,0.3,1);
  }
  .faq-body.open { grid-template-rows: 1fr; }
  .faq-body-inner { overflow: hidden; }

  .faq-answer {
    font-family: 'General Sans', 'Inter', system-ui, sans-serif;
    font-size: clamp(0.88rem, 1.2vw, 0.98rem);
    font-weight: 300;
    color: rgba(255,255,255,0.55);
    line-height: 1.8;
    padding: 0 1.4rem 1.8rem calc(24px + 1.4rem + 1.4rem);
    max-width: 620px;
  }

  /* stagger fade-in on load */
  @keyframes faqFadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .faq-item { opacity: 0; animation: faqFadeUp 0.55s cubic-bezier(0.16,1,0.3,1) forwards; }
  .faq-item:nth-child(1) { animation-delay: 0.10s; }
  .faq-item:nth-child(2) { animation-delay: 0.20s; }
  .faq-item:nth-child(3) { animation-delay: 0.30s; }
  .faq-item:nth-child(4) { animation-delay: 0.40s; }
  .faq-item:nth-child(5) { animation-delay: 0.50s; }

  @media (max-width: 640px) {
    .faq-trigger { padding: 1.4rem 1rem; gap: 1rem; }
    .faq-trigger-left { gap: 1rem; }
    .faq-answer { padding-left: calc(20px + 1rem + 1rem); padding-bottom: 1.4rem; }
    .faq-index { min-width: 20px; }
  }
`;

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

const faqs = [
  {
    q: "Who can bank with Savoy Bank & Trust?",
    a: "We serve UHNWIs, family offices, and qualified institutional clients seeking bespoke, cross-border banking solutions.",
  },
  {
    q: "What jurisdictions do you support?",
    a: "Our services are globally accessible. We work with clients across Europe, Latin America, the Middle East, and Asia.",
  },
  {
    q: "Are deposits insured?",
    a: "As an offshore bank, we follow the regulations of the Central Bank of The Bahamas. We provide transparency, segregation of client funds, and strong governance.",
  },
  {
    q: "Do you offer online access?",
    a: "Yes. Our encrypted online banking system provides global access to your accounts, portfolios, and transfers.",
  },
  {
    q: "What assets can be used for Lombard loans?",
    a: "We accept listed equities and fixed income securities as eligible collateral.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <>
      <style>{globalStyles}</style>
      <SavoyHeader phase={4} />

      <main className="bg-[#001a33] text-white min-h-screen">

        {/* ── HERO ── */}
        <section className="relative pt-50 md:pt-75 pb-16 px-6 md:px-20 overflow-hidden">
          <h1
            style={{
              fontFamily: serif,
              fontSize: "clamp(3rem,7vw,6rem)",
              fontWeight: 300,
              lineHeight: 0.85,
            }}
            className="text-white"
          >
            FAQs
          </h1>
          <span className="block w-10 h-px bg-white mt-8" />
        </section>

        <div className="w-full h-px bg-bg-[#001a33]" />

        {/* ── OLD: static faq-card layout (replaced by accordion below) ── */}
        {/* <section className="py-16 px-6 md:px-20 flex flex-col items-center gap-6">
          {faqs.map((item, i) => (
            <div key={i} className="faq-card">
              <span className="faq-qnum">Q{i + 1}</span>
              <div className="flex-1">
                <p className="faq-question">{item.q}</p>
                <p className="faq-answer">{item.a}</p>
              </div>
            </div>
          ))}
        </section> */}

        {/* ── NEW: accordion FAQ ── */}
        <section className="py-16 px-6 md:px-20 flex flex-col items-center gap-0">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? " open" : ""}`}
              onClick={() => toggle(i)}
            >
              {/* Trigger row */}
              <div className="faq-trigger">
                <div className="faq-trigger-left">
                  <span className="faq-index">0{i + 1}</span>
                  <span className="faq-question">{item.q}</span>
                </div>
                {/* + rotates to × when open */}
                <div className="faq-icon">
                  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
                    <line x1="6" y1="1" x2="6" y2="11" />
                    <line x1="1" y1="6" x2="11" y2="6" />
                  </svg>
                </div>
              </div>

              {/* Collapsible answer */}
              <div className={`faq-body${openIndex === i ? " open" : ""}`}>
                <div className="faq-body-inner">
                  <p className="faq-answer">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="w-full h-px bg-bg-[#001a33]" />

        {/* ── CTA ── */}
        {/* <section className="py-16 px-6 md:px-20 flex justify-center">
          <p
            style={{
              fontFamily: sans,
              fontSize: "0.88rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Have more questions?{" "}
            <a
              href="/contact-us"
              className="no-underline hover:underline transition-all"
              style={{ fontFamily: sans, color: "var(--savoy-font, #0097a7)" }}
            >
              Contact our team →
            </a>
          </p>
        </section> */}

      </main>

      <BrandFooterSection />
    </>
  );
}