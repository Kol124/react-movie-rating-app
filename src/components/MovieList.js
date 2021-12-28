import React, { useEffect } from "react";
import styled from "styled-components";
import { ListItem } from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMovies,
  selectSearchQuery,
  setSearchQuery,
  getMovies,
} from "../features/movies/moviesSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const searchItem = useSelector(selectSearchQuery);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(e.target.value));
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const moviesList = movies.filter((movie) => {
    return movie.name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1;
  });

  return (
    <>
      <Search
        type="text"
        value={searchItem}
        placeholder="Search"
        onChange={handleChange}
      />
      <Title>
        <p>Movie</p>
        <p>Rating</p>
        <p>Duration</p>
      </Title>
      {moviesList &&
        moviesList.map((movie) => <ListItem key={movie.id} movie={movie} />)}
    </>
  );
};

const Search = styled.input`
  font-family: inherit;
  border-radius: 3px;
  margin-top: 2rem;
  padding: 10px;
  width: 100%;
  outline: none;
  font-size: 16px;
  margin-bottom: 20px;
  border: 2px solid #eee;
`;

const Title = styled.section`
  display: grid;
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
