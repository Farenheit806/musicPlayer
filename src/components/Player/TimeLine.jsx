import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSongDuration } from "../../app/slices/songListSlice";

export const TimeLine = React.forwardRef(
  ({ time, handleChange }, timeLineRef) => {
    const duration = useSelector(selectCurrentSongDuration);

    const transformTime = (time) => {
      const mins = Math.floor(time / 60);
      const secs = (Math.floor(time % 60) < 10 && "0") + Math.floor(time % 60);
      return mins + ":" + secs;
    };

    return (
      <div className="timeline">
        <p>{transformTime(time)}</p>
        <input type="range" ref={timeLineRef} onChange={handleChange} />
        <p>{isNaN(duration) ? "0:00" : transformTime(duration)}</p>
      </div>
    );
  }
);
