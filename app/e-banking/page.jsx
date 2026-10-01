// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// /* ─────────────────────────────────────────────
//    Savoy E-Banking — Secure Login Page
//    Drop this file in: app/e-banking/page.jsx
//    (or app/login/page.jsx — rename the route as needed)

//    Expects these files to exist in /public:
//      - logo-savoy.png     (brand mark)
//      - savoy-ebank.png    (right-side feature image)
// ───────────────────────────────────────────── */

// const WATERMARK_OPACITY = 0.08; // 0 - 1
// const WATERMARK_CONTRAST = 1.2; // 1 = normal, >1 = more contrast
// const WATERMARK_BRIGHTNESS = 1.1; // 1 = normal
// const SAVOY_BG = "var(--savoy-bg, rgb(3,22,41))";

// /* ── Font tokens — literal strings so they match the site-wide
//    [style*="Cormorant"] / [style*="Inter"] / [style*="Montserrat"]
//    overrides in globals.css, which point at the .env-driven CSS vars ── */
// const fontHeading = "'Cormorant Garamond', Georgia, serif";
// const fontBody = "'Inter', system-ui, sans-serif";
// const fontLabel = "'Montserrat', system-ui, sans-serif";

// /* ── Scroll-in fade-up effect — same pattern used on the Services page ── */
// function useInView(threshold = 0.1) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold },
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

// const ICONS = {
//   user: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       className="w-5 h-5"
//     >
//       <circle cx="12" cy="8" r="4" />
//       <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
//     </svg>
//   ),

//   lock: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       className="w-5 h-5"
//     >
//       <rect x="6" y="10" width="12" height="10" rx="2" />
//       <path d="M9 10V7.5a3 3 0 0 1 6 0V10" />
//     </svg>
//   ),
//   eye: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       className="w-5 h-5"
//     >
//       <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   ),
//   eyeOff: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       className="w-5 h-5"
//     >
//       <path d="M3 3l18 18" />
//       <path d="M10.6 10.6a3 3 0 0 0 4.24 4.24" />
//       <path d="M9.3 5.3A10.6 10.6 0 0 1 12 5c6.5 0 10 7 10 7a13.6 13.6 0 0 1-3.2 4.1M6.2 6.7C3.6 8.4 2 12 2 12s3.5 7 10 7c1.1 0 2.1-.15 3-.44" />
//     </svg>
//   ),
//   shield: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       className="w-6 h-6"
//     >
//       <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
//       <rect x="8.5" y="12" width="7" height="5.5" rx="1.1" />
//       <path d="M10.2 12v-1.6a1.8 1.8 0 0 1 3.6 0V12" />
//     </svg>
//   ),
//   lock: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.4"
//       className="w-8 h-8"
//     >
//       {/* Lock body */}
//       <rect x="6" y="9" width="12" height="11" rx="1.2" />

//       {/* Lock top */}
//       <path d="M8.5 9V6.8a3.5 3.5 0 0 1 7 0V9" />

//       {/* Key hole */}
//       <circle cx="12" cy="14" r="1.2" fill="currentColor" stroke="none" />

//       <path d="M12 15.2v2.2" strokeWidth="1.2" />
//     </svg>
//   ),
//   help: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       className="w-4 h-4"
//     >
//       <circle cx="12" cy="12" r="9" />
//       <path d="M9.5 9a2.5 2.5 0 1 1 3.7 2.2c-.8.5-1.2 1-1.2 2" />
//       <circle cx="12" cy="16.5" r="0.5" fill="currentColor" />
//     </svg>
//   ),
// };

// export default function EBankingLoginPage() {
//   const [values, setValues] = useState({ username: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [serverError, setServerError] = useState("");

//   // Fade-up triggers, same pattern as the Services page cards.
//   const [cardRef, cardInView] = useInView(0.05);
//   const [formRef, formInView] = useInView(0.1);
//   const [panelRef, panelInView] = useInView(0.1);

//   const handleChange = (field) => (e) => {
//     setValues((v) => ({ ...v, [field]: e.target.value }));
//     if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
//     if (serverError) setServerError("");
//   };

//   const validate = () => {
//     const next = {};

//     if (!values.username.trim()) {
//       next.username = "User name is required.";
//     } else if (values.username.trim().length < 3) {
//       next.username = "User name must be at least 3 characters.";
//     }

//     if (!values.password) {
//       next.password = "Password is required.";
//     } else if (values.password.length < 6) {
//       next.password = "Password must be at least 6 characters.";
//     }

//     setErrors(next);
//     return Object.keys(next).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setSubmitting(true);
//     setServerError("");

//     try {
//       // TODO: replace with your real authentication endpoint
//       // const res = await fetch("/api/auth/login", {
//       //   method: "POST",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify(values),
//       // });
//       // if (!res.ok) throw new Error("Invalid user name or password.");

//       await new Promise((r) => setTimeout(r, 900)); // placeholder delay
//     } catch (err) {
//       setServerError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <SavoyHeader phase={4} />

//       <main
//         className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 pt-32 pb-10 sm:pt-44 sm:pb-14"
//         style={{ background: SAVOY_BG }}
//       >
//         {/* ── Decorative watermark, bottom-left ── */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none select-none absolute -left-24 -bottom-5 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] hidden sm:block"
//           style={{
//             opacity: WATERMARK_OPACITY,
//             filter: `contrast(${WATERMARK_CONTRAST}) brightness(${WATERMARK_BRIGHTNESS})`,
//           }}
//         >
//           <Image
//             src="/logo-savoy.png"
//             alt=""
//             fill
//             sizes="520px"
//             className="object-contain"
//           />
//         </div>

