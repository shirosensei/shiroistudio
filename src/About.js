import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SiHtml5, SiCss3, SiJavascript, SiMongodb, SiPostman, SiNodeDotJs, SiNextDotJs, SiBootstrap, SiTailwindcss, SiGit, SiSass, SiPhp, SiReact } from 'react-icons/si';
import { DarkBackground, LightBackground } from './DarkBackground';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';

const AboutContainer = styled.div`
  padding: 40px;
  background-color: #607d8b;
`;

const AboutTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`;

const AboutDescription = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 24px;
  line-height: 25px;
  font-family: monospace;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SkillsIcon = styled.div`
  font-size: 48px;
  margin: 0 16px;
  color: black;
`;

// Define the bounce animation
const bounceAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// // Styled component for the icon with animation
// const BouncingIcon = styled.div`
//   animation: ${bounceAnimation} 2s infinite;
// `;

const BouncingIcon = styled.div`
  display: inline-block;
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
`;

const AboutMe = () => {
  return (
    
    <><DarkBackground /><ResponsiveNavbar /><AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutDescription>
        As a full stack software engineer, I'm fueled by my passion for start-up businesses and the ever-evolving tech world.
        I thrive on turning innovative ideas into scalable solutions that have a meaningful impact. With a strong foundation in web
        development and a constant drive to learn, I'm dedicated to crafting exceptional digital experiences that push boundaries
        and drive success. Let's build something amazing together!
      </AboutDescription>
      <AboutTitle>My Skills</AboutTitle>
      <SkillsContainer>
        {/* <SkillsIcon><SiHtml5 /></SkillsIcon>
      <SkillsIcon><SiCss3 /></SkillsIcon>
      <SkillsIcon><SiJavascript /></SkillsIcon> */}
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
    </AboutContainer><Footer /></>
  );
};

export default AboutMe;
