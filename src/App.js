import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';


/* Add signup and login imports and paths */


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
  return (
    <Router>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

{/* Add dashboard route after authentication */}
      </Routes>
   
    </Router>
  );
}