//         {/* ── Subtle radial glow ── */}
//         {/* <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(60% 50% at 50% 0%, rgba(255,255,255,0.05), transparent 70%)",
//           }}
//         /> */}

//         {/* ── Card ── */}
//         <div
//           ref={cardRef}
//           className="relative w-full max-w-[1050px] rounded-2xl border border-white/10 overflow-hidden"
//           style={{ background: SAVOY_BG, ...fadeUp(cardInView, "0.05s") }}
//         >
//           <div className="relative grid grid-cols-1 md:grid-cols-2">
//             {/* ───────────── Center divider — positioned absolute, not a grid item ───────────── */}
//             <span
//               aria-hidden="true"
//               className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[70%] bg-gradient-to-b from-transparent via-white/25 to-transparent"
//             />

//             {/* ───────────── Left: form ───────────── */}
//             <div
//               ref={formRef}
//               className="p-6 sm:p-10 lg:p-12"
//               style={fadeUp(formInView, "0.15s")}
//             >
//               <h1
//                 className="text-center leading-tight text-white/95"
//                 style={{
//                   fontFamily: fontHeading,
//                   fontSize: "clamp(1.65rem, 1.3rem + 1.6vw, 2.2rem)",
//                 }}
//               >
//                 Savoy e-Banking
//               </h1>

//               {/* Divider with mark */}
//               <div className="flex items-center justify-center gap-3 my-3 sm:my-4">
//                 <span className="h-[2px] w-12 sm:w-16 md:w-24 bg-gradient-to-l from-white/70 to-transparent" />
//                 <Image
//                   src="/logo-savoy.png"
//                   alt="Savoy Bank & Trust"
//                   width={24}
//                   height={24}
//                   className="w-6 h-6 object-contain"
//                   priority
//                 />
//                 <span className="h-[2px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-white/70 to-transparent" />
//               </div>

//               <p
//                 className="text-center text-white/90 mb-1"
//                 style={{
//                   fontFamily: fontHeading,
//                   fontSize: "clamp(1.05rem, 0.9rem + 0.6vw, 1.3rem)",
//                 }}
//               >
//                 Secure Authentication
//               </p>
//               <p
//                 className="text-center text-xs text-white/50 mb-6 sm:mb-8 px-2"
//                 style={{ fontFamily: fontBody }}
//               >
//                 Access your account securely using your Grid Card credentials.
//               </p>

//               {/* Tab */}
//               <div className="border-b border-white/10 mb-6">
//                 <div className="relative inline-flex items-center">
//                   <span
//                     className="relative z-10 inline-flex items-center h-10 px-5 sm:px-7
//                     text-[11px] tracking-[0.18em] text-white/80
//                     bg-white/[0.03] border border-white/20
//                     rounded-t-xl
//                     shadow-[0_0_20px_rgba(255,255,255,0.05)]"
//                     style={{ fontFamily: fontLabel }}
//                   >
//                     GRID CARD
//                   </span>
//                   <span className="absolute left-0 top-full h-px w-full max-w-[480px] bg-gradient-to-r from-white/30 to-transparent" />
//                 </div>
//               </div>

//               <form onSubmit={handleSubmit} noValidate className="space-y-6">
//                 {/* Username */}
//                 <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr] items-center gap-3 sm:gap-8">
//                   <label
//                     htmlFor="username"
//                     className="flex items-center gap-4 text-sm text-white/80 h-14"
//                     style={{ fontFamily: fontBody }}
//                   >
//                     <span className="text-white/60 flex items-center justify-center w-5 h-5">
//                       {ICONS.user}
//                     </span>
//                     <span>User</span>
//                   </label>

//                   <div>
//                     <input
//                       id="username"
//                       name="username"
//                       type="text"
//                       autoComplete="username"
//                       placeholder="Enter your user name"
//                       value={values.username}
//                       onChange={handleChange("username")}
//                       aria-invalid={!!errors.username}
//                       aria-describedby={
//                         errors.username ? "username-error" : undefined
//                       }
//                       style={{ fontFamily: fontBody }}
//                       className={`h-12 sm:h-14 w-full bg-white/[0.02] border px-5 text-sm text-white placeholder-white/30 outline-none transition ${
//                         errors.username
//                           ? "border-red-400/70"
//                           : "border-white/20 focus:border-white/40"
//                       }`}
//                     />
//                     {errors.username && (
//                       <p
//                         id="username-error"
//                         className="mt-1.5 text-xs text-red-400"
//                         style={{ fontFamily: fontBody }}
//                       >
//                         {errors.username}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr] items-center gap-3 sm:gap-8">
//                   <label
//                     htmlFor="password"
//                     className="flex items-center gap-4 text-sm text-white/80 h-14"
//                     style={{ fontFamily: fontBody }}
//                   >
//                     <span className="text-white/60 flex items-center justify-center w-5 h-5">
//                       {ICONS.lock}
//                     </span>
//                     <span>Password</span>
//                   </label>

