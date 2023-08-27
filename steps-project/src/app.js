import { useState } from "react";

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
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

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

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              handleFunc={handlePrevious}
            >
              👈 Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" handleFunc={handleNext}>
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

function Button({ bgColor, textColor, handleFunc, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={handleFunc}
    >
      {children}
    </button>
  );
}
