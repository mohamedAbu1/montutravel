import Link from "next/link";

function Mark() {
  return <div className="montu-status-mark" aria-hidden="true"><span>𓂀</span><i /></div>;
}

export default function StatusState({ code = "404", eyebrow = "MONTU TRAVEL / WAYFINDING", title, message, primaryHref = "/en", primaryLabel = "Return home", secondaryLabel, onSecondary }) {
  return (
    <main className="montu-status-page">
      <div className="montu-status-orbit montu-status-orbit--one" aria-hidden="true" />
      <div className="montu-status-orbit montu-status-orbit--two" aria-hidden="true" />
      <div className="montu-status-content">
        <Link href={primaryHref} className="montu-status-brand" aria-label="Montu Travel home">
          <Mark />
          <span><strong>MONTU TRAVEL</strong><small>LUXURY EGYPTIAN JOURNEYS</small></span>
        </Link>
        <p className="montu-status-kicker">{eyebrow}</p>
        <div className="montu-status-code">{code}</div>
        <h1>{title}</h1>
        <p className="montu-status-message">{message}</p>
        <div className="montu-status-actions">
          <Link href={primaryHref} className="montu-status-button montu-status-button--primary">{primaryLabel} <span aria-hidden="true">↗</span></Link>
          {secondaryLabel && <button type="button" onClick={onSecondary} className="montu-status-button montu-status-button--quiet">{secondaryLabel}</button>}
        </div>
        <p className="montu-status-footer">EST. 2026 · EGYPT <span>✦</span> JOURNEYS WITH A SENSE OF PLACE</p>
      </div>
    </main>
  );
}
