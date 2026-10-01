import Image from "next/image";

export default function BrandLogo({ className = "", sizes = "320px", preload = false }) {
  return (
    <Image
      src="/savoy-bank-logo.png"
      alt="Savoy Bank & Trust"
      width={7178}
      height={1125}
      sizes={sizes}
      preload={preload}
      className={`savoy-brand-logo ${className}`}
    />
  );
}

export function BrandSymbol({ className = "" }) {
  return (
    <svg
      className={`savoy-brand-symbol ${className}`}
      viewBox="0 0 1125 1125"
      aria-hidden="true"
      focusable="false"
    >
      {/* Display the star from the supplied PNG without altering the artwork. */}
      <image href="/savoy-bank-logo.png" width="7178" height="1125" />
    </svg>
  );
}
