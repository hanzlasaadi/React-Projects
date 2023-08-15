import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <Card></Card>;
}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skills />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://picsum.photos/2000/1800"
      alt="something"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Hanzla Saadi</h1>
      <p>
        afkalsdhb adshfljas afhg dhgkfjsdhf asdf asdljfasjd asdg asdjgvadj
        hvajdhg
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skill-list">
      <Skill skill="JavaScript" emoji="😀" color="red"></Skill>
      <Skill skill="Node" emoji="😀" color="green"></Skill>
      <Skill skill="React" emoji="😀" color="brown"></Skill>
      <Skill skill="CSS" emoji="😀" color="blue"></Skill>
      <Skill skill="Bootstrap" emoji="😀" color="purple"></Skill>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
