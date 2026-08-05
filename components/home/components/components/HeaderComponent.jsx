import React from "react";

export default function HeaderComponent({ theme }) {
  return (
    <div className="text-center py-8">
      <h1
        className="text-4xl font-extrabold tracking-wide text-center"
        style={{
          color: "#A68B5B",
          WebkitBackgroundClip: "text",
        }}
      >
         One Time Life Travel
      </h1>
    </div>
  );
}
