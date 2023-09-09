import { Input } from "./Input";
import { Results } from "./Results";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Input />
      <Results />
    </nav>
  );
}
