import { useDispatch } from "react-redux";
import { changeSong } from "../../../app/slices/songListSlice";
import "./style.scss";

export const Song = ({ song }) => {
  const dispatch = useDispatch();

  const handlePlay = (event) => {
    dispatch(changeSong(+event.target.id));
  };

  return (
    <li className="song" onClick={handlePlay} id={song.id}>
      <p>{song.title}</p>
      <p>{song.artist}</p>
    </li>
  );
};
