

// "use client";

// import { useEffect, useRef, useState } from "react";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// // ── SVG 4-pointed star pattern — same coded pattern as the Services teaser ──
// const STAR_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'>
//   <path d='M26 4 C26 4 24 18 4 26 C4 26 24 34 26 48 C26 48 28 34 48 26 C48 26 28 18 26 4 Z'
//     fill='none' stroke='rgba(130,165,200,0.13)' stroke-width='0.6'/>
// </svg>`;
// const STAR_URL = `url("data:image/svg+xml,${encodeURIComponent(STAR_SVG)}")`;

// const STAR_SVG_2 = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'>
//   <path d='M26 10 C26 10 24.5 20 10 26 C10 26 24.5 32 26 42 C26 42 27.5 32 42 26 C42 26 27.5 20 26 10 Z'
//     fill='none' stroke='rgba(100,140,180,0.06)' stroke-width='0.5'/>
// </svg>`;
// const STAR_URL_2 = `url("data:image/svg+xml,${encodeURIComponent(STAR_SVG_2)}")`;

// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap');

//   html { scroll-behavior: smooth; }

//   @keyframes sv-drift {
//     0%   { background-position: 0 0, 26px 26px; }
//     100% { background-position: 52px 52px, 78px 78px; }
//   }
//   @keyframes sv-modal-in {
//     0%   { opacity: 0; transform: translateY(18px) scale(0.98); }
//     100% { opacity: 1; transform: translateY(0) scale(1); }
//   }
//   @keyframes sv-backdrop-in {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
//   }

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

//   /* ── Section wrapper carrying the coded star pattern + vignette ── */
//   .sv-services-section {
//     position: relative;
//     background-color: #031629;
//     overflow: hidden;
//     font-family: 'Cormorant', Georgia, serif;
//     color: #fff;
//   }
//   .sv-services-pattern {
//     position: absolute;
//     inset: 0;
//     pointer-events: none;
//     z-index: 0;
//     // background-image: ${STAR_URL}, ${STAR_URL_2};
//     background-size: 52px 52px, 52px 52px;
//     background-position: 0 0, 26px 26px;
//     animation: sv-drift 60s linear infinite;
//   }
//   .sv-services-vignette {
//     position: absolute;
//     inset: 0;
//     pointer-events: none;
//     z-index: 1;
//     // background:
//     //   radial-gradient(ellipse 55% 90% at 0% 50%,  rgba(3,22,41,0.85) 0%, transparent 70%),
//     //   radial-gradient(ellipse 40% 60% at 100% 0%,  rgba(3,22,41,0.6) 0%, transparent 60%),
//     //   radial-gradient(ellipse 50% 50% at 100% 100%, rgba(3,22,41,0.7) 0%, transparent 60%),
//     //   linear-gradient(to bottom, rgba(3,22,41,0.55) 0%, transparent 20%, transparent 80%, rgba(3,22,41,0.55) 100%);
//   }
//   .sv-services-inner {
//     position: relative;
//     z-index: 2;
//     width: 100%;
//     padding: 4vh 4vw 12vh 4vw;
//   }

//   /* ── Services grid — every card is the same fixed size, always ── */
//   .services-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));
//     gap: 1.75rem;
//     // border-top: 1px solid rgba(255,255,255,0.08);
//     padding-top: 2.5rem;
//   }

//   .service-card {
//     scroll-margin-top: 120px;
//     position: relative;
//     height: 320px;
//     background: #04182c;
//     border: 1px solid rgba(255,255,255,0.08);
//     display: flex;
//     flex-direction: column;
//     padding: 2.1rem 1.9rem 1.6rem;
//     overflow: hidden;
//     cursor: pointer;
//     transition: border-color 0.35s ease, background 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
//   }
//   .service-card:hover {
//     border-color: rgba(200,218,235,0.5);
//     background: #051c33;
//     transform: translateY(-3px);
//     box-shadow: 0 16px 34px rgba(0,0,0,0.35);
//   }

//   /* Ghost watermark number, faint, behind the content */
//   .service-card-ghost {
//     position: absolute;
//     right: 1.2rem;
//     top: 0.6rem;
//     font-family: 'Cormorant', Georgia, serif;
//     font-size: clamp(3.2rem, 5vw, 4.6rem);
//     font-weight: 300;
//     font-style: italic;
//     color: rgba(255,255,255,0.04);
//     line-height: 1;
//     letter-spacing: -0.02em;
//     pointer-events: none;
//     user-select: none;
//     z-index: 0;
//     transition: color 0.4s;
//   }
//   .service-card:hover .service-card-ghost { color: rgba(255,255,255,0.07); }

//   .service-card-index {
//     font-size: clamp(0.68rem, 0.8vw, 0.76rem);
//     font-weight: 300;
//     letter-spacing: 0.22em;
//     color: rgba(255,255,255,0.28);
//     position: relative;
//     z-index: 1;
//     margin-bottom: 1.1rem;
//   }

//   .service-card-title {
//     font-size: clamp(1.1rem, 1.5vw, 1.35rem);
//     font-weight: 400;
//     letter-spacing: 0.06em;
//     // text-transform: uppercase;
//     color: rgba(255,255,255,0.92);
//     line-height: 1.25;
//     position: relative;
//     z-index: 1;
//     margin: 0 0 0.55rem;
//   }

//   .service-card-sub {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.68rem;
//     letter-spacing: 0.12em;
//     // text-transform: uppercase;
//     color: rgba(180,200,220,0.5);
//     position: relative;
//     z-index: 1;
//     margin: 0 0 1.3rem;
//   }

//   .service-card-rule {
//     width: 32px;
//     height: 1px;
//     background: rgba(255,255,255,0.2);
//     border: none;
//     margin: 0 0 1.2rem;
//     position: relative;
//     z-index: 1;
//   }

//   .service-card-teaser {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.82rem;
//     font-weight: 300;
//     font-style: italic;
//     line-height: 1.55;
//     color: rgba(200,212,224,0.55);
//     position: relative;
//     z-index: 1;
//     flex: 1;
//     display: -webkit-box;
//     -webkit-line-clamp: 3;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//   }

//   /* ── CTA row — text label + circle, centered below the content ── */
//   .service-toggle-row {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 0.7rem;
//     padding-top: 1rem;
//     position: relative;
//     z-index: 1;
//   }
//   .service-card-cta {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.66rem;
//     font-weight: 400;
//     letter-spacing: 0.16em;
//     text-transform: uppercase;
//     color: rgba(180,200,220,0.5);
//     transition: color 0.3s ease, letter-spacing 0.3s ease;
//   }
//   .service-card:hover .service-card-cta {
//     color: rgba(225,238,250,0.95);
//     letter-spacing: 0.22em;
//   }
//   .service-toggle {
//     width: 34px;
//     height: 34px;
//     border-radius: 50%;
//     border: 1px solid rgba(255,255,255,0.22);
//     background: rgba(255,255,255,0.02);
//     position: relative;
//     cursor: pointer;
//     flex-shrink: 0;
//     transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
//   }
//   .service-card:hover .service-toggle,
//   .service-toggle:hover {
//     border-color: rgba(200,218,235,0.7);
//     background: rgba(255,255,255,0.06);
//     transform: scale(1.08);
//   }
//   .service-toggle::before,
//   .service-toggle::after {
//     content: "";
//     position: absolute;
//     background: rgba(220,230,240,0.85);
//     top: 50%; left: 50%;
//     transform: translate(-50%,-50%);
//   }
//   .service-toggle::before { width: 13px; height: 1.5px; }
//   .service-toggle::after   { width: 1.5px; height: 13px; }

//   /* ── MODAL ── */
//   .sv-modal-backdrop {
//     position: fixed;
//     inset: 0;
//     z-index: 200;
//     background: rgba(2,12,23,0.78);
//     backdrop-filter: blur(3px);
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
//     padding: 5vh 5vw;
//     overflow-y: auto;
//     animation: sv-backdrop-in 0.3s ease;
//   }

//   .sv-modal {
//     position: relative;
//     width: 100%;
//     max-width: min(94vw, 780px);
//     background: #04182c;
//     border: 1px solid rgba(255,255,255,0.12);
//     box-shadow: 0 30px 80px rgba(0,0,0,0.6);
//     padding: 3rem 3rem 2.75rem;
//     font-family: 'Cormorant', Georgia, serif;
//     color: #fff;
//     animation: sv-modal-in 0.35s cubic-bezier(0.16,1,0.3,1);
//   }

//   .sv-modal-ghost {
//     position: absolute;
//     right: 1.5rem;
//     top: 1rem;
//     font-size: clamp(4rem, 8vw, 6rem);
//     font-weight: 300;
//     font-style: italic;
//     color: rgba(255,255,255,0.04);
//     line-height: 1;
//     pointer-events: none;
//     user-select: none;
//   }

//   .sv-modal-close {
//     position: absolute;
//     top: 1.4rem;
//     right: 1.5rem;
//     width: 36px;
//     height: 36px;
//     border-radius: 50%;
//     border: 1px solid rgba(255,255,255,0.22);
//     background: rgba(255,255,255,0.02);
//     cursor: pointer;
//     z-index: 2;
//     transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
//   }
//   .sv-modal-close:hover {
//     border-color: rgba(200,218,235,0.7);
//     background: rgba(255,255,255,0.06);
//     transform: scale(1.08);
//   }
//   .sv-modal-close::before,
//   .sv-modal-close::after {
//     content: "";
//     position: absolute;
//     width: 14px;
//     height: 1.5px;
//     background: rgba(220,230,240,0.85);
//     top: 50%; left: 50%;
//     transform-origin: center;
//   }
//   .sv-modal-close::before { transform: translate(-50%,-50%) rotate(45deg); }
//   .sv-modal-close::after  { transform: translate(-50%,-50%) rotate(-45deg); }

//   .sv-modal-index {
//     font-size: 0.76rem;
//     font-weight: 300;
//     letter-spacing: 0.22em;
//     color: rgba(255,255,255,0.32);
//     margin-bottom: 1rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-title {
//     font-size: clamp(1.6rem, 3vw, 2.2rem);
//     font-weight: 300;
//     letter-spacing: 0.03em;
//     // text-transform: uppercase;
//     color: #fff;
//     line-height: 1.15;
//     margin: 0 0 0.6rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-sub {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.72rem;
//     letter-spacing: 0.12em;
//     // text-transform: uppercase;
//     color: rgba(180,200,220,0.55);
//     margin: 0 0 1.4rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-rule {
//     width: 40px;
//     height: 1px;
//     background: rgba(255,255,255,0.22);
//     border: none;
//     margin: 0 0 1.5rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-body {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.86rem;
//     font-weight: 300;
//     line-height: 1.65;
//     color: rgba(210,220,230,0.75);
//     text-align: justify;
//     margin: 0 0 1.4rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-bullets {
//     margin: 0 0 1.4rem;
//     padding: 0;
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//     gap: 0.9rem 1.5rem;
//     position: relative;
//     z-index: 1;
//   }
//   .sv-modal-bullets li {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.83rem;
//     font-weight: 300;
//     line-height: 1.5;
//     color: rgba(195,208,222,0.68);
//     list-style: none;
//     display: flex;
//     align-items: baseline;
//     gap: 0.6rem;
//   }
//   .sv-modal-bullets li span:first-child {
//     color: rgba(180,200,220,0.32);
//     flex-shrink: 0;
//   }

//   .sv-modal-note {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.8rem;
//     font-weight: 300;
//     font-style: italic;
//     line-height: 1.4;
//     color: rgba(170,192,210,0.55);
//     border-top: 1px solid rgba(255,255,255,0.08);
//     padding-top: 1.2rem;
//     margin: 0;
//     position: relative;
//     z-index: 1;
//   }

//   @media (max-width: 640px) {
//     .sv-services-inner { padding: 6vh 5vw 8vh; }
//     .sv-modal { padding: 2.5rem 1.6rem 2rem; }
//     .sv-modal-bullets { grid-template-columns: 1fr; }
//   }
// `;

// /* ── Colour tokens ── */
// const serif = "'Cormorant', Georgia, serif";

