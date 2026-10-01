// // "use client";

// // import { useState } from "react";
// // import SavoyHeader from "@/components/SavoyHeader";
// // import BrandFooterSection from "@/components/Brandfootersection";

// // const globalStyles = `
// //   @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
// //   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
// //   @import url('https://fonts.cdnfonts.com/css/general-sans');

// //   .mobile-nav {
// //     position: fixed; inset: 0;
// //     background: rgba(0,26,51,0.97);
// //     z-index: 100;
// //     display: flex; flex-direction: column; align-items: center; justify-content: center;
// //     gap: 2.5rem;
// //     pointer-events: none; opacity: 0; transform: translateY(-24px);
// //     transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
// //   }
// //   .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
// //   .mobile-nav a {
// //     font-family: 'Cormorant', Georgia, serif;
// //     color: #fff; font-size: clamp(1.6rem, 6vw, 2.4rem);
// //     font-weight: 300; letter-spacing: 0.18em;
// //     text-decoration: none; text-transform: uppercase;
// //   }
// //   .hamburger-btn {
// //     display: none; flex-direction: column; gap: 5px;
// //     background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
// //   }
// //   .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
// //   @media (max-width: 1024px) {
// //     .hamburger-btn { display: flex; }
// //     .desktop-nav { display: none !important; }
// //   }
// //   .page-header {
// //     position: absolute !important;
// //     background: linear-gradient(to bottom, rgba(0,26,51,0.72) 0%, transparent 100%);
// //   }

// //   .savoy-input {
// //     background: transparent;
// //     border: none;
// //     border-bottom: 1px solid rgba(255,255,255,0.18);
// //     color: #fff;
// //     outline: none;
// //     width: 100%;
// //     padding: 0.55rem 0;
// //     font-weight: 300;
// //     transition: border-color 0.25s;
// //   }
// //   .savoy-input::placeholder { color: rgba(255,255,255,0.22); }
// //   .savoy-input:focus { border-bottom-color: rgba(255,255,255,0.7); }

// //   .savoy-textarea {
// //     background: transparent;
// //     border: 1px solid rgba(255,255,255,0.18);
// //     color: #fff;
// //     outline: none;
// //     width: 100%;
// //     padding: 0.75rem;
// //     font-weight: 300;
// //     resize: vertical;
// //     transition: border-color 0.25s;
// //     min-height: 160px;
// //   }
// //   .savoy-textarea::placeholder { color: rgba(255,255,255,0.22); }
// //   .savoy-textarea:focus { border-color: rgba(255,255,255,0.7); }

// //   .savoy-checkbox {
// //     appearance: none;
// //     -webkit-appearance: none;
// //     width: 14px;
// //     height: 14px;
// //     border: 1px solid rgba(255,255,255,0.35);
// //     background: transparent;
// //     cursor: pointer;
// //     flex-shrink: 0;
// //     transition: border-color 0.25s, background 0.25s;
// //   }
// //   .savoy-checkbox:checked { background: #fff; border-color: #fff; }
// //   .savoy-checkbox:focus { outline: none; }
// // `;

// // const serif = "'Cormorant Garamond', Georgia, serif";
// // const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

// // export default function ContactUs() {
// //   const [form, setForm] = useState({ name: "", email: "", phone: "", enquiry: "", agreed: false });
// //   const [submitted, setSubmitted] = useState(false);
// //   const [loading, setLoading]     = useState(false);

// //   function handleChange(e) {
// //     const { name, value, type, checked } = e.target;
// //     setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
// //   }

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     if (!form.agreed) return;
// //     setLoading(true);
// //     setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
// //   }

// //   return (
// //     <>
// //       <style>{globalStyles}</style>
// //       <SavoyHeader phase={4} />

// //       <main className="bg-[#001a33] text-white min-h-screen">

// //         {/* ── HEADING ─────────────────────────────────────── */}
// //         <section className="pt-48 pb-10 px-8 md:px-20 lg:px-32">
// //           <h1
// //             style={{ fontFamily: serif, fontSize: "clamp(1.2rem,4vw,2.8rem)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "0.04em" }}
// //             className="text-white uppercase mb-5"
// //           >
// //             Contact Us
// //           </h1>
// //           <div className="w-10 h-px bg-white mb-6" />
// //           <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300 }} className="text-white tracking-wider">
// //             For Professional Clients and Market Counterparties only
// //           </p>
// //         </section>

// //         <div className="w-full h-px bg-[#001a33]" />

// //         {/* ── FORM ─────────────────────────────────────────── */}
// //         <section className="py-16 px-8 md:px-20 lg:px-32">
// //           <div className="max-w-lg">

// //             {submitted ? (
// //               <div className="py-16">
// //                 <span className="block w-10 h-px bg-white mb-8" />
// //                 <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 300, lineHeight: 1.1 }} className="text-white mb-4">
// //                   Thank you for your enquiry.
// //                 </h2>
// //                 <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.8 }} className="text-white/45">
// //                   Your submission has been received. Only relevant introductions will receive a response.
// //                 </p>
// //               </div>
// //             ) : (
// //               <form onSubmit={handleSubmit} noValidate>

// //                 {/* Name */}
// //                 <div className="mb-8">
// //                   <label style={{ fontFamily: sans, fontSize: "0.9rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
// //                     Name in Full
// //                   </label>
// //                   <input type="text" name="name" required value={form.name} onChange={handleChange}
// //                     placeholder="Your full name" className="savoy-input" style={{ fontFamily: sans, fontSize: "0.90rem" }} />
// //                 </div>

// //                 {/* Email */}
// //                 <div className="mb-8">
// //                   <label style={{ fontFamily: sans, fontSize: "0.9rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
// //                     Email
// //                   </label>
// //                   <input type="email" name="email" required value={form.email} onChange={handleChange}
// //                     placeholder="your@email.com" className="savoy-input" style={{ fontFamily: sans, fontSize: "0.90rem" }} />
// //                 </div>

// //                 {/* Phone */}
// //                 <div className="mb-8">
// //                   <label style={{ fontFamily: sans, fontSize: "0.9rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
// //                     Phone Number
// //                   </label>
// //                   <input type="tel" name="phone" value={form.phone} onChange={handleChange}
// //                     placeholder="+1 000 000 0000" className="savoy-input" style={{ fontFamily: sans, fontSize: "0.90rem" }} />
// //                 </div>

// //                 {/* Enquiry */}
// //                 <div className="mb-10">
// //                   <label style={{ fontFamily: sans, fontSize: "0.9rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
// //                     Enquiry
// //                   </label>
// //                   <textarea name="enquiry" required value={form.enquiry} onChange={handleChange}
// //                     placeholder="Please describe your enquiry…" className="savoy-textarea" style={{ fontFamily: sans, fontSize: "0.90rem" }} />
// //                 </div>

// //                 {/* Checkbox */}
// //                 <div className="flex items-start gap-3 mb-10">
// //                   <input type="checkbox" name="agreed" id="agreed" checked={form.agreed} onChange={handleChange} className="savoy-checkbox mt-1" />
// //                   <label htmlFor="agreed"
// //                     style={{ fontFamily: sans, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.7, cursor: "pointer" }}
// //                     className="text-white"
// //                   >
// //                     I confirm that I am a Professional Client / Market Counterparty and agree to the terms.
// //                   </label>
// //                 </div>

// //                 {/* Submit */}
// //                 <div className="mb-10">
// //                   <button
// //                     type="submit"
// //                     disabled={!form.agreed || loading}
// //                     style={{ fontFamily: sans, fontSize: "0.72rem", letterSpacing: "0.18em", cursor: form.agreed ? "pointer" : "not-allowed" }}
// //                     className={`uppercase text-white border px-10 py-3 transition-all duration-300 bg-transparent
// //                       ${form.agreed ? "border-white/80 hover:border-white hover:bg-white/5" : "border-white/10 text-white/25"}`}
// //                   >
// //                     {loading ? "Sending…" : "Submit"}
// //                   </button>
// //                 </div>