//                   <div>
//                     <div className="relative">
//                       <input
//                         id="password"
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         autoComplete="current-password"
//                         placeholder="Enter your password"
//                         value={values.password}
//                         onChange={handleChange("password")}
//                         aria-invalid={!!errors.password}
//                         aria-describedby={
//                           errors.password ? "password-error" : undefined
//                         }
//                         style={{ fontFamily: fontBody }}
//                         className={`h-12 sm:h-14 w-full bg-white/[0.02] border px-5 pr-12 text-sm text-white placeholder-white/30 outline-none transition ${
//                           errors.password
//                             ? "border-red-400/70"
//                             : "border-white/20 focus:border-white/40"
//                         }`}
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword((s) => !s)}
//                         aria-label={
//                           showPassword ? "Hide password" : "Show password"
//                         }
//                         className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
//                       >
//                         {showPassword ? ICONS.eyeOff : ICONS.eye}
//                       </button>
//                     </div>
//                     {errors.password && (
//                       <p
//                         id="password-error"
//                         className="mt-1.5 text-xs text-red-400"
//                         style={{ fontFamily: fontBody }}
//                       >
//                         {errors.password}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {serverError && (
//                   <p
//                     role="alert"
//                     className="text-sm text-red-400 text-center"
//                     style={{ fontFamily: fontBody }}
//                   >
//                     {serverError}
//                   </p>
//                 )}

//                 {/* Login Button */}
//                 <div className="flex justify-center pt-3">
//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="h-11 sm:h-10 w-full sm:w-[70%] bg-white/90 hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed text-[#07192c] font-medium tracking-[0.18em] text-sm transition"
//                     style={{ fontFamily: fontLabel }}
//                   >
//                     {submitting ? "SIGNING IN…" : "LOGIN"}
//                   </button>
//                 </div>

//                 {/* Support */}
//                 <div
//                   className="flex items-center justify-center gap-2 text-xs text-white/60 pt-1"
//                   style={{ fontFamily: fontBody }}
//                 >
//                   <span className="text-white/50">{ICONS.help}</span>
//                   <span>Need assistance?</span>
//                   <Link
//                     href="/contact-us"
//                     className="text-white/80 underline underline-offset-2 hover:text-white"
//                   >
//                     Contact Support
//                   </Link>
//                 </div>
//               </form>
//             </div>

//             {/* ───────────── Right: image panel ───────────── */}
//             <div
//               ref={panelRef}
//               className="relative hidden md:flex flex-col pt-10 px-8"
//               style={fadeUp(panelInView, "0.25s")}
//             >
//               <div
//                 className="relative w-full overflow-hidden"
//                 style={{ background: SAVOY_BG }}
//               >
//                 {/* Image */}
//                 <div className="relative h-72 lg:h-[330px]">
//                   <Image
//                     src="/savoy-ebank.png"
//                     alt="Savoy Grid Card security"
//                     fill
//                     sizes="(min-width: 1024px) 480px, 100vw"
//                     className="object-cover"
//                   />

//                   {/* Bottom fade into card background */}
//                   <div
//                     className="absolute inset-0"
//                     style={{
//                       background: `linear-gradient(to bottom, transparent 35%, rgba(0,19,40,0.35) 55%, ${SAVOY_BG} 85%)`,
//                     }}
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="relative px-8 pb-12 -mt-2">
//                   <div className="flex items-center gap-6">
//                     <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full border border-white/30 text-white/80">
//                       {ICONS.lock}
//                     </span>

//                     <h2
//                       className="text-2xl lg:text-3xl text-white/95 leading-none"
//                       style={{ fontFamily: fontHeading }}
//                     >
//                       Grid Card Security
//                     </h2>
//                   </div>

//                   <p
//                     className="mt-2 ml-[0px] lg:ml-[88px] text-xs leading-4 text-white/60 max-w-sm"
//                     style={{ fontFamily: fontBody }}
//                   >
//                     Access via Grid Card is gained by inserting your individual
//                     user name and personal Grid Card values.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// /* ─────────────────────────────────────────────
//    Savoy E-Banking — Secure Login Page (Private Client)
//    Drop this file in: app/e-banking/page.jsx
//    (or app/login/page.jsx — rename the route as needed)

//    Expects these files to exist in /public:
//      - logo-savoy.png     (brand mark)
//      - savoy-ebank.png    (right-side feature image — see note
//                             at the bottom of this file for sourcing)
// ───────────────────────────────────────────── */

// const WATERMARK_OPACITY = 0.06;
// const WATERMARK_CONTRAST = 1.2;
// const WATERMARK_BRIGHTNESS = 1.1;

// const SAVOY_BG = "var(--savoy-bg, rgb(3,22,41))";

// /* ── Font tokens — unchanged, match the site-wide overrides in globals.css ── */
// const fontHeading = "'Cormorant Garamond', Georgia, serif";
// const fontBody = "'Inter', system-ui, sans-serif";
// const fontLabel = "'Montserrat', system-ui, sans-serif";

// /* ── Scroll-in fade-up effect — same pattern used on the Services page ── */
// function useInView(threshold = 0.1) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold },
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// const fadeUp = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateY(0)" : "translateY(24px)",
//   transition: `opacity 0.9s ease ${d}, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${d}`,
// });

