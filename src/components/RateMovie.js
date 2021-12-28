import React, { useState } from "react";
import styled from "styled-components";

export const RateMovie = () => {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState();
  const [duration, setDuration] = useState("");

  const handleSubmit = () => {
    console.log("Submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Movie</p>
      <Input value={movie} type="text" onChange={(e) => setMovie} />
      <p>Rating</p>
      <Input
        value={rating}
        type="number"
        placeholder="0"
        onChange={(e) => setRating}
      />
      <p>Duration</p>
      <Input value={duration} type="text" onChange={setDuration} />
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
