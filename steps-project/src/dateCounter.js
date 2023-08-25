import { useState } from "react";

// Normal Func
function addDaysToDate(startDate, daysToAdd) {
  const newDate = new Date(startDate); // Create a new Date object with the starting date
  newDate.setDate(newDate.getDate() + daysToAdd); // Add the specified number of days

  return newDate.toDateString();
}

// Component Func
export default function Count() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const startDate = new Date(); // Current date and time

  // function handlePlusStep() {
  //   setStep((s) => s + 1);
  // }

  // function handleMinusStep() {
  //   setStep((s) => s - 1);
  // }

  function handlePlus() {
    setCount((c) => c + step);
  }
  function handleMinus() {
    setCount((c) => c - step);
  }

  function reset() {
    setCount(0);
    setStep(1);
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
        <p>
          Count:{" "}
          <input
            type="number"
            value={count}
            placeholder="count"
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </p>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePlus}
        >
          +
        </button>
      </div>

      <div className="range">
        <label>Steps: </label>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      {step !== 1 || count !== 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <button onClick={reset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
