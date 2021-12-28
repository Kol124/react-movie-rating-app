import React from "react";
import styled from "styled-components";

export const ListItem = ({ movie }) => {
  return (
    <ListItems>
      <p>{movie.name}</p>
      <p>{movie.ratings}</p>
      <p>{movie.duration}</p>
    </ListItems>
  );
};

const ListItems = styled.section`
  display: grid;
  padding: 16px 5px;
  grid-template-columns: 1fr 0.5fr 0.5fr;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }

  p {
    text-transform: capitalize;
  }
`;
