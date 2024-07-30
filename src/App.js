import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home/Home';
import Footer from './Components/Footer';
import Contact from './Home/Contact';
import About from './Home/About';
import Login from './Home/Login';
import Insurance from './Services/Insurance';
import Atm from './Services/Atm';
import Whitetable from './Services/Whitetable';
import Mlm from './Services/Mlm';
import RealState from './Products/RealState';
import Cms from './Products/Cms';
// Import other pages as needed

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/atm" element={<Atm />} />
          <Route path="/whitelable" element={<Whitetable />} />
          <Route path="/mlm" element={<Mlm />} />
          <Route path="/realestate" element={<RealState />} />
          <Route path="/cms" element={<Cms/>} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
