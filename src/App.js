// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TestForm from './TestForm'; 
import AdminPage from './AdminPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Павлів Феі-21</h1>
        </header>
        <main>
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={<TestForm />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 ЛНУ ФЕЛКТ</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
