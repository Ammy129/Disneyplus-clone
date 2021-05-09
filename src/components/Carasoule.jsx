import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import styled from "styled-components";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carasoule = () => {
  return (
    <Wrapper>
      <Swiper
        pagination
        navigation
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
      >
        <SwiperSlide>
          <img src="./images/slider-aladdin.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slider-badag.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slider-raya.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slider-xmen.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slider-badging.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slider-scale.jpg" alt="banner" />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  border-radius: 1rem;
  overflow-x: hidden;
  padding: 0.8rem 0 3rem;

  .swiper-container {
    overflow: visible;
    width: 90%;
  }
  .swiper-slide {
    border-radius: 20px;
    border: 3px solid transparent;
    box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.5),
      25px 25px 20px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    cursor: pointer;
    transition: var(--trns);

    :hover {
      border: 3px solid rgba(255, 255, 255, 0.2);
      transform: scale(1.03);
      box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.4),
        12px 25px 30px rgba(0, 0, 0, 0.15);
    }
  }

  @media screen and (max-width: 768px) {
    .swiper-slide {
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default Carasoule;
