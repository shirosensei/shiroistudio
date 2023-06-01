import React from 'react';
import { DarkBackground, LightBackground } from './DarkBackground';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';
import Home from './Home';



function App() {
  return (
    <>
    <DarkBackground />
    <ResponsiveNavbar />
    <Home />
    <Footer />
    </>

  );
}

export default App;
