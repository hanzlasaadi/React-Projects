import { useState } from "react";
import { tempWatchedData } from "./tempData";
import { Summary } from "./Summary";
import { WatchedMoviesList } from "./WatchedMoviesList";

export function WatchedBox() {
  const [isOpen2, setIsOpen2] = useState(true);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <Summary watched={watched} />

          <ul className="list">
            {watched.map((mov) => (
              <WatchedMoviesList movie={mov} key={mov.imdbID} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
