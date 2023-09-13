import { useState } from "react";

import { Navbar } from "./components/nav/Navbar";
import { Main } from "./components/main/Main";

import { tempMovieData, tempWatchedData } from "./util/tempData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} watchedData={tempWatchedData} />
    </>
  );
}
