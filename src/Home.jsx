import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import "animate.css";

import home from "./assets/home.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;


  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
box-sizing: border-box;
text-align: center;

  @media (min-width: 768px) {
    flex: 2; 
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: var(--anti-flash-white);
  margin-bottom: 10px;
  font-weight: 600;

  @media only screen and (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

const HomeSubtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--anti-flash-white);
  margin-bottom: 24px;

  padding-bottom: 2rem;
  animation: animate__backInRight 2s;
  transition: animate 0.2s ease-in;

  @media only screen and (max-width: 769px) {
    font-size: 1.2rem;
    padding: 0 1.8rem;
    font-weight: 400; /* normal */
    line-height: 1.5;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: var(--onyx);
  font-weight: 600;
  background-color: var(--accent-color);
  border: 2px solid var(--accent-color);
  border-radius: 8px;

  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Adjust input styles for the targeted screen sizes */
    padding: 8px;
    font-size: 12px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.6rem;
    font-weight: 400; /* normal */
  }

  &:hover {
    background-color: var(--accent-color);
    color: var(--onyx);
  }
`;

const Span = styled.span`
  color: var(--accent-color);
`;

const ImageCard = styled.div`
  margin-top: 2.5rem;
  width: 100%;

  img {
    width: 80%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    height: auto;
    opacity: 0.7;
    border-radius: 50%;
  }

  @media only screen and (min-width: 768px) {
    flex: 3;
    margin-top: 2.5rem;
    margin-left: 5rem;
    max-width: 600px;
     display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    img {
      width: 80%;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <ImageCard>
          <img
            src={home}
            srcSet={`
        ${home} 600w,
        ${home} 1200w,
        `}
            sizes="
      (max-width: 600px) 560px,
      (max-width: 1200px) 50vw, 33vw,
      "
            alt="Tozo's Logo"

            // width={150}
          />
        </ImageCard>

        <Wrapper>
          <Title>
            Hi, I'm Tozo! <Span>A Software Engineer</Span>
          </Title>
          <HomeSubtitle className="animate__animated animate__backInRight">
            Discover my impressive portfolio of projects that exhibit my
            expertise.
          </HomeSubtitle>

          <Button>
            <Link to="project" smooth={true} duration={300}>
              Get Started
            </Link>
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
