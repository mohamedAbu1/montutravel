// components/GradientOverlay.jsx
export default function GradientOverlay() {
  return (
    <div
      className="absolute inset-0 
                 bg-gradient-to-t 
                 from-black/80 via-blue-950/60 to-transparent 
                 -z-10"
    />
  );
}
