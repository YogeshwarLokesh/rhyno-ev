import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
// src/App.js
import Product3 from './pages/Product3'; // Ensure this matches the actual file name

import AboutUs from 'C:/Users/yoges/rhyno-ev/src/pages/AboutUs.js';
import ContactUs from './pages/ContactUs';
import Rentals from './pages/Rentals';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CompareAll from './pages/CompareAll';
// src/App.js
// Assuming you have a Button component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/Product2" element={<Product2 />} />
        <Route path="/Product3" element={<Product3 />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Rentals" element={<Rentals />} />
        <Route path="/CompareAll" element={<CompareAll/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
