import { useState, useEffect } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function toggleBtn(element) {
  element.querySelector(".line1").classList.toggle("line1-toggle");
  element.querySelector(".line2").classList.toggle("line2-toggle");
  element.querySelector(".line3").classList.toggle("line3-toggle");
}

function addDaysToDate(startDate, daysToAdd) {
  const newDate = new Date(startDate); // Create a new Date object with the starting date
  newDate.setDate(newDate.getDate() + daysToAdd); // Add the specified number of days

  return newDate.toDateString();
}

export default function App() {
  return (
    <div>
      <Count></Count>
    </div>
  );
}

function Count() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const startDate = new Date(); // Current date and time

  function handlePlusStep() {
    setStep((s) => s + 1);
  }

  function handleMinusStep() {
    setStep((s) => s - 1);
  }

  function handlePlus() {
    setCount((c) => c + step);
  }
  function handleMinus() {
    setCount((c) => c - step);
  }

  return (
    <div className="steps">
      <p className="message">
        {count === 0 ? "Today" : `${count} days from today`} is{" "}
        {addDaysToDate(startDate, count)}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleMinus}
        >
          -
        </button>
        <p>Count: {count}</p>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePlus}
        >
          +
        </button>
      </div>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleMinusStep}
        >
          -
        </button>
        <p>Step: {step}</p>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePlusStep}
        >
          +
        </button>
      </div>
    </div>
  );
}

function Steps() {
  useEffect(() => {
    //This code will run after the component has rendered
    toggleBtn(document.querySelector(".hamburger-lines"));
  }, []);
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  return (
    <>
      <div
        className="hamburger-lines"
        onClick={(e) => {
          toggleBtn(e.currentTarget);
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>

      {!isOpen || (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