// //                 {/* Disclaimer */}
// //                 <div className="border-t border-white/10 pt-6">
// //                   <p style={{ fontFamily: sans, fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.8 }} className="text-white">
// //                     All submissions are subject to internal review.<br />
// //                     Only relevant introductions will receive a response.
// //                   </p>
// //                 </div>

// //               </form>
// //             )}
// //           </div>
// //         </section>

// //         <div className="w-full h-px bg-[#001a33]" />

// //         {/* ── CONTACT DETAILS ─────────────────────────────── */}
// //         <section className="py-16 px-8 md:px-20 lg:px-32">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-2xl">

// //             <div>
// //               <p style={{ fontFamily: sans, fontSize: "0.65rem", letterSpacing: "0.2em" }} className="uppercase text-white mb-3">Email</p>
// //               <a href="mailto:info@savoybankandtrust.com"
// //                 style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300 }}
// //                 className="text-white hover:text-white transition-colors no-underline">
// //                 info@savoybankandtrust.com
// //               </a>
// //             </div>

// //             <div>
// //               <p style={{ fontFamily: sans, fontSize: "0.65rem", letterSpacing: "0.2em" }} className="uppercase text-white mb-3">Location</p>
// //               <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7 }} className="text-white">
// //                 Nassau,<br />The Bahamas
// //               </p>
// //             </div>

// //             <div>
// //               <p style={{ fontFamily: sans, fontSize: "0.65rem", letterSpacing: "0.2em" }} className="uppercase text-white mb-3">Regulated By</p>
// //               <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7 }} className="text-white">
// //                 Securities Commission<br />of The Bahamas
// //               </p>
// //             </div>

// //           </div>
// //         </section>

// //         <div className="w-full h-px bg-[#001a33]" />

// //       </main>

// //       <BrandFooterSection />
// //     </>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
//   @import url('https://fonts.cdnfonts.com/css/general-sans');

//   .mobile-nav {
//     position: fixed; inset: 0;
//     background: rgba(var(--savoy-bg-rgb),0.97);
//     z-index: 100;
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     gap: 2.5rem;
//     pointer-events: none; opacity: 0; transform: translateY(-24px);
//     transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//   }
//   .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//   .mobile-nav a {
//     font-family: 'Cormorant', Georgia, serif;
//     color: #fff; font-size: clamp(1.6rem, 6vw, 2.4rem);
//     font-weight: 300; letter-spacing: 0.18em;
//     text-decoration: none; text-transform: uppercase;
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
//     background: linear-gradient(to bottom, rgba(var(--savoy-bg-rgb),0.72) 0%, transparent 100%);
//   }

//   .savoy-input {
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid rgba(255,255,255,0.18);
//     color: #fff;
//     outline: none;
//     width: 100%;
//     padding: 0.55rem 0;
//     font-weight: 300;
//     transition: border-color 0.25s;
//   }
//   .savoy-input::placeholder { color: rgba(255,255,255,0.22); }
//   .savoy-input:focus { border-bottom-color: rgba(255,255,255,0.7); }

//   .savoy-textarea {
//     background: transparent;
//     border: 1px solid rgba(255,255,255,0.18);
//     color: #fff;
//     outline: none;
//     width: 100%;
//     padding: 0.75rem;
//     font-weight: 300;
//     resize: vertical;
//     transition: border-color 0.25s;
//     min-height: 160px;
//   }
//   .savoy-textarea::placeholder { color: rgba(255,255,255,0.22); }
//   .savoy-textarea:focus { border-color: rgba(255,255,255,0.7); }

//   .savoy-checkbox {
//     appearance: none;
//     -webkit-appearance: none;
//     width: 14px;
//     height: 14px;
//     border: 1px solid rgba(255,255,255,0.35);
//     background: transparent;
//     cursor: pointer;
//     flex-shrink: 0;
//     transition: border-color 0.25s, background 0.25s;
//   }
//   .savoy-checkbox:checked { background: #fff; border-color: #fff; }
//   .savoy-checkbox:focus { outline: none; }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

// export default function ContactUs() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", enquiry: "", agreed: false });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading]     = useState(false);

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!form.agreed) return;
//     setLoading(true);
//     setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
//   }

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="bg-[#001a33] text-white min-h-screen">

//         {/* ── MOBILE IMAGE — shows above everything on mobile only ── */}
//         {/* <div className="md:hidden relative w-full top-40" style={{ height: "300px" }}>
//           <Image
//             src="/logo-savoy.png"
//             alt="Savoy"
//             fill
//             priority
//             style={{ objectFit: "cover", objectPosition: "center", opacity: 0.9 }}
//           /> */}
//           {/* fade to black at bottom */}
//           {/* <div style={{
//             position: "absolute", inset: 0,
//             background: "linear-gradient(to bottom, transparent 30%, black 100%)",
//           }} />
//         </div> */}

//         {/* ── MAIN LAYOUT: left content + right sticky image (desktop) ── */}
//         <div className="flex flex-col md:flex-row md:items-stretch">

//           {/* ── LEFT: all page content ── */}
//           <div className="flex-1 min-w-0">

//             {/* HEADING */}
//             <section className="pt-40 md:pt-48 pb-10 px-6 md:px-20 lg:px-32">
//               <h1
//                 style={{ fontFamily: serif, fontSize: "clamp(1.2rem,4vw,2.8rem)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "0.04em" }}
//                 className="text-white uppercase mb-5"
//               >
//                 Contact Us
//               </h1>
//               <div className="w-10 h-px bg-white mb-6" />
//               <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300 }} className="text-white tracking-wider">
//                 For Professional Clients and Market Counterparties only
//               </p>
//             </section>

//             <div className="w-full h-px bg-[#001a33]" />

//             {/* FORM */}
//             <section className="py-16 px-6 md:px-20 lg:px-32">
//               <div className="max-w-lg">

//                 {submitted ? (
//                   <div className="py-16">
//                     <span className="block w-10 h-px bg-white mb-8" />
//                     <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 300, lineHeight: 1.1 }} className="text-white mb-4">
//                       Thank you for your enquiry.
//                     </h2>
//                     <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.8 }} className="text-white/45">
//                       Your submission has been received. Only relevant introductions will receive a response.
//                     </p>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} noValidate>

//                     {/* Name */}
//                     <div className="mb-8">
//                       <label style={{ fontFamily: sans, fontSize: "0.9rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
//                         Name in Full
//                       </label>
//                       <input type="text" name="name" required value={form.name} onChange={handleChange}
//                         placeholder="Your full name" className="savoy-input" style={{ fontFamily: sans, fontSize: "0.90rem" }} />
//                     </div>

//                     {/* Email */}
//                     <div className="mb-8">
//                       <label style={{ fontFamily: sans, fontSize: "0.9rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
//                         Email
//                       </label>
//                       <input type="email" name="email" required value={form.email} onChange={handleChange}
//                         placeholder="your@email.com" className="savoy-input" style={{ fontFamily: sans, fontSize: "0.90rem" }} />
//                     </div>

//                     {/* Phone */}
//                     <div className="mb-8">
//                       <label style={{ fontFamily: sans, fontSize: "0.9rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
//                         Phone Number
//                       </label>
//                       <input type="tel" name="phone" value={form.phone} onChange={handleChange}
//                         placeholder="+1 000 000 0000" className="savoy-input" style={{ fontFamily: sans, fontSize: "0.90rem" }} />
//                     </div>

//                     {/* Enquiry */}
//                     <div className="mb-10">
//                       <label style={{ fontFamily: sans, fontSize: "0.9rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
//                         Enquiry
//                       </label>
//                       <textarea name="enquiry" required value={form.enquiry} onChange={handleChange}
//                         placeholder="Please describe your enquiry…" className="savoy-textarea" style={{ fontFamily: sans, fontSize: "0.90rem" }} />
//                     </div>

