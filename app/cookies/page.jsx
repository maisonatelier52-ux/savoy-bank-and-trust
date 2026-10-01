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
//   .cookie-section h2 {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.68rem;
//     letter-spacing: 0.2em;
//     text-transform: uppercase;
//     color: rgba(255,255,255,0.5);
//     margin-top: 2.5rem;
//     margin-bottom: 0.75rem;
//   }
//   .cookie-section p {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.83rem;
//     font-weight: 300;
//     line-height: 1.8;
//     color: rgba(255,255,255,0.75);
//     margin-bottom: 1rem;
//   }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";

// export default function CookiesPage() {
//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="bg-[#001a33] text-white min-h-screen">

//         {/* ── HERO ── */}
//         <section className="relative pt-48 pb-16 px-6 md:px-20">
//           <h1
//             style={{ fontFamily: serif, fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 300, lineHeight: 0.9 }}
//             className="text-white"
//           >
//             Cookies
//           </h1>
//           <span className="block w-10 h-px bg-white mt-8" />
//         </section>

//         <div className="w-full h-px bg-white/10" />

//         {/* ── COOKIE CONTENT ── */}
//         <section className="py-16 px-6 md:px-20 max-w-3xl cookie-section">

//           <h2>Use of Cookies</h2>
//           <p>
//             Our Savoy Bank &amp; Trust website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
//           </p>

//           <h2>What Is a Cookie?</h2>
//           <p>
//             This is a small file of letters and numbers that we store on your browser or the hard drive of your computer after you agree to such use. Cookies contain information that is transferred to your computer&apos;s hard drive. Cookies help us to know you better by providing operational data that we can use to aid your interaction with our Website and improve its navigation and usability. The information we collect indirectly from you includes, but is not limited to, your Internet protocol (&ldquo;IP&rdquo;) address, browser type, operating system, Internet service provider (ISP), time stamps, transactions placed, and banner ads you click.
//           </p>

//           <h2>Cookies in Use</h2>
//           <p>
//             Essential Cookies; Analytical/Performance Cookies; Functionality Cookies; and Targeting Cookies described as follows.
//           </p>

//           <h2>Essential Cookies</h2>
//           <p>These are cookies that are required for the operation of our website.</p>
//           <p>
//             They include, for example, cookies that enable you to log into secure areas of our website. Without these cookies, services you&apos;ve asked for (such as access to secure areas) can&apos;t be provided. These cookies will not gather any information about you that could be used for marketing or remembering where you&apos;ve been on the internet. This category cannot be disabled.
//           </p>

//           <h2>Analytical/Performance Cookies</h2>
//           <p>
//             They allow us to recognise and count the number of visitors to our website and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
//           </p>
//           <p>
//             These cookies are not used to target you with online advertising. Without these cookies we are unable to learn how our website is performing and make relevant improvements that could improve your browsing experience.
//           </p>

//           <h2>Functionality Cookies</h2>
//           <p>
//             These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).
//           </p>
//           <p>
//             These can also be used to remember log-in details, changes you&apos;ve made to text size, font and other parts of pages that you can customise.
//           </p>

//           <h2>Targeting Cookies</h2>
//           <p>
//             These cookies record your visit to our website and browsing habits, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with selected third parties for this purpose.
//           </p>

//           <h2>Cookie Management</h2>
//           <p>
//             Please note that other third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.
//           </p>
//           <p>
//             You may block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.
//           </p>
//           <p>
//             If you&apos;ve disabled one or more cookie categories, we may still use information collected from existing cookies, but we&apos;ll stop using the disabled cookies to gather any further information. You can delete existing cookies from your browser.
//           </p>
//           <p>You can manage cookies by changing the settings in the web browser on your computer or tablet.</p>

//         </section>

//         <div className="w-full h-px bg-white/10" />

