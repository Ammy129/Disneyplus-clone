import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ setIsLogin }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogin(false);
  };
  const user = JSON.parse(localStorage.getItem("user"));

  const NavData = [
    {
      item: "Home",
      img: "./images/home-icon.svg",
    },
    {
      item: "Search",
      img: "./images/search-icon.svg",
    },
    {
      item: "Watchlist",
      img: "./images/watchlist-icon.svg",
    },
    {
      item: "originals",
      img: "./images/original-icon.svg",
    },
    {
      item: "movies",
      img: "./images/movie-icon.svg",
    },
    {
      item: "series",
      img: "./images/series-icon.svg",
    },
  ];

  const NavItems = ({ item, img }) => {
    return (
      <a href="#" className="nav-item">
        <img src={img} alt="nav" />
        <span>{item.toUpperCase()}</span>
      </a>
    );
  };

  return (
    <Container>
      <MenuIcon
        className="menu-icon"
        onClick={() => {
          setShowMenu(prev => (prev ? false : true));
          setShowBtn(false);
        }}
      />

      <Link to="/">
        <Logo src="./images/logo.svg" />
      </Link>
      <Nav className={showMenu && "showMenu"}>
        {NavData.map((data, index) => {
          return <NavItems key={index} {...data} />;
        })}
      </Nav>
      <UserImg
        src="./images/user.png"
        onClick={() => setShowBtn(prev => (prev ? false : true))}
      />
      <LogoutWrapper className={showBtn && "showBtn"}>
        <p>Hey , {user}</p>
        <LogoutBtn onClick={logout}>Logout</LogoutBtn>
      </LogoutWrapper>
    </Container>
  );
};

const Container = styled.header`
  background: #040b18;
  height: 66px;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  color: white;
  position: relative;
  z-index: 500;

  .menu-icon {
    display: none;
  }
  a {
    z-index: 555;
  }
  .showBtn {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0%);
  }

  @media screen and (max-width: 950px) {
    .menu-icon {
      display: block;
      cursor: pointer;
      z-index: 555;
    }
    .showMenu {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const Logo = styled.img`
  width: 75px;
  z-index: 555;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;
  height: 66px;

  .nav-item {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      bottom: -5px;
      height: 2px;
      left: 0;
      background: white;
      width: 0%;
      opacity: 0;
      transition: var(--trns);
    }
    :hover::after {
      width: 100%;
      opacity: 1;
    }
  }

  img {
    width: 20px;
  }
  span {
    letter-spacing: 1.5px;
    font-size: 0.85rem;
  }

  @media screen and (max-width: 950px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60vh;
    background: #040b18;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    place-items: center;
    padding: 70px;
    z-index: 400;
    opacity: 0.5;
    transition: var(--trns);
    transform: translateY(-105%);
    opacity: 0;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
  }
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  z-index: 555;
  cursor: pointer;
  transition: var(--trns);

  :hover {
    border: 2px solid white;
  }
`;

const LogoutWrapper = styled.div`
  position: absolute;
  top: 68px;
  right: 4vw;
  padding: 1rem 1.5rem;
  z-index: 1000;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-20%);
  transition: var(--trns);
  box-shadow: 5px 5px 15px black;
`;

const LogoutBtn = styled.button`
  padding: 0.7rem 1.5rem;
  margin-top: 0.8rem;

  background: rgb(20, 24, 255);
  z-index: 1000;
  border: none;
  border-radius: 6px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  :hover {
    background: rgb(73, 76, 255);
  }
`;

export default Header;
