import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  addMovieRating,
  editMovieRating,
  setSearchQuery,
  selectMovies,
  selectSearchQuery,
} from "../features/movies/moviesSlice";

export const RateMovie = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const searchItem = useSelector(selectSearchQuery);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [duration, setDuration] = useState("");

  const myMovies =
    movies && movies.find((myMovie) => myMovie.name === name.toLowerCase());

  const handleSubmit = (e) => {
    const title = name.toLowerCase();
    e.preventDefault();
    if (myMovies) {
      dispatch(editMovieRating({ id: myMovies.id, ratings: rating }));
    } else {
      dispatch(
        addMovieRating({
          name: title,
          ratings: rating,
          duration: duration,
        })
      );
    }

    if (searchItem.toLowerCase() !== title) {
      dispatch(setSearchQuery(""));
    }

    setName("");
    setRating(0);
    setDuration("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Movie</p>
      <Input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Rating</p>
      <Input
        value={rating}
        type="number"
        onChange={(e) => setRating(e.target.value)}
      />
      <p>Duration</p>
      <Input
        value={duration}
        type="text"
        onChange={(e) => setDuration(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

const Input = styled.input`
  font-family: inherit;
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  outline: none;
  font-size: 16px;
  margin: 5px 0 15px 0;
  border: 2px solid #eee;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  color: #fff;
  border: none;
  font: inherit;
  border-radius: 5px;
  transition: all 0.3s ease;
  background-color: royalBlue;
  padding: 12px 15px;
  cursor: pointer;
  outline: none;
`;

export default RateMovie;
