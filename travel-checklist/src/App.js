import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

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
