import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Home';
import ScrollToTop from './components/ScrollToTop';
import AboutMe from './components/About';
import ContactMe from './components/ContactMe';
import Project from './components/Project';



function App() {
  return (
    <>
    <Navbar />
    <Home />
    <AboutMe />
    <Project />
    <ContactMe />
    <ScrollToTop />
    <Footer />
    </>

  );
}

export default App;
