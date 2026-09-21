"use client";

import { usePathname } from "next/navigation";
import StatusState from "@/components/layout/StatusState";

export default function LocaleError({ reset }) {
  const locale = usePathname()?.split("/")[1] || "en";
  return <StatusState code="500" eyebrow="MONTU TRAVEL / TEMPORARY PAUSE" title="A desert wind crossed our path." message="Something unexpected happened behind the scenes. Your journey is safe—try again or return to the collection." primaryHref={"/" + locale} primaryLabel="Return to the journey" secondaryLabel="Try again" onSecondary={reset} />;
}
