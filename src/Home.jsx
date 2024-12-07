import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import "animate.css";

import home from "./assets/home.jpg";
import arrow from "./assets/chevron.png";


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;

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

  color: var(--anti-flash-white);
  margin-bottom: 24px;
  max-width: 100%;
  padding-bottom: 2rem;
  overflow: hidden;

  @media only screen and (max-width: 769px) {
    font-size: 1.2rem;
    padding: 0 1.8rem;
    font-weight: 400; /* normal */
    line-height: 1.5;
  }
`;

const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  animation: bounce 15s infinite;

  img {
  width: 50px;
  height: auto;
    transform: rotate(180deg);
    max-width: 100%;
    opacity: 0.8;
  }


  &:hover {
    background-color: transparent;
  }
`;

const boundIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70%{
      transform: scale(0.9);
    }
      100% {
        transform: scale(1);
      }
`;

const Span = styled.span`
  color: var(--accent-color);
  display: inline-block;
  cursor: pointer;

  &:hover {
    animation: ${boundIn} 1s ease-in;
  }
`;

const ImageCard = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;

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
    justify-content: flex-end;

    img {
      width: 80%;
    }
  }

  @media (min-width: 2000px) {
    img {
      width: 100%;
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
      (max-width: 600px) 500px,
      (max-width: 1200px) 50vw, 33vw,
      "
            alt="Tozo's Logo"

            // width={150}
          />
        </ImageCard>

        <Wrapper>
          <Title className="animate__animated animate__backInUp 1s ease-in-out">
            Hi, I'm Tozo! <Span>A Software Engineer</Span>
          </Title>
          <HomeSubtitle className="animate__animated animate__backInRight 2s animate__slow">
            Discover my impressive portfolio of projects that exhibit my
            expertise.
          </HomeSubtitle>

          <Button>
            <Link to="project" smooth={true} duration={300}>
              <img src={arrow} alt="arrow" />
            </Link>
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
