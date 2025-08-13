import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DomainSelection from './components/DomainSelection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/domains" element={<DomainSelection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 