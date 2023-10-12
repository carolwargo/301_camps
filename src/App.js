import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Train from './pages/Train';
import Header from './components/Header';
import Signup from './pages/Signup';
import Consent from "./components/Consent/Consent";
import TextConsent from "./components/Consent/TextConsent";
import Register from "./components/Train/Registration/Register";
import Waiver from "./components/Train/Registration/Waiver";


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
        <Route path="/train" element={<Train />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/consent" element={<Consent />} />
        <Route path="/textconsent" element={<TextConsent />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/waiver" element={<Waiver />} />

{/* Add dashboard route after authentication */}
      </Routes>
   
    </Router>
  );
}