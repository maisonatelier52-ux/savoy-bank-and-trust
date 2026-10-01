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
//   .policy-section h2 {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.68rem;
//     letter-spacing: 0.2em;
//     text-transform: uppercase;
//     color: rgba(255,255,255,0.5);
//     margin-top: 2.5rem;
//     margin-bottom: 0.75rem;
//   }
//   .policy-section p {
//     font-family: 'General Sans', 'Inter', system-ui, sans-serif;
//     font-size: 0.83rem;
//     font-weight: 300;
//     line-height: 1.8;
//     color: rgba(255,255,255,0.75);
//     margin-bottom: 1rem;
//   }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

// export default function PrivacyPolicyPage() {
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
//             Privacy Policy
//           </h1>
//           <span className="block w-10 h-px bg-white mt-8" />
//         </section>

//         <div className="w-full h-px bg-white/10" />

//         {/* ── POLICY CONTENT ── */}
//         <section className="py-16 px-6 md:px-20 max-w-3xl policy-section">

//           <h2>Who We Are</h2>
//           <p>Our website address is: https://www.savoybankandtrust.com.</p>

//           <h2>Comments</h2>
//           <p>
//             When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&apos;s IP address and browser user agent string to help spam detection.
//           </p>
//           <p>
//             An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
//           </p>

//           <h2>Media</h2>
//           <p>
//             If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
//           </p>

//           <h2>Cookies</h2>
//           <p>
//             If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
//           </p>
//           <p>
//             If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
//           </p>
//           <p>
//             When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select &ldquo;Remember Me&rdquo;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
//           </p>
//           <p>
//             If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
//           </p>

//           <h2>Embedded Content from Other Websites</h2>
//           <p>
//             Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
//           </p>
//           <p>
//             These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
//           </p>

//           <h2>Who We Share Your Data With</h2>
//           <p>If you request a password reset, your IP address will be included in the reset email.</p>

//           <h2>How Long We Retain Your Data</h2>
//           <p>
//             If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
//           </p>
//           <p>
//             For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
//           </p>

//           <h2>What Rights You Have Over Your Data</h2>
//           <p>
//             If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
//           </p>

//           <h2>Where Your Data Is Sent</h2>
//           <p>Visitor comments may be checked through an automated spam detection service.</p>

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
    heading: "Who We Are",
    paras: [
      "Our website address is: https://www.savoybankandtrust.com.",
    ],
  },
  {
    heading: "Comments",
    paras: [
      "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.",
      "An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.",
    ],
  },
  {
    heading: "Media",
    paras: [
      "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.",
    ],
  },
  {
    heading: "Cookies",
    paras: [
      "If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.",
      "If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.",
      "When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select \"Remember Me\", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.",
      "If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.",
    ],
  },
  {
    heading: "Embedded Content from Other Websites",
    paras: [
      "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.",
      "These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.",
    ],
  },
  {
    heading: "Who We Share Your Data With",
    paras: [
      "If you request a password reset, your IP address will be included in the reset email.",
    ],
  },
  {
    heading: "How Long We Retain Your Data",
    paras: [
      "If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.",
      "For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.",
    ],
  },
  {
    heading: "What Rights You Have Over Your Data",
    paras: [
      "If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.",
    ],
  },
  {
    heading: "Where Your Data Is Sent",
    paras: [
      "Visitor comments may be checked through an automated spam detection service.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
              <span className="block w-10 h-px bg-white mt-8" />
            </h1>
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ CONTENT ══ */}
        <section ref={contentRef} className="py-12 md:py-24 px-6 md:px-20">

          {/* <div style={fadeLeft(contentInView)} className="mb-10">
            <Label>Legal &amp; Privacy</Label>
          </div> */}

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
            Your Privacy<br />
            <em style={{ color: "var(--savoy-font)" }}>Matters.</em>
          </h2> */}

          <div style={{ ...fadeUp(contentInView, "0.22s"), maxWidth: "760px", margin: "0 auto" }}>
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