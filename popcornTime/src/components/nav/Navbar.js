// import { Input } from "./Input";
// import { Results } from "./Results";
import { Logo } from "./Logo";

export function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
