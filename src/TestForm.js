import React, { useState } from 'react';
import testData from './testData';
import './TestForm.css';

function TestForm() {
  const { testName, questions } = testData;
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderResults = () => {
    const correctAnswers = questions.reduce((acc, question, index) => {
      const userAnswerIndex = userAnswers[index];
      return userAnswerIndex !== null && question.answers[userAnswerIndex].isCorrect ? acc + 1 : acc;
    }, 0);

    return (
      <div className="results">
        <h2>Results</h2>
        <p>Correct Answers: {correctAnswers} / {questions.length}</p>
      </div>
    );
  };

  return (
    <div className="test-form">
      <h1>{testName}</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <h3>{question.question}</h3>
            {question.answers.map((answer, ansIndex) => (
              <div key={ansIndex}>
                <input
                  type="radio"
                  id={`q${index}-ans${ansIndex}`}
                  name={`q${index}`}
                  value={ansIndex}
                  checked={userAnswers[index] === ansIndex}
                  onChange={() => handleAnswerSelect(index, ansIndex)}
                />
                <label htmlFor={`q${index}-ans${ansIndex}`}>{answer.answer}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {submitted && renderResults()}
    </div>
  );
}

export default TestForm;
