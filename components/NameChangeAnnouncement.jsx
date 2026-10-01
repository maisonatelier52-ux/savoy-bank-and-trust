"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { BrandSymbol } from "@/components/BrandLogo";
import { nameChangeAnnouncement as announcement } from "@/lib/announcement";

// Keep dismissal working during client navigation if browser storage is blocked.
let dismissedDuringVisit = false;

export default function NameChangeAnnouncement() {
  const pathname = usePathname();
  const dialogRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (pathname === announcement.learnMoreHref || dismissedDuringVisit) return;
    try {
      if (sessionStorage.getItem(announcement.dismissalKey) === "true") return;
    } catch {
      // Storage restrictions must not prevent reading or dismissing the notice.
    }

    const dialog = dialogRef.current;
    // Let the homepage's mobile logo and content reveal finish first.
    const delay = pathname === "/" && window.matchMedia("(max-width: 640px)").matches
      ? 4400
      : 900;
    const timer = window.setTimeout(() => {
      if (!dialog?.isConnected || dialog.open) return;
      dialog.showModal();
      headingRef.current?.focus({ preventScroll: true });
    }, delay);

    return () => {
      window.clearTimeout(timer);
      dialog?.close();
    };
  }, [pathname]);

  function dismiss() {
    dismissedDuringVisit = true;
    try {
      sessionStorage.setItem(announcement.dismissalKey, "true");
    } catch {
      // The in-memory flag still remembers dismissal for this visit.
    }
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      className="announcement-dialog"
      aria-labelledby="name-change-title"
      aria-describedby="name-change-description"
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
    >
      <button
        className="announcement-close"
        type="button"
        aria-label="Close announcement"
        onClick={dismiss}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <BrandSymbol className="announcement-symbol" />
      <div className="announcement-eyebrow">{announcement.institution}</div>
      <h2 id="name-change-title" ref={headingRef} tabIndex={-1}>
        {announcement.title}
      </h2>
      <p id="name-change-description">
        {announcement.introduction} {announcement.continuity}{" "}
        {announcement.reassurance}
      </p>
      <div className="announcement-actions">
        <Link
          className="announcement-action announcement-action-primary"
          href={announcement.learnMoreHref}
          onClick={dismiss}
        >
          Learn More <span aria-hidden="true">→</span>
        </Link>
        <button className="announcement-action" type="button" onClick={dismiss}>
          Got it
        </button>
      </div>
    </dialog>
  );
}
