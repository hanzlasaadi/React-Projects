import { useState } from "react";

import { Main } from "./components/main/Main";
import { ListBox } from "./components/main/ListBox";
import { WatchedBox } from "./components/main/WatchedBox";

// navbar import statements
import { Navbar } from "./components/nav/Navbar";
import { Input } from "./components/nav/Input";
import { Results } from "./components/nav/Results";

import { tempMovieData, tempWatchedData } from "./util/tempData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar>
        <Input />
        <Results movies={movies} />
      </Navbar>
      <Main>
        <ListBox movies={movies} />
        <WatchedBox watchedData={tempWatchedData} />
      </Main>
    </>
  );
}
