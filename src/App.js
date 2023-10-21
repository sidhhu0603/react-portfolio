import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Education from './Education';
import LetsTalk from './LetsTalk';
import ThankYou from './ThankYou';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/lets-talk" element={<LetsTalk />} />
        <Route path="/thank-you/:name" element={<ThankYou/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
