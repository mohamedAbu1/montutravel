import StatusState from "@/components/layout/StatusState";

export default function NotFound() {
  return <StatusState code="404" title="The trail went quiet." message="This page has drifted beyond the map. Let’s guide you back to a journey worth remembering." primaryHref="/en" primaryLabel="Explore Montu Travel" />;
}
