import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import "animate.css";

import home from "./assets/home.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  padding-bottom:  ${({ theme }) => theme.spacing.larger};
  border-bottom: 2px solid  ${({ theme }) => theme.colors.gunmetal};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.onyx};
  line-height: 1.6;
`;

const Button = styled.button`
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.large};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 0.375rem;
  line-height: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: inset 0px 0px 2px ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.075rem;
  height: 3.5rem;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    transform: scale(0.98);
    background-color: ${({ theme }) => theme.colors.accentHover};
    border: 2px solid ${({ theme }) => theme.colors.accentHover};
  }
`;

const ImageCard = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
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
            width="100%"
            height="100%"
          />
        </ImageCard>

        <Wrapper>
          <Heading>Hi, I'm Tozo! A Software Engineer</Heading>
          <Paragraph>Check out my portfolio of projects.</Paragraph>

          <Button>
            <Link to="project" smooth={true} duration={300}>
              Let's Go
            </Link>
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
