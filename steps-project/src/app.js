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

export default function App() {
  return (
    <div>
      <Steps></Steps>
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
