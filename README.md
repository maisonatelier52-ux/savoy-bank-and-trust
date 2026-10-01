This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## October 2026 branding and announcement update

The supplied `LOGO_SAVOY_ALL-1.png` is preserved unchanged at
`public/savoy-bank-logo.png`. `components/BrandLogo.jsx` displays it at its
original aspect ratio in the shared header, brand reveal and footer.

The shared layout displays the name-change announcement across the website.
It matches the Savoy Securities popup, including its navy panel and two buttons.
Copy, effective date, destination and the session dismissal key are kept in
`lib/announcement.js`.

- **Learn More** opens `/name-change`, which contains the supplied announcement.
- **Got it**, the close button and Escape dismiss it for the current browser session.
- The mobile homepage waits for its existing introduction animation before opening.
- The announcement page itself does not display another popup.
- The notice appears immediately on the updated website; November 1, 2026 is the
  effective date in the supplied copy, not a scheduled activation date.

Validation: production build succeeded; edited JavaScript/JSX files lint with
zero errors (one pre-existing custom-font warning in the layout). Browser checks
covered desktop, 390px mobile and 320px mobile layouts, the Learn More destination,
dismissal, session persistence, keyboard controls and the header/footer logos.
