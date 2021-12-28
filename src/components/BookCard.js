import React from "react";
import del from "../delete.svg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import complete from "../task-complete.svg";
import { removeBook, completeBook } from "../features/movies/moviesSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <CardImage>
          <img src={book.image} alt={book.title} />

          <CardImageIconsOverlay>
            {book.completed ? (
              <CardImageIcons>
                <img src={complete} alt="complete" />
                <DropDown>
                  <span>Completed</span>
                </DropDown>
              </CardImageIcons>
            ) : (
              <CardImageIcons
                className="fas fa-check"
                onClick={() => dispatch(completeBook(book))}
              ></CardImageIcons>
            )}
            <CardImageIcons onClick={() => dispatch(removeBook(book))}>
              <img src={del} alt="complete" />
              <DropDown>
                <span>Remove Book</span>
              </DropDown>
            </CardImageIcons>
          </CardImageIconsOverlay>
        </CardImage>
        <CardText>
          <a target="_blank" rel="noopener noreferrer" href={book.link}>
            <h2>{book.title}</h2>
          </a>
          <h4>{book.authors}</h4>
        </CardText>
      </Card>
    </>
  );
};

const CardImageIconsOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  bottom: -1%;
  left: 0;
  height: 25%;
  opacity: 0.95;
  background: #e8eddf;
  transition: all 0.3s ease;
  transform: translate(0, 100%);
  clip-path: polygon(0 40%, 50% 0, 100% 40%, 100% 100%, 0% 100%);
`;

const DropDown = styled.aside`
  top: 20px;
  right: 20px;
  font-size: 10px;
  text-align: center;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  background: #78412e;
  position: absolute;
  border-radius: 2px;
  padding: 3px 5px;
  color: #fff;
  opacity: 0;
`;

const CardImageIcons = styled.div`
  position: relative;
  font-size: 1.8rem;
  margin-top: 7%;
  width: 50%;
  display: flex;
  cursor: pointer;
  justify-content: center;

  img {
    height: 1.8rem;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const Card = styled.div`
  overflow: hidden;
`;

const CardImage = styled.div`
  margin-bottom: 1.3rem;
  position: relative;
  z-index: 1;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 1rem 3.5rem rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
  }

  &:hover ${CardImageIconsOverlay} {
    transform: translate(0, -4%);
  }
`;

const CardText = styled.div`
  h2 {
    color: #78412e;
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  h4 {
    font-size: 1.5rem;
    color: #5f4e40;
    opacity: 0.6;
    font-weight: 400;
  }

  p {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

export default BookCard;
