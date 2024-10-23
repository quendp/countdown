"use client";

import { Button } from "@mui/material";
import { Check, X } from "lucide-react";
import { useState } from "react";

const QUESTIONS = [
  {
    question: process.env.NEXT_PUBLIC_QUIZ_1_QUESTION_1,
    options: [
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_1_A,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_1_B,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_1_C,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_1_D,
    ],
    answer: process.env.NEXT_PUBLIC_QUIZ_1_OPTION_1_B,
    error: process.env.NEXT_PUBLIC_QUIZ_1_ERROR_1,
    correct: process.env.NEXT_PUBLIC_QUIZ_1_CORRECT_1,
  },
  {
    question: process.env.NEXT_PUBLIC_QUIZ_1_QUESTION_2,
    options: [
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_2_A,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_2_B,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_2_C,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_2_D,
    ],
    answer: process.env.NEXT_PUBLIC_QUIZ_1_OPTION_2_D,
    error: process.env.NEXT_PUBLIC_QUIZ_1_ERROR_2,
    correct: process.env.NEXT_PUBLIC_QUIZ_1_CORRECT_2,
  },
  {
    question: process.env.NEXT_PUBLIC_QUIZ_1_QUESTION_3,
    options: [
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_3_A,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_3_B,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_3_C,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_3_D,
    ],
    answer: process.env.NEXT_PUBLIC_QUIZ_1_OPTION_3_C,
    error: process.env.NEXT_PUBLIC_QUIZ_1_ERROR_3,
    correct: process.env.NEXT_PUBLIC_QUIZ_1_CORRECT_3,
  },
  {
    question: process.env.NEXT_PUBLIC_QUIZ_1_QUESTION_4,
    options: [
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_4_A,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_4_B,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_4_C,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_4_D,
    ],
    answer: process.env.NEXT_PUBLIC_QUIZ_1_OPTION_4_A,
    error: process.env.NEXT_PUBLIC_QUIZ_1_ERROR_4,
    correct: process.env.NEXT_PUBLIC_QUIZ_1_CORRECT_4,
  },
  {
    question: process.env.NEXT_PUBLIC_QUIZ_1_QUESTION_5,
    options: [
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_5_A,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_5_B,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_5_C,
      process.env.NEXT_PUBLIC_QUIZ_1_OPTION_5_D,
    ],
    answer: process.env.NEXT_PUBLIC_QUIZ_1_OPTION_5_D,
    error: process.env.NEXT_PUBLIC_QUIZ_1_ERROR_5,
    correct: process.env.NEXT_PUBLIC_QUIZ_1_CORRECT_5,
  },
];

const SCORE_MESSAGES = [
  process.env.NEXT_PUBLIC_QUIZ_1_SCORE_0,
  process.env.NEXT_PUBLIC_QUIZ_1_SCORE_1,
  process.env.NEXT_PUBLIC_QUIZ_1_SCORE_2,
  process.env.NEXT_PUBLIC_QUIZ_1_SCORE_3,
  process.env.NEXT_PUBLIC_QUIZ_1_SCORE_4,
  process.env.NEXT_PUBLIC_QUIZ_1_SCORE_5,
];

export default function Quiz1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showCorrectMessage, setShowCorrectMessage] = useState(false);
  const [score, setScore] = useState(0);

  const handleButtonClick = (option) => {
    setIsButtonClicked(true);
    if (option === QUESTIONS[currentQuestion].answer) {
      setScore(score + 1);
      setShowCorrectMessage(true);
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-md mb-5">
        Remember &quot;six&quot;? HAHAHAAHAHA akala mo mag aano na tayo kahit
        yung oras talaga tinutukoy ko HAHAAHAHAHAHAAH yun siguro talaga iniisip
        mo nun no? Anyway dahil excited ka magpatusok, magreview muna tayo
        HAHAAHAHAH🤭
      </p>
      <p className="mb-5 font-semibold">Score: {score}</p>
      {currentQuestion < 5 ? (
        <div className="bg-rose-300 text-red-900 p-5 rounded-lg flex flex-col">
          Question {currentQuestion + 1}/5:
          <p className="my-3">{QUESTIONS[currentQuestion].question}</p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 justify-evenly">
              <Button
                disabled={isButtonClicked}
                variant="contained"
                className="bg-rose-800 text-rose-200 w-full"
                sx={{
                  backgroundColor: "#9f1239 !important",
                  color: "#fecdd3 !important",
                }}
                onClick={() =>
                  handleButtonClick(QUESTIONS[currentQuestion].options[0])
                }
              >
                {QUESTIONS[currentQuestion].options[0]}
              </Button>
              <Button
                sx={{
                  backgroundColor: "#9f1239 !important",
                  color: "#fecdd3 !important",
                }}
                disabled={isButtonClicked}
                variant="contained"
                className="bg-rose-800 text-rose-200 w-full"
                onClick={() =>
                  handleButtonClick(QUESTIONS[currentQuestion].options[1])
                }
              >
                {QUESTIONS[currentQuestion].options[1]}
              </Button>
            </div>
            <div className="flex gap-3 justify-evenly">
              <Button
                sx={{
                  backgroundColor: "#9f1239 !important",
                  color: "#fecdd3 !important",
                }}
                disabled={isButtonClicked}
                variant="contained"
                className="bg-rose-800 text-rose-200 w-full"
                onClick={() =>
                  handleButtonClick(QUESTIONS[currentQuestion].options[2])
                }
              >
                {QUESTIONS[currentQuestion].options[2]}
              </Button>
              <Button
                sx={{
                  backgroundColor: "#9f1239 !important",
                  color: "#fecdd3 !important",
                }}
                disabled={isButtonClicked}
                variant="contained"
                className="bg-rose-800 text-rose-200 w-full"
                onClick={() =>
                  handleButtonClick(QUESTIONS[currentQuestion].options[3])
                }
              >
                {QUESTIONS[currentQuestion].options[3]}
              </Button>
            </div>
          </div>
          {showErrorMessage && (
            <p className="flex flex-col text-sm bg-rose-800 text-rose-200 items-center rounded-md p-2 text-center my-5">
              <X size={20} className="mr-3" />
              {QUESTIONS[currentQuestion].error}
            </p>
          )}
          {showCorrectMessage && (
            <p className="flex flex-col text-sm bg-emerald-800 text-rose-200 items-center rounded-md p-2 text-center my-5">
              <Check size={20} className="mr-3" />
              {QUESTIONS[currentQuestion].correct}
            </p>
          )}
          {isButtonClicked && (
            <Button
              variant="contained"
              className="bg-rose-800 text-rose-200 self-end"
              onClick={() => {
                setCurrentQuestion(currentQuestion + 1);
                setIsButtonClicked(false);
                setShowErrorMessage(false);
                setShowCorrectMessage(false);
              }}
            >
              Next
            </Button>
          )}
        </div>
      ) : (
        <div className="bg-rose-300 text-red-900 p-5 rounded-lg flex flex-col">
          You got {score} out of 5!!!
          <p className="my-3">{SCORE_MESSAGES[score]}</p>
          Thanks for playing babyy! Sana nagenjoy ka kahit papano HAAHAHAH I
          love youu sooo muchhh💗💗💗
        </div>
      )}
    </div>
  );
}
