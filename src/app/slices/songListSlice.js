import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: require("../songs.json"),
  currentSong: {
    title: "none",
    artist: "none",
    src: "none",
    id: -1,
    duration: 0,
  },
  isPlaying: false,
};

const songListSlice = createSlice({
  name: "songList",
  initialState,
  reducers: {
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    changeSong: (state, action) => {
      state.isPlaying = true;
      state.currentSong = state.songs.find(
        (song) => song.id === action.payload
      );
    },
    prevNextToggle: (state, action) => {
      state.currentSong = state.songs.find(
        (song) => song.id === state.currentSong.id + action.payload
      );
    },
    setDuration: (state, action) => {
      state.currentSong.duration = action.payload;
    },
  },
});

export const { setIsPlaying, changeSong, prevNextToggle, setDuration } =
  songListSlice.actions;

export const selectSongs = (state) => state.songList.songs;
export const selectIsPlaying = (state) => state.songList.isPlaying;
export const selectCurrentSong = (state) => state.songList.currentSong;
export const selectCurrentId = (state) => state.songList.currentSong.id;
export const selectCurrentURL = (state) => state.songList.currentSong.src;
export const selectCurrentSongDuration = (state) =>
  state.songList.currentSong.duration;

export default songListSlice.reducer;
