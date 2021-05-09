import React, { useState } from "react";
import styled from "styled-components";

const Login = ({ setIsLogin }) => {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState("");

  const submitted = e => {
    e.preventDefault();
    console.log("yeah");
    localStorage.setItem("user", JSON.stringify(user));
    setIsLogin(true);
  };

  return (
    <Wrapper>
      <Header>
        <Logo src="./images/logo.svg" alt="logo" />
        <LoginBtn onClick={() => setShowForm(true)}> Login</LoginBtn>
      </Header>

      {!showForm && (
        <Main>
          <img src="./images/cta-logo-one.svg" alt="logos" />
          <CTABtn onClick={() => setShowForm(true)}> Get all there</CTABtn>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/22, the price of Disney+
            and The Disney Bundle will Increase by $1.
          </Description>
          <img src="./images/cta-logo-two.png" alt="logos" />
        </Main>
      )}

      {showForm && (
        <Form onSubmit={submitted}>
          <input
            type="text"
            placeholder="Username"
            onChange={e => setUser(e.target.value)}
            required
          />
          <input type="password" placeholder="Password" required />
          <SubmitBtn>Login</SubmitBtn>
        </Form>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  background: url("./images/login-background.jpg");
`;

const Header = styled.header`
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  background: #040b18;
`;

const Logo = styled.img`
  width: 75px;
`;

const LoginBtn = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid white;
  border-radius: 6px;
  background: none;
  outline: none;
  cursor: pointer;
  transition: var(--trns);
  :hover {
    transform: scaleX(1.18);
  }
`;

const Main = styled.div`
  width: 90%;
  margin: 5rem auto;
  max-width: 650px;
`;

const CTABtn = styled.button`
  width: 100%;
  padding: 1rem;
  background: rgb(20, 24, 255);
  border: none;
  outline: none;
  border-radius: 6px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  margin: 1.5rem 0;
  transition: var(--trns);
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  :hover {
    background: rgb(73, 76, 255);
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  letter-spacing: 1.5px;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  width: 90%;
  margin: 8.5rem auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input {
    padding: 1.3rem;
    font-size: 1.12rem;
    border: 2px solid rgb(20, 24, 255);
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);

    :focus {
      border: 2px solid rgb(103, 106, 255);
    }
  }
`;

const SubmitBtn = styled(CTABtn)``;

export default Login;
