import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SiHtml5, SiCss3, SiJavascript, SiMongodb, SiPostman, SiBootstrap, SiTailwindcss, SiGit, SiSass, SiPhp, SiReact } from 'react-icons/si';
import { DarkBackground } from './DarkBackground';
import Footer from './Footer';
import ResponsiveNavbar from './Navbar';

const AboutContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
word-break: normal;
padding: 1.5rem 1.5rem;
margin: 1.5rem 0;
background-color: var(--gunmetal);
color: var(--anti-flash-white);

@media screen and (max-width: 598px) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding-top: 10.5rem;
}

@media only screen and (min-width: 320px) and (max-width: 498px) {
  /* Adjust input styles for the targeted screen sizes */
  font-size: 14px;
  line-height: 1.5rem;
  margin: 3.5rem 0;
}
`;

const AboutTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
  color: var(--mustard);

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Adjust input styles for the targeted screen sizes */
    padding: 8px;
    font-size: 18px;
  }
`;

const AboutDescription = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 24px;
  line-height: 2rem;
  text-align: center;
  width: fit-content(10em);
  break-word: break-word;

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Adjust input styles for the targeted screen sizes */
    padding: 8px;
    font-size: 14px;
  }

`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 598px) {
    margin-bottom: 4.5rem;
  }

`;

// Define the bounce animation
const bounceAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const BouncingIcon = styled.div`
  display: flex;
  margin: 10px;
  background-color: ${({ name }) => {
    switch (name) {
      case 'MongoDB':
        return '#47A248';
      case 'Postman':
        return '#FF6C37';
      case 'Node.js':
        return '#83CD29';
      case 'Next.js':
        return '#000000';
      case 'Bootstrap':
        return '#7952B3';
      case 'Tailwind CSS':
        return '#06B6D4';
      case 'Git':
        return '#F05032';
      case 'Sass':
        return '#CC6699';
      case 'PHP':
        return '#777BB4';
      case 'React':
        return '#61DAFB';
      default:
        return '#000000';
    }
  }};
  padding: 10px;
  border-radius: 50%;
  animation: ${bounceAnimation} 2s infinite;

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Adjust input styles for the targeted screen sizes */
    margin: 0.5rem 0.75rem;
    padding: 5px;
  }
`;

const AboutMe = () => {
  return (
    
    <>
  

   
    <AboutContainer id="about">
      <AboutTitle>Meet Tozo</AboutTitle>
      <AboutDescription>
      As a full-stack software engineer, I'm fueled by my passion for helping and contributing to the tech world and start-up businesses. With a strong foundation in web development, I strive to create innovative solutions and seamless user experiences. I love tackling complex challenges and delivering high-quality results, from building scalable web applications to optimizing database performance. My goal is to shape the future of technology by turning innovative ideas into scalable solutions that have a meaningful impact. Let's join forces and build something amazing together!
       </AboutDescription>
      <AboutTitle>Tozo's Skills</AboutTitle>
      <SkillsContainer>
        <BouncingIcon>
          <SiHtml5 size={32} color="#E34F26" />
        </BouncingIcon>
        <BouncingIcon>
          <SiCss3 size={32} color="#1572B6" />
        </BouncingIcon>
        <BouncingIcon>
          <SiJavascript size={32} color="#F7DF1E" />
        </BouncingIcon>
        <BouncingIcon name="MongoDB">
          <SiMongodb size={32} />
        </BouncingIcon>
        <BouncingIcon name="Postman">
          <SiPostman size={32} />
        </BouncingIcon>


        <BouncingIcon name="Bootstrap">
          <SiBootstrap size={32} />
        </BouncingIcon>
        <BouncingIcon name="Tailwind CSS">
          <SiTailwindcss size={32} />
        </BouncingIcon>
        <BouncingIcon name="Git">
          <SiGit size={32} />
        </BouncingIcon>
        <BouncingIcon name="Sass">
          <SiSass size={32} />
        </BouncingIcon>
        <BouncingIcon name="PHP">
          <SiPhp size={32} />
        </BouncingIcon>
        <BouncingIcon name="React">
          <SiReact size={32} />
        </BouncingIcon>
      </SkillsContainer>
    </AboutContainer>

   </>
  );
};

export default AboutMe;
