// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "SAVOY  ",
//   description: "savoy bank and trust company ",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">{children}</body>
//     </html>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ── Theme: read from .env (NEXT_PUBLIC_BG_COLOR / NEXT_PUBLIC_FONT_COLOR) ──
const SAVOY_BG = process.env.NEXT_PUBLIC_BG_COLOR ?? "#001a33";
const SAVOY_FONT = process.env.NEXT_PUBLIC_FONT_COLOR ?? "#ffffff";
const _hex = SAVOY_BG.replace("#", "");
const SAVOY_BG_RGB = [
  parseInt(_hex.slice(0, 2), 16),
  parseInt(_hex.slice(2, 4), 16),
  parseInt(_hex.slice(4, 6), 16),
].join(",");

// ── Theme: read fonts from .env (single-point font control) ──
// Old inline fonts across pages/components are untouched in the code;
// these variables + the CSS in globals.css simply override them
// site-wide via !important, the same pattern used for the colors above.
const SAVOY_HEADING_FONT =
  process.env.NEXT_PUBLIC_HEADING_FONT ??
  "'Cormorant Garamond', Georgia, serif";
const SAVOY_BODY_FONT =
  process.env.NEXT_PUBLIC_BODY_FONT ?? "'Inter', system-ui, sans-serif";
const SAVOY_LABEL_FONT =
  process.env.NEXT_PUBLIC_LABEL_FONT ?? "'Montserrat', system-ui, sans-serif";

const BASE_URL = "https://savoy-bank-and-trust.vercel.app/"; // ← update to your real domain https://www.savoybankandtrust.com

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Savoy Bank & Trust | Private Banking in The Bahamas",
    template: "%s | Savoy Bank & Trust",
  },
  description:
    "Savoy Bank & Trust is a privately held financial institution in The Bahamas offering tailored banking, trust, and market services for discerning international clients.",
  keywords: [
    "Savoy Bank",
    "Savoy Trust",
    "private banking Bahamas",
    "international banking",
    "offshore banking",
    "trust services Bahamas",
    "wealth management Bahamas",
    "fiduciary services",
    "private bank",
  ],
  authors: [{ name: "Savoy Bank & Trust" }],
  creator: "Savoy Bank & Trust",
  publisher: "Savoy Bank & Trust",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: BASE_URL },

  // Open Graph — Facebook, LinkedIn, WhatsApp
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Savoy Bank & Trust",
    title: "Savoy Bank & Trust | Private Banking in The Bahamas",
    description:
      "Tailored banking, trust, and market services for clients who value discretion, continuity, and clear guidance in a complex international landscape.",
    images: [
      {
        url: "/savoy-card.jpng",
        width: 1200,
        height: 630,
        alt: "Savoy Bank & Trust – Private Banking in The Bahamas",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Savoy Bank & Trust | Private Banking in The Bahamas",
    description:
      "Tailored banking, trust, and market services for clients who value discretion, continuity, and clear guidance.",
    images: ["/savoy-card.jpng"],
  },

  icons: {
    icon: "/savoy-icon.ico",
    shortcut: "/savoy-icon.ico",
    apple: "/savoy-icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* ── Savoy Theme: CSS variables from .env injected here ── */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              `:root{--savoy-bg:${SAVOY_BG};--savoy-bg-rgb:${SAVOY_BG_RGB};--savoy-font:${SAVOY_FONT};` +
              `--savoy-heading-font:${SAVOY_HEADING_FONT};--savoy-body-font:${SAVOY_BODY_FONT};--savoy-label-font:${SAVOY_LABEL_FONT};}`,
          }}
        />
        <link rel="icon" href="/savoy-icon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* ── Savoy Theme: global Google Fonts stylesheet (heading/body/label) ──
             Old scattered @import font lines inside individual page/component
             <style jsx> blocks are left as-is / commented — not removed. This
             single link is now the source of truth for font loading site-wide. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Inter:wght@300;400;500&family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content={SAVOY_BG} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BankOrCreditUnion",
              name: "Savoy Bank & Trust",
              url: BASE_URL,
              logo: `${BASE_URL}/savoy-logo.png`,
              image: `${BASE_URL}/savoy-card.jpng`,
              description:
                "A privately held financial institution in The Bahamas offering tailored banking, trust, and market services.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BS",
                addressRegion: "The Bahamas",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
