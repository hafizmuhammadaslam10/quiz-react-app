import React from "react";

const Question = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSelect,
  selectedAnswer,
}) => {
  return (
    <div className="question-container">
      <div className="progress-indicator">
        Question {questionNumber} of {totalQuestions}
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="options-container">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === question.correctAnswer;
          let optionClass = "option";

          if (selectedAnswer) {
            if (isSelected) {
              optionClass += isCorrect ? " correct" : " incorrect";
            } else if (isCorrect) {
              optionClass += " correct";
            }
          }

          return (
            <button
              key={index}
              className={optionClass}
              onClick={() =>
                !selectedAnswer && onAnswerSelect(option, isCorrect)
              }
              disabled={!!selectedAnswer}
            >
              {option}
              {isSelected && !isCorrect && <span className="feedback">✗</span>}
              {(isSelected && isCorrect) ||
              (!isSelected && isCorrect && selectedAnswer) ? (
                <span className="feedback">✓</span>
              ) : null}
            </button>
          );
        })}
      </div>

      {selectedAnswer && (
        <div className="explanation">
          <p>
            <strong>Explanation:</strong> {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default Question;