// const services = [
//   {
//     id: "banking",
//     index: "01",
//     title: "Traditional Banking Services",
//     sub: "Banking That Honors Legacy",
//     body: "At Savoy Bank & Trust, we understand that wealth is built over a lifetime and often intended to endure for generations. Our traditional banking services are designed to provide security, flexibility, and personalized attention, supporting the financial needs of individuals, families, and businesses across jurisdictions. Whether managing day-to-day liquidity, safeguarding capital, or facilitating international transactions, we deliver solutions tailored to the unique requirements of each client relationship. Every service is delivered with an uncompromising commitment to regulatory excellence, confidentiality, and integrity—principles that have long defined the private banking tradition and continue to guide our relationships today.",
//     bullets: [
//       "Multi-Currency Current Accounts — Seamless banking across major international currencies, designed to support global lifestyles and cross-border financial activity.",
//       "Fixed-Term and Fiduciary Deposits — Capital preservation solutions offering security, stability, and competitive returns within a disciplined risk framework.",
//       "Dedicated Relationship Management — Personalized service delivered by experienced professionals who understand your financial objectives and value discretion, responsiveness, and continuity.",
//       "International Banking Support — Efficient execution of domestic and cross-border transactions through a trusted international banking platform.",
//     ],
//     note: "Bank with confidence. Build with purpose. Preserve for generations.",
//   },
//   {
//     id: "platform",
//     index: "02",
//     title: "Secure Online Banking Platform",
//     sub: "Secure. Seamless. Global.",
//     body: "Access your wealth with confidence wherever life and business take you. Savoy Bank & Trust's secure online banking platform provides a unified digital experience, offering convenient access to your banking relationships, portfolios, and account information through a highly secure environment. Designed for internationally mobile clients, families, and institutions, our platform combines sophisticated functionality with the highest standards of security, privacy, and reliability. Supported by advanced security protocols and a commitment to operational excellence, our digital banking platform delivers the convenience of modern technology without compromising the discretion and personalized service that define the Savoy banking experience.",
//     bullets: [
//       "Secure Digital Access — Convenient, encrypted access to your accounts through a robust authentication framework designed to protect your financial information.",
//       "Secure Client Messaging — Communicate directly with your relationship team through a confidential messaging channel, ensuring timely and secure interactions.",
//       "Portfolio Visibility and Reporting — View portfolio holdings, account balances, positions, and transaction activity through a consolidated dashboard that provides a clear picture of your financial affairs.",
//       "Global Accessibility — Manage your banking relationships anytime, from virtually anywhere, through a platform built to support today's international lifestyles and cross-border needs.",
//     ],
//     note: "Secure access. Informed decisions. Global connectivity.",
//   },
//   {
//     id: "custody",
//     index: "03",
//     title: "Global Custody & Execution",
//     sub: "Institutional-Grade Access and Protection",
//     body: "Access a world of investment opportunities through Savoy Bank & Trust's comprehensive custody and execution platform. Designed to meet the sophisticated needs of high-net-worth individuals, family offices, and institutional investors, our services provide secure asset safekeeping, efficient trade execution, and access to a broad range of global investment solutions. Through established relationships with leading custodians, broker-dealers, and financial institutions, we help clients navigate global markets with confidence while maintaining the highest standards of security, transparency, and operational excellence. Our custody and execution services are designed to provide seamless access to global markets while ensuring that client assets remain protected within a trusted and regulated framework.",
//     bullets: [
//       "Global Equities and Fixed Income — Access to listed equities, sovereign and corporate bonds, and other traditional investment instruments across major international markets.",
//       "Mutual Funds and Alternative Investments — A broad selection of mutual funds, hedge funds, and alternative investment solutions designed to support diverse investment objectives and risk profiles.",
//       "Structured Investment Solutions — Customized structured products tailored to specific investment goals, market views, risk tolerances, and wealth preservation strategies.",
//       "Institutional-Quality Trade Execution — Efficient execution services supported by established brokerage networks, market expertise, and rigorous operational controls.",
//       "Safekeeping and Asset Protection — Secure custody arrangements through top-tier global custodians, providing robust asset protection, reporting transparency, and operational reliability.",
//     ],
//     note: "Global reach. Secure custody. Disciplined execution.",
//   },
//   {
//     id: "money",
//     index: "04",
//     title: "Money Market Solutions",
//     sub: "Optimize Liquidity. Preserve Capital.",
//     body: "Effective liquidity management is an essential component of long-term wealth preservation. At Savoy Bank & Trust, we offer tailored money market solutions designed to help clients maintain financial flexibility, safeguard capital, and enhance cash returns within a prudent risk framework. Whether managing short-term liquidity requirements or strategically allocating excess cash reserves, our solutions are structured to align with your financial objectives, liquidity needs, and overall wealth strategy. Supported by rigorous risk management, strong banking relationships, and a commitment to preserving client capital, our money market solutions help ensure that liquidity remains both productive and readily available when needed.",
//     bullets: [
//       "Current Accounts with Daily Liquidity — Flexible cash management solutions providing immediate access to funds while supporting your day-to-day banking and international transaction requirements.",
//       "Fixed-Term Deposits — Competitive, market-driven deposit options designed to provide capital stability and predictable returns across a range of maturities.",
//       "Fiduciary Deposits Through Global Banking Partners — Access to carefully selected international banking institutions, allowing clients to diversify cash holdings while benefiting from attractive deposit opportunities and enhanced flexibility.",
//       "Customized Liquidity Strategies — Cash management solutions tailored to individual, family office, and institutional requirements, balancing accessibility, security, and return objectives.",
//     ],
//     note: "Maintain flexibility, protect capital and put liquidity to work.",
//   },
//   {
//     id: "fx",
//     index: "05",
//     title: "Foreign Exchange",
//     sub: "Currency Strategies with Precision",
//     body: "In an increasingly interconnected world, effective currency management is essential for preserving wealth, facilitating international transactions, and managing global investment exposures. Savoy Bank & Trust provides tailored foreign exchange solutions designed to meet the complex needs of internationally minded individuals, family offices, businesses, and institutional clients. Combining competitive market access with personalized service, we help clients execute currency transactions efficiently while navigating exchange rate fluctuations with confidence. All foreign exchange transactions are supported by live market pricing, diligent execution, and the high-touch service that defines the Savoy client experience. Our objective is to help clients manage currency exposure effectively while ensuring seamless access to global opportunities.",
//     bullets: [
//       "Spot Foreign Exchange — Timely currency transactions with same-day settlement, enabling efficient execution for payments, investments, and liquidity requirements across major global currencies.",
//       "Forward Contracts — Forward exchange solutions designed to help mitigate currency risk by locking in exchange rates for future transactions, providing greater certainty in an evolving market environment.",
//       "Foreign Exchange Swaps — Flexible swap arrangements that support liquidity management, settlement timing requirements, and more sophisticated multi-leg currency strategies.",
//       "Major and Cross-Currency Transactions — Execution capabilities across a broad range of currency pairs to support global investment activities, international business operations, and cross-border wealth management needs.",
//       "Dedicated Market Support — Access to experienced professionals who provide market insight, transaction support, and responsive service tailored to your specific objectives.",
//     ],
//     note: "Global markets. Thoughtful execution. Confident currency management.",
//   },
//   {
//     id: "otc",
//     index: "06",
//     title: "OTC & Derivative Solutions",
//     sub: "Control Risk. Capture Opportunity.",
//     body: "Sophisticated investors often require solutions that extend beyond traditional investment instruments. Savoy Bank & Trust provides access to bespoke over-the-counter (OTC) and structured investment solutions designed to help clients manage risk, enhance portfolio efficiency, and pursue specific investment objectives. Working closely with leading financial counterparties and product specialists, we assist clients in implementing customized strategies tailored to their market outlook, liquidity requirements, risk tolerance, and wealth preservation goals. Our OTC and structured investment capabilities are designed for clients seeking greater portfolio diversification, enhanced yield opportunities, tailored market exposure, or downside protection. Every solution is developed with careful consideration of the client's overall investment strategy and risk profile.",
//     bullets: [
//       "Bespoke OTC Derivative Solutions — Customized derivative structures designed to address specific portfolio, hedging, or investment requirements across multiple asset classes.",
//       "Equity, Interest Rate, and Foreign Exchange Options — Flexible solutions that can be utilized to manage market exposures, protect capital, or express strategic investment views within defined risk parameters.",
//       "Capital-Protected Notes — Structured solutions designed to provide exposure to selected markets or investment themes while incorporating varying degrees of capital preservation.",
//       "Structured Investment Products — Tailored investment strategies that combine traditional financial instruments with derivative features to achieve targeted risk-return outcomes.",
//       "Portfolio Risk Management Solutions — Strategies intended to help mitigate market volatility, manage currency and interest rate exposures, and support long-term wealth preservation objectives.",
//     ],
//     note: "Manage risk with precision. Access opportunities with purpose. Invest with confidence.",
//   },
//   {
//     id: "payments",
//     index: "07",
//     title: "Payments & Transfers",
//     sub: "Global Transfers, Handled with Precision",
//     body: "In today's interconnected financial landscape, the timely and secure movement of funds is essential. Savoy Bank & Trust provides comprehensive payment and transfer solutions designed to support the needs of internationally active individuals, families, businesses, and institutions. Leveraging established global banking networks and robust operational controls, we facilitate the efficient execution of domestic and cross-border transactions while maintaining the highest standards of security, accuracy, and client service. Every transaction benefits from rigorous compliance oversight, robust security protocols, and the personalized attention that distinguishes the Savoy banking experience.",
//     bullets: [
//       "Global Payment Network Access — Connectivity through SWIFT, SEPA, and other recognized banking networks, enabling reliable fund transfers across major financial centers worldwide.",
//       "Domestic and International Wire Transfers — Efficient processing of local and cross-border payments with dedicated support to ensure smooth transaction execution.",
//       "Multi-Currency Payment Solutions — Send and receive funds in multiple currencies, supporting international investments, business activities, and cross-border family wealth needs.",
//       "Secure Transaction Initiation and Monitoring — Advanced digital capabilities allow clients to initiate, authorize, and track payment activity through a secure banking environment.",
//       "Dedicated Client Support — Experienced banking professionals available to assist with time-sensitive transactions, payment inquiries, and specialized transfer requirements.",
//     ],
//     note: "Move capital securely. Transfer funds efficiently. Bank globally with confidence.",
//   },
//   {
//     id: "metals",
//     index: "08",
//     title: "Precious Metals Trading & Custody",
//     sub: "A Tangible Hedge in a Volatile World",
//     body: "For centuries, precious metals have played a vital role in preserving wealth and providing stability during periods of economic uncertainty. At Savoy Bank & Trust, we offer clients access to precious metals solutions designed to support portfolio diversification, capital preservation, and long-term wealth protection. Whether seeking strategic exposure to hard assets or secure ownership of physical bullion, our solutions combine institutional-grade execution with trusted custody arrangements and personalized service. As part of a comprehensive wealth strategy, precious metals can serve as a valuable complement to traditional financial assets, providing diversification benefits and a tangible store of value across market cycles.",
//     bullets: [
//       "Access to Major Precious Metals — Investment solutions across gold, silver, platinum, and palladium, providing exposure to some of the world's most established stores of value.",
//       "Allocated and Unallocated Holdings — Flexible ownership structures that allow clients to select solutions aligned with their investment objectives, liquidity needs, and custody preferences.",
//       "Physical and Paper-Based Exposure — Opportunities to gain exposure through physical bullion holdings as well as approved investment structures linked to precious metals markets.",
//       "Secure Custody and Vaulting — Safekeeping services through reputable international vault providers, supported by rigorous security standards and independent custody arrangements.",
//       "Portfolio Diversification Strategies — Guidance on incorporating precious metals within a broader wealth management framework to help manage risk and enhance portfolio resilience.",
//     ],
//     note: "Preserve purchasing power. Diversify strategically. Protect wealth with confidence.",
//   },
//   {
//     id: "credit",
//     index: "09",
//     title: "Credit Solutions & Securities-Based Lending",
//     sub: "Liquidity Without Liquidation",
//     body: "Significant wealth often creates significant opportunities—but accessing liquidity should not require disrupting a carefully constructed investment strategy. Savoy Bank & Trust offers tailored credit solutions that enable clients to unlock the value of eligible assets while maintaining their long-term investment positions. Our securities-based lending capabilities provide flexible access to capital for a range of personal, business, and investment needs, delivered through a streamlined process and supported by experienced banking professionals. Whether funding new investments, financing business ventures, supporting real estate acquisitions, or addressing short-term liquidity needs, our credit solutions provide a flexible and capital-efficient alternative to the sale of investment assets. Every lending relationship is structured with careful attention to risk management, portfolio composition, and the long-term interests of our clients.",
//     bullets: [
//       "Loans Secured by Publicly Traded Securities — Leverage eligible equity portfolios to access liquidity while preserving market exposure and investment continuity.",
//       "Financing Against Investment-Grade Bond Portfolios — Utilize high-quality fixed-income holdings as collateral for customized lending solutions designed to support capital efficiency.",
//       "Structured Asset-Backed Credit Facilities — Financing arrangements secured by qualifying structured financial instruments and diversified investment portfolios, subject to applicable eligibility criteria.",
//       "Tailored Lending Structures — Customized terms designed to align with individual liquidity requirements, investment objectives, and broader wealth planning considerations.",
//       "Responsive Credit Decision-Making — Efficient execution and dedicated client support aimed at delivering timely access to capital when opportunities or obligations arise.",
//     ],
//     note: "Unlock liquidity. Preserve your strategy. Put your wealth to work.",
//   },
//   {
//     id: "other",
//     index: "10",
//     title: "Other Services",
//     sub: "Bespoke Solutions for Complex Wealth Needs",
//     body: "At Savoy Bank & Trust, we recognize that sophisticated wealth requires more than traditional banking services. Our clients often require specialized solutions that address complex financial structures, global lifestyles, succession objectives, and evolving investment needs. Drawing on our private banking heritage and relationship-driven approach, we provide a range of complementary services designed to support and enhance every aspect of our clients' financial affairs. At Savoy Bank & Trust, exceptional private banking extends beyond products and transactions. Through personalized service, thoughtful advice, and customized solutions, we help our clients navigate complexity, preserve wealth, and build enduring legacies.",
//     bullets: [
//       "Trust and Fiduciary Services — Customized trust structures and fiduciary arrangements designed to support wealth preservation, succession planning, asset protection, and multi-generational legacy objectives.",
//       "Corporate and Wealth Structuring Solutions — Tailored international wealth and corporate structures developed to meet the unique needs of individuals, families, family offices, and business owners.",
//       "Family Office Support — Integrated banking, reporting, administrative, and coordination services that help family offices manage complex financial affairs efficiently and effectively.",
//       "Estate and Succession Planning Coordination — Collaboration with trusted legal, tax, and professional advisors to facilitate the seamless transfer of wealth across generations while preserving long-term family objectives.",
//       "Investment Advisory Services — Strategic guidance and market insight tailored to each client's financial goals, risk tolerance, and investment horizon.",
//       "Customized Credit Card Solutions — Premium credit card programs designed to complement the lifestyles of internationally mobile clients, offering global acceptance, customized credit limits, enhanced security features, and dedicated support. Selected programs may also provide exclusive travel, lifestyle, and concierge-related benefits.",
//       "Specialized Client Services — Access to bespoke solutions and tailored financial arrangements developed in response to unique circumstances, opportunities, and evolving client requirements.",
//     ],
//     note: "Bespoke solutions. Trusted relationships. Enduring stewardship.",
//   },
//   {
//     id: "philanthropy",
//     index: "11",
//     title: "Philanthropy & Community Impact",
//     sub: "Investing in Communities. Creating Lasting Change.",
//     body: "At Savoy Bank & Trust, we believe that true wealth extends beyond financial success. It carries a responsibility to contribute positively to the communities we serve and to help create opportunities for future generations. Our commitment to philanthropy reflects the values that guide our institution—stewardship, integrity, compassion, and long-term thinking. Through strategic charitable initiatives, community partnerships, and support for meaningful causes, we seek to make a lasting and measurable impact. We recognize that philanthropy is often an important component of a family's legacy. Savoy Bank & Trust works with clients and their advisors to support charitable giving strategies that reflect their values, priorities, and long-term vision. Whether through direct charitable contributions, structured philanthropic vehicles, or multi-generational giving initiatives, we are committed to helping clients create meaningful and enduring impact.",
//     bullets: [
//       "Education and Youth Development — Supporting programs that expand access to education, leadership development, financial literacy, and opportunities for young people to reach their full potential.",
//       "Community Development — Contributing to initiatives that promote economic empowerment, social well-being, and sustainable community growth.",
//       "Arts, Culture, and Heritage — Encouraging the preservation of cultural heritage and the advancement of artistic and creative endeavors that enrich society.",
//       "Environmental Stewardship — Promoting responsible environmental practices and supporting initiatives that help protect and sustain natural resources for future generations.",
//     ],
//     note: "Building wealth with purpose. Supporting communities with commitment. Creating legacies that extend beyond generations.",
//   },
// ];

// function useInView(threshold = 0.1) {
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

// const fadeUp = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateY(0)" : "translateY(28px)",
//   transition: `opacity 0.85s ease ${d}, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${d}`,
// });

// function ServiceCard({ service, index, onOpen }) {
//   const [ref, inView] = useInView(0.08);

//   return (
//     <div
//       id={service.id}
//       ref={ref}
//       className="service-card"
//       style={fadeUp(inView, `${0.05 + (index % 3) * 0.08}s`)}
//       onClick={() => onOpen(service)}
//     >
//       <span className="service-card-ghost">{service.index}</span>

//       <span className="service-card-index">{service.index}</span>
//       <h3 className="service-card-title">{service.title}</h3>
//       <p className="service-card-sub">{service.sub}</p>
//       <hr className="service-card-rule" />

//       {/* Small amount shown on the card itself */}
//       <p className="service-card-teaser">{service.note}</p>

//       {/* Text label + plus button opens the full content in a centered modal */}
//       <div className="service-toggle-row">
//         <span className="service-card-cta">View Details</span>
//         <button
//           type="button"
//           aria-label={`View details for ${service.title}`}
//           className="service-toggle"
//           onClick={(e) => { e.stopPropagation(); onOpen(service); }}
//         />
//       </div>
//     </div>
//   );
// }

// function ServiceModal({ service, onClose }) {
//   useEffect(() => {
//     const onKey = (e) => { if (e.key === "Escape") onClose(); };
//     window.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   if (!service) return null;

//   return (
//     <div className="sv-modal-backdrop" onClick={onClose}>
//       <div className="sv-modal" onClick={(e) => e.stopPropagation()}>
//         <span className="sv-modal-ghost">{service.index}</span>
//         <button type="button" aria-label="Close" className="sv-modal-close" onClick={onClose} />

//         <p className="sv-modal-index">{service.index}</p>
//         <h3 className="sv-modal-title">{service.title}</h3>
//         <p className="sv-modal-sub">{service.sub}</p>
//         <hr className="sv-modal-rule" />

//         {service.body && <p className="sv-modal-body">{service.body}</p>}

//         <ul className="sv-modal-bullets">
//           {service.bullets.map((b, j) => (
//             <li key={j}>
//               <span>—</span>
//               <span>{b}</span>
//             </li>
//           ))}
//         </ul>

//         {service.note && <p className="sv-modal-note">{service.note}</p>}
//       </div>
//     </div>
//   );
// }

// export default function ServicesPage() {
//   const [heroRef, heroInView] = useInView(0.05);
//   const [activeService, setActiveService] = useState(null);

//   // useEffect(() => {
//   //   const hash = window.location.hash;
//   //   if (!hash) return;
//   //   const id = hash.replace("#", "");
//   //   const match = services.find((s) => s.id === id);
//   //   const attempt = (tries = 0) => {
//   //     const el = document.getElementById(id);
//   //     if (el) {
//   //       el.scrollIntoView({ behavior: "smooth", block: "start" });
//   //       if (match) setActiveService(match);
//   //     } else if (tries < 10) {
//   //       setTimeout(() => attempt(tries + 1), 80);
//   //     }
//   //   };
//   //   setTimeout(() => attempt(), 200);
//   // }, []);

//       useEffect(() => {
//       const hash = window.location.hash;
//       if (!hash) return;
//       const id = hash.replace("#", "");
//       const attempt = (tries = 0) => {
//         const el = document.getElementById(id);
//         if (el) {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         } else if (tries < 10) {
//           setTimeout(() => attempt(tries + 1), 80);
//         }
//       };
//       setTimeout(() => attempt(), 200);
//     }, []);

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="sv-services-section min-h-screen">
//         <div className="sv-services-pattern" />
//         <div className="sv-services-vignette" />

//         <div className="sv-services-inner">

