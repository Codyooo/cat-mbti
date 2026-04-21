"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PixelCat from "../components/PixelCat";
import { catTypes } from "../../lib/quiz-data";
import Link from "next/link";

const mbtiToCatImage: Record<string, string> = {
  INTJ: "russian-blue", INTP: "abyssinian", ENTJ: "norwegian", ENTP: "bengal",
  INFJ: "siamese", INFP: "scottish", ENFJ: "maine-coon", ENFP: "orange",
  ISTJ: "british", ISFJ: "persian", ESTJ: "american", ESFJ: "angora",
  ISTP: "russian-blue", ISFP: "turkish-van", ESTP: "abyssinian2", ESFP: "golden",
};

function ResultContent() {
  const searchParams = useSearchParams();
  const mbtiType = searchParams.get("type") || "INFP";
  const cat = catTypes[mbtiType] || catTypes["INFP"];
  const catImage = mbtiToCatImage[mbtiType] || "orange";

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "猫格测试结果",
        text: `我的猫格是：${cat.name}（${cat.mbti}）`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => alert("链接已复制！"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f5f4ed" }}>
      {/* Hero */}
      <div className="flex flex-col items-center px-6 pt-12 pb-8">
        <div
          className="w-44 h-44 flex items-center justify-center mb-7 scale-in"
          style={{
            background: "#faf9f5",
            borderRadius: "2rem",
            boxShadow: "0px 0px 0px 1px #f0eee6, rgba(0,0,0,0.06) 0px 8px 32px",
          }}
        >
          <PixelCat type={catImage} size={128} />
        </div>

        <p style={{ color: "#87867f", fontSize: "0.82rem", marginBottom: "0.6rem" }}>你的猫格是</p>
        <h1
          className="text-center font-black mb-2"
          style={{ fontSize: "1.65rem", color: "#141413", lineHeight: 1.25 }}
        >
          {cat.name}
        </h1>
        <p style={{ color: "#87867f", fontSize: "0.88rem" }}>{cat.subtitle}</p>
      </div>

      {/* Main content — padded container */}
      <div className="px-5 flex flex-col gap-5 pb-10">

        {/* Quote */}
        <div
          className="px-6 py-5 rounded-2xl"
          style={{
            background: "#faf9f5",
            border: "1px solid #f0eee6",
          }}
        >
          <p style={{ color: "#141413", fontSize: "0.92rem", lineHeight: 1.8 }}>
            <span style={{ color: "#b0aea5", fontFamily: "Georgia, serif", fontSize: "1.2rem" }}>&ldquo;</span>
            {cat.quote}
            <span style={{ color: "#b0aea5", fontFamily: "Georgia, serif", fontSize: "1.2rem" }}>&rdquo;</span>
          </p>
        </div>

        {/* Tags */}
        <div>
          <p
            className="mb-3 font-bold uppercase"
            style={{ color: "#87867f", fontSize: "0.72rem", letterSpacing: "0.12em" }}
          >
            性格标签
          </p>
          <div className="flex flex-wrap gap-2">
            {cat.tags.map((tag, i) => (
              <span
                key={i}
                className="font-medium"
                style={{
                  padding: "0.45rem 1rem",
                  background: "#e8e6dc",
                  borderRadius: "99px",
                  fontSize: "0.84rem",
                  color: "#4d4c48",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #e8e6dc" }} />

        {/* Description */}
        <div>
          <p style={{ color: "#5e5d59", fontSize: "0.93rem", lineHeight: 1.85 }}>
            {cat.description}
          </p>
        </div>

        {/* MBTI badge */}
        <div className="flex justify-center py-2">
          <div
            className="font-mono font-bold"
            style={{
              padding: "0.6rem 2rem",
              background: "#141413",
              color: "#faf9f5",
              borderRadius: "99px",
              letterSpacing: "0.25em",
              fontSize: "0.95rem",
              boxShadow: "0px 0px 0px 1px #30302e",
            }}
          >
            {cat.mbti}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-1">
          <button
            onClick={handleShare}
            className="w-full py-[1.1rem] rounded-2xl font-bold transition-all active:scale-[0.98]"
            style={{
              background: "#c96442",
              color: "#faf9f5",
              fontSize: "1rem",
              letterSpacing: "0.1em",
              boxShadow: "0px 0px 0px 1px #c96442",
            }}
          >
            分享结果
          </button>
          <Link
            href="/quiz"
            className="w-full py-[1.1rem] rounded-2xl font-bold text-center transition-all active:scale-[0.98]"
            style={{
              background: "#faf9f5",
              color: "#141413",
              fontSize: "1rem",
              letterSpacing: "0.1em",
              border: "2px solid #e8e6dc",
              boxShadow: "0px 0px 0px 1px #e8e6dc",
            }}
          >
            再测一次
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#f5f4ed" }}>
        <div style={{ color: "#87867f" }}>加载中...</div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
