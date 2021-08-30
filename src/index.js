import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="real-estate-anim">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
