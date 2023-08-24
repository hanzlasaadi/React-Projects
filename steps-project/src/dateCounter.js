import { useState } from "react";

// Normal Func
function addDaysToDate(startDate, daysToAdd) {
  const newDate = new Date(startDate); // Create a new Date object with the starting date
  newDate.setDate(newDate.getDate() + daysToAdd); // Add the specified number of days

  return newDate.toDateString();
}

// Component Func
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
