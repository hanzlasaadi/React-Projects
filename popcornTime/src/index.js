import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./app";
import Star from "./StarRating";

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Star num={10} />
    {/* <App /> */}
  </React.StrictMode>
);
