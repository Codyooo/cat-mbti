"use client";

import Link from "next/link";
import PixelCat from "./components/PixelCat";

const catTypes = [
  "ragdoll", "abyssinian", "norwegian", "bengal",
  "siamese", "scottish", "maine-coon", "orange",
  "british", "persian", "american", "angora",
  "russian-blue", "turkish-van", "golden", "abyssinian2",
];

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-6 py-10"
      style={{ background: "#f5f4ed" }}
    >
      {/* Title */}
      <div className="mb-8 mt-4">
        <h1
          className="text-center"
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "2.6rem",
            fontWeight: 900,
            letterSpacing: "0.25em",
            color: "#141413",
          }}
        >
          CATMBTI
        </h1>
      </div>

      {/* Cat Grid */}
      <div className="grid grid-cols-4 gap-3 mb-10">
        {catTypes.map((type) => (
          <div key={type} className="cat-grid-item flex items-center justify-center">
            <PixelCat type={type} size={76} />
          </div>
        ))}
      </div>

      {/* Tagline */}
      <div className="text-center mb-10">
        <h2
          className="mb-2 font-black"
          style={{ fontSize: "1.35rem", color: "#141413" }}
        >
          重生之我变成了一只猫
        </h2>
        <p style={{ color: "#87867f", fontSize: "0.95rem" }}>
          &ldquo;这一次，我要活出自己的猫生&rdquo;
        </p>
      </div>

      {/* Start Button */}
      <Link
        href="/quiz"
        className="w-full max-w-sm flex items-center justify-center gap-3 py-4 rounded-2xl transition-all active:scale-[0.98]"
        style={{
          background: "#141413",
          color: "#faf9f5",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "0.15em",
          boxShadow: "0px 0px 0px 1px #30302e",
        }}
      >
        <span style={{ fontSize: "1rem" }}>▶</span>
        <span>开 始 测 试</span>
      </Link>
    </div>
  );
}
