import React from 'react';
import styled, { keyframes, ThemeProvider  } from 'styled-components';
import { SiHtml5, SiCss3, SiJavascript, SiMongodb, SiPostman, SiNodeDotJs, SiNextDotJs, SiBootstrap, SiTailwindcss, SiGit, SiSass, SiPhp, SiReact } from 'react-icons/si';
import { DarkBackground, LightBackground } from './DarkBackground';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';

const theme = {
  background: {
    light: '#f5f5f5',
    dark: '#1a1a1a',
    deep: '#607d8b'
  },
};

const LightTheme = styled.div`
background: ${props => props.theme.background.light};
`
const DarkTheme = styled.div`
background: ${props => props.theme.background.dark};
`
const DeepTheme = styled.div`
background: ${props => props.theme.background.deep};
`

const AboutContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 85vh;

`;
//   padding: 40px;
//   background-color: #607d8b;
// `;
// background: ${props => props.theme.background.light};
// color: ${props => props.theme.text};

const AboutTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
`;

const AboutDescription = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 24px;
  line-height: 2rem;
  text-align: center;
  width: fit-content(10em);
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  margin-bottom: 15px;

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


`;

const AboutMe = () => {
  return (
    
    <>
      {/* <ThemeProvider theme={theme}>
        <LightTheme>
       
    
        </LightTheme>
        <DarkTheme>
        
        </DarkTheme>
       
        <DeepTheme>
      <p>Welcome</p>
        </DeepTheme>
      </ThemeProvider> */}
      {/* <Footer /> */}
   <DarkBackground /> 
    <ResponsiveNavbar />
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutDescription>
      As a full-stack software engineer, I'm fueled by my passion for helping and contributing to the tech world and start-up businesses. With a strong foundation in web development, I strive to create innovative solutions and seamless user experiences. I love tackling complex challenges and delivering high-quality results, from building scalable web applications to optimizing database performance. My goal is to shape the future of technology by turning innovative ideas into scalable solutions that have a meaningful impact. Let's join forces and build something amazing together!
       </AboutDescription>
      <AboutTitle>My Skills</AboutTitle>
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
    <Footer />
   </>
  );
};

export default AboutMe;