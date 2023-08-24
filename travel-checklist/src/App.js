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
  return <div className="list">List!</div>;
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
