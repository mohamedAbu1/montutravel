import StatusState from "@/components/layout/StatusState";

export default function LocaleNotFound() {
  return <StatusState code="404" eyebrow="MONTU TRAVEL / OFF THE MAP" title="This chapter is not here." message="The destination you requested could not be found. Continue exploring and we’ll help you find the right route." primaryHref="/en" primaryLabel="Explore journeys" />;
}
