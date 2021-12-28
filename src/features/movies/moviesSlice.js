import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchData = async () => {
  return await (await fetch("./movies.json")).json();
};

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async ({ rejectWithValue }) => {
    try {
      const res = await fetchData();
      console.log(res);
      return res.data;
    } catch {
      return rejectWithValue("Error !!!");
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    addMovieRating: (state, action) => {
      state.movies.push({
        id: action.payload.id,
        name: action.payload.name,
        ratings: action.payload.ratings,
        duration: action.payload.duration,
      });
    },
  },
  // extraReducers: {
  //   [getMovies.fulfilled]: (state, action) => {
  //     console.log(action.payload);
  //   },
  // },
});

export const { addMovieRating } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;

export default moviesSlice.reducer;
