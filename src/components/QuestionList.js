import React from 'react';

function QuestionList({ questions, onDelete, onUpdateCorrectIndex }) {
  console.log('QuestionList rendering with questions:', questions); // Debug
  return (
    <div>
      <h2>Questions</h2>
      {questions.map((question) => (
        <div key={question.id || `temp-${Date.now()}`} data-testid={`question-${question.id || 'temp'}`}>
          <p data-testid="question-prompt">{question.prompt || 'No prompt'}</p>
          <ul>
            {(question.answers || []).map((answer, index) => (
              <li key={index}>{answer || 'No answer'}</li>
            ))}
          </ul>
          <label>
            Correct Answer:
            <select
              value={question.correctIndex || 0}
              onChange={(e) =>
                onUpdateCorrectIndex(question.id, parseInt(e.target.value))
              }
            >
              {(question.answers || []).map((_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={() => onDelete(question.id)}
            data-testid={`delete-button-${question.id || 'temp'}`}
          >
            Delete Question
          </button>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;