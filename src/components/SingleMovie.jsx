import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleMovie = ({ img, id }) => {
  return (
    <Wrapper>
      <Link to={`/detail/${id}`}>
        <img src={img} alt="movies" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 190px;
  width: 100%;
  height: 228px;
  overflow: hidden;
  border-radius: 10px;
  border: 3px solid transparent;
  box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.5),
    25px 25px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: var(--trns);

  :hover {
    border: 3px solid rgba(255, 255, 255, 0.2);
    transform: scale(1.3);
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.4),
      12px 25px 30px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 500px) {
    height: 178px;
  }
`;

export default SingleMovie;