//           {/* ── HERO ── */}
//           <section ref={heroRef} className="relative pt-40 md:pt-75 pb-6">
//             {/* <h1
//               style={{
//                 ...fadeUp(heroInView, "0.1s"),
//                 fontFamily: serif,
//                 fontSize: "clamp(2.5rem, 5vw, 5rem)",
//                 fontWeight: 300,
//                 lineHeight: 0.88,
//               }}
//               className="text-white"
//             >
//               Services
//             </h1> */}
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
//               Services
//               <br />
//               <span className="block w-10 h-px bg-white mt-8" />
//               {/* <em style={{ color:"var(--savoy-font)" }}>Savoy.</em> */}
//             </h1>
//           </section>

//           {/* ── SERVICES GRID ── */}
//           <section className="services-grid">
//             {services.map((service, i) => (
//               <ServiceCard
//                 key={i}
//                 service={service}
//                 index={i}
//                 onOpen={setActiveService}
//               />
//             ))}
//           </section>

//         </div>
//       </main>

//       <ServiceModal service={activeService} onClose={() => setActiveService(null)} />

//       <BrandFooterSection />
//     </>
//   );
// }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// // ── SVG 4-pointed star pattern — same coded pattern as the Services teaser ──
// const STAR_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'>
//   <path d='M26 4 C26 4 24 18 4 26 C4 26 24 34 26 48 C26 48 28 34 48 26 C48 26 28 18 26 4 Z'
//     fill='none' stroke='rgba(130,165,200,0.13)' stroke-width='0.6'/>
// </svg>`;
// const STAR_URL = `url("data:image/svg+xml,${encodeURIComponent(STAR_SVG)}")`;

// const STAR_SVG_2 = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'>
//   <path d='M26 10 C26 10 24.5 20 10 26 C10 26 24.5 32 26 42 C26 42 27.5 32 42 26 C42 26 27.5 20 26 10 Z'
//     fill='none' stroke='rgba(100,140,180,0.06)' stroke-width='0.5'/>
// </svg>`;
// const STAR_URL_2 = `url("data:image/svg+xml,${encodeURIComponent(STAR_SVG_2)}")`;

// /* ── Font tokens — inline, used directly on elements via style={} ── */
// const fontHeading = "'Cormorant Garamond', Georgia, serif"; // headings / titles
// const fontBody = "'Inter', system-ui, sans-serif";          // paragraphs / bullets / notes
// const fontLabel = "'Montserrat', system-ui, sans-serif";    // small uppercase subtitles/labels

// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Inter:wght@300;400;500&family=Montserrat:wght@400;500&display=swap');

//   html { scroll-behavior: smooth; }

//   @keyframes sv-drift {
//     0%   { background-position: 0 0, 26px 26px; }
//     100% { background-position: 52px 52px, 78px 78px; }
//   }
//   @keyframes sv-modal-in {
//     0%   { opacity: 0; transform: translateY(18px) scale(0.98); }
//     100% { opacity: 1; transform: translateY(0) scale(1); }
//   }
//   @keyframes sv-backdrop-in {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
//   }

//   .mobile-nav {
//     position: fixed; inset: 0; background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//     transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//   }
//   .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//   .mobile-nav a {
//     color: #fff;
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

//   /* ── Section wrapper carrying the coded star pattern + vignette ── */
//   .sv-services-section {
//     position: relative;
//     background-color: #031629;
//     overflow: hidden;
//     color: #fff;
//   }
//   .sv-services-pattern {
//     position: absolute;
//     inset: 0;
//     pointer-events: none;
//     z-index: 0;
//     background-size: 52px 52px, 52px 52px;
//     background-position: 0 0, 26px 26px;
//     animation: sv-drift 60s linear infinite;
//   }
//   .sv-services-vignette {
//     position: absolute;
//     inset: 0;
//     pointer-events: none;
//     z-index: 1;
//   }
//   .sv-services-inner {
//     position: relative;
//     z-index: 2;
//     width: 100%;
//     padding: 4vh 4vw 12vh 4vw;
//   }

//   /* ── Services grid — every card is the same fixed size, always ── */
//   .services-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));
//     gap: 1.75rem;
//     padding-top: 2.5rem;
//   }

//   .service-card {
//     scroll-margin-top: 120px;
//     position: relative;
//     height: 320px;
//     background: #04182c;
//     border: 1px solid rgba(255,255,255,0.08);
//     display: flex;
//     flex-direction: column;
//     padding: 2.1rem 1.9rem 1.6rem;
//     overflow: hidden;
//     cursor: pointer;
//     transition: border-color 0.35s ease, background 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
//   }
//   .service-card:hover {
//     border-color: rgba(200,218,235,0.5);
//     background: #051c33;
//     transform: translateY(-3px);
//     box-shadow: 0 16px 34px rgba(0,0,0,0.35);
//   }

//   /* Ghost watermark number, faint, behind the content */
//   .service-card-ghost {
//     position: absolute;
//     right: 1.2rem;
//     top: 0.6rem;
//     font-size: clamp(3.2rem, 5vw, 4.6rem);
//     font-weight: 300;
//     font-style: italic;
//     color: rgba(255,255,255,0.04);
//     line-height: 1;
//     letter-spacing: -0.02em;
//     pointer-events: none;
//     user-select: none;
//     z-index: 0;
//     transition: color 0.4s;
//   }
//   .service-card:hover .service-card-ghost { color: rgba(255,255,255,0.07); }

//   .service-card-index {
//     font-size: clamp(0.68rem, 0.8vw, 0.76rem);
//     color: rgba(255,255,255,0.28);
//     position: relative;
//     z-index: 1;
//     margin-bottom: 1.1rem;
//   }

//   .service-card-title {
//     font-size: clamp(1.1rem, 1.5vw, 1.35rem);
//     color: rgba(255,255,255,0.92);
//     line-height: 1.25;
//     position: relative;
//     z-index: 1;
//     margin: 0 0 0.55rem;
//   }

//   .service-card-sub {
//     font-size: 0.68rem;
//     color: rgba(180,200,220,0.5);
//     position: relative;
//     z-index: 1;
//     margin: 0 0 1.3rem;
//   }

//   .service-card-rule {
//     width: 32px;
//     height: 1px;
//     background: rgba(255,255,255,0.2);
//     border: none;
//     margin: 0 0 1.2rem;
//     position: relative;
//     z-index: 1;
//   }

//   .service-card-teaser {
//     font-size: 0.82rem;
//     // font-style: italic;
//     line-height: 1.55;
//     color: rgba(200,212,224,0.55);
//     position: relative;
//     z-index: 1;
//     flex: 1;
//     display: -webkit-box;
//     -webkit-line-clamp: 3;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//   }

//   /* ── CTA row — text label + circle, centered below the content ── */
//   .service-toggle-row {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 0.7rem;
//     padding-top: 1rem;
//     position: relative;
//     z-index: 1;
//   }
//   .service-card-cta {
//     font-size: 0.66rem;
//     color: rgba(180,200,220,0.5);
//     transition: color 0.3s ease, letter-spacing 0.3s ease;
//   }
//   .service-card:hover .service-card-cta {
//     color: rgba(225,238,250,0.95);
//     letter-spacing: 0.22em;
//   }
//   .service-toggle {
//     width: 34px;
//     height: 34px;
//     border-radius: 50%;
//     border: 1px solid rgba(255,255,255,0.22);
//     background: rgba(255,255,255,0.02);
//     position: relative;
//     cursor: pointer;
//     flex-shrink: 0;
//     transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
//   }
//   .service-card:hover .service-toggle,
//   .service-toggle:hover {
//     border-color: rgba(200,218,235,0.7);
//     background: rgba(255,255,255,0.06);
//     transform: scale(1.08);
//   }
//   .service-toggle::before,
//   .service-toggle::after {
//     content: "";
//     position: absolute;
//     background: rgba(220,230,240,0.85);
//     top: 50%; left: 50%;
//     transform: translate(-50%,-50%);
//   }
//   .service-toggle::before { width: 13px; height: 1.5px; }
//   .service-toggle::after   { width: 1.5px; height: 13px; }

//   /* ── MODAL ── */
//   .sv-modal-backdrop {
//     position: fixed;
//     inset: 0;
//     z-index: 200;
//     background: rgba(2,12,23,0.78);
//     backdrop-filter: blur(3px);
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
//     padding: 5vh 5vw;
//     overflow-y: auto;
//     animation: sv-backdrop-in 0.3s ease;
//   }

//   .sv-modal {
//     position: relative;
//     width: 100%;
//     max-width: min(94vw, 780px);
//     background: #04182c;
//     border: 1px solid rgba(255,255,255,0.12);
//     box-shadow: 0 30px 80px rgba(0,0,0,0.6);
//     padding: 3rem 3rem 2.75rem;
//     color: #fff;
//     animation: sv-modal-in 0.35s cubic-bezier(0.16,1,0.3,1);
//   }

//   .sv-modal-ghost {
//     position: absolute;
//     right: 1.5rem;
//     top: 1rem;
//     font-size: clamp(4rem, 8vw, 6rem);
//     font-weight: 300;
//     font-style: italic;
//     color: rgba(255,255,255,0.04);
//     line-height: 1;
//     pointer-events: none;
//     user-select: none;
//   }

//   .sv-modal-close {
//     position: absolute;
//     top: 1.4rem;
//     right: 1.5rem;
//     width: 36px;
//     height: 36px;
//     border-radius: 50%;
//     border: 1px solid rgba(255,255,255,0.22);
//     background: rgba(255,255,255,0.02);
//     cursor: pointer;
//     z-index: 2;
//     transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
//   }
//   .sv-modal-close:hover {
//     border-color: rgba(200,218,235,0.7);
//     background: rgba(255,255,255,0.06);
//     transform: scale(1.08);
//   }
//   .sv-modal-close::before,
//   .sv-modal-close::after {
//     content: "";
//     position: absolute;
//     width: 14px;
//     height: 1.5px;
//     background: rgba(220,230,240,0.85);
//     top: 50%; left: 50%;
//     transform-origin: center;
//   }
//   .sv-modal-close::before { transform: translate(-50%,-50%) rotate(45deg); }
//   .sv-modal-close::after  { transform: translate(-50%,-50%) rotate(-45deg); }

//   .sv-modal-index {
//     font-size: 0.76rem;
//     color: rgba(255,255,255,0.32);
//     margin-bottom: 1rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-title {
//     font-size: clamp(1.6rem, 3vw, 2.2rem);
//     color: #fff;
//     line-height: 1.15;
//     margin: 0 0 0.6rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-sub {
//     font-size: 0.72rem;
//     color: rgba(180,200,220,0.55);
//     margin: 0 0 1.4rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-rule {
//     width: 40px;
//     height: 1px;
//     background: rgba(255,255,255,0.22);
//     border: none;
//     margin: 0 0 1.5rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-body {
//     font-size: 0.86rem;
//     line-height: 1.65;
//     color: rgba(210,220,230,0.75);
//     text-align: justify;
//     text-justify: inter-word;
//     word-spacing: -2px;
//     margin: 0 0 1.4rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-bullets {
//     margin: 0 0 1.4rem;
//     padding: 0;
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//     gap: 0.9rem 1.5rem;
//     position: relative;
//     z-index: 1;
//   }
//   .sv-modal-bullets li {
//     font-size: 0.83rem;
//     line-height: 1.5;
//     color: rgba(195,208,222,0.68);
//     list-style: none;
//     display: flex;
//     align-items: baseline;
//     gap: 0.6rem;
//   }
//   .sv-modal-bullets li span:first-child {
//     color: rgba(180,200,220,0.32);
//     flex-shrink: 0;
//   }

//   .sv-modal-note {
//     font-size: 0.8rem;
//     // font-style: italic;
//     line-height: 1.4;
//     color: rgba(170,192,210,0.55);
//     border-top: 1px solid rgba(255,255,255,0.08);
//     padding-top: 1.2rem;
//     margin: 0;
//     position: relative;
//     z-index: 1;
//   }

//   @media (max-width: 640px) {
//     .sv-services-inner { padding: 6vh 5vw 8vh; }
//     .sv-modal { padding: 2.5rem 1.6rem 2rem; }
//     .sv-modal-bullets { grid-template-columns: 1fr; }
//   }
// `;

