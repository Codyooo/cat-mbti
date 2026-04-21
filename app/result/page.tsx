"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PixelCat from "../components/PixelCat";
import { catTypes } from "../../lib/quiz-data";
import Link from "next/link";

const mbtiToCatImage: Record<string, string> = {
  INTJ: "russian-blue",
  INTP: "abyssinian",
  ENTJ: "norwegian",
  ENTP: "bengal",
  INFJ: "siamese",
  INFP: "scottish",
  ENFJ: "maine-coon",
  ENFP: "orange",
  ISTJ: "british",
  ISFJ: "persian",
  ESTJ: "american",
  ESFJ: "angora",
  ISTP: "russian-blue",
  ISFP: "turkish-van",
  ESTP: "abyssinian2",
  ESFP: "golden",
};

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mbtiType = searchParams.get("type") || "INFP";
  const catType = catTypes[mbtiType] || catTypes["INFP"];
  const catImage = mbtiToCatImage[mbtiType] || "orange";

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "猫格测试结果",
        text: `我的猫格是：${catType.name}（${catType.mbti}）- ${catType.subtitle}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert("链接已复制！");
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Cat image hero */}
      <div className="flex flex-col items-center pt-12 pb-6 px-6">
        <div className="w-44 h-44 rounded-[2.5rem] bg-gray-50 flex items-center justify-center mb-6 scale-in">
          <PixelCat type={catImage} size={140} />
        </div>

        <p className="text-gray-400 text-sm mb-2">你的猫格是</p>
        <h1 className="text-3xl font-black text-black text-center leading-tight mb-1">
          {catType.name}
        </h1>
        <p className="text-gray-400 text-base">{catType.subtitle}</p>
      </div>

      {/* Quote */}
      <div className="mx-5 mb-5">
        <div className="bg-gray-50 rounded-2xl px-5 py-4">
          <span className="text-gray-400 text-xl font-serif mr-1">"</span>
          <span className="text-black text-base">{catType.quote}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="mx-5 mb-5">
        <p className="text-black font-bold text-sm mb-3">性格标签</p>
        <div className="flex flex-wrap gap-2">
          {catType.tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm text-black font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-gray-100 mb-5" />

      {/* Description */}
      <div className="mx-5 mb-8">
        <p className="text-gray-700 text-base leading-relaxed">{catType.description}</p>
      </div>

      {/* MBTI badge */}
      <div className="mx-5 mb-6 flex justify-center">
        <div className="bg-black text-white px-6 py-2 rounded-full">
          <span className="font-mono font-bold tracking-widest text-lg">{catType.mbti}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mx-5 mb-10 flex flex-col gap-3">
        <button
          onClick={handleShare}
          className="w-full py-4 bg-black text-white rounded-full text-base font-bold tracking-widest hover:bg-gray-800 active:scale-95 transition-all"
        >
          分享结果
        </button>
        <Link
          href="/quiz"
          className="w-full py-4 border-2 border-black text-black rounded-full text-base font-bold tracking-widest text-center hover:bg-gray-50 active:scale-95 transition-all"
        >
          再测一次
        </Link>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-400 text-lg">加载中...</div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
