import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toogleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      state.movieResults = action.payload.movieData;
      state.movieNames = action.payload.recommendedMovies;
    },
  },
});

export const { toogleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