//                     {/* Checkbox */}
//                     <div className="flex items-start gap-3 mb-10">
//                       <input type="checkbox" name="agreed" id="agreed" checked={form.agreed} onChange={handleChange} className="savoy-checkbox mt-1" />
//                       <label htmlFor="agreed"
//                         style={{ fontFamily: sans, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.7, cursor: "pointer" }}
//                         className="text-white"
//                       >
//                         I confirm that I am a Professional Client / Market Counterparty and agree to the terms.
//                       </label>
//                     </div>

//                     {/* Submit */}
//                     <div className="mb-10">
//                       <button
//                         type="submit"
//                         disabled={!form.agreed || loading}
//                         style={{ fontFamily: sans, fontSize: "0.72rem", letterSpacing: "0.18em", cursor: form.agreed ? "pointer" : "not-allowed" }}
//                         className={`uppercase text-white border px-10 py-3 transition-all duration-300 bg-transparent
//                           ${form.agreed ? "border-white/80 hover:border-white hover:bg-white/5" : "border-white/10 text-white/25"}`}
//                       >
//                         {loading ? "Sending…" : "Submit"}
//                       </button>
//                     </div>

//                     {/* Disclaimer */}
//                     <div className="border-t border-white/10 pt-6">
//                       <p style={{ fontFamily: sans, fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.8 }} className="text-white">
//                         All submissions are subject to internal review.<br />
//                         Only relevant introductions will receive a response.
//                       </p>
//                     </div>

//                   </form>
//                 )}
//               </div>
//             </section>

//             <div className="w-full h-px bg-[#001a33]" />

//             {/* CONTACT DETAILS */}
//             <section className="py-16 px-6 md:px-20 lg:px-32">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-2xl">

//                 <div>
//                   <p style={{ fontFamily: sans, fontSize: "0.65rem", letterSpacing: "0.2em" }} className="uppercase text-white mb-3">Email</p>
//                   <a href="mailto:info@savoybankandtrust.com"
//                     style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300 }}
//                     className="text-white hover:text-white transition-colors no-underline break-all">
//                     info@savoybankandtrust.com
//                   </a>
//                 </div>

//                 <div>
//                   <p style={{ fontFamily: sans, fontSize: "0.65rem", letterSpacing: "0.2em" }} className="uppercase text-white mb-3">Location</p>
//                   <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7 }} className="text-white">
//                     Nassau,<br />The Bahamas
//                   </p>
//                 </div>

//                 <div>
//                   <p style={{ fontFamily: sans, fontSize: "0.65rem", letterSpacing: "0.2em" }} className="uppercase text-white mb-3">Regulated By</p>
//                   <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7 }} className="text-white">
//                     Securities Commission<br />of The Bahamas
//                   </p>
//                 </div>

//               </div>
//             </section>

//             <div className="w-full h-px bg-[#001a33]" />

//           </div>

//           {/* ── RIGHT: sticky image column — desktop only ── */}
//           {/* <div className="hidden md:block relative flex-shrink-0" style={{ width: "50%" }}>
//             <div className="sticky top-40 h-screen">
//               <Image
//                 src="/logo-savoy.png"
//                 alt="Savoy"
//                 fill
//                 priority
//                 style={{
//                   objectFit: "cover",
//                   objectPosition: "center",
//                   opacity: 0.9,
//                 }}
//               />

//               <div style={{
//                 position: "absolute", inset: 0,
//                 background: "linear-gradient(to right, black 0%, transparent 35%)"
//               }} />

//               <div style={{
//                 position: "absolute", inset: 0,
//                 background: "linear-gradient(to bottom, black 0%, transparent 20%, transparent 80%, black 100%)"
//               }} />
//             </div>
//           </div> */}

//         </div>

//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
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

//   /* ── FORM FIELDS — original Savoy style ── */
//   .savoy-input {
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid rgba(255,255,255,0.18);
//     color: #fff;
//     outline: none;
//     width: 100%;
//     padding: 0.55rem 0;
//     font-weight: 300;
//     transition: border-color 0.25s;
//   }
//   .savoy-input::placeholder { color: rgba(255,255,255,0.22); }
//   .savoy-input:focus { border-bottom-color: rgba(255,255,255,0.7); }

//   .savoy-textarea {
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid rgba(255,255,255,0.18);
//     color: #fff;
//     outline: none;
//     width: 100%;
//     padding: 0.75rem 0;
//     font-weight: 300;
//     resize: none;
//     transition: border-color 0.25s;
//     min-height: 80px;
//   }
//   .savoy-textarea::placeholder { color: rgba(255,255,255,0.22); }
//   .savoy-textarea:focus { border-bottom-color: rgba(255,255,255,0.7); }

//   .savoy-select {
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid rgba(255,255,255,0.18);
//     color: #fff;
//     outline: none;
//     width: 100%;
//     padding: 0.55rem 0;
//     font-weight: 300;
//     appearance: none;
//     -webkit-appearance: none;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M1 1l4.5 4.5L10 1' stroke='rgba(255,255,255,0.45)' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
//     background-repeat: no-repeat;
//     background-position: right 2px center;
//     cursor: pointer;
//     transition: border-color 0.25s;
//   }
//   .savoy-select:focus { border-bottom-color: rgba(255,255,255,0.7); }
//   .savoy-select option { background: #001a33; color: #fff; }
//   .savoy-select.placeholder-active { color: rgba(255,255,255,0.22); }

//   .savoy-checkbox {
//     appearance: none; -webkit-appearance: none;
//     width: 14px; height: 14px;
//     border: 1px solid rgba(255,255,255,0.35);
//     background: transparent; cursor: pointer; flex-shrink: 0;
//     transition: border-color 0.25s, background 0.25s;
//   }
//   .savoy-checkbox:checked { background: #fff; border-color: #fff; }
//   .savoy-checkbox:focus { outline: none; }

//   .form-two-col {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 0 3rem;
//   }
//   @media (max-width: 640px) {
//     .form-two-col { grid-template-columns: 1fr; }
//   }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans = "'General Sans', 'Inter', system-ui, sans-serif";

// /* ── Shared helpers (copied from About) ── */
// function useInView(threshold = 0.12) {
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
//   transform: v ? "translateY(0)" : "translateY(30px)",
//   transition: `opacity 0.9s ease ${d}, transform 0.9s ease ${d}`,
// });
// const fadeLeft = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateX(0)" : "translateX(-36px)",
//   transition: `opacity 0.9s ease ${d}, transform 0.9s ease ${d}`,
// });

// function Label({ children }) {
//   return (
//     <p
//       className="flex items-center gap-3 uppercase text-white/40"
//       style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
//     >
//       <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
//       {children}
//     </p>
//   );
// }

// const labelStyle = {
//   fontFamily: sans,
//   fontSize: "0.65rem",
//   letterSpacing: "0.2em",
//   display: "block",
//   color: "rgba(255,255,255,0.45)",
//   textTransform: "uppercase",
//   marginBottom: "0.45rem",
// };

// const fieldWrap = { marginBottom: "2.4rem" };

