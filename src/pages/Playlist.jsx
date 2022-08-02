import { useSelector } from "react-redux";
import { selectCurrentId } from "../app/slices/songListSlice";

import { Player } from "../components/Player";
import { SongList } from "../components/SongList";

const Playlist = () => {
  const currentId = useSelector(selectCurrentId);
  return (
    <main className="playlist">
      <div className="container">
        <h1>Playlist</h1>
        <SongList />
      </div>
      {currentId !== -1 && <Player />}
    </main>
  );
};
export default Playlist;
