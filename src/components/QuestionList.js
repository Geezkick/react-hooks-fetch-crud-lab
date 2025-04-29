import React from "react";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  return (
    <div>
      <h2>Questions</h2>
      {questions.length === 0 ? (
        <p>No questions available.</p>
      ) : (
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              <p><strong>Prompt:</strong> {question.prompt}</p>
              <p><strong>Answers:</strong> {question.answers.join(", ")}</p>
              <p><strong>Correct Answer:</strong></p>
              <select
                value={question.correctIndex}
                onChange={(e) =>
                  onUpdateQuestion(question.id, parseInt(e.target.value))
                }
              >
                {question.answers.map((answer, index) => (
                  <option key={index} value={index}>
                    {answer}
                  </option>
                ))}
              </select>
              <button onClick={() => onDeleteQuestion(question.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuestionList;