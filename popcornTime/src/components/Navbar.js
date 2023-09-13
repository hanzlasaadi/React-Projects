import { Input } from "./Input";
import { Results } from "./Results";
import { Logo } from "./Logo";

export function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Input />
      <Results movies={movies} />
    </nav>
  );
}
