// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import BiomarkDetails from './components/BiomarkDetails';
import Kscents from './components/Kscents';
import StockPricePrediction from './components/StockPricePrediction';

import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/project/biomark" element={<BiomarkDetails />} />
          <Route path="/project/kscents" element={<Kscents />} />
          <Route path="/project/stock-prediction" element={<StockPricePrediction />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