// const COUNTRIES = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Argentina",
//   "Armenia",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Bangladesh",
//   "Barbados",
//   "Belarus",
//   "Belgium",
//   "Belize",
//   "Benin",
//   "Bolivia",
//   "Bosnia and Herzegovina",
//   "Botswana",
//   "Brazil",
//   "Brunei",
//   "Bulgaria",
//   "Burkina Faso",
//   "Burundi",
//   "Cambodia",
//   "Cameroon",
//   "Canada",
//   "Cape Verde",
//   "Central African Republic",
//   "Chad",
//   "Chile",
//   "China",
//   "Colombia",
//   "Comoros",
//   "Congo",
//   "Costa Rica",
//   "Croatia",
//   "Cuba",
//   "Cyprus",
//   "Czech Republic",
//   "Denmark",
//   "Djibouti",
//   "Dominican Republic",
//   "Ecuador",
//   "Egypt",
//   "El Salvador",
//   "Estonia",
//   "Ethiopia",
//   "Fiji",
//   "Finland",
//   "France",
//   "Gabon",
//   "Gambia",
//   "Georgia",
//   "Germany",
//   "Ghana",
//   "Greece",
//   "Guatemala",
//   "Guinea",
//   "Haiti",
//   "Honduras",
//   "Hungary",
//   "Iceland",
//   "India",
//   "Indonesia",
//   "Iran",
//   "Iraq",
//   "Ireland",
//   "Israel",
//   "Italy",
//   "Jamaica",
//   "Japan",
//   "Jordan",
//   "Kazakhstan",
//   "Kenya",
//   "Kuwait",
//   "Kyrgyzstan",
//   "Laos",
//   "Latvia",
//   "Lebanon",
//   "Lesotho",
//   "Liberia",
//   "Libya",
//   "Liechtenstein",
//   "Lithuania",
//   "Luxembourg",
//   "Madagascar",
//   "Malawi",
//   "Malaysia",
//   "Maldives",
//   "Mali",
//   "Malta",
//   "Mauritania",
//   "Mauritius",
//   "Mexico",
//   "Moldova",
//   "Monaco",
//   "Mongolia",
//   "Montenegro",
//   "Morocco",
//   "Mozambique",
//   "Myanmar",
//   "Namibia",
//   "Nepal",
//   "Netherlands",
//   "New Zealand",
//   "Nicaragua",
//   "Niger",
//   "Nigeria",
//   "North Korea",
//   "North Macedonia",
//   "Norway",
//   "Oman",
//   "Pakistan",
//   "Panama",
//   "Papua New Guinea",
//   "Paraguay",
//   "Peru",
//   "Philippines",
//   "Poland",
//   "Portugal",
//   "Qatar",
//   "Romania",
//   "Russia",
//   "Rwanda",
//   "Saudi Arabia",
//   "Senegal",
//   "Serbia",
//   "Sierra Leone",
//   "Singapore",
//   "Slovakia",
//   "Slovenia",
//   "Somalia",
//   "South Africa",
//   "South Korea",
//   "South Sudan",
//   "Spain",
//   "Sri Lanka",
//   "Sudan",
//   "Suriname",
//   "Sweden",
//   "Switzerland",
//   "Syria",
//   "Taiwan",
//   "Tajikistan",
//   "Tanzania",
//   "Thailand",
//   "Togo",
//   "Trinidad and Tobago",
//   "Tunisia",
//   "Turkey",
//   "Turkmenistan",
//   "Uganda",
//   "Ukraine",
//   "United Arab Emirates",
//   "United Kingdom",
//   "United States",
//   "Uruguay",
//   "Uzbekistan",
//   "Venezuela",
//   "Vietnam",
//   "Yemen",
//   "Zambia",
//   "Zimbabwe",
// ];

// export default function ContactUs() {
//   const [heroRef, heroInView] = useInView(0.05);
//   const [formRef, formInView] = useInView(0.08);
//   const [detailRef, detailInView] = useInView(0.1);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     company: "",
//     country: "",
//     message: "",
//     agreed: false,
//   });
//   const topFormRef = useRef(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!form.agreed) return;
//     setLoading(true);
//     setTimeout(() => {
//   setLoading(false);
//   setSubmitted(true);

//   setTimeout(() => {
//     topFormRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   }, 100);
// }, 1200);
//   }

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="bg-[#001a33] text-white">
//         {/* ══ HERO — mirrors About hero exactly ══ */}
//         <section
//           ref={heroRef}
//           // className="relative min-h-screen flex items-end overflow-hidden px-6 pt-32 pb-12 md:px-20 md:pb-24 md:pt-0"
//           className="relative flex items-start overflow-hidden px-6 pt-50 pb-6 md:px-20 md:pt-75 md:pb-10"
//         >
//           <div className="relative z-10 w-full md:max-w-2xl">
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
//               Contact
//               <br />
//               <span className="block w-10 h-px bg-white mt-8" />
//             </h1>
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ INTRO / SUBHEADING — mirrors About mission section ══ */}
//         <section
//           ref={(el) => {
//             formRef.current = el;
//             topFormRef.current = el;
//           }}
//           className="relative py-12 md:py-24 px-6 md:px-20 overflow-hidden"
//         >
//           <div className="relative z-10">
//             <div style={fadeLeft(formInView)} className="mb-8">
//               <Label>Get in Touch</Label>
//             </div>

//             <h2
//               style={{
//                 ...fadeUp(formInView, "0.12s"),
//                 fontFamily: serif,
//                 fontSize: "clamp(2rem,4vw,4rem)",
//                 fontWeight: 300,
//                 lineHeight: 1.0,
//               }}
//               className="text-white mb-6"
//             >
//               Begin a Confidential
//               <br />
//               <em style={{ color: "var(--savoy-font)" }}>Consultation.</em>
//             </h2>

//             <p
//               style={{
//                 ...fadeUp(formInView, "0.2s"),
//                 fontFamily: sans,
//                 fontSize: "0.84rem",
//                 fontWeight: 300,
//                 lineHeight: 1.7,
//               }}
//               className="text-white mb-12 max-w-lg"
//             >
//               For Professional Clients and Market Counterparties only. Complete
//               the form below and a member of our relationship management team
//               will be in touch.
//             </p>

//             {/* ── FORM ── */}
//             <div style={{ ...fadeUp(formInView, "0.32s"), maxWidth: "780px" }}>
//               {submitted ? (
//                 <div  className="py-10">
//                   <span className="block w-10 h-px bg-white mb-8" />
//                   <h3
//                     style={{
//                       fontFamily: serif,
//                       fontSize: "clamp(1.6rem,3vw,2.4rem)",
//                       fontWeight: 300,
//                       lineHeight: 1.1,
//                     }}
//                     className="text-white mb-4"
//                   >
//                     Thank you for your enquiry.
//                   </h3>
//                   <p
//                     style={{
//                       fontFamily: sans,
//                       fontSize: "0.82rem",
//                       fontWeight: 300,
//                       lineHeight: 1.8,
//                     }}
//                     className="text-white/45"
//                   >
//                     Your submission has been received. Only relevant
//                     introductions will receive a response.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} noValidate>
//                   {/* Row 1: First Name / Last Name */}
//                   <div className="form-two-col">
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>First Name</label>
//                       <input
//                         type="text"
//                         name="firstName"
//                         required
//                         value={form.firstName}
//                         onChange={handleChange}
//                         placeholder="Your first name"
//                         className="savoy-input"
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       />
//                     </div>
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>Last Name</label>
//                       <input
//                         type="text"
//                         name="lastName"
//                         required
//                         value={form.lastName}
//                         onChange={handleChange}
//                         placeholder="Your last name"
//                         className="savoy-input"
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       />
//                     </div>
//                   </div>

//                   {/* Row 2: Email / Phone */}
//                   <div className="form-two-col">
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         value={form.email}
//                         onChange={handleChange}
//                         placeholder="your@email.com"
//                         className="savoy-input"
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       />
//                     </div>
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>Phone</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={form.phone}
//                         onChange={handleChange}
//                         placeholder="+1 000 000 0000"
//                         className="savoy-input"
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       />
//                     </div>
//                   </div>

