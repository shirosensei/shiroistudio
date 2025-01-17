import React from "react";
import styled, { keyframes } from "styled-components";
import {
  SiMysql,
  SiNginx,
  SiDocker,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiPhp,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

const AboutContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.larger} 0;
  margin: ${({ theme }) => theme.spacing.large} 0;
  padding-bottom: ${({ theme }) => theme.spacing.larger};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gunmetal};
  background-color: transparent;
`;

const AboutTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom:  ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.text};


`;

const AboutDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.larger};
  line-height: 1.6;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 1;
  padding-bottom: ${({ theme }) => theme.spacing.large};;
  color: ${({ theme }) => theme.colors.text};
`;



// Define the bounce animation
const bounceAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;


const BouncingIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme}) => theme.spacing.small};
  background-color: ${({ name }) => {
    switch (name) {
      case "MongoDB":
        return "#47A248";
      case "Postman":
        return "#FF6C37";
      case "Node.js":
        return "#83CD29";
      case "Next.js":
        return "#000000";
      case "Bootstrap":
        return "#7952B3";
      case "Tailwind CSS":
        return "#06B6D4";
      case "Git":
        return "#F05032";
      case "Sass":
        return "#CC6699";
      case "PHP":
        return "#777BB4";
      case "React":
        return "#61DAFB";
        case "Docker":
          return "#2496ED";
      default:
        return "#FFF";
    }
  }};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 50%;
  animation: ${bounceAnimation} 2s infinite;

    &:hover {
    animation: ${rotateAnimation} 1s linear infinite;
  }
`;

const AboutMe = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutTitle>Meet Tozo</AboutTitle>
        <AboutDescription>
          I am a full-stack software engineer, I'm fueled by my passion for
          helping and contributing to the tech industry and start-up businesses.
          <br /><br />
          I have a strong foundation in web development, I strive to create
          innovative solutions and seamless user experiences.<br /><br /> I love tackling
          complex challenges and delivering high-quality results, from building
          scalable web applications to optimizing database performance.<br /><br /> My goal
          is to shape the future of technology by turning innovative ideas into
          scalable solutions that have a meaningful impact. <br /><br />Let's join forces
          and build something amazing together!
        </AboutDescription>
        <AboutTitle>Tozo's Skills</AboutTitle>
        <SkillsContainer>
          <BouncingIcon>
            <SiHtml5 size={32} color="#E34F26" />
          </BouncingIcon>

          <BouncingIcon>
            <SiCss3 size={32} color="#1572B6" />
          </BouncingIcon>

          <BouncingIcon name="Bootstrap">
            <SiBootstrap size={32} />
          </BouncingIcon>

          <BouncingIcon name="Tailwind CSS">
            <SiTailwindcss size={32} />
          </BouncingIcon>

          <BouncingIcon>
            <SiJavascript size={32} color="#F7DF1E" />
          </BouncingIcon>

          <BouncingIcon name="typescript">
            <SiTypescript size={32} color="#3178C6" />
          </BouncingIcon>

          <BouncingIcon name="React">
            <SiReact size={32} />
          </BouncingIcon>

          <BouncingIcon name="MongoDB">
            <SiMongodb size={32} />
          </BouncingIcon>

          <BouncingIcon name="mysql">
            <SiMysql size={32} color="#00758F" />
          </BouncingIcon>

          <BouncingIcon name="Postman">
            <SiPostman size={32} />
          </BouncingIcon>

          <BouncingIcon name="nodejs">
            <SiNodedotjs size={32} color="#008000" />
          </BouncingIcon>

          {/* <BouncingIcon name="express">
            <SiExpress size={32} color="#000" />
          </BouncingIcon> */}

          <BouncingIcon name="Nginx">
            <SiNginx size={32} color="#009639" />
          </BouncingIcon>

          <BouncingIcon name="docker">
            <SiDocker size={32} color="#2496ED" />
          </BouncingIcon>

          <BouncingIcon name="Git">
            <SiGit size={32} name="git" />
          </BouncingIcon>

          <BouncingIcon name="PHP">
            <SiPhp size={32} />
          </BouncingIcon>
        </SkillsContainer>
      </AboutContainer>
    </>
  );
};

export default AboutMe;