// const services = [
//   {
//     id: "banking",
//     index: "01",
//     title: "Traditional Banking Services",
//     sub: "Banking That Honors Legacy",
//     body: "At Savoy Bank & Trust, we understand that wealth is built over a lifetime and often intended to endure for generations. Our traditional banking services are designed to provide security, flexibility, and personalized attention, supporting the financial needs of individuals, families, and businesses across jurisdictions. Whether managing day-to-day liquidity, safeguarding capital, or facilitating international transactions, we deliver solutions tailored to the unique requirements of each client relationship. Every service is delivered with an uncompromising commitment to regulatory excellence, confidentiality, and integrity—principles that have long defined the private banking tradition and continue to guide our relationships today.",
//     bullets: [
//       "Multi-Currency Current Accounts — Seamless banking across major international currencies, designed to support global lifestyles and cross-border financial activity.",
//       "Fixed-Term and Fiduciary Deposits — Capital preservation solutions offering security, stability, and competitive returns within a disciplined risk framework.",
//       "Dedicated Relationship Management — Personalized service delivered by experienced professionals who understand your financial objectives and value discretion, responsiveness, and continuity.",
//       "International Banking Support — Efficient execution of domestic and cross-border transactions through a trusted international banking platform.",
//     ],
//     note: "Bank with confidence. Build with purpose. Preserve for generations.",
//   },
//   {
//     id: "platform",
//     index: "02",
//     title: "Secure Online Banking Platform",
//     sub: "Secure. Seamless. Global.",
//     body: "Access your wealth with confidence wherever life and business take you. Savoy Bank & Trust's secure online banking platform provides a unified digital experience, offering convenient access to your banking relationships, portfolios, and account information through a highly secure environment. Designed for internationally mobile clients, families, and institutions, our platform combines sophisticated functionality with the highest standards of security, privacy, and reliability. Supported by advanced security protocols and a commitment to operational excellence, our digital banking platform delivers the convenience of modern technology without compromising the discretion and personalized service that define the Savoy banking experience.",
//     bullets: [
//       "Secure Digital Access — Convenient, encrypted access to your accounts through a robust authentication framework designed to protect your financial information.",
//       "Secure Client Messaging — Communicate directly with your relationship team through a confidential messaging channel, ensuring timely and secure interactions.",
//       "Portfolio Visibility and Reporting — View portfolio holdings, account balances, positions, and transaction activity through a consolidated dashboard that provides a clear picture of your financial affairs.",
//       "Global Accessibility — Manage your banking relationships anytime, from virtually anywhere, through a platform built to support today's international lifestyles and cross-border needs.",
//     ],
//     note: "Secure access. Informed decisions. Global connectivity.",
//   },
//   {
//     id: "custody",
//     index: "03",
//     title: "Global Custody & Execution",
//     sub: "Institutional-Grade Access and Protection",
//     body: "Access a world of investment opportunities through Savoy Bank & Trust's comprehensive custody and execution platform. Designed to meet the sophisticated needs of high-net-worth individuals, family offices, and institutional investors, our services provide secure asset safekeeping, efficient trade execution, and access to a broad range of global investment solutions. Through established relationships with leading custodians, broker-dealers, and financial institutions, we help clients navigate global markets with confidence while maintaining the highest standards of security, transparency, and operational excellence. Our custody and execution services are designed to provide seamless access to global markets while ensuring that client assets remain protected within a trusted and regulated framework.",
//     bullets: [
//       "Global Equities and Fixed Income — Access to listed equities, sovereign and corporate bonds, and other traditional investment instruments across major international markets.",
//       "Mutual Funds and Alternative Investments — A broad selection of mutual funds, hedge funds, and alternative investment solutions designed to support diverse investment objectives and risk profiles.",
//       "Structured Investment Solutions — Customized structured products tailored to specific investment goals, market views, risk tolerances, and wealth preservation strategies.",
//       "Institutional-Quality Trade Execution — Efficient execution services supported by established brokerage networks, market expertise, and rigorous operational controls.",
//       "Safekeeping and Asset Protection — Secure custody arrangements through top-tier global custodians, providing robust asset protection, reporting transparency, and operational reliability.",
//     ],
//     note: "Global reach. Secure custody. Disciplined execution.",
//   },
//   {
//     id: "money",
//     index: "04",
//     title: "Money Market Solutions",
//     sub: "Optimize Liquidity. Preserve Capital.",
//     body: "Effective liquidity management is an essential component of long-term wealth preservation. At Savoy Bank & Trust, we offer tailored money market solutions designed to help clients maintain financial flexibility, safeguard capital, and enhance cash returns within a prudent risk framework. Whether managing short-term liquidity requirements or strategically allocating excess cash reserves, our solutions are structured to align with your financial objectives, liquidity needs, and overall wealth strategy. Supported by rigorous risk management, strong banking relationships, and a commitment to preserving client capital, our money market solutions help ensure that liquidity remains both productive and readily available when needed.",
//     bullets: [
//       "Current Accounts with Daily Liquidity — Flexible cash management solutions providing immediate access to funds while supporting your day-to-day banking and international transaction requirements.",
//       "Fixed-Term Deposits — Competitive, market-driven deposit options designed to provide capital stability and predictable returns across a range of maturities.",
//       "Fiduciary Deposits Through Global Banking Partners — Access to carefully selected international banking institutions, allowing clients to diversify cash holdings while benefiting from attractive deposit opportunities and enhanced flexibility.",
//       "Customized Liquidity Strategies — Cash management solutions tailored to individual, family office, and institutional requirements, balancing accessibility, security, and return objectives.",
//     ],
//     note: "Maintain flexibility, protect capital and put liquidity to work.",
//   },
//   {
//     id: "fx",
//     index: "05",
//     title: "Foreign Exchange",
//     sub: "Currency Strategies with Precision",
//     body: "In an increasingly interconnected world, effective currency management is essential for preserving wealth, facilitating international transactions, and managing global investment exposures. Savoy Bank & Trust provides tailored foreign exchange solutions designed to meet the complex needs of internationally minded individuals, family offices, businesses, and institutional clients. Combining competitive market access with personalized service, we help clients execute currency transactions efficiently while navigating exchange rate fluctuations with confidence. All foreign exchange transactions are supported by live market pricing, diligent execution, and the high-touch service that defines the Savoy client experience. Our objective is to help clients manage currency exposure effectively while ensuring seamless access to global opportunities.",
//     bullets: [
//       "Spot Foreign Exchange — Timely currency transactions with same-day settlement, enabling efficient execution for payments, investments, and liquidity requirements across major global currencies.",
//       "Forward Contracts — Forward exchange solutions designed to help mitigate currency risk by locking in exchange rates for future transactions, providing greater certainty in an evolving market environment.",
//       "Foreign Exchange Swaps — Flexible swap arrangements that support liquidity management, settlement timing requirements, and more sophisticated multi-leg currency strategies.",
//       "Major and Cross-Currency Transactions — Execution capabilities across a broad range of currency pairs to support global investment activities, international business operations, and cross-border wealth management needs.",
//       "Dedicated Market Support — Access to experienced professionals who provide market insight, transaction support, and responsive service tailored to your specific objectives.",
//     ],
//     note: "Global markets. Thoughtful execution. Confident currency management.",
//   },
//   {
//     id: "otc",
//     index: "06",
//     title: "OTC & Derivative Solutions",
//     sub: "Control Risk. Capture Opportunity.",
//     body: "Sophisticated investors often require solutions that extend beyond traditional investment instruments. Savoy Bank & Trust provides access to bespoke over-the-counter (OTC) and structured investment solutions designed to help clients manage risk, enhance portfolio efficiency, and pursue specific investment objectives. Working closely with leading financial counterparties and product specialists, we assist clients in implementing customized strategies tailored to their market outlook, liquidity requirements, risk tolerance, and wealth preservation goals. Our OTC and structured investment capabilities are designed for clients seeking greater portfolio diversification, enhanced yield opportunities, tailored market exposure, or downside protection. Every solution is developed with careful consideration of the client's overall investment strategy and risk profile.",
//     bullets: [
//       "Bespoke OTC Derivative Solutions — Customized derivative structures designed to address specific portfolio, hedging, or investment requirements across multiple asset classes.",
//       "Equity, Interest Rate, and Foreign Exchange Options — Flexible solutions that can be utilized to manage market exposures, protect capital, or express strategic investment views within defined risk parameters.",
//       "Capital-Protected Notes — Structured solutions designed to provide exposure to selected markets or investment themes while incorporating varying degrees of capital preservation.",
//       "Structured Investment Products — Tailored investment strategies that combine traditional financial instruments with derivative features to achieve targeted risk-return outcomes.",
//       "Portfolio Risk Management Solutions — Strategies intended to help mitigate market volatility, manage currency and interest rate exposures, and support long-term wealth preservation objectives.",
//     ],
//     note: "Manage risk with precision. Access opportunities with purpose. Invest with confidence.",
//   },
//   {
//     id: "payments",
//     index: "07",
//     title: "Payments & Transfers",
//     sub: "Global Transfers, Handled with Precision",
//     body: "In today's interconnected financial landscape, the timely and secure movement of funds is essential. Savoy Bank & Trust provides comprehensive payment and transfer solutions designed to support the needs of internationally active individuals, families, businesses, and institutions. Leveraging established global banking networks and robust operational controls, we facilitate the efficient execution of domestic and cross-border transactions while maintaining the highest standards of security, accuracy, and client service. Every transaction benefits from rigorous compliance oversight, robust security protocols, and the personalized attention that distinguishes the Savoy banking experience.",
//     bullets: [
//       "Global Payment Network Access — Connectivity through SWIFT, SEPA, and other recognized banking networks, enabling reliable fund transfers across major financial centers worldwide.",
//       "Domestic and International Wire Transfers — Efficient processing of local and cross-border payments with dedicated support to ensure smooth transaction execution.",
//       "Multi-Currency Payment Solutions — Send and receive funds in multiple currencies, supporting international investments, business activities, and cross-border family wealth needs.",
//       "Secure Transaction Initiation and Monitoring — Advanced digital capabilities allow clients to initiate, authorize, and track payment activity through a secure banking environment.",
//       "Dedicated Client Support — Experienced banking professionals available to assist with time-sensitive transactions, payment inquiries, and specialized transfer requirements.",
//     ],
//     note: "Move capital securely. Transfer funds efficiently. Bank globally with confidence.",
//   },
//   {
//     id: "metals",
//     index: "08",
//     title: "Precious Metals Trading & Custody",
//     sub: "A Tangible Hedge in a Volatile World",
//     body: "For centuries, precious metals have played a vital role in preserving wealth and providing stability during periods of economic uncertainty. At Savoy Bank & Trust, we offer clients access to precious metals solutions designed to support portfolio diversification, capital preservation, and long-term wealth protection. Whether seeking strategic exposure to hard assets or secure ownership of physical bullion, our solutions combine institutional-grade execution with trusted custody arrangements and personalized service. As part of a comprehensive wealth strategy, precious metals can serve as a valuable complement to traditional financial assets, providing diversification benefits and a tangible store of value across market cycles.",
//     bullets: [
//       "Access to Major Precious Metals — Investment solutions across gold, silver, platinum, and palladium, providing exposure to some of the world's most established stores of value.",
//       "Allocated and Unallocated Holdings — Flexible ownership structures that allow clients to select solutions aligned with their investment objectives, liquidity needs, and custody preferences.",
//       "Physical and Paper-Based Exposure — Opportunities to gain exposure through physical bullion holdings as well as approved investment structures linked to precious metals markets.",
//       "Secure Custody and Vaulting — Safekeeping services through reputable international vault providers, supported by rigorous security standards and independent custody arrangements.",
//       "Portfolio Diversification Strategies — Guidance on incorporating precious metals within a broader wealth management framework to help manage risk and enhance portfolio resilience.",
//     ],
//     note: "Preserve purchasing power. Diversify strategically. Protect wealth with confidence.",
//   },
//   {
//     id: "credit",
//     index: "09",
//     title: "Credit Solutions & Securities-Based Lending",
//     sub: "Liquidity Without Liquidation",
//     body: "Significant wealth often creates significant opportunities—but accessing liquidity should not require disrupting a carefully constructed investment strategy. Savoy Bank & Trust offers tailored credit solutions that enable clients to unlock the value of eligible assets while maintaining their long-term investment positions. Our securities-based lending capabilities provide flexible access to capital for a range of personal, business, and investment needs, delivered through a streamlined process and supported by experienced banking professionals. Whether funding new investments, financing business ventures, supporting real estate acquisitions, or addressing short-term liquidity needs, our credit solutions provide a flexible and capital-efficient alternative to the sale of investment assets. Every lending relationship is structured with careful attention to risk management, portfolio composition, and the long-term interests of our clients.",
//     bullets: [
//       "Loans Secured by Publicly Traded Securities — Leverage eligible equity portfolios to access liquidity while preserving market exposure and investment continuity.",
//       "Financing Against Investment-Grade Bond Portfolios — Utilize high-quality fixed-income holdings as collateral for customized lending solutions designed to support capital efficiency.",
//       "Structured Asset-Backed Credit Facilities — Financing arrangements secured by qualifying structured financial instruments and diversified investment portfolios, subject to applicable eligibility criteria.",
//       "Tailored Lending Structures — Customized terms designed to align with individual liquidity requirements, investment objectives, and broader wealth planning considerations.",
//       "Responsive Credit Decision-Making — Efficient execution and dedicated client support aimed at delivering timely access to capital when opportunities or obligations arise.",
//     ],
//     note: "Unlock liquidity. Preserve your strategy. Put your wealth to work.",
//   },
//   {
//     id: "other",
//     index: "10",
//     title: "Other Services",
//     sub: "Bespoke Solutions for Complex Wealth Needs",
//     body: "At Savoy Bank & Trust, we recognize that sophisticated wealth requires more than traditional banking services. Our clients often require specialized solutions that address complex financial structures, global lifestyles, succession objectives, and evolving investment needs. Drawing on our private banking heritage and relationship-driven approach, we provide a range of complementary services designed to support and enhance every aspect of our clients' financial affairs. At Savoy Bank & Trust, exceptional private banking extends beyond products and transactions. Through personalized service, thoughtful advice, and customized solutions, we help our clients navigate complexity, preserve wealth, and build enduring legacies.",
//     bullets: [
//       "Trust and Fiduciary Services — Customized trust structures and fiduciary arrangements designed to support wealth preservation, succession planning, asset protection, and multi-generational legacy objectives.",
//       "Corporate and Wealth Structuring Solutions — Tailored international wealth and corporate structures developed to meet the unique needs of individuals, families, family offices, and business owners.",
//       "Family Office Support — Integrated banking, reporting, administrative, and coordination services that help family offices manage complex financial affairs efficiently and effectively.",
//       "Estate and Succession Planning Coordination — Collaboration with trusted legal, tax, and professional advisors to facilitate the seamless transfer of wealth across generations while preserving long-term family objectives.",
//       "Investment Advisory Services — Strategic guidance and market insight tailored to each client's financial goals, risk tolerance, and investment horizon.",
//       "Customized Credit Card Solutions — Premium credit card programs designed to complement the lifestyles of internationally mobile clients, offering global acceptance, customized credit limits, enhanced security features, and dedicated support. Selected programs may also provide exclusive travel, lifestyle, and concierge-related benefits.",
//       "Specialized Client Services — Access to bespoke solutions and tailored financial arrangements developed in response to unique circumstances, opportunities, and evolving client requirements.",
//     ],
//     note: "Bespoke solutions. Trusted relationships. Enduring stewardship.",
//   },
//   {
//     id: "philanthropy",
//     index: "11",
//     title: "Philanthropy & Community Impact",
//     sub: "Investing in Communities. Creating Lasting Change.",
//     body: "At Savoy Bank & Trust, we believe that true wealth extends beyond financial success. It carries a responsibility to contribute positively to the communities we serve and to help create opportunities for future generations. Our commitment to philanthropy reflects the values that guide our institution—stewardship, integrity, compassion, and long-term thinking. Through strategic charitable initiatives, community partnerships, and support for meaningful causes, we seek to make a lasting and measurable impact. We recognize that philanthropy is often an important component of a family's legacy. Savoy Bank & Trust works with clients and their advisors to support charitable giving strategies that reflect their values, priorities, and long-term vision. Whether through direct charitable contributions, structured philanthropic vehicles, or multi-generational giving initiatives, we are committed to helping clients create meaningful and enduring impact.",
//     bullets: [
//       "Education and Youth Development — Supporting programs that expand access to education, leadership development, financial literacy, and opportunities for young people to reach their full potential.",
//       "Community Development — Contributing to initiatives that promote economic empowerment, social well-being, and sustainable community growth.",
//       "Arts, Culture, and Heritage — Encouraging the preservation of cultural heritage and the advancement of artistic and creative endeavors that enrich society.",
//       "Environmental Stewardship — Promoting responsible environmental practices and supporting initiatives that help protect and sustain natural resources for future generations.",
//     ],
//     note: "Building wealth with purpose. Supporting communities with commitment. Creating legacies that extend beyond generations.",
//   },
// ];

// function useInView(threshold = 0.1) {
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

// const fadeUp = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateY(0)" : "translateY(28px)",
//   transition: `opacity 0.85s ease ${d}, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${d}`,
// });

// function ServiceCard({ service, index, onOpen }) {
//   const [ref, inView] = useInView(0.08);

//   return (
//     <div
//       id={service.id}
//       ref={ref}
//       className="service-card"
//       style={fadeUp(inView, `${0.05 + (index % 3) * 0.08}s`)}
//       onClick={() => onOpen(service)}
//     >
//       <span className="service-card-ghost" style={{ fontFamily: fontHeading }}>{service.index}</span>

//       <span
//         className="service-card-index"
//         style={{ fontFamily: fontLabel, fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase" }}
//       >
//         {service.index}
//       </span>

//       <h3
//         className="service-card-title"
//         style={{ fontFamily: fontHeading, fontWeight: 500, letterSpacing: "0.5px" }}
//       >
//         {service.title}
//       </h3>

//       <p
//         className="service-card-sub"
//         style={{ fontFamily: fontLabel, fontWeight: 400, letterSpacing: "3px", textTransform: "uppercase" }}
//       >
//         {service.sub}
//       </p>

//       <hr className="service-card-rule" />

//       {/* Small amount shown on the card itself */}
//       <p className="service-card-teaser" style={{ fontFamily: fontBody, fontWeight: 300 }}>
//         {service.note}
//       </p>

//       {/* Text label + plus button opens the full content in a centered modal */}
//       <div className="service-toggle-row">
//         <span
//           className="service-card-cta"
//           style={{ fontFamily: fontLabel, fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase" }}
//         >
//           View Details
//         </span>
//         <button
//           type="button"
//           aria-label={`View details for ${service.title}`}
//           className="service-toggle"
//           onClick={(e) => { e.stopPropagation(); onOpen(service); }}
//         />
//       </div>
//     </div>
//   );
// }

// function ServiceModal({ service, onClose }) {
//   useEffect(() => {
//     const onKey = (e) => { if (e.key === "Escape") onClose(); };
//     window.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   if (!service) return null;

//   return (
//     <div className="sv-modal-backdrop" onClick={onClose}>
//       <div className="sv-modal" onClick={(e) => e.stopPropagation()}>
//         <span className="sv-modal-ghost" style={{ fontFamily: fontHeading }}>{service.index}</span>
//         <button type="button" aria-label="Close" className="sv-modal-close" onClick={onClose} />

//         <p
//           className="sv-modal-index"
//           style={{ fontFamily: fontLabel, fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase" }}
//         >
//           {service.index}
//         </p>

//         <h3
//           className="sv-modal-title"
//           style={{ fontFamily: fontHeading, fontWeight: 500, letterSpacing: "0.5px" }}
//         >
//           {service.title}
//         </h3>

//         <p
//           className="sv-modal-sub"
//           style={{ fontFamily: fontLabel, fontWeight: 400, letterSpacing: "3px", textTransform: "uppercase" }}
//         >
//           {service.sub}
//         </p>

//         <hr className="sv-modal-rule" />

//         {service.body && (
//           <p className="sv-modal-body" style={{ fontFamily: fontBody, fontWeight: 400 }}>
//             {service.body}
//           </p>
//         )}

//         <ul className="sv-modal-bullets">
//           {service.bullets.map((b, j) => (
//             <li key={j} style={{ fontFamily: fontBody, fontWeight: 300 }}>
//               <span>—</span>
//               <span>{b}</span>
//             </li>
//           ))}
//         </ul>

//         {service.note && (
//           <p className="sv-modal-note" style={{ fontFamily: fontBody, fontWeight: 300 }}>
//             {service.note}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function ServicesPage() {
//   const [heroRef, heroInView] = useInView(0.05);
//   const [activeService, setActiveService] = useState(null);

//   useEffect(() => {
//     const hash = window.location.hash;
//     if (!hash) return;
//     const id = hash.replace("#", "");
//     const attempt = (tries = 0) => {
//       const el = document.getElementById(id);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//       } else if (tries < 10) {
//         setTimeout(() => attempt(tries + 1), 80);
//       }
//     };
//     setTimeout(() => attempt(), 200);
//   }, []);

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="sv-services-section min-h-screen">
//         <div className="sv-services-pattern" />
//         <div className="sv-services-vignette" />

