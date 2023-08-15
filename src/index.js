import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./pizzaData";

// eslint-disable-next-line

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>This is the header!!!</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>This is the menu</h2>
      {pizzas.length > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const open = 9;
  const close = 21;
  const crrTime = new Date().getHours();
  const leftTime = close - crrTime;

  const isOpen = crrTime >= open && crrTime <= close;

  return (
    <footer className="footer">
      {!isOpen || (
        <div className="order">
          <p>
            We are open until {leftTime} hour{leftTime > 1 ? "s" : ""}... Fuck
            you!!!
          </p>
          <button className="btn">Order Now!</button>
        </div>
      )}
    </footer>
  );
}

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// before react v18
// ReactDOM.render(<App />, document.getElementById("root"));