// const ICONS = {
//   user: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-[18px] h-[18px]">
//       <circle cx="12" cy="8" r="3.6" />
//       <path d="M4.5 19.5c0-3.8 3.4-6.5 7.5-6.5s7.5 2.7 7.5 6.5" />
//     </svg>
//   ),
//   eye: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-[18px] h-[18px]">
//       <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   ),
//   eyeOff: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-[18px] h-[18px]">
//       <path d="M3 3l18 18" />
//       <path d="M10.6 10.6a3 3 0 0 0 4.24 4.24" />
//       <path d="M9.3 5.3A10.6 10.6 0 0 1 12 5c6.5 0 10 7 10 7a13.6 13.6 0 0 1-3.2 4.1M6.2 6.7C3.6 8.4 2 12 2 12s3.5 7 10 7c1.1 0 2.1-.15 3-.44" />
//     </svg>
//   ),
//   lock: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-[18px] h-[18px]">
//       <rect x="6" y="10" width="12" height="10" rx="1.3" />
//       <path d="M8.5 10V7.6a3.5 3.5 0 0 1 7 0V10" />
//       <circle cx="12" cy="14.6" r="1" fill="currentColor" stroke="none" />
//     </svg>
//   ),
//   shieldSeal: (
//     <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
//       <circle cx="24" cy="24" r="22.5" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
//       <circle cx="24" cy="24" r="18.5" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
//       <path
//         d="M24 10.5l10.5 4v7c0 7-4.5 11.6-10.5 14-6-2.4-10.5-7-10.5-14v-7l10.5-4Z"
//         stroke="rgba(255,255,255,0.75)"
//         strokeWidth="1.1"
//         fill="none"
//       />
//       <text
//         x="24"
//         y="26.5"
//         textAnchor="middle"
//         fontFamily="'Cormorant Garamond', Georgia, serif"
//         fontSize="12"
//         fill="rgba(255,255,255,0.85)"
//       >
//         S&amp;T
//       </text>
//     </svg>
//   ),
//   encryption: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-4">
//       <rect x="5" y="10" width="14" height="9" rx="1.2" />
//       <path d="M8 10V7a4 4 0 0 1 8 0v3" />
//     </svg>
//   ),
//   insured: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-4">
//       <path d="M12 3l7.5 3.2v5.4c0 5-3.2 8.3-7.5 9.7-4.3-1.4-7.5-4.7-7.5-9.7V6.2L12 3Z" />
//       <path d="M9 12l2.2 2.2L15.5 9.6" />
//     </svg>
//   ),
//   monitoring: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-4">
//       <circle cx="12" cy="12" r="8.5" />
//       <path d="M12 7.5V12l3 2" />
//     </svg>
//   ),
// };

// const TRUST_MARKS = [
//   { icon: "encryption", label: "AES-256 ENCRYPTION" },
//   { icon: "insured", label: "SOC 2 TYPE II CERTIFIED" },
//   { icon: "monitoring", label: "24/7 FRAUD MONITORING" },
// ];

// /* ── Floating-label field — the underline treatment replaces boxed
//    inputs with something that reads private-banking rather than
//    generic SaaS form ── */
// function Field({
//   id,
//   label,
//   icon,
//   type = "text",
//   value,
//   onChange,
//   error,
//   autoComplete,
//   rightSlot,
// }) {
//   return (
//     <div className="relative">
//       <div
//         className={`flex items-end gap-3 border-b pb-2.5 transition-colors ${
//           error ? "border-[#f28b82]" : "border-white/20 focus-within:border-white/70"
//         }`}
//       >
//         <span className="text-white/35 pb-0.5">{icon}</span>
//         <div className="relative flex-1">
//           <input
//             id={id}
//             name={id}
//             type={type}
//             autoComplete={autoComplete}
//             placeholder=" "
//             value={value}
//             onChange={onChange}
//             aria-invalid={!!error}
//             aria-describedby={error ? `${id}-error` : undefined}
//             style={{ fontFamily: fontBody }}
//             className="peer w-full bg-transparent text-[15px] text-white outline-none pt-4 pb-0.5 placeholder-transparent"
//           />
//           <label
//             htmlFor={id}
//             style={{ fontFamily: fontLabel }}
//             className="absolute left-0 top-4 text-white/40 text-[11px] tracking-[0.14em] uppercase
//               transition-all duration-200 pointer-events-none
//               peer-focus:top-0 peer-focus:text-[10px] peer-focus:tracking-[0.18em]
//               peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px]"
//           >
//             {label}
//           </label>
//         </div>
//         {rightSlot}
//       </div>
//       {error && (
//         <p id={`${id}-error`} className="mt-1.5 text-xs text-[#f28b82]" style={{ fontFamily: fontBody }}>
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }

// export default function EBankingLoginPage() {
//   const [values, setValues] = useState({ username: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [serverError, setServerError] = useState("");

//   const [cardRef, cardInView] = useInView(0.05);
//   const [formRef, formInView] = useInView(0.1);
//   const [panelRef, panelInView] = useInView(0.1);

//   const handleChange = (field) => (e) => {
//     setValues((v) => ({ ...v, [field]: e.target.value }));
//     if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
//     if (serverError) setServerError("");
//   };

//   const validate = () => {
//     const next = {};
//     if (!values.username.trim()) {
//       next.username = "User name is required.";
//     } else if (values.username.trim().length < 3) {
//       next.username = "User name must be at least 3 characters.";
//     }
//     if (!values.password) {
//       next.password = "Password is required.";
//     } else if (values.password.length < 6) {
//       next.password = "Password must be at least 6 characters.";
//     }
//     setErrors(next);
//     return Object.keys(next).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setSubmitting(true);
//     setServerError("");

