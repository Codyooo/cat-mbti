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
        router.push(`/result?type=${calculateMBTI(newAnswers)}`);
      } else {
        setCurrent(current + 1);
        setSelected(null);
        setAnimating(false);
      }
    }, 200);
  }, [selected, animating, answers, question.id, current, router]);

  const handleBack = useCallback(() => {
    if (current === 0) { router.push("/"); return; }
    const prev = current - 1;
    setCurrent(prev);
    setSelected(answers[questions[prev].id] ?? null);
  }, [current, router, answers]);

  return (
    <div className="flex flex-col" style={{ background: "#f5f4ed", minHeight: "100dvh" }}>
      {/* Header */}
      <div className="flex items-center px-4 pt-5 pb-3 flex-shrink-0">
        <button
          onClick={handleBack}
          className="w-9 h-9 flex items-center justify-center rounded-xl transition-colors"
          style={{
            background: "#e8e6dc",
            color: "#5e5d59",
            fontSize: "1rem",
            boxShadow: "0px 0px 0px 1px #d1cfc5",
          }}
        >
          ←
        </button>
        <div className="flex-1 text-center text-sm font-medium" style={{ color: "#87867f" }}>
          {current + 1} / {questions.length}
        </div>
        <div className="w-9" />
      </div>

      {/* Progress bar */}
      <div className="mx-4 mb-5 flex-shrink-0" style={{ height: "3px", background: "#e8e6dc", borderRadius: "99px" }}>
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "#141413",
            borderRadius: "99px",
            transition: "width 0.5s ease",
          }}
        />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Category + cat */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#faf9f5", boxShadow: "0px 0px 0px 1px #f0eee6" }}
          >
            <PixelCat type={catType} size={40} />
          </div>
          <span style={{ color: "#87867f", fontSize: "0.82rem" }}>{question.category}</span>
        </div>

        {/* Question */}
        <h2
          className="font-bold fade-in-up mb-5"
          style={{ fontSize: "1.15rem", color: "#141413", lineHeight: 1.5 }}
        >
          {question.question}
        </h2>

        {/* Answers */}
        <div className="flex flex-col gap-2.5">
          {question.answers.map((answer, index) => {
            const isSelected = selected === index;
            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className="w-full text-left rounded-2xl transition-all duration-150"
                style={{
                  background: isSelected ? "#141413" : "#faf9f5",
                  border: `2px solid ${isSelected ? "#141413" : "#f0eee6"}`,
                  boxShadow: isSelected ? "none" : "0px 0px 0px 1px #f0eee6",
                }}
              >
                <div className="flex items-start px-4 py-3.5 gap-3">
                  <span
                    className="text-sm font-bold flex-shrink-0 mt-0.5"
                    style={{
                      width: "1.25rem",
                      color: isSelected ? "rgba(255,255,255,0.4)" : "#b0aea5",
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      color: isSelected ? "#faf9f5" : "#141413",
                      flex: 1,
                    }}
                  >
                    {answer.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Continue button — fixed at bottom */}
      <div
        className="flex-shrink-0 px-4 py-4"
        style={{
          background: "#f5f4ed",
          borderTop: "1px solid #e8e6dc",
        }}
      >
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="w-full py-4 rounded-2xl font-bold transition-all duration-150 active:scale-[0.98]"
          style={{
            background: selected !== null ? "#141413" : "#e8e6dc",
            color: selected !== null ? "#faf9f5" : "#b0aea5",
            fontSize: "0.95rem",
            letterSpacing: "0.12em",
            cursor: selected !== null ? "pointer" : "not-allowed",
            boxShadow: selected !== null ? "0px 0px 0px 1px #30302e" : "none",
          }}
        >
          继续 →
        </button>
      </div>
    </div>
  );
}
