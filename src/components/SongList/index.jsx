import { useSelector } from "react-redux";
import { selectSongs } from "../../app/slices/songListSlice";
import { Song } from "./Song";
import "./style.scss";

export const SongList = () => {
  const songs = useSelector(selectSongs);
  return (
    <ul className="song-list">
      {songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </ul>
  );
};
