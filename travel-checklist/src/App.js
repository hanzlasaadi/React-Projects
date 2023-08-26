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

  const handleDeleteAllItems = () => {
    if (window.confirm("Are you sure you want to clear the list?")) setItem([]);
  };

  return (
    <div className="app">
      <Logo></Logo>
      <Form onNewItem={addNewItem}></Form>
      <PackingList
        items={item}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onDeleteAllItems={handleDeleteAllItems}
      ></PackingList>
      <Stats items={item}></Stats>
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

function PackingList({ items, onDeleteItem, onUpdateItem, onDeleteAllItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((obj) => (
          <Item
            onUpdateItem={onUpdateItem}
            onDeleteItem={onDeleteItem}
            item={obj}
            key={obj.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>

        <button onClick={onDeleteAllItems}>Clear the list</button>
      </div>
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

function Stats({ items }) {
  if (items.length < 1)
    return (
      <footer className="stats">
        <em>Prepare for your journey with us🚀</em>
      </footer>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          You have {numItems} item{numItems === 1 ? "" : "s"} for your trip and
          you have packed {packedItems} till now ({percentage}%)
        </em>
      ) : (
        <em>You have completed your travel list! Fly away ✈</em>
      )}
    </footer>
  );
}
