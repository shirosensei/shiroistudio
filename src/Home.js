import React from 'react';
import styled from 'styled-components';
import 'animate.css';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`;

const HomeContent = styled.div`
flex: 1;
  text-align: center;
`;

const HomeTitle = styled.h1`
  font-size: 32px;
    color: var(--anti-flash-white);

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Adjust input styles for the targeted screen sizes */;
    font-weight: 400;
    font-size: 18px;
  }
  
  @media only screen and (max-width: 769px) {
    font-size: 20px;
  }
`;

const HomeSubtitle = styled.p`
  font-size: 18px;
  color: var(--anti-flash-white);
  margin-bottom: 24px;

  padding-bottom: 2rem;
  animation: animate__backInRight 2s;

@media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Adjust input styles for the targeted screen sizes */
    padding: 1.4rem;
    font-weight: lighter;
    font-size: 12px;
  }

  @media only screen and (max-width: 769px) {
    font-size: 1rem;
    padding: 0 1.8rem;
    font-weight: 400; /* normal */
  }
`;

const HomeButton = styled.a`
  padding: 12px 24px;
  font-size: 16px;
  color: var(--onyx);
  background-color: var(--mustard);
  outline: 1px solid var(--mustard);

  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Adjust input styles for the targeted screen sizes */
    padding: 8px;
    font-size: 12px;
  }

  @media only screen and (max-width: 768px) {
    padding: .6rem;
    font-weight: 400; /* normal */
  }

  &:hover {
    background-color: var(--mustard);
    color: var(--onyx);
  }
`;


const Span = styled.span`
color: var(--mustard);
`;

const Home = () => {

  return (
    <>
   
    <HomeContainer>
      <HomeContent>
        <HomeTitle>Hi, I'm Tozo! <Span>A Software Engineer</Span></HomeTitle>
        <HomeSubtitle className="animate__animated animate__backInRight">Discover my impressive portfolio of projects that exhibit my expertise. 
        </HomeSubtitle>
        <HomeButton href="project">Get Started</HomeButton>
      </HomeContent>
    </HomeContainer>

    </>
  );
};

export default Home;
