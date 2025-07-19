import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Youth from './pages/Youth';
import Schools from './pages/Schools';
import Resources from './pages/Resources';
import Relic from './pages/Relic';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/youth" element={<Youth />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/relic" element={<Relic />} />
      </Routes>
    </Router>
  );
};

export default App;
