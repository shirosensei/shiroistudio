import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkBackground } from './components/DarkBackground';
import Footer from './components/Footer';
import ResponsiveNavbar from './components/Navbar';
import Home from './Home';
import ScrollToTop from './components/ScrollToTop';
import AboutMe from './components/About';
import ContactMe from './components/ContactMe';
import Project from './components/Project';



function App() {
  return (
    <>
    <Router>


    <ResponsiveNavbar />
    <Home />
    <AboutMe />
    <Project />
    <ContactMe />
    <ScrollToTop />
    <Footer />
    </Router>
    </>

  );
}

export default App;
