import React from 'react';
import styled from 'styled-components';


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
  color: #333;
  margin-bottom: 16px;
`;

const HomeSubtitle = styled.h2`
  font-size: 18px;
  color: #fff;
  margin-bottom: 24px;
`;

const HomeButton = styled.a`
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
`;

const Home = () => {
  return (
    <>
   
    <HomeContainer>
      <HomeContent>
        <HomeTitle>Hi, I'm Tozo! Welcome to My Portfolio</HomeTitle>
        <HomeSubtitle>Explore my work and skills</HomeSubtitle>
        <HomeButton href="/project">Get Started</HomeButton>
      </HomeContent>
    </HomeContainer>

    </>
  );
};

export default Home;
