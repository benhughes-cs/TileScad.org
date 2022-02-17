import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import HomePage from "../src/pages/home/Home";
import DesignPage from "../src/pages/design/Design";
import AboutPage from "../src/pages/about/About";
import UploadPage from "../src/pages/upload/Upload";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
    <App />
  </Router>,
  document.getElementById("root")
);
