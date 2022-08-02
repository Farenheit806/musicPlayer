import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AudioBlock } from "./AudioBlock";
import { ControlBar } from "./ControlBar";
import { TimeLine } from "./TimeLine";

import {
  changeSong,
  prevNextToggle,
  selectCurrentId,
  selectCurrentSong,
  selectCurrentSongDuration,
  selectIsPlaying,
  selectSongs,
} from "../../app/slices/songListSlice";

import "./style.scss";

export const Player = () => {
  const [time, setTime] = useState(0);

  const audioRef = useRef();
  const timeLineRef = useRef();
  const animationRef = useRef();

  const duration = useSelector(selectCurrentSongDuration);
  const id = useSelector(selectCurrentId);
  const isPlaying = useSelector(selectIsPlaying);
  const currentSong = useSelector(selectCurrentSong);
  const songs = useSelector(selectSongs);

  const dispatch = useDispatch();

  const whilePlaying = useCallback(() => {
    timeLineRef.current.value = audioRef.current.currentTime;
    animationRef.current = requestAnimationFrame(whilePlaying);
    setTime(timeLineRef.current.value);
  }, []);

  const changeTime = () => {
    audioRef.current.currentTime = timeLineRef.current.value;
    setTime(timeLineRef.current.value);
  };

  const onNext = () => {
    if (currentSong.id < songs.length - 1) {
      dispatch(prevNextToggle(1));
    } else {
      dispatch(changeSong(songs[0].id));
    }
  };

  useEffect(() => {
    timeLineRef.current.max = duration;
  }, [duration, id]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }, [isPlaying, id, whilePlaying]);

  return (
    <div className="player">
      <div className="player__flex container">
        <AudioBlock ref={audioRef} handleEnded={onNext} />
        <ControlBar onNext={onNext} />
        <TimeLine ref={timeLineRef} time={time} handleChange={changeTime} />
      </div>
    </div>
  );
};
