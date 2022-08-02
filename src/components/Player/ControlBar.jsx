import { useDispatch, useSelector } from "react-redux";

import {
  setIsPlaying,
  prevNextToggle,
  selectIsPlaying,
  selectCurrentId,
} from "../../app/slices/songListSlice";

import { Control } from "./Control";

export const ControlBar = ({ onNext }) => {
  const isPlaying = useSelector(selectIsPlaying);
  const id = useSelector(selectCurrentId);

  const dispatch = useDispatch();

  const onPlayPause = () => {
    dispatch(setIsPlaying());
  };

  const onPrev = () => {
    if (id > 0) {
      dispatch(prevNextToggle(-1));
    }
  };

  return (
    <div className="control-bar">
      <Control name="prev" handleClick={onPrev} />
      <Control name={isPlaying ? "pause" : "play"} handleClick={onPlayPause} />
      <Control name="next" handleClick={onNext} />
    </div>
  );
};
