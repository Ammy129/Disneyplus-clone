import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carasoule from "./components/Carasoule";
import Channels from "./components/Channels";
import SingleMovie from "./components/SingleMovie";
import MovieData from "./MovieData";

const Home = () => {
  return (
    <Container>
      <Carasoule />
      <Channels />

      <h5>Recommended For You</h5>
      <MovieWrapper>
        {MovieData.map(movie => (
          <SingleMovie key={movie.id} {...movie} />
        ))}
      </MovieWrapper>
    </Container>
  );
};

const Container = styled.section`
  max-width: 100vw;
  min-height: calc(100vh - 66px);
  background: url("./images/home-background.png") center/cover no-repeat;
  overflow: hidden;

  h5 {
    font-size: 1.5rem;
    color: #efefef;
    margin-top: 4rem;
    padding: 0 5vw;
    text-shadow: 12px 12px 15px rgba(0, 0, 0, 0.3),
      5px 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

const MovieWrapper = styled.section`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  padding: 0 5vw;
`;

export default Home;
