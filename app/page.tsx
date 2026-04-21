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
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-10">
      {/* Title */}
      <div className="mb-8 mt-4">
        <h1
          className="text-5xl font-black tracking-[0.15em] text-black text-center"
          style={{ fontFamily: "'Courier New', Courier, monospace", letterSpacing: "0.2em" }}
        >
          CATMBTI
        </h1>
      </div>

      {/* Cat Grid */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {catTypes.map((type) => (
          <div key={type} className="cat-grid-item flex items-center justify-center">
            <PixelCat type={type} size={80} />
          </div>
        ))}
      </div>

      {/* Tagline */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-black mb-2">
          重生之我变成了一只猫
        </h2>
        <p className="text-gray-500 text-base">
          &ldquo;这一次，我要活出自己的猫生&rdquo;
        </p>
      </div>

      {/* Start Button */}
      <Link
        href="/quiz"
        className="w-full max-w-sm flex items-center justify-center gap-3 bg-black text-white text-lg font-bold py-4 rounded-full transition-all active:scale-95 hover:bg-gray-800"
      >
        <span className="text-xl">▶</span>
        <span className="tracking-widest">开 始 测 试</span>
      </Link>
    </div>
  );
}
