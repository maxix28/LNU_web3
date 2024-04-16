import React, { useState, useEffect } from 'react';
import testData from './testData';
import './AdminPage.css'; // Імпортуємо CSS файли

function AdminPage() {
  const { testName, questions } = testData;
  const [selectedQuestions, setSelectedQuestions] = useState(() => {

    const savedSelection = localStorage.getItem('selectedQuestions');
    return savedSelection ? JSON.parse(savedSelection) : questions.map((_, index) => false);
  });

  useEffect(() => {
   
    localStorage.setItem('selectedQuestions', JSON.stringify(selectedQuestions));
  }, [selectedQuestions]);

  const handleQuestionToggle = (index) => {
    const updatedSelection = [...selectedQuestions];
    updatedSelection[index] = !updatedSelection[index];
    setSelectedQuestions(updatedSelection);
  };

  const handleSaveChanges = () => {
    const selectedQuestionsData = questions.filter((_, index) => selectedQuestions[index]);
    console.log('Selected questions:', selectedQuestionsData);
  
  };

  return (
    <div className="admin-panel"> {}
      <h1>Admin Panel</h1>
      <h2>{testName}</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <div>
              <h3>{question.question}</h3>
              <input
                type="checkbox"
                id={`select-question-${index}`}
                checked={selectedQuestions[index]}
                onChange={() => handleQuestionToggle(index)}
              />
              <label htmlFor={`select-question-${index}`}>Select</label>
              {selectedQuestions[index] && ( 
                <ul>
                  {question.answers.map((answer, ansIndex) => (
                    <li key={ansIndex}>
                      <input type="checkbox" id={`q${index}-ans${ansIndex}`} />
                      <label htmlFor={`q${index}-ans${ansIndex}`}>{answer.answer}</label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
}

export default AdminPage;
