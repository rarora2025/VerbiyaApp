import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CoursePage from './components/CoursePage/CoursePage';
import './App.css';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/course/online-marketing-asian-marketers" element={<CoursePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 