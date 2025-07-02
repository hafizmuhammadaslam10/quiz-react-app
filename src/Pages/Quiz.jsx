import React, { useState } from "react";
import Results from "../Components/Results";
import Question from "../Components/Question";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerSelect = (selectedOption, isCorrect) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = {
      selectedOption,
      isCorrect,
    };
    setSelectedAnswers(newSelectedAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 1000);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers([]);
  };

  return (
    <div className="quiz-container">
      {showResults ? (
        <Results
          score={score}
          totalQuestions={questions.length}
          questions={questions}
          selectedAnswers={selectedAnswers}
          onRestart={restartQuiz}
        />
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswerSelect={handleAnswerSelect}
          selectedAnswer={selectedAnswers[currentQuestionIndex]?.selectedOption}
        />
      )}
    </div>
  );
};

export default Quiz;
