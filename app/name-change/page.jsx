import Link from "next/link";
import SavoyHeader from "@/components/SavoyHeader";
import { BrandSymbol } from "@/components/BrandLogo";
import { nameChangeAnnouncement as announcement } from "@/lib/announcement";

export const metadata = {
  title: announcement.title,
  description: announcement.introduction,
  alternates: { canonical: announcement.learnMoreHref },
};

export default function NameChangePage() {
  return (
    <>
      <SavoyHeader />
      <main className="announcement-page">
        <BrandSymbol className="announcement-page-symbol" />
        <div className="announcement-eyebrow">{announcement.institution}</div>
        <h1>{announcement.title}</h1>
        <div className="announcement-page-copy">
          <p className="announcement-page-lead">{announcement.introduction}</p>
          <p>{announcement.continuity}</p>
          <p>{announcement.reassurance}</p>
        </div>
        <Link className="announcement-return" href="/">
          Return to homepage <span aria-hidden="true">→</span>
        </Link>
      </main>
    </>
  );
}