//         <div className="sv-services-inner">

//           {/* ── HERO ── */}
//           <section ref={heroRef} className="relative pt-40 md:pt-67 pb-6">
//             <h1
//               style={{
//                 ...fadeUp(heroInView, "0.15s"),
//                 fontFamily: fontHeading,
//                 fontWeight: 500,
//                 letterSpacing: "0.5px",
//                 fontSize: "clamp(3.2rem,7vw,6.5rem)",
//                 lineHeight: 0.9,
//               }}
//               className="text-white"
//             >
//               Services
//               <br />
//               <span className="block w-10 h-px bg-white mt-8" />
//             </h1>
//           </section>

//           {/* ── SERVICES GRID ── */}
//           <section className="services-grid">
//             {services.map((service, i) => (
//               <ServiceCard
//                 key={i}
//                 service={service}
//                 index={i}
//                 onOpen={setActiveService}
//               />
//             ))}
//           </section>

//         </div>
//       </main>

//       <ServiceModal service={activeService} onClose={() => setActiveService(null)} />

//       <BrandFooterSection />
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// // ── SVG 4-pointed star pattern — same coded pattern as the Services teaser ──
// const STAR_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'>
//   <path d='M26 4 C26 4 24 18 4 26 C4 26 24 34 26 48 C26 48 28 34 48 26 C48 26 28 18 26 4 Z'
//     fill='none' stroke='rgba(130,165,200,0.13)' stroke-width='0.6'/>
// </svg>`;
// const STAR_URL = `url("data:image/svg+xml,${encodeURIComponent(STAR_SVG)}")`;

// const STAR_SVG_2 = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'>
//   <path d='M26 10 C26 10 24.5 20 10 26 C10 26 24.5 32 26 42 C26 42 27.5 32 42 26 C42 26 27.5 20 26 10 Z'
//     fill='none' stroke='rgba(100,140,180,0.06)' stroke-width='0.5'/>
// </svg>`;
// const STAR_URL_2 = `url("data:image/svg+xml,${encodeURIComponent(STAR_SVG_2)}")`;

// /* ── Font tokens — inline, used directly on elements via style={} ── */
// const fontHeading = "'Cormorant Garamond', Georgia, serif"; // headings / titles
// const fontBody = "'Inter', system-ui, sans-serif";          // paragraphs / bullets / notes
// const fontLabel = "'Montserrat', system-ui, sans-serif";    // small uppercase subtitles/labels

// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Inter:wght@300;400;500&family=Montserrat:wght@400;500&display=swap');

//   html { scroll-behavior: smooth; }

//   @keyframes sv-drift {
//     0%   { background-position: 0 0, 26px 26px; }
//     100% { background-position: 52px 52px, 78px 78px; }
//   }
//   @keyframes sv-modal-in {
//     0%   { opacity: 0; transform: translateY(18px) scale(0.98); }
//     100% { opacity: 1; transform: translateY(0) scale(1); }
//   }
//   @keyframes sv-backdrop-in {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
//   }

//   .mobile-nav {
//     position: fixed; inset: 0; background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//     transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//   }
//   .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//   .mobile-nav a {
//     color: #fff;
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

//   /* ── Section wrapper carrying the coded star pattern + vignette ── */
//   .sv-services-section {
//     position: relative;
//     background-color: #031629;
//     overflow: hidden;
//     color: #fff;
//   }
//   .sv-services-pattern {
//     position: absolute;
//     inset: 0;
//     pointer-events: none;
//     z-index: 0;
//     background-size: 52px 52px, 52px 52px;
//     background-position: 0 0, 26px 26px;
//     animation: sv-drift 60s linear infinite;
//   }
//   .sv-services-vignette {
//     position: absolute;
//     inset: 0;
//     pointer-events: none;
//     z-index: 1;
//   }
//   .sv-services-inner {
//     position: relative;
//     z-index: 2;
//     width: 100%;
//     padding: 4vh 4vw 12vh 4vw;
//   }

//   /* ── Services grid — every card is the same fixed size, always ── */
//   .services-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));
//     gap: 1.75rem;
//     padding-top: 2.5rem;
//   }

//   .service-card {
//     scroll-margin-top: 120px;
//     position: relative;
//     // height: 320px;
//     background: #04182c;
//     border: 1px solid rgba(255,255,255,0.08);
//     display: flex;
//     flex-direction: column;
//     padding: 2.1rem 1.9rem 1.6rem;
//     overflow: hidden;
//     cursor: pointer;
//     transition: border-color 0.35s ease, background 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
//   }
//   .service-card:hover {
//     border-color: rgba(200,218,235,0.5);
//     background: #051c33;
//     transform: translateY(-3px);
//     box-shadow: 0 16px 34px rgba(0,0,0,0.35);
//   }

//   /* Ghost watermark number, faint, behind the content */
//   .service-card-ghost {
//     position: absolute;
//     right: 1.2rem;
//     top: 0.6rem;
//     font-size: clamp(3.2rem, 5vw, 4.6rem);
//     font-weight: 300;
//     font-style: italic;
//     color: rgba(255,255,255,0.04);
//     line-height: 1;
//     letter-spacing: -0.02em;
//     pointer-events: none;
//     user-select: none;
//     z-index: 0;
//     transition: color 0.4s;
//   }
//   .service-card:hover .service-card-ghost { color: rgba(255,255,255,0.07); }

//   .service-card-index {
//     font-size: clamp(0.68rem, 0.8vw, 0.76rem);
//     color: rgba(255,255,255,0.28);
//     position: relative;
//     z-index: 1;
//     margin-bottom: 1.1rem;
//   }

//   .service-card-title {
//     font-size: clamp(1.1rem, 1.5vw, 1.35rem);
//     color: rgba(255,255,255,0.92);
//     line-height: 1.25;
//     position: relative;
//     z-index: 1;
//     margin: 0 0 0.55rem;
//   }

//   .service-card-sub {
//     font-size: 0.68rem;
//     color: rgba(180,200,220,0.5);
//     position: relative;
//     z-index: 1;
//     margin: 0 0 1.3rem;
//   }

//   .service-card-rule {
//     width: 32px;
//     height: 1px;
//     background: rgba(255,255,255,0.2);
//     border: none;
//     margin: 0 0 1.2rem;
//     position: relative;
//     z-index: 1;
//   }

//   .service-card-teaser {
//     font-size: 0.82rem;
//     // font-style: italic;
//     line-height: 1.55;
//     color: rgba(200,212,224,0.55);
//     position: relative;
//     z-index: 1;
//     flex: 1;
//     display: -webkit-box;
//     -webkit-line-clamp: 3;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//   }

//   /* ── CTA row — text label + circle, centered below the content ── */
//   .service-toggle-row {
//     display: flex;
//     align-items: right;
//     justify-content: right;
//     gap: 0.7rem;
//     padding-top: 1rem;
//     position: relative;
//     z-index: 1;
//   }
//   .service-card-cta {
//     font-size: 0.66rem;
//     color: rgba(180,200,220,0.5);
//     transition: color 0.3s ease, letter-spacing 0.3s ease;
//   }
//   .service-card:hover .service-card-cta {
//     color: rgba(225,238,250,0.95);
//     letter-spacing: 0.22em;
//   }
//   .service-toggle {
//     width: 34px;
//     height: 34px;
//     border-radius: 50%;
//     border: 1px solid rgba(255,255,255,0.22);
//     background: rgba(255,255,255,0.02);
//     position: relative;
//     cursor: pointer;
//     flex-shrink: 0;
//     transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
//   }
//   .service-card:hover .service-toggle,
//   .service-toggle:hover {
//     border-color: rgba(200,218,235,0.7);
//     background: rgba(255,255,255,0.06);
//     transform: scale(1.08);
//   }
//   .service-toggle::before,
//   .service-toggle::after {
//     content: "";
//     position: absolute;
//     background: rgba(220,230,240,0.85);
//     top: 50%; left: 50%;
//     transform: translate(-50%,-50%);
//   }
//   .service-toggle::before { width: 13px; height: 1.5px; }
//   .service-toggle::after   { width: 1.5px; height: 13px; }

//   /* ── MODAL ── */
//   .sv-modal-backdrop {
//     position: fixed;
//     inset: 0;
//     z-index: 200;
//     background: rgba(2,12,23,0.78);
//     backdrop-filter: blur(3px);
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
//     padding: 4vh 5vw;
//     overflow-y: auto;
//     animation: sv-backdrop-in 0.3s ease;
//   }

//   .sv-modal {
//     position: relative;
//     width: 100%;
//     max-width: min(92vw, 700px);
//     margin: auto;
//     background: #04182c;
//     border: 1px solid rgba(255,255,255,0.12);
//     box-shadow: 0 30px 80px rgba(0,0,0,0.6);
//     padding: 1.9rem 2.1rem 1.7rem;
//     color: #fff;
//     animation: sv-modal-in 0.35s cubic-bezier(0.16,1,0.3,1);
//   }

//   .sv-modal-ghost {
//     position: absolute;
//     right: 1.2rem;
//     top: 0.8rem;
//     font-size: clamp(3.2rem, 6vw, 4.6rem);
//     font-weight: 300;
//     font-style: italic;
//     color: rgba(255,255,255,0.04);
//     line-height: 1;
//     pointer-events: none;
//     user-select: none;
//   }

//   .sv-modal-close {
//     position: absolute;
//     top: 1.1rem;
//     right: 1.2rem;
//     width: 32px;
//     height: 32px;
//     border-radius: 50%;
//     border: 1px solid rgba(255,255,255,0.22);
//     background: rgba(255,255,255,0.02);
//     cursor: pointer;
//     z-index: 2;
//     transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
//   }
//   .sv-modal-close:hover {
//     border-color: rgba(200,218,235,0.7);
//     background: rgba(255,255,255,0.06);
//     transform: scale(1.08);
//   }
//   .sv-modal-close::before,
//   .sv-modal-close::after {
//     content: "";
//     position: absolute;
//     width: 13px;
//     height: 1.5px;
//     background: rgba(220,230,240,0.85);
//     top: 50%; left: 50%;
//     transform-origin: center;
//   }
//   .sv-modal-close::before { transform: translate(-50%,-50%) rotate(45deg); }
//   .sv-modal-close::after  { transform: translate(-50%,-50%) rotate(-45deg); }

//   .sv-modal-index {
//     font-size: 0.72rem;
//     color: rgba(255,255,255,0.32);
//     margin-bottom: 0.85rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-title {
//     font-size: clamp(1.15rem, 2vw, 1.45rem);
//     color: #fff;
//     line-height: 1.12;
//     margin: 0 0 0.4rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-sub {
//     font-size: 0.62rem;
//     color: rgba(180,200,220,0.55);
//     margin: 0 0 0.9rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-rule {
//     width: 32px;
//     height: 1px;
//     background: rgba(255,255,255,0.22);
//     border: none;
//     margin: 0 0 1rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-body {
//     font-size: 0.72rem;
//     line-height: 1.42;
//     color: rgba(210,220,230,0.75);
//     text-align: justify;
//     text-justify: inter-word;
//     word-spacing: -2px;
//     margin: 0 0 0.9rem;
//     position: relative;
//     z-index: 1;
//   }

//   .sv-modal-bullets {
//     margin: 0 0 0.9rem;
//     padding: 0;
//     padding-top: 1.0rem;
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
//     gap: 0.45rem 1.1rem;
//     position: relative;
//     z-index: 1;
//   }
//   .sv-modal-bullets li {
//     font-size: 0.7rem;
//     line-height: 1.3;
//     color: rgba(195,208,222,0.68);
//     list-style: none;
//     display: flex;
//     align-items: baseline;
//     gap: 0.5rem;
//   }
//   .sv-modal-bullets li span:first-child {
//     color: rgba(180,200,220,0.32);
//     flex-shrink: 0;
//   }

//   .sv-modal-note {
//     font-size: 0.68rem;
//     // font-style: italic;
//     line-height: 1.25;
//     color: rgba(170,192,210,0.55);
//     border-top: 1px solid rgba(255,255,255,0.08);
//     padding-top: 0.8rem;
//     margin: 0;
//     position: relative;
//     z-index: 1;
//   }

//   @media (max-width: 640px) {
//     .sv-services-inner { padding: 6vh 5vw 8vh; }
//     .sv-modal { padding: 1.6rem 1.3rem 1.5rem; }
//     .sv-modal-bullets { grid-template-columns: 1fr; }

//     .sv-modal-body {
//       text-align: left;
//       text-justify: auto;
//       word-spacing: normal;
//     }
//   }
// `;

