import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Home';
import ScrollToTop from './components/ScrollToTop';
import AboutMe from './components/About';
import ContactMe from './components/ContactMe';
import Project from './components/Project';
import SectionWapper from "./components/SectionWapper";
import { DarkBackground } from "./styles/DarkBackground";



function App() {
  return (
    
    <>
    <DarkBackground />
    <SectionWapper>
      <Navbar />
      <Home />
      <AboutMe />
      <Project />
      {/* <ContactMe /> */}
      <ScrollToTop />
      <Footer />
    </SectionWapper></>

  );
}

export default App;
