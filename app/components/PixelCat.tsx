"use client";

interface PixelCatProps {
  type?: string;
  size?: number;
  className?: string;
}

// Pixel art cats using SVG with pixel-style squares
const catColors: Record<string, { body: string; accent: string; eye: string; nose: string }> = {
  ragdoll: { body: "#e8d5c4", accent: "#c4a882", eye: "#4a9eff", nose: "#ff9999" },
  abyssinian: { body: "#c8853c", accent: "#8b5e2a", eye: "#4aaa55", nose: "#ff9999" },
  abyssinian2: { body: "#c8853c", accent: "#8b5e2a", eye: "#ff8800", nose: "#ff9999" },
  norwegian: { body: "#8c7355", accent: "#5c4a30", eye: "#55aa44", nose: "#ffaaaa" },
  bengal: { body: "#d4914a", accent: "#8b5e2a", eye: "#88aa00", nose: "#ff9999" },
  siamese: { body: "#f0e0c0", accent: "#6b4c30", eye: "#44aaff", nose: "#ff9999" },
  scottish: { body: "#d0c8b8", accent: "#9a9080", eye: "#ffaa00", nose: "#ffaaaa" },
  "maine-coon": { body: "#b87840", accent: "#7a5028", eye: "#44aa66", nose: "#ffaaaa" },
  orange: { body: "#ff8844", accent: "#cc5500", eye: "#55aa00", nose: "#ff6666" },
  british: { body: "#8888aa", accent: "#555577", eye: "#ffaa00", nose: "#ffaaaa" },
  persian: { body: "#f0ddc0", accent: "#d4aa80", eye: "#00aaff", nose: "#ffaaaa" },
  american: { body: "#aa8844", accent: "#7a6030", eye: "#44aa66", nose: "#ffaaaa" },
  angora: { body: "#f8f0e0", accent: "#e0d0b0", eye: "#4499ff", nose: "#ffaaaa" },
  "russian-blue": { body: "#7788aa", accent: "#445566", eye: "#00ee88", nose: "#ffaaaa" },
  "turkish-van": { body: "#f8f0e0", accent: "#cc8844", eye: "#4488ff", nose: "#ffaaaa" },
  golden: { body: "#d4aa55", accent: "#8b7030", eye: "#44aa44", nose: "#ffaaaa" },
  default: { body: "#d4a574", accent: "#a07050", eye: "#44aa66", nose: "#ff9999" },
};

function PixelBlock({ x, y, color, size }: { x: number; y: number; color: string; size: number }) {
  return <rect x={x * size} y={y * size} width={size} height={size} fill={color} />;
}

export default function PixelCat({ type = "default", size = 80, className = "" }: PixelCatProps) {
  const colors = catColors[type] || catColors.default;
  const ps = Math.floor(size / 12); // pixel size

  // Cat pixel grid - 12x10 grid
  const bodyPixels: [number, number][] = [
    // ears
    [1, 0], [2, 1], [8, 1], [9, 0],
    // head
    [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2],
    [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3],
    [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4],
    [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5],
    // body
    [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6],
    [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7],
    [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8],
    // legs
    [2, 9], [3, 9], [4, 9], [6, 9], [7, 9], [8, 9],
  ];

  const accentPixels: [number, number][] = [
    [1, 0], [9, 0], // ear tips
    [3, 6], [4, 6], [6, 6], [7, 6], // body stripes
  ];

  const eyePixels: [number, number][] = [
    [3, 4], [4, 4], [6, 4], [7, 4],
  ];

  const nosePixels: [number, number][] = [
    [5, 5],
  ];

  const svgSize = 12 * ps;

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      className={`${className} pixel-border`}
      style={{ imageRendering: "pixelated" }}
    >
      {bodyPixels.map(([x, y], i) => (
        <PixelBlock key={`b${i}`} x={x} y={y} color={colors.body} size={ps} />
      ))}
      {accentPixels.map(([x, y], i) => (
        <PixelBlock key={`a${i}`} x={x} y={y} color={colors.accent} size={ps} />
      ))}
      {eyePixels.map(([x, y], i) => (
        <PixelBlock key={`e${i}`} x={x} y={y} color={colors.eye} size={ps} />
      ))}
      {nosePixels.map(([x, y], i) => (
        <PixelBlock key={`n${i}`} x={x} y={y} color={colors.nose} size={ps} />
      ))}
    </svg>
  );
}
