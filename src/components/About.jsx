import React from "react";
import styled, { keyframes } from "styled-components";
import {
  SiJsonwebtokens,
  SiMysql,
  SiNginx,
  SiDocker,
  SiTypescript,
  SiExpress,
  SiFirebase,
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
import image_400 from "../assets/image-400.jpg";
import image_600 from "../assets/image-600.jpg";
import image_800 from "../assets/image-800.jpg";

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  word-break: normal;
  padding: 2rem;
  margin: 1.5rem 0;
  background-color: var(--gunmetal);

  @media screen and (min-width: 768px) {
    margin-top: 2rem;
    padding-top: 2.5rem;
    gap: 1rem;
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
  color: var(--accent-color);

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Adjust input styles for the targeted screen sizes */
    padding: 8px;
    font-size: 18px;
  }
`;

const AboutDescription = styled.p`
  flex: 2;
  font-size: 18px;
  color: var(--white);
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
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  color: var(--anti-flash-white);

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

const ImageCard = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 1.5rem;
    max-width: 80%;
    padding-top: 1.5rem;

    img {
      width: 80%;
    }
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
  flex-wrap: wrap;
  margin: 10px;
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
      default:
        return "#FFF";
    }
  }};
  padding: 20px;
  border-radius: 50%;
  animation: ${bounceAnimation} 2s infinite;

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Adjust input styles for the targeted screen sizes */
    margin: 0.5rem 0.75rem;
    padding: 10px;
  }
`;

const AboutMe = () => {
  return (
    <>
      <AboutContainer id="about">
        <ImageCard>
          <img
            src={image_400}
            srcSet={`
        ${image_400} 400w, 
        ${image_600} 600w,
        ${image_800} 800w,
        ${image_800} 1200w,
        `}
            sizes="
      (max-width: 600px) 200px,
      (max-width: 900) 200px,
      (max-width: 1200px) 200px,
      (max-width: 1600px) 200px,
      (max-width: 1920px) 200px,   
      (min-width: 1921px) 200px    
      "
            alt="Responsive Tozo's Logo"
            style={{
              maxWidth: "100%",
              height: "auto",
              mixBlendMode: "inherit",
              opacity: "0.7",
            }}
            // width={150}
          />
        </ImageCard>

        <AboutTitle>Meet Tozo</AboutTitle>
        <AboutDescription>
          As a full-stack software engineer, I'm fueled by my passion for
          helping and contributing to the tech world and start-up businesses.
          With a strong foundation in web development, I strive to create
          innovative solutions and seamless user experiences. I love tackling
          complex challenges and delivering high-quality results, from building
          scalable web applications to optimizing database performance. My goal
          is to shape the future of technology by turning innovative ideas into
          scalable solutions that have a meaningful impact. Let's join forces
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

          <BouncingIcon name="express">
            <SiExpress size={32} color="#000" />
          </BouncingIcon>

          <BouncingIcon name="Nginx">
            <SiNginx size={32} color="#009639" />
          </BouncingIcon>

          <BouncingIcon name="docker">
            <SiDocker size={32} color="#2496ED" />
          </BouncingIcon>

          <BouncingIcon name="Git">
            <SiGit size={32} name="git" />
          </BouncingIcon>

          <BouncingIcon name="firebase">
            <SiFirebase size={32} color="#FFCA28" />
          </BouncingIcon>

          {/* <BouncingIcon name="jwt">
            <SiJsonwebtokens size={32} color="#872EC6" />
          </BouncingIcon> */}

          <BouncingIcon name="PHP">
            <SiPhp size={32} />
          </BouncingIcon>
        </SkillsContainer>
      </AboutContainer>
    </>
  );
};

export default AboutMe;
