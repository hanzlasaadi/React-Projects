const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  return <h1>🌴 Logo 💼</h1>;
}
function Form() {
  return <div className="add-form">What do you need for your trip???</div>;
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((obj) => (
          <Item item={obj} key={obj.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
