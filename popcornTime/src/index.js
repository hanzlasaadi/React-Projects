import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./app";
import Star from "./StarRating";
function Test() {
  const defaultRating = 0;
  const [rated, setRated] = useState(defaultRating);
  return (
    <div>
      <Star maxRating={10} color="purple" setRated={setRated} />
      <p>Hello World, Rating is {rated}/10</p>
    </div>
  );
}

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Star
      maxRating={5}
      color="blue"
      size={48}
      messages={["shit", "meh", "avg", "nice", "fuck yeah"]}
      defaultRating={3}
    />
    <Test />
    {/* <App /> */}
  </React.StrictMode>
);