// const services = [
//   {
//     id: "banking",
//     index: "01",
//     title: "Traditional Banking Services",
//     sub: "Banking That Honors Legacy",
//     body: "At Savoy Bank & Trust, we understand that wealth is built over a lifetime and often intended to endure for generations. Our traditional banking services are designed to provide security, flexibility, and personalized attention, supporting the financial needs of individuals, families, and businesses across jurisdictions. Whether managing day-to-day liquidity, safeguarding capital, or facilitating international transactions, we deliver solutions tailored to the unique requirements of each client relationship. Every service is delivered with an uncompromising commitment to regulatory excellence, confidentiality, and integrity—principles that have long defined the private banking tradition and continue to guide our relationships today.",
//     bullets: [
//       "Multi-Currency Current Accounts — Seamless banking across major international currencies, designed to support global lifestyles and cross-border financial activity.",
//       "Fixed-Term and Fiduciary Deposits — Capital preservation solutions offering security, stability, and competitive returns within a disciplined risk framework.",
//       "Dedicated Relationship Management — Personalized service delivered by experienced professionals who understand your financial objectives and value discretion, responsiveness, and continuity.",
//       "International Banking Support — Efficient execution of domestic and cross-border transactions through a trusted international banking platform.",
//     ],
//     note: "Bank with confidence. Build with purpose. Preserve for generations.",
//   },
//   {
//     id: "platform",
//     index: "02",
//     title: "Secure Online Banking Platform",
//     sub: "Secure. Seamless. Global.",
//     body: "Access your wealth with confidence wherever life and business take you. Savoy Bank & Trust's secure online banking platform provides a unified digital experience, offering convenient access to your banking relationships, portfolios, and account information through a highly secure environment. Designed for internationally mobile clients, families, and institutions, our platform combines sophisticated functionality with the highest standards of security, privacy, and reliability. Supported by advanced security protocols and a commitment to operational excellence, our digital banking platform delivers the convenience of modern technology without compromising the discretion and personalized service that define the Savoy banking experience.",
//     bullets: [
//       "Secure Digital Access — Convenient, encrypted access to your accounts through a robust authentication framework designed to protect your financial information.",
//       "Secure Client Messaging — Communicate directly with your relationship team through a confidential messaging channel, ensuring timely and secure interactions.",
//       "Portfolio Visibility and Reporting — View portfolio holdings, account balances, positions, and transaction activity through a consolidated dashboard that provides a clear picture of your financial affairs.",
//       "Global Accessibility — Manage your banking relationships anytime, from virtually anywhere, through a platform built to support today's international lifestyles and cross-border needs.",
//     ],
//     note: "Secure access. Informed decisions. Global connectivity.",
//   },
//   {
//     id: "custody",
//     index: "03",
//     title: "Global Custody & Execution",
//     sub: "Institutional-Grade Access and Protection",
//     body: "Access a world of investment opportunities through Savoy Bank & Trust's comprehensive custody and execution platform. Designed to meet the sophisticated needs of high-net-worth individuals, family offices, and institutional investors, our services provide secure asset safekeeping, efficient trade execution, and access to a broad range of global investment solutions. Through established relationships with leading custodians, broker-dealers, and financial institutions, we help clients navigate global markets with confidence while maintaining the highest standards of security, transparency, and operational excellence. Our custody and execution services are designed to provide seamless access to global markets while ensuring that client assets remain protected within a trusted and regulated framework.",
//     bullets: [
//       "Global Equities and Fixed Income — Access to listed equities, sovereign and corporate bonds, and other traditional investment instruments across major international markets.",
//       "Mutual Funds and Alternative Investments — A broad selection of mutual funds, hedge funds, and alternative investment solutions designed to support diverse investment objectives and risk profiles.",
//       "Structured Investment Solutions — Customized structured products tailored to specific investment goals, market views, risk tolerances, and wealth preservation strategies.",
//       "Institutional-Quality Trade Execution — Efficient execution services supported by established brokerage networks, market expertise, and rigorous operational controls.",
//       "Safekeeping and Asset Protection — Secure custody arrangements through top-tier global custodians, providing robust asset protection, reporting transparency, and operational reliability.",
//     ],
//     note: "Global reach. Secure custody. Disciplined execution.",
//   },
//   {
//     id: "money",
//     index: "04",
//     title: "Money Market Solutions",
//     sub: "Optimize Liquidity. Preserve Capital.",
//     body: "Effective liquidity management is an essential component of long-term wealth preservation. At Savoy Bank & Trust, we offer tailored money market solutions designed to help clients maintain financial flexibility, safeguard capital, and enhance cash returns within a prudent risk framework. Whether managing short-term liquidity requirements or strategically allocating excess cash reserves, our solutions are structured to align with your financial objectives, liquidity needs, and overall wealth strategy. Supported by rigorous risk management, strong banking relationships, and a commitment to preserving client capital, our money market solutions help ensure that liquidity remains both productive and readily available when needed.",
//     bullets: [
//       "Current Accounts with Daily Liquidity — Flexible cash management solutions providing immediate access to funds while supporting your day-to-day banking and international transaction requirements.",
//       "Fixed-Term Deposits — Competitive, market-driven deposit options designed to provide capital stability and predictable returns across a range of maturities.",
//       "Fiduciary Deposits Through Global Banking Partners — Access to carefully selected international banking institutions, allowing clients to diversify cash holdings while benefiting from attractive deposit opportunities and enhanced flexibility.",
//       "Customized Liquidity Strategies — Cash management solutions tailored to individual, family office, and institutional requirements, balancing accessibility, security, and return objectives.",
//     ],
//     note: "Maintain flexibility, protect capital and put liquidity to work.",
//   },
//   {
//     id: "fx",
//     index: "05",
//     title: "Foreign Exchange",
//     sub: "Currency Strategies with Precision",
//     body: "In an increasingly interconnected world, effective currency management is essential for preserving wealth, facilitating international transactions, and managing global investment exposures. Savoy Bank & Trust provides tailored foreign exchange solutions designed to meet the complex needs of internationally minded individuals, family offices, businesses, and institutional clients. Combining competitive market access with personalized service, we help clients execute currency transactions efficiently while navigating exchange rate fluctuations with confidence. All foreign exchange transactions are supported by live market pricing, diligent execution, and the high-touch service that defines the Savoy client experience. Our objective is to help clients manage currency exposure effectively while ensuring seamless access to global opportunities.",
//     bullets: [
//       "Spot Foreign Exchange — Timely currency transactions with same-day settlement, enabling efficient execution for payments, investments, and liquidity requirements across major global currencies.",
//       "Forward Contracts — Forward exchange solutions designed to help mitigate currency risk by locking in exchange rates for future transactions, providing greater certainty in an evolving market environment.",
//       "Foreign Exchange Swaps — Flexible swap arrangements that support liquidity management, settlement timing requirements, and more sophisticated multi-leg currency strategies.",
//       "Major and Cross-Currency Transactions — Execution capabilities across a broad range of currency pairs to support global investment activities, international business operations, and cross-border wealth management needs.",
//       "Dedicated Market Support — Access to experienced professionals who provide market insight, transaction support, and responsive service tailored to your specific objectives.",
//     ],
//     note: "Global markets. Thoughtful execution. Confident currency management.",
//   },
//   {
//     id: "otc",
//     index: "06",
//     title: "OTC & Derivative Solutions",
//     sub: "Control Risk. Capture Opportunity.",
//     body: "Sophisticated investors often require solutions that extend beyond traditional investment instruments. Savoy Bank & Trust provides access to bespoke over-the-counter (OTC) and structured investment solutions designed to help clients manage risk, enhance portfolio efficiency, and pursue specific investment objectives. Working closely with leading financial counterparties and product specialists, we assist clients in implementing customized strategies tailored to their market outlook, liquidity requirements, risk tolerance, and wealth preservation goals. Our OTC and structured investment capabilities are designed for clients seeking greater portfolio diversification, enhanced yield opportunities, tailored market exposure, or downside protection. Every solution is developed with careful consideration of the client's overall investment strategy and risk profile.",
//     bullets: [
//       "Bespoke OTC Derivative Solutions — Customized derivative structures designed to address specific portfolio, hedging, or investment requirements across multiple asset classes.",
//       "Equity, Interest Rate, and Foreign Exchange Options — Flexible solutions that can be utilized to manage market exposures, protect capital, or express strategic investment views within defined risk parameters.",
//       "Capital-Protected Notes — Structured solutions designed to provide exposure to selected markets or investment themes while incorporating varying degrees of capital preservation.",
//       "Structured Investment Products — Tailored investment strategies that combine traditional financial instruments with derivative features to achieve targeted risk-return outcomes.",
//       "Portfolio Risk Management Solutions — Strategies intended to help mitigate market volatility, manage currency and interest rate exposures, and support long-term wealth preservation objectives.",
//     ],
//     note: "Manage risk with precision. Access opportunities with purpose. Invest with confidence.",
//   },
//   {
//     id: "payments",
//     index: "07",
//     title: "Payments & Transfers",
//     sub: "Global Transfers, Handled with Precision",
//     body: "In today's interconnected financial landscape, the timely and secure movement of funds is essential. Savoy Bank & Trust provides comprehensive payment and transfer solutions designed to support the needs of internationally active individuals, families, businesses, and institutions. Leveraging established global banking networks and robust operational controls, we facilitate the efficient execution of domestic and cross-border transactions while maintaining the highest standards of security, accuracy, and client service. Every transaction benefits from rigorous compliance oversight, robust security protocols, and the personalized attention that distinguishes the Savoy banking experience.",
//     bullets: [
//       "Global Payment Network Access — Connectivity through SWIFT, SEPA, and other recognized banking networks, enabling reliable fund transfers across major financial centers worldwide.",
//       "Domestic and International Wire Transfers — Efficient processing of local and cross-border payments with dedicated support to ensure smooth transaction execution.",
//       "Multi-Currency Payment Solutions — Send and receive funds in multiple currencies, supporting international investments, business activities, and cross-border family wealth needs.",
//       "Secure Transaction Initiation and Monitoring — Advanced digital capabilities allow clients to initiate, authorize, and track payment activity through a secure banking environment.",
//       "Dedicated Client Support — Experienced banking professionals available to assist with time-sensitive transactions, payment inquiries, and specialized transfer requirements.",
//     ],
//     note: "Move capital securely. Transfer funds efficiently. Bank globally with confidence.",
//   },
//   {
//     id: "metals",
//     index: "08",
//     title: "Precious Metals Trading & Custody",
//     sub: "A Tangible Hedge in a Volatile World",
//     body: "For centuries, precious metals have played a vital role in preserving wealth and providing stability during periods of economic uncertainty. At Savoy Bank & Trust, we offer clients access to precious metals solutions designed to support portfolio diversification, capital preservation, and long-term wealth protection. Whether seeking strategic exposure to hard assets or secure ownership of physical bullion, our solutions combine institutional-grade execution with trusted custody arrangements and personalized service. As part of a comprehensive wealth strategy, precious metals can serve as a valuable complement to traditional financial assets, providing diversification benefits and a tangible store of value across market cycles.",
//     bullets: [
//       "Access to Major Precious Metals — Investment solutions across gold, silver, platinum, and palladium, providing exposure to some of the world's most established stores of value.",
//       "Allocated and Unallocated Holdings — Flexible ownership structures that allow clients to select solutions aligned with their investment objectives, liquidity needs, and custody preferences.",
//       "Physical and Paper-Based Exposure — Opportunities to gain exposure through physical bullion holdings as well as approved investment structures linked to precious metals markets.",
//       "Secure Custody and Vaulting — Safekeeping services through reputable international vault providers, supported by rigorous security standards and independent custody arrangements.",
//       "Portfolio Diversification Strategies — Guidance on incorporating precious metals within a broader wealth management framework to help manage risk and enhance portfolio resilience.",
//     ],
//     note: "Preserve purchasing power. Diversify strategically. Protect wealth with confidence.",
//   },
//   {
//     id: "credit",
//     index: "09",
//     title: "Credit Solutions & Securities-Based Lending",
//     sub: "Liquidity Without Liquidation",
//     body: "Significant wealth often creates significant opportunities—but accessing liquidity should not require disrupting a carefully constructed investment strategy. Savoy Bank & Trust offers tailored credit solutions that enable clients to unlock the value of eligible assets while maintaining their long-term investment positions. Our securities-based lending capabilities provide flexible access to capital for a range of personal, business, and investment needs, delivered through a streamlined process and supported by experienced banking professionals. Whether funding new investments, financing business ventures, supporting real estate acquisitions, or addressing short-term liquidity needs, our credit solutions provide a flexible and capital-efficient alternative to the sale of investment assets. Every lending relationship is structured with careful attention to risk management, portfolio composition, and the long-term interests of our clients.",
//     bullets: [
//       "Loans Secured by Publicly Traded Securities — Leverage eligible equity portfolios to access liquidity while preserving market exposure and investment continuity.",
//       "Financing Against Investment-Grade Bond Portfolios — Utilize high-quality fixed-income holdings as collateral for customized lending solutions designed to support capital efficiency.",
//       "Structured Asset-Backed Credit Facilities — Financing arrangements secured by qualifying structured financial instruments and diversified investment portfolios, subject to applicable eligibility criteria.",
//       "Tailored Lending Structures — Customized terms designed to align with individual liquidity requirements, investment objectives, and broader wealth planning considerations.",
//       "Responsive Credit Decision-Making — Efficient execution and dedicated client support aimed at delivering timely access to capital when opportunities or obligations arise.",
//     ],
//     note: "Unlock liquidity. Preserve your strategy. Put your wealth to work.",
//   },
//   {
//     id: "other",
//     index: "10",
//     title: "Other Services",
//     sub: "Bespoke Solutions for Complex Wealth Needs",
//     body: "At Savoy Bank & Trust, we recognize that sophisticated wealth requires more than traditional banking services. Our clients often require specialized solutions that address complex financial structures, global lifestyles, succession objectives, and evolving investment needs. Drawing on our private banking heritage and relationship-driven approach, we provide a range of complementary services designed to support and enhance every aspect of our clients' financial affairs. At Savoy Bank & Trust, exceptional private banking extends beyond products and transactions. Through personalized service, thoughtful advice, and customized solutions, we help our clients navigate complexity, preserve wealth, and build enduring legacies.",
//     bullets: [
//       "Trust and Fiduciary Services — Customized trust structures and fiduciary arrangements designed to support wealth preservation, succession planning, asset protection, and multi-generational legacy objectives.",
//       "Corporate and Wealth Structuring Solutions — Tailored international wealth and corporate structures developed to meet the unique needs of individuals, families, family offices, and business owners.",
//       "Family Office Support — Integrated banking, reporting, administrative, and coordination services that help family offices manage complex financial affairs efficiently and effectively.",
//       "Estate and Succession Planning Coordination — Collaboration with trusted legal, tax, and professional advisors to facilitate the seamless transfer of wealth across generations while preserving long-term family objectives.",
//       "Investment Advisory Services — Strategic guidance and market insight tailored to each client's financial goals, risk tolerance, and investment horizon.",
//       "Customized Credit Card Solutions — Premium credit card programs designed to complement the lifestyles of internationally mobile clients, offering global acceptance, customized credit limits, enhanced security features, and dedicated support. Selected programs may also provide exclusive travel, lifestyle, and concierge-related benefits.",
//       "Specialized Client Services — Access to bespoke solutions and tailored financial arrangements developed in response to unique circumstances, opportunities, and evolving client requirements.",
//     ],
//     note: "Bespoke solutions. Trusted relationships. Enduring stewardship.",
//   },
//   {
//     id: "philanthropy",
//     index: "11",
//     title: "Philanthropy & Community Impact",
//     sub: "Investing in Communities. Creating Lasting Change.",
//     body: "At Savoy Bank & Trust, we believe that true wealth extends beyond financial success. It carries a responsibility to contribute positively to the communities we serve and to help create opportunities for future generations. Our commitment to philanthropy reflects the values that guide our institution—stewardship, integrity, compassion, and long-term thinking. Through strategic charitable initiatives, community partnerships, and support for meaningful causes, we seek to make a lasting and measurable impact. We recognize that philanthropy is often an important component of a family's legacy. Savoy Bank & Trust works with clients and their advisors to support charitable giving strategies that reflect their values, priorities, and long-term vision. Whether through direct charitable contributions, structured philanthropic vehicles, or multi-generational giving initiatives, we are committed to helping clients create meaningful and enduring impact.",
//     bullets: [
//       "Education and Youth Development — Supporting programs that expand access to education, leadership development, financial literacy, and opportunities for young people to reach their full potential.",
//       "Community Development — Contributing to initiatives that promote economic empowerment, social well-being, and sustainable community growth.",
//       "Arts, Culture, and Heritage — Encouraging the preservation of cultural heritage and the advancement of artistic and creative endeavors that enrich society.",
//       "Environmental Stewardship — Promoting responsible environmental practices and supporting initiatives that help protect and sustain natural resources for future generations.",
//     ],
//     note: "Building wealth with purpose. Supporting communities with commitment. Creating legacies that extend beyond generations.",
//   },
// ];

// function useInView(threshold = 0.1) {
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

// const fadeUp = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateY(0)" : "translateY(28px)",
//   transition: `opacity 0.85s ease ${d}, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${d}`,
// });

// function ServiceCard({ service, index, onOpen }) {
//   const [ref, inView] = useInView(0.08);

//   return (
//     <div
//       id={service.id}
//       ref={ref}
//       className="service-card"
//       style={fadeUp(inView, `${0.05 + (index % 3) * 0.08}s`)}
//       onClick={() => onOpen(service)}
//     >
//       {/* <span className="service-card-ghost" style={{ fontFamily: fontHeading }}>{service.index}</span> */}

//       <span
//         className="service-card-index"
//         style={{ fontFamily: fontLabel, fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase" }}
//       >
//         {service.index}
//       </span>

//       <h3
//         className="service-card-title"
//         style={{ fontFamily: fontHeading, fontWeight: 500, letterSpacing: "0.5px" }}
//       >
//         {service.title}
//       </h3>

//       <p
//         className="service-card-sub"
//         style={{ fontFamily: fontLabel, fontWeight: 400, letterSpacing: "3px", textTransform: "uppercase" }}
//       >
//         {service.sub}
//       </p>

//       <hr className="service-card-rule" />

//       {/* Small amount shown on the card itself */}
//       <p className="service-card-teaser" style={{ fontFamily: fontBody, fontWeight: 300 }}>
//         {service.note}
//       </p>

//       {/* Text label + plus button opens the full content in a centered modal */}
//       <div className="service-toggle-row">
        
//         <button
//           type="button"
//           aria-label={`View details for ${service.title}`}
//           className="service-toggle"
//           onClick={(e) => { e.stopPropagation(); onOpen(service); }}
//         />
//       </div>
//     </div>
//   );
// }

// function ServiceModal({ service, onClose }) {
//   useEffect(() => {
//     const onKey = (e) => { if (e.key === "Escape") onClose(); };
//     window.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   if (!service) return null;

//   return (
//     <div className="sv-modal-backdrop" onClick={onClose}>
//       <div className="sv-modal" onClick={(e) => e.stopPropagation()}>
//         {/* <span className="sv-modal-ghost" style={{ fontFamily: fontHeading }}>{service.index}</span> */}
//         <button type="button" aria-label="Close" className="sv-modal-close" onClick={onClose} />

//         <p
//           className="sv-modal-index"
//           style={{ fontFamily: fontLabel, fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase" }}
//         >
//           {service.index}
//         </p>

//         <h3
//           className="sv-modal-title"
//           style={{ fontFamily: fontHeading, fontWeight: 500, letterSpacing: "0.5px" }}
//         >
//           {service.title}
//         </h3>

//         <p
//           className="sv-modal-sub"
//           style={{ fontFamily: fontLabel, fontWeight: 400, letterSpacing: "3px", textTransform: "uppercase" }}
//         >
//           {service.sub}
//         </p>

//         <hr className="sv-modal-rule" />

//         {service.body && (
//           <p className="sv-modal-body" style={{ fontFamily: fontBody, fontWeight: 400 }}>
//             {service.body}
//           </p>
//         )}

//         <ul className="sv-modal-bullets">
//           {service.bullets.map((b, j) => (
//             <li key={j} style={{ fontFamily: fontBody, fontWeight: 300 }}>
//               <span>—</span>
//               <span>{b}</span>
//             </li>
//           ))}
//         </ul>