//     try {
//       // TODO: replace with your real authentication endpoint
//       // const res = await fetch("/api/auth/login", {
//       //   method: "POST",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify(values),
//       // });
//       // if (!res.ok) throw new Error("Invalid user name or password.");

//       await new Promise((r) => setTimeout(r, 900)); // placeholder delay
//     } catch (err) {
//       setServerError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <SavoyHeader phase={4} />

//       <main
//         className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 pt-32 pb-10 sm:pt-44 sm:pb-14"
//         style={{ background: SAVOY_BG }}
//       >
//         {/* ── Ambient radial glow, neutral ── */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(55% 45% at 50% 0%, rgba(255,255,255,0.045), transparent 70%)",
//           }}
//         />

//         {/* ── Decorative watermark, bottom-left ── */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none select-none absolute -left-24 -bottom-5 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] hidden sm:block"
//           style={{
//             opacity: WATERMARK_OPACITY,
//             filter: `contrast(${WATERMARK_CONTRAST}) brightness(${WATERMARK_BRIGHTNESS})`,
//           }}
//         >
//           <Image src="/logo-savoy.png" alt="" fill sizes="520px" className="object-contain" />
//         </div>

//         {/* ── Card ── */}
//         <div
//           ref={cardRef}
//           className="relative w-full max-w-[1080px] rounded-sm border overflow-hidden"
//           style={{
//             background: SAVOY_BG,
//             borderColor: "rgba(255,255,255,0.12)",
//             ...fadeUp(cardInView, "0.05s"),
//           }}
//         >
//           {/* hairline top edge — quiet signature detail, no color, no shadow */}
//           <div
//             aria-hidden="true"
//             className="h-px w-full"
//             style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)" }}
//           />

//           <div className="relative grid grid-cols-1 md:grid-cols-2">
//             <span
//               aria-hidden="true"
//               className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[68%]"
//               style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)" }}
//             />

//             {/* ───────────── Left: form ───────────── */}
//             <div ref={formRef} className="p-8 sm:p-12 lg:p-14" style={fadeUp(formInView, "0.15s")}>
//               <p
//                 className="text-center text-[10px] tracking-[0.32em] mb-3 text-white/50"
//                 style={{ fontFamily: fontLabel }}
//               >
//                 PRIVATE CLIENT ACCESS
//               </p>

//               <h1
//                 className="text-center leading-tight text-white/95"
//                 style={{ fontFamily: fontHeading, fontSize: "clamp(1.75rem, 1.4rem + 1.6vw, 2.35rem)" }}
//               >
//                 Savoy e-Banking
//               </h1>

//               <div className="flex items-center justify-center gap-3 my-4 sm:my-5">
//                 <span className="h-px w-14 sm:w-20 md:w-28" style={{ background: "linear-gradient(to left, rgba(255,255,255,0.4), transparent)" }} />
//                 <Image src="/logo-savoy.png" alt="Savoy Bank & Trust" width={22} height={22} className="w-[22px] h-[22px] object-contain" priority />
//                 <span className="h-px w-14 sm:w-20 md:w-28" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.4), transparent)" }} />
//               </div>

//               <p
//                 className="text-center text-white/45 mb-2 px-2 text-[13px]"
//                 style={{ fontFamily: fontBody }}
//               >
//                 Sign in with your registered user name and Grid Card credentials.
//               </p>

//               {/* Real, specific connection status — not decorative */}
//               <div
//                 className="flex items-center justify-center gap-1.5 mb-8 sm:mb-10 text-white/35 text-[10.5px] tracking-[0.08em]"
//                 style={{ fontFamily: fontLabel }}
//               >
//                 <span className="relative flex h-1.5 w-1.5">
//                   <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 animate-ping" />
//                   <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400/80" />
//                 </span>
//                 <span>Connection secured — TLS 1.3 / AES-256</span>
//               </div>

//               <form onSubmit={handleSubmit} noValidate className="space-y-8">
//                 <Field
//                   id="username"
//                   label="User Name"
//                   icon={ICONS.user}
//                   value={values.username}
//                   onChange={handleChange("username")}
//                   error={errors.username}
//                   autoComplete="username"
//                 />

//                 <Field
//                   id="password"
//                   label="Password"
//                   icon={ICONS.lock}
//                   type={showPassword ? "text" : "password"}
//                   value={values.password}
//                   onChange={handleChange("password")}
//                   error={errors.password}
//                   autoComplete="current-password"
//                   rightSlot={
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((s) => !s)}
//                       aria-label={showPassword ? "Hide password" : "Show password"}
//                       className="text-white/35 hover:text-white/70 transition-colors pb-1"
//                     >
//                       {showPassword ? ICONS.eyeOff : ICONS.eye}
//                     </button>
//                   }
//                 />

//                 {serverError && (
//                   <p role="alert" className="text-sm text-[#f28b82] text-center" style={{ fontFamily: fontBody }}>
//                     {serverError}
//                   </p>
//                 )}

//                 <div className="flex justify-center pt-2">
//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="h-12 w-full sm:w-[72%] bg-white/95 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed text-[#07192c] font-medium text-[13px] tracking-[0.22em] hover:tracking-[0.26em] transition-all duration-300 ease-out"
//                     style={{ fontFamily: fontLabel }}
//                   >
//                     {submitting ? "SIGNING IN…" : "LOGIN"}
//                   </button>
//                 </div>