//                   {/* Row 3: Company / Country */}
//                   <div className="form-two-col">
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>Company</label>
//                       <input
//                         type="text"
//                         name="company"
//                         value={form.company}
//                         onChange={handleChange}
//                         placeholder="Your company"
//                         className="savoy-input"
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       />
//                     </div>
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>Country</label>
//                       <select
//                         name="country"
//                         value={form.country}
//                         onChange={handleChange}
//                         className={`savoy-select${form.country === "" ? " placeholder-active" : ""}`}
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       >
//                         <option value="" disabled>
//                           Select country
//                         </option>
//                         {COUNTRIES.map((c) => (
//                           <option key={c} value={c}>
//                             {c}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   {/* Row 4: Message — full width */}
//                   <div style={fieldWrap}>
//                     <label style={labelStyle}>Message</label>
//                     <textarea
//                       name="message"
//                       required
//                       value={form.message}
//                       onChange={handleChange}
//                       placeholder="Please describe your enquiry…"
//                       className="savoy-textarea"
//                       style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                     />
//                   </div>

//                   {/* Checkbox */}
//                   <div className="flex items-start gap-3 mb-10">
//                     <input
//                       type="checkbox"
//                       name="agreed"
//                       id="agreed"
//                       checked={form.agreed}
//                       onChange={handleChange}
//                       className="savoy-checkbox mt-1"
//                     />
//                     <label
//                       htmlFor="agreed"
//                       style={{
//                         fontFamily: sans,
//                         fontSize: "0.78rem",
//                         fontWeight: 300,
//                         lineHeight: 1.7,
//                         cursor: "pointer",
//                       }}
//                       className="text-white"
//                     >
//                       I confirm that I am a Professional Client / Market
//                       Counterparty and agree to the terms.
//                     </label>
//                   </div>

//                   {/* Submit */}
//                   <div style={{ marginBottom: "2.5rem" }}>
//                     <button
//                       type="submit"
//                       disabled={!form.agreed || loading}
//                       style={{
//                         fontFamily: sans,
//                         fontSize: "0.72rem",
//                         letterSpacing: "0.18em",
//                         cursor: form.agreed ? "pointer" : "not-allowed",
//                         display: "inline-flex",
//                         alignItems: "center",
//                         gap: "0.5rem",
//                       }}
//                       className={`uppercase text-white border px-10 py-3 transition-all duration-300 bg-transparent
//                         ${form.agreed ? "border-white/80 hover:border-white hover:bg-white/5" : "border-white/10 text-white/25"}`}
//                     >
//                       {loading ? (
//                         "Sending…"
//                       ) : (
//                         <>
//                           Send
//                           <svg
//                             width="13"
//                             height="13"
//                             viewBox="0 0 13 13"
//                             fill="none"
//                             aria-hidden="true"
//                           >
//                             <path
//                               d="M1 6.5h11M6.5 1.5l5 5-5 5"
//                               stroke="currentColor"
//                               strokeWidth="1.3"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ CONTACT DETAILS — mirrors About location fact rows ══ */}
//         {/* <section ref={detailRef} className="py-12 md:py-20 px-6 md:px-20">

//           <div style={fadeLeft(detailInView)} className="mb-10">
//             <Label>Our Details</Label>
//           </div>

//           <div
//             style={{ ...fadeUp(detailInView, "0.15s") }}
//             className="flex flex-col gap-5 md:gap-6 max-w-lg"
//           >
//             {[
//               ["Email",       "info@savoybankandtrust.com", "mailto:info@savoybankandtrust.com"],
//               ["Location",    "Nassau, The Bahamas",        null],
//               ["Regulated By","Securities Commission of The Bahamas", null],
//             ].map(([k, v, href]) => (
//               <div key={k} className="flex gap-4 md:gap-6 items-start border-l border-white/20 pl-4 md:pl-5">
//                 <span
//                   style={{ fontFamily: sans, fontSize: "0.62rem", letterSpacing: "0.15em" }}
//                   className="text-white/40 uppercase flex-shrink-0 w-24"
//                 >
//                   {k}
//                 </span>
//                 {href ? (
//                   <a
//                     href={href}
//                     style={{ fontFamily: serif, fontSize: "0.95rem", fontWeight: 300 }}
//                     className="text-white no-underline hover:text-white transition-colors break-all"
//                   >
//                     {v}
//                   </a>
//                 ) : (
//                   <span style={{ fontFamily: serif, fontSize: "0.95rem", fontWeight: 300 }} className="text-white">
//                     {v}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section> */}

//         <div className="w-full h-px bg-[#001a33]" />
//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
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

//   /* ── FORM FIELDS — original Savoy style ── */
//   .savoy-input {
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid rgba(255,255,255,0.18);
//     color: #fff;
//     outline: none;
//     width: 100%;
//     padding: 0.55rem 0;
//     font-weight: 300;
//     transition: border-color 0.25s;
//   }
//   .savoy-input::placeholder { color: rgba(255,255,255,0.22); }
//   .savoy-input:focus { border-bottom-color: rgba(255,255,255,0.7); }

//   .savoy-textarea {
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid rgba(255,255,255,0.18);
//     color: #fff;
//     outline: none;
//     width: 100%;
//     padding: 0.75rem 0;
//     font-weight: 300;
//     resize: none;
//     transition: border-color 0.25s;
//     min-height: 80px;
//   }
//   .savoy-textarea::placeholder { color: rgba(255,255,255,0.22); }
//   .savoy-textarea:focus { border-bottom-color: rgba(255,255,255,0.7); }

//   .savoy-select {
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid rgba(255,255,255,0.18);
//     color: #fff;
//     outline: none;
//     width: 100%;
//     padding: 0.55rem 0;
//     font-weight: 300;
//     appearance: none;
//     -webkit-appearance: none;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M1 1l4.5 4.5L10 1' stroke='rgba(255,255,255,0.45)' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
//     background-repeat: no-repeat;
//     background-position: right 2px center;
//     cursor: pointer;
//     transition: border-color 0.25s;
//   }
//   .savoy-select:focus { border-bottom-color: rgba(255,255,255,0.7); }
//   .savoy-select option { background: #001a33; color: #fff; }
//   .savoy-select.placeholder-active { color: rgba(255,255,255,0.22); }

//   .savoy-checkbox {
//     appearance: none; -webkit-appearance: none;
//     width: 14px; height: 14px;
//     border: 1px solid rgba(255,255,255,0.35);
//     background: transparent; cursor: pointer; flex-shrink: 0;
//     transition: border-color 0.25s, background 0.25s;
//   }
//   .savoy-checkbox:checked { background: #fff; border-color: #fff; }
//   .savoy-checkbox:focus { outline: none; }

//   .form-two-col {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 0 3rem;
//   }
//   @media (max-width: 640px) {
//     .form-two-col { grid-template-columns: 1fr; }
//   }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans = "'General Sans', 'Inter', system-ui, sans-serif";

// function useInView(threshold = 0.12) {
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
//   transform: v ? "translateY(0)" : "translateY(30px)",
//   transition: `opacity 0.9s ease ${d}, transform 0.9s ease ${d}`,
// });
// const fadeLeft = (v, d = "0s") => ({
//   opacity: v ? 1 : 0,
//   transform: v ? "translateX(0)" : "translateX(-36px)",
//   transition: `opacity 0.9s ease ${d}, transform 0.9s ease ${d}`,
// });

// function Label({ children }) {
//   return (
//     <p
//       className="flex items-center gap-3 uppercase text-white/40"
//       style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
//     >
//       <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
//       {children}
//     </p>
//   );
// }

// const labelStyle = {
//   fontFamily: sans,
//   fontSize: "0.65rem",
//   letterSpacing: "0.2em",
//   display: "block",
//   color: "rgba(255,255,255,0.45)",
//   textTransform: "uppercase",
//   marginBottom: "0.45rem",
// };

// const fieldWrap = { marginBottom: "2.4rem" };