//         {service.note && (
//           <p className="sv-modal-note" style={{ fontFamily: fontBody, fontWeight: 300 }}>
//             {service.note}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function ServicesPage() {
//   const [heroRef, heroInView] = useInView(0.05);
//   const [activeService, setActiveService] = useState(null);

//   useEffect(() => {
//     const hash = window.location.hash;
//     if (!hash) return;
//     const id = hash.replace("#", "");
//     const attempt = (tries = 0) => {
//       const el = document.getElementById(id);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//       } else if (tries < 10) {
//         setTimeout(() => attempt(tries + 1), 80);
//       }
//     };
//     setTimeout(() => attempt(), 200);
//   }, []);

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="sv-services-section min-h-screen">
//         <div className="sv-services-pattern" />
//         <div className="sv-services-vignette" />

//         <div className="sv-services-inner">

//           {/* ── HERO ── */}
//           <section ref={heroRef} className="relative pt-40 md:pt-67 pb-6">
//             <h1
//               style={{
//                 ...fadeUp(heroInView, "0.15s"),
//                 fontFamily: fontHeading,
//                 fontWeight: 500,
//                 letterSpacing: "0.5px",
//                 fontSize: "clamp(3.2rem,7vw,6.5rem)",
//                 lineHeight: 0.9,
//               }}
//               className="text-white"
//             >
//               Services
//               <br />
//               <span className="block w-10 h-px bg-white mt-8" />
//             </h1>
//           </section>

//           {/* ── SERVICES GRID ── */}
//           <section className="services-grid">
//             {services.map((service, i) => (
//               <ServiceCard
//                 key={i}
//                 service={service}
//                 index={i}
//                 onOpen={setActiveService}
//               />
//             ))}
//           </section>

//         </div>
//       </main>

//       <ServiceModal service={activeService} onClose={() => setActiveService(null)} />

//       <BrandFooterSection />
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import SavoyHeader from "@/components/SavoyHeader";
import BrandFooterSection from "@/components/Brandfootersection";

// ── SVG 4-pointed star pattern — same coded pattern as the Services teaser ──
const STAR_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'>
  <path d='M26 4 C26 4 24 18 4 26 C4 26 24 34 26 48 C26 48 28 34 48 26 C48 26 28 18 26 4 Z'
    fill='none' stroke='rgba(130,165,200,0.13)' stroke-width='0.6'/>
</svg>`;
const STAR_URL = `url("data:image/svg+xml,${encodeURIComponent(STAR_SVG)}")`;

const STAR_SVG_2 = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'>
  <path d='M26 10 C26 10 24.5 20 10 26 C10 26 24.5 32 26 42 C26 42 27.5 32 42 26 C42 26 27.5 20 26 10 Z'
    fill='none' stroke='rgba(100,140,180,0.06)' stroke-width='0.5'/>
</svg>`;
const STAR_URL_2 = `url("data:image/svg+xml,${encodeURIComponent(STAR_SVG_2)}")`;

/* ── Font tokens — inline, used directly on elements via style={} ── */
const fontHeading = "'Cormorant Garamond', Georgia, serif"; // headings / titles
const fontBody = "'Inter', system-ui, sans-serif";          // paragraphs / bullets / notes
const fontLabel = "'Montserrat', system-ui, sans-serif";    // small uppercase subtitles/labels

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Inter:wght@300;400;500&family=Montserrat:wght@400;500&display=swap');

  html { scroll-behavior: smooth; }

  @keyframes sv-drift {
    0%   { background-position: 0 0, 26px 26px; }
    100% { background-position: 52px 52px, 78px 78px; }
  }
  @keyframes sv-modal-in {
    0%   { opacity: 0; transform: translateY(18px) scale(0.98); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes sv-backdrop-in {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  .mobile-nav {
    position: fixed; inset: 0; background: rgba(var(--savoy-bg-rgb),0.97); z-index: 100;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
    transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
  }
  .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
  .mobile-nav a {
    color: #fff;
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

  /* ── Section wrapper carrying the coded star pattern + vignette ── */
  .sv-services-section {
    position: relative;
    background-color: #031629;
    overflow: hidden;
    color: #fff;
  }
  .sv-services-pattern {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background-size: 52px 52px, 52px 52px;
    background-position: 0 0, 26px 26px;
    animation: sv-drift 60s linear infinite;
  }
  .sv-services-vignette {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }
  .sv-services-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 4vh 4vw 12vh 4vw;
  }

  /* ── Services grid — every card is the same fixed size, always ── */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));
    gap: 1.75rem;
    padding-top: 2.5rem;
  }

  .service-card {
    scroll-margin-top: 120px;
    position: relative;
    // height: 320px;
    background: #04182c;
    border: 1px solid rgba(255,255,255,0.08);
    display: flex;
    flex-direction: column;
    padding: 2.1rem 1.9rem 1.6rem;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.35s ease, background 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
  }
  .service-card:hover {
    border-color: rgba(200,218,235,0.5);
    background: #051c33;
    transform: translateY(-3px);
    box-shadow: 0 16px 34px rgba(0,0,0,0.35);
  }

  /* Ghost watermark number, faint, behind the content */
  .service-card-ghost {
    position: absolute;
    right: 1.2rem;
    top: 0.6rem;
    font-size: clamp(3.2rem, 5vw, 4.6rem);
    font-weight: 300;
    font-style: italic;
    color: rgba(255,255,255,0.04);
    line-height: 1;
    letter-spacing: -0.02em;
    pointer-events: none;
    user-select: none;
    z-index: 0;
    transition: color 0.4s;
  }
  .service-card:hover .service-card-ghost { color: rgba(255,255,255,0.07); }

  .service-card-index {
    font-size: clamp(0.68rem, 0.8vw, 0.76rem);
    color: rgba(255,255,255,0.28);
    position: relative;
    z-index: 1;
    margin-bottom: 1.1rem;
  }

  .service-card-title {
    font-size: clamp(1.1rem, 1.5vw, 1.35rem);
    color: rgba(255,255,255,0.92);
    line-height: 1.25;
    position: relative;
    z-index: 1;
    margin: 0 0 0.55rem;
  }

  .service-card-sub {
    font-size: 0.68rem;
    color: rgba(180,200,220,0.5);
    position: relative;
    z-index: 1;
    margin: 0 0 1.3rem;
  }

  .service-card-rule {
    width: 32px;
    height: 1px;
    background: rgba(255,255,255,0.2);
    border: none;
    margin: 0 0 1.2rem;
    position: relative;
    z-index: 1;
  }

  .service-card-teaser {
    font-size: 0.82rem;
    // font-style: italic;
    line-height: 1.55;
    color: rgba(200,212,224,0.55);
    position: relative;
    z-index: 1;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* ── CTA row — text label + circle, centered below the content ── */
  .service-toggle-row {
    display: flex;
    align-items: right;
    justify-content: right;
    gap: 0.7rem;
    padding-top: 1rem;
    position: relative;
    z-index: 1;
  }
  .service-card-cta {
    font-size: 0.66rem;
    color: rgba(180,200,220,0.5);
    transition: color 0.3s ease, letter-spacing 0.3s ease;
  }
  .service-card:hover .service-card-cta {
    color: rgba(225,238,250,0.95);
    letter-spacing: 0.22em;
  }
  .service-toggle {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.22);
    background: rgba(255,255,255,0.02);
    position: relative;
    cursor: pointer;
    flex-shrink: 0;
    transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
  }
  .service-card:hover .service-toggle,
  .service-toggle:hover {
    border-color: rgba(200,218,235,0.7);
    background: rgba(255,255,255,0.06);
    transform: scale(1.08);
  }
  .service-toggle::before,
  .service-toggle::after {
    content: "";
    position: absolute;
    background: rgba(220,230,240,0.85);
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
  }
  .service-toggle::before { width: 13px; height: 1.5px; }
  .service-toggle::after   { width: 1.5px; height: 13px; }

  /* ── MODAL ── */
  .sv-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(2,12,23,0.78);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 5vh 5vw;
    overflow-y: auto;
    animation: sv-backdrop-in 0.3s ease;
  }

  /* Modal is now roomier (wider + more generous padding), scrolls internally
     when content is tall, and hides its scrollbar across browsers */
  .sv-modal {
    position: relative;
    width: 100%;
    max-width: min(92vw, 760px);
    max-height: 88vh;
    overflow-y: auto;
    margin: auto;
    background: #04182c;
    border: 1px solid rgba(255,255,255,0.12);
    box-shadow: 0 30px 80px rgba(0,0,0,0.6);
    padding: 2.8rem 3rem 2.6rem;
    color: #fff;
    animation: sv-modal-in 0.35s cubic-bezier(0.16,1,0.3,1);
    scrollbar-width: none;       /* Firefox */
    -ms-overflow-style: none;    /* IE/Edge legacy */
  }
  .sv-modal::-webkit-scrollbar {
    display: none;               /* Chrome/Safari/Edge */
  }

  .sv-modal-ghost {
    position: absolute;
    right: 1.2rem;
    top: 0.8rem;
    font-size: clamp(3.2rem, 6vw, 4.6rem);
    font-weight: 300;
    font-style: italic;
    color: rgba(255,255,255,0.04);
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  .sv-modal-close {
    position: absolute;
    top: 1.4rem;
    right: 1.5rem;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.22);
    background: rgba(255,255,255,0.02);
    cursor: pointer;
    z-index: 2;
    transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
  }
  .sv-modal-close:hover {
    border-color: rgba(200,218,235,0.7);
    background: rgba(255,255,255,0.06);
    transform: scale(1.08);
  }
  .sv-modal-close::before,
  .sv-modal-close::after {
    content: "";
    position: absolute;
    width: 13px;
    height: 1.5px;
    background: rgba(220,230,240,0.85);
    top: 50%; left: 50%;
    transform-origin: center;
  }
  .sv-modal-close::before { transform: translate(-50%,-50%) rotate(45deg); }
  .sv-modal-close::after  { transform: translate(-50%,-50%) rotate(-45deg); }

  .sv-modal-index {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.32);
    margin-bottom: 1.1rem;
    position: relative;
    z-index: 1;
  }

  .sv-modal-title {
    font-size: clamp(1.35rem, 2.4vw, 1.75rem);
    color: #fff;
    line-height: 1.16;
    margin: 0 0 0.55rem;
    position: relative;
    z-index: 1;
  }

  .sv-modal-sub {
    font-size: 0.72rem;
    color: rgba(180,200,220,0.55);
    margin: 0 0 1.2rem;
    position: relative;
    z-index: 1;
  }

  .sv-modal-rule {
    width: 36px;
    height: 1px;
    background: rgba(255,255,255,0.22);
    border: none;
    margin: 0 0 1.4rem;
    position: relative;
    z-index: 1;
  }

  .sv-modal-body {
    font-size: 0.77rem;
    line-height: 1.6;
    color: rgba(210,220,230,0.75);
    text-align: justify;
    text-justify: inter-word;
    word-spacing: -0.1em;
    margin: 0 0 1.3rem;
    position: relative;
    z-index: 1;
  }

  .sv-modal-bullets {
    margin: 0 0 1.2rem;
    padding: 0;
    padding-top: 0.7rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 0.65rem 1.4rem;
    position: relative;
    z-index: 1;
    text-align: justify;
    text-justify: inter-word;
    word-spacing: -0.09em;
    letter-spacing: -0.01em;
    hyphens: auto;
  }
  .sv-modal-bullets li {
    font-size: 0.75rem;
    line-height: 1.4;
    color: rgba(195,208,222,0.68);
    list-style: none;
    display: flex;
    align-items: baseline;
    gap: 0.55rem;
    padding-top: 1.0rem;
    
  }
  .sv-modal-bullets li span:first-child {
    color: rgba(180,200,220,0.32);
    flex-shrink: 0;
  }

  .sv-modal-note {
    font-size: 0.76rem;
    // font-style: italic;
    line-height: 1.35;
    color: rgba(170,192,210,0.55);
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 1rem;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 640px) {
    .sv-services-inner { padding: 6vh 5vw 8vh; }
    .sv-modal {
      padding: 2rem 1.6rem 1.9rem;
      max-height: 90vh;
    }
    .sv-modal-bullets { grid-template-columns: 1fr; }

    .sv-modal-body {
      text-align: left;
      text-justify: auto;
      word-spacing: normal;
    }
  }
