import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path='/' exact component={ Home } />
        <Route path='/about' component={ About } />
        </Routes>
    </Router>
  );
}

export default App;
