import uniqid from "uniqid";

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
  // Form Add New Friend
  const [formAddFriend, setFormAddFriend] = useState(false);
  const handleToggleAddFriend = () => {
    setFormAddFriend(!formAddFriend);
  };

  // Friends list & Handle add new friend
  const [friends, setFriends] = useState(initialFriends);
  const handleAddNewFriend = (fr) => {
    setFriends([...friends, fr]);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {formAddFriend && <FormAddFriend onAddNewFriend={handleAddNewFriend} />}
        <Button onToggle={handleToggleAddFriend}>
          {formAddFriend ? "Close" : "Add new friend"}
        </Button>
      </div>
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((fr) => (
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

function FormAddFriend({ onSubmit, onAddNewFriend }) {
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [name, setName] = useState("");

  // Add New Friend to List
  const handleAddFriend = (e) => {
    e.preventDefault();
    if (!name || !image) return;

    const newFriend = { id: uniqid(), name, image, balance: 0 };

    // call App func with the new friend obj
    onAddNewFriend(newFriend);
  };

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
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
