const testData = {
    testName: "Тест по WEB дизайну",
    questions: [
      {
          question: "Що таке HTML?",
          answers: [
            { answer: "Мова розмітки гіпертекстових документів", isCorrect: true },
            { answer: "Мова програмування", isCorrect: false },
            { answer: "Мова стилів", isCorrect: false },
            { answer: "Мова запитів до бази даних", isCorrect: false }
          ]
        },
        {
          question: "Як правильно створити посилання на іншу веб-сторінку в HTML?",
          answers: [
            { answer: "<a href='посилання'>Текст посилання</a>", isCorrect: true },
            { answer: "<link href='посилання'>Текст посилання</link>", isCorrect: false },
            { answer: "<a link='посилання'>Текст посилання</a>", isCorrect: false },
            { answer: "<href='посилання'>Текст посилання</>", isCorrect: false }
          ]
        },
        {
          question: "Як правильно вставити зображення в HTML?",
          answers: [
            { answer: "<img src='шлях_до_зображення.jpg' alt='опис_зображення'>", isCorrect: true },
            { answer: "<image src='шлях_до_зображення.jpg' alt='опис_зображення'>", isCorrect: false },
            { answer: "<img='шлях_до_зображення.jpg' alt='опис_зображення'>", isCorrect: false },
            { answer: "<picture<src='шлях_до_зображення.jpg' alt='опис_зображення'>", isCorrect: false }
          ]
        },
        {
          question: "Як вирівняти текст по центру в HTML?",
          answers: [
            { answer: "<center>Текст</center>", isCorrect: true },
            { answer: "<div align='center'>Текст</div>", isCorrect: false },
            { answer: "<p align='center'>Текст</p>", isCorrect: false },
            { answer: "<align='center'>Текст</align>", isCorrect: false }
          ]
        }
        
    ]
  };
  
  export default testData;
  