// const COUNTRIES = [
//   "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia",
//   "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
//   "Belarus","Belgium","Belize","Benin","Bolivia","Bosnia and Herzegovina",
//   "Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia",
//   "Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile",
//   "China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus",
//   "Czech Republic","Denmark","Djibouti","Dominican Republic","Ecuador","Egypt",
//   "El Salvador","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia",
//   "Georgia","Germany","Ghana","Greece","Guatemala","Guinea","Haiti","Honduras",
//   "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
//   "Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan",
//   "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein",
//   "Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali",
//   "Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia",
//   "Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands",
//   "New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia",
//   "Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru",
//   "Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda",
//   "Saudi Arabia","Senegal","Serbia","Sierra Leone","Singapore","Slovakia",
//   "Slovenia","Somalia","South Africa","South Korea","South Sudan","Spain",
//   "Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan",
//   "Tajikistan","Tanzania","Thailand","Togo","Trinidad and Tobago","Tunisia",
//   "Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates",
//   "United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam",
//   "Yemen","Zambia","Zimbabwe",
// ];

// export default function ContactUs() {
//   const [heroRef, heroInView] = useInView(0.05);
//   const [formRef, formInView] = useInView(0.08);
//   const [detailRef, detailInView] = useInView(0.1);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     company: "",
//     country: "",
//     message: "",
//     agreed: false,
//   });
//   const topFormRef = useRef(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (!form.agreed) return;
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (!data.success) throw new Error(data.error || "Failed to send");
//     } catch (err) {
//       console.error("Contact form error:", err);
//       setError("Something went wrong. Please try again.");
//       setLoading(false);
//       return;
//     }

//     setLoading(false);
//     setSubmitted(true);

//     setTimeout(() => {
//       topFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//     }, 100);
//   }

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="bg-[#001a33] text-white">
//         {/* ══ HERO ══ */}
//         <section
//           ref={heroRef}
//           className="relative flex items-start overflow-hidden px-6 pt-50 pb-6 md:px-20 md:pt-75 md:pb-10"
//         >
//           <div className="relative z-10 w-full md:max-w-2xl">
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
//               Contact
//               <br />
//               <span className="block w-10 h-px bg-white mt-8" />
//             </h1>
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ FORM SECTION ══ */}
//         <section
//           ref={(el) => {
//             formRef.current = el;
//             topFormRef.current = el;
//           }}
//           className="relative py-12 md:py-24 px-6 md:px-20 overflow-hidden"
//         >
//           <div className="relative z-10">
//             <div style={fadeLeft(formInView)} className="mb-8">
//               <Label>Get in Touch</Label>
//             </div>

//             <h2
//               style={{
//                 ...fadeUp(formInView, "0.12s"),
//                 fontFamily: serif,
//                 fontSize: "clamp(2rem,4vw,4rem)",
//                 fontWeight: 300,
//                 lineHeight: 1.0,
//               }}
//               className="text-white mb-6"
//             >
//               Begin a Confidential
//               <br />
//               <em style={{ color: "var(--savoy-font)" }}>Consultation.</em>
//             </h2>

//             <p
//               style={{
//                 ...fadeUp(formInView, "0.2s"),
//                 fontFamily: sans,
//                 fontSize: "0.84rem",
//                 fontWeight: 300,
//                 lineHeight: 1.7,
//               }}
//               className="text-white mb-12 max-w-lg"
//             >
//               For Professional Clients and Market Counterparties only. Complete
//               the form below and a member of our relationship management team
//               will be in touch.
//             </p>

//             {/* ── FORM ── */}
//             <div style={{ ...fadeUp(formInView, "0.32s"), maxWidth: "780px" }}>
//               {submitted ? (
//                 <div className="py-10">
//                   <span className="block w-10 h-px bg-white mb-8" />
//                   <h3
//                     style={{
//                       fontFamily: serif,
//                       fontSize: "clamp(1.6rem,3vw,2.4rem)",
//                       fontWeight: 300,
//                       lineHeight: 1.1,
//                     }}
//                     className="text-white mb-4"
//                   >
//                     Thank you for your enquiry.
//                   </h3>
//                   <p
//                     style={{
//                       fontFamily: sans,
//                       fontSize: "0.82rem",
//                       fontWeight: 300,
//                       lineHeight: 1.8,
//                     }}
//                     className="text-white/45"
//                   >
//                     Your submission has been received. Only relevant
//                     introductions will receive a response.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} noValidate>
//                   {/* Row 1: First Name / Last Name */}
//                   <div className="form-two-col">
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>First Name</label>
//                       <input
//                         type="text"
//                         name="firstName"
//                         required
//                         value={form.firstName}
//                         onChange={handleChange}
//                         placeholder="Your first name"
//                         className="savoy-input"
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       />
//                     </div>
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>Last Name</label>
//                       <input
//                         type="text"
//                         name="lastName"
//                         required
//                         value={form.lastName}
//                         onChange={handleChange}
//                         placeholder="Your last name"
//                         className="savoy-input"
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       />
//                     </div>
//                   </div>

//                   {/* Row 2: Email / Phone */}
//                   <div className="form-two-col">
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         value={form.email}
//                         onChange={handleChange}
//                         placeholder="your@email.com"
//                         className="savoy-input"
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       />
//                     </div>
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>Phone</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={form.phone}
//                         onChange={handleChange}
//                         placeholder="+1 000 000 0000"
//                         className="savoy-input"
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       />
//                     </div>
//                   </div>

//                   {/* Row 3: Company / Country */}
//                   <div className="form-two-col">
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>Company</label>
//                       <input
//                         type="text"
//                         name="company"
//                         value={form.company}
//                         onChange={handleChange}
//                         placeholder="Your company"
//                         className="savoy-input"
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       />
//                     </div>
//                     <div style={fieldWrap}>
//                       <label style={labelStyle}>Country</label>
//                       <select
//                         name="country"
//                         value={form.country}
//                         onChange={handleChange}
//                         className={`savoy-select${form.country === "" ? " placeholder-active" : ""}`}
//                         style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                       >
//                         <option value="" disabled>
//                           Select country
//                         </option>
//                         {COUNTRIES.map((c) => (
//                           <option key={c} value={c}>
//                             {c}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   {/* Row 4: Message — full width */}
//                   <div style={fieldWrap}>
//                     <label style={labelStyle}>Message</label>
//                     <textarea
//                       name="message"
//                       required
//                       value={form.message}
//                       onChange={handleChange}
//                       placeholder="Please describe your enquiry…"
//                       className="savoy-textarea"
//                       style={{ fontFamily: sans, fontSize: "0.90rem" }}
//                     />
//                   </div>

//                   {/* Checkbox */}
//                   <div className="flex items-start gap-3 mb-10">
//                     <input
//                       type="checkbox"
//                       name="agreed"
//                       id="agreed"
//                       checked={form.agreed}
//                       onChange={handleChange}
//                       className="savoy-checkbox mt-1"
//                     />
//                     <label
//                       htmlFor="agreed"
//                       style={{
//                         fontFamily: sans,
//                         fontSize: "0.78rem",
//                         fontWeight: 300,
//                         lineHeight: 1.7,
//                         cursor: "pointer",
//                       }}
//                       className="text-white"
//                     >
//                       I confirm that I am a Professional Client / Market
//                       Counterparty and agree to the terms.
//                     </label>
//                   </div>

//                   {/* Error message */}
//                   {error && (
//                     <p
//                       style={{
//                         fontFamily: sans,
//                         fontSize: "0.78rem",
//                         fontWeight: 300,
//                         lineHeight: 1.6,
//                         marginBottom: "1.5rem",
//                         color: "rgba(255,120,100,0.9)",
//                       }}
//                     >
//                       {error}
//                     </p>
//                   )}

