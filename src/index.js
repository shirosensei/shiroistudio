import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import NotFound from './components/NotFound';
import './assets/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        {/* <BrowserRouter>
    <Routes>
    <Route path="/"  element={<App />} />
      <Route path="about"  element={<AboutMe />} />
      <Route path="contact"  element={<ContactMe />} />
      <Route path="project"  element={<Project />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}
    <App />    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

