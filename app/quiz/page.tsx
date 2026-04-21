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
  const progress = ((current + 1) / questions.length) * 100;
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
    }, 200);
  }, [selected, animating, answers, question.id, current, router]);

  const handleBack = useCallback(() => {
    if (current === 0) {
      router.push("/");
      return;
    }
    const prev = current - 1;
    setCurrent(prev);
    setSelected(answers[questions[prev].id] ?? null);
  }, [current, router, answers]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center px-4 pt-5 pb-4">
        <button
          onClick={handleBack}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-base hover:bg-gray-200 transition-colors"
        >
          ←
        </button>
        <div className="flex-1 text-center text-gray-400 text-sm font-medium">
          {current + 1} / {questions.length}
        </div>
        <div className="w-9" />
      </div>

      {/* Progress bar */}
      <div className="mx-4 h-1 bg-gray-100 rounded-full mb-6">
        <div
          className="h-full bg-black rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 px-5 flex flex-col">
        {/* Category + cat */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0">
            <PixelCat type={catType} size={44} />
          </div>
          <span className="text-gray-400 text-sm">{question.category}</span>
        </div>

        {/* Question */}
        <h2 className="text-[20px] font-bold text-black leading-snug mb-6">
          {question.question}
        </h2>

        {/* Answers */}
        <div className="flex flex-col gap-3">
          {question.answers.map((answer, index) => {
            const isSelected = selected === index;
            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`w-full text-left rounded-2xl border-2 transition-all duration-150 overflow-hidden
                  ${isSelected
                    ? "bg-black border-black"
                    : "bg-white border-gray-200 active:border-gray-400"
                  }`}
              >
                <div className="flex items-start px-4 py-4 gap-3">
                  <span
                    className={`text-sm font-bold w-5 flex-shrink-0 mt-0.5
                      ${isSelected ? "text-white/60" : "text-gray-300"}`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className={`text-base leading-relaxed flex-1 ${isSelected ? "text-white" : "text-black"}`}>
                    {answer.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Continue button — fixed to bottom */}
      <div className="px-5 py-5">
        <button
          onClick={handleNext}
          disabled={selected === null}
          className={`w-full py-4 rounded-full text-base font-bold tracking-widest transition-all duration-150
            ${selected !== null
              ? "bg-black text-white active:scale-[0.98]"
              : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
        >
          继续 →
        </button>
      </div>
    </div>
  );
}
