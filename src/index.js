import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import NotFound from "./components/NotFound";
import "./assets/styles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = React.lazy(() => import("./App"));




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Suspense>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
