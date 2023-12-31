import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(0);
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <Item
          number={i}
          title={faq.title}
          key={faq.title}
          curOpen={curOpen}
          onSetOpen={setCurOpen}
        >
          {faq.text}
        </Item>
      ))}
    </div>
  );
}

function Item({ number, title, children, curOpen, onSetOpen }) {
  const isOpen = number === curOpen;

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => (isOpen ? onSetOpen(null) : onSetOpen(number))}
    >
      <p className="number">{number < 10 ? `0${number + 1}` : number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
