// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Overview from './components/Overview/Overview'
import Testimonials from './components/Testimonials/Testimonials'
import Features from './components/Features/Features';
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'

const App = () => {
    return (
        <div className="App">
          <Navbar/>
          <Overview/>
          <Testimonials/>
          <Features/>
          <AboutUs/>
          <ContactUs/>
        </div>
    );
};

export default App;
