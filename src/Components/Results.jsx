import React from "react";

const Results = ({
  score,
  totalQuestions,
  questions,
  selectedAnswers,
  onRestart,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <div className="score-summary">
        <p>
          You scored {score} out of {totalQuestions} ({percentage}%)
        </p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="detailed-results">
        <h3>Review your answers:</h3>
        {questions.map((question, index) => {
          const userAnswer = selectedAnswers[index];
          const isCorrect = userAnswer?.isCorrect;

          return (
            <div
              key={question.id}
              className={`answer-review ${isCorrect ? "correct" : "incorrect"}`}
            >
              <p>
                <strong>Question {index + 1}:</strong> {question.question}
              </p>
              <p>
                <strong>Your answer:</strong>{" "}
                {userAnswer?.selectedOption || "Not answered"}
              </p>
              {!isCorrect && (
                <p>
                  <strong>Correct answer:</strong> {question.correctAnswer}
                </p>
              )}
              <p>
                <strong>Explanation:</strong> {question.explanation}
              </p>
            </div>
          );
        })}
      </div>

      <button className="restart-button" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;
