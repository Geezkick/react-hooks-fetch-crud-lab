import React, { useState } from 'react';

function QuestionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    prompt: '',
    answers: ['', '', '', ''],
    correctIndex: 0,
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'answers') {
      const updatedAnswers = [...formData.answers];
      updatedAnswers[index] = value;
      setFormData({ ...formData, answers: updatedAnswers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      prompt: formData.prompt,
      answers: formData.answers,
      correctIndex: parseInt(formData.correctIndex),
    });
    setFormData({
      prompt: '',
      answers: ['', '', '', ''],
      correctIndex: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Question</h2>
      <div>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
            required
            data-testid="prompt-input"
          />
        </label>
      </div>
      {formData.answers.map((answer, index) => (
        <div key={index}>
          <label>
            Answer {index + 1}:
            <input
              type="text"
              name="answers"
              value={answer}
              onChange={(e) => handleChange(e, index)}
              required
              data-testid={`answer-input-${index}`}
            />
          </label>
        </div>
      ))}
      <div>
        <label>
          Correct Answer Index:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
            data-testid="correct-index-select"
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </label>
      </div>
      <button type="submit" data-testid="submit-button">
        Add Question
      </button>
    </form>
  );
}

export default QuestionForm;