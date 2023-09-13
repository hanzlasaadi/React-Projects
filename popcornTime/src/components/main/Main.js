import { ListBox } from "./ListBox";
import { WatchedBox } from "./WatchedBox";

export function Main({ movies, watchedData }) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox watchedData={watchedData} />
    </main>
  );
}