//                 <div className="flex items-center justify-center gap-2 text-xs text-white/45 pt-1" style={{ fontFamily: fontBody }}>
//                   <span>Need assistance?</span>
//                   <Link href="/contact-us" className="text-white/75 underline underline-offset-2 hover:text-white transition-colors">
//                     Contact Support
//                   </Link>
//                 </div>
//               </form>

//               {/* Trust strip */}
//               <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
//                 {TRUST_MARKS.map((t) => (
//                   <div key={t.label} className="flex items-center gap-1.5 text-white/40" style={{ fontFamily: fontLabel }}>
//                     <span className="text-white/55">{ICONS[t.icon]}</span>
//                     <span className="text-[9.5px] tracking-[0.14em]">{t.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ───────────── Right: image panel ───────────── */}
//             <div ref={panelRef} className="relative hidden md:flex flex-col" style={fadeUp(panelInView, "0.25s")}>
//               <div className="relative w-full h-full overflow-hidden" style={{ background: SAVOY_BG }}>
//                 <div className="relative h-[420px] lg:h-full lg:min-h-[560px]">
//                   <Image
//                     src="/savoy-ebank.png"
//                     alt="Savoy Bank & Trust — private banking hall"
//                     fill
//                     sizes="(min-width: 1024px) 540px, 100vw"
//                     className="object-cover"
//                     style={{ filter: "grayscale(0.2) contrast(1.06) brightness(0.96)" }}
//                   />
//                   <div
//                     className="absolute inset-0"
//                     style={{
//                       background: `linear-gradient(180deg, rgba(3,22,41,0.15) 0%, rgba(3,22,41,0.05) 35%, rgba(3,22,41,0.55) 78%, ${SAVOY_BG} 100%)`,
//                     }}
//                   />
//                   <div
//                     className="absolute inset-0"
//                     style={{ background: `linear-gradient(90deg, ${SAVOY_BG} 0%, transparent 12%)` }}
//                   />
//                 </div>

//                 {/* Monogram seal, overlapping the image/content boundary */}
//                 <div className="absolute left-10 lg:left-12 top-[420px] lg:top-auto lg:bottom-[168px] -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20">
//                   {ICONS.shieldSeal}
//                 </div>

//                 <div className="absolute inset-x-0 bottom-0 px-10 lg:px-12 pb-12 pt-16">
//                   <h2
//                     className="text-2xl lg:text-[1.8rem] text-white/95 leading-tight max-w-xs"
//                     style={{ fontFamily: fontHeading }}
//                   >
//                     Grid Card Security
//                   </h2>
//                   <p
//                     className="mt-3 text-[13px] leading-5 text-white/55 max-w-[19rem]"
//                     style={{ fontFamily: fontBody }}
//                   >
//                     Access is granted only with your individual user name paired
//                     with your personal Grid Card values — a second layer of
//                     verification unique to you.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SavoyHeader from "@/components/SavoyHeader";
import BrandFooterSection from "@/components/Brandfootersection";

/* ─────────────────────────────────────────────
   Savoy E-Banking — Secure Login Page (Private Client)
   Drop this file in: app/e-banking/page.jsx
   (or app/login/page.jsx — rename the route as needed)

   Expects these files to exist in /public:
     - logo-savoy.png     (brand mark)
     - savoy-ebank.png    (right-side feature image — see note
                            at the bottom of this file for sourcing)
───────────────────────────────────────────── */

const WATERMARK_OPACITY = 0.06;
const WATERMARK_CONTRAST = 1.2;
const WATERMARK_BRIGHTNESS = 1.1;

const SAVOY_BG = "var(--savoy-bg, rgb(3,22,41))";

/* ── Font tokens — unchanged, match the site-wide overrides in globals.css ── */
const fontHeading = "'Cormorant Garamond', Georgia, serif";
const fontBody = "'Inter', system-ui, sans-serif";
const fontLabel = "'Montserrat', system-ui, sans-serif";

/* ── Scroll-in fade-up effect — same pattern used on the Services page ── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const fadeUp = (v, d = "0s") => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(24px)",
  transition: `opacity 0.9s ease ${d}, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${d}`,
});

const ICONS = {
  user: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="w-[18px] h-[18px]"
    >
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 19.5c0-3.8 3.4-6.5 7.5-6.5s7.5 2.7 7.5 6.5" />
    </svg>
  ),
  eye: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="w-[18px] h-[18px]"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  eyeOff: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="w-[18px] h-[18px]"
    >
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6a3 3 0 0 0 4.24 4.24" />
      <path d="M9.3 5.3A10.6 10.6 0 0 1 12 5c6.5 0 10 7 10 7a13.6 13.6 0 0 1-3.2 4.1M6.2 6.7C3.6 8.4 2 12 2 12s3.5 7 10 7c1.1 0 2.1-.15 3-.44" />
    </svg>
  ),
  lock: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="w-[18px] h-[18px]"
    >
      <rect x="6" y="10" width="12" height="10" rx="1.3" />
      <path d="M8.5 10V7.6a3.5 3.5 0 0 1 7 0V10" />
      <circle cx="12" cy="14.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  shieldSeal: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle
        cx="24"
        cy="24"
        r="22.5"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1"
      />

      <rect
        x="14"
        y="21"
        width="20"
        height="16"
        rx="2"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="1.5"
      />

      <path
        d="M18 21v-5.5a6 6 0 0 1 12 0V21"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle cx="24" cy="28" r="1.8" fill="rgba(255,255,255,0.85)" />

      <path
        d="M24 30v3"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  encryption: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className="w-4 h-4"
    >
      <rect x="5" y="10" width="14" height="9" rx="1.2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  insured: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className="w-4 h-4"
    >
      <path d="M12 3l7.5 3.2v5.4c0 5-3.2 8.3-7.5 9.7-4.3-1.4-7.5-4.7-7.5-9.7V6.2L12 3Z" />
      <path d="M9 12l2.2 2.2L15.5 9.6" />
    </svg>
  ),
  monitoring: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className="w-4 h-4"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
};

const TRUST_MARKS = [
  { icon: "encryption", label: "256-BIT ENCRYPTION" },
  { icon: "insured", label: "FDIC MEMBER INSURED" },
  { icon: "monitoring", label: "24/7 FRAUD MONITORING" },
];

/* ── Floating-label field — the underline treatment replaces boxed
   inputs with something that reads private-banking rather than
   generic SaaS form ── */
