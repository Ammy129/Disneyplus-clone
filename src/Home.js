import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carasoule from "./components/Carasoule";
import Channels from "./components/Channels";
import SingleMovie from "./components/SingleMovie";
import MovieData from "./MovieData";

const Home = ({ searchTitle }) => {
  const [filteredMovies, setFilteredMovies] = useState(MovieData);

  useEffect(() => {
    if (searchTitle) {
      const lowerTitle = searchTitle.toLowerCase();
      const temp = MovieData.filter(data => data.title.includes(lowerTitle));
      setFilteredMovies(temp);
    } else {
      setFilteredMovies(MovieData);
    }
  }, [searchTitle]);

  return (
    <Container>
      {!searchTitle && (
        <>
          <Carasoule />
          <Channels />
        </>
      )}

      <h5 style={{ paddingTop: `${searchTitle ? "45px" : " 0"}` }}>
        {searchTitle ? "Search Results" : "Recommended For You"}
      </h5>
      <MovieWrapper id="movies">
        {filteredMovies.map(movie => (
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

  @media screen and (max-width: 768px) {
    h5 {
      margin-top: 2rem;
      font-size: 0.95rem;
    }
  }
`;

const MovieWrapper = styled.section`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
  padding: 0 5vw;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Home;
