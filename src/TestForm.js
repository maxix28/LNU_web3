import React, { useState } from 'react';

const testData = {
  testName: "Тест по WEB дизайну",
  questions: [
    {
      question: "Вкажіть тег для блоку?",
      answers: [
        { answer: "a", isCorrect: false },
        { answer: "div", isCorrect: true },
        { answer: "img", isCorrect: false },
        { answer: "p", isCorrect: false }
      ]
    },
    {
      question: "Вкажіть тег для гіперпосилання?",
      answers: [
        { answer: "a", isCorrect: true },
        { answer: "div", isCorrect: false },
        { answer: "span", isCorrect: false },
        { answer: "p", isCorrect: false }
      ]
    }
  ]
};

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSelect = (index) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = index;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
  };

  const renderQuestions = () => {
    const currentTest = testData;
    if (!currentTest) return null;

    const { questions } = currentTest;
    const currentQuestionData = questions[currentQuestion];

    if (!currentQuestionData) return null;

    const renderAnswers = () => {
      return currentQuestionData.answers.map((answer, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`answer${index}`}
            name="answer"
            value={index}
            checked={userAnswers[currentQuestion] === index}
            onChange={() => handleAnswerSelect(index)}
          />
          <label htmlFor={`answer${index}`}>{answer.answer}</label>
        </div>
      ));
    };

    return (
      <div>
        <h3>{currentQuestionData.question}</h3>
        {renderAnswers()}
        <button onClick={handleNextQuestion}>Наступне питання</button>
      </div>
    );
  };

  const renderResults = () => {
    // Підрахунок результатів
    const correctAnswers = testData.questions.reduce((acc, question, index) => {
      const userAnswerIndex = userAnswers[index];
      if (userAnswerIndex !== undefined && question.answers[userAnswerIndex].isCorrect) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return (
      <div>
        <h2>Результати опитування</h2>
        <p>Кількість правильних відповідей: {correctAnswers} з {testData.questions.length}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>{testData.testName}</h1>
      {currentQuestion < testData.questions.length ? (
        renderQuestions()
      ) : (
        renderResults()
      )}
    </div>
  );
}

export default App;
