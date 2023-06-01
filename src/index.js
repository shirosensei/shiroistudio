import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './About';
import ContactMe from './ContactMe';
import Project from './Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
    <Routes>
    <Route path="/"  element={<App />} />
      <Route path="/about"  element={<AboutMe />} />
      <Route path="/contact"  element={<ContactMe />} />
      <Route path="/project"  element={<Project />} />
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

