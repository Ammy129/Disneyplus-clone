import React, { useRef } from "react";
import styled from "styled-components";

const Channels = () => {
  const data = [
    {
      img: "./images/viewers-disney.png",
      video: "./videos/1564674844-disney.mp4",
    },
    {
      img: "./images/viewers-marvel.png",
      video: "./videos/1564676115-marvel.mp4",
    },
    {
      img: "./images/viewers-national.png",
      video: "./videos/1564676296-national-geographic.mp4",
    },
    {
      img: "./images/viewers-pixar.png",
      video: "./videos/1564676714-pixar.mp4",
    },
    {
      img: "./images/viewers-starwars.png",
      video: "./videos/1608229455-star-wars.mp4",
    },
  ];

  const videoPlayPause = e => {
    //getting the type of event
    const type = e.type;

    // getting the video from DOM
    const target = e.currentTarget.children[1];

    if (type === "mouseenter") target.play();
    else if (type === "mouseleave") target.pause();
    else return;
  };

  const WrapComponent = ({ img, video }) => (
    <Wrap onMouseEnter={videoPlayPause} onMouseLeave={videoPlayPause}>
      <img src={img} alt="channels" />
      <video className="video" muted loop>
        <source src={video} />
      </video>
    </Wrap>
  );

  return (
    <Wrapper>
      {data.map((data, index) => (
        <WrapComponent {...data} key={index} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1rem;
  padding: 0 5vw;
`;

const Wrap = styled.div`
  width: 100%;
  border-radius: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 5px 10px 8px rgba(0, 0, 0, 0.5),
    12px 25px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: var(--trns);
  position: relative;
  max-width: 160px;
  overflow: hidden;
  margin: 0 auto;

  :hover {
    transform: scale(1.3);
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.4),
      12px 25px 30px rgba(0, 0, 0, 0.15);
  }
  :hover .video {
    opacity: 1;
    transform: scale(1);
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: var(--trns);
  }
`;

export default Channels;
