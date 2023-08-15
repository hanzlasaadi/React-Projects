import React from "react";
import ReactDOM from "react-dom/client";
import "./dev.css";

const skills = [
  {
    name: "React",
    level: "intermediate",
    color: "blue",
  },
  {
    name: "HTML+CSS",
    level: "advanced",
    color: "grey",
  },
  {
    name: "JS",
    level: "advanced",
    color: "yellow",
  },
  {
    name: "Node",
    level: "beginner",
    color: "red",
  },
  {
    name: "Git and GitHub",
    level: "advanced",
    color: "purple",
  },
  {
    name: "Figma",
    level: "intermediate",
    color: "blue",
  },
];

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
    <ul className="skill-list">
      {/* <Skill skill="JavaScript" emoji="😀" color="red"></Skill> */}
      {skills.map((skill) => (
        <Skill key={skill.name} skill={skill}></Skill>
      ))}
    </ul>
  );
}

function Skill({ skill }) {
  return (
    <li className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.name}</span>
      <span>
        {skill.level === "beginner"
          ? "👶"
          : skill.level === "intermediate"
          ? "👍"
          : skill.level === "intermediate"
          ? "💪"
          : "😕"}
      </span>
    </li>
  );
}

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// before react v18
// ReactDOM.render(<App />, document.getElementById("root"));
