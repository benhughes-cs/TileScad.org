import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DesignPage from "../src/pages/design/Design";
import AboutPage from "../src/pages/about/About";
import UploadPage from "../src/pages/upload/Upload";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
    {/* <App /> */}
  </Router>,
  document.getElementById("root")
);