function Field({
  id,
  label,
  icon,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
  rightSlot,
}) {
  return (
    <div className="relative">
      <div
        className={`flex items-end gap-3 border-b pb-2.5 transition-colors ${
          error
            ? "border-[#f28b82]"
            : "border-white/20 focus-within:border-white/70"
        }`}
      >
        <span className="text-white/35 pb-0.5">{icon}</span>
        <div className="relative flex-1">
          <input
            id={id}
            name={id}
            type={type}
            autoComplete={autoComplete}
            placeholder=" "
            value={value}
            onChange={onChange}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            style={{ fontFamily: fontBody }}
            className="peer w-full bg-transparent text-[15px] text-white outline-none pt-4 pb-0.5 placeholder-transparent"
          />
          <label
            htmlFor={id}
            style={{ fontFamily: fontLabel }}
            className="absolute left-0 top-4 text-white/40 text-[11px] tracking-[0.14em] uppercase
              transition-all duration-200 pointer-events-none
              peer-focus:top-0 peer-focus:text-[10px] peer-focus:tracking-[0.18em]
              peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px]"
          >
            {label}
          </label>
        </div>
        {rightSlot}
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-xs text-[#f28b82]"
          style={{ fontFamily: fontBody }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function EBankingLoginPage() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const [cardRef, cardInView] = useInView(0.05);
  const [formRef, formInView] = useInView(0.1);
  const [panelRef, panelInView] = useInView(0.1);

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    if (serverError) setServerError("");
  };

  const validate = () => {
    const next = {};
    if (!values.username.trim()) {
      next.username = "User name is required.";
    } else if (values.username.trim().length < 3) {
      next.username = "User name must be at least 3 characters.";
    }
    if (!values.password) {
      next.password = "Password is required.";
    } else if (values.password.length < 6) {
      next.password = "Password must be at least 6 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setServerError("");

    try {
      // TODO: replace with your real authentication endpoint
      // const res = await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(values),
      // });
      // if (!res.ok) throw new Error("Invalid user name or password.");

      await new Promise((r) => setTimeout(r, 900)); // placeholder delay
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SavoyHeader phase={4} />

      <main
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 pt-32 pb-10 sm:pt-44 sm:pb-14"
        style={{ background: SAVOY_BG }}
      >
        {/* ── Ambient radial glow, neutral ── */}
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, rgba(255,255,255,0.045), transparent 70%)",
          }}
        /> */}

        {/* ── Decorative watermark, bottom-left ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -left-24 -bottom-5 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] hidden sm:block"
          style={{
            opacity: WATERMARK_OPACITY,
            filter: `contrast(${WATERMARK_CONTRAST}) brightness(${WATERMARK_BRIGHTNESS})`,
          }}
        >
          <Image
            src="/logo-savoy.png"
            alt=""
            fill
            sizes="520px"
            className="object-contain"
          />
        </div>

        {/* ── Card ── */}
        <div
          ref={cardRef}
          className="relative w-full max-w-[1080px] rounded-xl border overflow-hidden"
          style={{
            background: SAVOY_BG,
            borderColor: "rgba(255,255,255,0.12)",
            // boxShadow: "0 40px 80px -30px rgba(0,0,0,0.55)",
            ...fadeUp(cardInView, "0.05s"),
          }}
        >
          {/* hairline top edge — quiet signature detail, monochrome */}
          <div
            aria-hidden="true"
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2">
            <span
              aria-hidden="true"
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[68%]"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)",
              }}
            />

            {/* ───────────── Left: form ───────────── */}
            {/* <div ref={formRef} className="p-8 sm:p-12 lg:p-14" style={fadeUp(formInView, "0.15s")}> */}
            {/* ───────────── Left: form ───────────── */}
            <div
              ref={formRef}
              className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center h-full"
              style={fadeUp(formInView, "0.15s")}
            >
              <p
                className="text-center text-[10px] tracking-[0.32em] mb-3 text-white/50"
                style={{ fontFamily: fontLabel }}
              >
                PRIVATE CLIENT ACCESS
              </p>

              <h1
                className="text-center leading-tight text-white/95"
                style={{
                  fontFamily: fontHeading,
                  fontSize: "clamp(1.75rem, 1.4rem + 1.6vw, 2.35rem)",
                }}
              >
                Savoy e-Banking
              </h1>

              <div className="flex items-center justify-center gap-3 my-4 sm:my-5">
                <span
                  className="h-px w-14 sm:w-20 md:w-28"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255,255,255,0.4), transparent)",
                  }}
                />
                <Image
                  src="/logo-savoy.png"
                  alt="Savoy Bank & Trust"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px] object-contain"
                  priority
                />
                <span
                  className="h-px w-14 sm:w-20 md:w-28"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(255,255,255,0.4), transparent)",
                  }}
                />
              </div>

              <p
                className="text-center text-white/45 mb-8 sm:mb-10 px-2 text-[13px]"
                style={{ fontFamily: fontBody }}
              >
                Sign in with your registered user name and Grid Card
                credentials.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <Field
                  id="username"
                  label="User Name"
                  icon={ICONS.user}
                  value={values.username}
                  onChange={handleChange("username")}
                  error={errors.username}
                  autoComplete="username"
                />

                <Field
                  id="password"
                  label="Password"
                  icon={ICONS.lock}
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  error={errors.password}
                  autoComplete="current-password"
                  rightSlot={
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="text-white/35 hover:text-white/70 transition-colors pb-1"
                    >
                      {showPassword ? ICONS.eyeOff : ICONS.eye}
                    </button>
                  }
                />

                {serverError && (
                  <p
                    role="alert"
                    className="text-sm text-[#f28b82] text-center"
                    style={{ fontFamily: fontBody }}
                  >
                    {serverError}
                  </p>
                )}

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative h-12 w-full sm:w-[72%] overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed text-[#07192c] font-medium tracking-[0.22em] text-[13px] transition-colors bg-white/95 hover:bg-white"
                    style={{ fontFamily: fontLabel }}
                  >
                    <span className="relative z-10">
                      {submitting ? "SIGNING IN…" : "LOGIN"}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-white/25 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                    />
                  </button>
                </div>

                <div
                  className="flex items-center justify-center gap-2 text-xs text-white/45 pt-1"
                  style={{ fontFamily: fontBody }}
                >
                  <span>Need assistance?</span>
                  <Link
                    href="/contact-us"
                    className="text-white/75 underline underline-offset-2 hover:text-white transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </form>

              {/* Trust strip */}
              {/* <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {TRUST_MARKS.map((t) => (
                  <div key={t.label} className="flex items-center gap-1.5 text-white/40" style={{ fontFamily: fontLabel }}>
                    <span className="text-white/55">{ICONS[t.icon]}</span>
                    <span className="text-[9.5px] tracking-[0.14em]">{t.label}</span>
                  </div>
                ))}
              </div> */}
            </div>

            {/* ───────────── Right: image panel ───────────── */}
            <div
              ref={panelRef}
              className="relative hidden md:flex flex-col"
              style={fadeUp(panelInView, "0.25s")}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ background: SAVOY_BG }}
              >
                {/* IMAGE SECTION */}
                <div
                  className="relative h-[420px] lg:h-[560px] overflow-hidden flex items-center justify-center p-12 lg:p-16"
                  style={{ background: SAVOY_BG }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/logo-savoy.png"
                      alt="Savoy Bank & Trust — private banking hall"
                      fill
                      sizes="(min-width: 1024px) 540px, 100vw"
                      className="object-contain object-center"
                      // style={{
                      //   filter: "grayscale(1.2) contrast(1.06) brightness(0.96)"
                      // }}
                    />
                  </div>

                  {/* image overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    // style={{
                    //   background: `linear-gradient(90deg, ${SAVOY_BG} 0%, transparent 18%)`
                    // }}
                  />
                </div>

                {/* CONTENT SECTION */}
                <div className="relative px-10 lg:px-12 py-12 bg-[#001a33]">
                  {/* Monogram */}
                  <div className="absolute -top-10 left-10 lg:left-12 w-16 h-16 lg:w-20 lg:h-20">
                    {ICONS.shieldSeal}
                  </div>

                  <h2
                    className="text-2xl lg:text-[1.8rem] text-white/95 leading-tight max-w-xs"
                    style={{ fontFamily: fontHeading }}
                  >
                    Grid Card Security
                  </h2>

                  <p
                    className="mt-3 text-[13px] leading-5 text-white/55 max-w-[19rem]"
                    style={{ fontFamily: fontBody }}
                  >
                    Access is granted only with your individual user name paired
                    with your personal Grid Card values — a second layer of
                    verification unique to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BrandFooterSection />
    </>
  );
}

/* ─────────────────────────────────────────────
   Image note for /public/savoy-ebank.png

   The panel is graded cool and slightly desaturated (grayscale 0.2,
   contrast 1.06) to sit inside the navy/white palette without
   introducing a competing color. Look for dark stone or concrete
   architecture, a vault door, or a quiet private banking interior
   shot with directional (not flat) light — texture and geometry do
   the premium work here, not warmth or color.

   Free-license sources that fit this brief:
   - Unsplash: search "bank vault door", "concrete architecture
     interior", "dark marble hallway"
   - Pexels: search "private bank interior", "modern vault"

   Recommended crop: portrait-leaning, subject weighted to the
   upper-left third so the gradient overlay at the bottom (where the
   heading sits) falls on open space, not a face or detail.
───────────────────────────────────────────── */
