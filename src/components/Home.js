import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";
import styled from "styled-components";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("UseEffect");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .get(
        ` https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
      )
      .then((res) => {
        setResults(res.data.items);
        console.log(res.data.items);
      });
  }

  return (
    <>
      <HeroContent>
        <Heading>Google Books</Heading>
        <form onSubmit={handleSubmit}></form>
        <h1>Try saying "What does this app do"</h1>
        <h1>Use "Search", or "Search for"</h1>
      </HeroContent>
      <Grid>
        {results &&
          results.map((book) => <ResultCard key={book.id} book={book} />)}
      </Grid>
    </>
  );
}

const HeroContent = styled.div`
  position: absolute;
  width: 55%;
  top: 40%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);

  h1 {
    text-align: center;
    margin-top: 1.5rem;
    color: #f9f9f9;
  }

  @media only screen and (max-width: 480px) {
    width: 75%;
  }
`;

const Heading = styled.h1`
  font-size: 6.5rem;
  color: #f9f9f9;
  margin-bottom: 5%;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 4.5rem;
  }
`;

const Grid = styled.main`
  grid-template-columns: repeat(2, 1fr);
  margin: -20rem auto 5rem auto;
  display: grid;
  grid-gap: 2rem;
  max-width: 114rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
