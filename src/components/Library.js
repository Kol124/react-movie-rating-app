import React, { useState } from "react";
import styled from "styled-components";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { selectBooks } from "../features/movies/moviesSlice";

export default function Library() {
  const books = useSelector(selectBooks);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <HeroContent>
        <Heading>My Books</Heading>
        <Search
          type="text"
          value={searchQuery}
          placeholder="Search books by title"
          onChange={handleChange}
        />
      </HeroContent>
      <Container>
        <Grid>
          {books.length > 0 ? (
            filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <Heading>No Books Available</Heading>
          )}
        </Grid>
      </Container>
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

  @media only screen and (max-width: 480px) {
    width: 75%;
  }
`;

const Heading = styled.h1`
  font-size: 6.5rem;
  color: #f9f9f9;
  margin-bottom: 5%;
  text-align: center;
`;

const Search = styled.input`
  font-family: "Josefin Sans", cursive, sans-serif;
  margin: 0 auto 1rem auto;
  height: 5.5rem;
  border: none;
  width: 100%;
  outline: none;
  font-size: 2rem;
  border-radius: 3rem;
  padding: 1.5rem 1rem 1rem 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Container = styled.main`
  max-width: 100rem;
  margin: -20rem auto 10rem auto;

  @media only screen and (max-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 20rem));
  justify-content: center;
  grid-gap: 5rem;
`;