`;

const services = [
  {
    id: "banking",
    index: "01",
    title: "Traditional Banking Services",
    sub: "Banking that honors legacy",
    body: "At savoy bank & trust, we understand that wealth is built over a lifetime and often intended to endure for generations. our traditional banking services are designed to provide security, flexibility, and personalized attention, supporting the financial needs of individuals, families, and businesses across jurisdictions. Whether managing day-to-day liquidity, safeguarding capital, or facilitating international transactions, we deliver solutions tailored to the unique requirements of each client relationship. every service is delivered with an uncompromising commitment to regulatory excellence, confidentiality, and integrity—principles that have long defined the private banking tradition and continue to guide our relationships today.",
    bullets: [
      "Multi-currency current accounts — seamless banking across major international currencies, designed to support global lifestyles and cross-border financial activity.",
      "Fixed-term and fiduciary deposits — capital preservation solutions offering security, stability, and competitive returns within a disciplined risk framework.",
      "Dedicated relationship management — personalized service delivered by experienced professionals who understand your financial objectives and value discretion, responsiveness, and continuity.",
      "International banking support — efficient execution of domestic and cross-border transactions through a trusted international banking platform.",
    ],
    note: "Bank with confidence. build with purpose. preserve for generations.",
  },
  {
    id: "platform",
    index: "02",
    title: "Secure Online Banking Platform",
    sub: "Secure. seamless. global.",
    body: "Access your wealth with confidence wherever life and business take you. savoy bank & trust's secure online banking platform provides a unified digital experience, offering convenient access to your banking relationships, portfolios, and account information through a highly secure environment. designed for internationally mobile clients, families, and institutions, our platform combines sophisticated functionality with the highest standards of security, privacy, and reliability. supported by advanced security protocols and a commitment to operational excellence, our digital banking platform delivers the convenience of modern technology without compromising the discretion and personalized service that define the savoy banking experience.",
    bullets: [
      "Secure digital access — convenient, encrypted access to your accounts through a robust authentication framework designed to protect your financial information.",
      "Secure client messaging — communicate directly with your relationship team through a confidential messaging channel, ensuring timely and secure interactions.",
      "Portfolio visibility and reporting — view portfolio holdings, account balances, positions, and transaction activity through a consolidated dashboard that provides a clear picture of your financial affairs.",
      "Global accessibility — manage your banking relationships anytime, from virtually anywhere, through a platform built to support today's international lifestyles and cross-border needs.",
    ],
    note: "Secure access. informed decisions. global connectivity.",
  },
  {
    id: "custody",
    index: "03",
    title: "Global Custody & Execution",
    sub: "Institutional-grade access and protection",
    body: "Access a world of investment opportunities through savoy bank & trust's comprehensive custody and execution platform. designed to meet the sophisticated needs of high-net-worth individuals, family offices, and institutional investors, our services provide secure asset safekeeping, efficient trade execution, and access to a broad range of global investment solutions. through established relationships with leading custodians, broker-dealers, and financial institutions, we help clients navigate global markets with confidence while maintaining the highest standards of security, transparency, and operational excellence. our custody and execution services are designed to provide seamless access to global markets while ensuring that client assets remain protected within a trusted and regulated framework.",
    bullets: [
      "Global equities and fixed income — access to listed equities, sovereign and corporate bonds, and other traditional investment instruments across major international markets.",
      "Mutual funds and alternative investments — a broad selection of mutual funds, hedge funds, and alternative investment solutions designed to support diverse investment objectives and risk profiles.",
      "Structured investment solutions — customized structured products tailored to specific investment goals, market views, risk tolerances, and wealth preservation strategies.",
      "Institutional-quality trade execution — efficient execution services supported by established brokerage networks, market expertise, and rigorous operational controls.",
      "Safekeeping and asset protection — secure custody arrangements through top-tier global custodians, providing robust asset protection, reporting transparency, and operational reliability.",
    ],
    note: "Global reach. secure custody. disciplined execution.",
  },
  {
    id: "money",
    index: "04",
    title: "Money Market Solutions",
    sub: "Optimize liquidity. preserve capital.",
    body: "Effective liquidity management is an essential component of long-term wealth preservation. at savoy bank & trust, we offer tailored money market solutions designed to help clients maintain financial flexibility, safeguard capital, and enhance cash returns within a prudent risk framework. whether managing short-term liquidity requirements or strategically allocating excess cash reserves, our solutions are structured to align with your financial objectives, liquidity needs, and overall wealth strategy. supported by rigorous risk management, strong banking relationships, and a commitment to preserving client capital, our money market solutions help ensure that liquidity remains both productive and readily available when needed.",
    bullets: [
      "Current accounts with daily liquidity — flexible cash management solutions providing immediate access to funds while supporting your day-to-day banking and international transaction requirements.",
      "Fixed-term deposits — competitive, market-driven deposit options designed to provide capital stability and predictable returns across a range of maturities.",
      "Fiduciary deposits through global banking partners — access to carefully selected international banking institutions, allowing clients to diversify cash holdings while benefiting from attractive deposit opportunities and enhanced flexibility.",
      "Customized liquidity strategies — cash management solutions tailored to individual, family office, and institutional requirements, balancing accessibility, security, and return objectives.",
    ],
    note: "Maintain flexibility, protect capital and put liquidity to work.",
  },
  {
    id: "fx",
    index: "05",
    title: "Foreign Exchange",
    sub: "Currency strategies with precision",
    body: "In an increasingly interconnected world, effective currency management is essential for preserving wealth, facilitating international transactions, and managing global investment exposures. savoy bank & trust provides tailored foreign exchange solutions designed to meet the complex needs of internationally minded individuals, family offices, businesses, and institutional clients. combining competitive market access with personalized service, we help clients execute currency transactions efficiently while navigating exchange rate fluctuations with confidence. all foreign exchange transactions are supported by live market pricing, diligent execution, and the high-touch service that defines the Savoy client experience. our objective is to help clients manage currency exposure effectively while ensuring seamless access to global opportunities.",
    bullets: [
      "Spot foreign Exchange — timely currency transactions with same-day settlement, enabling efficient execution for payments, investments, and liquidity requirements across major global currencies.",
      "Forward contracts — forward exchange solutions designed to help mitigate currency risk by locking in exchange rates for future transactions, providing greater certainty in an evolving market environment.",
      "Foreign exchange swaps — flexible swap arrangements that support liquidity management, settlement timing requirements, and more sophisticated multi-leg currency strategies.",
      "Major and cross-currency transactions — execution capabilities across a broad range of currency pairs to support global investment activities, international business operations, and cross-border wealth management needs.",
      "Dedicated market support — access to experienced professionals who provide market insight, transaction support, and responsive service tailored to your specific objectives.",
    ],
    note: "Global markets. thoughtful execution. confident currency management.",
  },
  {
    id: "otc",
    index: "06",
    title: "OTC & Derivative Solutions",
    sub: "Control risk. capture opportunity.",
    body: "Sophisticated investors often require solutions that extend beyond traditional investment instruments. savoy bank & trust provides access to bespoke over-the-counter (OTC) and structured investment solutions designed to help clients manage risk, enhance portfolio efficiency, and pursue specific investment objectives. working closely with leading financial counterparties and product specialists, we assist clients in implementing customized strategies tailored to their market outlook, liquidity requirements, risk tolerance, and wealth preservation goals. our OTC and structured investment capabilities are designed for clients seeking greater portfolio diversification, enhanced yield opportunities, tailored market exposure, or downside protection. every solution is developed with careful consideration of the client's overall investment strategy and risk profile.",
    bullets: [
      "Bespoke OTC Derivative Solutions — customized derivative structures designed to address specific portfolio, hedging, or investment requirements across multiple asset classes.",
      "Equity, Interest rate, and Foreign Exchange Options — flexible solutions that can be utilized to manage market exposures, protect capital, or express strategic investment views within defined risk parameters.",
      "Capital-protected notes — structured solutions designed to provide exposure to selected markets or investment themes while incorporating varying degrees of capital preservation.",
      "Structured investment products — tailored investment strategies that combine traditional financial instruments with derivative features to achieve targeted risk-return outcomes.",
      "Portfolio risk management solutions — strategies intended to help mitigate market volatility, manage currency and interest rate exposures, and support long-term wealth preservation objectives.",
    ],
    note: "Manage risk with precision. access opportunities with purpose. invest with confidence.",
  },
  {
    id: "payments",
    index: "07",
    title: "Payments & Transfers",
    sub: "Global transfers, handled with precision",
    body: "In today's interconnected financial landscape, the timely and secure movement of funds is essential. savoy bank & trust provides comprehensive payment and transfer solutions designed to support the needs of internationally active individuals, families, businesses, and institutions. leveraging established global banking networks and robust operational controls, we facilitate the efficient execution of domestic and cross-border transactions while maintaining the highest standards of security, accuracy, and client service. every transaction benefits from rigorous compliance oversight, robust security protocols, and the personalized attention that distinguishes the savoy banking experience.",
    bullets: [
      "Global payment network sccess — connectivity through SWIFT, SEPA, and other recognized banking networks, enabling reliable fund transfers across major financial centers worldwide.",
      "Domestic and international wire transfers — efficient processing of local and cross-border payments with dedicated support to ensure smooth transaction execution.",
      "Multi-currency payment solutions — send and receive funds in multiple currencies, supporting international investments, business activities, and cross-border family wealth needs.",
      "Secure transaction initiation and monitoring — advanced digital capabilities allow clients to initiate, authorize, and track payment activity through a secure banking environment.",
      "Dedicated client support — experienced banking professionals available to assist with time-sensitive transactions, payment inquiries, and specialized transfer requirements.",
    ],
    note: "Move capital securely. transfer funds efficiently. bank globally with confidence.",
  },
  {
    id: "metals",
    index: "08",
    title: "Precious Metals Trading & Custody",
    sub: "A tangible hedge in a volatile world",
    body: "For centuries, precious metals have played a vital role in preserving wealth and providing stability during periods of economic uncertainty. at savoy bank & trust, we offer clients access to precious metals solutions designed to support portfolio diversification, capital preservation, and long-term wealth protection. whether seeking strategic exposure to hard assets or secure ownership of physical bullion, our solutions combine institutional-grade execution with trusted custody arrangements and personalized service. as part of a comprehensive wealth strategy, precious metals can serve as a valuable complement to traditional financial assets, providing diversification benefits and a tangible store of value across market cycles.",
    bullets: [
      "Access to major precious metals — investment solutions across gold, silver, platinum, and palladium, providing exposure to some of the world's most established stores of value.",
      "Allocated and unallocated holdings — flexible ownership structures that allow clients to select solutions aligned with their investment objectives, liquidity needs, and custody preferences.",
      "Physical and paper-based exposure — opportunities to gain exposure through physical bullion holdings as well as approved investment structures linked to precious metals markets.",
      "Secure custody and vaulting — safekeeping services through reputable international vault providers, supported by rigorous security standards and independent custody arrangements.",
      "Portfolio diversification strategies — guidance on incorporating precious metals within a broader wealth management framework to help manage risk and enhance portfolio resilience.",
    ],
    note: "Preserve purchasing power. diversify strategically. protect wealth with confidence.",
  },
  {
    id: "credit",
    index: "09",
    title: "Credit Solutions & Securities-Based Lending",
    sub: "Liquidity without liquidation",
    body: "Significant wealth often creates significant opportunities—but accessing liquidity should not require disrupting a carefully constructed investment strategy. savoy bank & trust offers tailored credit solutions that enable clients to unlock the value of eligible assets while maintaining their long-term investment positions. our securities-based lending capabilities provide flexible access to capital for a range of personal, business, and investment needs, delivered through a streamlined process and supported by experienced banking professionals. whether funding new investments, financing business ventures, supporting real estate acquisitions, or addressing short-term liquidity needs, our credit solutions provide a flexible and capital-efficient alternative to the sale of investment assets. every lending relationship is structured with careful attention to risk management, portfolio composition, and the long-term interests of our clients.",
    bullets: [
      "Loans secured by publicly traded securities — leverage eligible equity portfolios to access liquidity while preserving market exposure and investment continuity.",
      "Financing against investment-grade bond portfolios — utilize high-quality fixed-income holdings as collateral for customized lending solutions designed to support capital efficiency.",
      "Structured asset-backed credit facilities — financing arrangements secured by qualifying structured financial instruments and diversified investment portfolios, subject to applicable eligibility criteria.",
      "Tailored lending structures — customized terms designed to align with individual liquidity requirements, investment objectives, and broader wealth planning considerations.",
      "Responsive Credit Decision-Making — Efficient execution and dedicated client support aimed at delivering timely access to capital when opportunities or obligations arise.",
    ],
    note: "Unlock liquidity. Preserve your strategy. Put your wealth to work.",
  },
  {
    id: "other",
    index: "10",
    title: "Other Services",
    sub: "Bespoke solutions for complex wealth needs",
    body: "At savoy bank & trust, we recognize that sophisticated wealth requires more than traditional banking services. our clients often require specialized solutions that address complex financial structures, global lifestyles, succession objectives, and evolving investment needs. drawing on our private banking heritage and relationship-driven approach, we provide a range of complementary services designed to support and enhance every aspect of our clients' financial affairs. at savoy bank & trust, exceptional private banking extends beyond products and transactions. through personalized service, thoughtful advice, and customized solutions, we help our clients navigate complexity, preserve wealth, and build enduring legacies.",
    bullets: [
      "Trust and fiduciary services — customized trust structures and fiduciary arrangements designed to support wealth preservation, succession planning, asset protection, and multi-generational legacy objectives.",
      "Corporate and wealth structuring solutions — tailored international wealth and corporate structures developed to meet the unique needs of individuals, families, family offices, and business owners.",
      "Family office support — integrated banking, reporting, administrative, and coordination services that help family offices manage complex financial affairs efficiently and effectively.",
      "Estate and succession planning coordination — collaboration with trusted legal, tax, and professional advisors to facilitate the seamless transfer of wealth across generations while preserving long-term family objectives.",
      "Customized credit card solutions — premium credit card programs designed to complement the lifestyles of internationally mobile clients, offering global acceptance, customized credit limits, enhanced security features, and dedicated support. selected programs may also provide exclusive travel, lifestyle, and concierge-related benefits.",
      "Specialized client services — access to bespoke solutions and tailored financial arrangements developed in response to unique circumstances, opportunities, and evolving client requirements.",
      "Investment advisory services — strategic guidance and market insight tailored to each client's financial goals, risk tolerance, and investment horizon.",
    ],
    note: "Bespoke solutions. trusted relationships. enduring stewardship.",
  },
  {
    id: "philanthropy",
    index: "11",
    title: "Philanthropy & Community Impact",
    sub: "Investing in communities. creating lasting change.",
    body: "At savoy bank & trust, we believe that true wealth extends beyond financial success. it carries a responsibility to contribute positively to the communities we serve and to help create opportunities for future generations. our commitment to philanthropy reflects the values that guide our institution—stewardship, integrity, compassion, and long-term thinking. through strategic charitable initiatives, community partnerships, and support for meaningful causes, we seek to make a lasting and measurable impact. we recognize that philanthropy is often an important component of a family's legacy. savoy bank & trust works with clients and their advisors to support charitable giving strategies that reflect their values, priorities, and long-term vision. whether through direct charitable contributions, structured philanthropic vehicles, or multi-generational giving initiatives, we are committed to helping clients create meaningful and enduring impact.",
    bullets: [
      "Education and youth development — supporting programs that expand access to education, leadership development, financial literacy, and opportunities for young people to reach their full potential.",
      "Community development — contributing to initiatives that promote economic empowerment, social well-being, and sustainable community growth.",
      "Arts, culture, and heritage — encouraging the preservation of cultural heritage and the advancement of artistic and creative endeavors that enrich society.",
      "Environmental stewardship — promoting responsible environmental practices and supporting initiatives that help protect and sustain natural resources for future generations.",
    ],
    note: "Building wealth with purpose. supporting communities with commitment. creating legacies that extend beyond generations.",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const fadeUp = (v, d = "0s") => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.85s ease ${d}, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${d}`,
});

function ServiceCard({ service, index, onOpen }) {
  const [ref, inView] = useInView(0.08);

  return (
    <div
      id={service.id}
      ref={ref}
      className="service-card"
      style={fadeUp(inView, `${0.05 + (index % 3) * 0.08}s`)}
      onClick={() => onOpen(service)}
    >
      {/* <span className="service-card-ghost" style={{ fontFamily: fontHeading }}>{service.index}</span> */}

      <span
        className="service-card-index"
        style={{ fontFamily: fontLabel, fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase" }}
      >
        {service.index}
      </span>

      <h3
        className="service-card-title"
        style={{ fontFamily: fontHeading, fontWeight: 500, letterSpacing: "0.5px" }}
      >
        {service.title}
      </h3>

      <p
        className="service-card-sub"
        style={{ fontFamily: fontLabel, fontWeight: 400, letterSpacing: "3px", textTransform: "uppercase" }}
      >
        {service.sub}
      </p>

      <hr className="service-card-rule" />

      {/* Small amount shown on the card itself */}
      <p className="service-card-teaser" style={{ fontFamily: fontBody, fontWeight: 300 }}>
        {service.note}
      </p>

      {/* Text label + plus button opens the full content in a centered modal */}
      <div className="service-toggle-row">
        
        <button
          type="button"
          aria-label={`View details for ${service.title}`}
          className="service-toggle"
          onClick={(e) => { e.stopPropagation(); onOpen(service); }}
        />
      </div>
    </div>
  );
}

function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="sv-modal-backdrop" onClick={onClose}>
      <div className="sv-modal" onClick={(e) => e.stopPropagation()}>
        {/* <span className="sv-modal-ghost" style={{ fontFamily: fontHeading }}>{service.index}</span> */}
        <button type="button" aria-label="Close" className="sv-modal-close" onClick={onClose} />

        <p
          className="sv-modal-index"
          style={{ fontFamily: fontLabel, fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase" }}
        >
          {service.index}
        </p>

        <h3
          className="sv-modal-title"
          style={{ fontFamily: fontHeading, fontWeight: 500, letterSpacing: "0.5px" }}
        >
          {service.title}
        </h3>

        <p
          className="sv-modal-sub"
          style={{ fontFamily: fontLabel, fontWeight: 400, letterSpacing: "3px", textTransform: "uppercase" }}
        >
          {service.sub}
        </p>

        <hr className="sv-modal-rule" />

        {service.body && (
          <p className="sv-modal-body" style={{ fontFamily: fontBody, fontWeight: 400 }}>
            {service.body}
          </p>
        )}

        <ul className="sv-modal-bullets">
          {service.bullets.map((b, j) => (
            <li key={j} style={{ fontFamily: fontBody, fontWeight: 300 }}>
              <span>—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {service.note && (
          <p className="sv-modal-note" style={{ fontFamily: fontBody, fontWeight: 300 }}>
            {service.note}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView(0.05);
  const [activeService, setActiveService] = useState(null);

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (!hash) return;
  //   const id = hash.replace("#", "");
  //   const attempt = (tries = 0) => {
  //     const el = document.getElementById(id);
  //     if (el) {
  //       el.scrollIntoView({ behavior: "smooth", block: "start" });
  //     } else if (tries < 10) {
  //       setTimeout(() => attempt(tries + 1), 80);
  //     }
  //   };
  //   setTimeout(() => attempt(), 200);
  // }, []);

  useEffect(() => {
  const hash = window.location.hash;
  if (!hash) return;

  const id = hash.replace("#", "");

  const attempt = (tries = 0) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Open modal after scrolling
      const selectedService = services.find(
        (service) => service.id === id
      );

      if (selectedService) {
        setTimeout(() => {
          setActiveService(selectedService);
        }, 400);
      }

    } else if (tries < 10) {
      setTimeout(() => attempt(tries + 1), 80);
    }
  };

  setTimeout(() => attempt(), 200);

}, []);

  return (
    <>
      <style>{globalStyles}</style>
      <SavoyHeader phase={4} />

      <main className="sv-services-section min-h-screen">
        <div className="sv-services-pattern" />
        <div className="sv-services-vignette" />

        <div className="sv-services-inner">

          {/* ── HERO ── */}
          <section ref={heroRef} className="relative pt-40 md:pt-67 pb-6">
            <h1
              style={{
                ...fadeUp(heroInView, "0.15s"),
                fontFamily: fontHeading,
                fontWeight: 500,
                letterSpacing: "0.5px",
                fontSize: "clamp(3.2rem,7vw,6.5rem)",
                lineHeight: 0.9,
              }}
              className="text-white"
            >
              Services
              <br />
              <span className="block w-10 h-px bg-white mt-8" />
            </h1>
          </section>

          {/* ── SERVICES GRID ── */}
          <section className="services-grid">
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                service={service}
                index={i}
                onOpen={setActiveService}
              />
            ))}
          </section>

        </div>
      </main>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />

      <BrandFooterSection />
    </>
  );
}