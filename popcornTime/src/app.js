import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";

import { tempMovieData } from "./components/tempData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
