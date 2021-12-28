import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const res = await axios.get("http://localhost:3000/movies.json");
  return res.data;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    searchQuery: "",
  },
  reducers: {
    addMovieRating: (state, action) => {
      state.movies.push({
        id: Math.random().toString(),
        name: action.payload.name,
        ratings: action.payload.ratings,
        duration: action.payload.duration,
      });
    },
    editMovieRating: (state, action) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      state.movies[index].ratings = action.payload.ratings;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: {
    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
    [getMovies.rejected]: () => {
      console.log("Fetch Error");
    },
  },
});

export const { addMovieRating, editMovieRating, setSearchQuery } =
  moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectSearchQuery = (state) => state.movies.searchQuery;

export default moviesSlice.reducer;
