import { useState } from "react";
import "./TipCalc.css";

export default function Tip() {
  const [bill, setBill] = useState(0);
  const [mySat, setMySat] = useState(5);
  const [friendSat, setFriendSat] = useState(5);

  const handleReset = () => {
    setBill(0);
    setFriendSat(0);
    setMySat(0);
  };

  return (
    <div className="container">
      <Form
        bill={bill}
        setBill={setBill}
        mySat={mySat}
        setMySat={setMySat}
        friendSat={friendSat}
        setFriendSat={setFriendSat}
      />
      <Footer
        bill={bill}
        mySat={mySat}
        friendSat={friendSat}
        onReset={handleReset}
      />
    </div>
  );
}

function Form({ bill, setBill, mySat, setMySat, friendSat, setFriendSat }) {
  return (
    <div>
      <div>
        <label>What was the total bill?</label>
        <input
          type="number"
          value={bill}
          placeholder="$15"
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div>
        <label>How satisfied / dissatisfied were you with the service?</label>
        <select
          value={mySat}
          onChange={(e) => setMySat(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied 😡(0%)</option>
          <option value={5}>It was okay. Meh... 😐(5%)</option>
          <option value={10}>It was good 👍(10%)</option>
          <option value={20}>Fabulous 👌(20%)</option>
        </select>
      </div>
      <div>
        <label>How satisfied / dissatisfied were your friend?</label>
        <select
          value={friendSat}
          onChange={(e) => setFriendSat(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied 😡(0%)</option>
          <option value={5}>It was okay. Meh... 😐(5%)</option>
          <option value={10}>It was good 👍(10%)</option>
          <option value={20}>Fabulous 👌(20%)</option>
        </select>
      </div>
    </div>
  );
}

function Footer({ bill, mySat, friendSat, onReset }) {
  const avg = (Number(mySat) + Number(friendSat)) / 2;
  const tip = (avg * Number(bill)) / 100;
  return (
    <>
      <div>
        <h2>
          You need to pay this much: ${Number(bill) + tip} (${Number(bill)} +{" "}
          {avg}% tip)
        </h2>
      </div>
      <button onClick={onReset}>Reset</button>
    </>
  );
}
