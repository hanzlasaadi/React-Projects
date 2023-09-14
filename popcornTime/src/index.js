import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";

// import Star from "./challenges/StarRating";
// import Expander from "./challenges/Expander";

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
