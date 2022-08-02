import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentURL, setDuration } from "../../app/slices/songListSlice";

export const AudioBlock = React.forwardRef(({ handleEnded }, audioRef) => {
  const url = useSelector(selectCurrentURL);
  const dispatch = useDispatch();

  const changeDurationHandler = () => {
    dispatch(setDuration(audioRef.current.duration));
  };

  return (
    <audio
      ref={audioRef}
      src={url}
      onDurationChange={changeDurationHandler}
      onEnded={handleEnded}
    >
      no audio
    </audio>
  );
});
