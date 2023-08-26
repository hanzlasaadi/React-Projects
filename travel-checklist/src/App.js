import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [item, setItem] = useState([]);

  const addNewItem = (i) => {
    setItem((items) => [...items, i]);
  };

  const handleDeleteItem = (id) => {
    setItem((items) => items.filter((i) => i.id !== id));
  };

  const handleUpdateItem = (id) => {
    setItem((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  };

  return (
    <div className="app">
      <Logo></Logo>
      <Form onNewItem={addNewItem}></Form>
      <PackingList
        items={item}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      ></PackingList>
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

    // create new list object
    const listItem = { description, quantity, packed: false, id: nanoid() };
    // update state with new list object
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

function PackingList({ items, onDeleteItem, onUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((obj) => (
          <Item
            onUpdateItem={onUpdateItem}
            onDeleteItem={onDeleteItem}
            item={obj}
            key={obj.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}
      />
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