//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
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
`;

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

/* ── Shared helpers from About ── */
function useInView(threshold = 0.12) {
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

const fadeUp   = (v, d = "0s") => ({ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(30px)",  transition: `opacity 0.9s ease ${d}, transform 0.9s ease ${d}` });
const fadeLeft = (v, d = "0s") => ({ opacity: v ? 1 : 0, transform: v ? "translateX(0)" : "translateX(-36px)", transition: `opacity 0.9s ease ${d}, transform 0.9s ease ${d}` });

function Label({ children }) {
  return (
    <p className="flex items-center gap-3 uppercase text-white/40"
       style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}>
      <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
      {children}
    </p>
  );
}

/* ── Cookie section heading ── */
function SectionHeading({ children }) {
  return (
    <h2 style={{
      fontFamily: sans,
      fontSize: "0.72rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.45)",
      marginTop: "2.8rem",
      marginBottom: "0.9rem",
      fontWeight: 400,
    }}>
      {children}
    </h2>
  );
}

/* ── Cookie body paragraph ── */
function Para({ children }) {
  return (
    <p style={{
      fontFamily: sans,
      fontSize: "0.95rem",
      fontWeight: 300,
      lineHeight: 1.85,
      color: "rgba(255,255,255,0.75)",
      marginBottom: "1.1rem",
    }}>
      {children}
    </p>
  );
}

const sections = [
  {
    heading: "Use of Cookies",
    paras: [
      "Our Savoy Bank & Trust website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.",
    ],
  },
  {
    heading: "What Is a Cookie?",
    paras: [
      "This is a small file of letters and numbers that we store on your browser or the hard drive of your computer after you agree to such use. Cookies contain information that is transferred to your computer's hard drive. Cookies help us to know you better by providing operational data that we can use to aid your interaction with our Website and improve its navigation and usability. The information we collect indirectly from you includes, but is not limited to, your Internet protocol (\"IP\") address, browser type, operating system, Internet service provider (ISP), time stamps, transactions placed, and banner ads you click.",
    ],
  },
  {
    heading: "Cookies in Use",
    paras: [
      "Essential Cookies; Analytical/Performance Cookies; Functionality Cookies; and Targeting Cookies described as follows.",
    ],
  },
  {
    heading: "Essential Cookies",
    paras: [
      "These are cookies that are required for the operation of our website.",
      "They include, for example, cookies that enable you to log into secure areas of our website. Without these cookies, services you've asked for (such as access to secure areas) can't be provided. These cookies will not gather any information about you that could be used for marketing or remembering where you've been on the internet. This category cannot be disabled.",
    ],
  },
  {
    heading: "Analytical/Performance Cookies",
    paras: [
      "They allow us to recognise and count the number of visitors to our website and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.",
      "These cookies are not used to target you with online advertising. Without these cookies we are unable to learn how our website is performing and make relevant improvements that could improve your browsing experience.",
    ],
  },
  {
    heading: "Functionality Cookies",
    paras: [
      "These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).",
      "These can also be used to remember log-in details, changes you've made to text size, font and other parts of pages that you can customise.",
    ],
  },
  {
    heading: "Targeting Cookies",
    paras: [
      "These cookies record your visit to our website and browsing habits, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with selected third parties for this purpose.",
    ],
  },
  {
    heading: "Cookie Management",
    paras: [
      "Please note that other third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.",
      "You may block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.",
      "If you've disabled one or more cookie categories, we may still use information collected from existing cookies, but we'll stop using the disabled cookies to gather any further information. You can delete existing cookies from your browser.",
      "You can manage cookies by changing the settings in the web browser on your computer or tablet.",
    ],
  },
];

export default function CookiesPage() {
  const [heroRef,    heroInView]    = useInView(0.05);
  const [contentRef, contentInView] = useInView(0.05);

  return (
    <>
      <style>{globalStyles}</style>
      <SavoyHeader phase={4} />

      <main className="bg-[#001a33] text-white">

        {/* ══ HERO — exact About page style ══ */}
                <section
  ref={heroRef}
  className="relative overflow-hidden px-6 pt-50 md:pt-75 pb-0 md:px-20 md:pb-10"
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
              Cookies<br />
              <span className="block w-10 h-px bg-white mt-8" />
            </h1>
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ CONTENT — centered, About-style animations ══ */}
        <section
          ref={contentRef}
          className="py-12 md:py-24 px-6 md:px-20"
        >
          {/* Section label */}
          {/* <div style={fadeLeft(contentInView)} className="mb-10">
            <Label>Legal &amp; Privacy</Label>
          </div> */}

          {/* Intro heading */}
          {/* <h2
            style={{
              ...fadeUp(contentInView, "0.1s"),
              fontFamily: serif,
              fontSize: "clamp(2rem,4vw,3.6rem)",
              fontWeight: 300,
              lineHeight: 1.0,
              marginBottom: "3rem",
            }}
            className="text-white"
          >
            Our Cookie<br />
            <em style={{ color: "var(--savoy-font)" }}>Policy.</em>
          </h2> */}

          {/* Content body — centered column */}
          <div
            style={{
              ...fadeUp(contentInView, "0.22s"),
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            {sections.map((s, i) => (
              <div key={i}>
                <SectionHeading>{s.heading}</SectionHeading>
                {s.paras.map((p, j) => <Para key={j}>{p}</Para>)}
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

      </main>

      <BrandFooterSection />
    </>
  );
}