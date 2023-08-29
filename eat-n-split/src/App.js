// import uniqid from "uniqid";

import { useState } from "react";

const initialFriends = [
  {
    id: "llv0w93w",
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: "llv10ot8",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: "llv117nf",
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ onToggle, children }) {
  return (
    <button className="button" onClick={onToggle}>
      {children}
    </button>
  );
}

export default function App() {
  const [selectedFriend, setSelectedFriend] = useState(false);
  const handleToggleAddFriend = () => {
    setSelectedFriend(!selectedFriend);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {selectedFriend && <FormAddFriend />}
        <Button onToggle={handleToggleAddFriend}>
          {selectedFriend ? "Close" : "Add new friend"}
        </Button>
      </div>

      <form className="form-split-bill">
        <h2>Split a bill with X</h2>

        <label>💰 Total Bll value:</label>
        <input type="number" />

        <label>💶 Your Expense:</label>
        <input type="number" />

        <label>💸 X's Expense:</label>
        <input type="number" disabled />

        <label>💳 Who's paying the bill?</label>
        <select>
          <option>You</option>
          <option>X</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    </div>
  );
}

function FriendsList() {
  return (
    <ul>
      {initialFriends.map((fr) => (
        <Friend friend={fr} key={fr.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      ) : (
        <p>You and {friend.name} are even`</p>
      )}
      <button className="button">Select</button>
    </li>
  );
}

function FormAddFriend() {
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [name, setName] = useState("");

  return (
    <form className="form-add-friend">
      <label>👭Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
