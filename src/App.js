import React from 'react';
import './App.css'; // Якщо у вас є стилі для додатка
import TestForm from './TestForm'; // Імпортуємо компонент TestForm з іншого файлу

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ваша програма з тестами</h1>
      </header>
      <main>
        <TestForm /> {/* Вставляємо компонент TestForm тут */}
      </main>
      <footer>
        <p>&copy; 2024 Ваша компанія</p>
      </footer>
    </div>
  );
}

export default App;
