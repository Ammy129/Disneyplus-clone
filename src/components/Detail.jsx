import React from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import MovieData from "../MovieData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();

  const data = MovieData.find(data => data.id === id);
  const { detail, title } = data;

  return (
    <Wrapper>
      <ArrowBackIosIcon className="back" onClick={() => history.goBack()} />

      <BG>
        <img src={detail} alt="detail-img" />
      </BG>
      <Text>
        <h1>{title}</h1>
        <Buttons>
          <PlayBtn>
            <img src="./images/play-icon-black.png" alt="icon" />
            <strong>Play</strong>
          </PlayBtn>
          <TrailerBtn>
            <img src="./images/play-icon-white.png" alt="icon" />
            <strong>Trailer</strong>
          </TrailerBtn>
          <AddBtn>
            {" "}
            <img src="./images/watchlist-icon.svg" alt="icon" />
          </AddBtn>
          <GroupBtn>
            <img src="./images/group-icon.png" alt="icon" />
          </GroupBtn>
        </Buttons>

        <Description>
          Hashtag meditation banjo, lyft banh mi helvetica tousled kinfolk YOLO
          plaid kogi kitsch fanny pack sustainable. Kale chips heirloom neutra,
          vaporware flannel adaptogen godard sriracha cold-pressed disrupt.
        </Description>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh - 66px);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 5vw;

  .back {
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 100;
    cursor: pointer;
    width: 30px;
    height: 30px;
    transition: var(--trns);
    :hover {
      transform: scale(1.2);
    }
  }
`;

const BG = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  img {
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0.5;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h1 {
    font-size: 5rem;
    font-weight: 500;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6),
      10px 10px 10px rgba(0, 0, 0, 0.4);
    line-height: 1;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const PlayBtn = styled.button`
  height: 55px;
  width: 130px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background: rgba(239, 239, 239, 0.8);
  strong {
    color: black;
    font-size: 1rem;
  }
  :hover {
    background: rgba(199, 199, 199, 1);
  }
  img {
    width: 30px;
  }
`;

const TrailerBtn = styled(PlayBtn)`
  border: 2px solid rgba(239, 239, 239, 0.3);
  background: rgba(0, 0, 0, 0.4);
  strong {
    color: white;
  }
  :hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const AddBtn = styled.button`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  border: none;
  display: grid;
  place-items: center;
  height: 55px;
  width: 55px;
  cursor: pointer;
  transition: var(--trns);
  img {
    width: 30px;
  }
  :hover {
    transform: scale(1.2);
  }
`;

const GroupBtn = styled(AddBtn)`
  background: rgba(0, 0, 0, 0.8);
`;

const Description = styled.p`
  line-height: 1.6;
  color: white;
  width: 35vw;
  text-shadow: 2px 2px 2px black, 4px 4px 4px black;
  @media screen and (max-width: 700px) {
    width: 55vw;
  }
`;

export default Detail;
