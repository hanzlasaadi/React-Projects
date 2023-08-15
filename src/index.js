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
  // const pizzas = [];

  return (
    <main className="menu">
      <h2>This is the menu</h2>
      {pizzas.length > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian Cuisine. Six authentic dishes to chose from. All
            from our stone oven, authentic and natural ingredients. Order Now!
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p className="error">
          No pizzas to display right now! Come back later!
        </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // REMOVE a pizza listed if sold out
  // if (pizzaObj.soldOut) return null;

  // GREY OUT a pizza listed if sold out
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span> */}

        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const open = 1;
  const close = 21;
  const crrTime = new Date().getHours();
  const leftTime = close - crrTime;

  const isOpen = crrTime >= open && crrTime <= close;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order leftTime={leftTime} />
      ) : (
        <p>
          We r closed right now! Come back between: {open}:00 & {close}:00
        </p>
      )}
    </footer>
  );
}

function Order({ leftTime }) {
  return (
    <div className="order">
      <p>
        We are open until {leftTime} hour{leftTime > 1 ? "s" : ""}... Fuck
        you!!!
      </p>
      <button className="btn">Order Now!</button>
    </div>
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
