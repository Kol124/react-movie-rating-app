import React, { useEffect } from "react";
import styled from "styled-components";
import { ListItem } from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { selectMovies, getMovies } from "../features/movies/moviesSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(getMovies());
  });

  return (
    <>
      <Title>
        <p>Movie</p>
        <p>Rating</p>
        <p>Duration</p>
      </Title>
      {movies &&
        movies.map((movie) => <ListItem key={movie.id} movie={movie} />)}
    </>
  );
};

const Title = styled.section`
  display: grid;
  margin-top: 1rem;
  padding: 15px 5px;
  border-top: 1px solid #eee;
  border-bottom: 2px solid #ddd;
  grid-template-columns: 1fr 0.5fr 0.5fr;

  p {
    font-size: 17px;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export default MovieList;
