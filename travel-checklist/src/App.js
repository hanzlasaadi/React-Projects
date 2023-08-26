import { useState } from "react";
import { nanoid } from "nanoid";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [item, setItem] = useState([]);

  const addNewItem = (i) => {
    setItem((items) => [...items, i]);
  };

  const handleDeleteItem = (id) => {
    setItem((items) => items.filter((i) => i.id !== id));
  };

  return (
    <div className="app">
      <Logo></Logo>
      <Form onNewItem={addNewItem}></Form>
      <PackingList onDeleteItem={handleDeleteItem} items={item}></PackingList>
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  return <h1>🌴 Logo 💼</h1>;
}

function Form({ onNewItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const listItem = { description, quantity, packed: false, id: nanoid() };
    console.log(listItem);
    onNewItem(listItem);

    // reset input/select values
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip???</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((obj) => (
          <Item onDeleteItem={onDeleteItem} item={obj} key={obj.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        You have X items for your trip and you have packed X till now (X%)
      </em>
    </footer>
  );
}
