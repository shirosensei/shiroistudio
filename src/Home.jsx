import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import 'animate.css';

import image_400 from './assets/image-400.jpg';
import image_600 from './assets/image-600.jpg';
import image_800 from './assets/image-800.jpg';
import image_1200 from './assets/image-1200.jpg';
import image_1600 from './assets/image-1600.jpg';
import image_1920 from './assets/image-1920.jpg';
import image_2560 from './assets/image-2560.jpg';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-right: 20px;
  }
`;

const Wrapper = styled.div`
text-align: center;

`;



const Title = styled.h1`
  font-size: 32px;
    color: var(--anti-flash-white);
    margin-bottom: 10px;

  @media only screen and (min-width: 320px) and (max-width: 598px) {
    /* Adjust input styles for the targeted screen sizes */;
    font-weight: 400;
    font-size: 18px;
  }
  
  @media only screen and (min-width: 769px) {
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
    padding: .6rem;
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
margin: 0 auto;
overflow: hidden;
background-color: var(--space-cadet);
z-index: -5;

img {
  width: 80%;
}

@media only screen and (min-width: 768px) {
margin-top: 2.5rem;
max-width: 600px;
}
`

const Home = () => {

  return (
    <>
   
    <Container>
    <ImageCard>
      <img src={image_1200}
      srcSet={`
        ${image_400} 400w, 
        ${image_600} 600w,
        ${image_800} 800w,
        ${image_1200} 1200w,
        ${image_1600} 1600w,
        ${image_1920} 1920w,
        ${image_2560} 2560w 
        `}
      sizes="
      (max-width: 600px) 200px,
      (max-width: 900) 300px,
      (max-width: 1200px) 400px,
      (max-width: 1600px) 400px,
      (max-width: 1920px) 400px,   
      (min-width: 1921px) 400px    
      "
      alt="Responsive Home Logo"
      style={{ maxWidth: '100%', height: 'auto', mixBlendMode: 'inherit', opacity: '0.7' }}
      // width={150}
      />
      </ImageCard>
      
      <Wrapper>
     
        <Title>Hi, I'm Tozo! <Span>A Software Engineer</Span></Title>
        <HomeSubtitle className="animate__animated animate__backInRight">Discover my impressive portfolio of projects that exhibit my expertise. 
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