//                   {/* Submit */}
//                   <div style={{ marginBottom: "2.5rem" }}>
//                     <button
//                       type="submit"
//                       disabled={!form.agreed || loading}
//                       style={{
//                         fontFamily: sans,
//                         fontSize: "0.72rem",
//                         letterSpacing: "0.18em",
//                         cursor: form.agreed && !loading ? "pointer" : "not-allowed",
//                         display: "inline-flex",
//                         alignItems: "center",
//                         gap: "0.5rem",
//                       }}
//                       className={`uppercase text-white border px-10 py-3 transition-all duration-300 bg-transparent
//                         ${form.agreed && !loading ? "border-white/80 hover:border-white hover:bg-white/5" : "border-white/10 text-white/25"}`}
//                     >
//                       {loading ? (
//                         "Sending…"
//                       ) : (
//                         <>
//                           Send
//                           <svg
//                             width="13"
//                             height="13"
//                             viewBox="0 0 13 13"
//                             fill="none"
//                             aria-hidden="true"
//                           >
//                             <path
//                               d="M1 6.5h11M6.5 1.5l5 5-5 5"
//                               stroke="currentColor"
//                               strokeWidth="1.3"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </section>

//         <div className="w-full h-px bg-[#001a33]" />

//         {/* ══ CONTACT DETAILS (commented out — preserved) ══ */}
//         {/* <section ref={detailRef} className="py-12 md:py-20 px-6 md:px-20">
//           <div style={fadeLeft(detailInView)} className="mb-10">
//             <Label>Our Details</Label>
//           </div>
//           <div style={{ ...fadeUp(detailInView, "0.15s") }} className="flex flex-col gap-5 md:gap-6 max-w-lg">
//             {[
//               ["Email",       "info@savoybankandtrust.com", "mailto:info@savoybankandtrust.com"],
//               ["Location",    "Nassau, The Bahamas",        null],
//               ["Regulated By","Securities Commission of The Bahamas", null],
//             ].map(([k, v, href]) => (
//               <div key={k} className="flex gap-4 md:gap-6 items-start border-l border-white/20 pl-4 md:pl-5">
//                 <span style={{ fontFamily: sans, fontSize: "0.62rem", letterSpacing: "0.15em" }} className="text-white/40 uppercase flex-shrink-0 w-24">{k}</span>
//                 {href ? (
//                   <a href={href} style={{ fontFamily: serif, fontSize: "0.95rem", fontWeight: 300 }} className="text-white no-underline hover:text-white transition-colors break-all">{v}</a>
//                 ) : (
//                   <span style={{ fontFamily: serif, fontSize: "0.95rem", fontWeight: 300 }} className="text-white">{v}</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section> */}

