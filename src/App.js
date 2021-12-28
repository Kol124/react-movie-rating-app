import React, { useState } from "react";
import styled from "styled-components";
import RateMovie from "./components/RateMovie";
import MovieList from "./components/MovieList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <h1>Rate Your Favorite Movies</h1>
      <RateMovie />
      <Search
        type="text"
        value={searchQuery}
        placeholder="Search"
        onChange={handleChange}
      />
      <MovieList />
    </Container>
  );
}

const Container = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 1.2rem 0.5rem;

  h1 {
    margin-bottom: 1rem;
    font-weight: 300;
    font-size: 3rem;
    color: #777;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 425px) {
      font-size: 1.5rem;
    }
  }
`;

const Search = styled.input`
  font-family: inherit;
  border-radius: 3px;
  margin-top: 15px;
  padding: 10px;
  width: 100%;
  outline: none;
  font-size: 16px;
  margin-bottom: 20px;
  border: 2px solid #eee;
`;

export default App;
