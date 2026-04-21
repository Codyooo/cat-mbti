"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import PixelCat from "../components/PixelCat";
import { questions, calculateMBTI } from "../../lib/quiz-data";

const questionCats = [
  "siamese", "abyssinian", "orange", "british",
  "ragdoll", "bengal", "persian", "scottish",
  "norwegian", "maine-coon", "russian-blue", "golden",
];

export default function QuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const question = questions[current];
  const progress = ((current) / questions.length) * 100;
  const catType = questionCats[current] || "default";

  const handleSelect = useCallback((index: number) => {
    if (animating) return;
    setSelected(index);
  }, [animating]);

  const handleNext = useCallback(() => {
    if (selected === null || animating) return;

    const newAnswers = { ...answers, [question.id]: selected };
    setAnswers(newAnswers);
    setAnimating(true);

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        const mbti = calculateMBTI(newAnswers);
        router.push(`/result?type=${mbti}`);
      } else {
        setCurrent(current + 1);
        setSelected(null);
        setAnimating(false);
      }
    }, 250);
  }, [selected, animating, answers, question.id, current, router]);

  const handleBack = useCallback(() => {
    if (current === 0) {
      router.push("/");
      return;
    }
    setCurrent(current - 1);
    setSelected(answers[questions[current - 1].id] ?? null);
  }, [current, router, answers]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center px-4 py-4 border-b border-gray-100">
        <button
          onClick={handleBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-lg font-bold hover:bg-gray-200 transition-colors"
        >
          ←
        </button>
        <div className="flex-1 text-center text-gray-500 text-base font-medium">
          {current + 1} / {questions.length}
        </div>
        <div className="w-10" />
      </div>

      {/* Progress bar */}
      <div className="w-full h-0.5 bg-gray-100">
        <div
          className="h-full bg-black transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-6 flex flex-col">
        {/* Category tag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center">
            <PixelCat type={catType} size={52} />
          </div>
          <span className="text-gray-400 text-sm">{question.category}</span>
        </div>

        {/* Question */}
        <h2 className="text-[22px] font-bold text-black leading-snug mb-8 fade-in-up">
          {question.question}
        </h2>

        {/* Answers */}
        <div className="flex flex-col gap-3 flex-1">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-150 text-base leading-relaxed
                ${selected === index
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-200 hover:border-gray-400"
                }`}
            >
              <span className={`font-bold mr-3 ${selected === index ? "text-gray-300" : "text-gray-400"}`}>
                {String.fromCharCode(65 + index)}
              </span>
              {answer.text}
            </button>
          ))}
        </div>

        {/* Next button */}
        <div className="mt-6">
          <button
            onClick={handleNext}
            disabled={selected === null}
            className={`w-full py-4 rounded-full text-lg font-bold tracking-widest transition-all duration-150
              ${selected !== null
                ? "bg-black text-white hover:bg-gray-800 active:scale-95"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            继续 →
          </button>
        </div>
      </div>
    </div>
  );
}