//         <div className="w-full h-px bg-[#001a33]" />
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

  /* ── FORM FIELDS — original Savoy style ── */
  .savoy-input {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.18);
    color: #fff;
    outline: none;
    width: 100%;
    padding: 0.55rem 0;
    font-weight: 300;
    transition: border-color 0.25s;
  }
  .savoy-input::placeholder { color: rgba(255,255,255,0.22); }
  .savoy-input:focus { border-bottom-color: rgba(255,255,255,0.7); }
  .savoy-input.field-error { border-bottom-color: rgba(255,100,80,0.7); }

  .savoy-textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.18);
    color: #fff;
    outline: none;
    width: 100%;
    padding: 0.75rem 0;
    font-weight: 300;
    resize: none;
    transition: border-color 0.25s;
    min-height: 80px;
  }
  .savoy-textarea::placeholder { color: rgba(255,255,255,0.22); }
  .savoy-textarea:focus { border-bottom-color: rgba(255,255,255,0.7); }
  .savoy-textarea.field-error { border-bottom-color: rgba(255,100,80,0.7); }

  .savoy-select {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.18);
    color: #fff;
    outline: none;
    width: 100%;
    padding: 0.55rem 0;
    font-weight: 300;
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M1 1l4.5 4.5L10 1' stroke='rgba(255,255,255,0.45)' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 2px center;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  .savoy-select:focus { border-bottom-color: rgba(255,255,255,0.7); }
  .savoy-select option { background: #001a33; color: #fff; }
  .savoy-select.placeholder-active { color: rgba(255,255,255,0.22); }
  .savoy-select.field-error { border-bottom-color: rgba(255,100,80,0.7); }

  .savoy-checkbox {
    appearance: none; -webkit-appearance: none;
    width: 14px; height: 14px;
    border: 1px solid rgba(255,255,255,0.35);
    background: transparent; cursor: pointer; flex-shrink: 0;
    transition: border-color 0.25s, background 0.25s;
  }
  .savoy-checkbox:checked { background: #fff; border-color: #fff; }
  .savoy-checkbox:focus { outline: none; }

  .field-err-msg {
    font-size: 0.65rem;
    color: rgba(255,100,80,0.9);
    letter-spacing: 0.08em;
    margin-top: 5px;
    display: block;
  }

  .form-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 3rem;
  }
  @media (max-width: 640px) {
    .form-two-col { grid-template-columns: 1fr; }
  }
`;

const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'General Sans', 'Inter', system-ui, sans-serif";

function useInView(threshold = 0.12) {
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
  transform: v ? "translateY(0)" : "translateY(30px)",
  transition: `opacity 0.9s ease ${d}, transform 0.9s ease ${d}`,
});
const fadeLeft = (v, d = "0s") => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateX(0)" : "translateX(-36px)",
  transition: `opacity 0.9s ease ${d}, transform 0.9s ease ${d}`,
});

function Label({ children }) {
  return (
    <p
      className="flex items-center gap-3 uppercase text-white/40"
      style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
    >
      <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
      {children}
    </p>
  );
}

const labelStyle = {
  fontFamily: sans,
  fontSize: "0.65rem",
  letterSpacing: "0.2em",
  display: "block",
  color: "rgba(255,255,255,0.45)",
  textTransform: "uppercase",
  marginBottom: "0.45rem",
};

const fieldWrap = { marginBottom: "2.4rem" };

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia",
  "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
  "Belarus","Belgium","Belize","Benin","Bolivia","Bosnia and Herzegovina",
  "Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia",
  "Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile",
  "China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus",
  "Czech Republic","Denmark","Djibouti","Dominican Republic","Ecuador","Egypt",
  "El Salvador","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia",
  "Georgia","Germany","Ghana","Greece","Guatemala","Guinea","Haiti","Honduras",
  "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
  "Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan",
  "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein",
  "Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali",
  "Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia",
  "Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands",
  "New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia",
  "Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru",
  "Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda",
  "Saudi Arabia","Senegal","Serbia","Sierra Leone","Singapore","Slovakia",
  "Slovenia","Somalia","South Africa","South Korea","South Sudan","Spain",
  "Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan",
  "Tajikistan","Tanzania","Thailand","Togo","Trinidad and Tobago","Tunisia",
  "Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates",
  "United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam",
  "Yemen","Zambia","Zimbabwe",
];

// ── Validation ────────────────────────────────────────────────────────────
function validate(form) {
  const errs = {};
  if (!form.firstName.trim())
    errs.firstName = "First name is required";
  if (!form.lastName.trim())
    errs.lastName = "Last name is required";
  if (!form.email.trim()) {
    errs.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errs.email = "Enter a valid email address";
  }
  if (!form.phone.trim()) {
    errs.phone = "Phone number is required";
  } else if (!/^\d+$/.test(form.phone.trim())) {
    errs.phone = "Phone must contain numbers only";
  } else if (form.phone.trim().length !== 10) {
    errs.phone = "Phone must be exactly 10 digits";
  }
  if (!form.country)
    errs.country = "Please select a country";
  if (!form.message.trim())
    errs.message = "Please describe your enquiry";
  return errs;
}
// ─────────────────────────────────────────────────────────────────────────

export default function ContactUs() {
  const [heroRef, heroInView] = useInView(0.05);
  const [formRef, formInView] = useInView(0.08);
  const [detailRef, detailInView] = useInView(0.1);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
    agreed: false,
  });
  const topFormRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    // Clear the error for this field as user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.agreed) return;

    // Run validation
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to send");
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    setLoading(false);
    setSubmitted(true);

    setTimeout(() => {
      topFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  return (
    <>
      <style>{globalStyles}</style>
      <SavoyHeader phase={4} />

      <main className="bg-[#001a33] text-white">
        {/* ══ HERO ══ */}
        <section
          ref={heroRef}
          className="relative flex items-start overflow-hidden px-6 pt-50 pb-6 md:px-20 md:pt-75 md:pb-10"
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
              Contact
              <br />
              <span className="block w-10 h-px bg-white mt-8" />
            </h1>
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ FORM SECTION ══ */}
        <section
          ref={(el) => {
            formRef.current = el;
            topFormRef.current = el;
          }}
          className="relative py-12 md:py-24 px-6 md:px-20 overflow-hidden"
        >
          <div className="relative z-10">
            <div style={fadeLeft(formInView)} className="mb-8">
              <Label>Get in Touch</Label>
            </div>

            <h2
              style={{
                ...fadeUp(formInView, "0.12s"),
                fontFamily: serif,
                fontSize: "clamp(2rem,4vw,4rem)",
                fontWeight: 300,
                lineHeight: 1.0,
              }}
              className="text-white mb-6"
            >
              Begin a Confidential
              <br />
              <em style={{ color: "var(--savoy-font)" }}>Consultation.</em>
            </h2>

            <p
              style={{
                ...fadeUp(formInView, "0.2s"),
                fontFamily: sans,
                fontSize: "0.84rem",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
              className="text-white mb-12 max-w-lg"
            >
              For Professional Clients and Market Counterparties only. Complete
              the form below and a member of our relationship management team
              will be in touch.
            </p>

            {/* ── FORM ── */}
            <div style={{ ...fadeUp(formInView, "0.32s"), maxWidth: "780px" }}>
              {submitted ? (
                <div className="py-10">
                  <span className="block w-10 h-px bg-white mb-8" />
                  <h3
                    style={{
                      fontFamily: serif,
                      fontSize: "clamp(1.6rem,3vw,2.4rem)",
                      fontWeight: 300,
                      lineHeight: 1.1,
                    }}
                    className="text-white mb-4"
                  >
                    Thank you for your enquiry.
                  </h3>
                  <p
                    style={{
                      fontFamily: sans,
                      fontSize: "0.82rem",
                      fontWeight: 300,
                      lineHeight: 1.8,
                    }}
                    className="text-white/45"
                  >
                    Your submission has been received. Only relevant
                    introductions will receive a response.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Row 1: First Name / Last Name */}
                  <div className="form-two-col">
                    <div style={fieldWrap}>
                      <label style={labelStyle}>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        className={`savoy-input${fieldErrors.firstName ? " field-error" : ""}`}
                        style={{ fontFamily: sans, fontSize: "0.90rem" }}
                      />
                      {fieldErrors.firstName && (
                        <span className="field-err-msg" style={{ fontFamily: sans }}>
                          {fieldErrors.firstName}
                        </span>
                      )}
                    </div>
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        className={`savoy-input${fieldErrors.lastName ? " field-error" : ""}`}
                        style={{ fontFamily: sans, fontSize: "0.90rem" }}
                      />
                      {fieldErrors.lastName && (
                        <span className="field-err-msg" style={{ fontFamily: sans }}>
                          {fieldErrors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email / Phone */}
                  <div className="form-two-col">
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`savoy-input${fieldErrors.email ? " field-error" : ""}`}
                        style={{ fontFamily: sans, fontSize: "0.90rem" }}
                      />
                      {fieldErrors.email && (
                        <span className="field-err-msg" style={{ fontFamily: sans }}>
                          {fieldErrors.email}
                        </span>
                      )}
                    </div>
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        className={`savoy-input${fieldErrors.phone ? " field-error" : ""}`}
                        style={{ fontFamily: sans, fontSize: "0.90rem" }}
                        maxLength={10}
                      />
                      {fieldErrors.phone && (
                        <span className="field-err-msg" style={{ fontFamily: sans }}>
                          {fieldErrors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Company / Country */}
                  <div className="form-two-col">
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Company</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="savoy-input"
                        style={{ fontFamily: sans, fontSize: "0.90rem" }}
                      />
                    </div>
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Country</label>
                      <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className={`savoy-select${form.country === "" ? " placeholder-active" : ""}${fieldErrors.country ? " field-error" : ""}`}
                        style={{ fontFamily: sans, fontSize: "0.90rem" }}
                      >
                        <option value="" disabled>
                          Select country
                        </option>
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.country && (
                        <span className="field-err-msg" style={{ fontFamily: sans }}>
                          {fieldErrors.country}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Message — full width */}
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your enquiry…"
                      className={`savoy-textarea${fieldErrors.message ? " field-error" : ""}`}
                      style={{ fontFamily: sans, fontSize: "0.90rem" }}
                    />
                    {fieldErrors.message && (
                      <span className="field-err-msg" style={{ fontFamily: sans }}>
                        {fieldErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3 mb-10">
                    <input
                      type="checkbox"
                      name="agreed"
                      id="agreed"
                      checked={form.agreed}
                      onChange={handleChange}
                      className="savoy-checkbox mt-1"
                    />
                    <label
                      htmlFor="agreed"
                      style={{
                        fontFamily: sans,
                        fontSize: "0.78rem",
                        fontWeight: 300,
                        lineHeight: 1.7,
                        cursor: "pointer",
                      }}
                      className="text-white"
                    >
                      I confirm that I am a Professional Client / Market
                      Counterparty and agree to the terms.
                    </label>
                  </div>

                  {/* API error message */}
                  {error && (
                    <p
                      style={{
                        fontFamily: sans,
                        fontSize: "0.78rem",
                        fontWeight: 300,
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                        color: "rgba(255,120,100,0.9)",
                      }}
                    >
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <div style={{ marginBottom: "2.5rem" }}>
                    <button
                      type="submit"
                      disabled={!form.agreed || loading}
                      style={{
                        fontFamily: sans,
                        fontSize: "0.72rem",
                        letterSpacing: "0.18em",
                        cursor: form.agreed && !loading ? "pointer" : "not-allowed",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                      className={`uppercase text-white border px-10 py-3 transition-all duration-300 bg-transparent
                        ${form.agreed && !loading ? "border-white/80 hover:border-white hover:bg-white/5" : "border-white/10 text-white/25"}`}
                    >
                      {loading ? (
                        "Sending…"
                      ) : (
                        <>
                          Send
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M1 6.5h11M6.5 1.5l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#001a33]" />

        {/* ══ CONTACT DETAILS (commented out — preserved) ══ */}
        {/* <section ref={detailRef} className="py-12 md:py-20 px-6 md:px-20">
          <div style={fadeLeft(detailInView)} className="mb-10">
            <Label>Our Details</Label>
          </div>
          <div style={{ ...fadeUp(detailInView, "0.15s") }} className="flex flex-col gap-5 md:gap-6 max-w-lg">
            {[
              ["Email",       "info@savoybankandtrust.com", "mailto:info@savoybankandtrust.com"],
              ["Location",    "Nassau, The Bahamas",        null],
              ["Regulated By","Securities Commission of The Bahamas", null],
            ].map(([k, v, href]) => (
              <div key={k} className="flex gap-4 md:gap-6 items-start border-l border-white/20 pl-4 md:pl-5">
                <span style={{ fontFamily: sans, fontSize: "0.62rem", letterSpacing: "0.15em" }} className="text-white/40 uppercase flex-shrink-0 w-24">{k}</span>
                {href ? (
                  <a href={href} style={{ fontFamily: serif, fontSize: "0.95rem", fontWeight: 300 }} className="text-white no-underline hover:text-white transition-colors break-all">{v}</a>
                ) : (
                  <span style={{ fontFamily: serif, fontSize: "0.95rem", fontWeight: 300 }} className="text-white">{v}</span>
                )}
              </div>
            ))}
          </div>
        </section> */}

        <div className="w-full h-px bg-[#001a33]" />
      </main>

      <BrandFooterSection />
    </>
  );
}