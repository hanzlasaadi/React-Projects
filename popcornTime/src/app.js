import { useState } from "react";

import { Main } from "./components/main/Main";
import { Box } from "./components/main/Box";
import { QueryMoviesList } from "./components/main/QueryMoviesList";
import { Summary } from "./components/main/Summary";
import { WatchedMoviesList } from "./components/main/WatchedMoviesList";

// navbar import statements
import { Navbar } from "./components/nav/Navbar";
import { Input } from "./components/nav/Input";
import { Results } from "./components/nav/Results";

import { tempMovieData, tempWatchedData } from "./util/tempData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Input />
        <Results movies={movies} />
      </Navbar>
      <Main>
        <Box element={<QueryMoviesList movies={movies} />} />
        <Box
          element={
            <>
              <Summary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          }
        />
        {/* <Box>
          <QueryMoviesList movies={movies} />
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box> */}
      </Main>
    </>
  );
}
